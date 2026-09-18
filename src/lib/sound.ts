import type { Preferences } from './journey'

/** Locally synthesized ambience: no recordings, streaming, or external requests. */
export class TrainSound {
  private context: AudioContext
  private master: GainNode
  private train: GainNode
  private rain: GainNode
  private wind: GainNode
  private cabin: BiquadFilterNode
  private noise: AudioBuffer
  private sources: (AudioBufferSourceNode | OscillatorNode)[] = []
  private scheduler: number | undefined
  private nextBeat = 0
  private beat = 0
  private moving = true
  private period = 1.9

  constructor() {
    this.context = new AudioContext()
    const ctx = this.context
    this.master = ctx.createGain()
    this.master.gain.value = 0
    const compressor = ctx.createDynamicsCompressor()
    compressor.threshold.value = -18
    compressor.ratio.value = 4
    this.master.connect(compressor).connect(ctx.destination)

    this.noise = ctx.createBuffer(2, ctx.sampleRate * 5, ctx.sampleRate)
    for (let channel = 0; channel < 2; channel++) {
      const data = this.noise.getChannelData(channel)
      let brown = 0
      for (let i = 0; i < data.length; i++) {
        const white = Math.random() * 2 - 1
        brown = (brown + 0.025 * white) / 1.025
        data[i] = white * 0.35 + brown * 1.8
      }
    }

    this.cabin = ctx.createBiquadFilter()
    this.cabin.type = 'lowpass'
    this.cabin.frequency.value = 850
    this.cabin.Q.value = 0.4
    this.train = this.noiseLayer('lowpass', 220, this.cabin)
    this.cabin.connect(this.master)
    this.rain = this.noiseLayer('highpass', 1400, this.master)
    this.wind = this.noiseLayer('bandpass', 360, this.master)

    for (const frequency of [49, 73]) {
      const oscillator = ctx.createOscillator()
      oscillator.frequency.value = frequency
      const gain = ctx.createGain()
      gain.gain.value = 0.035
      oscillator.connect(gain).connect(this.train)
      oscillator.start()
      this.sources.push(oscillator)
    }
  }

  private noiseLayer(type: BiquadFilterType, frequency: number, destination: AudioNode) {
    const source = this.context.createBufferSource()
    source.buffer = this.noise
    source.loop = true
    const filter = this.context.createBiquadFilter()
    filter.type = type
    filter.frequency.value = frequency
    filter.Q.value = 0.5
    const gain = this.context.createGain()
    gain.gain.value = 0
    source.connect(filter).connect(gain).connect(destination)
    source.start(0, Math.random() * 4)
    this.sources.push(source)
    return gain
  }

  async enable() {
    await this.context.resume()
    if (this.context.state !== 'running') throw new Error('audio-unavailable')
    this.master.gain.setTargetAtTime(0.7, this.context.currentTime, 0.4)
    this.nextBeat = this.context.currentTime + 0.1
    this.beat = 0
    if (this.scheduler === undefined) this.scheduler = window.setInterval(() => this.schedule(), 80)
  }

  async disable() {
    this.master.gain.setTargetAtTime(0, this.context.currentTime, 0.1)
    clearInterval(this.scheduler)
    this.scheduler = undefined
    await this.context.suspend()
  }

  update(preferences: Preferences, moving: boolean, windowOpen: boolean) {
    const t = this.context.currentTime
    this.moving = moving
    this.period = { local: 1.9, rapid: 1.4, express: 1.05 }[preferences.speed]
    this.train.gain.setTargetAtTime(preferences.trainVolume / 100 * (moving ? 0.65 : 0.07), t, 0.7)
    this.rain.gain.setTargetAtTime(preferences.rainVolume / 100 * (windowOpen ? 0.32 : 0.16), t, 0.7)
    this.wind.gain.setTargetAtTime(preferences.windVolume / 100 * (windowOpen ? 0.55 : 0.12) * (moving ? 1 : 0.3), t, 0.7)
    this.cabin.frequency.setTargetAtTime(windowOpen ? 2600 : 850, t, 0.7)
  }

  private schedule() {
    const now = this.context.currentTime
    if (!this.moving) { this.nextBeat = now + 0.1; return }
    if (this.nextBeat < now) this.nextBeat = now + 0.02
    while (this.nextBeat < now + 0.18) {
      this.clack(this.nextBeat, this.beat % 2 === 0 ? 0.32 : 0.22)
      this.nextBeat += this.period * [0.16, 0.34, 0.16, 0.34][this.beat % 4]
      this.beat++
    }
  }

  private clack(time: number, strength: number) {
    const ctx = this.context
    const noise = ctx.createBufferSource()
    noise.buffer = this.noise
    const filter = ctx.createBiquadFilter()
    filter.type = 'bandpass'
    filter.frequency.value = 330
    filter.Q.value = 0.8
    const envelope = ctx.createGain()
    envelope.gain.setValueAtTime(0.001, time)
    envelope.gain.exponentialRampToValueAtTime(strength, time + 0.012)
    envelope.gain.exponentialRampToValueAtTime(0.001, time + 0.16)
    noise.connect(filter).connect(envelope).connect(this.train)
    noise.start(time, Math.random() * 4)
    noise.stop(time + 0.18)
    noise.onended = () => { noise.disconnect(); filter.disconnect(); envelope.disconnect() }
  }

  dispose() {
    clearInterval(this.scheduler)
    this.sources.forEach(source => { source.stop(); source.disconnect() })
    void this.context.close().catch(() => {})
  }
}
