function _M0DTP37Hosi1216syasou6domain5Field7Missing() {}
_M0DTP37Hosi1216syasou6domain5Field7Missing.prototype.$tag = 0;
const _M0DTP37Hosi1216syasou6domain5Field7Missing__ = new _M0DTP37Hosi1216syasou6domain5Field7Missing();
function _M0DTP37Hosi1216syasou6domain5Field4Null() {}
_M0DTP37Hosi1216syasou6domain5Field4Null.prototype.$tag = 1;
const _M0DTP37Hosi1216syasou6domain5Field4Null__ = new _M0DTP37Hosi1216syasou6domain5Field4Null();
function _M0DTP37Hosi1216syasou6domain5Field4Flag(param0) {
  this._0 = param0;
}
_M0DTP37Hosi1216syasou6domain5Field4Flag.prototype.$tag = 2;
function _M0DTP37Hosi1216syasou6domain5Field7Numeric(param0) {
  this._0 = param0;
}
_M0DTP37Hosi1216syasou6domain5Field7Numeric.prototype.$tag = 3;
function _M0DTP37Hosi1216syasou6domain5Field4Text(param0) {
  this._0 = param0;
}
_M0DTP37Hosi1216syasou6domain5Field4Text.prototype.$tag = 4;
function _M0DTP37Hosi1216syasou6domain5Field5Other() {}
_M0DTP37Hosi1216syasou6domain5Field5Other.prototype.$tag = 5;
const _M0DTP37Hosi1216syasou6domain5Field5Other__ = new _M0DTP37Hosi1216syasou6domain5Field5Other();
function _M0TP37Hosi1216syasou5webgl14ContextOptions(param0, param1, param2, param3) {
  this.alpha = param0;
  this.antialias = param1;
  this.depth = param2;
  this.preserveDrawingBuffer = param3;
}
function _M0TP37Hosi1216syasou6domain9Landscape(param0, param1, param2, param3) {
  this.scene = param0;
  this.speed = param1;
  this.moving = param2;
  this.travelling = param3;
}
const _M0FPB12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
function _M0TPB4IterGRP26mizchi8js__core3AnyE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $oob() {
  throw new Error("Index out of bounds");
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function _M0DTPC16option6OptionGRP26mizchi8js__core3AnyE4None() {}
_M0DTPC16option6OptionGRP26mizchi8js__core3AnyE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP26mizchi8js__core3AnyE4None__ = new _M0DTPC16option6OptionGRP26mizchi8js__core3AnyE4None();
function _M0DTPC16option6OptionGRP26mizchi8js__core3AnyE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP26mizchi8js__core3AnyE4Some.prototype.$tag = 1;
function _M0TPB9ArrayViewGRP26mizchi8js__core3AnyE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function _M0DTPC16option6OptionGdE4None() {}
_M0DTPC16option6OptionGdE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGdE4None__ = new _M0DTPC16option6OptionGdE4None();
function _M0DTPC16option6OptionGdE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGdE4Some.prototype.$tag = 1;
function _M0TPB3MapGsRP37Hosi1216syasou6domain5FieldE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGsbE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGsRP37Hosi1216syasou6domain5FieldE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsbE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB9ArrayViewGUsbEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP37Hosi1216syasou6domain6Ticket(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.id = param0;
  this.kind = param1;
  this.started_at = param2;
  this.arrived_at = param3;
  this.speed = param4;
  this.scene = param5;
  this.title = param6;
  this.note = param7;
}
function _M0DTP37Hosi1216syasou6domain12TravelChange10KeepTravel() {}
_M0DTP37Hosi1216syasou6domain12TravelChange10KeepTravel.prototype.$tag = 0;
const _M0DTP37Hosi1216syasou6domain12TravelChange10KeepTravel__ = new _M0DTP37Hosi1216syasou6domain12TravelChange10KeepTravel();
function _M0DTP37Hosi1216syasou6domain12TravelChange6Update(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP37Hosi1216syasou6domain12TravelChange6Update.prototype.$tag = 1;
function _M0DTP37Hosi1216syasou6domain12TicketChange11KeepTickets() {}
_M0DTP37Hosi1216syasou6domain12TicketChange11KeepTickets.prototype.$tag = 0;
const _M0DTP37Hosi1216syasou6domain12TicketChange11KeepTickets__ = new _M0DTP37Hosi1216syasou6domain12TicketChange11KeepTickets();
function _M0DTP37Hosi1216syasou6domain12TicketChange7Prepend(param0) {
  this._0 = param0;
}
_M0DTP37Hosi1216syasou6domain12TicketChange7Prepend.prototype.$tag = 1;
function _M0DTP37Hosi1216syasou6domain12TicketChange11EditTickets(param0) {
  this._0 = param0;
}
_M0DTP37Hosi1216syasou6domain12TicketChange11EditTickets.prototype.$tag = 2;
function _M0DTP37Hosi1216syasou6domain13JourneyChange4Keep() {}
_M0DTP37Hosi1216syasou6domain13JourneyChange4Keep.prototype.$tag = 0;
const _M0DTP37Hosi1216syasou6domain13JourneyChange4Keep__ = new _M0DTP37Hosi1216syasou6domain13JourneyChange4Keep();
function _M0DTP37Hosi1216syasou6domain13JourneyChange7Replace(param0) {
  this._0 = param0;
}
_M0DTP37Hosi1216syasou6domain13JourneyChange7Replace.prototype.$tag = 1;
function _M0DTP37Hosi1216syasou6domain13JourneyChange5Patch(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP37Hosi1216syasou6domain13JourneyChange5Patch.prototype.$tag = 2;
function _M0TP37Hosi1216syasou6domain7Journey(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) {
  this.phase = param0;
  this.running = param1;
  this.deadline = param2;
  this.remaining = param3;
  this.focus_minutes = param4;
  this.rest_minutes = param5;
  this.id = param6;
  this.started_at = param7;
  this.arrived_at = param8;
  this.speed = param9;
  this.scene = param10;
}
function _M0TP37Hosi1216syasou6domain8SoundMix(param0, param1, param2, param3, param4) {
  this.period = param0;
  this.train = param1;
  this.rain = param2;
  this.wind = param3;
  this.cabin = param4;
}
const _M0FP26mizchi8js__core9undefined = () => undefined;
const _M0MP26mizchi8js__core3Any5__get = (obj, key) => obj[key];
const _M0FP26mizchi8js__core21ffi__promise__resolve = (value) => Promise.resolve(value);
const _M0FP26mizchi8js__core20ffi__promise__reject = (error) => Promise.reject(error);
const _M0FP26mizchi8js__core18ffi__promise__then = (promise, callback) => promise.then(callback);
const _M0MP26mizchi8js__core3Any6__call = (obj, key, args) => obj[key](...args);
const _M0MP26mizchi8js__core3Any8__invoke = (func, args) => func(...args);
const _M0FP26mizchi8js__core11is__nullish = (v) => v == null;
const _M0FP26mizchi8js__core8is__null = (v) => v === null;
function _M0DTPC16option6OptionGRP37Hosi1216syasou5webgl7ContextE4None() {}
_M0DTPC16option6OptionGRP37Hosi1216syasou5webgl7ContextE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP37Hosi1216syasou5webgl7ContextE4None__ = new _M0DTPC16option6OptionGRP37Hosi1216syasou5webgl7ContextE4None();
function _M0DTPC16option6OptionGRP37Hosi1216syasou5webgl7ContextE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP37Hosi1216syasou5webgl7ContextE4Some.prototype.$tag = 1;
const _M0FP26mizchi8js__core15ffi__wrap__sync = (op, on_ok, on_error) => { try { on_ok(op()); } catch (e) { on_error(e); } };
function _M0TPC13ref3RefGORP26mizchi8js__core3AnyE(param0) {
  this.val = param0;
}
function _M0TPC13ref3RefGOsE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGRP26mizchi8js__core3AnyRP26mizchi8js__core7JsErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP26mizchi8js__core3AnyRP26mizchi8js__core7JsErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP26mizchi8js__core3AnyRP26mizchi8js__core7JsErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP26mizchi8js__core3AnyRP26mizchi8js__core7JsErrorE2Ok.prototype.$tag = 1;
function _M0DTPC15error5Error37mizchi_2fjs__core_2eJsError_2eJsError(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error37mizchi_2fjs__core_2eJsError_2eJsError.prototype.$tag = 0;
const _M0FP26mizchi8js__core12throw__error = (msg) => { throw new Error(msg); };
const _M0MP26mizchi8js__core3Any5__set = (obj, key, value) => { obj[key] = value };
const _M0FP26mizchi8js__core3new = (cls, args) => new cls(...args);
const _M0FP26mizchi8js__core12global__this = () => globalThis;
const _M0FP26mizchi8js__core4null = () => null;
const _M0FP26mizchi8js__core13is__undefined = (v) => v === undefined;
const _M0FP26mizchi8js__core9is__array = (v) => Array.isArray(v);
const _M0FP26mizchi8js__core8typeof__ = (v) => typeof v;
const _M0FP26mizchi8js__core11new__object = () => ({});
const _M0FP26mizchi8js__core14object__assign = (target, source) => Object.assign(target, source);
const _M0FP26mizchi8js__core18ffi__from__entries = (entries) => Object.fromEntries(entries.map(e => [e._0, e._1]));
function _M0TPB9ArrayViewGUsRP26mizchi8js__core3AnyEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0FP26mizchi8js__core15json__stringify = (value) => JSON.stringify(value);
const _M0FP26mizchi8js__core11json__parse = (text) => JSON.parse(text);
const _M0MP37Hosi1216syasou8webaudio12AudioContext12AudioContext = () => new AudioContext();
const _M0MP37Hosi1216syasou8webaudio12AudioContext12sample__rate = ctx => ctx.sampleRate;
const _M0MP37Hosi1216syasou8webaudio12AudioContext13current__time = ctx => ctx.currentTime;
const _M0MP37Hosi1216syasou8webaudio12AudioContext5state = ctx => ctx.state;
const _M0MP37Hosi1216syasou8webaudio12AudioContext11destination = ctx => ctx.destination;
const _M0MP37Hosi1216syasou8webaudio12AudioContext12create__gain = ctx => ctx.createGain();
const _M0MP37Hosi1216syasou8webaudio12AudioContext14create__filter = ctx => ctx.createBiquadFilter();
const _M0MP37Hosi1216syasou8webaudio12AudioContext18create__compressor = ctx => ctx.createDynamicsCompressor();
const _M0MP37Hosi1216syasou8webaudio12AudioContext14create__buffer = (ctx, channels, length, rate) => ctx.createBuffer(channels, length, rate);
const _M0MP37Hosi1216syasou8webaudio12AudioContext14create__source = ctx => ctx.createBufferSource();
const _M0MP37Hosi1216syasou8webaudio12AudioContext18create__oscillator = ctx => ctx.createOscillator();
const _M0MP37Hosi1216syasou8webaudio9AudioNode7connect = (node, destination) => node.connect(destination);
const _M0MP37Hosi1216syasou8webaudio9AudioNode10disconnect = node => node.disconnect();
const _M0MP37Hosi1216syasou8webaudio10AudioParam10set__value = (param, value) => { param.value = value };
const _M0MP37Hosi1216syasou8webaudio10AudioParam6target = (param, value, time, constant) => param.setTargetAtTime(value, time, constant);
const _M0MP37Hosi1216syasou8webaudio10AudioParam8at__time = (param, value, time) => param.setValueAtTime(value, time);
const _M0MP37Hosi1216syasou8webaudio10AudioParam17exponential__ramp = (param, value, time) => param.exponentialRampToValueAtTime(value, time);
const _M0MP37Hosi1216syasou8webaudio8GainNode4gain = node => node.gain;
const _M0MP37Hosi1216syasou8webaudio16BiquadFilterNode9set__type = (node, kind) => { node.type = kind };
const _M0MP37Hosi1216syasou8webaudio16BiquadFilterNode9frequency = node => node.frequency;
const _M0MP37Hosi1216syasou8webaudio16BiquadFilterNode1q = node => node.Q;
const _M0MP37Hosi1216syasou8webaudio22DynamicsCompressorNode9threshold = node => node.threshold;
const _M0MP37Hosi1216syasou8webaudio22DynamicsCompressorNode5ratio = node => node.ratio;
const _M0MP37Hosi1216syasou8webaudio11AudioBuffer7channel = (buffer, channel) => buffer.getChannelData(channel);
const _M0MP37Hosi1216syasou8webaudio7Samples6length = samples => samples.length;
const _M0MP37Hosi1216syasou8webaudio7Samples3set = (samples, index, value) => { samples[index] = value };
const _M0MP37Hosi1216syasou8webaudio21AudioBufferSourceNode11set__buffer = (node, buffer) => { node.buffer = buffer };
const _M0MP37Hosi1216syasou8webaudio21AudioBufferSourceNode9set__loop = (node, value) => { node.loop = value };
const _M0MP37Hosi1216syasou8webaudio21AudioBufferSourceNode5start = (node, time, offset) => node.start(time, offset);
const _M0MP37Hosi1216syasou8webaudio21AudioBufferSourceNode4stop = (node, time) => node.stop(time);
const _M0MP37Hosi1216syasou8webaudio21AudioBufferSourceNode9stop__now = node => node.stop();
const _M0MP37Hosi1216syasou8webaudio21AudioBufferSourceNode9on__ended = (node, callback) => { node.onended = callback };
const _M0MP37Hosi1216syasou8webaudio14OscillatorNode9frequency = node => node.frequency;
const _M0MP37Hosi1216syasou8webaudio14OscillatorNode5start = node => node.start();
const _M0MP37Hosi1216syasou8webaudio14OscillatorNode4stop = node => node.stop();
const _M0MP37Hosi1216syasou8webaudio12AudioContext8resume__ = ctx => ctx.resume();
const _M0MP37Hosi1216syasou8webaudio12AudioContext7suspend = ctx => ctx.suspend();
const _M0MP37Hosi1216syasou8webaudio12AudioContext5close = ctx => ctx.close();
const _M0FP36mizchi11js__builtin6global10globalThis = () => globalThis;
const _M0FP36mizchi11js__browser3dom6window = () => window;
const _M0FP36mizchi11js__browser3dom8document = () => document;
const _M0FP37Hosi1216syasou5webgl7context = (canvas, options) => canvas.getContext("webgl", {
   alpha: options.alpha, antialias: options.antialias, depth: options.depth,
   preserveDrawingBuffer: options.preserveDrawingBuffer
 });
const _M0MP37Hosi1216syasou5webgl7Context14create__shader = (gl, kind) => gl.createShader(kind);
const _M0MP37Hosi1216syasou5webgl7Context14shader__source = (gl, shader, source) => gl.shaderSource(shader, source);
const _M0MP37Hosi1216syasou5webgl7Context15compile__shader = (gl, shader) => gl.compileShader(shader);
const _M0MP37Hosi1216syasou5webgl7Context16shader__compiled = (gl, shader) => gl.getShaderParameter(shader, gl.COMPILE_STATUS);
const _M0MP37Hosi1216syasou5webgl7Context15create__program = (gl) => gl.createProgram();
const _M0MP37Hosi1216syasou5webgl7Context14attach__shader = (gl, program, shader) => gl.attachShader(program, shader);
const _M0MP37Hosi1216syasou5webgl7Context13link__program = (gl, program) => gl.linkProgram(program);
const _M0MP37Hosi1216syasou5webgl7Context15program__linked = (gl, program) => gl.getProgramParameter(program, gl.LINK_STATUS);
const _M0MP37Hosi1216syasou5webgl7Context14create__buffer = (gl) => gl.createBuffer();
const _M0MP37Hosi1216syasou5webgl7Context12bind__buffer = (gl, target, buffer) => gl.bindBuffer(target, buffer);
const _M0MP37Hosi1216syasou5webgl7Context17buffer__data__f32 = (gl, target, values, usage) => gl.bufferData(target, new Float32Array(values), usage);
const _M0MP37Hosi1216syasou5webgl7Context12use__program = (gl, program) => gl.useProgram(program);
const _M0MP37Hosi1216syasou5webgl7Context19attribute__location = (gl, program, name) => gl.getAttribLocation(program, name);
const _M0MP37Hosi1216syasou5webgl7Context17enable__attribute = (gl, location) => gl.enableVertexAttribArray(location);
const _M0MP37Hosi1216syasou5webgl7Context18attribute__pointer = (gl, location, size, kind, normalized, stride, offset) => gl.vertexAttribPointer(location, size, kind, normalized, stride, offset);
const _M0MP37Hosi1216syasou5webgl7Context17uniform__location = (gl, program, name) => gl.getUniformLocation(program, name);
const _M0MP37Hosi1216syasou5webgl7Context8viewport = (gl, x, y, width, height) => gl.viewport(x, y, width, height);
const _M0MP37Hosi1216syasou5webgl7Context9uniform1f = (gl, location, value) => gl.uniform1f(location, value);
const _M0MP37Hosi1216syasou5webgl7Context9uniform2f = (gl, location, x, y) => gl.uniform2f(location, x, y);
const _M0MP37Hosi1216syasou5webgl7Context12draw__arrays = (gl, mode, first, count) => gl.drawArrays(mode, first, count);
const _M0MP37Hosi1216syasou5webgl7Context14delete__buffer = (gl, buffer) => gl.deleteBuffer(buffer);
const _M0MP37Hosi1216syasou5webgl7Context14delete__shader = (gl, shader) => gl.deleteShader(shader);
const _M0MP37Hosi1216syasou5webgl7Context15delete__program = (gl, program) => gl.deleteProgram(program);
const _M0FP36mizchi11js__browser7storage12localStorage = () => localStorage;
const _M0MP36mizchi11js__browser7storage7Storage7getItem = (storage, key) => storage.getItem(key) ?? undefined;
const _M0MP36mizchi11js__browser7storage7Storage7setItem = (storage, key, value) => {
  storage.setItem(key, value);
};
const _M0MP36mizchi11js__builtin4math4Math6random = () => Math.random();
const _M0MP36mizchi11js__builtin4math4Math5round = (x) => Math.round(x);
const _M0FP37Hosi1216syasou7browser12set__opacity = (canvas, value) => { canvas.style.opacity = value };
const _M0FP37Hosi1216syasou7browser6hidden = () => document.hidden;
const _M0FP37Hosi1216syasou7browser6bounds = canvas => canvas.getBoundingClientRect();
function _M0TP37Hosi1216syasou7browser8Renderer(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13, param14, param15, param16, param17, param18, param19, param20) {
  this.canvas = param0;
  this.gl = param1;
  this.shaders = param2;
  this.program = param3;
  this.buffer = param4;
  this.resolution = param5;
  this.time = param6;
  this.travel = param7;
  this.scene = param8;
  this.reduced_motion = param9;
  this.params = param10;
  this.animation_time = param11;
  this.travel_time = param12;
  this.last_frame = param13;
  this.frame = param14;
  this.disposed = param15;
  this.lost = param16;
  this.observer = param17;
  this.visibility_callback = param18;
  this.motion_callback = param19;
  this.lost_callback = param20;
}
function _M0DTPC16option6OptionGRP36mizchi11js__browser8observer14ResizeObserverE4None() {}
_M0DTPC16option6OptionGRP36mizchi11js__browser8observer14ResizeObserverE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP36mizchi11js__browser8observer14ResizeObserverE4None__ = new _M0DTPC16option6OptionGRP36mizchi11js__browser8observer14ResizeObserverE4None();
function _M0DTPC16option6OptionGRP36mizchi11js__browser8observer14ResizeObserverE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP36mizchi11js__browser8observer14ResizeObserverE4Some.prototype.$tag = 1;
function _M0DTPC16option6OptionGRP311moonbitlang5async9js__async11AbortSignalE4None() {}
_M0DTPC16option6OptionGRP311moonbitlang5async9js__async11AbortSignalE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP311moonbitlang5async9js__async11AbortSignalE4None__ = new _M0DTPC16option6OptionGRP311moonbitlang5async9js__async11AbortSignalE4None();
function _M0DTPC16option6OptionGRP311moonbitlang5async9js__async11AbortSignalE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP311moonbitlang5async9js__async11AbortSignalE4Some.prototype.$tag = 1;
function _M0DTP37Hosi1216syasou7browser6Source5Noise(param0) {
  this._0 = param0;
}
_M0DTP37Hosi1216syasou7browser6Source5Noise.prototype.$tag = 0;
function _M0DTP37Hosi1216syasou7browser6Source4Tone(param0) {
  this._0 = param0;
}
_M0DTP37Hosi1216syasou7browser6Source4Tone.prototype.$tag = 1;
function _M0TP37Hosi1216syasou7browser5Sound(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12) {
  this.context = param0;
  this.master = param1;
  this.train = param2;
  this.rain = param3;
  this.wind = param4;
  this.cabin = param5;
  this.noise = param6;
  this.sources = param7;
  this.scheduler = param8;
  this.next_beat = param9;
  this.beat = param10;
  this.moving = param11;
  this.period = param12;
}
function _M0DTPC16result6ResultGRP26mizchi8js__core7PromiseGuERPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP26mizchi8js__core7PromiseGuERPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP26mizchi8js__core7PromiseGuERPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP26mizchi8js__core7PromiseGuERPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0TPB9ArrayViewGUsRP37Hosi1216syasou6domain5FieldEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP37Hosi1216syasou6domain6Record(param0, param1) {
  this.is_object = param0;
  this.fields = param1;
}
function _M0DTPC16option6OptionGRPB5ArrayGRP37Hosi1216syasou6domain6RecordEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGRP37Hosi1216syasou6domain6RecordEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGRP37Hosi1216syasou6domain6RecordEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGRP37Hosi1216syasou6domain6RecordEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGRP37Hosi1216syasou6domain6RecordEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGRP37Hosi1216syasou6domain6RecordEE4Some.prototype.$tag = 1;
function _M0TP37Hosi1216syasou6domain6Travel(param0, param1, param2) {
  this.journey = param0;
  this.tickets = param1;
  this.pending_arrival_id = param2;
}
function _M0DTP37Hosi1216syasou6domain13JourneyAction5Start(param0, param1, param2, param3, param4, param5) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
  this._5 = param5;
}
_M0DTP37Hosi1216syasou6domain13JourneyAction5Start.prototype.$tag = 0;
function _M0DTP37Hosi1216syasou6domain13JourneyAction4Tick(param0) {
  this._0 = param0;
}
_M0DTP37Hosi1216syasou6domain13JourneyAction4Tick.prototype.$tag = 1;
function _M0DTP37Hosi1216syasou6domain13JourneyAction6Toggle(param0) {
  this._0 = param0;
}
_M0DTP37Hosi1216syasou6domain13JourneyAction6Toggle.prototype.$tag = 2;
function _M0DTP37Hosi1216syasou6domain13JourneyAction6Finish(param0) {
  this._0 = param0;
}
_M0DTP37Hosi1216syasou6domain13JourneyAction6Finish.prototype.$tag = 3;
function _M0DTP37Hosi1216syasou6domain12TravelAction12JourneyEvent(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP37Hosi1216syasou6domain12TravelAction12JourneyEvent.prototype.$tag = 0;
function _M0DTP37Hosi1216syasou6domain12TravelAction7Welcome(param0) {
  this._0 = param0;
}
_M0DTP37Hosi1216syasou6domain12TravelAction7Welcome.prototype.$tag = 1;
function _M0DTP37Hosi1216syasou6domain12TravelAction11Acknowledge() {}
_M0DTP37Hosi1216syasou6domain12TravelAction11Acknowledge.prototype.$tag = 2;
const _M0DTP37Hosi1216syasou6domain12TravelAction11Acknowledge__ = new _M0DTP37Hosi1216syasou6domain12TravelAction11Acknowledge();
function _M0DTP37Hosi1216syasou6domain12TravelAction4Edit(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP37Hosi1216syasou6domain12TravelAction4Edit.prototype.$tag = 3;
const _M0MPB4Iter4nextN6constrS9918GRP26mizchi8js__core3AnyE = 0;
const _M0MPB4Iter4nextN6constrS9919GRP26mizchi8js__core3AnyE = 0;
const _M0MPB4Iter3newN6constrS9926GRP26mizchi8js__core3AnyE = 0;
const _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS389 = "welcome-v1";
const _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS391 = "local";
const _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS392 = "mist";
const _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS393 = "はじめての窓辺";
const _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS394 = "車窓へ、ようこそ。\nこれは、旅のしおりをめくった記念の一枚。\n\n次の切符には、あなたが進めたことを。\nどうぞ、自分のペースで。";
const _M0FP37Hosi1216syasou7browser16fragment__source = "\nprecision highp float;\nuniform vec2 u_resolution;\nuniform float u_time;\nuniform float u_travel;\nuniform float u_scene;\nfloat hash(vec2 p) {\n  vec3 q = fract(vec3(p.xyx) * .1031);\n  q += dot(q, q.yzx + 33.33);\n  return fract((q.x + q.y) * q.z);\n}\nfloat noise(float x) {\n  float i = floor(x);\n  float f = fract(x);\n  f = f * f * (3.0 - 2.0 * f);\n  return mix(hash(vec2(i, 19.0)), hash(vec2(i + 1.0, 19.0)), f);\n}\nfloat ridge(float x) {\n  return noise(x) * .64 + noise(x * 2.13 + 8.0) * .25\n       + noise(x * 5.37 + 30.0) * .085 + noise(x * 13.1) * .025;\n}\nfloat below(float y, float height, float softness) {\n  return 1.0 - smoothstep(height - softness, height + softness, y);\n}\n// Uneven tiers and individual heights keep the conifers from reading as a pattern.\nfloat forest(vec2 p, float spacing, float height, float seed, float softness) {\n  float cell = floor(p.x / spacing);\n  float shape = 0.0;\n  for (int i = -1; i <= 1; i++) {\n    float id = cell + float(i);\n    float random = hash(vec2(id, seed));\n    float center = (id + .25 + random * .5) * spacing;\n    float h = height * (.48 + .65 * hash(vec2(id, seed + 7.0)));\n    float base = -.015 + .035 * noise(id * .41 + seed);\n    float y = (p.y - base) / h;\n    float localX = p.x - center + y * y * h * (random - .5) * .055;\n    float width = h * .19 * pow(max(0.0, 1.0 - y), .95);\n    float branches = .80 + .16 * sin(y * (72.0 + random * 27.0) + random * 9.0 + sign(localX) * 1.6)\n                         + .04 * sin(y * 231.0 + random * 11.0);\n    float crown = (1.0 - smoothstep(width * branches - softness, width * branches + softness, abs(localX)))\n                * smoothstep(-.03, .06, y) * (1.0 - smoothstep(.97, 1.0, y));\n    float trunk = (1.0 - smoothstep(h * .012, h * .012 + softness, abs(p.x - center)))\n                * below(p.y, base + h * .8, softness) * smoothstep(-.07, base, p.y);\n    shape = max(shape, max(crown, trunk));\n  }\n  return shape;\n}\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / u_resolution;\n  float aspect = u_resolution.x / u_resolution.y;\n  float x = uv.x * aspect;\n  float t = u_time;\n  float y = uv.y;\n  float value = mix(.81, .975, smoothstep(.35, 1.0, y));\n  float cloud = noise(x * 2.1 + t * .008 + y * 3.0) * noise(y * 9.0 + x * .3);\n  value -= cloud * .045;\n\n  // The far ridges remain almost still while the nearer slopes slide past them.\n  float farX = x + t * .012;\n  float farRidge = .50 + .30 * ridge(farX * 1.7 + 12.0);\n  float farTone = .64 + .11 * (1.0 - smoothstep(.46, .77, y));\n  value = mix(value, farTone, below(y, farRidge, .005));\n\n  float hillX = x + t * .032;\n  float hillRidge = .40 + .28 * ridge(hillX * 2.0 + 35.0);\n  float hillTone = .43 + .22 * (1.0 - smoothstep(.37, .64, y));\n  hillTone += (noise(hillX * 22.0 + y * 5.0) - .5) * .028;\n  value = mix(value, hillTone, below(y, hillRidge, .003));\n\n  float woodX = x + t * .085;\n  float woodRidge = .30 + .18 * ridge(woodX * 2.8 + 71.0);\n  float woods = forest(vec2(woodX, y - woodRidge), .027, .063, 4.0, .0018);\n  float woodTone = .28 + .22 * (1.0 - smoothstep(.27, .48, y));\n  value = mix(value, woodTone, max(woods, below(y, woodRidge, .003)));\n\n  // A pale valley separates the near trees from the mountains without a hard horizon.\n  float fog = exp(-pow((y - .335) / .075, 2.0));\n  value = mix(value, .76, fog * .64);\n  float fieldX = x + t * .15;\n  float field = .20 + .10 * ridge(fieldX * 2.3 + 5.0);\n  float fieldTone = .40 + .14 * noise(fieldX * 3.0 + y * 12.0);\n  value = mix(value, fieldTone, below(y, field, .012));\n\n  float nearX = x + t * .24;\n  float nearBase = .11 + .075 * ridge(nearX * 2.4 + 6.0);\n  float nearTrees = forest(vec2(nearX, y - nearBase), .10, .20, 23.0, .0017);\n  value = mix(value, .16 + y * .16, nearTrees * .94);\n  value = mix(value, .16, below(y, nearBase, .008));\n\n  // Sparse close trees cross the window in seconds; their edges soften with motion.\n  float closeX = x + t * .62;\n  float closeBase = -.035 + .055 * ridge(closeX * 1.8 + 9.0);\n  float closeTrees = forest(vec2(closeX, y - closeBase), .73, .49, 51.0, .0035);\n  value = mix(value, .052 + y * .065, closeTrees);\n  float bank = .045 + .035 * ridge(closeX * 4.0);\n  value = mix(value, .055, below(y, bank, .012));\n\n  if (u_scene > .5 && u_scene < 1.5) value = mix(value, 1.0, .16);\n  if (u_scene > 1.5) value = value * .37 + .01;\n  float cycle = mod(u_travel, 240.0);\n  float tunnel = smoothstep(211.0, 215.0, cycle) * (1.0 - smoothstep(223.0, 229.0, cycle));\n  float light = smoothstep(224.0, 228.0, cycle) * (1.0 - smoothstep(228.0, 236.0, cycle));\n  value = mix(value, .018, tunnel);\n  value = mix(value, .985, light * .88);\n  value = clamp(value, .018, .974);\n  vec2 pixel = floor(gl_FragCoord.xy);\n  float random = hash(pixel);\n  float fleck = smoothstep(random - .045, random + .045, value);\n  float tone = mix(value, fleck, .82);\n  tone += (hash(pixel + 173.0) - .5) * .07;\n  gl_FragColor = vec4(vec3(clamp(tone, .015, .985)), 1.0);\n}\n";
const _M0FP37Hosi1216syasou7browser14vertex__source = "\nattribute vec2 a_position;\nvoid main() { gl_Position = vec4(a_position, 0.0, 1.0); }\n";
const _M0FP37Hosi1216syasou6bridge15journey__fields = ["phase", "running", "deadline", "remaining", "focusMinutes", "restMinutes", "id", "startedAt", "arrivedAt", "speed", "scene"];
const _M0FP37Hosi1216syasou6bridge14ticket__fields = ["id", "kind", "startedAt", "arrivedAt", "speed", "scene", "title", "note"];
const _M0FPB4seed = _M0FPB12random__seed();
const _M0FP37Hosi1216syasou6domain14valid__journeyN6constrS395 = new _M0DTP37Hosi1216syasou6domain5Field4Text("focus");
const _M0FP37Hosi1216syasou6domain14valid__journeyN6constrS396 = new _M0DTP37Hosi1216syasou6domain5Field4Text("rest");
const _M0FP37Hosi1216syasou6domain14valid__journeyN6constrS397 = new _M0DTP37Hosi1216syasou6domain5Field4Text("focus");
const _M0FP37Hosi1216syasou6domain14valid__journeyN6constrS398 = new _M0DTP37Hosi1216syasou6domain5Field7Numeric(0);
const _M0FP37Hosi1216syasou6domain14reduce__travelN6constrS399 = "welcome";
const _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS390 = "welcome";
const _M0FP37Hosi1216syasou7browser16create__rendererN6recordS214 = new _M0TP37Hosi1216syasou5webgl14ContextOptions(false, false, false, true);
const _M0FP37Hosi1216syasou7browser16create__rendererN6recordS215 = new _M0TP37Hosi1216syasou6domain9Landscape("mist", "local", true, false);
function _M0FPB13consume4__acc(acc, input) {
  const _p = (acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0;
  const _p$2 = 17;
  return Math.imul(_p << _p$2 | (_p >>> (32 - _p$2 | 0) | 0), 668265263) | 0;
}
function _M0IP016_24default__implPB2Eq10not__equalGRP37Hosi1216syasou6domain5FieldE(x, y) {
  return !_M0IP37Hosi1216syasou6domain5FieldPB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRP37Hosi1216syasou6domain5PhaseE(x, y) {
  return !_M0IP37Hosi1216syasou6domain5PhasePB2Eq5equal(x, y);
}
function _M0FPB14avalanche__acc(acc) {
  let acc$2 = acc;
  acc$2 = acc$2 ^ (acc$2 >>> 15 | 0);
  acc$2 = Math.imul(acc$2, -2048144777) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 13 | 0);
  acc$2 = Math.imul(acc$2, -1028477379) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 16 | 0);
  return acc$2;
}
function _M0FPB13finalize__acc(acc) {
  return _M0FPB14avalanche__acc(acc);
}
function _M0MPB4Iter4nextGRP26mizchi8js__core3AnyE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result.$tag === 1) {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9918GRP26mizchi8js__core3AnyE;
    }
  } else {
    self.size_hint = _M0MPB4Iter4nextN6constrS9919GRP26mizchi8js__core3AnyE;
  }
  return result;
}
function _M0MPB4Iter3newGRP26mizchi8js__core3AnyE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9926GRP26mizchi8js__core3AnyE;
  }
  return new _M0TPB4IterGRP26mizchi8js__core3AnyE(f, size_hint$2);
}
function _M0MPC15array5Array4pushGRP26mizchi8js__core3AnyE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGRP37Hosi1216syasou7browser6SourceE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array9ArrayView4iterGRP26mizchi8js__core3AnyE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.end - self.start | 0;
  return _M0MPB4Iter3newGRP26mizchi8js__core3AnyE(() => {
    if (i.val < len) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return new _M0DTPC16option6OptionGRP26mizchi8js__core3AnyE4Some(elem);
    } else {
      return _M0DTPC16option6OptionGRP26mizchi8js__core3AnyE4None__;
    }
  }, len);
}
function _M0MPC15array5Array4iterGRP26mizchi8js__core3AnyE(self) {
  return _M0MPC15array9ArrayView4iterGRP26mizchi8js__core3AnyE(new _M0TPB9ArrayViewGRP26mizchi8js__core3AnyE(self, 0, self.length));
}
function _M0MPC15array10FixedArray11from__arrayGUsRP26mizchi8js__core3AnyEE(array) {
  const _p = array.end - array.start | 0;
  if (_p <= 0) {
    return [];
  } else {
    const _p$2 = 0;
    const _p$3 = $make_array_len_and_init(_p, array.buf[array.start + _p$2 | 0]);
    let _tmp = 1;
    while (true) {
      const _p$4 = _tmp;
      if (_p$4 < _p) {
        if (_p$4 >>> 0 < _p$3.length) {
          _p$3[_p$4] = array.buf[array.start + _p$4 | 0];
        } else {
          $oob();
        }
        _tmp = _p$4 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _p$3;
  }
}
function _M0IPC16option6OptionPB2Eq5equalGsE(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x === _y;
    }
  }
}
function _M0MPC16option6Option10unwrap__orGsE(self, default_) {
  if (self === undefined) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC16option6Option10unwrap__orGdE(self, default_) {
  if (self.$tag === 1) {
    const _Some = self;
    const _t = _Some._0;
    return _t;
  } else {
    return default_;
  }
}
function _M0MPC16option6Option10unwrap__orGbE(self, default_) {
  if (self === -1) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC16option6Option3mapGddE(self, f) {
  if (self.$tag === 1) {
    const _Some = self;
    const _t = _Some._0;
    return new _M0DTPC16option6OptionGdE4Some(f(_t));
  } else {
    return _M0DTPC16option6OptionGdE4None__;
  }
}
function _M0MPC13int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0FPB8new__mapGsRP37Hosi1216syasou6domain5FieldE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsRP37Hosi1216syasou6domain5FieldE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB8new__mapGsbE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsbE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB21capacity__for__length(length) {
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  return capacity;
}
function _M0MPB3Map20add__entry__to__tailGsRP37Hosi1216syasou6domain5FieldE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    const _p = _bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob();
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsbE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    const _p = _bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob();
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGsRP37Hosi1216syasou6domain5FieldE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGsbE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10push__awayGsRP37Hosi1216syasou6domain5FieldE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRP37Hosi1216syasou6domain5FieldE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRP37Hosi1216syasou6domain5FieldE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsbE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsbE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsbE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsRP37Hosi1216syasou6domain5FieldE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRP37Hosi1216syasou6domain5FieldE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRP37Hosi1216syasou6domain5FieldE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRP37Hosi1216syasou6domain5FieldE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsbE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsbE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsbE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsbE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map4growGsRP37Hosi1216syasou6domain5FieldE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsRP37Hosi1216syasou6domain5FieldE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGsbE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsbE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP37Hosi1216syasou6domain5FieldE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRP37Hosi1216syasou6domain5FieldE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRP37Hosi1216syasou6domain5FieldE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRP37Hosi1216syasou6domain5FieldE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRP37Hosi1216syasou6domain5FieldE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRP37Hosi1216syasou6domain5FieldE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRP37Hosi1216syasou6domain5FieldE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRP37Hosi1216syasou6domain5FieldE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsbE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsbE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsbE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsbE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsbE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsbE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsbE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsbE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGsRP37Hosi1216syasou6domain5FieldE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP37Hosi1216syasou6domain5FieldE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsbE(self, key, value) {
  _M0MPB3Map15set__with__hashGsbE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3MapGsRP37Hosi1216syasou6domain5FieldE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRP37Hosi1216syasou6domain5FieldE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP37Hosi1216syasou6domain5FieldE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsbE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsbE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsbE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3getGsRP37Hosi1216syasou6domain5FieldE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsbE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0IPC16string6StringPB4Hash4hash(self) {
  let acc = (_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0;
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      acc = (acc >>> 0) + (4 >>> 0) | 0;
      const v = self.charCodeAt(i);
      acc = _M0FPB13consume4__acc(acc, v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPB13finalize__acc(acc);
}
function _M0MPC16double6Double7to__int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function _M0MPC16double6Double3min(self, other) {
  return self !== self ? other : other !== other ? self : self < other ? self : other;
}
function _M0MPC16double6Double3max(self, other) {
  return self !== self ? other : other !== other ? self : self > other ? self : other;
}
function _M0MPC15array5Array2atGRP26mizchi8js__core3AnyE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGdE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array8containsGdE(self, value) {
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (v === value) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function _M0MPC15array5Array8containsGsE(self, value) {
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (v === value) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function _M0MPC15array5Array10push__iterGRP26mizchi8js__core3AnyE(self, iter) {
  const _bind = iter.size_hint;
  if (_bind === undefined) {
  }
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGRP26mizchi8js__core3AnyE(iter);
    if (_bind$2.$tag === 1) {
      const _Some = _bind$2;
      const _x = _Some._0;
      _M0MPC15array5Array4pushGRP26mizchi8js__core3AnyE(self, _x);
      continue;
    } else {
      return;
    }
  }
}
function _M0IP37Hosi1216syasou6domain5FieldPB2Eq5equal(_x_151, _x_152) {
  switch (_x_151.$tag) {
    case 0: {
      if (_x_152.$tag === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_152.$tag === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      const _Flag = _x_151;
      const _$42$x0_153 = _Flag._0;
      if (_x_152.$tag === 2) {
        const _Flag$2 = _x_152;
        const _$42$y0_154 = _Flag$2._0;
        return _$42$x0_153 === _$42$y0_154;
      } else {
        return false;
      }
    }
    case 3: {
      const _Numeric = _x_151;
      const _$42$x0_155 = _Numeric._0;
      if (_x_152.$tag === 3) {
        const _Numeric$2 = _x_152;
        const _$42$y0_156 = _Numeric$2._0;
        return _$42$x0_155 === _$42$y0_156;
      } else {
        return false;
      }
    }
    case 4: {
      const _Text = _x_151;
      const _$42$x0_157 = _Text._0;
      if (_x_152.$tag === 4) {
        const _Text$2 = _x_152;
        const _$42$y0_158 = _Text$2._0;
        return _$42$x0_157 === _$42$y0_158;
      } else {
        return false;
      }
    }
    default: {
      if (_x_152.$tag === 5) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function _M0IP37Hosi1216syasou6domain5PhasePB2Eq5equal(_x_139, _x_140) {
  switch (_x_139) {
    case 0: {
      if (_x_140 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_140 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_140 === 2) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_140 === 3) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function _M0MP37Hosi1216syasou6domain6Record3get(self, name) {
  return _M0MPC16option6Option10unwrap__orGsE(_M0MPB3Map3getGsRP37Hosi1216syasou6domain5FieldE(self.fields, name), _M0DTP37Hosi1216syasou6domain5Field7Missing__);
}
function _M0FP37Hosi1216syasou6domain14is__number__in(value, choices) {
  if (value.$tag === 3) {
    const _Numeric = value;
    const _n = _Numeric._0;
    return _M0MPC15array5Array8containsGdE(choices, _n);
  } else {
    return false;
  }
}
function _M0FP37Hosi1216syasou6domain12is__text__in(value, choices) {
  if (value.$tag === 4) {
    const _Text = value;
    const _s = _Text._0;
    return _M0MPC15array5Array8containsGsE(choices, _s);
  } else {
    return false;
  }
}
function _M0FP37Hosi1216syasou6domain9is__speed(value) {
  return _M0FP37Hosi1216syasou6domain12is__text__in(value, ["local", "rapid", "express"]);
}
function _M0FP37Hosi1216syasou6domain9is__scene(value) {
  return _M0FP37Hosi1216syasou6domain12is__text__in(value, ["mist", "dawn", "night"]);
}
function _M0FP37Hosi1216syasou6domain13is__timestamp(value) {
  if (value.$tag === 3) {
    const _Numeric = value;
    const _n = _Numeric._0;
    return _n > -1 / 0 && _n < 1 / 0 && _n >= 0;
  } else {
    return false;
  }
}
function _M0FP37Hosi1216syasou6domain10is__length(value, minimum, maximum) {
  if (value.$tag === 4) {
    const _Text = value;
    const _s = _Text._0;
    return _s.length >= minimum && _s.length <= maximum;
  } else {
    return false;
  }
}
function _M0FP37Hosi1216syasou6domain18valid__preferences(p) {
  if (p.is_object) {
    let _tmp;
    if (_M0FP37Hosi1216syasou6domain14is__number__in(_M0MP37Hosi1216syasou6domain6Record3get(p, "focusMinutes"), [0, 15, 25, 45, 60, 90])) {
      let _tmp$2;
      if (_M0FP37Hosi1216syasou6domain14is__number__in(_M0MP37Hosi1216syasou6domain6Record3get(p, "restMinutes"), [3, 5, 10, 15])) {
        let _tmp$3;
        if (_M0FP37Hosi1216syasou6domain9is__speed(_M0MP37Hosi1216syasou6domain6Record3get(p, "speed"))) {
          let _tmp$4;
          if (_M0FP37Hosi1216syasou6domain9is__scene(_M0MP37Hosi1216syasou6domain6Record3get(p, "scene"))) {
            const _bind = _M0MP37Hosi1216syasou6domain6Record3get(p, "showTime");
            let _tmp$5;
            if (_bind.$tag === 2) {
              const _p = ["trainVolume", "rainVolume", "windVolume"];
              let _p$2;
              _L: {
                _L$2: {
                  const _p$3 = _p.length;
                  let _tmp$6 = 0;
                  while (true) {
                    const _p$4 = _tmp$6;
                    if (_p$4 < _p$3) {
                      const _p$5 = _p[_p$4];
                      const _p$6 = _M0MP37Hosi1216syasou6domain6Record3get(p, _p$5);
                      let _tmp$7;
                      if (_p$6.$tag === 3) {
                        const _p$7 = _p$6;
                        const _p$8 = _p$7._0;
                        _tmp$7 = _p$8 >= 0 && _p$8 <= 100;
                      } else {
                        _tmp$7 = false;
                      }
                      if (!_tmp$7) {
                        _p$2 = false;
                        break _L$2;
                      }
                      _tmp$6 = _p$4 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  _tmp$5 = true;
                  break _L;
                }
                _tmp$5 = _p$2;
              }
            } else {
              _tmp$5 = false;
            }
            _tmp$4 = _tmp$5;
          } else {
            _tmp$4 = false;
          }
          _tmp$3 = _tmp$4;
        } else {
          _tmp$3 = false;
        }
        _tmp$2 = _tmp$3;
      } else {
        _tmp$2 = false;
      }
      _tmp = _tmp$2;
    } else {
      _tmp = false;
    }
    return _tmp;
  } else {
    return false;
  }
}
function _M0FP37Hosi1216syasou6domain14valid__journey(j) {
  if (j.is_object) {
    const _bind = _M0MP37Hosi1216syasou6domain6Record3get(j, "running");
    if (_bind.$tag === 2) {
      const _Flag = _bind;
      const _running = _Flag._0;
      const phase = _M0MP37Hosi1216syasou6domain6Record3get(j, "phase");
      if (_M0FP37Hosi1216syasou6domain12is__text__in(phase, ["idle", "focus", "rest", "finished"])) {
        let _tmp;
        const _bind$2 = _M0MP37Hosi1216syasou6domain6Record3get(j, "deadline");
        let _tmp$2;
        switch (_bind$2.$tag) {
          case 1: {
            _tmp$2 = true;
            break;
          }
          case 3: {
            const _Numeric = _bind$2;
            const _n = _Numeric._0;
            _tmp$2 = _n > -1 / 0 && _n < 1 / 0;
            break;
          }
          default: {
            _tmp$2 = false;
          }
        }
        if (_tmp$2) {
          _tmp = (_M0IP37Hosi1216syasou6domain5FieldPB2Eq5equal(_M0MP37Hosi1216syasou6domain6Record3get(j, "remaining"), _M0DTP37Hosi1216syasou6domain5Field4Null__) || _M0FP37Hosi1216syasou6domain13is__timestamp(_M0MP37Hosi1216syasou6domain6Record3get(j, "remaining"))) && (_M0FP37Hosi1216syasou6domain14is__number__in(_M0MP37Hosi1216syasou6domain6Record3get(j, "focusMinutes"), [0, 15, 25, 45, 60, 90]) && (_M0FP37Hosi1216syasou6domain14is__number__in(_M0MP37Hosi1216syasou6domain6Record3get(j, "restMinutes"), [3, 5, 10, 15]) && ((!_running || (_M0IP37Hosi1216syasou6domain5FieldPB2Eq5equal(phase, _M0FP37Hosi1216syasou6domain14valid__journeyN6constrS395) || _M0IP37Hosi1216syasou6domain5FieldPB2Eq5equal(phase, _M0FP37Hosi1216syasou6domain14valid__journeyN6constrS396))) && (!(_running && _M0IP37Hosi1216syasou6domain5FieldPB2Eq5equal(_M0MP37Hosi1216syasou6domain6Record3get(j, "deadline"), _M0DTP37Hosi1216syasou6domain5Field4Null__)) || _M0IP37Hosi1216syasou6domain5FieldPB2Eq5equal(phase, _M0FP37Hosi1216syasou6domain14valid__journeyN6constrS397) && _M0IP37Hosi1216syasou6domain5FieldPB2Eq5equal(_M0MP37Hosi1216syasou6domain6Record3get(j, "focusMinutes"), _M0FP37Hosi1216syasou6domain14valid__journeyN6constrS398)))));
        } else {
          _tmp = false;
        }
        return _tmp;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function _M0FP37Hosi1216syasou6domain13valid__ticket(t) {
  if (t.is_object) {
    const _bind = _M0MP37Hosi1216syasou6domain6Record3get(t, "startedAt");
    if (_bind.$tag === 3) {
      const _Numeric = _bind;
      const _started = _Numeric._0;
      const _bind$2 = _M0MP37Hosi1216syasou6domain6Record3get(t, "arrivedAt");
      if (_bind$2.$tag === 3) {
        const _Numeric$2 = _bind$2;
        const _arrived = _Numeric$2._0;
        return _M0FP37Hosi1216syasou6domain10is__length(_M0MP37Hosi1216syasou6domain6Record3get(t, "id"), 1, 100) && ((_M0IP37Hosi1216syasou6domain5FieldPB2Eq5equal(_M0MP37Hosi1216syasou6domain6Record3get(t, "kind"), _M0DTP37Hosi1216syasou6domain5Field7Missing__) || _M0FP37Hosi1216syasou6domain12is__text__in(_M0MP37Hosi1216syasou6domain6Record3get(t, "kind"), ["sample", "welcome"])) && (_M0FP37Hosi1216syasou6domain13is__timestamp(_M0MP37Hosi1216syasou6domain6Record3get(t, "startedAt")) && (_M0FP37Hosi1216syasou6domain13is__timestamp(_M0MP37Hosi1216syasou6domain6Record3get(t, "arrivedAt")) && (_arrived >= _started && (_M0FP37Hosi1216syasou6domain9is__speed(_M0MP37Hosi1216syasou6domain6Record3get(t, "speed")) && (_M0FP37Hosi1216syasou6domain9is__scene(_M0MP37Hosi1216syasou6domain6Record3get(t, "scene")) && (_M0FP37Hosi1216syasou6domain10is__length(_M0MP37Hosi1216syasou6domain6Record3get(t, "title"), 0, 80) && _M0FP37Hosi1216syasou6domain10is__length(_M0MP37Hosi1216syasou6domain6Record3get(t, "note"), 0, 300))))))));
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function _M0FP37Hosi1216syasou6domain13valid__travel(is_object, journey, tickets, pending) {
  if (is_object) {
    if (_M0FP37Hosi1216syasou6domain14valid__journey(journey)) {
      if (tickets.$tag === 1) {
        const _Some = tickets;
        const _tickets = _Some._0;
        const id = _M0MP37Hosi1216syasou6domain6Record3get(journey, "id");
        let _tmp;
        if (_M0IP37Hosi1216syasou6domain5FieldPB2Eq5equal(id, _M0DTP37Hosi1216syasou6domain5Field7Missing__)) {
          _tmp = true;
        } else {
          let _tmp$2;
          if (id.$tag === 4) {
            const _Text = id;
            const _text = _Text._0;
            _tmp$2 = _text.length > 0;
          } else {
            _tmp$2 = false;
          }
          _tmp = _tmp$2;
        }
        if (!_tmp) {
          return false;
        }
        const _bind = ["startedAt", "arrivedAt"];
        const _bind$2 = _bind.length;
        let _tmp$2 = 0;
        while (true) {
          const _ = _tmp$2;
          if (_ < _bind$2) {
            const key = _bind[_];
            if (_M0IP016_24default__implPB2Eq10not__equalGRP37Hosi1216syasou6domain5FieldE(_M0MP37Hosi1216syasou6domain6Record3get(journey, key), _M0DTP37Hosi1216syasou6domain5Field7Missing__) && !_M0FP37Hosi1216syasou6domain13is__timestamp(_M0MP37Hosi1216syasou6domain6Record3get(journey, key))) {
              return false;
            }
            _tmp$2 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (_M0IP016_24default__implPB2Eq10not__equalGRP37Hosi1216syasou6domain5FieldE(_M0MP37Hosi1216syasou6domain6Record3get(journey, "speed"), _M0DTP37Hosi1216syasou6domain5Field7Missing__) && !_M0FP37Hosi1216syasou6domain9is__speed(_M0MP37Hosi1216syasou6domain6Record3get(journey, "speed"))) {
          return false;
        }
        if (_M0IP016_24default__implPB2Eq10not__equalGRP37Hosi1216syasou6domain5FieldE(_M0MP37Hosi1216syasou6domain6Record3get(journey, "scene"), _M0DTP37Hosi1216syasou6domain5Field7Missing__) && !_M0FP37Hosi1216syasou6domain9is__scene(_M0MP37Hosi1216syasou6domain6Record3get(journey, "scene"))) {
          return false;
        }
        const _bind$3 = [];
        const ids = _M0MPB3Map3MapGsbE(new _M0TPB9ArrayViewGUsbEE(_bind$3, 0, 0), undefined);
        const _bind$4 = _tickets.length;
        let _tmp$3 = 0;
        while (true) {
          const _ = _tmp$3;
          if (_ < _bind$4) {
            const ticket = _tickets[_];
            _L: {
              _L$2: {
                if (_M0FP37Hosi1216syasou6domain13valid__ticket(ticket)) {
                  const _bind$5 = _M0MP37Hosi1216syasou6domain6Record3get(ticket, "id");
                  if (_bind$5.$tag === 4) {
                    const _Text = _bind$5;
                    const _id = _Text._0;
                    if (_M0MPB3Map8containsGsbE(ids, _id)) {
                      return false;
                    }
                    _M0MPB3Map3setGsbE(ids, _id, true);
                  } else {
                    break _L$2;
                  }
                } else {
                  break _L$2;
                }
                break _L;
              }
              return false;
            }
            _tmp$3 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        switch (pending.$tag) {
          case 1: {
            return true;
          }
          case 4: {
            const _Text = pending;
            const _id = _Text._0;
            return _M0MPB3Map8containsGsbE(ids, _id);
          }
          default: {
            return false;
          }
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function _M0FP37Hosi1216syasou6domain11valid__view(value) {
  return _M0FP37Hosi1216syasou6domain12is__text__in(value, ["forest", "snow", "train"]);
}
function _M0FP37Hosi1216syasou6domain11limit__text(text, limit) {
  const _p = text.length;
  return text.substring(0, _p < limit ? _p : limit);
}
function _M0FP37Hosi1216syasou6domain14js__whitespace(code) {
  const _bind = code;
  switch (_bind) {
    case 9: {
      return true;
    }
    case 10: {
      return true;
    }
    case 11: {
      return true;
    }
    case 12: {
      return true;
    }
    case 13: {
      return true;
    }
    case 32: {
      return true;
    }
    case 160: {
      return true;
    }
    case 5760: {
      return true;
    }
    case 8192: {
      return true;
    }
    case 8193: {
      return true;
    }
    case 8194: {
      return true;
    }
    case 8195: {
      return true;
    }
    case 8196: {
      return true;
    }
    case 8197: {
      return true;
    }
    case 8198: {
      return true;
    }
    case 8199: {
      return true;
    }
    case 8200: {
      return true;
    }
    case 8201: {
      return true;
    }
    case 8202: {
      return true;
    }
    case 8232: {
      return true;
    }
    case 8233: {
      return true;
    }
    case 8239: {
      return true;
    }
    case 8287: {
      return true;
    }
    case 12288: {
      return true;
    }
    case 65279: {
      return true;
    }
    default: {
      return false;
    }
  }
}
function _M0FP37Hosi1216syasou6domain17title__from__note(note) {
  let start = 0;
  let end = note.length;
  while (true) {
    let _tmp;
    if (start < end) {
      const _tmp$2 = start;
      _tmp = _M0FP37Hosi1216syasou6domain14js__whitespace(_tmp$2 >>> 0 < note.length ? note.charCodeAt(_tmp$2) : $oob());
    } else {
      _tmp = false;
    }
    if (_tmp) {
      start = start + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    let _tmp;
    if (end > start) {
      const _tmp$2 = end - 1 | 0;
      _tmp = _M0FP37Hosi1216syasou6domain14js__whitespace(_tmp$2 >>> 0 < note.length ? note.charCodeAt(_tmp$2) : $oob());
    } else {
      _tmp = false;
    }
    if (_tmp) {
      end = end - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let line_end = start;
  while (true) {
    let _tmp;
    if (line_end < end) {
      const _tmp$2 = line_end;
      _tmp = (_tmp$2 >>> 0 < note.length ? note.charCodeAt(_tmp$2) : $oob()) !== 10;
    } else {
      _tmp = false;
    }
    if (_tmp) {
      line_end = line_end + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP37Hosi1216syasou6domain11limit__text(note.substring(start, line_end), 80);
}
function _M0FP37Hosi1216syasou6domain11number__max(a, b) {
  return a !== a ? a : b !== b ? b : a === 0 && b === 0 ? (1 / a > 0 || 1 / b > 0 ? 0 : -0) : _M0MPC16double6Double3max(a, b);
}
function _M0FP37Hosi1216syasou6domain16collect__arrival(journey, tickets, note) {
  _L: {
    const _bind = journey.id;
    if (_bind === undefined) {
      break _L;
    } else {
      const _Some = _bind;
      const _id = _Some;
      const _p = "";
      if (!(_id === _p)) {
        const _bind$2 = journey.started_at;
        if (_bind$2.$tag === 1) {
          const _Some$2 = _bind$2;
          const _started_at = _Some$2._0;
          const _bind$3 = journey.arrived_at;
          if (_bind$3.$tag === 1) {
            const _Some$3 = _bind$3;
            const _arrived_at = _Some$3._0;
            let _tmp;
            let _p$2;
            _L$2: {
              _L$3: {
                const _p$3 = tickets.length;
                let _tmp$2 = 0;
                while (true) {
                  const _p$4 = _tmp$2;
                  if (_p$4 < _p$3) {
                    const _p$5 = tickets[_p$4];
                    if (_p$5.id === _id) {
                      _p$2 = true;
                      break _L$3;
                    }
                    _tmp$2 = _p$4 + 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
                _tmp = false;
                break _L$2;
              }
              _tmp = _p$2;
            }
            if (_tmp) {
              return undefined;
            }
            return new _M0TP37Hosi1216syasou6domain6Ticket(_id, undefined, _started_at, _M0FP37Hosi1216syasou6domain11number__max(_started_at, _arrived_at), _M0MPC16option6Option10unwrap__orGsE(journey.speed, "local"), _M0MPC16option6Option10unwrap__orGsE(journey.scene, "mist"), _M0FP37Hosi1216syasou6domain17title__from__note(note), _M0FP37Hosi1216syasou6domain11limit__text(note, 300));
          } else {
            return undefined;
          }
        } else {
          return undefined;
        }
      } else {
        break _L;
      }
    }
  }
  return undefined;
}
function _M0MP37Hosi1216syasou6domain13JourneyChange5value(self, previous) {
  switch (self.$tag) {
    case 0: {
      return previous;
    }
    case 1: {
      const _Replace = self;
      const _next = _Replace._0;
      return _next;
    }
    default: {
      const _Patch = self;
      const _next$2 = _Patch._0;
      return _next$2;
    }
  }
}
function _M0FP37Hosi1216syasou6domain15arrival__change(state, change, note, force) {
  const _bind = _M0FP37Hosi1216syasou6domain16collect__arrival(_M0MP37Hosi1216syasou6domain13JourneyChange5value(change, state.journey), state.tickets, note);
  if (_bind === undefined) {
    if (change.$tag === 0) {
      return force ? new _M0DTP37Hosi1216syasou6domain12TravelChange6Update(_M0DTP37Hosi1216syasou6domain13JourneyChange4Keep__, _M0DTP37Hosi1216syasou6domain12TicketChange11KeepTickets__, state.pending_arrival_id) : _M0DTP37Hosi1216syasou6domain12TravelChange10KeepTravel__;
    } else {
      return new _M0DTP37Hosi1216syasou6domain12TravelChange6Update(change, _M0DTP37Hosi1216syasou6domain12TicketChange11KeepTickets__, state.pending_arrival_id);
    }
  } else {
    const _Some = _bind;
    const _ticket = _Some;
    return new _M0DTP37Hosi1216syasou6domain12TravelChange6Update(change, new _M0DTP37Hosi1216syasou6domain12TicketChange7Prepend(_ticket), _ticket.id);
  }
}
function _M0FP37Hosi1216syasou6domain7advance(state, now) {
  _L: {
    if (state.running) {
      const _bind = state.deadline;
      if (_bind.$tag === 1) {
        const _Some = _bind;
        const _deadline = _Some._0;
        if (now < _deadline) {
          return _M0DTP37Hosi1216syasou6domain13JourneyChange4Keep__;
        }
        if (_M0IP37Hosi1216syasou6domain5PhasePB2Eq5equal(state.phase, 1)) {
          const rest_deadline = _deadline + state.rest_minutes * 60000;
          const next = now < rest_deadline ? new _M0TP37Hosi1216syasou6domain7Journey(2, state.running, new _M0DTPC16option6OptionGdE4Some(rest_deadline), _M0DTPC16option6OptionGdE4None__, state.focus_minutes, state.rest_minutes, state.id, state.started_at, new _M0DTPC16option6OptionGdE4Some(_deadline), state.speed, state.scene) : new _M0TP37Hosi1216syasou6domain7Journey(3, false, _M0DTPC16option6OptionGdE4None__, _M0DTPC16option6OptionGdE4None__, state.focus_minutes, state.rest_minutes, state.id, state.started_at, new _M0DTPC16option6OptionGdE4Some(_deadline), state.speed, state.scene);
          return new _M0DTP37Hosi1216syasou6domain13JourneyChange5Patch(next, true);
        } else {
          return new _M0DTP37Hosi1216syasou6domain13JourneyChange5Patch(new _M0TP37Hosi1216syasou6domain7Journey(3, false, _M0DTPC16option6OptionGdE4None__, _M0DTPC16option6OptionGdE4None__, state.focus_minutes, state.rest_minutes, state.id, state.started_at, state.arrived_at, state.speed, state.scene), false);
        }
      } else {
        break _L;
      }
    } else {
      break _L;
    }
  }
  return _M0DTP37Hosi1216syasou6domain13JourneyChange4Keep__;
}
function _M0FP37Hosi1216syasou6domain7restore(state, now, note) {
  return _M0FP37Hosi1216syasou6domain15arrival__change(state, _M0FP37Hosi1216syasou6domain7advance(state.journey, now), note, true);
}
function _M0FP37Hosi1216syasou6domain11number__min(a, b) {
  return a !== a ? a : b !== b ? b : a === 0 && b === 0 ? (1 / a < 0 || 1 / b < 0 ? -0 : 0) : _M0MPC16double6Double3min(a, b);
}
function _M0FP37Hosi1216syasou6domain15reduce__journey(state, action) {
  switch (action.$tag) {
    case 0: {
      const _Start = action;
      const _now = _Start._0;
      const _focus_minutes = _Start._1;
      const _rest_minutes = _Start._2;
      const _id = _Start._3;
      const _speed = _Start._4;
      const _scene = _Start._5;
      return new _M0DTP37Hosi1216syasou6domain13JourneyChange7Replace(new _M0TP37Hosi1216syasou6domain7Journey(1, true, _focus_minutes === 0 || _focus_minutes !== _focus_minutes ? _M0DTPC16option6OptionGdE4None__ : new _M0DTPC16option6OptionGdE4Some(_now + _focus_minutes * 60000), _M0DTPC16option6OptionGdE4None__, _focus_minutes, _rest_minutes, _id, new _M0DTPC16option6OptionGdE4Some(_now), _M0DTPC16option6OptionGdE4None__, _speed, _scene));
    }
    case 3: {
      const _Finish = action;
      const _now$2 = _Finish._0;
      const _bind = state.arrived_at;
      let arrived_at;
      if (_bind.$tag === 1) {
        arrived_at = state.arrived_at;
      } else {
        arrived_at = _M0IP37Hosi1216syasou6domain5PhasePB2Eq5equal(state.phase, 1) ? new _M0DTPC16option6OptionGdE4Some(_M0FP37Hosi1216syasou6domain11number__min(_now$2, _M0MPC16option6Option10unwrap__orGdE(state.deadline, _now$2))) : _M0DTPC16option6OptionGdE4None__;
      }
      return new _M0DTP37Hosi1216syasou6domain13JourneyChange5Patch(new _M0TP37Hosi1216syasou6domain7Journey(3, false, _M0DTPC16option6OptionGdE4None__, _M0DTPC16option6OptionGdE4None__, state.focus_minutes, state.rest_minutes, state.id, state.started_at, arrived_at, state.speed, state.scene), true);
    }
    case 1: {
      const _Tick = action;
      const _now$3 = _Tick._0;
      return _M0FP37Hosi1216syasou6domain7advance(state, _now$3);
    }
    default: {
      const _Toggle = action;
      const _now$4 = _Toggle._0;
      const change = _M0FP37Hosi1216syasou6domain7advance(state, _now$4);
      const current = _M0MP37Hosi1216syasou6domain13JourneyChange5value(change, state);
      if (_M0IP016_24default__implPB2Eq10not__equalGRP37Hosi1216syasou6domain5PhaseE(current.phase, 1) && _M0IP016_24default__implPB2Eq10not__equalGRP37Hosi1216syasou6domain5PhaseE(current.phase, 2)) {
        return change;
      }
      let write_arrival;
      if (change.$tag === 2) {
        const _Patch = change;
        write_arrival = _Patch._1;
      } else {
        write_arrival = false;
      }
      const next = current.running ? new _M0TP37Hosi1216syasou6domain7Journey(current.phase, false, _M0DTPC16option6OptionGdE4None__, _M0MPC16option6Option3mapGddE(current.deadline, (d) => _M0FP37Hosi1216syasou6domain11number__max(0, d - _now$4)), current.focus_minutes, current.rest_minutes, current.id, current.started_at, current.arrived_at, current.speed, current.scene) : new _M0TP37Hosi1216syasou6domain7Journey(current.phase, true, _M0MPC16option6Option3mapGddE(current.remaining, (r) => _now$4 + r), _M0DTPC16option6OptionGdE4None__, current.focus_minutes, current.rest_minutes, current.id, current.started_at, current.arrived_at, current.speed, current.scene);
      return new _M0DTP37Hosi1216syasou6domain13JourneyChange5Patch(next, write_arrival);
    }
  }
}
function _M0FP37Hosi1216syasou6domain14reduce__travel(state, action) {
  switch (action.$tag) {
    case 0: {
      const _JourneyEvent = action;
      const _action = _JourneyEvent._0;
      const _note = _JourneyEvent._1;
      return _M0FP37Hosi1216syasou6domain15arrival__change(state, _M0FP37Hosi1216syasou6domain15reduce__journey(state.journey, _action), _note, false);
    }
    case 2: {
      return new _M0DTP37Hosi1216syasou6domain12TravelChange6Update(_M0DTP37Hosi1216syasou6domain13JourneyChange4Keep__, _M0DTP37Hosi1216syasou6domain12TicketChange11KeepTickets__, undefined);
    }
    case 3: {
      const _Edit = action;
      const _id = _Edit._0;
      const _title = _Edit._1;
      const _note$2 = _Edit._2;
      const _p = state.tickets;
      const _p$2 = new Array(_p.length);
      const _p$3 = _p.length;
      let _tmp = 0;
      while (true) {
        const _p$4 = _tmp;
        if (_p$4 < _p$3) {
          const _p$5 = _p[_p$4];
          _p$2[_p$4] = _p$5.id === _id ? { _0: _M0FP37Hosi1216syasou6domain11limit__text(_M0MPC16option6Option10unwrap__orGsE(_title, _p$5.title), 80), _1: _M0FP37Hosi1216syasou6domain11limit__text(_M0MPC16option6Option10unwrap__orGsE(_note$2, _p$5.note), 300) } : undefined;
          _tmp = _p$4 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const edits = _p$2;
      return new _M0DTP37Hosi1216syasou6domain12TravelChange6Update(_M0DTP37Hosi1216syasou6domain13JourneyChange4Keep__, new _M0DTP37Hosi1216syasou6domain12TicketChange11EditTickets(edits), state.pending_arrival_id);
    }
    default: {
      const _Welcome = action;
      const _now = _Welcome._0;
      const _bind = state.pending_arrival_id;
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const _id$2 = _Some;
        const _p$4 = "";
        if (!(_id$2 === _p$4)) {
          return _M0DTP37Hosi1216syasou6domain12TravelChange10KeepTravel__;
        }
      }
      const _bind$2 = state.tickets;
      const _bind$3 = _bind$2.length;
      let _tmp$2 = 0;
      while (true) {
        const _ = _tmp$2;
        if (_ < _bind$3) {
          const ticket = _bind$2[_];
          if (_M0IPC16option6OptionPB2Eq5equalGsE(ticket.kind, _M0FP37Hosi1216syasou6domain14reduce__travelN6constrS399)) {
            return new _M0DTP37Hosi1216syasou6domain12TravelChange6Update(_M0DTP37Hosi1216syasou6domain13JourneyChange4Keep__, _M0DTP37Hosi1216syasou6domain12TicketChange11KeepTickets__, ticket.id);
          }
          _tmp$2 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const ticket = new _M0TP37Hosi1216syasou6domain6Ticket(_M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS389, _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS390, _now, _now, _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS391, _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS392, _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS393, _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS394);
      return new _M0DTP37Hosi1216syasou6domain12TravelChange6Update(_M0DTP37Hosi1216syasou6domain13JourneyChange4Keep__, new _M0DTP37Hosi1216syasou6domain12TicketChange7Prepend(ticket), _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS389);
    }
  }
}
function _M0FP37Hosi1216syasou6domain10sound__mix(speed, train, rain, wind, moving, open) {
  let _tmp;
  switch (speed) {
    case "rapid": {
      _tmp = 1.4;
      break;
    }
    case "express": {
      _tmp = 1.05;
      break;
    }
    default: {
      _tmp = 1.9;
    }
  }
  return new _M0TP37Hosi1216syasou6domain8SoundMix(_tmp, train / 100 * (moving ? 0.65 : 0.07), rain / 100 * (open ? 0.32 : 0.16), wind / 100 * (open ? 0.55 : 0.12) * (moving ? 1 : 0.3), open ? 2600 : 850);
}
function _M0FP37Hosi1216syasou6domain13noise__sample(previous, random) {
  const white = random * 2 - 1;
  const brown = (previous + 0.025 * white) / 1.025;
  return { _0: brown, _1: white * 0.35 + brown * 1.8 };
}
function _M0FP37Hosi1216syasou6domain10beat__step(period, beat) {
  const strength = (beat % 2 | 0) === 0 ? 0.32 : 0.22;
  const spacing = _M0MPC15array5Array2atGdE([0.16, 0.34, 0.16, 0.34], beat % 4 | 0);
  return { _0: strength, _1: period * spacing };
}
function _M0FP37Hosi1216syasou6domain16animation__delta(elapsed, speed) {
  const _tmp = _M0FP37Hosi1216syasou6domain11number__min(elapsed / 1000, 0.12);
  let _tmp$2;
  switch (speed) {
    case "rapid": {
      _tmp$2 = 1.2;
      break;
    }
    case "express": {
      _tmp$2 = 2.1;
      break;
    }
    default: {
      _tmp$2 = 0.65;
    }
  }
  return _tmp * _tmp$2;
}
function _M0FP37Hosi1216syasou6domain13travel__delta(elapsed) {
  return _M0FP37Hosi1216syasou6domain11number__min(elapsed / 1000, 0.12);
}
function _M0FP37Hosi1216syasou6domain12scene__index(scene) {
  switch (scene) {
    case "dawn": {
      return 1;
    }
    case "night": {
      return 2;
    }
    default: {
      return 0;
    }
  }
}
function _M0MP26mizchi8js__core7Promise7resolveGuE(x) {
  return _M0FP26mizchi8js__core21ffi__promise__resolve(x);
}
function _M0MP26mizchi8js__core7Promise4thenGuuE(self, resolve) {
  return _M0FP26mizchi8js__core18ffi__promise__then(self, (a) => {
    let _try_err;
    _L: {
      const _bind = resolve(a);
      if (_bind.$tag === 1) {
        const _ok = _bind;
        return _ok._0;
      } else {
        const _err = _bind;
        _try_err = _err._0;
        break _L;
      }
    }
    return _M0FP26mizchi8js__core20ffi__promise__reject(_try_err);
  });
}
function _M0MP26mizchi8js__core7Promise7catch__GuuE(self, f) {
  return _M0MP26mizchi8js__core3Any6__call(self, "catch", [f]);
}
function _M0MP26mizchi8js__core8Nullable10to__optionGRP37Hosi1216syasou5webgl7ContextE(self) {
  return _M0FP26mizchi8js__core8is__null(self) ? _M0DTPC16option6OptionGRP37Hosi1216syasou5webgl7ContextE4None__ : new _M0DTPC16option6OptionGRP37Hosi1216syasou5webgl7ContextE4Some(self);
}
function _M0FP26mizchi8js__core9try__sync(op) {
  const result = new _M0TPC13ref3RefGORP26mizchi8js__core3AnyE(_M0DTPC16option6OptionGRP26mizchi8js__core3AnyE4None__);
  const error = new _M0TPC13ref3RefGOsE(undefined);
  _M0FP26mizchi8js__core15ffi__wrap__sync(op, (v) => {
    result.val = new _M0DTPC16option6OptionGRP26mizchi8js__core3AnyE4Some(v);
  }, (e) => {
    const msg = _M0MP26mizchi8js__core3Any5__get(e, "message");
    error.val = msg;
  });
  const _bind = error.val;
  if (_bind === undefined) {
    const _bind$2 = result.val;
    if (_bind$2.$tag === 1) {
      const _Some = _bind$2;
      const _v = _Some._0;
      return new _M0DTPC16result6ResultGRP26mizchi8js__core3AnyRP26mizchi8js__core7JsErrorE2Ok(_v);
    } else {
      return new _M0DTPC16result6ResultGRP26mizchi8js__core3AnyRP26mizchi8js__core7JsErrorE3Err(new _M0DTPC15error5Error37mizchi_2fjs__core_2eJsError_2eJsError("No result"));
    }
  } else {
    const _Some = _bind;
    const _msg = _Some;
    return new _M0DTPC16result6ResultGRP26mizchi8js__core3AnyRP26mizchi8js__core7JsErrorE3Err(new _M0DTPC15error5Error37mizchi_2fjs__core_2eJsError_2eJsError(_msg));
  }
}
function _M0FP26mizchi8js__core13from__entries(entries) {
  return _M0FP26mizchi8js__core18ffi__from__entries(_M0MPC15array10FixedArray11from__arrayGUsRP26mizchi8js__core3AnyEE(new _M0TPB9ArrayViewGUsRP26mizchi8js__core3AnyEE(entries, 0, entries.length)));
}
function _M0FP36mizchi11js__builtin6global12global__this() {
  return _M0FP36mizchi11js__builtin6global10globalThis();
}
function _M0MP36mizchi7js__web5event11EventTarget24addEventListener_2einner(self, event_type, handler, capture, once, passive, signal) {
  const entries = [];
  _M0MPC15array5Array4pushGRP37Hosi1216syasou7browser6SourceE(entries, { _0: "capture", _1: capture });
  _M0MPC15array5Array4pushGRP37Hosi1216syasou7browser6SourceE(entries, { _0: "once", _1: once });
  _M0MPC15array5Array4pushGRP37Hosi1216syasou7browser6SourceE(entries, { _0: "passive", _1: passive });
  if (signal.$tag === 1) {
    const _Some = signal;
    const _v = _Some._0;
    _M0MPC15array5Array4pushGRP37Hosi1216syasou7browser6SourceE(entries, { _0: "signal", _1: _v });
  }
  _M0MP26mizchi8js__core3Any6__call(self, "addEventListener", [event_type, handler, _M0FP26mizchi8js__core13from__entries(entries)]);
}
function _M0MP36mizchi7js__web5event11EventTarget27removeEventListener_2einner(self, event_type, handler, capture) {
  _M0MP26mizchi8js__core3Any6__call(self, "removeEventListener", [event_type, handler, _M0FP26mizchi8js__core13from__entries([{ _0: "capture", _1: capture }])]);
}
function _M0MP36mizchi11js__browser3dom6Window11setInterval(self, handler, delay) {
  return _M0MP26mizchi8js__core3Any6__call(self, "setInterval", [handler, delay]);
}
function _M0MP36mizchi11js__browser3dom6Window13clearInterval(self, id) {
  _M0MP26mizchi8js__core3Any6__call(self, "clearInterval", [id]);
}
function _M0MP36mizchi11js__browser3dom6Window21requestAnimationFrame(self, callback) {
  return _M0MP26mizchi8js__core3Any6__call(self, "requestAnimationFrame", [callback]);
}
function _M0MP36mizchi11js__browser3dom6Window20cancelAnimationFrame(self, id) {
  _M0MP26mizchi8js__core3Any6__call(self, "cancelAnimationFrame", [id]);
}
function _M0MP36mizchi11js__browser3dom5Event14preventDefault(self) {
  _M0MP26mizchi8js__core3Any6__call(self, "preventDefault", []);
}
function _M0FP36mizchi11js__browser3dom10matchMedia(query) {
  return _M0MP26mizchi8js__core3Any6__call(_M0FP26mizchi8js__core12global__this(), "matchMedia", [query]);
}
function _M0MP36mizchi11js__browser3dom14MediaQueryList17addChangeListener(self, listener) {
  _M0MP26mizchi8js__core3Any6__call(self, "addEventListener", ["change", listener]);
}
function _M0MP36mizchi11js__browser3dom14MediaQueryList20removeChangeListener(self, listener) {
  _M0MP26mizchi8js__core3Any6__call(self, "removeEventListener", ["change", listener]);
}
function _M0MP36mizchi11js__browser3dom17HTMLCanvasElement24addEventListener_2einner(self, event_type, handler, capture, once, passive, signal) {
  _M0MP36mizchi7js__web5event11EventTarget24addEventListener_2einner(self, event_type, handler, capture, once, passive, signal);
}
function _M0MP36mizchi11js__browser3dom17HTMLCanvasElement27removeEventListener_2einner(self, event_type, handler, capture) {
  _M0MP36mizchi7js__web5event11EventTarget27removeEventListener_2einner(self, event_type, handler, capture);
}
function _M0MP36mizchi11js__browser3dom8Document24addEventListener_2einner(self, event_type, handler, capture, once, passive, signal) {
  _M0MP36mizchi7js__web5event11EventTarget24addEventListener_2einner(self, event_type, handler, capture, once, passive, signal);
}
function _M0MP36mizchi11js__browser3dom8Document27removeEventListener_2einner(self, event_type, handler, capture) {
  _M0MP36mizchi7js__web5event11EventTarget27removeEventListener_2einner(self, event_type, handler, capture);
}
function _M0MP36mizchi11js__browser8observer14ResizeObserver3new(callback) {
  const ctor = _M0MP26mizchi8js__core3Any5__get(_M0FP36mizchi11js__builtin6global12global__this(), "ResizeObserver");
  return _M0FP26mizchi8js__core3new(ctor, [callback]);
}
function _M0MP36mizchi11js__browser8observer14ResizeObserver7observe(self, target) {
  _M0MP26mizchi8js__core3Any6__call(self, "observe", [target]);
}
function _M0MP36mizchi11js__browser8observer14ResizeObserver10disconnect(self) {
  _M0MP26mizchi8js__core3Any6__call(self, "disconnect", []);
}
function _M0FP36mizchi7js__web11performance11performance() {
  return _M0MP26mizchi8js__core3Any5__get(_M0FP26mizchi8js__core12global__this(), "performance");
}
function _M0MP36mizchi7js__web11performance11Performance3now(self) {
  return _M0MP26mizchi8js__core3Any6__call(self, "now", []);
}
function _M0FP37Hosi1216syasou7browser7compile(gl, shaders, program, kind, source) {
  const _bind = _M0MP26mizchi8js__core8Nullable10to__optionGRP37Hosi1216syasou5webgl7ContextE(_M0MP37Hosi1216syasou5webgl7Context14create__shader(gl, kind));
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _shader = _Some._0;
    _M0MPC15array5Array4pushGRP26mizchi8js__core3AnyE(shaders, _shader);
    _M0MP37Hosi1216syasou5webgl7Context14shader__source(gl, _shader, source);
    _M0MP37Hosi1216syasou5webgl7Context15compile__shader(gl, _shader);
    if (!_M0MP37Hosi1216syasou5webgl7Context16shader__compiled(gl, _shader)) {
      return false;
    }
    _M0MP37Hosi1216syasou5webgl7Context14attach__shader(gl, program, _shader);
    return true;
  } else {
    return false;
  }
}
function _M0FP37Hosi1216syasou7browser9catch__jsGbE(f) {
  let _try_err;
  _L: {
    const _bind = _M0FP26mizchi8js__core9try__sync(() => f());
    if (_bind.$tag === 1) {
      const _ok = _bind;
      return _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
  }
  return -1;
}
function _M0MP37Hosi1216syasou7browser8Renderer4draw(self) {
  if (self.disposed || (self.lost || _M0FP37Hosi1216syasou7browser6hidden())) {
    return undefined;
  }
  _M0MP37Hosi1216syasou5webgl7Context8viewport(self.gl, 0, 0, self.canvas.width, self.canvas.height);
  _M0MP37Hosi1216syasou5webgl7Context9uniform2f(self.gl, self.resolution, self.canvas.width + 0, self.canvas.height + 0);
  _M0MP37Hosi1216syasou5webgl7Context9uniform1f(self.gl, self.time, self.animation_time);
  _M0MP37Hosi1216syasou5webgl7Context9uniform1f(self.gl, self.travel, self.reduced_motion.matches ? 0 : self.travel_time);
  _M0MP37Hosi1216syasou5webgl7Context9uniform1f(self.gl, self.scene, _M0FP37Hosi1216syasou6domain12scene__index(self.params.scene));
  _M0MP37Hosi1216syasou5webgl7Context12draw__arrays(self.gl, 4, 0, 6);
}
function _M0MP37Hosi1216syasou7browser8Renderer7animate(self, now) {
  self.frame = 0;
  if (self.disposed || (self.lost || (_M0FP37Hosi1216syasou7browser6hidden() || (self.reduced_motion.matches || !self.params.moving)))) {
    return undefined;
  }
  const elapsed = now - self.last_frame;
  if (elapsed >= 41.6666666666666643) {
    self.animation_time = self.animation_time + _M0FP37Hosi1216syasou6domain16animation__delta(elapsed, self.params.speed);
    if (self.params.travelling) {
      self.travel_time = self.travel_time + _M0FP37Hosi1216syasou6domain13travel__delta(elapsed);
    }
    self.last_frame = now;
    _M0MP37Hosi1216syasou7browser8Renderer4draw(self);
  }
  self.frame = _M0MP36mizchi11js__browser3dom6Window21requestAnimationFrame(_M0FP36mizchi11js__browser3dom6window(), (now$2) => {
    _M0MP37Hosi1216syasou7browser8Renderer7animate(self, now$2);
  });
}
function _M0MP37Hosi1216syasou7browser8Renderer7refresh(self) {
  _M0MP36mizchi11js__browser3dom6Window20cancelAnimationFrame(_M0FP36mizchi11js__browser3dom6window(), self.frame);
  self.frame = 0;
  self.last_frame = _M0MP36mizchi7js__web11performance11Performance3now(_M0FP36mizchi7js__web11performance11performance());
  _M0MP37Hosi1216syasou7browser8Renderer4draw(self);
  if (!self.disposed && (!self.lost && (!_M0FP37Hosi1216syasou7browser6hidden() && (!self.reduced_motion.matches && self.params.moving)))) {
    self.frame = _M0MP36mizchi11js__browser3dom6Window21requestAnimationFrame(_M0FP36mizchi11js__browser3dom6window(), (now) => {
      _M0MP37Hosi1216syasou7browser8Renderer7animate(self, now);
    });
    return;
  } else {
    return;
  }
}
function _M0MP37Hosi1216syasou7browser8Renderer6resize(self) {
  const rect = _M0FP37Hosi1216syasou7browser6bounds(self.canvas);
  const _tmp = self.canvas;
  const _p = _M0MP36mizchi11js__builtin4math4Math5round(rect.width);
  const _p$2 = 1;
  _tmp.width = _p > _p$2 ? _p : _p$2;
  const _tmp$2 = self.canvas;
  const _p$3 = _M0MP36mizchi11js__builtin4math4Math5round(rect.height);
  const _p$4 = 1;
  _tmp$2.height = _p$3 > _p$4 ? _p$3 : _p$4;
  _M0MP37Hosi1216syasou7browser8Renderer7refresh(self);
}
function _M0FP37Hosi1216syasou7browser16create__renderer(canvas, on_unavailable) {
  const _bind = _M0MP26mizchi8js__core8Nullable10to__optionGRP37Hosi1216syasou5webgl7ContextE(_M0FP37Hosi1216syasou5webgl7context(canvas, _M0FP37Hosi1216syasou7browser16create__rendererN6recordS214));
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _gl = _Some._0;
    const shaders = [];
    const _bind$2 = _M0MP26mizchi8js__core8Nullable10to__optionGRP37Hosi1216syasou5webgl7ContextE(_M0MP37Hosi1216syasou5webgl7Context15create__program(_gl));
    if (_bind$2.$tag === 1) {
      const _Some$2 = _bind$2;
      const _program = _Some$2._0;
      const linked = _M0MPC16option6Option10unwrap__orGbE(_M0FP37Hosi1216syasou7browser9catch__jsGbE(() => {
        if (!_M0FP37Hosi1216syasou7browser7compile(_gl, shaders, _program, 35633, _M0FP37Hosi1216syasou7browser14vertex__source)) {
          return false;
        }
        if (!_M0FP37Hosi1216syasou7browser7compile(_gl, shaders, _program, 35632, _M0FP37Hosi1216syasou7browser16fragment__source)) {
          return false;
        }
        _M0MP37Hosi1216syasou5webgl7Context13link__program(_gl, _program);
        return _M0MP37Hosi1216syasou5webgl7Context15program__linked(_gl, _program);
      }), false);
      if (!linked) {
        const _bind$3 = shaders.length;
        let _tmp = 0;
        while (true) {
          const _ = _tmp;
          if (_ < _bind$3) {
            const shader = shaders[_];
            _M0MP37Hosi1216syasou5webgl7Context14delete__shader(_gl, shader);
            _tmp = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _M0MP37Hosi1216syasou5webgl7Context15delete__program(_gl, _program);
        return undefined;
      }
      const buffer = _M0MP37Hosi1216syasou5webgl7Context14create__buffer(_gl);
      _M0MP37Hosi1216syasou5webgl7Context12bind__buffer(_gl, 34962, buffer);
      _M0MP37Hosi1216syasou5webgl7Context17buffer__data__f32(_gl, 34962, [-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1], 35044);
      _M0MP37Hosi1216syasou5webgl7Context12use__program(_gl, _program);
      const position = _M0MP37Hosi1216syasou5webgl7Context19attribute__location(_gl, _program, "a_position");
      _M0MP37Hosi1216syasou5webgl7Context17enable__attribute(_gl, position);
      _M0MP37Hosi1216syasou5webgl7Context18attribute__pointer(_gl, position, 2, 5126, false, 0, 0);
      const resolution = _M0MP37Hosi1216syasou5webgl7Context17uniform__location(_gl, _program, "u_resolution");
      const time = _M0MP37Hosi1216syasou5webgl7Context17uniform__location(_gl, _program, "u_time");
      const travel = _M0MP37Hosi1216syasou5webgl7Context17uniform__location(_gl, _program, "u_travel");
      const scene = _M0MP37Hosi1216syasou5webgl7Context17uniform__location(_gl, _program, "u_scene");
      const reduced_motion = _M0FP36mizchi11js__browser3dom10matchMedia("(prefers-reduced-motion: reduce)");
      const renderer = new _M0TP37Hosi1216syasou7browser8Renderer(canvas, _gl, shaders, _program, buffer, resolution, time, travel, scene, reduced_motion, _M0FP37Hosi1216syasou7browser16create__rendererN6recordS215, 0, 0, _M0MP36mizchi7js__web11performance11Performance3now(_M0FP36mizchi7js__web11performance11performance()), 0, false, false, _M0DTPC16option6OptionGRP36mizchi11js__browser8observer14ResizeObserverE4None__, undefined, undefined, undefined);
      const resize_observer = _M0MP36mizchi11js__browser8observer14ResizeObserver3new((_discard_, _discard_$2) => {
        _M0MP37Hosi1216syasou7browser8Renderer6resize(renderer);
      });
      renderer.observer = new _M0DTPC16option6OptionGRP36mizchi11js__browser8observer14ResizeObserverE4Some(resize_observer);
      _M0MP36mizchi11js__browser8observer14ResizeObserver7observe(resize_observer, canvas);
      const visibility = (_discard_) => {
        _M0MP37Hosi1216syasou7browser8Renderer7refresh(renderer);
      };
      const motion = (_discard_) => {
        _M0MP37Hosi1216syasou7browser8Renderer7refresh(renderer);
      };
      const lost = (event) => {
        const event$2 = event;
        _M0MP36mizchi11js__browser3dom5Event14preventDefault(event$2);
        renderer.lost = true;
        _M0MP36mizchi11js__browser3dom6Window20cancelAnimationFrame(_M0FP36mizchi11js__browser3dom6window(), renderer.frame);
        _M0FP37Hosi1216syasou7browser12set__opacity(canvas, "0");
        on_unavailable();
      };
      renderer.visibility_callback = visibility;
      renderer.motion_callback = motion;
      renderer.lost_callback = lost;
      _M0MP36mizchi11js__browser3dom8Document24addEventListener_2einner(_M0FP36mizchi11js__browser3dom8document(), "visibilitychange", visibility, false, false, false, _M0DTPC16option6OptionGRP311moonbitlang5async9js__async11AbortSignalE4None__);
      _M0MP36mizchi11js__browser3dom14MediaQueryList17addChangeListener(reduced_motion, motion);
      _M0MP36mizchi11js__browser3dom17HTMLCanvasElement24addEventListener_2einner(canvas, "webglcontextlost", lost, false, false, false, _M0DTPC16option6OptionGRP311moonbitlang5async9js__async11AbortSignalE4None__);
      _M0MP37Hosi1216syasou7browser8Renderer6resize(renderer);
      return renderer;
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
}
function _M0MP37Hosi1216syasou7browser8Renderer6update(self, params) {
  if (!params.travelling) {
    self.travel_time = 0;
  }
  self.params = params;
  _M0MP37Hosi1216syasou7browser8Renderer7refresh(self);
}
function _M0MP37Hosi1216syasou7browser8Renderer7dispose(self) {
  self.disposed = true;
  _M0MP36mizchi11js__browser3dom6Window20cancelAnimationFrame(_M0FP36mizchi11js__browser3dom6window(), self.frame);
  const _bind = self.observer;
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _observer = _Some._0;
    _M0MP36mizchi11js__browser8observer14ResizeObserver10disconnect(_observer);
  }
  const _bind$2 = self.visibility_callback;
  if (_bind$2 === undefined) {
  } else {
    const _Some = _bind$2;
    const _callback = _Some;
    _M0MP36mizchi11js__browser3dom8Document27removeEventListener_2einner(_M0FP36mizchi11js__browser3dom8document(), "visibilitychange", _callback, false);
  }
  const _bind$3 = self.motion_callback;
  if (_bind$3 === undefined) {
  } else {
    const _Some = _bind$3;
    const _callback = _Some;
    _M0MP36mizchi11js__browser3dom14MediaQueryList20removeChangeListener(self.reduced_motion, _callback);
  }
  const _bind$4 = self.lost_callback;
  if (_bind$4 === undefined) {
  } else {
    const _Some = _bind$4;
    const _callback = _Some;
    _M0MP36mizchi11js__browser3dom17HTMLCanvasElement27removeEventListener_2einner(self.canvas, "webglcontextlost", _callback, false);
  }
  _M0MP37Hosi1216syasou5webgl7Context14delete__buffer(self.gl, self.buffer);
  const _bind$5 = self.shaders;
  const _bind$6 = _bind$5.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$6) {
      const shader = _bind$5[_];
      _M0MP37Hosi1216syasou5webgl7Context14delete__shader(self.gl, shader);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MP37Hosi1216syasou5webgl7Context15delete__program(self.gl, self.program);
}
function _M0FP37Hosi1216syasou7browser12noise__layer(context, noise, sources, kind, frequency, destination) {
  const source = _M0MP37Hosi1216syasou8webaudio12AudioContext14create__source(context);
  _M0MP37Hosi1216syasou8webaudio21AudioBufferSourceNode11set__buffer(source, noise);
  _M0MP37Hosi1216syasou8webaudio21AudioBufferSourceNode9set__loop(source, true);
  const filter = _M0MP37Hosi1216syasou8webaudio12AudioContext14create__filter(context);
  _M0MP37Hosi1216syasou8webaudio16BiquadFilterNode9set__type(filter, kind);
  _M0MP37Hosi1216syasou8webaudio10AudioParam10set__value(_M0MP37Hosi1216syasou8webaudio16BiquadFilterNode9frequency(filter), frequency);
  _M0MP37Hosi1216syasou8webaudio10AudioParam10set__value(_M0MP37Hosi1216syasou8webaudio16BiquadFilterNode1q(filter), 0.5);
  const gain = _M0MP37Hosi1216syasou8webaudio12AudioContext12create__gain(context);
  _M0MP37Hosi1216syasou8webaudio10AudioParam10set__value(_M0MP37Hosi1216syasou8webaudio8GainNode4gain(gain), 0);
  _M0MP37Hosi1216syasou8webaudio9AudioNode7connect(_M0MP37Hosi1216syasou8webaudio9AudioNode7connect(_M0MP37Hosi1216syasou8webaudio9AudioNode7connect(source, filter), gain), destination);
  _M0MP37Hosi1216syasou8webaudio21AudioBufferSourceNode5start(source, 0, _M0MP36mizchi11js__builtin4math4Math6random() * 4);
  _M0MPC15array5Array4pushGRP37Hosi1216syasou7browser6SourceE(sources, new _M0DTP37Hosi1216syasou7browser6Source5Noise(source));
  return gain;
}
function _M0FP37Hosi1216syasou7browser13create__sound() {
  const context = _M0MP37Hosi1216syasou8webaudio12AudioContext12AudioContext();
  const master = _M0MP37Hosi1216syasou8webaudio12AudioContext12create__gain(context);
  _M0MP37Hosi1216syasou8webaudio10AudioParam10set__value(_M0MP37Hosi1216syasou8webaudio8GainNode4gain(master), 0);
  const compressor = _M0MP37Hosi1216syasou8webaudio12AudioContext18create__compressor(context);
  _M0MP37Hosi1216syasou8webaudio10AudioParam10set__value(_M0MP37Hosi1216syasou8webaudio22DynamicsCompressorNode9threshold(compressor), -18);
  _M0MP37Hosi1216syasou8webaudio10AudioParam10set__value(_M0MP37Hosi1216syasou8webaudio22DynamicsCompressorNode5ratio(compressor), 4);
  _M0MP37Hosi1216syasou8webaudio9AudioNode7connect(_M0MP37Hosi1216syasou8webaudio9AudioNode7connect(master, compressor), _M0MP37Hosi1216syasou8webaudio12AudioContext11destination(context));
  const noise = _M0MP37Hosi1216syasou8webaudio12AudioContext14create__buffer(context, 2, _M0MPC16double6Double7to__int(_M0MP37Hosi1216syasou8webaudio12AudioContext12sample__rate(context) * 5), _M0MP37Hosi1216syasou8webaudio12AudioContext12sample__rate(context));
  let _tmp = 0;
  while (true) {
    const channel = _tmp;
    if (channel < 2) {
      const data = _M0MP37Hosi1216syasou8webaudio11AudioBuffer7channel(noise, channel);
      let brown = 0;
      const _bind = _M0MP37Hosi1216syasou8webaudio7Samples6length(data);
      let _tmp$2 = 0;
      while (true) {
        const i = _tmp$2;
        if (i < _bind) {
          const _bind$2 = _M0FP37Hosi1216syasou6domain13noise__sample(brown, _M0MP36mizchi11js__builtin4math4Math6random());
          const _next = _bind$2._0;
          const _value = _bind$2._1;
          brown = _next;
          _M0MP37Hosi1216syasou8webaudio7Samples3set(data, i, _value);
          _tmp$2 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = channel + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const sources = [];
  const cabin = _M0MP37Hosi1216syasou8webaudio12AudioContext14create__filter(context);
  _M0MP37Hosi1216syasou8webaudio16BiquadFilterNode9set__type(cabin, "lowpass");
  _M0MP37Hosi1216syasou8webaudio10AudioParam10set__value(_M0MP37Hosi1216syasou8webaudio16BiquadFilterNode9frequency(cabin), 850);
  _M0MP37Hosi1216syasou8webaudio10AudioParam10set__value(_M0MP37Hosi1216syasou8webaudio16BiquadFilterNode1q(cabin), 0.4);
  const train = _M0FP37Hosi1216syasou7browser12noise__layer(context, noise, sources, "lowpass", 220, cabin);
  _M0MP37Hosi1216syasou8webaudio9AudioNode7connect(cabin, master);
  const rain = _M0FP37Hosi1216syasou7browser12noise__layer(context, noise, sources, "highpass", 1400, master);
  const wind = _M0FP37Hosi1216syasou7browser12noise__layer(context, noise, sources, "bandpass", 360, master);
  const _bind = [49, 73];
  const _bind$2 = _bind.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$2) {
      const frequency = _bind[_];
      const oscillator = _M0MP37Hosi1216syasou8webaudio12AudioContext18create__oscillator(context);
      _M0MP37Hosi1216syasou8webaudio10AudioParam10set__value(_M0MP37Hosi1216syasou8webaudio14OscillatorNode9frequency(oscillator), frequency);
      const gain = _M0MP37Hosi1216syasou8webaudio12AudioContext12create__gain(context);
      _M0MP37Hosi1216syasou8webaudio10AudioParam10set__value(_M0MP37Hosi1216syasou8webaudio8GainNode4gain(gain), 0.035);
      _M0MP37Hosi1216syasou8webaudio9AudioNode7connect(_M0MP37Hosi1216syasou8webaudio9AudioNode7connect(oscillator, gain), train);
      _M0MP37Hosi1216syasou8webaudio14OscillatorNode5start(oscillator);
      _M0MPC15array5Array4pushGRP37Hosi1216syasou7browser6SourceE(sources, new _M0DTP37Hosi1216syasou7browser6Source4Tone(oscillator));
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP37Hosi1216syasou7browser5Sound(context, master, train, rain, wind, cabin, noise, sources, undefined, 0, 0, true, 1.9);
}
function _M0MP37Hosi1216syasou7browser5Sound5clack(self, time, strength) {
  const noise = _M0MP37Hosi1216syasou8webaudio12AudioContext14create__source(self.context);
  _M0MP37Hosi1216syasou8webaudio21AudioBufferSourceNode11set__buffer(noise, self.noise);
  const filter = _M0MP37Hosi1216syasou8webaudio12AudioContext14create__filter(self.context);
  _M0MP37Hosi1216syasou8webaudio16BiquadFilterNode9set__type(filter, "bandpass");
  _M0MP37Hosi1216syasou8webaudio10AudioParam10set__value(_M0MP37Hosi1216syasou8webaudio16BiquadFilterNode9frequency(filter), 330);
  _M0MP37Hosi1216syasou8webaudio10AudioParam10set__value(_M0MP37Hosi1216syasou8webaudio16BiquadFilterNode1q(filter), 0.8);
  const envelope = _M0MP37Hosi1216syasou8webaudio12AudioContext12create__gain(self.context);
  _M0MP37Hosi1216syasou8webaudio10AudioParam8at__time(_M0MP37Hosi1216syasou8webaudio8GainNode4gain(envelope), 0.001, time);
  _M0MP37Hosi1216syasou8webaudio10AudioParam17exponential__ramp(_M0MP37Hosi1216syasou8webaudio8GainNode4gain(envelope), strength, time + 0.012);
  _M0MP37Hosi1216syasou8webaudio10AudioParam17exponential__ramp(_M0MP37Hosi1216syasou8webaudio8GainNode4gain(envelope), 0.001, time + 0.16);
  _M0MP37Hosi1216syasou8webaudio9AudioNode7connect(_M0MP37Hosi1216syasou8webaudio9AudioNode7connect(_M0MP37Hosi1216syasou8webaudio9AudioNode7connect(noise, filter), envelope), self.train);
  _M0MP37Hosi1216syasou8webaudio21AudioBufferSourceNode5start(noise, time, _M0MP36mizchi11js__builtin4math4Math6random() * 4);
  _M0MP37Hosi1216syasou8webaudio21AudioBufferSourceNode4stop(noise, time + 0.18);
  _M0MP37Hosi1216syasou8webaudio21AudioBufferSourceNode9on__ended(noise, () => {
    _M0MP37Hosi1216syasou8webaudio9AudioNode10disconnect(noise);
    _M0MP37Hosi1216syasou8webaudio9AudioNode10disconnect(filter);
    _M0MP37Hosi1216syasou8webaudio9AudioNode10disconnect(envelope);
  });
}
function _M0MP37Hosi1216syasou7browser5Sound8schedule(self) {
  const now = _M0MP37Hosi1216syasou8webaudio12AudioContext13current__time(self.context);
  if (!self.moving) {
    self.next_beat = now + 0.1;
    return undefined;
  }
  if (self.next_beat < now) {
    self.next_beat = now + 0.02;
  }
  while (true) {
    if (self.next_beat < now + 0.18) {
      const _bind = _M0FP37Hosi1216syasou6domain10beat__step(self.period, self.beat);
      const _strength = _bind._0;
      const _step = _bind._1;
      _M0MP37Hosi1216syasou7browser5Sound5clack(self, self.next_beat, _strength);
      self.next_beat = self.next_beat + _step;
      self.beat = self.beat + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MP37Hosi1216syasou7browser5Sound6enable(self) {
  return _M0MP26mizchi8js__core7Promise4thenGuuE(_M0MP37Hosi1216syasou8webaudio12AudioContext8resume__(self.context), (_discard_) => {
    const _p = _M0MP37Hosi1216syasou8webaudio12AudioContext5state(self.context);
    const _p$2 = "running";
    if (!(_p === _p$2)) {
      _M0FP26mizchi8js__core12throw__error("audio-unavailable");
    }
    _M0MP37Hosi1216syasou8webaudio10AudioParam6target(_M0MP37Hosi1216syasou8webaudio8GainNode4gain(self.master), 0.7, _M0MP37Hosi1216syasou8webaudio12AudioContext13current__time(self.context), 0.4);
    self.next_beat = _M0MP37Hosi1216syasou8webaudio12AudioContext13current__time(self.context) + 0.1;
    self.beat = 0;
    const _bind = self.scheduler;
    if (_bind === undefined) {
      self.scheduler = _M0MP36mizchi11js__browser3dom6Window11setInterval(_M0FP36mizchi11js__browser3dom6window(), () => {
        _M0MP37Hosi1216syasou7browser5Sound8schedule(self);
      }, 80);
    }
    return new _M0DTPC16result6ResultGRP26mizchi8js__core7PromiseGuERPC15error5ErrorE2Ok(_M0MP26mizchi8js__core7Promise7resolveGuE(undefined));
  });
}
function _M0MP37Hosi1216syasou7browser5Sound7disable(self) {
  _M0MP37Hosi1216syasou8webaudio10AudioParam6target(_M0MP37Hosi1216syasou8webaudio8GainNode4gain(self.master), 0, _M0MP37Hosi1216syasou8webaudio12AudioContext13current__time(self.context), 0.1);
  const _bind = self.scheduler;
  if (_bind === undefined) {
  } else {
    const _Some = _bind;
    const _id = _Some;
    _M0MP36mizchi11js__browser3dom6Window13clearInterval(_M0FP36mizchi11js__browser3dom6window(), _id);
  }
  self.scheduler = undefined;
  return _M0MP37Hosi1216syasou8webaudio12AudioContext7suspend(self.context);
}
function _M0MP37Hosi1216syasou7browser5Sound6update(self, mix, moving) {
  const now = _M0MP37Hosi1216syasou8webaudio12AudioContext13current__time(self.context);
  self.moving = moving;
  self.period = mix.period;
  _M0MP37Hosi1216syasou8webaudio10AudioParam6target(_M0MP37Hosi1216syasou8webaudio8GainNode4gain(self.train), mix.train, now, 0.7);
  _M0MP37Hosi1216syasou8webaudio10AudioParam6target(_M0MP37Hosi1216syasou8webaudio8GainNode4gain(self.rain), mix.rain, now, 0.7);
  _M0MP37Hosi1216syasou8webaudio10AudioParam6target(_M0MP37Hosi1216syasou8webaudio8GainNode4gain(self.wind), mix.wind, now, 0.7);
  _M0MP37Hosi1216syasou8webaudio10AudioParam6target(_M0MP37Hosi1216syasou8webaudio16BiquadFilterNode9frequency(self.cabin), mix.cabin, now, 0.7);
}
function _M0MP37Hosi1216syasou7browser5Sound7dispose(self) {
  const _bind = self.scheduler;
  if (_bind === undefined) {
  } else {
    const _Some = _bind;
    const _id = _Some;
    _M0MP36mizchi11js__browser3dom6Window13clearInterval(_M0FP36mizchi11js__browser3dom6window(), _id);
  }
  const _bind$2 = self.sources;
  const _bind$3 = _bind$2.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const source = _bind$2[_];
      if (source.$tag === 0) {
        const _Noise = source;
        const _node = _Noise._0;
        _M0MP37Hosi1216syasou8webaudio21AudioBufferSourceNode9stop__now(_node);
        _M0MP37Hosi1216syasou8webaudio9AudioNode10disconnect(_node);
      } else {
        const _Tone = source;
        const _node = _Tone._0;
        _M0MP37Hosi1216syasou8webaudio14OscillatorNode4stop(_node);
        _M0MP37Hosi1216syasou8webaudio9AudioNode10disconnect(_node);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MP26mizchi8js__core7Promise7catch__GuuE(_M0MP37Hosi1216syasou8webaudio12AudioContext5close(self.context), (_discard_) => _M0MP26mizchi8js__core7Promise7resolveGuE(undefined));
}
function _M0FP37Hosi1216syasou7browser13read__storage(key, fallback, validate) {
  let _try_err;
  _L: {
    const _bind = _M0FP26mizchi8js__core9try__sync(() => {
      const source = _M0MPC16option6Option10unwrap__orGsE(_M0MP36mizchi11js__browser7storage7Storage7getItem(_M0FP36mizchi11js__browser7storage12localStorage(), key), "null");
      const value = _M0FP26mizchi8js__core11json__parse(source === "" ? "null" : source);
      return validate(value) ? value : fallback;
    });
    if (_bind.$tag === 1) {
      const _ok = _bind;
      return _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
  }
  return fallback;
}
function _M0FP37Hosi1216syasou7browser14write__storage(key, value) {
  let result;
  let _try_err;
  _L: {
    _L$2: {
      const _bind = _M0FP26mizchi8js__core9try__sync(() => {
        _M0MP36mizchi11js__browser7storage7Storage7setItem(_M0FP36mizchi11js__browser7storage12localStorage(), key, _M0FP26mizchi8js__core15json__stringify(value));
        return true;
      });
      if (_bind.$tag === 1) {
        const _ok = _bind;
        result = _ok._0;
      } else {
        const _err = _bind;
        _try_err = _err._0;
        break _L$2;
      }
      break _L;
    }
    result = false;
  }
  return result;
}
function _M0FP37Hosi1216syasou6bridge11read__field(value) {
  if (_M0FP26mizchi8js__core13is__undefined(value)) {
    return _M0DTP37Hosi1216syasou6domain5Field7Missing__;
  }
  if (_M0FP26mizchi8js__core8is__null(value)) {
    return _M0DTP37Hosi1216syasou6domain5Field4Null__;
  }
  const _bind = _M0FP26mizchi8js__core8typeof__(value);
  switch (_bind) {
    case "boolean": {
      return new _M0DTP37Hosi1216syasou6domain5Field4Flag(value);
    }
    case "number": {
      return new _M0DTP37Hosi1216syasou6domain5Field7Numeric(value);
    }
    case "string": {
      return new _M0DTP37Hosi1216syasou6domain5Field4Text(value);
    }
    default: {
      return _M0DTP37Hosi1216syasou6domain5Field5Other__;
    }
  }
}
function _M0FP37Hosi1216syasou6bridge12read__record(value, names) {
  const is_object = !_M0FP26mizchi8js__core8is__null(value) && _M0FP26mizchi8js__core8typeof__(value) === "object";
  const _bind = [];
  const fields = _M0MPB3Map3MapGsRP37Hosi1216syasou6domain5FieldE(new _M0TPB9ArrayViewGUsRP37Hosi1216syasou6domain5FieldEE(_bind, 0, 0), undefined);
  if (is_object) {
    const _bind$2 = names.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const name = names[_];
        _M0MPB3Map3setGsRP37Hosi1216syasou6domain5FieldE(fields, name, _M0FP37Hosi1216syasou6bridge11read__field(_M0MP26mizchi8js__core3Any5__get(value, name)));
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  return new _M0TP37Hosi1216syasou6domain6Record(is_object, fields);
}
function _M0FP37Hosi1216syasou6bridge15is__preferences(value) {
  return _M0FP37Hosi1216syasou6domain18valid__preferences(_M0FP37Hosi1216syasou6bridge12read__record(value, ["focusMinutes", "restMinutes", "speed", "scene", "showTime", "trainVolume", "rainVolume", "windVolume"]));
}
function _M0FP37Hosi1216syasou6bridge11is__journey(value) {
  return _M0FP37Hosi1216syasou6domain14valid__journey(_M0FP37Hosi1216syasou6bridge12read__record(value, _M0FP37Hosi1216syasou6bridge15journey__fields));
}
function _M0FP37Hosi1216syasou6bridge10is__ticket(value) {
  return _M0FP37Hosi1216syasou6domain13valid__ticket(_M0FP37Hosi1216syasou6bridge12read__record(value, _M0FP37Hosi1216syasou6bridge14ticket__fields));
}
function _M0FP37Hosi1216syasou6bridge17is__travel__state(value) {
  const object = !_M0FP26mizchi8js__core8is__null(value) && _M0FP26mizchi8js__core8typeof__(value) === "object";
  const j = object ? _M0MP26mizchi8js__core3Any5__get(value, "journey") : _M0FP26mizchi8js__core9undefined();
  const items = object ? _M0MP26mizchi8js__core3Any5__get(value, "tickets") : _M0FP26mizchi8js__core9undefined();
  let tickets;
  if (_M0FP26mizchi8js__core9is__array(items)) {
    const array = items;
    const _p = new Array(array.length);
    const _p$2 = array.length;
    let _tmp = 0;
    while (true) {
      const _p$3 = _tmp;
      if (_p$3 < _p$2) {
        const _p$4 = array[_p$3];
        _p[_p$3] = _M0FP37Hosi1216syasou6bridge12read__record(_p$4, _M0FP37Hosi1216syasou6bridge14ticket__fields);
        _tmp = _p$3 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    tickets = new _M0DTPC16option6OptionGRPB5ArrayGRP37Hosi1216syasou6domain6RecordEE4Some(_p);
  } else {
    tickets = _M0DTPC16option6OptionGRPB5ArrayGRP37Hosi1216syasou6domain6RecordEE4None__;
  }
  const pending = object ? _M0MP26mizchi8js__core3Any5__get(value, "pendingArrivalId") : _M0FP26mizchi8js__core9undefined();
  return _M0FP37Hosi1216syasou6domain13valid__travel(object, _M0FP37Hosi1216syasou6bridge12read__record(j, _M0FP37Hosi1216syasou6bridge15journey__fields), tickets, _M0FP37Hosi1216syasou6bridge11read__field(pending));
}
function _M0FP37Hosi1216syasou6bridge8is__view(value) {
  return _M0FP37Hosi1216syasou6domain11valid__view(_M0FP37Hosi1216syasou6bridge11read__field(value));
}
function _M0FP37Hosi1216syasou6bridge8optionalGsE(value) {
  return _M0FP26mizchi8js__core11is__nullish(value) ? undefined : value;
}
function _M0FP37Hosi1216syasou6bridge8optionalGdE(value) {
  return _M0FP26mizchi8js__core11is__nullish(value) ? _M0DTPC16option6OptionGdE4None__ : new _M0DTPC16option6OptionGdE4Some(value);
}
function _M0FP37Hosi1216syasou6bridge12read__ticket(value) {
  return new _M0TP37Hosi1216syasou6domain6Ticket(_M0MP26mizchi8js__core3Any5__get(value, "id"), _M0FP37Hosi1216syasou6bridge8optionalGsE(_M0MP26mizchi8js__core3Any5__get(value, "kind")), _M0MP26mizchi8js__core3Any5__get(value, "startedAt"), _M0MP26mizchi8js__core3Any5__get(value, "arrivedAt"), _M0MP26mizchi8js__core3Any5__get(value, "speed"), _M0MP26mizchi8js__core3Any5__get(value, "scene"), _M0MP26mizchi8js__core3Any5__get(value, "title"), _M0MP26mizchi8js__core3Any5__get(value, "note"));
}
function _M0FP37Hosi1216syasou6bridge13read__journey(value) {
  const _bind = _M0MP26mizchi8js__core3Any5__get(value, "phase");
  let phase;
  switch (_bind) {
    case "focus": {
      phase = 1;
      break;
    }
    case "rest": {
      phase = 2;
      break;
    }
    case "finished": {
      phase = 3;
      break;
    }
    default: {
      phase = 0;
    }
  }
  return new _M0TP37Hosi1216syasou6domain7Journey(phase, _M0MP26mizchi8js__core3Any5__get(value, "running"), _M0FP37Hosi1216syasou6bridge8optionalGdE(_M0MP26mizchi8js__core3Any5__get(value, "deadline")), _M0FP37Hosi1216syasou6bridge8optionalGdE(_M0MP26mizchi8js__core3Any5__get(value, "remaining")), _M0MP26mizchi8js__core3Any5__get(value, "focusMinutes"), _M0MP26mizchi8js__core3Any5__get(value, "restMinutes"), _M0FP37Hosi1216syasou6bridge8optionalGsE(_M0MP26mizchi8js__core3Any5__get(value, "id")), _M0FP37Hosi1216syasou6bridge8optionalGdE(_M0MP26mizchi8js__core3Any5__get(value, "startedAt")), _M0FP37Hosi1216syasou6bridge8optionalGdE(_M0MP26mizchi8js__core3Any5__get(value, "arrivedAt")), _M0FP37Hosi1216syasou6bridge8optionalGsE(_M0MP26mizchi8js__core3Any5__get(value, "speed")), _M0FP37Hosi1216syasou6bridge8optionalGsE(_M0MP26mizchi8js__core3Any5__get(value, "scene")));
}
function _M0FP37Hosi1216syasou6bridge12read__travel(value) {
  const tickets = _M0MP26mizchi8js__core3Any5__get(value, "tickets");
  const _tmp = _M0FP37Hosi1216syasou6bridge13read__journey(_M0MP26mizchi8js__core3Any5__get(value, "journey"));
  const _p = new Array(tickets.length);
  const _p$2 = tickets.length;
  let _tmp$2 = 0;
  while (true) {
    const _p$3 = _tmp$2;
    if (_p$3 < _p$2) {
      const _p$4 = tickets[_p$3];
      _p[_p$3] = _M0FP37Hosi1216syasou6bridge12read__ticket(_p$4);
      _tmp$2 = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP37Hosi1216syasou6domain6Travel(_tmp, _p, _M0FP37Hosi1216syasou6bridge8optionalGsE(_M0MP26mizchi8js__core3Any5__get(value, "pendingArrivalId")));
}
function _M0FP37Hosi1216syasou6bridge13write__ticket(ticket) {
  const out = _M0FP26mizchi8js__core11new__object();
  _M0MP26mizchi8js__core3Any5__set(out, "id", ticket.id);
  const _bind = ticket.kind;
  if (_bind === undefined) {
  } else {
    const _Some = _bind;
    const _kind = _Some;
    _M0MP26mizchi8js__core3Any5__set(out, "kind", _kind);
  }
  _M0MP26mizchi8js__core3Any5__set(out, "startedAt", ticket.started_at);
  _M0MP26mizchi8js__core3Any5__set(out, "arrivedAt", ticket.arrived_at);
  _M0MP26mizchi8js__core3Any5__set(out, "speed", ticket.speed);
  _M0MP26mizchi8js__core3Any5__set(out, "scene", ticket.scene);
  _M0MP26mizchi8js__core3Any5__set(out, "title", ticket.title);
  _M0MP26mizchi8js__core3Any5__set(out, "note", ticket.note);
  return out;
}
function _M0FP37Hosi1216syasou6bridge8nullableGsE(value) {
  if (value === undefined) {
    return _M0FP26mizchi8js__core4null();
  } else {
    const _Some = value;
    const _value = _Some;
    return _value;
  }
}
function _M0FP37Hosi1216syasou6bridge8nullableGdE(value) {
  if (value.$tag === 1) {
    const _Some = value;
    const _value = _Some._0;
    return _value;
  } else {
    return _M0FP26mizchi8js__core4null();
  }
}
function _M0FP37Hosi1216syasou6bridge13undefined__orGdE(value) {
  if (value.$tag === 1) {
    const _Some = value;
    const _value = _Some._0;
    return _value;
  } else {
    return _M0FP26mizchi8js__core9undefined();
  }
}
function _M0FP37Hosi1216syasou6bridge13undefined__orGsE(value) {
  if (value === undefined) {
    return _M0FP26mizchi8js__core9undefined();
  } else {
    const _Some = value;
    const _value = _Some;
    return _value;
  }
}
function _M0FP37Hosi1216syasou6bridge14write__journey(source, change) {
  let next;
  let out;
  let write_arrival;
  _L: {
    switch (change.$tag) {
      case 0: {
        return source;
      }
      case 1: {
        const _Replace = change;
        const _next = _Replace._0;
        const out$2 = _M0FP26mizchi8js__core11new__object();
        _M0MP26mizchi8js__core3Any5__set(out$2, "focusMinutes", _next.focus_minutes);
        _M0MP26mizchi8js__core3Any5__set(out$2, "restMinutes", _next.rest_minutes);
        _M0MP26mizchi8js__core3Any5__set(out$2, "id", _M0FP37Hosi1216syasou6bridge13undefined__orGsE(_next.id));
        _M0MP26mizchi8js__core3Any5__set(out$2, "startedAt", _M0FP37Hosi1216syasou6bridge13undefined__orGdE(_next.started_at));
        _M0MP26mizchi8js__core3Any5__set(out$2, "speed", _M0FP37Hosi1216syasou6bridge13undefined__orGsE(_next.speed));
        _M0MP26mizchi8js__core3Any5__set(out$2, "scene", _M0FP37Hosi1216syasou6bridge13undefined__orGsE(_next.scene));
        next = _next;
        out = out$2;
        write_arrival = false;
        break _L;
      }
      default: {
        const _Patch = change;
        const _next$2 = _Patch._0;
        const _write_arrival = _Patch._1;
        next = _next$2;
        out = _M0FP26mizchi8js__core14object__assign(_M0FP26mizchi8js__core11new__object(), source);
        write_arrival = _write_arrival;
        break _L;
      }
    }
  }
  const _bind = next.phase;
  let phase;
  switch (_bind) {
    case 0: {
      phase = "idle";
      break;
    }
    case 1: {
      phase = "focus";
      break;
    }
    case 2: {
      phase = "rest";
      break;
    }
    default: {
      phase = "finished";
    }
  }
  _M0MP26mizchi8js__core3Any5__set(out, "phase", phase);
  _M0MP26mizchi8js__core3Any5__set(out, "running", next.running);
  _M0MP26mizchi8js__core3Any5__set(out, "deadline", _M0FP37Hosi1216syasou6bridge8nullableGdE(next.deadline));
  _M0MP26mizchi8js__core3Any5__set(out, "remaining", _M0FP37Hosi1216syasou6bridge8nullableGdE(next.remaining));
  if (write_arrival) {
    _M0MP26mizchi8js__core3Any5__set(out, "arrivedAt", _M0FP37Hosi1216syasou6bridge13undefined__orGdE(next.arrived_at));
  }
  return out;
}
function _M0FP37Hosi1216syasou6bridge13write__travel(source, change) {
  if (change.$tag === 1) {
    const _Update = change;
    const _journey = _Update._0;
    const _tickets = _Update._1;
    const _pending = _Update._2;
    const out = _M0FP26mizchi8js__core14object__assign(_M0FP26mizchi8js__core11new__object(), source);
    _M0MP26mizchi8js__core3Any5__set(out, "journey", _M0FP37Hosi1216syasou6bridge14write__journey(_M0MP26mizchi8js__core3Any5__get(source, "journey"), _journey));
    const originals = _M0MP26mizchi8js__core3Any5__get(source, "tickets");
    let items;
    switch (_tickets.$tag) {
      case 0: {
        items = originals;
        break;
      }
      case 1: {
        const _Prepend = _tickets;
        const _ticket = _Prepend._0;
        const _self = [];
        _M0MPC15array5Array4pushGRP26mizchi8js__core3AnyE(_self, _M0FP37Hosi1216syasou6bridge13write__ticket(_ticket));
        _M0MPC15array5Array10push__iterGRP26mizchi8js__core3AnyE(_self, _M0MPC15array5Array4iterGRP26mizchi8js__core3AnyE(originals));
        items = _self;
        break;
      }
      default: {
        const _EditTickets = _tickets;
        const _edits = _EditTickets._0;
        let _p;
        _L: {
          _L$2: {
            if (_edits.length === 0) {
              _p = [];
              break _L$2;
            }
            const _p$2 = new Array(_edits.length);
            const _p$3 = _edits.length;
            let _tmp = 0;
            while (true) {
              const _p$4 = _tmp;
              if (_p$4 < _p$3) {
                const _p$5 = _edits[_p$4];
                let _tmp$2;
                if (_p$5 === undefined) {
                  _tmp$2 = _M0MPC15array5Array2atGRP26mizchi8js__core3AnyE(originals, _p$4);
                } else {
                  const _p$6 = _p$5;
                  const _p$7 = _p$6;
                  const _p$8 = _p$7._0;
                  const _p$9 = _p$7._1;
                  const _p$10 = _M0FP26mizchi8js__core14object__assign(_M0FP26mizchi8js__core11new__object(), _M0MPC15array5Array2atGRP26mizchi8js__core3AnyE(originals, _p$4));
                  _M0MP26mizchi8js__core3Any5__set(_p$10, "title", _p$8);
                  _M0MP26mizchi8js__core3Any5__set(_p$10, "note", _p$9);
                  _tmp$2 = _p$10;
                }
                _p$2[_p$4] = _tmp$2;
                _tmp = _p$4 + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            items = _p$2;
            break _L;
          }
          items = _p;
        }
      }
    }
    _M0MP26mizchi8js__core3Any5__set(out, "tickets", items);
    _M0MP26mizchi8js__core3Any5__set(out, "pendingArrivalId", _M0FP37Hosi1216syasou6bridge8nullableGsE(_pending));
    return out;
  } else {
    return source;
  }
}
function _M0FP37Hosi1216syasou6bridge15restore__travel(state, now, note) {
  return _M0FP37Hosi1216syasou6bridge13write__travel(state, _M0FP37Hosi1216syasou6domain7restore(_M0FP37Hosi1216syasou6bridge12read__travel(state), now, note));
}
function _M0FP37Hosi1216syasou6bridge12read__action(value) {
  const now = _M0MP26mizchi8js__core3Any5__get(value, "now");
  const _bind = _M0MP26mizchi8js__core3Any5__get(value, "type");
  switch (_bind) {
    case "start": {
      return new _M0DTP37Hosi1216syasou6domain13JourneyAction5Start(now, _M0MP26mizchi8js__core3Any5__get(value, "focusMinutes"), _M0MP26mizchi8js__core3Any5__get(value, "restMinutes"), _M0MP26mizchi8js__core3Any5__get(value, "id"), _M0MP26mizchi8js__core3Any5__get(value, "speed"), _M0MP26mizchi8js__core3Any5__get(value, "scene"));
    }
    case "finish": {
      return new _M0DTP37Hosi1216syasou6domain13JourneyAction6Finish(now);
    }
    case "tick": {
      return new _M0DTP37Hosi1216syasou6domain13JourneyAction4Tick(now);
    }
    default: {
      return new _M0DTP37Hosi1216syasou6domain13JourneyAction6Toggle(now);
    }
  }
}
function _M0FP37Hosi1216syasou6bridge15travel__reducer(state, action) {
  const _bind = _M0MP26mizchi8js__core3Any5__get(action, "type");
  let event;
  switch (_bind) {
    case "welcome-ticket": {
      event = new _M0DTP37Hosi1216syasou6domain12TravelAction7Welcome(_M0MP26mizchi8js__core3Any5__get(action, "now"));
      break;
    }
    case "acknowledge-arrival": {
      event = _M0DTP37Hosi1216syasou6domain12TravelAction11Acknowledge__;
      break;
    }
    case "edit-ticket": {
      const changes = _M0MP26mizchi8js__core3Any5__get(action, "changes");
      event = new _M0DTP37Hosi1216syasou6domain12TravelAction4Edit(_M0MP26mizchi8js__core3Any5__get(action, "id"), _M0FP37Hosi1216syasou6bridge8optionalGsE(_M0MP26mizchi8js__core3Any5__get(changes, "title")), _M0FP37Hosi1216syasou6bridge8optionalGsE(_M0MP26mizchi8js__core3Any5__get(changes, "note")));
      break;
    }
    default: {
      event = new _M0DTP37Hosi1216syasou6domain12TravelAction12JourneyEvent(_M0FP37Hosi1216syasou6bridge12read__action(_M0MP26mizchi8js__core3Any5__get(action, "action")), _M0MP26mizchi8js__core3Any5__get(action, "note"));
    }
  }
  return _M0FP37Hosi1216syasou6bridge13write__travel(state, _M0FP37Hosi1216syasou6domain14reduce__travel(_M0FP37Hosi1216syasou6bridge12read__travel(state), event));
}
function _M0FP37Hosi1216syasou6bridge16advance__journey(state, now) {
  return _M0FP37Hosi1216syasou6bridge14write__journey(state, _M0FP37Hosi1216syasou6domain7advance(_M0FP37Hosi1216syasou6bridge13read__journey(state), now));
}
function _M0FP37Hosi1216syasou6bridge16journey__reducer(state, action) {
  return _M0FP37Hosi1216syasou6bridge14write__journey(state, _M0FP37Hosi1216syasou6domain15reduce__journey(_M0FP37Hosi1216syasou6bridge13read__journey(state), _M0FP37Hosi1216syasou6bridge12read__action(action)));
}
function _M0FP37Hosi1216syasou6bridge13read__storage(key, fallback, validate) {
  return _M0FP37Hosi1216syasou7browser13read__storage(key, fallback, validate);
}
function _M0FP37Hosi1216syasou6bridge14write__storage(key, value) {
  return _M0FP37Hosi1216syasou7browser14write__storage(key, value);
}
function _M0FP37Hosi1216syasou6bridge13create__sound() {
  return _M0FP37Hosi1216syasou7browser13create__sound();
}
function _M0FP37Hosi1216syasou6bridge13enable__sound(value) {
  const sound = value;
  return _M0MP37Hosi1216syasou7browser5Sound6enable(sound);
}
function _M0FP37Hosi1216syasou6bridge14disable__sound(value) {
  const sound = value;
  return _M0MP37Hosi1216syasou7browser5Sound7disable(sound);
}
function _M0FP37Hosi1216syasou6bridge13update__sound(value, preferences, moving, open) {
  const sound = value;
  const mix = _M0FP37Hosi1216syasou6domain10sound__mix(_M0MP26mizchi8js__core3Any5__get(preferences, "speed"), _M0MP26mizchi8js__core3Any5__get(preferences, "trainVolume"), _M0MP26mizchi8js__core3Any5__get(preferences, "rainVolume"), _M0MP26mizchi8js__core3Any5__get(preferences, "windVolume"), moving, open);
  _M0MP37Hosi1216syasou7browser5Sound6update(sound, mix, moving);
}
function _M0FP37Hosi1216syasou6bridge14dispose__sound(value) {
  const sound = value;
  _M0MP37Hosi1216syasou7browser5Sound7dispose(sound);
}
function _M0FP37Hosi1216syasou6bridge24create__window__renderer(canvas, on_unavailable) {
  const callback = () => {
    if (!_M0FP26mizchi8js__core11is__nullish(on_unavailable)) {
      _M0MP26mizchi8js__core3Any8__invoke(on_unavailable, []);
      return;
    } else {
      return;
    }
  };
  const _bind = _M0FP37Hosi1216syasou7browser16create__renderer(canvas, callback);
  if (_bind === undefined) {
    return _M0FP26mizchi8js__core4null();
  } else {
    const _Some = _bind;
    const _renderer = _Some;
    const out = _M0FP26mizchi8js__core11new__object();
    _M0MP26mizchi8js__core3Any5__set(out, "update", (value) => {
      _M0MP37Hosi1216syasou7browser8Renderer6update(_renderer, new _M0TP37Hosi1216syasou6domain9Landscape(_M0MP26mizchi8js__core3Any5__get(value, "scene"), _M0MP26mizchi8js__core3Any5__get(value, "speed"), _M0MP26mizchi8js__core3Any5__get(value, "moving"), _M0MP26mizchi8js__core3Any5__get(value, "travelling")));
    });
    _M0MP26mizchi8js__core3Any5__set(out, "dispose", () => {
      _M0MP37Hosi1216syasou7browser8Renderer7dispose(_renderer);
    });
    return out;
  }
}
export { _M0FP37Hosi1216syasou6bridge15is__preferences as isPreferences, _M0FP37Hosi1216syasou6bridge11is__journey as isJourney, _M0FP37Hosi1216syasou6bridge10is__ticket as isTicket, _M0FP37Hosi1216syasou6bridge17is__travel__state as isTravelState, _M0FP37Hosi1216syasou6bridge8is__view as isView, _M0FP37Hosi1216syasou6bridge15restore__travel as restoreTravel, _M0FP37Hosi1216syasou6bridge15travel__reducer as travelReducer, _M0FP37Hosi1216syasou6bridge16advance__journey as advanceJourney, _M0FP37Hosi1216syasou6bridge16journey__reducer as journeyReducer, _M0FP37Hosi1216syasou6bridge13read__storage as readStorage, _M0FP37Hosi1216syasou6bridge14write__storage as writeStorage, _M0FP37Hosi1216syasou6bridge13create__sound as createSound, _M0FP37Hosi1216syasou6bridge13enable__sound as enableSound, _M0FP37Hosi1216syasou6bridge14disable__sound as disableSound, _M0FP37Hosi1216syasou6bridge13update__sound as updateSound, _M0FP37Hosi1216syasou6bridge14dispose__sound as disposeSound, _M0FP37Hosi1216syasou6bridge24create__window__renderer as createWindowRenderer }
