///|
let vertex_source : String =
  #|
  #|attribute vec2 a_position;
  #|void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
  #|

///|
let fragment_source : String =
  #|
  #|precision highp float;
  #|uniform vec2 u_resolution;
  #|uniform float u_time;
  #|uniform float u_travel;
  #|uniform float u_scene;
  #|float hash(vec2 p) {
  #|  vec3 q = fract(vec3(p.xyx) * .1031);
  #|  q += dot(q, q.yzx + 33.33);
  #|  return fract((q.x + q.y) * q.z);
  #|}
  #|float noise(float x) {
  #|  float i = floor(x);
  #|  float f = fract(x);
  #|  f = f * f * (3.0 - 2.0 * f);
  #|  return mix(hash(vec2(i, 19.0)), hash(vec2(i + 1.0, 19.0)), f);
  #|}
  #|float ridge(float x) {
  #|  return noise(x) * .64 + noise(x * 2.13 + 8.0) * .25
  #|       + noise(x * 5.37 + 30.0) * .085 + noise(x * 13.1) * .025;
  #|}
  #|float below(float y, float height, float softness) {
  #|  return 1.0 - smoothstep(height - softness, height + softness, y);
  #|}
  #|// Uneven tiers and individual heights keep the conifers from reading as a pattern.
  #|float forest(vec2 p, float spacing, float height, float seed, float softness) {
  #|  float cell = floor(p.x / spacing);
  #|  float shape = 0.0;
  #|  for (int i = -1; i <= 1; i++) {
  #|    float id = cell + float(i);
  #|    float random = hash(vec2(id, seed));
  #|    float center = (id + .25 + random * .5) * spacing;
  #|    float h = height * (.48 + .65 * hash(vec2(id, seed + 7.0)));
  #|    float base = -.015 + .035 * noise(id * .41 + seed);
  #|    float y = (p.y - base) / h;
  #|    float localX = p.x - center + y * y * h * (random - .5) * .055;
  #|    float width = h * .19 * pow(max(0.0, 1.0 - y), .95);
  #|    float branches = .80 + .16 * sin(y * (72.0 + random * 27.0) + random * 9.0 + sign(localX) * 1.6)
  #|                         + .04 * sin(y * 231.0 + random * 11.0);
  #|    float crown = (1.0 - smoothstep(width * branches - softness, width * branches + softness, abs(localX)))
  #|                * smoothstep(-.03, .06, y) * (1.0 - smoothstep(.97, 1.0, y));
  #|    float trunk = (1.0 - smoothstep(h * .012, h * .012 + softness, abs(p.x - center)))
  #|                * below(p.y, base + h * .8, softness) * smoothstep(-.07, base, p.y);
  #|    shape = max(shape, max(crown, trunk));
  #|  }
  #|  return shape;
  #|}
  #|void main() {
  #|  vec2 uv = gl_FragCoord.xy / u_resolution;
  #|  float aspect = u_resolution.x / u_resolution.y;
  #|  float x = uv.x * aspect;
  #|  float t = u_time;
  #|  float y = uv.y;
  #|  float value = mix(.81, .975, smoothstep(.35, 1.0, y));
  #|  float cloud = noise(x * 2.1 + t * .008 + y * 3.0) * noise(y * 9.0 + x * .3);
  #|  value -= cloud * .045;
  #|
  #|  // The far ridges remain almost still while the nearer slopes slide past them.
  #|  float farX = x + t * .012;
  #|  float farRidge = .50 + .30 * ridge(farX * 1.7 + 12.0);
  #|  float farTone = .64 + .11 * (1.0 - smoothstep(.46, .77, y));
  #|  value = mix(value, farTone, below(y, farRidge, .005));
  #|
  #|  float hillX = x + t * .032;
  #|  float hillRidge = .40 + .28 * ridge(hillX * 2.0 + 35.0);
  #|  float hillTone = .43 + .22 * (1.0 - smoothstep(.37, .64, y));
  #|  hillTone += (noise(hillX * 22.0 + y * 5.0) - .5) * .028;
  #|  value = mix(value, hillTone, below(y, hillRidge, .003));
  #|
  #|  float woodX = x + t * .085;
  #|  float woodRidge = .30 + .18 * ridge(woodX * 2.8 + 71.0);
  #|  float woods = forest(vec2(woodX, y - woodRidge), .027, .063, 4.0, .0018);
  #|  float woodTone = .28 + .22 * (1.0 - smoothstep(.27, .48, y));
  #|  value = mix(value, woodTone, max(woods, below(y, woodRidge, .003)));
  #|
  #|  // A pale valley separates the near trees from the mountains without a hard horizon.
  #|  float fog = exp(-pow((y - .335) / .075, 2.0));
  #|  value = mix(value, .76, fog * .64);
  #|  float fieldX = x + t * .15;
  #|  float field = .20 + .10 * ridge(fieldX * 2.3 + 5.0);
  #|  float fieldTone = .40 + .14 * noise(fieldX * 3.0 + y * 12.0);
  #|  value = mix(value, fieldTone, below(y, field, .012));
  #|
  #|  float nearX = x + t * .24;
  #|  float nearBase = .11 + .075 * ridge(nearX * 2.4 + 6.0);
  #|  float nearTrees = forest(vec2(nearX, y - nearBase), .10, .20, 23.0, .0017);
  #|  value = mix(value, .16 + y * .16, nearTrees * .94);
  #|  value = mix(value, .16, below(y, nearBase, .008));
  #|
  #|  // Sparse close trees cross the window in seconds; their edges soften with motion.
  #|  float closeX = x + t * .62;
  #|  float closeBase = -.035 + .055 * ridge(closeX * 1.8 + 9.0);
  #|  float closeTrees = forest(vec2(closeX, y - closeBase), .73, .49, 51.0, .0035);
  #|  value = mix(value, .052 + y * .065, closeTrees);
  #|  float bank = .045 + .035 * ridge(closeX * 4.0);
  #|  value = mix(value, .055, below(y, bank, .012));
  #|
  #|  if (u_scene > .5 && u_scene < 1.5) value = mix(value, 1.0, .16);
  #|  if (u_scene > 1.5) value = value * .37 + .01;
  #|  float cycle = mod(u_travel, 240.0);
  #|  float tunnel = smoothstep(211.0, 215.0, cycle) * (1.0 - smoothstep(223.0, 229.0, cycle));
  #|  float light = smoothstep(224.0, 228.0, cycle) * (1.0 - smoothstep(228.0, 236.0, cycle));
  #|  value = mix(value, .018, tunnel);
  #|  value = mix(value, .985, light * .88);
  #|  value = clamp(value, .018, .974);
  #|  vec2 pixel = floor(gl_FragCoord.xy);
  #|  float random = hash(pixel);
  #|  float fleck = smoothstep(random - .045, random + .045, value);
  #|  float tone = mix(value, fleck, .82);
  #|  tone += (hash(pixel + 173.0) - .5) * .07;
  #|  gl_FragColor = vec4(vec3(clamp(tone, .015, .985)), 1.0);
  #|}
  #|
