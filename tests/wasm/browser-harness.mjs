import { createHash } from 'node:crypto'

const hash = source => createHash('sha256').update(source).digest('hex')
function target(log, name) {
  const handlers = new Map()
  return {
    addEventListener(type, fn) { log.push([name, 'add', type]); handlers.set(type, fn) },
    removeEventListener(type, fn) { log.push([name, 'remove', type, handlers.get(type) === fn]); if (handlers.get(type) === fn) handlers.delete(type) },
    fire(type, event) { handlers.get(type)?.(event) },
    count() { return handlers.size },
  }
}

export function rendererTrace(create, failure = '') {
  const log = [], frames = new Map(), observers = []
  let now = 0, nextFrame = 0, shaderId = 0
  const record = (name, args) => log.push([name, ...args.map(x => x?.id ?? x)])
  const gl = {
    VERTEX_SHADER: 0x8B31, FRAGMENT_SHADER: 0x8B30, COMPILE_STATUS: 0x8B81,
    LINK_STATUS: 0x8B82, ARRAY_BUFFER: 0x8892, STATIC_DRAW: 0x88E4, FLOAT: 0x1406, TRIANGLES: 4,
    createShader(kind) { record('createShader', [kind]); return failure === 'shader-null' ? null : { id: `shader-${++shaderId}` } },
    shaderSource(shader, source) { record('shaderSource', [shader, hash(source)]) },
    getShaderParameter(shader, kind) { record('getShaderParameter', [shader, kind]); if (failure === 'shader-throw') throw new Error('driver'); return failure !== 'shader-compile' },
    createProgram() { record('createProgram', []); return failure === 'program-null' ? null : { id: 'program' } },
    getProgramParameter(program, kind) { record('getProgramParameter', [program, kind]); return failure !== 'program-link' },
    createBuffer() { record('createBuffer', []); return failure === 'buffer-null' ? null : { id: 'buffer' } },
    bufferData(kind, data, usage) { record('bufferData', [kind, [...data], usage]) },
    getAttribLocation(program, name) { record('getAttribLocation', [program, name]); return 3 },
    getUniformLocation(program, name) { record('getUniformLocation', [program, name]); return failure === 'uniform-null' ? null : { id: name } },
  }
  for (const name of ['compileShader', 'attachShader', 'linkProgram', 'bindBuffer', 'useProgram', 'enableVertexAttribArray', 'vertexAttribPointer', 'viewport', 'uniform2f', 'uniform1f', 'drawArrays', 'deleteBuffer', 'deleteShader', 'deleteProgram']) gl[name] = (...args) => record(name, args)
  const canvas = { ...target(log, 'canvas'), style: {}, width: 0, height: 0,
    rect: { width: 640.4, height: 360.6 },
    getContext(type, options) { log.push(['getContext', type, options]); return failure === 'no-webgl' ? null : gl },
    getBoundingClientRect() { return this.rect },
  }
  const document = { ...target(log, 'document'), hidden: false }
  const media = { ...target(log, 'media'), matches: failure === 'reduced', media: '(prefers-reduced-motion: reduce)' }
  const raf = fn => { const id = ++nextFrame; frames.set(id, fn); log.push(['requestAnimationFrame', id]); return id }
  const cancel = id => { log.push(['cancelAnimationFrame', id]); frames.delete(id) }
  const matchMedia = query => { log.push(['matchMedia', query]); return media }
  Object.assign(globalThis, { document, window: { requestAnimationFrame: raf, cancelAnimationFrame: cancel, matchMedia }, requestAnimationFrame: raf, cancelAnimationFrame: cancel, matchMedia,
    ResizeObserver: class { constructor(fn) { this.fn = fn; observers.push(this); log.push(['ResizeObserver']) } observe(node) { log.push(['observe', node === canvas]) } disconnect() { log.push(['disconnectObserver']) } },
  })
  Object.defineProperty(globalThis, 'performance', { value: { now: () => now }, configurable: true })
  const renderer = create(canvas, () => log.push(['unavailable']))
  if (!renderer) return { log, available: false }
  const step = time => { now = time; const pending = [...frames.values()]; frames.clear(); for (const fn of pending) fn(time) }
  const params = { scene: 'mist', speed: 'local', moving: true, travelling: true, windowOpen: false }
  renderer.update(params)
  for (const t of [10, 42, 70, 100, 1000]) step(t)
  renderer.update({ ...params, speed: 'express', scene: 'night' })
  step(1100)
  document.hidden = true; document.fire('visibilitychange'); step(2000)
  document.hidden = false; document.fire('visibilitychange'); step(2050)
  media.matches = true; media.fire('change'); step(2100)
  media.matches = false; media.fire('change')
  renderer.update({ ...params, speed: 'rapid', scene: 'dawn', moving: false, travelling: false })
  step(2200)
  canvas.rect = { width: 0.1, height: 50.5 }; observers[0].fn([], observers[0])
  renderer.update(params)
  step(2250)
  canvas.fire('webglcontextlost', { preventDefault() { log.push(['preventDefault']) } })
  step(2400)
  renderer.dispose()
  return { log, available: true, width: canvas.width, height: canvas.height, opacity: canvas.style.opacity, frames: frames.size, listeners: canvas.count() + media.count() + document.count() }
}

export async function soundTrace(construct, mode = '') {
  const log = [], nodes = [], buffers = [], intervals = new Map()
  let nodeId = 0, intervalId = 0, ctx, seed = 42
  const oldRandom = Math.random
  Math.random = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 2 ** 32 }
  const parameter = name => ({
    set value(value) { log.push([name, 'value', value]) },
    setTargetAtTime(...args) { log.push([name, 'target', ...args]) },
    setValueAtTime(...args) { log.push([name, 'at', ...args]) },
    exponentialRampToValueAtTime(...args) { log.push([name, 'ramp', ...args]) },
  })
  const node = kind => {
    const id = `${kind}-${++nodeId}`
    log.push(['create', id])
    const result = { id, connect(destination) { log.push([id, 'connect', destination.id]); return destination }, disconnect() { log.push([id, 'disconnect']) }, start(...args) { log.push([id, 'start', ...args]) }, stop(...args) { log.push([id, 'stop', ...args]) } }
    for (const key of ['gain', 'frequency', 'Q', 'threshold', 'ratio']) result[key] = parameter(`${id}.${key}`)
    for (const key of ['type', 'loop', 'buffer']) Object.defineProperty(result, key, { set(value) { log.push([id, key, value?.id ?? value]) } })
    nodes.push(result)
    return result
  }
  const clear = id => { if (id !== undefined) { log.push(['clearInterval', id]); intervals.delete(id) } }
  Object.assign(globalThis, { window: {
    setInterval(fn, delay) { const id = ++intervalId; intervals.set(id, fn); log.push(['setInterval', id, delay]); return id }, clearInterval: clear,
  }, clearInterval: clear,
  AudioContext: class {
    constructor() { ctx = this; this.sampleRate = 8; this.currentTime = 0; this.state = 'suspended'; this.destination = { id: 'destination' }; log.push(['AudioContext']) }
    createGain() { return node('gain') } createDynamicsCompressor() { return node('compressor') }
    createBiquadFilter() { return node('filter') } createBufferSource() { return node('source') } createOscillator() { return node('oscillator') }
    createBuffer(channels, length, rate) { log.push(['createBuffer', channels, length, rate]); const data = Array.from({ length: channels }, () => new Float32Array(length)); buffers.push(data); return { id: 'noise', getChannelData: channel => data[channel] } }
    async resume() { log.push(['resume']); if (mode === 'resume-reject') throw new Error('denied'); this.state = mode === 'unavailable' ? 'suspended' : 'running' }
    async suspend() { log.push(['suspend']); this.state = 'suspended' }
    async close() { log.push(['close']); if (mode === 'close-reject') throw new Error('closed'); this.state = 'closed' }
  } })
  let error = null
  try {
    const sound = construct()
    const preferences = { trainVolume: 45, rainVolume: 20, windVolume: 50, speed: 'local' }
    sound.update(preferences, true, false)
    try { await sound.enable() } catch (e) { error = e.message }
    if (!error) {
      const tick = time => { ctx.currentTime = time; for (const fn of intervals.values()) fn() }
      for (const time of [0.01, 0.1, 0.4, 1.0, 5.0]) tick(time)
      sound.update({ ...preferences, speed: 'express' }, false, true); tick(5.1)
      sound.update({ ...preferences, speed: 'rapid' }, true, true); tick(5.4)
      await sound.enable(); tick(5.5)
      for (const source of nodes) source.onended?.()
      await sound.disable(); await sound.disable()
    }
    sound.dispose()
    await Promise.resolve()
  } finally { Math.random = oldRandom }
  return { log, samples: buffers.map(channels => channels.map(samples => [...samples])), intervals: intervals.size, error }
}

export function storageTrace(read, write) {
  const values = new Map(), log = []
  let blocked = false
  globalThis.localStorage = {
    getItem(key) { if (blocked) throw new Error('blocked'); log.push(['get', key]); return values.get(key) ?? null },
    setItem(key, value) { if (blocked) throw new Error('blocked'); log.push(['set', key, String(value)]); values.set(key, String(value)) },
  }
  const fallback = { fallback: true }, valid = value => value?.ok === true
  const results = []
  results.push(read('missing', fallback, valid) === fallback)
  for (const value of ['', '{broken', 'null', '{"ok":false}', '{"ok":true}']) {
    values.set('value', value); results.push(read('value', fallback, valid))
  }
  results.push(read('value', fallback, () => { throw new Error('validator') }) === fallback)
  results.push(write('saved', { ok: true, note: '読書' }))
  results.push(write('undefined', undefined))
  const cyclic = {}; cyclic.self = cyclic; results.push(write('cyclic', cyclic))
  blocked = true
  results.push(read('blocked', fallback, valid) === fallback, write('blocked', 1))
  return { log, results }
}
