///|
enum Source {
  Noise(@audio.AudioBufferSourceNode)
  Tone(@audio.OscillatorNode)
}

///|
pub struct Sound {
  context : @audio.AudioContext
  master : @audio.GainNode
  train : @audio.GainNode
  rain : @audio.GainNode
  wind : @audio.GainNode
  cabin : @audio.BiquadFilterNode
  noise : @audio.AudioBuffer
  sources : Array[Source]
  mut scheduler : Int?
  mut next_beat : Double
  mut beat : Int
  mut moving : Bool
  mut period : Double
}

///|
fn noise_layer(
  context : @audio.AudioContext,
  noise : @audio.AudioBuffer,
  sources : Array[Source],
  kind : String,
  frequency : Double,
  destination : @audio.AudioNode,
) -> @audio.GainNode {
  let source = context.create_source()
  source.set_buffer(noise)
  source.set_loop(true)
  let filter = context.create_filter()
  filter.set_type(kind)
  filter.frequency().set_value(frequency)
  filter.q().set_value(0.5)
  let gain = context.create_gain()
  gain.gain().set_value(0.0)
  source
  .as_node()
  .connect(filter.as_node())
  .connect(gain.as_node())
  .connect(destination)
  |> ignore
  source.start(0.0, @math.Math::random() * 4.0)
  sources.push(Noise(source))
  gain
}

///|
pub fn create_sound() -> Sound {
  let context = @audio.AudioContext()
  let master = context.create_gain()
  master.gain().set_value(0.0)
  let compressor = context.create_compressor()
  compressor.threshold().set_value(-18.0)
  compressor.ratio().set_value(4.0)
  master.as_node().connect(compressor.as_node()).connect(context.destination())
  |> ignore
  let noise = context.create_buffer(
    2,
    (context.sample_rate() * 5.0).to_int(),
    context.sample_rate(),
  )
  for channel in 0..<2 {
    let data = noise.channel(channel)
    let mut brown = 0.0
    for i in 0..<data.length() {
      let (next, value) = @domain.noise_sample(brown, @math.Math::random())
      brown = next
      data.set(i, value)
    }
  }
  let sources = []
  let cabin = context.create_filter()
  cabin.set_type("lowpass")
  cabin.frequency().set_value(850.0)
  cabin.q().set_value(0.4)
  let train = noise_layer(
    context,
    noise,
    sources,
    "lowpass",
    220.0,
    cabin.as_node(),
  )
  cabin.as_node().connect(master.as_node()) |> ignore
  let rain = noise_layer(
    context,
    noise,
    sources,
    "highpass",
    1400.0,
    master.as_node(),
  )
  let wind = noise_layer(
    context,
    noise,
    sources,
    "bandpass",
    360.0,
    master.as_node(),
  )
  for frequency in [49.0, 73.0] {
    let oscillator = context.create_oscillator()
    oscillator.frequency().set_value(frequency)
    let gain = context.create_gain()
    gain.gain().set_value(0.035)
    oscillator.as_node().connect(gain.as_node()).connect(train.as_node())
    |> ignore
    oscillator.start()
    sources.push(Tone(oscillator))
  }
  {
    context,
    master,
    train,
    rain,
    wind,
    cabin,
    noise,
    sources,
    scheduler: None,
    next_beat: 0.0,
    beat: 0,
    moving: true,
    period: 1.9,
  }
}

///|
pub fn Sound::enable(self : Sound) -> @js.Promise[Unit] {
  self.context
  .resume_()
  .then(fn(_) {
    if self.context.state() != "running" {
      @js.throw_error("audio-unavailable")
    }
    self.master.gain().target(0.7, self.context.current_time(), 0.4)
    self.next_beat = self.context.current_time() + 0.1
    self.beat = 0
    if self.scheduler is None {
      self.scheduler = Some(
        @dom.window().setInterval(fn() { self.schedule() }, 80),
      )
    }
    @js.Promise::resolve(())
  })
}

///|
pub fn Sound::disable(self : Sound) -> @js.Promise[Unit] {
  self.master.gain().target(0.0, self.context.current_time(), 0.1)
  if self.scheduler is Some(id) {
    @dom.window().clearInterval(id)
  }
  self.scheduler = None
  self.context.suspend()
}

///|
pub fn Sound::update(
  self : Sound,
  mix : @domain.SoundMix,
  moving : Bool,
) -> Unit {
  let now = self.context.current_time()
  self.moving = moving
  self.period = mix.period
  self.train.gain().target(mix.train, now, 0.7)
  self.rain.gain().target(mix.rain, now, 0.7)
  self.wind.gain().target(mix.wind, now, 0.7)
  self.cabin.frequency().target(mix.cabin, now, 0.7)
}

///|
fn Sound::schedule(self : Sound) -> Unit {
  let now = self.context.current_time()
  if !self.moving {
    self.next_beat = now + 0.1
    return
  }
  if self.next_beat < now {
    self.next_beat = now + 0.02
  }
  while self.next_beat < now + 0.18 {
    let (strength, step) = @domain.beat_step(self.period, self.beat)
    self.clack(self.next_beat, strength)
    self.next_beat += step
    self.beat += 1
  }
}

///|
fn Sound::clack(self : Sound, time : Double, strength : Double) -> Unit {
  let noise = self.context.create_source()
  noise.set_buffer(self.noise)
  let filter = self.context.create_filter()
  filter.set_type("bandpass")
  filter.frequency().set_value(330.0)
  filter.q().set_value(0.8)
  let envelope = self.context.create_gain()
  envelope.gain().at_time(0.001, time)
  envelope.gain().exponential_ramp(strength, time + 0.012)
  envelope.gain().exponential_ramp(0.001, time + 0.16)
  noise
  .as_node()
  .connect(filter.as_node())
  .connect(envelope.as_node())
  .connect(self.train.as_node())
  |> ignore
  noise.start(time, @math.Math::random() * 4.0)
  noise.stop(time + 0.18)
  noise.on_ended(fn() {
    noise.as_node().disconnect()
    filter.as_node().disconnect()
    envelope.as_node().disconnect()
  })
}

///|
pub fn Sound::dispose(self : Sound) -> Unit {
  if self.scheduler is Some(id) {
    @dom.window().clearInterval(id)
  }
  for source in self.sources {
    match source {
      Noise(node) => {
        node.stop_now()
        node.as_node().disconnect()
      }
      Tone(node) => {
        node.stop()
        node.as_node().disconnect()
      }
    }
  }
  self.context.close().catch_(fn(_) { @js.Promise::resolve(()) }) |> ignore
}
