import type { LandscapeProps } from '../components/Landscape'

const vertexSource = `
attribute vec2 a_position;
void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
`

// Continuous world coordinates give each depth its own right-to-left travel speed.
// The finished landscape is stippled in screen space, keeping the paper grain still.
const fragmentSource = `
precision highp float;
uniform vec2 u_resolution;
uniform float u_time;
uniform float u_travel;
uniform float u_scene;
float hash(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * .1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}
float noise(float x) {
  float i = floor(x);
  float f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(hash(vec2(i, 19.0)), hash(vec2(i + 1.0, 19.0)), f);
}
float ridge(float x) {
  return noise(x) * .64 + noise(x * 2.13 + 8.0) * .25
       + noise(x * 5.37 + 30.0) * .085 + noise(x * 13.1) * .025;
}
float below(float y, float height, float softness) {
  return 1.0 - smoothstep(height - softness, height + softness, y);
}
// Uneven tiers and individual heights keep the conifers from reading as a pattern.
float forest(vec2 p, float spacing, float height, float seed, float softness) {
  float cell = floor(p.x / spacing);
  float shape = 0.0;
  for (int i = -1; i <= 1; i++) {
    float id = cell + float(i);
    float random = hash(vec2(id, seed));
    float center = (id + .25 + random * .5) * spacing;
    float h = height * (.48 + .65 * hash(vec2(id, seed + 7.0)));
    float base = -.015 + .035 * noise(id * .41 + seed);
    float y = (p.y - base) / h;
    float localX = p.x - center + y * y * h * (random - .5) * .055;
    float width = h * .19 * pow(max(0.0, 1.0 - y), .95);
    float branches = .80 + .16 * sin(y * (72.0 + random * 27.0) + random * 9.0 + sign(localX) * 1.6)
                         + .04 * sin(y * 231.0 + random * 11.0);
    float crown = (1.0 - smoothstep(width * branches - softness, width * branches + softness, abs(localX)))
                * smoothstep(-.03, .06, y) * (1.0 - smoothstep(.97, 1.0, y));
    float trunk = (1.0 - smoothstep(h * .012, h * .012 + softness, abs(p.x - center)))
                * below(p.y, base + h * .8, softness) * smoothstep(-.07, base, p.y);
    shape = max(shape, max(crown, trunk));
  }
  return shape;
}
void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float aspect = u_resolution.x / u_resolution.y;
  float x = uv.x * aspect;
  float t = u_time;
  float y = uv.y;
  float value = mix(.81, .975, smoothstep(.35, 1.0, y));
  float cloud = noise(x * 2.1 + t * .008 + y * 3.0) * noise(y * 9.0 + x * .3);
  value -= cloud * .045;

  // The far ridges remain almost still while the nearer slopes slide past them.
  float farX = x + t * .012;
  float farRidge = .50 + .30 * ridge(farX * 1.7 + 12.0);
  float farTone = .64 + .11 * (1.0 - smoothstep(.46, .77, y));
  value = mix(value, farTone, below(y, farRidge, .005));

  float hillX = x + t * .032;
  float hillRidge = .40 + .28 * ridge(hillX * 2.0 + 35.0);
  float hillTone = .43 + .22 * (1.0 - smoothstep(.37, .64, y));
  hillTone += (noise(hillX * 22.0 + y * 5.0) - .5) * .028;
  value = mix(value, hillTone, below(y, hillRidge, .003));

  float woodX = x + t * .085;
  float woodRidge = .30 + .18 * ridge(woodX * 2.8 + 71.0);
  float woods = forest(vec2(woodX, y - woodRidge), .027, .063, 4.0, .0018);
  float woodTone = .28 + .22 * (1.0 - smoothstep(.27, .48, y));
  value = mix(value, woodTone, max(woods, below(y, woodRidge, .003)));

  // A pale valley separates the near trees from the mountains without a hard horizon.
  float fog = exp(-pow((y - .335) / .075, 2.0));
  value = mix(value, .76, fog * .64);
  float fieldX = x + t * .15;
  float field = .20 + .10 * ridge(fieldX * 2.3 + 5.0);
  float fieldTone = .40 + .14 * noise(fieldX * 3.0 + y * 12.0);
  value = mix(value, fieldTone, below(y, field, .012));

  float nearX = x + t * .24;
  float nearBase = .11 + .075 * ridge(nearX * 2.4 + 6.0);
  float nearTrees = forest(vec2(nearX, y - nearBase), .10, .20, 23.0, .0017);
  value = mix(value, .16 + y * .16, nearTrees * .94);
  value = mix(value, .16, below(y, nearBase, .008));

  // Sparse close trees cross the window in seconds; their edges soften with motion.
  float closeX = x + t * .62;
  float closeBase = -.035 + .055 * ridge(closeX * 1.8 + 9.0);
  float closeTrees = forest(vec2(closeX, y - closeBase), .73, .49, 51.0, .0035);
  value = mix(value, .052 + y * .065, closeTrees);
  float bank = .045 + .035 * ridge(closeX * 4.0);
  value = mix(value, .055, below(y, bank, .012));

  if (u_scene > .5 && u_scene < 1.5) value = mix(value, 1.0, .16);
  if (u_scene > 1.5) value = value * .37 + .01;
  float cycle = mod(u_travel, 240.0);
  float tunnel = smoothstep(211.0, 215.0, cycle) * (1.0 - smoothstep(223.0, 229.0, cycle));
  float light = smoothstep(224.0, 228.0, cycle) * (1.0 - smoothstep(228.0, 236.0, cycle));
  value = mix(value, .018, tunnel);
  value = mix(value, .985, light * .88);
  value = clamp(value, .018, .974);
  vec2 pixel = floor(gl_FragCoord.xy);
  float random = hash(pixel);
  float fleck = smoothstep(random - .045, random + .045, value);
  float tone = mix(value, fleck, .82);
  tone += (hash(pixel + 173.0) - .5) * .07;
  gl_FragColor = vec4(vec3(clamp(tone, .015, .985)), 1.0);
}
`

export function createWindowRenderer(canvas: HTMLCanvasElement, onUnavailable?: () => void) {
  const gl = canvas.getContext('webgl', { alpha: false, antialias: false, depth: false })
  if (!gl) return null
  const shaders: WebGLShader[] = []
  function compile(type: number, source: string) {
    const shader = gl!.createShader(type)
    if (!shader) throw new Error('No shader')
    shaders.push(shader)
    gl!.shaderSource(shader, source)
    gl!.compileShader(shader)
    if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) throw new Error('Unsupported shader')
    return shader
  }
  const program = gl.createProgram()
  if (!program) return null
  try {
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexSource))
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentSource))
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error('Unsupported program')
  } catch {
    shaders.forEach(shader => gl.deleteShader(shader))
    gl.deleteProgram(program)
    return null
  }
  const buffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW)
  gl.useProgram(program)
  const position = gl.getAttribLocation(program, 'a_position')
  gl.enableVertexAttribArray(position)
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)
  const resolution = gl.getUniformLocation(program, 'u_resolution')
  const time = gl.getUniformLocation(program, 'u_time')
  const travel = gl.getUniformLocation(program, 'u_travel')
  const scene = gl.getUniformLocation(program, 'u_scene')
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)')
  let params: LandscapeProps = { scene: 'mist', speed: 'local', moving: true, travelling: false, windowOpen: false }
  let animationTime = 0
  let travelTime = 0
  let lastFrame = performance.now()
  let frame = 0
  let disposed = false
  let lost = false

  function draw() {
    if (disposed || lost || document.hidden) return
    gl!.viewport(0, 0, canvas.width, canvas.height)
    gl!.uniform2f(resolution, canvas.width, canvas.height)
    gl!.uniform1f(time, animationTime)
    gl!.uniform1f(travel, reducedMotion.matches ? 0 : travelTime)
    gl!.uniform1f(scene, { mist: 0, dawn: 1, night: 2 }[params.scene])
    gl!.drawArrays(gl!.TRIANGLES, 0, 6)
  }
  function loop(now: number) {
    frame = 0
    if (disposed || lost || document.hidden || reducedMotion.matches || !params.moving) return
    const elapsed = now - lastFrame
    // Cap at 24 fps; grain stays fixed while the landscape passes behind it.
    if (elapsed >= 1000 / 24) {
      const delta = Math.min(elapsed / 1000, .12)
      animationTime += delta * { local: .65, rapid: 1.2, express: 2.1 }[params.speed]
      if (params.travelling) travelTime += delta
      lastFrame = now
      draw()
    }
    frame = requestAnimationFrame(loop)
  }
  function refresh() {
    cancelAnimationFrame(frame)
    frame = 0
    lastFrame = performance.now()
    draw()
    if (!disposed && !lost && !document.hidden && !reducedMotion.matches && params.moving) frame = requestAnimationFrame(loop)
  }
  function resize() {
    const bounds = canvas.getBoundingClientRect()
    canvas.width = Math.max(1, Math.round(bounds.width))
    canvas.height = Math.max(1, Math.round(bounds.height))
    refresh()
  }
  function onContextLost(event: Event) {
    event.preventDefault()
    lost = true
    cancelAnimationFrame(frame)
    canvas.style.opacity = '0'
    onUnavailable?.()
  }
  const observer = new ResizeObserver(resize)
  observer.observe(canvas)
  document.addEventListener('visibilitychange', refresh)
  reducedMotion.addEventListener('change', refresh)
  canvas.addEventListener('webglcontextlost', onContextLost)
  resize()
  return {
    update(next: LandscapeProps) {
      if (!next.travelling) travelTime = 0
      params = next
      refresh()
    },
    dispose() {
      disposed = true
      cancelAnimationFrame(frame)
      observer.disconnect()
      document.removeEventListener('visibilitychange', refresh)
      reducedMotion.removeEventListener('change', refresh)
      canvas.removeEventListener('webglcontextlost', onContextLost)
      gl.deleteBuffer(buffer)
      shaders.forEach(shader => gl.deleteShader(shader))
      gl.deleteProgram(program)
    },
  }
}
