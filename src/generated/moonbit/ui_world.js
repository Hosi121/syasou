function _M0TP37Hosi1216syasou4view7Runtime(param0, param1, param2, param3) {
  this.scope = param0;
  this.schedule = param1;
  this.effects = param2;
  this.serial = param3;
}
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
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
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
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
const _M0FPB20uint__to__string__js = (x, radix) => {
  return (x >>> 0).toString(radix);
};
function _M0TPB4IterGUsRP37Hosi1216syasou2ui13PropertyValueEE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
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
function _M0TPB9ArrayViewGUsRP37Hosi1216syasou2ui13PropertyValueEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
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
function _M0TPB3MapGiWdEuE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
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
function _M0TPB5EntryGiWdEuE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
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
function _M0TPB8MutLocalGORPB5EntryGiWdEuEE(param0) {
  this.val = param0;
}
function _M0TPB4IterGURP26mizchi8js__core3AnyRP26mizchi8js__core3AnyEE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
const _M0MPC16double6Double8mod__ffi = (a, b) => (a % b);
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPC13ref3RefGbE(param0) {
  this.val = param0;
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
function _M0TP37Hosi1216syasou6domain10TicketGrip(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.x = param0;
  this.y = param1;
  this.width = param2;
  this.height = param3;
  this.base = param4;
  this.back = param5;
  this.dx = param6;
  this.edge = param7;
}
function _M0TP37Hosi1216syasou6domain10TicketLift(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.y = param0;
  this.z = param1;
  this.tilt = param2;
  this.angle = param3;
  this.roll = param4;
  this.shine_opacity = param5;
  this.shadow_y = param6;
  this.shadow_opacity = param7;
}
function _M0TP37Hosi1216syasou6domain10TicketDrag(param0, param1, param2, param3, param4, param5, param6) {
  this.dx = param0;
  this.x = param1;
  this.y = param2;
  this.angle = param3;
  this.tilt = param4;
  this.roll = param5;
  this.shine_x = param6;
}
function _M0TP37Hosi1216syasou6domain11TicketHover(param0, param1, param2, param3, param4) {
  this.tilt = param0;
  this.roll = param1;
  this.z = param2;
  this.shine_x = param3;
  this.shine_opacity = param4;
}
function _M0TP37Hosi1216syasou6domain13TicketRelease(param0, param1) {
  this.back = param0;
  this.angle = param1;
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
const _M0FP26mizchi8js__core17ffi__promise__all = (promises) => Promise.all(promises);
const _M0FP26mizchi8js__core29ffi__promise__with__resolvers = () => Promise.withResolvers();
const _M0MP26mizchi8js__core3Any6__call = (obj, key, args) => obj[key](...args);
function _M0DTPC16result6ResultGOuRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOuRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGORPB5ArrayGuERPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPB5ArrayGuERPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORPB5ArrayGuERPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPB5ArrayGuERPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16option6OptionGRPB5ArrayGuEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGuEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGuEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGuEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGuEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGuEE4Some.prototype.$tag = 1;
function _M0TPB9ArrayViewGRP26mizchi8js__core7PromiseGuEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGOuRPB9CancelledE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOuRPB9CancelledE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOuRPB9CancelledE2Ok.prototype.$tag = 1;
function _M0DTP26mizchi8js__core57_24mizchi_2fjs__core_2epromisify0_2elambda_2elambda_2f399L5StateGuE12_2atry_2f251(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP26mizchi8js__core57_24mizchi_2fjs__core_2epromisify0_2elambda_2elambda_2f399L5StateGuE12_2atry_2f251.prototype.$tag = 0;
function _M0DTP26mizchi8js__core57_24mizchi_2fjs__core_2epromisify0_2elambda_2elambda_2f399L5StateGuE8State__1(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP26mizchi8js__core57_24mizchi_2fjs__core_2epromisify0_2elambda_2elambda_2f399L5StateGuE8State__1.prototype.$tag = 1;
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
_M0DTPC15error5Error37mizchi_2fjs__core_2eJsError_2eJsError.prototype.$tag = 1;
function _M0DTPC15error5Error52moonbitlang_2fcore_2fbuiltin_2eCancelled_2eCancelled() {}
_M0DTPC15error5Error52moonbitlang_2fcore_2fbuiltin_2eCancelled_2eCancelled.prototype.$tag = 0;
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
const _M0MP26mizchi8js__core3Any10to__string = (self) => self == null ? String(self) : self.toString();
function _M0DTPC16option6OptionGRP36mizchi11js__browser3dom7ElementE4None() {}
_M0DTPC16option6OptionGRP36mizchi11js__browser3dom7ElementE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP36mizchi11js__browser3dom7ElementE4None__ = new _M0DTPC16option6OptionGRP36mizchi11js__browser3dom7ElementE4None();
function _M0DTPC16option6OptionGRP36mizchi11js__browser3dom7ElementE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP36mizchi11js__browser3dom7ElementE4Some.prototype.$tag = 1;
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
const _M0FP37Hosi1216syasou6bridge14search__params = search => new URLSearchParams(search);
function _M0DTP37Hosi1216syasou4view7Element5Blank() {}
_M0DTP37Hosi1216syasou4view7Element5Blank.prototype.$tag = 0;
const _M0DTP37Hosi1216syasou4view7Element5Blank__ = new _M0DTP37Hosi1216syasou4view7Element5Blank();
function _M0DTP37Hosi1216syasou4view7Element4Text(param0) {
  this._0 = param0;
}
_M0DTP37Hosi1216syasou4view7Element4Text.prototype.$tag = 1;
function _M0DTP37Hosi1216syasou4view7Element3Tag(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP37Hosi1216syasou4view7Element3Tag.prototype.$tag = 2;
function _M0DTP37Hosi1216syasou4view7Element5Group(param0) {
  this._0 = param0;
}
_M0DTP37Hosi1216syasou4view7Element5Group.prototype.$tag = 3;
function _M0DTP37Hosi1216syasou4view7Element9Component(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP37Hosi1216syasou4view7Element9Component.prototype.$tag = 4;
function _M0DTP37Hosi1216syasou4view7Element7Control(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
_M0DTP37Hosi1216syasou4view7Element7Control.prototype.$tag = 5;
function _M0DTP37Hosi1216syasou4view7Element6Portal(param0) {
  this._0 = param0;
}
_M0DTP37Hosi1216syasou4view7Element6Portal.prototype.$tag = 6;
function _M0DTP37Hosi1216syasou4view7Element8Boundary(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP37Hosi1216syasou4view7Element8Boundary.prototype.$tag = 7;
const _M0FP37Hosi1216syasou4view15shared__runtime = initial => globalThis[Symbol.for('syasou.view.runtime')] ??= initial;
const _M0FP37Hosi1216syasou4view4kind = value => typeof value;
const _M0FP37Hosi1216syasou4view13register__ref = (reference,assign) => {reference._assign=assign};
function _M0TP37Hosi1216syasou4view7ViewRefGsE(param0) {
  this.current = param0;
}
function _M0TP37Hosi1216syasou4view7ViewRefGiE(param0) {
  this.current = param0;
}
function _M0TP37Hosi1216syasou4view7ViewRefGRP37Hosi1216syasou6domain5PhaseE(param0) {
  this.current = param0;
}
function _M0TP37Hosi1216syasou4view7ViewRefGRP36mizchi11js__browser3dom7ElementE(param0) {
  this.current = param0;
}
function _M0TP37Hosi1216syasou4view7ViewRefGbE(param0) {
  this.current = param0;
}
function _M0TP37Hosi1216syasou4view7ViewRefGdE(param0) {
  this.current = param0;
}
function _M0TP37Hosi1216syasou4view4Slot(param0, param1, param2, param3) {
  this.value = param0;
  this.deps = param1;
  this.cleanup = param2;
  this.generation = param3;
}
const _M0FP37Hosi1216syasou4view14attach__setter = (setter,slot) => {setter[Symbol.for('syasou.view.state')]=slot};
const _M0FP37Hosi1216syasou4view12setter__slot = setter => setter[Symbol.for('syasou.view.state')];
function _M0TP37Hosi1216syasou4view11MotionValue(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11) {
  this.motion_tag = param0;
  this.value = param1;
  this.target = param2;
  this.velocity = param3;
  this.stiffness = param4;
  this.damping = param5;
  this.mass = param6;
  this.spring = param7;
  this.listeners = param8;
  this.serial = param9;
  this.frame = param10;
  this.last_time = param11;
}
function _M0TPB9ArrayViewGUiWdEuEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0MP36mizchi11js__builtin4date4Date3new = () => new Date();
const _M0MP36mizchi11js__builtin4date4Date9get__date = (date) => date.getDate();
const _M0MP36mizchi11js__builtin4date4Date15get__full__year = (date) => date.getFullYear();
const _M0MP36mizchi11js__builtin4date4Date10get__month = (date) => date.getMonth();
const _M0MP36mizchi7js__web6crypto6Crypto3get = () => globalThis.crypto;
const _M0FP37Hosi1216syasou2ui21fullscreen__supported = () => Boolean(document.fullscreenEnabled && document.documentElement.requestFullscreen);
const _M0FP37Hosi1216syasou2ui18fullscreen__active = () => Boolean(document.fullscreenElement);
const _M0FP37Hosi1216syasou2ui30fullscreen__request__available = () => Boolean(document.documentElement.requestFullscreen);
const _M0FP37Hosi1216syasou2ui17fullscreen__enter = () => document.documentElement.requestFullscreen();
const _M0FP37Hosi1216syasou2ui16fullscreen__exit = () => document.exitFullscreen();
const _M0FP37Hosi1216syasou2ui20set__document__title = title => {document.title=title};
const _M0FP37Hosi1216syasou2ui13viewport__raw = () => window.visualViewport;
function _M0DTPC16option6OptionGRP37Hosi1216syasou2ui14VisualViewportE4None() {}
_M0DTPC16option6OptionGRP37Hosi1216syasou2ui14VisualViewportE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP37Hosi1216syasou2ui14VisualViewportE4None__ = new _M0DTPC16option6OptionGRP37Hosi1216syasou2ui14VisualViewportE4None();
function _M0DTPC16option6OptionGRP37Hosi1216syasou2ui14VisualViewportE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP37Hosi1216syasou2ui14VisualViewportE4Some.prototype.$tag = 1;
const _M0MP37Hosi1216syasou2ui14VisualViewport5scale = viewport => viewport.scale;
const _M0MP37Hosi1216syasou2ui14VisualViewport6height = viewport => viewport.height;
const _M0MP37Hosi1216syasou2ui14VisualViewport3top = viewport => viewport.offsetTop;
const _M0MP37Hosi1216syasou2ui14VisualViewport9subscribe = (viewport,name,listener) => {viewport.addEventListener(name,listener);return () => viewport.removeEventListener(name,listener)};
const _M0FP37Hosi1216syasou2ui11root__style = (name,value) => document.documentElement.style.setProperty(name,value);
const _M0FP37Hosi1216syasou2ui19remove__root__style = name => {document.documentElement.style.removeProperty(name)};
const _M0MP37Hosi1216syasou2ui7UiEvent4stop = event => event.stopPropagation();
function _M0TP37Hosi1216syasou2ui15ViewPickerProps(param0, param1) {
  this.value = param0;
  this.on_change = param1;
}
const _M0FP37Hosi1216syasou2ui6hidden = () => document.hidden;
const _M0FP37Hosi1216syasou2ui10on__window = (name, callback) => { window.addEventListener(name, callback); return () => window.removeEventListener(name, callback); };
const _M0FP37Hosi1216syasou2ui23formatted__ticket__date = time => new Intl.DateTimeFormat('en-GB', {day:'2-digit',month:'short',year:'2-digit'}).format(time);
const _M0FP37Hosi1216syasou2ui12ticket__time = time => new Intl.DateTimeFormat('en-GB', {hour:'2-digit',minute:'2-digit',hour12:false}).format(time);
const _M0MP37Hosi1216syasou2ui7UiEvent5value = event => event.target.value;
function _M0TP37Hosi1216syasou2ui15TicketCardProps(param0, param1, param2, param3, param4, param5, param6) {
  this.ticket = param0;
  this.back = param1;
  this.rotation = param2;
  this.shine_x = param3;
  this.shine_opacity = param4;
  this.on_title = param5;
  this.on_note = param6;
}
const _M0MP37Hosi1216syasou2ui11PointerNode6bounds = node => node.getBoundingClientRect();
const _M0MP37Hosi1216syasou2ui11PointerNode7capture = (node, pointer) => node.setPointerCapture(pointer);
const _M0MP37Hosi1216syasou2ui11PointerNode8captured = (node, pointer) => node.hasPointerCapture(pointer);
const _M0MP37Hosi1216syasou2ui11PointerNode7release = (node, pointer) => node.releasePointerCapture(pointer);
const _M0MP37Hosi1216syasou2ui7UiEvent6button = event => event.button;
const _M0MP37Hosi1216syasou2ui7UiEvent7buttons = event => event.buttons;
const _M0MP37Hosi1216syasou2ui7UiEvent7closest = (event, selector) => Boolean(event.target.closest(selector));
const _M0MP37Hosi1216syasou2ui7UiEvent7matches = (event, selector) => event.target.matches(selector);
const _M0MP37Hosi1216syasou2ui7UiEvent7pointer = event => event.pointerId;
const _M0MP37Hosi1216syasou2ui7UiEvent13pointer__node = event => event.currentTarget;
const _M0MP37Hosi1216syasou2ui7UiEvent13pointer__type = event => event.pointerType;
const _M0MP37Hosi1216syasou2ui7UiEvent7prevent = event => event.preventDefault();
const _M0MP37Hosi1216syasou2ui7UiEvent7primary = event => event.isPrimary;
const _M0MP37Hosi1216syasou2ui7UiEvent1x = event => event.clientX;
const _M0MP37Hosi1216syasou2ui7UiEvent1y = event => event.clientY;
function _M0TP37Hosi1216syasou2ui12TicketHandle(param0) {
  this.cancel = param0;
}
function _M0TP37Hosi1216syasou2ui11PointerGrip(param0, param1, param2) {
  this.grip = param0;
  this.pointer = param1;
  this.node = param2;
}
const _M0FP37Hosi1216syasou2ui5focus = node => node.focus({preventScroll:true});
const _M0FP37Hosi1216syasou2ui9microtask = callback => queueMicrotask(callback);
function _M0TP37Hosi1216syasou2ui14TouchableProps(param0, param1, param2, param3, param4, param5, param6) {
  this.handle = param0;
  this.ticket = param1;
  this.back = param2;
  this.disabled = param3;
  this.on_back = param4;
  this.on_touch = param5;
  this.on_edit = param6;
}
const _M0FP37Hosi1216syasou2ui16location__search = () => window.location.search;
const _M0FP37Hosi1216syasou2ui13image__decode = source => { const image = new Image(); image.src = source; return image.decode(); };
function _M0DTPC16option6OptionGRP37Hosi1216syasou2ui14WindowRendererE4None() {}
_M0DTPC16option6OptionGRP37Hosi1216syasou2ui14WindowRendererE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP37Hosi1216syasou2ui14WindowRendererE4None__ = new _M0DTPC16option6OptionGRP37Hosi1216syasou2ui14WindowRendererE4None();
function _M0DTPC16option6OptionGRP37Hosi1216syasou2ui14WindowRendererE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP37Hosi1216syasou2ui14WindowRendererE4Some.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP37Hosi1216syasou2ui11SoundEngineRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP37Hosi1216syasou2ui11SoundEngineRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP37Hosi1216syasou2ui11SoundEngineRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP37Hosi1216syasou2ui11SoundEngineRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGuRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0DTP37Hosi1216syasou2ui68_24Hosi121_2fsyasou_2fui_2euse__sound_2etoggle_2f364_2elambda_2f1305L5State19_2adefer__try_2f947(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP37Hosi1216syasou2ui68_24Hosi121_2fsyasou_2fui_2euse__sound_2etoggle_2f364_2elambda_2f1305L5State19_2adefer__try_2f947.prototype.$tag = 0;
function _M0DTP37Hosi1216syasou2ui68_24Hosi121_2fsyasou_2fui_2euse__sound_2etoggle_2f364_2elambda_2f1305L5State8State__1(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP37Hosi1216syasou2ui68_24Hosi121_2fsyasou_2fui_2euse__sound_2etoggle_2f364_2elambda_2f1305L5State8State__1.prototype.$tag = 1;
function _M0DTP37Hosi1216syasou2ui68_24Hosi121_2fsyasou_2fui_2euse__sound_2etoggle_2f364_2elambda_2f1305L5State12_2atry_2f948(param0, param1, param2, param3, param4) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
}
_M0DTP37Hosi1216syasou2ui68_24Hosi121_2fsyasou_2fui_2euse__sound_2etoggle_2f364_2elambda_2f1305L5State12_2atry_2f948.prototype.$tag = 2;
function _M0DTP37Hosi1216syasou2ui68_24Hosi121_2fsyasou_2fui_2euse__sound_2etoggle_2f364_2elambda_2f1305L5State8State__3(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
_M0DTP37Hosi1216syasou2ui68_24Hosi121_2fsyasou_2fui_2euse__sound_2etoggle_2f364_2elambda_2f1305L5State8State__3.prototype.$tag = 3;
function _M0DTPC16option6OptionGRP37Hosi1216syasou2ui11SoundEngineE4None() {}
_M0DTPC16option6OptionGRP37Hosi1216syasou2ui11SoundEngineE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP37Hosi1216syasou2ui11SoundEngineE4None__ = new _M0DTPC16option6OptionGRP37Hosi1216syasou2ui11SoundEngineE4None();
function _M0DTPC16option6OptionGRP37Hosi1216syasou2ui11SoundEngineE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP37Hosi1216syasou2ui11SoundEngineE4Some.prototype.$tag = 1;
function _M0TP37Hosi1216syasou2ui9SoundView(param0, param1, param2, param3) {
  this.enabled = param0;
  this.busy = param1;
  this.error = param2;
  this.toggle = param3;
}
function _M0DTP37Hosi1216syasou2ui41_24Hosi121_2fsyasou_2fui_2eall__resourcesL5State8State__0(param0) {
  this._0 = param0;
}
_M0DTP37Hosi1216syasou2ui41_24Hosi121_2fsyasou_2fui_2eall__resourcesL5State8State__0.prototype.$tag = 0;
function _M0DTP37Hosi1216syasou2ui64_24Hosi121_2fsyasou_2fui_2erender__snow_2elambda_2elambda_2f1370L5State12_2atry_2f981(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP37Hosi1216syasou2ui64_24Hosi121_2fsyasou_2fui_2erender__snow_2elambda_2elambda_2f1370L5State12_2atry_2f981.prototype.$tag = 0;
function _M0DTP37Hosi1216syasou2ui64_24Hosi121_2fsyasou_2fui_2erender__snow_2elambda_2elambda_2f1370L5State8State__1(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP37Hosi1216syasou2ui64_24Hosi121_2fsyasou_2fui_2erender__snow_2elambda_2elambda_2f1370L5State8State__1.prototype.$tag = 1;
function _M0TP37Hosi1216syasou2ui9SnowProps(param0, param1) {
  this.landscape = param0;
  this.exterior = param1;
}
const _M0FP37Hosi1216syasou2ui13number__value = value => Number(value);
const _M0MP37Hosi1216syasou2ui7UiEvent6number = event => Number(event.target.value);
function _M0TP37Hosi1216syasou2ui13SettingsProps(param0, param1, param2) {
  this.preferences = param0;
  this.on_change = param1;
  this.active = param2;
}
const _M0MP37Hosi1216syasou2ui7UiEvent3key = event => event.key;
const _M0MP37Hosi1216syasou2ui7UiEvent9prevented = event => event.defaultPrevented;
function _M0DTPC16option6OptionGRPB5ArrayGUsRP37Hosi1216syasou2ui13PropertyValueEEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGUsRP37Hosi1216syasou2ui13PropertyValueEEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGUsRP37Hosi1216syasou2ui13PropertyValueEEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGUsRP37Hosi1216syasou2ui13PropertyValueEEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGUsRP37Hosi1216syasou2ui13PropertyValueEEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGUsRP37Hosi1216syasou2ui13PropertyValueEEE4Some.prototype.$tag = 1;
function _M0TP37Hosi1216syasou2ui11JourneyView(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12) {
  this.journey = param0;
  this.preferences = param1;
  this.set_preferences = param2;
  this.remaining = param3;
  this.tickets = param4;
  this.pending = param5;
  this.save_error = param6;
  this.start = param7;
  this.toggle = param8;
  this.finish = param9;
  this.acknowledge = param10;
  this.welcome = param11;
  this.edit = param12;
}
function _M0DTP37Hosi1216syasou2ui149_24Hosi121_2fsyasou_2fui_2eapp_2efinish__guide_2f55_2echoose__view_2f61_2eboard_2f65_2eresume__journey_2f66_2etoggle__fullscreen_2f67_2elambda_2f1396L5State13_2atry_2f1131(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP37Hosi1216syasou2ui149_24Hosi121_2fsyasou_2fui_2eapp_2efinish__guide_2f55_2echoose__view_2f61_2eboard_2f65_2eresume__journey_2f66_2etoggle__fullscreen_2f67_2elambda_2f1396L5State13_2atry_2f1131.prototype.$tag = 0;
function _M0TP37Hosi1216syasou2ui14LandscapeProps(param0, param1, param2, param3, param4) {
  this.scene = param0;
  this.speed = param1;
  this.moving = param2;
  this.windowOpen = param3;
  this.travelling = param4;
}
function _M0TP37Hosi1216syasou2ui13NotebookProps(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) {
  this.open = param0;
  this.suspended = param1;
  this.on_open = param2;
  this.travel = param3;
  this.on_start = param4;
  this.on_toggle = param5;
  this.sound = param6;
  this.note = param7;
  this.on_note = param8;
  this.on_archive = param9;
  this.focus_pocket = param10;
}
function _M0TP37Hosi1216syasou2ui10GuideProps(param0, param1, param2, param3) {
  this.step = param0;
  this.on_step = param1;
  this.on_finish = param2;
  this.on_skip = param3;
}
function _M0TP37Hosi1216syasou2ui9TrayProps(param0, param1, param2, param3, param4) {
  this.tickets = param0;
  this.arrival = param1;
  this.save_error = param2;
  this.on_edit = param3;
  this.on_close = param4;
}
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
const _M0MPB4Iter4nextN6constrS9918GUsRP37Hosi1216syasou2ui13PropertyValueEE = 0;
const _M0MPB4Iter4nextN6constrS9919GUsRP37Hosi1216syasou2ui13PropertyValueEE = 0;
const _M0MPB4Iter4nextN6constrS9918GRP26mizchi8js__core3AnyE = 0;
const _M0MPB4Iter4nextN6constrS9919GRP26mizchi8js__core3AnyE = 0;
const _M0MPB4Iter3newN6constrS9926GUsRP37Hosi1216syasou2ui13PropertyValueEE = 0;
const _M0MPB4Iter3newN6constrS9926GRP26mizchi8js__core3AnyE = 0;
const _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS527 = "welcome-v1";
const _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS529 = "local";
const _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS530 = "mist";
const _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS531 = "はじめての窓辺";
const _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS532 = "車窓へ、ようこそ。\nこれは、旅のしおりをめくった記念の一枚。\n\n次の切符には、あなたが進めたことを。\nどうぞ、自分のペースで。";
const _M0FP37Hosi1216syasou6domain13view__optionsN5tupleS533 = { _0: "forest", _1: "山あいの窓" };
const _M0FP37Hosi1216syasou6domain13view__optionsN5tupleS534 = { _0: "snow", _1: "雪原の窓" };
const _M0FP37Hosi1216syasou6domain13view__optionsN5tupleS535 = { _0: "train", _1: "遠くの列車" };
const _M0FP37Hosi1216syasou6domain13view__options = [_M0FP37Hosi1216syasou6domain13view__optionsN5tupleS533, _M0FP37Hosi1216syasou6domain13view__optionsN5tupleS534, _M0FP37Hosi1216syasou6domain13view__optionsN5tupleS535];
const _M0FP37Hosi1216syasou7browser16fragment__source = "\nprecision highp float;\nuniform vec2 u_resolution;\nuniform float u_time;\nuniform float u_travel;\nuniform float u_scene;\nfloat hash(vec2 p) {\n  vec3 q = fract(vec3(p.xyx) * .1031);\n  q += dot(q, q.yzx + 33.33);\n  return fract((q.x + q.y) * q.z);\n}\nfloat noise(float x) {\n  float i = floor(x);\n  float f = fract(x);\n  f = f * f * (3.0 - 2.0 * f);\n  return mix(hash(vec2(i, 19.0)), hash(vec2(i + 1.0, 19.0)), f);\n}\nfloat ridge(float x) {\n  return noise(x) * .64 + noise(x * 2.13 + 8.0) * .25\n       + noise(x * 5.37 + 30.0) * .085 + noise(x * 13.1) * .025;\n}\nfloat below(float y, float height, float softness) {\n  return 1.0 - smoothstep(height - softness, height + softness, y);\n}\n// Uneven tiers and individual heights keep the conifers from reading as a pattern.\nfloat forest(vec2 p, float spacing, float height, float seed, float softness) {\n  float cell = floor(p.x / spacing);\n  float shape = 0.0;\n  for (int i = -1; i <= 1; i++) {\n    float id = cell + float(i);\n    float random = hash(vec2(id, seed));\n    float center = (id + .25 + random * .5) * spacing;\n    float h = height * (.48 + .65 * hash(vec2(id, seed + 7.0)));\n    float base = -.015 + .035 * noise(id * .41 + seed);\n    float y = (p.y - base) / h;\n    float localX = p.x - center + y * y * h * (random - .5) * .055;\n    float width = h * .19 * pow(max(0.0, 1.0 - y), .95);\n    float branches = .80 + .16 * sin(y * (72.0 + random * 27.0) + random * 9.0 + sign(localX) * 1.6)\n                         + .04 * sin(y * 231.0 + random * 11.0);\n    float crown = (1.0 - smoothstep(width * branches - softness, width * branches + softness, abs(localX)))\n                * smoothstep(-.03, .06, y) * (1.0 - smoothstep(.97, 1.0, y));\n    float trunk = (1.0 - smoothstep(h * .012, h * .012 + softness, abs(p.x - center)))\n                * below(p.y, base + h * .8, softness) * smoothstep(-.07, base, p.y);\n    shape = max(shape, max(crown, trunk));\n  }\n  return shape;\n}\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / u_resolution;\n  float aspect = u_resolution.x / u_resolution.y;\n  float x = uv.x * aspect;\n  float t = u_time;\n  float y = uv.y;\n  float value = mix(.81, .975, smoothstep(.35, 1.0, y));\n  float cloud = noise(x * 2.1 + t * .008 + y * 3.0) * noise(y * 9.0 + x * .3);\n  value -= cloud * .045;\n\n  // The far ridges remain almost still while the nearer slopes slide past them.\n  float farX = x + t * .012;\n  float farRidge = .50 + .30 * ridge(farX * 1.7 + 12.0);\n  float farTone = .64 + .11 * (1.0 - smoothstep(.46, .77, y));\n  value = mix(value, farTone, below(y, farRidge, .005));\n\n  float hillX = x + t * .032;\n  float hillRidge = .40 + .28 * ridge(hillX * 2.0 + 35.0);\n  float hillTone = .43 + .22 * (1.0 - smoothstep(.37, .64, y));\n  hillTone += (noise(hillX * 22.0 + y * 5.0) - .5) * .028;\n  value = mix(value, hillTone, below(y, hillRidge, .003));\n\n  float woodX = x + t * .085;\n  float woodRidge = .30 + .18 * ridge(woodX * 2.8 + 71.0);\n  float woods = forest(vec2(woodX, y - woodRidge), .027, .063, 4.0, .0018);\n  float woodTone = .28 + .22 * (1.0 - smoothstep(.27, .48, y));\n  value = mix(value, woodTone, max(woods, below(y, woodRidge, .003)));\n\n  // A pale valley separates the near trees from the mountains without a hard horizon.\n  float fog = exp(-pow((y - .335) / .075, 2.0));\n  value = mix(value, .76, fog * .64);\n  float fieldX = x + t * .15;\n  float field = .20 + .10 * ridge(fieldX * 2.3 + 5.0);\n  float fieldTone = .40 + .14 * noise(fieldX * 3.0 + y * 12.0);\n  value = mix(value, fieldTone, below(y, field, .012));\n\n  float nearX = x + t * .24;\n  float nearBase = .11 + .075 * ridge(nearX * 2.4 + 6.0);\n  float nearTrees = forest(vec2(nearX, y - nearBase), .10, .20, 23.0, .0017);\n  value = mix(value, .16 + y * .16, nearTrees * .94);\n  value = mix(value, .16, below(y, nearBase, .008));\n\n  // Sparse close trees cross the window in seconds; their edges soften with motion.\n  float closeX = x + t * .62;\n  float closeBase = -.035 + .055 * ridge(closeX * 1.8 + 9.0);\n  float closeTrees = forest(vec2(closeX, y - closeBase), .73, .49, 51.0, .0035);\n  value = mix(value, .052 + y * .065, closeTrees);\n  float bank = .045 + .035 * ridge(closeX * 4.0);\n  value = mix(value, .055, below(y, bank, .012));\n\n  if (u_scene > .5 && u_scene < 1.5) value = mix(value, 1.0, .16);\n  if (u_scene > 1.5) value = value * .37 + .01;\n  float cycle = mod(u_travel, 240.0);\n  float tunnel = smoothstep(211.0, 215.0, cycle) * (1.0 - smoothstep(223.0, 229.0, cycle));\n  float light = smoothstep(224.0, 228.0, cycle) * (1.0 - smoothstep(228.0, 236.0, cycle));\n  value = mix(value, .018, tunnel);\n  value = mix(value, .985, light * .88);\n  value = clamp(value, .018, .974);\n  vec2 pixel = floor(gl_FragCoord.xy);\n  float random = hash(pixel);\n  float fleck = smoothstep(random - .045, random + .045, value);\n  float tone = mix(value, fleck, .82);\n  tone += (hash(pixel + 173.0) - .5) * .07;\n  gl_FragColor = vec4(vec3(clamp(tone, .015, .985)), 1.0);\n}\n";
const _M0FP37Hosi1216syasou7browser14vertex__source = "\nattribute vec2 a_position;\nvoid main() { gl_Position = vec4(a_position, 0.0, 1.0); }\n";
const _M0FP37Hosi1216syasou6bridge15journey__fields = ["phase", "running", "deadline", "remaining", "focusMinutes", "restMinutes", "id", "startedAt", "arrivedAt", "speed", "scene"];
const _M0FP37Hosi1216syasou6bridge14ticket__fields = ["id", "kind", "startedAt", "arrivedAt", "speed", "scene", "title", "note"];
const _M0FP37Hosi1216syasou2ui15classes_2einnerN7_2abindS675 = " ";
const _M0FP37Hosi1216syasou2ui17fallback__sceneryN5hillsS125 = "M0 360 C130 340 170 210 310 250 S490 430 660 350 S880 170 1030 290 S1140 350 1200 360 V900 H0Z";
const _M0FP37Hosi1216syasou2ui17fallback__sceneryN6slopesS126 = "M0 540 C130 600 200 400 350 440 S580 660 740 520 S1030 430 1200 540 V900 H0Z";
const _M0FP37Hosi1216syasou2ui12guide__stepsN5tupleS1429 = { _0: "手帳で、旅の支度。", _1: "時間と速さを選び、▶で出発。メモには、今日進めたいことを書けます。" };
const _M0FP37Hosi1216syasou2ui12guide__stepsN5tupleS1430 = { _0: "ときどき、窓の外へ。", _1: "窓を押すと、景色だけの眺めに。もう一度押すと席へ戻れます。横向きにして、広い車窓を眺めるのも。" };
const _M0FP37Hosi1216syasou2ui12guide__stepsN5tupleS1431 = { _0: "ひと区切りを、一枚に。", _1: "到着すると、作業が切符になります。まずは記念の一枚を受け取って、手帳にしまってみましょう。" };
const _M0FP37Hosi1216syasou2ui12guide__steps = [_M0FP37Hosi1216syasou2ui12guide__stepsN5tupleS1429, _M0FP37Hosi1216syasou2ui12guide__stepsN5tupleS1430, _M0FP37Hosi1216syasou2ui12guide__stepsN5tupleS1431];
const _M0FP37Hosi1216syasou2ui15compact__layout = "(max-width: 760px), (max-height: 520px) and (pointer: coarse)";
const _M0FP37Hosi1216syasou4view7runtime = _M0FP37Hosi1216syasou4view15shared__runtime(new _M0TP37Hosi1216syasou4view7Runtime(undefined, () => {
}, [], 0));
const _M0FPB4seed = _M0FPB12random__seed();
const _M0FP37Hosi1216syasou6bridge16is__demo__searchN6constrS235 = "1";
const _M0FP37Hosi1216syasou2ui4demo = _M0FP37Hosi1216syasou6bridge16is__demo__search(_M0FP37Hosi1216syasou2ui16location__search());
const _M0FP37Hosi1216syasou2ui12render__cardN6constrS1432 = "welcome";
const _M0FP37Hosi1216syasou2ui12render__cardN6constrS1433 = "sample";
const _M0FP37Hosi1216syasou2ui10use__soundN6constrS1435 = false;
const _M0FP37Hosi1216syasou2ui10use__soundN6constrS1436 = true;
const _M0FP37Hosi1216syasou2ui10use__soundN6constrS1437 = false;
const _M0FP37Hosi1216syasou2ui16render__notebookN5tupleS1440 = { _0: "local", _1: "各駅", _2: "local" };
const _M0FP37Hosi1216syasou2ui16render__notebookN5tupleS1441 = { _0: "rapid", _1: "準急", _2: "semi-express" };
const _M0FP37Hosi1216syasou2ui16render__notebookN5tupleS1442 = { _0: "express", _1: "特急", _2: "express" };
const _M0FP37Hosi1216syasou7browser16create__rendererN6recordS214 = new _M0TP37Hosi1216syasou5webgl14ContextOptions(false, false, false, true);
const _M0FP37Hosi1216syasou7browser16create__rendererN6recordS215 = new _M0TP37Hosi1216syasou6domain9Landscape("mist", "local", true, false);
const _M0FP37Hosi1216syasou6domain15sample__ticketsN5tupleS541 = { _0: "読みかけの本を、ひと章", _1: "気になっていた本の続きを読んだ。\n次は、折り目をつけたページから。", _2: "local", _3: "mist", _4: 25 };
const _M0FP37Hosi1216syasou6domain15sample__ticketsN5tupleS542 = { _0: "企画のラフを描く", _1: "浮かんだアイデアを三つ、紙に描いた。\nまだ途中だけれど、形が見えてきた。", _2: "express", _3: "dawn", _4: 45 };
const _M0FP37Hosi1216syasou6domain15sample__ticketsN5tupleS543 = { _0: "明日のことを手帳に", _1: "気にかかっていたことを、ひとつずつ書き出した。\n明日は、自分のペースで。", _2: "rapid", _3: "night", _4: 15 };
const _M0FP37Hosi1216syasou6domain15sample__ticketsN7_2abindS488 = "sample";
const _M0FP37Hosi1216syasou6domain14valid__journeyN6constrS536 = new _M0DTP37Hosi1216syasou6domain5Field4Text("focus");
const _M0FP37Hosi1216syasou6domain14valid__journeyN6constrS537 = new _M0DTP37Hosi1216syasou6domain5Field4Text("rest");
const _M0FP37Hosi1216syasou6domain14valid__journeyN6constrS538 = new _M0DTP37Hosi1216syasou6domain5Field4Text("focus");
const _M0FP37Hosi1216syasou6domain14valid__journeyN6constrS539 = new _M0DTP37Hosi1216syasou6domain5Field7Numeric(0);
const _M0FP37Hosi1216syasou6domain14reduce__travelN6constrS540 = "welcome";
const _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS528 = "welcome";
const _M0FP37Hosi1216syasou2ui13render__guideN6constrS1438 = false;
const _M0FP37Hosi1216syasou2ui13render__guideN6constrS1439 = true;
const _M0FP37Hosi1216syasou2ui3appN6constrS1443 = "sample";
const _M0FP37Hosi1216syasou2ui3appN6constrS1444 = "welcome";
function _M0FPB13consume4__acc(acc, input) {
  const _p = (acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0;
  const _p$2 = 17;
  return Math.imul(_p << _p$2 | (_p >>> (32 - _p$2 | 0) | 0), 668265263) | 0;
}
function _M0MPB13StringBuilder13write__objectGdE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGdE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGsE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGsE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGiE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGiE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0IP016_24default__implPB2Eq10not__equalGORP37Hosi1216syasou6domain5PhaseE(x, y) {
  return !_M0IPC16option6OptionPB2Eq5equalGRP37Hosi1216syasou6domain5PhaseE(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRP37Hosi1216syasou2ui13ArtworkStatusE(x, y) {
  return !_M0IP37Hosi1216syasou2ui13ArtworkStatusPB2Eq5equal(x, y);
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
function _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC16string6String21clamped__view_2einner(self, start, end) {
  const len = self.length;
  let lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _e = _Some;
    hi = _e < 0 ? 0 : _e > len ? len : _e;
  }
  let _tmp;
  if (lo > 0) {
    let _tmp$2;
    if (lo < len) {
      let _tmp$3;
      const _p = self.charCodeAt(lo);
      if (_p >= 56320 && _p <= 57343) {
        const _p$2 = self.charCodeAt(lo - 1 | 0);
        _tmp$3 = _p$2 >= 55296 && _p$2 <= 56319;
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
  if (_tmp) {
    lo = lo + 1 | 0;
  }
  let _tmp$2;
  if (hi > 0) {
    let _tmp$3;
    if (hi < len) {
      let _tmp$4;
      const _p = self.charCodeAt(hi);
      if (_p >= 56320 && _p <= 57343) {
        const _p$2 = self.charCodeAt(hi - 1 | 0);
        _tmp$4 = _p$2 >= 55296 && _p$2 <= 56319;
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
  if (_tmp$2) {
    hi = hi - 1 | 0;
  }
  return lo >= hi ? new _M0TPC16string10StringView(self, lo, lo) : new _M0TPC16string10StringView(self, lo, hi);
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String21clamped__view_2einner(value, start, start + len | 0));
}
function _M0IP016_24default__implPB4Show6outputGdE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16double6DoublePB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGsE(self, logger) {
  logger.method_table.method_0(logger.self, self);
}
function _M0IP016_24default__implPB4Show6outputGiE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC13int3IntPB4Show10to__string(self));
}
function _M0MPB4Iter4nextGUsRP37Hosi1216syasou2ui13PropertyValueEE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9919GUsRP37Hosi1216syasou2ui13PropertyValueEE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9918GUsRP37Hosi1216syasou2ui13PropertyValueEE;
    }
  }
  return result;
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
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0MPC14uint4UInt18to__string_2einner(self, radix) {
  return _M0FPB20uint__to__string__js(self, radix);
}
function _M0MPB4Iter3newGUsRP37Hosi1216syasou2ui13PropertyValueEE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9926GUsRP37Hosi1216syasou2ui13PropertyValueEE;
  }
  return new _M0TPB4IterGUsRP37Hosi1216syasou2ui13PropertyValueEE(f, size_hint$2);
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
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0MPC16string6String12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  if (start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length)) {
    return new _M0TPC16string10StringView(self, start_offset, end_offset$2);
  } else {
    return $panic();
  }
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
}
function _M0MPC16string6String6repeat(self, n) {
  if (n < 0) {
    return $panic();
  } else {
    if (n === 0) {
      return "";
    } else {
      if (n === 1) {
        return self;
      } else {
        const len = self.length;
        const total = Math.imul(len, n) | 0;
        if (len === 0 || (total / n | 0) === len) {
          const buf = _M0MPB13StringBuilder21StringBuilder_2einner(total);
          const str = self;
          let _tmp = 0;
          while (true) {
            const _ = _tmp;
            if (_ < n) {
              _M0IPB13StringBuilderPB6Logger13write__string(buf, str);
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          return buf.val;
        } else {
          return $panic();
        }
      }
    }
  }
}
function _M0MPC16string6String8find__by(self, pred) {
  const _p = new _M0TPC16string10StringView(self, 0, self.length);
  const _p$2 = _p.str;
  const _p$3 = _p.start;
  const _p$4 = _p.end;
  let _tmp = _p$3;
  let _tmp$2 = 0;
  while (true) {
    const _p$5 = _tmp;
    const _p$6 = _tmp$2;
    if (_p$5 < _p$4) {
      let _p$7;
      let _p$8;
      _L: {
        const _p$9 = _p$2.charCodeAt(_p$5);
        if (_p$9 >= 55296 && _p$9 <= 56319 && (_p$5 + 1 | 0) < _p$4) {
          const _p$10 = _p$2.charCodeAt(_p$5 + 1 | 0);
          if (_p$10 >= 56320 && _p$10 <= 57343) {
            const _tmp$3 = _p$5 + 2 | 0;
            const _p$11 = (((Math.imul(_p$9 - 55296 | 0, 1024) | 0) + _p$10 | 0) - 56320 | 0) + 65536 | 0;
            _p$7 = _tmp$3;
            _p$8 = _p$11;
            break _L;
          } else {
            const _tmp$3 = _p$5 + 1 | 0;
            const _p$11 = _p$9;
            _p$7 = _tmp$3;
            _p$8 = _p$11;
            break _L;
          }
        } else {
          const _tmp$3 = _p$5 + 1 | 0;
          const _p$10 = _p$9;
          _p$7 = _tmp$3;
          _p$8 = _p$10;
          break _L;
        }
      }
      if (pred(_p$8)) {
        return _p$6;
      }
      _tmp = _p$7;
      const _p$9 = _p$8;
      _tmp$2 = _p$6 + (_p$9 <= 65535 ? 1 : 2) | 0;
      continue;
    } else {
      return undefined;
    }
  }
}
function _M0MPC15array5Array4pushGsE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGRP26mizchi8js__core3AnyE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPB4Iter9to__arrayGWdEuE(self) {
  const _bind = self.size_hint;
  let result;
  if (_bind === undefined) {
    result = [];
  } else {
    result = [];
  }
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGUsRP37Hosi1216syasou2ui13PropertyValueEE(self);
    if (_bind$2 === undefined) {
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      _M0MPC15array5Array4pushGsE(result, _x);
      continue;
    }
  }
  return result;
}
function _M0MPC14char4Char20is__ascii__lowercase(self) {
  return self >= 97 && self <= 122;
}
function _M0MPC16string6String9to__upper(self) {
  const _bind = _M0MPC16string6String8find__by(self, (c) => _M0MPC14char4Char20is__ascii__lowercase(c));
  if (_bind === undefined) {
    return self;
  } else {
    const _Some = _bind;
    const _idx = _Some;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(self.length);
    const head = _M0MPC16string6String12view_2einner(self, 0, _idx);
    _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, head.str, head.start, head.end - head.start | 0);
    const _bind$2 = _M0MPC16string6String12view_2einner(self, _idx, undefined);
    const _bind$3 = _bind$2.str;
    const _bind$4 = _bind$2.start;
    const _bind$5 = _bind$2.end;
    let _tmp = _bind$4;
    while (true) {
      const _string_index = _tmp;
      if (_string_index < _bind$5) {
        let _decoded_next_string_index;
        let _decoded_char;
        _L: {
          const _bind$6 = _bind$3.charCodeAt(_string_index);
          if (_bind$6 >= 55296 && _bind$6 <= 56319 && (_string_index + 1 | 0) < _bind$5) {
            const _bind$7 = _bind$3.charCodeAt(_string_index + 1 | 0);
            if (_bind$7 >= 56320 && _bind$7 <= 57343) {
              const _tmp$2 = _string_index + 2 | 0;
              const _p = (((Math.imul(_bind$6 - 55296 | 0, 1024) | 0) + _bind$7 | 0) - 56320 | 0) + 65536 | 0;
              _decoded_next_string_index = _tmp$2;
              _decoded_char = _p;
              break _L;
            } else {
              const _tmp$2 = _string_index + 1 | 0;
              const _p = _bind$6;
              _decoded_next_string_index = _tmp$2;
              _decoded_char = _p;
              break _L;
            }
          } else {
            const _tmp$2 = _string_index + 1 | 0;
            const _p = _bind$6;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          }
        }
        if (_M0MPC14char4Char20is__ascii__lowercase(_decoded_char)) {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char - 32 | 0);
        } else {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
        }
        _tmp = _decoded_next_string_index;
        continue;
      } else {
        break;
      }
    }
    return buf.val;
  }
}
function _M0IPC16string6StringPB12ToStringView16to__string__view(self) {
  return new _M0TPC16string10StringView(self, 0, self.length);
}
function _M0IPC13int3IntPB4Show10to__string(self) {
  return _M0MPC13int3Int18to__string_2einner(self, 10);
}
function _M0MPC15array9ArrayView4iterGUsRP37Hosi1216syasou2ui13PropertyValueEE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.end - self.start | 0;
  return _M0MPB4Iter3newGUsRP37Hosi1216syasou2ui13PropertyValueEE(() => {
    if (i.val < len) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return undefined;
    }
  }, len);
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
function _M0MPC15array5Array4iterGUsRP37Hosi1216syasou2ui13PropertyValueEE(self) {
  return _M0MPC15array9ArrayView4iterGUsRP37Hosi1216syasou2ui13PropertyValueEE(new _M0TPB9ArrayViewGUsRP37Hosi1216syasou2ui13PropertyValueEE(self, 0, self.length));
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
function _M0MPC15array10FixedArray11from__arrayGRP26mizchi8js__core7PromiseGuEE(array) {
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
function _M0MPC15array9ArrayView4joinGsE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string6StringPB12ToStringView16to__string__view(_hd);
    const _bind = _x_end - _x_start | 0;
    let size_hint;
    let _tmp = 0;
    let _tmp$2 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp;
      const size_hint$2 = _tmp$2;
      if (_ < _bind) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp = _ + 1 | 0;
        const _bind$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
        _tmp$2 = (size_hint$2 + (_bind$2.end - _bind$2.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if ((separator.end - separator.start | 0) === 0) {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return buf.val;
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
function _M0IPC16option6OptionPB2Eq5equalGRP37Hosi1216syasou6domain5PhaseE(self, other) {
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
      return _M0IP37Hosi1216syasou6domain5PhasePB2Eq5equal(_x, _y);
    }
  }
}
function _M0MPC16option6Option6unwrapGdE(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
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
function _M0MPC16option6Option10unwrap__orGbE(self, default_) {
  if (self === -1) {
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
function _M0MPC16option6Option3mapGRP37Hosi1216syasou6domain6TicketsE(self, f) {
  if (self === undefined) {
    return undefined;
  } else {
    const _Some = self;
    const _t = _Some;
    return f(_t);
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
function _M0FPB8new__mapGiWdEuE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGiWdEuE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
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
function _M0MPB3Map20add__entry__to__tailGiWdEuE(self, idx, entry) {
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
function _M0MPB3Map10set__entryGiWdEuE(self, entry, new_idx) {
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
function _M0MPB3Map10push__awayGiWdEuE(self, idx, entry) {
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
      _M0MPB3Map10set__entryGiWdEuE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiWdEuE(self, entry$2, idx$2);
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
function _M0MPB3Map20rehash__place__entryGiWdEuE(self, outer) {
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
      _M0MPB3Map20add__entry__to__tailGiWdEuE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGiWdEuE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGiWdEuE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
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
function _M0MPB3Map4growGiWdEuE(self) {
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
      _M0MPB3Map20rehash__place__entryGiWdEuE(self, _e);
      _tmp = next_in_chain;
      continue;
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
function _M0MPB3Map15set__with__hashGiWdEuE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiWdEuE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGiWdEuE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiWdEuE(self, idx, entry);
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
          _M0MPB3Map4growGiWdEuE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiWdEuE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGiWdEuE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiWdEuE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
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
function _M0MPB3Map3setGiWdEuE(self, key, value) {
  _M0MPB3Map15set__with__hashGiWdEuE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRP37Hosi1216syasou6domain5FieldE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP37Hosi1216syasou6domain5FieldE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsbE(self, key, value) {
  _M0MPB3Map15set__with__hashGsbE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3MapGiWdEuE(arr, capacity) {
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
  const m = _M0FPB8new__mapGiWdEuE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiWdEuE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
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
function _M0MPB3Map13remove__entryGiWdEuE(self, entry) {
  const _bind = entry.prev;
  if (_bind === -1) {
    self.head = entry.next;
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
    _tmp$2.next = entry.next;
  }
  const _bind$2 = entry.next;
  if (_bind$2 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$2;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function _M0MPB3Map11shift__backGiWdEuE(self, idx) {
  let _tmp = idx;
  while (true) {
    const cur = _tmp;
    const next = cur + 1 & self.capacity_mask;
    _L: {
      const _bind = self.entries[next];
      if (_bind === undefined) {
        break _L;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          _M0MPB3Map10set__entryGiWdEuE(self, _x, cur);
          _tmp = next;
          continue;
        }
      }
    }
    self.entries[cur] = undefined;
    return;
  }
}
function _M0MPB3Map18remove__with__hashGiWdEuE(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        _M0MPB3Map13remove__entryGiWdEuE(self, _entry);
        _M0MPB3Map11shift__backGiWdEuE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map6removeGiWdEuE(self, key) {
  _M0MPB3Map18remove__with__hashGiWdEuE(self, key, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map6valuesGiWdEuE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGiWdEuEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGUsRP37Hosi1216syasou2ui13PropertyValueEE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind = curr_entry.val;
        if (_bind === undefined) {
          break _L;
        } else {
          const _Some = _bind;
          const _x = _Some;
          const _value = _x.value;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return _value;
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0MPB4Iter3zipGRP26mizchi8js__core3AnyRP26mizchi8js__core3AnyE(self, other) {
  let size_hint;
  _L: {
    _L$2: {
      let m;
      _L$3: {
        _L$4: {
          const _bind = self.size_hint;
          const _bind$2 = other.size_hint;
          if (_bind === undefined) {
            if (_bind$2 === undefined) {
              break _L$2;
            } else {
              const _Some = _bind$2;
              const _x = _Some;
              if (_x === 0) {
                m = 0;
                break _L$4;
              } else {
                break _L$2;
              }
            }
          } else {
            const _Some = _bind;
            const _n = _Some;
            if (_bind$2 === undefined) {
              if (_n === 0) {
                m = 0;
                break _L$4;
              } else {
                break _L$2;
              }
            } else {
              const _Some$2 = _bind$2;
              const _m = _Some$2;
              if (_n < _m) {
                size_hint = _n;
              } else {
                m = _m;
                break _L$4;
              }
            }
          }
          break _L$3;
        }
        size_hint = m;
      }
      break _L;
    }
    size_hint = undefined;
  }
  return new _M0TPB4IterGURP26mizchi8js__core3AnyRP26mizchi8js__core3AnyEE(() => {
    const _bind = _M0MPB4Iter4nextGRP26mizchi8js__core3AnyE(self);
    if (_bind.$tag === 1) {
      const _Some = _bind;
      const _x = _Some._0;
      const _bind$2 = _M0MPB4Iter4nextGRP26mizchi8js__core3AnyE(other);
      if (_bind$2.$tag === 1) {
        const _Some$2 = _bind$2;
        const _y = _Some$2._0;
        return { _0: _x, _1: _y };
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  }, size_hint);
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
function _M0IPC13int3IntPB4Hash4hash(self) {
  const acc = (((_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0) >>> 0) + (4 >>> 0) | 0;
  return _M0FPB13finalize__acc(_M0FPB13consume4__acc(acc, self));
}
function _M0MPC16double6Double7to__int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function _M0MPC16double6Double4ceil(_tmp) {
  return Math.ceil(_tmp);
}
function _M0MPC16double6Double5floor(_tmp) {
  return Math.floor(_tmp);
}
function _M0IPC16double6DoublePB3Mod3mod(self, other) {
  return _M0MPC16double6Double8mod__ffi(self, other);
}
function _M0MPC16double6Double3min(self, other) {
  return self !== self ? other : other !== other ? self : self < other ? self : other;
}
function _M0MPC16double6Double3max(self, other) {
  return self !== self ? other : other !== other ? self : self > other ? self : other;
}
function _M0IPC16double6DoublePB4Show10to__string(self) {
  return String(self);
}
function _M0MPC15array5Array2atGRP37Hosi1216syasou4view4SlotE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGRP26mizchi8js__core3AnyE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGdE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array3getGRP37Hosi1216syasou6domain6TicketE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : undefined;
}
function _M0MPC15array5Array14rev__in__placeGRP37Hosi1216syasou6domain6TicketE(self) {
  const len = self.length;
  const _bind = len / 2 | 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const temp = self[i];
      self[i] = self[(len - i | 0) - 1 | 0];
      self[(len - i | 0) - 1 | 0] = temp;
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
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
function _M0MPC15array5Array10push__iterGUsRP37Hosi1216syasou2ui13PropertyValueEE(self, iter) {
  const _bind = iter.size_hint;
  if (_bind === undefined) {
  }
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGUsRP37Hosi1216syasou2ui13PropertyValueEE(iter);
    if (_bind$2 === undefined) {
      return;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      _M0MPC15array5Array4pushGsE(self, _x);
      continue;
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
function _M0MPC15array5Array4joinGsE(self, separator) {
  return _M0MPC15array9ArrayView4joinGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length), separator);
}
function _M0MPC13ref3Ref3RefGbE(x) {
  return new _M0TPC13ref3RefGbE(x);
}
function _M0FPC16double4ceil(d) {
  return _M0MPC16double6Double4ceil(d);
}
function _M0FPC16double5floor(d) {
  return _M0MPC16double6Double5floor(d);
}
function _M0FPC14math3sin(_tmp) {
  return Math.sin(_tmp);
}
function _M0FPC14math3cos(_tmp) {
  return Math.cos(_tmp);
}
function _M0IP37Hosi1216syasou6domain5FieldPB2Eq5equal(_x_246, _x_247) {
  switch (_x_246.$tag) {
    case 0: {
      if (_x_247.$tag === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_247.$tag === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      const _Flag = _x_246;
      const _$42$x0_248 = _Flag._0;
      if (_x_247.$tag === 2) {
        const _Flag$2 = _x_247;
        const _$42$y0_249 = _Flag$2._0;
        return _$42$x0_248 === _$42$y0_249;
      } else {
        return false;
      }
    }
    case 3: {
      const _Numeric = _x_246;
      const _$42$x0_250 = _Numeric._0;
      if (_x_247.$tag === 3) {
        const _Numeric$2 = _x_247;
        const _$42$y0_251 = _Numeric$2._0;
        return _$42$x0_250 === _$42$y0_251;
      } else {
        return false;
      }
    }
    case 4: {
      const _Text = _x_246;
      const _$42$x0_252 = _Text._0;
      if (_x_247.$tag === 4) {
        const _Text$2 = _x_247;
        const _$42$y0_253 = _Text$2._0;
        return _$42$x0_252 === _$42$y0_253;
      } else {
        return false;
      }
    }
    default: {
      if (_x_247.$tag === 5) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function _M0IP37Hosi1216syasou6domain5PhasePB2Eq5equal(_x_234, _x_235) {
  switch (_x_234) {
    case 0: {
      if (_x_235 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_235 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_235 === 2) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_235 === 3) {
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
          _tmp = (_M0IP37Hosi1216syasou6domain5FieldPB2Eq5equal(_M0MP37Hosi1216syasou6domain6Record3get(j, "remaining"), _M0DTP37Hosi1216syasou6domain5Field4Null__) || _M0FP37Hosi1216syasou6domain13is__timestamp(_M0MP37Hosi1216syasou6domain6Record3get(j, "remaining"))) && (_M0FP37Hosi1216syasou6domain14is__number__in(_M0MP37Hosi1216syasou6domain6Record3get(j, "focusMinutes"), [0, 15, 25, 45, 60, 90]) && (_M0FP37Hosi1216syasou6domain14is__number__in(_M0MP37Hosi1216syasou6domain6Record3get(j, "restMinutes"), [3, 5, 10, 15]) && ((!_running || (_M0IP37Hosi1216syasou6domain5FieldPB2Eq5equal(phase, _M0FP37Hosi1216syasou6domain14valid__journeyN6constrS536) || _M0IP37Hosi1216syasou6domain5FieldPB2Eq5equal(phase, _M0FP37Hosi1216syasou6domain14valid__journeyN6constrS537))) && (!(_running && _M0IP37Hosi1216syasou6domain5FieldPB2Eq5equal(_M0MP37Hosi1216syasou6domain6Record3get(j, "deadline"), _M0DTP37Hosi1216syasou6domain5Field4Null__)) || _M0IP37Hosi1216syasou6domain5FieldPB2Eq5equal(phase, _M0FP37Hosi1216syasou6domain14valid__journeyN6constrS538) && _M0IP37Hosi1216syasou6domain5FieldPB2Eq5equal(_M0MP37Hosi1216syasou6domain6Record3get(j, "focusMinutes"), _M0FP37Hosi1216syasou6domain14valid__journeyN6constrS539)))));
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
function _M0FP37Hosi1216syasou6domain11valid__note(value) {
  return _M0FP37Hosi1216syasou6domain10is__length(value, 0, 300);
}
function _M0FP37Hosi1216syasou6domain14valid__boolean(value) {
  if (value.$tag === 2) {
    return true;
  } else {
    return false;
  }
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
          if (_M0IPC16option6OptionPB2Eq5equalGsE(ticket.kind, _M0FP37Hosi1216syasou6domain14reduce__travelN6constrS540)) {
            return new _M0DTP37Hosi1216syasou6domain12TravelChange6Update(_M0DTP37Hosi1216syasou6domain13JourneyChange4Keep__, _M0DTP37Hosi1216syasou6domain12TicketChange11KeepTickets__, ticket.id);
          }
          _tmp$2 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const ticket = new _M0TP37Hosi1216syasou6domain6Ticket(_M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS527, _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS528, _now, _now, _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS529, _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS530, _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS531, _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS532);
      return new _M0DTP37Hosi1216syasou6domain12TravelChange6Update(_M0DTP37Hosi1216syasou6domain13JourneyChange4Keep__, new _M0DTP37Hosi1216syasou6domain12TicketChange7Prepend(ticket), _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS527);
    }
  }
}
function _M0FP37Hosi1216syasou6domain15sample__tickets(now) {
  const samples = [_M0FP37Hosi1216syasou6domain15sample__ticketsN5tupleS541, _M0FP37Hosi1216syasou6domain15sample__ticketsN5tupleS542, _M0FP37Hosi1216syasou6domain15sample__ticketsN5tupleS543];
  if (samples.length === 0) {
    return [];
  }
  const _p = new Array(samples.length);
  const _p$2 = samples.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = samples[_p$3];
      const _p$5 = _p$4._0;
      const _p$6 = _p$4._1;
      const _p$7 = _p$4._2;
      const _p$8 = _p$4._3;
      const _p$9 = _p$4._4;
      const _p$10 = now - ((_p$3 + 1 | 0) + 0) * 86400000;
      const _p$11 = _M0MPB13StringBuilder21StringBuilder_2einner(10);
      _M0IPB13StringBuilderPB6Logger13write__string(_p$11, "sample-v1-");
      _M0MPB13StringBuilder13write__objectGiE(_p$11, _p$3 + 1 | 0);
      const _p$12 = _p$11.val;
      const _p$13 = _p$10 - _p$9 * 60000;
      _p[_p$3] = new _M0TP37Hosi1216syasou6domain6Ticket(_p$12, _M0FP37Hosi1216syasou6domain15sample__ticketsN7_2abindS488, _p$13, _p$10, _p$7, _p$8, _p$5, _p$6);
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _p;
}
function _M0FP37Hosi1216syasou6domain12format__time(milliseconds) {
  const rounded = _M0FPC16double4ceil(milliseconds / 1000);
  const total = rounded !== rounded ? rounded : _M0MPC16double6Double3max(rounded, 0);
  const minutes = String(_M0FPC16double5floor(total / 60));
  const seconds = String(_M0IPC16double6DoublePB3Mod3mod(total, 60));
  return `${minutes.length < 2 ? `0${minutes}` : minutes}:${seconds.length < 2 ? `0${seconds}` : seconds}`;
}
function _M0FP37Hosi1216syasou6domain24migrate__legacy__journey(legacy, speed, scene, create_id, now) {
  if (_M0IP016_24default__implPB2Eq10not__equalGRP37Hosi1216syasou6domain5PhaseE(legacy.phase, 1) && _M0IP016_24default__implPB2Eq10not__equalGRP37Hosi1216syasou6domain5PhaseE(legacy.phase, 2)) {
    return undefined;
  }
  const arrival = _M0IP37Hosi1216syasou6domain5PhasePB2Eq5equal(legacy.phase, 2) ? _M0MPC16option6Option3mapGddE(legacy.deadline, (d) => d - legacy.rest_minutes * 60000) : _M0DTPC16option6OptionGdE4None__;
  const id = create_id();
  let anchor;
  if (arrival.$tag === 1) {
    const _Some = arrival;
    anchor = _Some._0;
  } else {
    const _bind = legacy.deadline;
    if (_bind.$tag === 1) {
      const _Some = _bind;
      anchor = _Some._0;
    } else {
      anchor = now();
    }
  }
  return new _M0TP37Hosi1216syasou6domain7Journey(legacy.phase, legacy.running, legacy.deadline, legacy.remaining, legacy.focus_minutes, legacy.rest_minutes, id, new _M0DTPC16option6OptionGdE4Some(_M0FP37Hosi1216syasou6domain11number__max(0, anchor - legacy.focus_minutes * 60000)), arrival, speed, scene);
}
function _M0FP37Hosi1216syasou6domain18journey__remaining(journey, now) {
  _L: {
    if (journey.running) {
      const _bind = journey.deadline;
      if (_bind.$tag === 1) {
        const _Some = _bind;
        const _deadline = _Some._0;
        return new _M0DTPC16option6OptionGdE4Some(_M0FP37Hosi1216syasou6domain11number__max(0, _deadline - now));
      } else {
        break _L;
      }
    } else {
      break _L;
    }
  }
  return journey.remaining;
}
function _M0FP37Hosi1216syasou6domain13clamp__motion(value, limit) {
  return _M0FP37Hosi1216syasou6domain11number__max(-limit, _M0FP37Hosi1216syasou6domain11number__min(limit, value));
}
function _M0FP37Hosi1216syasou6domain16ticket__is__back(angle) {
  return _M0FPC14math3cos(angle * 3.14159265358979312 / 180) < 0;
}
function _M0FP37Hosi1216syasou6domain21ticket__shadow__width(angle) {
  return 0.4 + Math.abs(_M0FPC14math3cos(angle * 3.14159265358979312 / 180)) * 0.6;
}
function _M0FP37Hosi1216syasou6domain22ticket__resting__angle(angle, back) {
  const _p = _M0FP37Hosi1216syasou6domain16ticket__is__back(angle);
  if (!(_p === back)) {
    return angle + 180;
  } else {
    return angle;
  }
}
function _M0FP37Hosi1216syasou6domain19begin__ticket__grip(x, y, left, width, height, base, back) {
  return new _M0TP37Hosi1216syasou6domain10TicketGrip(x, y, width, height, base, back, 0, (x - left) / width - 0.5);
}
function _M0FP37Hosi1216syasou6domain12lift__ticket(grip, top) {
  return new _M0TP37Hosi1216syasou6domain10TicketLift(-18, 42, ((grip.y - top) / grip.height - 0.5) * -12, grip.base - grip.edge * 10, grip.edge * 3, 0.48, 33, 0.46);
}
function _M0FP37Hosi1216syasou6domain12drag__ticket(grip, x, y) {
  const dx = x - grip.x;
  const dy = y - grip.y;
  return new _M0TP37Hosi1216syasou6domain10TicketDrag(dx, _M0FP37Hosi1216syasou6domain13clamp__motion(dx * 0.18, 65), -18 + _M0FP37Hosi1216syasou6domain13clamp__motion(dy * 0.35, 65), grip.base + _M0FP37Hosi1216syasou6domain13clamp__motion(dx / grip.width * 220, 175) - grip.edge * 6, _M0FP37Hosi1216syasou6domain13clamp__motion(-dy / grip.height * 30, 22), _M0FP37Hosi1216syasou6domain13clamp__motion(dx / grip.width * 6 + grip.edge * 3, 7), _M0FP37Hosi1216syasou6domain13clamp__motion(dx * 0.2, 95));
}
function _M0FP37Hosi1216syasou6domain13hover__ticket(x, y, left, top, width, height) {
  const nx = (x - left) / width - 0.5;
  const ny = (y - top) / height - 0.5;
  return new _M0TP37Hosi1216syasou6domain11TicketHover(-ny * 5, nx * 1.4, 7, nx * 80, 0.26);
}
function _M0FP37Hosi1216syasou6domain15release__ticket(grip, complete) {
  const turn = complete && Math.abs(grip.dx) > grip.width * 0.3;
  const direction = grip.dx > 0 ? 1 : grip.dx < 0 ? -1 : grip.dx;
  return new _M0TP37Hosi1216syasou6domain13TicketRelease(turn ? !grip.back : grip.back, grip.base + (turn ? direction * 180 : 0));
}
function _M0FP37Hosi1216syasou6domain14ticket__serial(id) {
  let value = 7;
  let i = 0;
  while (true) {
    if (i < id.length) {
      const _tmp = i;
      const _p = _tmp >>> 0 < id.length ? id.charCodeAt(_tmp) : $oob();
      const code = _p;
      value = ((Math.imul(value, 31) | 0) >>> 0) + (code >>> 0) | 0;
      i = i + 1 | 0;
      if (code >>> 0 >= 55296 >>> 0 && (code >>> 0 <= 56319 >>> 0 && i < id.length)) {
        const _tmp$2 = i;
        const _p$2 = _tmp$2 >>> 0 < id.length ? id.charCodeAt(_tmp$2) : $oob();
        const next = _p$2;
        if (next >>> 0 >= 56320 >>> 0 && next >>> 0 <= 57343 >>> 0) {
          i = i + 1 | 0;
        }
      }
      continue;
    } else {
      break;
    }
  }
  const digits = _M0MPC14uint4UInt18to__string_2einner(value, 10);
  return digits.length < 8 ? `${_M0MPC16string6String6repeat("0", 8 - digits.length | 0)}${digits}` : digits.substring(digits.length - 8 | 0, digits.length);
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
function _M0MP26mizchi8js__core7Promise13withResolversGuE() {
  return _M0FP26mizchi8js__core29ffi__promise__with__resolvers();
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
function _M0MP26mizchi8js__core7Promise4waitGuE(self, _cont, _err_cont) {
  _M0MP26mizchi8js__core3Any6__call(_M0MP26mizchi8js__core3Any6__call(self, "then", [_cont]), "catch", [_err_cont]);
  return new _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(-1);
}
function _M0MP26mizchi8js__core7Promise4waitGRPB5ArrayGuEE(self, _cont, _err_cont) {
  _M0MP26mizchi8js__core3Any6__call(_M0MP26mizchi8js__core3Any6__call(self, "then", [_cont]), "catch", [_err_cont]);
  return new _M0DTPC16result6ResultGORPB5ArrayGuERPC15error5ErrorE2Ok(_M0DTPC16option6OptionGRPB5ArrayGuEE4None__);
}
function _M0MP26mizchi8js__core7Promise3allGuE(promises) {
  return _M0FP26mizchi8js__core17ffi__promise__all(_M0MPC15array10FixedArray11from__arrayGRP26mizchi8js__core7PromiseGuEE(new _M0TPB9ArrayViewGRP26mizchi8js__core7PromiseGuEE(promises, 0, promises.length)));
}
function _M0FP26mizchi8js__core10promisify0N7_2acontS400GuE(_param) {}
function _M0FP26mizchi8js__core10promisify0N12_2aerr__contS401GuE(_err) {}
function _M0FP26mizchi8js__core10promisify0N16_2aasync__driverS402GuE(_state) {
  if (_state.$tag === 0) {
    const _$42$try$47$251 = _state;
    const reject = _$42$try$47$251._1;
    const _try_err = _$42$try$47$251._0;
    if (_try_err.$tag === 0) {
      return new _M0DTPC16result6ResultGOuRPB9CancelledE3Err(_try_err);
    } else {
      return new _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(reject(_try_err));
    }
  } else {
    const _State_1 = _state;
    const resolve = _State_1._1;
    const _cont_param = _State_1._0;
    return new _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(resolve(_cont_param));
  }
}
function _M0FP26mizchi8js__core10promisify0GuE(f) {
  return () => {
    const _bind = _M0MP26mizchi8js__core7Promise13withResolversGuE();
    const _promise = _bind.promise;
    const _resolve = _bind.resolve;
    const _reject = _bind.reject;
    let _cancel_err;
    _L: {
      _L$2: {
        let _bind$2;
        let _err;
        _L$3: {
          _L$4: {
            const _bind$3 = f((_cont_param) => {
              let _err$2;
              _L$5: {
                const _bind$4 = _M0FP26mizchi8js__core10promisify0N16_2aasync__driverS402GuE(new _M0DTP26mizchi8js__core57_24mizchi_2fjs__core_2epromisify0_2elambda_2elambda_2f399L5StateGuE8State__1(_cont_param, _resolve));
                let _bind$5;
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _bind$5 = _ok._0;
                } else {
                  const _err$3 = _bind$4;
                  _err$2 = _err$3._0;
                  break _L$5;
                }
                if (_bind$5 === -1) {
                  return;
                } else {
                  const _Some = _bind$5;
                  const _payload = _Some;
                  _M0FP26mizchi8js__core10promisify0N7_2acontS400GuE(_payload);
                  return;
                }
              }
              _M0FP26mizchi8js__core10promisify0N12_2aerr__contS401GuE(_err$2);
            }, (_cont_param) => {
              let _err$2;
              _L$5: {
                const _bind$4 = _M0FP26mizchi8js__core10promisify0N16_2aasync__driverS402GuE(new _M0DTP26mizchi8js__core57_24mizchi_2fjs__core_2epromisify0_2elambda_2elambda_2f399L5StateGuE12_2atry_2f251(_cont_param, _reject));
                let _bind$5;
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _bind$5 = _ok._0;
                } else {
                  const _err$3 = _bind$4;
                  _err$2 = _err$3._0;
                  break _L$5;
                }
                if (_bind$5 === -1) {
                  return;
                } else {
                  const _Some = _bind$5;
                  const _payload = _Some;
                  _M0FP26mizchi8js__core10promisify0N7_2acontS400GuE(_payload);
                  return;
                }
              }
              _M0FP26mizchi8js__core10promisify0N12_2aerr__contS401GuE(_err$2);
            });
            let _bind$4;
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _bind$4 = _ok._0;
            } else {
              const _err$2 = _bind$3;
              _err = _err$2._0;
              break _L$4;
            }
            if (_bind$4 === -1) {
              _bind$2 = new _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(-1);
            } else {
              const _Some = _bind$4;
              const _payload = _Some;
              _bind$2 = _M0FP26mizchi8js__core10promisify0N16_2aasync__driverS402GuE(new _M0DTP26mizchi8js__core57_24mizchi_2fjs__core_2epromisify0_2elambda_2elambda_2f399L5StateGuE8State__1(_payload, _resolve));
            }
            break _L$3;
          }
          _bind$2 = _M0FP26mizchi8js__core10promisify0N16_2aasync__driverS402GuE(new _M0DTP26mizchi8js__core57_24mizchi_2fjs__core_2epromisify0_2elambda_2elambda_2f399L5StateGuE12_2atry_2f251(_err, _reject));
        }
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _ok._0;
        } else {
          const _err$2 = _bind$2;
          _cancel_err = _err$2._0;
          break _L$2;
        }
        break _L;
      }
    }
    return _promise;
  };
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
function _M0FP26mizchi8js__core16identity__optionGRP36mizchi11js__browser3dom7ElementE(v) {
  return _M0FP26mizchi8js__core11is__nullish(v) ? _M0DTPC16option6OptionGRP36mizchi11js__browser3dom7ElementE4None__ : new _M0DTPC16option6OptionGRP36mizchi11js__browser3dom7ElementE4Some(v);
}
function _M0FP26mizchi8js__core16identity__optionGsE(v) {
  return _M0FP26mizchi8js__core11is__nullish(v) ? undefined : v;
}
function _M0FP36mizchi11js__builtin6global12global__this() {
  return _M0FP36mizchi11js__builtin6global10globalThis();
}
function _M0MP36mizchi7js__web5event11EventTarget24addEventListener_2einner(self, event_type, handler, capture, once, passive, signal) {
  const entries = [];
  _M0MPC15array5Array4pushGsE(entries, { _0: "capture", _1: capture });
  _M0MPC15array5Array4pushGsE(entries, { _0: "once", _1: once });
  _M0MPC15array5Array4pushGsE(entries, { _0: "passive", _1: passive });
  if (signal.$tag === 1) {
    const _Some = signal;
    const _v = _Some._0;
    _M0MPC15array5Array4pushGsE(entries, { _0: "signal", _1: _v });
  }
  _M0MP26mizchi8js__core3Any6__call(self, "addEventListener", [event_type, handler, _M0FP26mizchi8js__core13from__entries(entries)]);
}
function _M0MP36mizchi7js__web5event11EventTarget27removeEventListener_2einner(self, event_type, handler, capture) {
  _M0MP26mizchi8js__core3Any6__call(self, "removeEventListener", [event_type, handler, _M0FP26mizchi8js__core13from__entries([{ _0: "capture", _1: capture }])]);
}
function _M0MP36mizchi11js__browser3dom6Window10innerWidth(self) {
  return _M0MP26mizchi8js__core3Any5__get(self, "innerWidth");
}
function _M0MP36mizchi11js__browser3dom6Window11innerHeight(self) {
  return _M0MP26mizchi8js__core3Any5__get(self, "innerHeight");
}
function _M0MP36mizchi11js__browser3dom6Window10setTimeout(self, handler, delay) {
  return _M0MP26mizchi8js__core3Any6__call(self, "setTimeout", [handler, delay]);
}
function _M0MP36mizchi11js__browser3dom6Window12clearTimeout(self, id) {
  _M0MP26mizchi8js__core3Any6__call(self, "clearTimeout", [id]);
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
function _M0MP36mizchi11js__browser3dom10TouchEvent14preventDefault(self) {
  _M0MP26mizchi8js__core3Any6__call(self, "preventDefault", []);
}
function _M0MP36mizchi11js__browser3dom8Document13querySelector(self, selector) {
  const v = _M0MP26mizchi8js__core3Any6__call(self, "querySelector", [selector]);
  return _M0FP26mizchi8js__core16identity__optionGRP36mizchi11js__browser3dom7ElementE(v);
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
  _M0MPC15array5Array4pushGsE(sources, new _M0DTP37Hosi1216syasou7browser6Source5Noise(source));
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
      _M0MPC15array5Array4pushGsE(sources, new _M0DTP37Hosi1216syasou7browser6Source4Tone(oscillator));
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
function _M0MP36mizchi7js__web3url15URLSearchParams3get(self, name) {
  return _M0FP26mizchi8js__core16identity__optionGsE(_M0MP26mizchi8js__core3Any6__call(self, "get", [name]));
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
function _M0FP37Hosi1216syasou6bridge8is__note(value) {
  return _M0FP37Hosi1216syasou6domain11valid__note(_M0FP37Hosi1216syasou6bridge11read__field(value));
}
function _M0FP37Hosi1216syasou6bridge19is__stored__boolean(value) {
  return _M0FP37Hosi1216syasou6domain14valid__boolean(_M0FP37Hosi1216syasou6bridge11read__field(value));
}
function _M0FP37Hosi1216syasou6bridge8optionalGdE(value) {
  return _M0FP26mizchi8js__core11is__nullish(value) ? _M0DTPC16option6OptionGdE4None__ : new _M0DTPC16option6OptionGdE4Some(value);
}
function _M0FP37Hosi1216syasou6bridge8optionalGsE(value) {
  return _M0FP26mizchi8js__core11is__nullish(value) ? undefined : value;
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
function _M0FP37Hosi1216syasou6bridge13undefined__orGsE(value) {
  if (value === undefined) {
    return _M0FP26mizchi8js__core9undefined();
  } else {
    const _Some = value;
    const _value = _Some;
    return _value;
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
function _M0FP37Hosi1216syasou6bridge16is__demo__search(search) {
  return _M0IPC16option6OptionPB2Eq5equalGsE(_M0MP36mizchi7js__web3url15URLSearchParams3get(_M0FP37Hosi1216syasou6bridge14search__params(search), "demo"), _M0FP37Hosi1216syasou6bridge16is__demo__searchN6constrS235);
}
function _M0FP37Hosi1216syasou6bridge20default__preferences() {
  const out = _M0FP26mizchi8js__core11new__object();
  _M0MP26mizchi8js__core3Any5__set(out, "focusMinutes", 25);
  _M0MP26mizchi8js__core3Any5__set(out, "restMinutes", 5);
  _M0MP26mizchi8js__core3Any5__set(out, "speed", "local");
  _M0MP26mizchi8js__core3Any5__set(out, "scene", "mist");
  _M0MP26mizchi8js__core3Any5__set(out, "showTime", true);
  _M0MP26mizchi8js__core3Any5__set(out, "trainVolume", 45);
  _M0MP26mizchi8js__core3Any5__set(out, "rainVolume", 0);
  _M0MP26mizchi8js__core3Any5__set(out, "windVolume", 20);
  return out;
}
function _M0FP37Hosi1216syasou6bridge14empty__journey() {
  const out = _M0FP26mizchi8js__core11new__object();
  _M0MP26mizchi8js__core3Any5__set(out, "phase", "idle");
  _M0MP26mizchi8js__core3Any5__set(out, "running", false);
  _M0MP26mizchi8js__core3Any5__set(out, "deadline", _M0FP26mizchi8js__core4null());
  _M0MP26mizchi8js__core3Any5__set(out, "remaining", _M0FP26mizchi8js__core4null());
  _M0MP26mizchi8js__core3Any5__set(out, "focusMinutes", 25);
  _M0MP26mizchi8js__core3Any5__set(out, "restMinutes", 5);
  return out;
}
function _M0FP37Hosi1216syasou6bridge24migrate__legacy__journey(legacy, preferences, create_id, now) {
  const _bind = _M0FP37Hosi1216syasou6domain24migrate__legacy__journey(_M0FP37Hosi1216syasou6bridge13read__journey(legacy), _M0MP26mizchi8js__core3Any5__get(preferences, "speed"), _M0MP26mizchi8js__core3Any5__get(preferences, "scene"), create_id, now);
  if (_bind === undefined) {
    return legacy;
  } else {
    const _Some = _bind;
    const _next = _Some;
    const out = _M0FP26mizchi8js__core14object__assign(_M0FP26mizchi8js__core11new__object(), legacy);
    _M0MP26mizchi8js__core3Any5__set(out, "id", _M0FP37Hosi1216syasou6bridge13undefined__orGsE(_next.id));
    _M0MP26mizchi8js__core3Any5__set(out, "speed", _M0FP37Hosi1216syasou6bridge13undefined__orGsE(_next.speed));
    _M0MP26mizchi8js__core3Any5__set(out, "scene", _M0FP37Hosi1216syasou6bridge13undefined__orGsE(_next.scene));
    _M0MP26mizchi8js__core3Any5__set(out, "startedAt", _M0FP37Hosi1216syasou6bridge13undefined__orGdE(_next.started_at));
    _M0MP26mizchi8js__core3Any5__set(out, "arrivedAt", _M0FP37Hosi1216syasou6bridge13undefined__orGdE(_next.arrived_at));
    return out;
  }
}
function _M0FP37Hosi1216syasou6bridge15sample__tickets(now) {
  const _p = _M0FP37Hosi1216syasou6domain15sample__tickets(now);
  const _p$2 = new Array(_p.length);
  const _p$3 = _p.length;
  let _tmp = 0;
  while (true) {
    const _p$4 = _tmp;
    if (_p$4 < _p$3) {
      const _p$5 = _p[_p$4];
      _p$2[_p$4] = _M0FP37Hosi1216syasou6bridge13write__ticket(_p$5);
      _tmp = _p$4 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _p$2;
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
function _M0FP37Hosi1216syasou4view9componentGRP37Hosi1216syasou2ui9SnowPropsE(render, props, key) {
  return new _M0DTP37Hosi1216syasou4view7Element9Component(render, () => render(props), key);
}
function _M0FP37Hosi1216syasou4view9identical(_tmp, _tmp$2) {
  return Object.is(_tmp, _tmp$2);
}
function _M0FP37Hosi1216syasou4view14number__option(props, name, fallback) {
  const value = _M0MP26mizchi8js__core3Any5__get(props, name);
  return _M0FP37Hosi1216syasou4view4kind(value) === "number" ? value : fallback;
}
function _M0FP37Hosi1216syasou4view10is__motion(value) {
  return _M0FP37Hosi1216syasou4view4kind(value) === "object" && (!_M0FP26mizchi8js__core8is__null(value) && _M0MP26mizchi8js__core3Any10to__string(_M0MP26mizchi8js__core3Any5__get(value, "motion_tag")) === "syasou-motion");
}
function _M0FP37Hosi1216syasou4view8new__refGsE(initial) {
  const reference = new _M0TP37Hosi1216syasou4view7ViewRefGsE(initial);
  _M0FP37Hosi1216syasou4view13register__ref(reference, (value) => {
    reference.current = _M0FP26mizchi8js__core13is__undefined(value) ? undefined : value;
  });
  return reference;
}
function _M0FP37Hosi1216syasou4view8new__refGiE(initial) {
  const reference = new _M0TP37Hosi1216syasou4view7ViewRefGiE(initial);
  _M0FP37Hosi1216syasou4view13register__ref(reference, (value) => {
    reference.current = _M0FP26mizchi8js__core13is__undefined(value) ? undefined : value;
  });
  return reference;
}
function _M0FP37Hosi1216syasou4view8new__refGRP37Hosi1216syasou6domain5PhaseE(initial) {
  const reference = new _M0TP37Hosi1216syasou4view7ViewRefGRP37Hosi1216syasou6domain5PhaseE(initial);
  _M0FP37Hosi1216syasou4view13register__ref(reference, (value) => {
    reference.current = _M0FP26mizchi8js__core13is__undefined(value) ? undefined : value;
  });
  return reference;
}
function _M0FP37Hosi1216syasou4view8new__refGRP36mizchi11js__browser3dom7ElementE(initial) {
  const reference = new _M0TP37Hosi1216syasou4view7ViewRefGRP36mizchi11js__browser3dom7ElementE(initial);
  _M0FP37Hosi1216syasou4view13register__ref(reference, (value) => {
    reference.current = _M0FP26mizchi8js__core13is__undefined(value) ? _M0DTPC16option6OptionGRP36mizchi11js__browser3dom7ElementE4None__ : new _M0DTPC16option6OptionGRP36mizchi11js__browser3dom7ElementE4Some(value);
  });
  return reference;
}
function _M0FP37Hosi1216syasou4view8new__refGbE(initial) {
  const reference = new _M0TP37Hosi1216syasou4view7ViewRefGbE(initial);
  _M0FP37Hosi1216syasou4view13register__ref(reference, (value) => {
    reference.current = _M0FP26mizchi8js__core13is__undefined(value) ? -1 : value;
  });
  return reference;
}
function _M0FP37Hosi1216syasou4view8new__refGdE(initial) {
  const reference = new _M0TP37Hosi1216syasou4view7ViewRefGdE(initial);
  _M0FP37Hosi1216syasou4view13register__ref(reference, (value) => {
    reference.current = _M0FP26mizchi8js__core13is__undefined(value) ? _M0DTPC16option6OptionGdE4None__ : new _M0DTPC16option6OptionGdE4Some(value);
  });
  return reference;
}
function _M0FP37Hosi1216syasou4view17subscribe__motion(value, listener) {
  value.serial = value.serial + 1 | 0;
  const id = value.serial;
  _M0MPB3Map3setGiWdEuE(value.listeners, id, listener);
  return () => {
    _M0MPB3Map6removeGiWdEuE(value.listeners, id);
  };
}
function _M0MP37Hosi1216syasou4view7ViewRef12set__currentGiE(self, value) {
  self.current = value;
}
function _M0MP37Hosi1216syasou4view7ViewRef12set__currentGRP37Hosi1216syasou6domain5PhaseE(self, value) {
  self.current = value;
}
function _M0MP37Hosi1216syasou4view7ViewRef12set__currentGsE(self, value) {
  self.current = value;
}
function _M0MP37Hosi1216syasou4view7ViewRef12set__currentGRP37Hosi1216syasou2ui11SoundEngineE(self, value) {
  self.current = value;
}
function _M0MP37Hosi1216syasou4view7ViewRef12set__currentGbE(self, value) {
  self.current = value;
}
function _M0MP37Hosi1216syasou4view7ViewRef12set__currentGdE(self, value) {
  self.current = value;
}
function _M0FP37Hosi1216syasou4view10same__deps(a, b) {
  if (a.length === b.length) {
    const _p = _M0MPB4Iter3zipGRP26mizchi8js__core3AnyRP26mizchi8js__core3AnyE(_M0MPC15array5Array4iterGRP26mizchi8js__core3AnyE(a), _M0MPC15array5Array4iterGRP26mizchi8js__core3AnyE(b));
    let _tmp;
    while (true) {
      const _p$2 = _M0MPB4Iter4nextGUsRP37Hosi1216syasou2ui13PropertyValueEE(_p);
      if (_p$2 === undefined) {
        _tmp = true;
        break;
      } else {
        const _p$3 = _p$2;
        const _p$4 = _p$3;
        if (_M0FP37Hosi1216syasou4view9identical(_p$4._0, _p$4._1)) {
        } else {
          _tmp = false;
          break;
        }
        continue;
      }
    }
    return _tmp;
  } else {
    return false;
  }
}
function _M0FP37Hosi1216syasou4view4slot(initialize) {
  const _p = _M0FP37Hosi1216syasou4view7runtime.scope;
  let scope;
  if (_p === undefined) {
    scope = $panic();
  } else {
    const _p$2 = _p;
    scope = _p$2;
  }
  const index = scope.cursor;
  scope.cursor = scope.cursor + 1 | 0;
  const fresh = index === scope.slots.length;
  if (fresh) {
    _M0MPC15array5Array4pushGsE(scope.slots, new _M0TP37Hosi1216syasou4view4Slot(initialize(), [], () => {
    }, 0));
  }
  return { _0: _M0MPC15array5Array2atGRP37Hosi1216syasou4view4SlotE(scope.slots, index), _1: fresh };
}
function _M0FP37Hosi1216syasou4view16use__state__lazyGsE(initialize) {
  const _p = _M0FP37Hosi1216syasou4view7runtime.scope;
  let scope;
  if (_p === undefined) {
    scope = $panic();
  } else {
    const _p$2 = _p;
    scope = _p$2;
  }
  const _bind = _M0FP37Hosi1216syasou4view4slot(() => initialize());
  const _cell = _bind._0;
  const _bind$2 = _M0FP37Hosi1216syasou4view4slot(() => {
    const set = (value) => {
      if (scope.alive && !_M0FP37Hosi1216syasou4view9identical(_cell.value, value)) {
        _cell.value = value;
        const _func = _M0FP37Hosi1216syasou4view7runtime.schedule;
        _func();
        return;
      } else {
        return;
      }
    };
    _M0FP37Hosi1216syasou4view14attach__setter(set, _cell);
    return set;
  });
  const _setter = _bind$2._0;
  return { _0: _cell.value, _1: _setter.value };
}
function _M0FP37Hosi1216syasou4view16use__state__lazyGbE(initialize) {
  const _p = _M0FP37Hosi1216syasou4view7runtime.scope;
  let scope;
  if (_p === undefined) {
    scope = $panic();
  } else {
    const _p$2 = _p;
    scope = _p$2;
  }
  const _bind = _M0FP37Hosi1216syasou4view4slot(() => initialize());
  const _cell = _bind._0;
  const _bind$2 = _M0FP37Hosi1216syasou4view4slot(() => {
    const set = (value) => {
      if (scope.alive && !_M0FP37Hosi1216syasou4view9identical(_cell.value, value)) {
        _cell.value = value;
        const _func = _M0FP37Hosi1216syasou4view7runtime.schedule;
        _func();
        return;
      } else {
        return;
      }
    };
    _M0FP37Hosi1216syasou4view14attach__setter(set, _cell);
    return set;
  });
  const _setter = _bind$2._0;
  return { _0: _cell.value, _1: _setter.value };
}
function _M0FP37Hosi1216syasou4view16use__state__lazyGRP37Hosi1216syasou2ui11PreferencesE(initialize) {
  const _p = _M0FP37Hosi1216syasou4view7runtime.scope;
  let scope;
  if (_p === undefined) {
    scope = $panic();
  } else {
    const _p$2 = _p;
    scope = _p$2;
  }
  const _bind = _M0FP37Hosi1216syasou4view4slot(() => initialize());
  const _cell = _bind._0;
  const _bind$2 = _M0FP37Hosi1216syasou4view4slot(() => {
    const set = (value) => {
      if (scope.alive && !_M0FP37Hosi1216syasou4view9identical(_cell.value, value)) {
        _cell.value = value;
        const _func = _M0FP37Hosi1216syasou4view7runtime.schedule;
        _func();
        return;
      } else {
        return;
      }
    };
    _M0FP37Hosi1216syasou4view14attach__setter(set, _cell);
    return set;
  });
  const _setter = _bind$2._0;
  return { _0: _cell.value, _1: _setter.value };
}
function _M0FP37Hosi1216syasou4view16use__state__lazyGdE(initialize) {
  const _p = _M0FP37Hosi1216syasou4view7runtime.scope;
  let scope;
  if (_p === undefined) {
    scope = $panic();
  } else {
    const _p$2 = _p;
    scope = _p$2;
  }
  const _bind = _M0FP37Hosi1216syasou4view4slot(() => initialize());
  const _cell = _bind._0;
  const _bind$2 = _M0FP37Hosi1216syasou4view4slot(() => {
    const set = (value) => {
      if (scope.alive && !_M0FP37Hosi1216syasou4view9identical(_cell.value, value)) {
        _cell.value = value;
        const _func = _M0FP37Hosi1216syasou4view7runtime.schedule;
        _func();
        return;
      } else {
        return;
      }
    };
    _M0FP37Hosi1216syasou4view14attach__setter(set, _cell);
    return set;
  });
  const _setter = _bind$2._0;
  return { _0: _cell.value, _1: _setter.value };
}
function _M0FP37Hosi1216syasou4view16use__state__lazyGiE(initialize) {
  const _p = _M0FP37Hosi1216syasou4view7runtime.scope;
  let scope;
  if (_p === undefined) {
    scope = $panic();
  } else {
    const _p$2 = _p;
    scope = _p$2;
  }
  const _bind = _M0FP37Hosi1216syasou4view4slot(() => initialize());
  const _cell = _bind._0;
  const _bind$2 = _M0FP37Hosi1216syasou4view4slot(() => {
    const set = (value) => {
      if (scope.alive && !_M0FP37Hosi1216syasou4view9identical(_cell.value, value)) {
        _cell.value = value;
        const _func = _M0FP37Hosi1216syasou4view7runtime.schedule;
        _func();
        return;
      } else {
        return;
      }
    };
    _M0FP37Hosi1216syasou4view14attach__setter(set, _cell);
    return set;
  });
  const _setter = _bind$2._0;
  return { _0: _cell.value, _1: _setter.value };
}
function _M0FP37Hosi1216syasou4view16use__state__lazyGRP37Hosi1216syasou2ui13ArtworkStatusE(initialize) {
  const _p = _M0FP37Hosi1216syasou4view7runtime.scope;
  let scope;
  if (_p === undefined) {
    scope = $panic();
  } else {
    const _p$2 = _p;
    scope = _p$2;
  }
  const _bind = _M0FP37Hosi1216syasou4view4slot(() => initialize());
  const _cell = _bind._0;
  const _bind$2 = _M0FP37Hosi1216syasou4view4slot(() => {
    const set = (value) => {
      if (scope.alive && !_M0FP37Hosi1216syasou4view9identical(_cell.value, value)) {
        _cell.value = value;
        const _func = _M0FP37Hosi1216syasou4view7runtime.schedule;
        _func();
        return;
      } else {
        return;
      }
    };
    _M0FP37Hosi1216syasou4view14attach__setter(set, _cell);
    return set;
  });
  const _setter = _bind$2._0;
  return { _0: _cell.value, _1: _setter.value };
}
function _M0FP37Hosi1216syasou4view10use__stateGbE(value) {
  return _M0FP37Hosi1216syasou4view16use__state__lazyGbE(() => value);
}
function _M0FP37Hosi1216syasou4view10use__stateGiE(value) {
  return _M0FP37Hosi1216syasou4view16use__state__lazyGiE(() => value);
}
function _M0FP37Hosi1216syasou4view10use__stateGsE(value) {
  return _M0FP37Hosi1216syasou4view16use__state__lazyGsE(() => value);
}
function _M0FP37Hosi1216syasou4view10use__stateGRP37Hosi1216syasou2ui13ArtworkStatusE(value) {
  return _M0FP37Hosi1216syasou4view16use__state__lazyGRP37Hosi1216syasou2ui13ArtworkStatusE(() => value);
}
function _M0FP37Hosi1216syasou4view10use__stateGOsE(value) {
  return _M0FP37Hosi1216syasou4view16use__state__lazyGRP37Hosi1216syasou2ui11PreferencesE(() => value);
}
function _M0FP37Hosi1216syasou4view6updateGsE(setter, transform) {
  setter(transform(_M0FP37Hosi1216syasou4view12setter__slot(setter).value));
}
function _M0FP37Hosi1216syasou4view6updateGRP37Hosi1216syasou2ui11SavedTravelE(setter, transform) {
  setter(transform(_M0FP37Hosi1216syasou4view12setter__slot(setter).value));
}
function _M0FP37Hosi1216syasou4view6updateGiE(setter, transform) {
  setter(transform(_M0FP37Hosi1216syasou4view12setter__slot(setter).value));
}
function _M0FP37Hosi1216syasou4view6updateGbE(setter, transform) {
  setter(transform(_M0FP37Hosi1216syasou4view12setter__slot(setter).value));
}
function _M0FP37Hosi1216syasou4view13use__callbackGWEuE(callback, deps) {
  const _bind = _M0FP37Hosi1216syasou4view4slot(() => callback);
  const _cell = _bind._0;
  const _fresh = _bind._1;
  if (_fresh || !_M0FP37Hosi1216syasou4view10same__deps(_cell.deps, deps)) {
    _cell.value = callback;
    _cell.deps = deps;
  }
  return _cell.value;
}
function _M0FP37Hosi1216syasou4view11use__effect(run, deps) {
  const _p = _M0FP37Hosi1216syasou4view7runtime.scope;
  let scope;
  if (_p === undefined) {
    scope = $panic();
  } else {
    const _p$2 = _p;
    scope = _p$2;
  }
  const _bind = _M0FP37Hosi1216syasou4view4slot(_M0FP26mizchi8js__core9undefined);
  const _cell = _bind._0;
  const _fresh = _bind._1;
  if (_fresh || !_M0FP37Hosi1216syasou4view10same__deps(_cell.deps, deps)) {
    _cell.deps = deps;
    _cell.generation = _cell.generation + 1 | 0;
    const generation = _cell.generation;
    _M0MPC15array5Array4pushGsE(_M0FP37Hosi1216syasou4view7runtime.effects, () => {
      if (scope.alive && _cell.generation === generation) {
        const _func = _cell.cleanup;
        _func();
        _cell.cleanup = run();
        return;
      } else {
        return;
      }
    });
    return;
  } else {
    return;
  }
}
function _M0FP37Hosi1216syasou4view23use__imperative__handleGRP37Hosi1216syasou2ui12TicketHandleE(reference, make, deps) {
  _M0FP37Hosi1216syasou4view11use__effect(() => {
    reference.current = make();
    return () => {
      reference.current = undefined;
    };
  }, deps);
}
function _M0FP37Hosi1216syasou4view26use__sync__external__storeGbE(subscribe, snapshot) {
  const _bind = _M0FP37Hosi1216syasou4view16use__state__lazyGbE(snapshot);
  const _value = _bind._0;
  const _set = _bind._1;
  _M0FP37Hosi1216syasou4view11use__effect(() => {
    const check = () => {
      _set(snapshot());
    };
    const cleanup = subscribe(check);
    check();
    return cleanup;
  }, [subscribe]);
  return _value;
}
function _M0FP37Hosi1216syasou4view13motion__value(value, spring, options) {
  const _tmp = _M0FP37Hosi1216syasou4view14number__option(options, "stiffness", 100);
  const _tmp$2 = _M0FP37Hosi1216syasou4view14number__option(options, "damping", 10);
  const _tmp$3 = _M0FP37Hosi1216syasou4view14number__option(options, "mass", 1);
  const _bind = [];
  return new _M0TP37Hosi1216syasou4view11MotionValue("syasou-motion", value, value, 0, _tmp, _tmp$2, _tmp$3, spring, _M0MPB3Map3MapGiWdEuE(new _M0TPB9ArrayViewGUiWdEuEE(_bind, 0, 0), undefined), 0, undefined, 0);
}
function _M0FP37Hosi1216syasou4view4emit(value) {
  const _bind = _M0MPB4Iter9to__arrayGWdEuE(_M0MPB3Map6valuesGiWdEuE(value.listeners));
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const listener = _bind[_];
      listener(value.value);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP37Hosi1216syasou4view12stop__motion(value) {
  const _bind = value.frame;
  if (_bind === undefined) {
    return;
  } else {
    const _Some = _bind;
    const _id = _Some;
    _M0MP36mizchi11js__browser3dom6Window20cancelAnimationFrame(_M0FP36mizchi11js__browser3dom6window(), _id);
    value.frame = undefined;
    return;
  }
}
function _M0MP37Hosi1216syasou4view11MotionValue4jump(self, value) {
  _M0FP37Hosi1216syasou4view12stop__motion(self);
  self.target = value;
  self.value = value;
  self.velocity = 0;
  _M0FP37Hosi1216syasou4view4emit(self);
}
function _M0FP37Hosi1216syasou4view12step__motion(value, time) {
  value.frame = undefined;
  const elapsed = value.last_time === 0 ? 0.0166666666666666664 : _M0MPC16double6Double3min((time - value.last_time) / 1000, 0.064);
  value.last_time = time;
  const _p = _M0MPC16double6Double7to__int(_M0FPC16double4ceil(elapsed / 0.004));
  const _p$2 = 1;
  const steps = _p > _p$2 ? _p : _p$2;
  const dt = elapsed / (steps + 0);
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < steps) {
      const acceleration = (-value.stiffness * (value.value - value.target) - value.damping * value.velocity) / value.mass;
      value.velocity = value.velocity + acceleration * dt;
      value.value = value.value + value.velocity * dt;
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (Math.abs(value.value - value.target) < 0.005 && Math.abs(value.velocity) < 0.01) {
    value.value = value.target;
    value.velocity = 0;
    value.last_time = 0;
  } else {
    value.frame = _M0MP36mizchi11js__browser3dom6Window21requestAnimationFrame(_M0FP36mizchi11js__browser3dom6window(), (time$2) => {
      _M0FP37Hosi1216syasou4view12step__motion(value, time$2);
    });
  }
  _M0FP37Hosi1216syasou4view4emit(value);
}
function _M0MP37Hosi1216syasou4view11MotionValue3set(self, value) {
  if (!self.spring) {
    _M0MP37Hosi1216syasou4view11MotionValue4jump(self, value);
    return undefined;
  }
  self.target = value;
  const _bind = self.frame;
  if (_bind === undefined) {
    if (self.value !== value) {
      self.last_time = 0;
      self.frame = _M0MP36mizchi11js__browser3dom6Window21requestAnimationFrame(_M0FP36mizchi11js__browser3dom6window(), (time) => {
        _M0FP37Hosi1216syasou4view12step__motion(self, time);
      });
      return;
    } else {
      return;
    }
  } else {
    return;
  }
}
function _M0FP37Hosi1216syasou4view18use__motion__value(initial) {
  const _bind = _M0FP37Hosi1216syasou4view16use__state__lazyGsE(() => _M0FP37Hosi1216syasou4view13motion__value(initial, false, _M0FP26mizchi8js__core11new__object()));
  return _bind._0;
}
function _M0FP37Hosi1216syasou4view11use__spring(input, options) {
  const source = _M0FP37Hosi1216syasou4view10is__motion(input) ? input : undefined;
  let initial;
  if (source === undefined) {
    initial = input;
  } else {
    const _Some = source;
    const _value = _Some;
    initial = _value.value;
  }
  const _bind = _M0FP37Hosi1216syasou4view16use__state__lazyGsE(() => _M0FP37Hosi1216syasou4view13motion__value(initial, true, options));
  const _value = _bind._0;
  _M0FP37Hosi1216syasou4view11use__effect(() => {
    let unsubscribe;
    if (source === undefined) {
      unsubscribe = () => {
      };
    } else {
      const _Some = source;
      const _source = _Some;
      unsubscribe = _M0FP37Hosi1216syasou4view17subscribe__motion(_source, (next) => {
        _M0MP37Hosi1216syasou4view11MotionValue3set(_value, next);
      });
    }
    return () => {
      unsubscribe();
      _M0FP37Hosi1216syasou4view12stop__motion(_value);
    };
  }, []);
  return _value;
}
function _M0FP37Hosi1216syasou4view14use__transform(source, transform) {
  const output = _M0FP37Hosi1216syasou4view18use__motion__value(transform(source.value));
  _M0FP37Hosi1216syasou4view11use__effect(() => _M0FP37Hosi1216syasou4view17subscribe__motion(source, (value) => {
    _M0MP37Hosi1216syasou4view11MotionValue4jump(output, transform(value));
  }), [source]);
  return output;
}
function _M0FP37Hosi1216syasou4view18use__motion__event(source, _name, listener) {
  _M0FP37Hosi1216syasou4view11use__effect(() => _M0FP37Hosi1216syasou4view17subscribe__motion(source, listener), [source, listener]);
}
function _M0MP36mizchi7js__web6crypto6Crypto10randomUUID(self) {
  return _M0MP26mizchi8js__core3Any6__call(self, "randomUUID", []);
}
function _M0IP37Hosi1216syasou2ui13ArtworkStatusPB2Eq5equal(_x_586, _x_587) {
  switch (_x_586) {
    case 0: {
      if (_x_587 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_587 === 1) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_587 === 2) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function _M0FP37Hosi1216syasou2ui11on__keydown(callback) {
  const listener = (event) => {
    callback(event);
  };
  _M0MP36mizchi11js__browser3dom8Document24addEventListener_2einner(_M0FP36mizchi11js__browser3dom8document(), "keydown", listener, false, false, false, _M0DTPC16option6OptionGRP311moonbitlang5async9js__async11AbortSignalE4None__);
  return () => {
    _M0MP36mizchi11js__browser3dom8Document27removeEventListener_2einner(_M0FP36mizchi11js__browser3dom8document(), "keydown", listener, false);
  };
}
function _M0FP37Hosi1216syasou2ui16visual__viewport() {
  const value = _M0FP37Hosi1216syasou2ui13viewport__raw();
  return _M0FP26mizchi8js__core11is__nullish(value) ? _M0DTPC16option6OptionGRP37Hosi1216syasou2ui14VisualViewportE4None__ : new _M0DTPC16option6OptionGRP37Hosi1216syasou2ui14VisualViewportE4Some(value);
}
function _M0FP37Hosi1216syasou2ui6effect(run, deps) {
  _M0FP37Hosi1216syasou4view11use__effect(run, deps);
}
function _M0FP37Hosi1216syasou2ui21use__visual__viewport() {
  _M0FP37Hosi1216syasou2ui6effect(() => {
    const _bind = _M0FP37Hosi1216syasou2ui16visual__viewport();
    if (_bind.$tag === 1) {
      const _Some = _bind;
      const _viewport = _Some._0;
      const update = () => {
        if (_M0MP37Hosi1216syasou2ui14VisualViewport5scale(_viewport) > 1.05) {
          return undefined;
        }
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(2);
        _M0MPB13StringBuilder13write__objectGdE(_string_builder, _M0MP37Hosi1216syasou2ui14VisualViewport6height(_viewport));
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "px");
        _M0FP37Hosi1216syasou2ui11root__style("--visual-height", _string_builder.val);
        const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(2);
        _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, _M0MP37Hosi1216syasou2ui14VisualViewport3top(_viewport));
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "px");
        _M0FP37Hosi1216syasou2ui11root__style("--visual-top", _string_builder$2.val);
      };
      update();
      const resize = _M0MP37Hosi1216syasou2ui14VisualViewport9subscribe(_viewport, "resize", update);
      const scroll = _M0MP37Hosi1216syasou2ui14VisualViewport9subscribe(_viewport, "scroll", update);
      return () => {
        resize();
        scroll();
        _M0FP37Hosi1216syasou2ui19remove__root__style("--visual-height");
        _M0FP37Hosi1216syasou2ui19remove__root__style("--visual-top");
      };
    } else {
      return () => {
      };
    }
  }, []);
}
function _M0FP37Hosi1216syasou2ui9componentGRP37Hosi1216syasou2ui9SnowPropsE(render, props, key) {
  return _M0FP37Hosi1216syasou4view9componentGRP37Hosi1216syasou2ui9SnowPropsE(render, props, key);
}
function _M0FP37Hosi1216syasou2ui10properties(values) {
  const out = _M0FP26mizchi8js__core11new__object();
  const _bind = values.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const _foreach_element = values[_];
      const _key = _foreach_element._0;
      const _value = _foreach_element._1;
      _M0MP26mizchi8js__core3Any5__set(out, _key, _value);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP37Hosi1216syasou2ui7foreign(library, name, attrs, children) {
  const _p = _M0FP37Hosi1216syasou2ui10properties(attrs);
  return new _M0DTP37Hosi1216syasou4view7Element7Control(library, name, _p, children);
}
function _M0FP37Hosi1216syasou2ui4node(tag, attrs, children) {
  const _p = _M0FP37Hosi1216syasou2ui10properties(attrs);
  return new _M0DTP37Hosi1216syasou4view7Element3Tag(tag, _p, children);
}
function _M0FP37Hosi1216syasou2ui1pGdE(name, value) {
  return { _0: name, _1: value };
}
function _M0FP37Hosi1216syasou2ui1pGsE(name, value) {
  return { _0: name, _1: value };
}
function _M0FP37Hosi1216syasou2ui1pGbE(name, value) {
  return { _0: name, _1: value };
}
function _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE(name, value) {
  return { _0: name, _1: value };
}
function _M0FP37Hosi1216syasou2ui1pGiE(name, value) {
  return { _0: name, _1: value };
}
function _M0FP37Hosi1216syasou2ui12icon_2einner(name, size, stroke_width, hidden) {
  let class_name;
  let children;
  _L: {
    switch (name) {
      case "ArrowLeft": {
        class_name = "lucide lucide-arrow-left";
        children = [_M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "m12 19-7-7 7-7")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M19 12H5")], [])];
        break _L;
      }
      case "ArrowRight": {
        class_name = "lucide lucide-arrow-right";
        children = [_M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M5 12h14")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "m12 5 7 7-7 7")], [])];
        break _L;
      }
      case "BookOpen": {
        class_name = "lucide lucide-book-open";
        children = [_M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M12 5v16")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z")], [])];
        break _L;
      }
      case "Maximize": {
        class_name = "lucide lucide-maximize";
        children = [_M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M8 3H5a2 2 0 0 0-2 2v3")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M21 8V5a2 2 0 0 0-2-2h-3")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M3 16v3a2 2 0 0 0 2 2h3")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M16 21h3a2 2 0 0 0 2-2v-3")], [])];
        break _L;
      }
      case "Minimize": {
        class_name = "lucide lucide-minimize";
        children = [_M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M8 3v3a2 2 0 0 1-2 2H3")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M21 8h-3a2 2 0 0 1-2-2V3")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M3 16h3a2 2 0 0 1 2 2v3")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M16 21v-3a2 2 0 0 1 2-2h3")], [])];
        break _L;
      }
      case "NotebookPen": {
        class_name = "lucide lucide-notebook-pen";
        children = [_M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M2 6h4")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M2 10h4")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M2 14h4")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M2 18h4")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z")], [])];
        break _L;
      }
      case "Check": {
        class_name = "lucide lucide-check";
        children = [_M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M20 6 9 17l-5-5")], [])];
        break _L;
      }
      case "PanelsTopLeft": {
        class_name = "lucide lucide-panels-top-left lucide-layout";
        children = [_M0FP37Hosi1216syasou2ui4node("rect", [_M0FP37Hosi1216syasou2ui1pGsE("width", "18"), _M0FP37Hosi1216syasou2ui1pGsE("height", "18"), _M0FP37Hosi1216syasou2ui1pGsE("x", "3"), _M0FP37Hosi1216syasou2ui1pGsE("y", "3"), _M0FP37Hosi1216syasou2ui1pGsE("rx", "2")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M3 9h18")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M9 21V9")], [])];
        break _L;
      }
      case "RotateCcw": {
        class_name = "lucide lucide-rotate-ccw";
        children = [_M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M3 3v5h5")], [])];
        break _L;
      }
      case "X": {
        class_name = "lucide lucide-x";
        children = [_M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M18 6 6 18")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "m6 6 12 12")], [])];
        break _L;
      }
      case "Pause": {
        class_name = "lucide lucide-pause";
        children = [_M0FP37Hosi1216syasou2ui4node("rect", [_M0FP37Hosi1216syasou2ui1pGsE("x", "14"), _M0FP37Hosi1216syasou2ui1pGsE("y", "3"), _M0FP37Hosi1216syasou2ui1pGsE("width", "5"), _M0FP37Hosi1216syasou2ui1pGsE("height", "18"), _M0FP37Hosi1216syasou2ui1pGsE("rx", "1")], []), _M0FP37Hosi1216syasou2ui4node("rect", [_M0FP37Hosi1216syasou2ui1pGsE("x", "5"), _M0FP37Hosi1216syasou2ui1pGsE("y", "3"), _M0FP37Hosi1216syasou2ui1pGsE("width", "5"), _M0FP37Hosi1216syasou2ui1pGsE("height", "18"), _M0FP37Hosi1216syasou2ui1pGsE("rx", "1")], [])];
        break _L;
      }
      case "Play": {
        class_name = "lucide lucide-play";
        children = [_M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z")], [])];
        break _L;
      }
      case "Settings2": {
        class_name = "lucide lucide-settings-2";
        children = [_M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M14 17H5")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M19 7h-9")], []), _M0FP37Hosi1216syasou2ui4node("circle", [_M0FP37Hosi1216syasou2ui1pGsE("cx", "17"), _M0FP37Hosi1216syasou2ui1pGsE("cy", "17"), _M0FP37Hosi1216syasou2ui1pGsE("r", "3")], []), _M0FP37Hosi1216syasou2ui4node("circle", [_M0FP37Hosi1216syasou2ui1pGsE("cx", "7"), _M0FP37Hosi1216syasou2ui1pGsE("cy", "7"), _M0FP37Hosi1216syasou2ui1pGsE("r", "3")], [])];
        break _L;
      }
      case "Square": {
        class_name = "lucide lucide-square";
        children = [_M0FP37Hosi1216syasou2ui4node("rect", [_M0FP37Hosi1216syasou2ui1pGsE("width", "18"), _M0FP37Hosi1216syasou2ui1pGsE("height", "18"), _M0FP37Hosi1216syasou2ui1pGsE("x", "3"), _M0FP37Hosi1216syasou2ui1pGsE("y", "3"), _M0FP37Hosi1216syasou2ui1pGsE("rx", "2")], [])];
        break _L;
      }
      case "Tickets": {
        class_name = "lucide lucide-tickets";
        children = [_M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M6 10V8")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M6 14v1")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M6 19v2")], []), _M0FP37Hosi1216syasou2ui4node("rect", [_M0FP37Hosi1216syasou2ui1pGsE("x", "2"), _M0FP37Hosi1216syasou2ui1pGsE("y", "8"), _M0FP37Hosi1216syasou2ui1pGsE("width", "20"), _M0FP37Hosi1216syasou2ui1pGsE("height", "13"), _M0FP37Hosi1216syasou2ui1pGsE("rx", "2")], [])];
        break _L;
      }
      case "Volume2": {
        class_name = "lucide lucide-volume-2";
        children = [_M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M16 9a5 5 0 0 1 0 6")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M19.364 18.364a9 9 0 0 0 0-12.728")], [])];
        break _L;
      }
      case "VolumeX": {
        class_name = "lucide lucide-volume-x";
        children = [_M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "m16.5 14.5 5-5")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "m16.5 9.5 5 5")], [])];
        break _L;
      }
      case "CloudFog": {
        class_name = "lucide lucide-cloud-fog";
        children = [_M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M16 17H7")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M17 21H9")], [])];
        break _L;
      }
      case "CloudRain": {
        class_name = "lucide lucide-cloud-rain";
        children = [_M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M16 14v6")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M8 14v6")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M12 16v6")], [])];
        break _L;
      }
      case "Eye": {
        class_name = "lucide lucide-eye";
        children = [_M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0")], []), _M0FP37Hosi1216syasou2ui4node("circle", [_M0FP37Hosi1216syasou2ui1pGsE("cx", "12"), _M0FP37Hosi1216syasou2ui1pGsE("cy", "12"), _M0FP37Hosi1216syasou2ui1pGsE("r", "3")], [])];
        break _L;
      }
      case "EyeOff": {
        class_name = "lucide lucide-eye-off";
        children = [_M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M14.084 14.158a3 3 0 0 1-4.242-4.242")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "m2 2 20 20")], [])];
        break _L;
      }
      case "Moon": {
        class_name = "lucide lucide-moon";
        children = [_M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401")], [])];
        break _L;
      }
      case "Sun": {
        class_name = "lucide lucide-sun";
        children = [_M0FP37Hosi1216syasou2ui4node("circle", [_M0FP37Hosi1216syasou2ui1pGsE("cx", "12"), _M0FP37Hosi1216syasou2ui1pGsE("cy", "12"), _M0FP37Hosi1216syasou2ui1pGsE("r", "4")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M12 2v2")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M12 20v2")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "m4.93 4.93 1.41 1.41")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "m17.66 17.66 1.41 1.41")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M2 12h2")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M20 12h2")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "m6.34 17.66-1.41 1.41")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "m19.07 4.93-1.41 1.41")], [])];
        break _L;
      }
      case "TrainFront": {
        class_name = "lucide lucide-train-front";
        children = [_M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M8 3.1V7a4 4 0 0 0 8 0V3.1")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "m9 15-1-1")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "m15 15 1-1")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "m8 19-2 3")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "m16 19 2 3")], [])];
        break _L;
      }
      case "Wind": {
        class_name = "lucide lucide-wind";
        children = [_M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M12.8 19.6A2 2 0 1 0 14 16H2")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M17.5 8a2.5 2.5 0 1 1 2 4H2")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M9.8 4.4A2 2 0 1 1 11 8H2")], [])];
        break _L;
      }
      default: {
        class_name = "lucide";
        children = [];
        break _L;
      }
    }
  }
  return _M0FP37Hosi1216syasou2ui4node("svg", [_M0FP37Hosi1216syasou2ui1pGsE("xmlns", "http://www.w3.org/2000/svg"), _M0FP37Hosi1216syasou2ui1pGdE("width", size), _M0FP37Hosi1216syasou2ui1pGdE("height", size), _M0FP37Hosi1216syasou2ui1pGsE("viewBox", "0 0 24 24"), _M0FP37Hosi1216syasou2ui1pGsE("fill", "none"), _M0FP37Hosi1216syasou2ui1pGsE("stroke", "currentColor"), _M0FP37Hosi1216syasou2ui1pGdE("strokeWidth", stroke_width), _M0FP37Hosi1216syasou2ui1pGsE("strokeLinecap", "round"), _M0FP37Hosi1216syasou2ui1pGsE("strokeLinejoin", "round"), _M0FP37Hosi1216syasou2ui1pGsE("className", class_name), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")], children);
}
function _M0FP37Hosi1216syasou2ui20render__view__picker(props) {
  const _bind = _M0FP37Hosi1216syasou4view10use__stateGbE(false);
  const _open = _bind._0;
  const _set_open = _bind._1;
  const _tmp = [_M0FP37Hosi1216syasou2ui1pGbE("open", _open), _M0FP37Hosi1216syasou2ui1pGsE("onOpenChange", _set_open)];
  const _tmp$2 = _M0FP37Hosi1216syasou2ui7foreign("popover", "Trigger", [_M0FP37Hosi1216syasou2ui1pGbE("asChild", true)], [_M0FP37Hosi1216syasou2ui4node("button", [_M0FP37Hosi1216syasou2ui1pGsE("className", "corner-action view-picker-trigger"), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", "眺めを選ぶ"), _M0FP37Hosi1216syasou2ui1pGsE("title", "眺めを選ぶ")], [_M0FP37Hosi1216syasou2ui12icon_2einner("PanelsTopLeft", 19, 1, false)])]);
  const _tmp$3 = [];
  const _tmp$4 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "view-picker"), _M0FP37Hosi1216syasou2ui1pGsE("side", "top"), _M0FP37Hosi1216syasou2ui1pGsE("align", "end"), _M0FP37Hosi1216syasou2ui1pGiE("sideOffset", 14), _M0FP37Hosi1216syasou2ui1pGiE("collisionPadding", 24), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", "眺めを選ぶ"), _M0FP37Hosi1216syasou2ui1pGsE("onEscapeKeyDown", (e) => {
    _M0MP37Hosi1216syasou2ui7UiEvent4stop(e);
  })];
  const _tmp$5 = [_M0FP37Hosi1216syasou2ui1pGsE("type", "single"), _M0FP37Hosi1216syasou2ui1pGsE("className", "view-options"), _M0FP37Hosi1216syasou2ui1pGsE("value", props.value), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", "眺め"), _M0FP37Hosi1216syasou2ui1pGsE("onValueChange", (next) => {
    if (next === "forest" || (next === "snow" || next === "train")) {
      const _func = props.on_change;
      _func(next);
      _set_open(false);
      return;
    } else {
      return;
    }
  })];
  const _p = _M0FP37Hosi1216syasou6domain13view__options.length;
  let _tmp$6;
  if (_p <= 0) {
    _tmp$6 = [];
  } else {
    const _p$2 = new Array(_p);
    let _tmp$7 = 0;
    while (true) {
      const _p$3 = _tmp$7;
      if (_p$3 < _p) {
        const _p$4 = _p$3 >>> 0 < _M0FP37Hosi1216syasou6domain13view__options.length ? _M0FP37Hosi1216syasou6domain13view__options[_p$3] : $oob();
        const _p$5 = _p$4._0;
        const _p$6 = _p$4._1;
        const _tmp$8 = [_M0FP37Hosi1216syasou2ui1pGsE("key", _p$5), _M0FP37Hosi1216syasou2ui1pGsE("value", _p$5), _M0FP37Hosi1216syasou2ui1pGsE("className", "view-option"), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", _p$6)];
        const _p$7 = _M0MPB13StringBuilder21StringBuilder_2einner(26);
        _M0IPB13StringBuilderPB6Logger13write__string(_p$7, "view-preview view-preview-");
        _M0MPB13StringBuilder13write__objectGsE(_p$7, _p$5);
        _p$2[_p$3] = _M0FP37Hosi1216syasou2ui7foreign("toggle", "Item", _tmp$8, [_M0FP37Hosi1216syasou2ui4node("span", [_M0FP37Hosi1216syasou2ui1pGsE("className", _p$7.val), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")], [_M0FP37Hosi1216syasou2ui4node("span", [_M0FP37Hosi1216syasou2ui1pGsE("className", "preview-sky")], []), _M0FP37Hosi1216syasou2ui4node("span", [_M0FP37Hosi1216syasou2ui1pGsE("className", "preview-ground")], []), _p$5 === "train" ? _M0FP37Hosi1216syasou2ui4node("span", [_M0FP37Hosi1216syasou2ui1pGsE("className", "train-artwork preview-train")], []) : _M0DTP37Hosi1216syasou4view7Element5Blank__]), _M0FP37Hosi1216syasou2ui4node("span", [_M0FP37Hosi1216syasou2ui1pGsE("className", "view-option-label")], [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$6), _M0FP37Hosi1216syasou2ui12icon_2einner("Check", 12, 1.3, true)])]);
        _tmp$7 = _p$3 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _tmp$6 = _p$2;
  }
  return _M0FP37Hosi1216syasou2ui7foreign("popover", "Root", _tmp, [_tmp$2, _M0FP37Hosi1216syasou2ui7foreign("popover", "Portal", _tmp$3, [_M0FP37Hosi1216syasou2ui7foreign("popover", "Content", _tmp$4, [_M0FP37Hosi1216syasou2ui7foreign("toggle", "Root", _tmp$5, _tmp$6)])])]);
}
function _M0FP37Hosi1216syasou2ui12view__picker(value, on_change) {
  return _M0FP37Hosi1216syasou2ui9componentGRP37Hosi1216syasou2ui9SnowPropsE(_M0FP37Hosi1216syasou2ui20render__view__picker, new _M0TP37Hosi1216syasou2ui15ViewPickerProps(value, on_change), undefined);
}
function _M0FP37Hosi1216syasou2ui6styles(values) {
  return _M0FP37Hosi1216syasou2ui10properties(values);
}
function _M0FP37Hosi1216syasou2ui6absent() {
  return _M0FP26mizchi8js__core9undefined();
}
function _M0FP37Hosi1216syasou2ui5group(children) {
  return new _M0DTP37Hosi1216syasou4view7Element5Group(children);
}
function _M0FP37Hosi1216syasou2ui7observe(run, deps) {
  _M0FP37Hosi1216syasou2ui6effect(() => {
    run();
    return () => {
    };
  }, deps);
}
function _M0FP37Hosi1216syasou2ui6updateGsE(setter, transform) {
  _M0FP37Hosi1216syasou4view6updateGsE(setter, transform);
}
function _M0FP37Hosi1216syasou2ui6updateGiE(setter, transform) {
  _M0FP37Hosi1216syasou4view6updateGiE(setter, transform);
}
function _M0FP37Hosi1216syasou2ui6updateGbE(setter, transform) {
  _M0FP37Hosi1216syasou4view6updateGbE(setter, transform);
}
function _M0FP37Hosi1216syasou2ui11prepare__ui() {
  return _M0MP26mizchi8js__core7Promise7resolveGuE(undefined);
}
function _M0FP37Hosi1216syasou2ui12motion__node(tag, attrs, children) {
  return _M0FP37Hosi1216syasou2ui4node(tag, attrs, children);
}
function _M0FP37Hosi1216syasou2ui10motion__or(value, fallback) {
  if (value === undefined) {
    return fallback;
  } else {
    const _Some = value;
    const _v = _Some;
    return _v;
  }
}
function _M0FP37Hosi1216syasou2ui18use__motion__value(value) {
  return _M0FP37Hosi1216syasou4view18use__motion__value(value);
}
function _M0FP37Hosi1216syasou2ui6springGRP37Hosi1216syasou4view11MotionValueE(value, options) {
  return _M0FP37Hosi1216syasou4view11use__spring(value, _M0FP37Hosi1216syasou2ui10properties(options));
}
function _M0FP37Hosi1216syasou2ui6springGdE(value, options) {
  return _M0FP37Hosi1216syasou4view11use__spring(value, _M0FP37Hosi1216syasou2ui10properties(options));
}
function _M0FP37Hosi1216syasou2ui14use__transform(value, transform) {
  return _M0FP37Hosi1216syasou4view14use__transform(value, transform);
}
function _M0FP37Hosi1216syasou2ui18use__motion__event(value, name, listener) {
  _M0FP37Hosi1216syasou4view18use__motion__event(value, name, listener);
}
function _M0FP37Hosi1216syasou2ui16subscribe__media(query, listener) {
  const media = _M0FP36mizchi11js__browser3dom10matchMedia(query);
  const callback = (_discard_) => {
    listener();
  };
  _M0MP36mizchi11js__browser3dom14MediaQueryList17addChangeListener(media, callback);
  return () => {
    _M0MP36mizchi11js__browser3dom14MediaQueryList20removeChangeListener(media, callback);
  };
}
function _M0FP37Hosi1216syasou2ui10use__media(query) {
  const subscribe = _M0FP37Hosi1216syasou4view13use__callbackGWEuE((listener) => _M0FP37Hosi1216syasou2ui16subscribe__media(query, listener), [query]);
  return _M0FP37Hosi1216syasou4view26use__sync__external__storeGbE(subscribe, () => _M0FP36mizchi11js__browser3dom10matchMedia(query).matches);
}
function _M0FP37Hosi1216syasou2ui15reduced__motion() {
  return _M0FP37Hosi1216syasou2ui10use__media("(prefers-reduced-motion: reduce)");
}
function _M0FP37Hosi1216syasou2ui12on__document(name, callback) {
  const listener = (_event) => {
    callback();
  };
  _M0MP36mizchi11js__browser3dom8Document24addEventListener_2einner(_M0FP36mizchi11js__browser3dom8document(), name, listener, false, false, false, _M0DTPC16option6OptionGRP311moonbitlang5async9js__async11AbortSignalE4None__);
  return () => {
    _M0MP36mizchi11js__browser3dom8Document27removeEventListener_2einner(_M0FP36mizchi11js__browser3dom8document(), name, listener, false);
  };
}
function _M0FP37Hosi1216syasou2ui15classes_2einner(base, flags) {
  const items = base === "" ? [] : [base];
  const _bind = flags.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const _foreach_element = flags[_];
      const _name = _foreach_element._0;
      const _enabled = _foreach_element._1;
      if (_enabled) {
        _M0MPC15array5Array4pushGsE(items, _name);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPC15array5Array4joinGsE(items, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou2ui15classes_2einnerN7_2abindS675, 0, _M0FP37Hosi1216syasou2ui15classes_2einnerN7_2abindS675.length));
}
function _M0FP37Hosi1216syasou2ui18rail__mark_2einner(stroke_width) {
  return _M0FP37Hosi1216syasou2ui4node("svg", [_M0FP37Hosi1216syasou2ui1pGsE("viewBox", "0 0 40 40"), _M0FP37Hosi1216syasou2ui1pGsE("fill", "none"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")], [_M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M9 28V12a5 5 0 0 1 5-5h12a5 5 0 0 1 5 5v16H9ZM9 19h22M20 7v12M14 28l-4 7m16-7 4 7M12 32h16"), _M0FP37Hosi1216syasou2ui1pGsE("stroke", "currentColor"), _M0FP37Hosi1216syasou2ui1pGdE("strokeWidth", stroke_width)], []), _M0FP37Hosi1216syasou2ui4node("circle", [_M0FP37Hosi1216syasou2ui1pGsE("cx", "15"), _M0FP37Hosi1216syasou2ui1pGsE("cy", "24"), _M0FP37Hosi1216syasou2ui1pGsE("r", "1.2"), _M0FP37Hosi1216syasou2ui1pGsE("fill", "currentColor")], []), _M0FP37Hosi1216syasou2ui4node("circle", [_M0FP37Hosi1216syasou2ui1pGsE("cx", "25"), _M0FP37Hosi1216syasou2ui1pGsE("cy", "24"), _M0FP37Hosi1216syasou2ui1pGsE("r", "1.2"), _M0FP37Hosi1216syasou2ui1pGsE("fill", "currentColor")], [])]);
}
function _M0FP37Hosi1216syasou2ui12ticket__date(time) {
  return _M0MPC16string6String9to__upper(_M0FP37Hosi1216syasou2ui23formatted__ticket__date(time));
}
function _M0FP37Hosi1216syasou2ui12render__cardN5sheenS403(props) {
  return _M0FP37Hosi1216syasou2ui12motion__node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-sheen"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true"), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("style", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("x", _M0FP37Hosi1216syasou2ui10motion__or(props.shine_x, 0)), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("opacity", _M0FP37Hosi1216syasou2ui10motion__or(props.shine_opacity, 0.12))]))], []);
}
function _M0FP37Hosi1216syasou2ui12render__card(props) {
  const ticket = props.ticket;
  const reduced = _M0FP37Hosi1216syasou2ui15reduced__motion();
  const date = _M0FP37Hosi1216syasou2ui12ticket__date(ticket.arrived_at);
  const welcome = _M0IPC16option6OptionPB2Eq5equalGsE(ticket.kind, _M0FP37Hosi1216syasou2ui12render__cardN6constrS1432);
  const serial = _M0FP37Hosi1216syasou6domain14ticket__serial(ticket.id);
  const _bind = ticket.speed;
  let service;
  switch (_bind) {
    case "rapid": {
      service = "SEMI-EXPRESS";
      break;
    }
    case "express": {
      service = "EXPRESS";
      break;
    }
    default: {
      service = "LOCAL";
    }
  }
  const _bind$2 = ticket.scene;
  let route;
  switch (_bind$2) {
    case "dawn": {
      route = "MORNING LIGHT";
      break;
    }
    case "night": {
      route = "NIGHT FOREST";
      break;
    }
    default: {
      route = "MIST VALLEY";
    }
  }
  const _tmp = [_M0FP37Hosi1216syasou2ui1pGsE("className", "rail-ticket"), _M0FP37Hosi1216syasou2ui1pGsE("data-ticket-kind", _M0MPC16option6Option10unwrap__orGsE(ticket.kind, "journey"))];
  const _tmp$2 = _M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-turn");
  const _bind$3 = props.rotation;
  let _tmp$3;
  if (_bind$3 === undefined) {
    _tmp$3 = _M0FP37Hosi1216syasou2ui6absent();
  } else {
    const _Some = _bind$3;
    const _v = _Some;
    _tmp$3 = _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGsE("rotateY", _v)]);
  }
  const _tmp$4 = _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("style", _tmp$3);
  const _bind$4 = props.rotation;
  const _tmp$5 = [_tmp$2, _tmp$4, _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("animate", _bind$4 === undefined ? _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("rotateY", props.back ? 180 : 0)]) : _M0FP37Hosi1216syasou2ui6absent()), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("transition", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("duration", reduced ? 0 : 0.6), _M0FP37Hosi1216syasou2ui1pGsE("ease", "easeInOut")]))];
  const _tmp$6 = _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-stock ticket-stock-bottom"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")], []);
  const _tmp$7 = _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-stock"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")], []);
  const _tmp$8 = _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-stock ticket-stock-top"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")], []);
  const _tmp$9 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-face ticket-front"), _M0FP37Hosi1216syasou2ui1pGbE("aria-hidden", props.back), _M0FP37Hosi1216syasou2ui1pGbE("inert", props.back)];
  const _tmp$10 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-band ticket-band-top")];
  const _tmp$11 = [];
  const _p = "SYASOU RAILWAY";
  const _tmp$12 = _M0FP37Hosi1216syasou2ui4node("span", _tmp$11, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p)]);
  const _tmp$13 = [];
  const _p$2 = welcome ? "FIRST RIDE" : "ONE WAY";
  const _tmp$14 = _M0FP37Hosi1216syasou2ui4node("div", _tmp$10, [_tmp$12, _M0FP37Hosi1216syasou2ui4node("span", _tmp$13, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$2)])]);
  const _tmp$15 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-print")];
  const _tmp$16 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-watermark"), _M0FP37Hosi1216syasou2ui1pGsE("viewBox", "0 0 500 250"), _M0FP37Hosi1216syasou2ui1pGsE("fill", "none"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")];
  const _p$3 = 10;
  let _tmp$17;
  if (_p$3 <= 0) {
    _tmp$17 = [];
  } else {
    const _p$4 = new Array(_p$3);
    let _tmp$18 = 0;
    while (true) {
      const _p$5 = _tmp$18;
      if (_p$5 < _p$3) {
        const _tmp$19 = _M0FP37Hosi1216syasou2ui1pGiE("key", _p$5);
        const _tmp$20 = _M0FP37Hosi1216syasou2ui1pGsE("cx", "250");
        const _tmp$21 = _M0FP37Hosi1216syasou2ui1pGsE("cy", "125");
        const _tmp$22 = _M0FP37Hosi1216syasou2ui1pGiE("rx", 154 + (Math.imul(_p$5, 8) | 0) | 0);
        const _tmp$23 = _M0FP37Hosi1216syasou2ui1pGiE("ry", 44 + (Math.imul(_p$5, 7) | 0) | 0);
        const _p$6 = _M0MPB13StringBuilder21StringBuilder_2einner(16);
        _M0IPB13StringBuilderPB6Logger13write__string(_p$6, "rotate(");
        _M0MPB13StringBuilder13write__objectGiE(_p$6, (_p$5 % 2 | 0) === 1 ? 13 : -13);
        _M0IPB13StringBuilderPB6Logger13write__string(_p$6, " 250 125)");
        _p$4[_p$5] = _M0FP37Hosi1216syasou2ui4node("ellipse", [_tmp$19, _tmp$20, _tmp$21, _tmp$22, _tmp$23, _M0FP37Hosi1216syasou2ui1pGsE("transform", _p$6.val)], []);
        _tmp$18 = _p$5 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _tmp$17 = _p$4;
  }
  const _tmp$18 = _M0FP37Hosi1216syasou2ui4node("svg", _tmp$16, _tmp$17);
  const _tmp$19 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-print-main")];
  const _tmp$20 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-fields")];
  const _tmp$21 = [];
  const _tmp$22 = [];
  const _p$4 = "Class";
  const _tmp$23 = _M0FP37Hosi1216syasou2ui4node("small", _tmp$22, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$4)]);
  const _tmp$24 = [];
  const _p$5 = "1ST";
  const _tmp$25 = _M0FP37Hosi1216syasou2ui4node("div", _tmp$21, [_tmp$23, _M0FP37Hosi1216syasou2ui4node("span", _tmp$24, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$5)])]);
  const _tmp$26 = [];
  const _tmp$27 = [];
  const _p$6 = "Service";
  const _tmp$28 = _M0FP37Hosi1216syasou2ui4node("div", _tmp$20, [_tmp$25, _M0FP37Hosi1216syasou2ui4node("div", _tmp$26, [_M0FP37Hosi1216syasou2ui4node("small", _tmp$27, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$6)]), _M0FP37Hosi1216syasou2ui4node("span", [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-service")], [new _M0DTP37Hosi1216syasou4view7Element4Text(service)])])]);
  const _tmp$29 = [_M0FP37Hosi1216syasou2ui1pGsE("className", _M0FP37Hosi1216syasou2ui15classes_2einner("ticket-task", [{ _0: "ticket-task-long", _1: ticket.title.length > 28 }]))];
  const _bind$5 = props.on_title;
  let _tmp$30;
  if (_bind$5 === undefined) {
    const _tmp$31 = [];
    const _p$7 = ticket.title === "" ? "名前のない旅" : ticket.title;
    _tmp$30 = _M0FP37Hosi1216syasou2ui4node("p", _tmp$31, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$7)]);
  } else {
    const _Some = _bind$5;
    const _change = _Some;
    _tmp$30 = _M0FP37Hosi1216syasou2ui4node("textarea", [_M0FP37Hosi1216syasou2ui1pGiE("rows", 2), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", "切符に残す作業"), _M0FP37Hosi1216syasou2ui1pGsE("value", ticket.title), _M0FP37Hosi1216syasou2ui1pGiE("maxLength", 80), _M0FP37Hosi1216syasou2ui1pGsE("onChange", (e) => {
      _change(_M0MP37Hosi1216syasou2ui7UiEvent5value(e));
    }), _M0FP37Hosi1216syasou2ui1pGsE("placeholder", "この旅で進めたこと"), _M0FP37Hosi1216syasou2ui1pGbE("spellCheck", false)], []);
  }
  const _tmp$31 = _M0FP37Hosi1216syasou2ui4node("div", _tmp$29, [_tmp$30]);
  const _tmp$32 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-journey-line")];
  const _tmp$33 = [];
  const _tmp$34 = [];
  const _p$7 = "Route";
  const _tmp$35 = _M0FP37Hosi1216syasou2ui4node("small", _tmp$34, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$7)]);
  const _tmp$36 = [];
  const _p$8 = welcome ? "YOUR OWN PACE" : route;
  const _tmp$37 = _M0FP37Hosi1216syasou2ui4node("div", _tmp$33, [_tmp$35, _M0FP37Hosi1216syasou2ui4node("span", _tmp$36, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$8)])]);
  const _tmp$38 = [];
  const _tmp$39 = [];
  const _p$9 = "Travelled on";
  const _tmp$40 = _M0FP37Hosi1216syasou2ui4node("div", _tmp$19, [_tmp$28, _tmp$31, _M0FP37Hosi1216syasou2ui4node("div", _tmp$32, [_tmp$37, _M0FP37Hosi1216syasou2ui4node("div", _tmp$38, [_M0FP37Hosi1216syasou2ui4node("small", _tmp$39, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$9)]), _M0FP37Hosi1216syasou2ui4node("span", [], [new _M0DTP37Hosi1216syasou4view7Element4Text(date)])])])]);
  const _tmp$41 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-stub"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")];
  const _tmp$42 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-stub-type")];
  const _p$10 = welcome ? "GIFT" : "SGL";
  const _tmp$43 = _M0FP37Hosi1216syasou2ui4node("div", _tmp$15, [_tmp$18, _tmp$40, _M0FP37Hosi1216syasou2ui4node("div", _tmp$41, [_M0FP37Hosi1216syasou2ui4node("span", _tmp$42, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$10)]), _M0FP37Hosi1216syasou2ui4node("span", [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-stub-mark")], [_M0FP37Hosi1216syasou2ui18rail__mark_2einner(0.8)]), _M0FP37Hosi1216syasou2ui4node("span", [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-barcode")], []), _M0FP37Hosi1216syasou2ui4node("span", [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-serial")], [new _M0DTP37Hosi1216syasou4view7Element4Text(serial)])])]);
  const _tmp$44 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-band ticket-band-bottom")];
  const _tmp$45 = _M0FP37Hosi1216syasou2ui4node("span", [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-roundel")], [_M0FP37Hosi1216syasou2ui18rail__mark_2einner(1.4)]);
  const _tmp$46 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-times")];
  const _p$11 = welcome ? "A SMALL BEGINNING" : `${_M0FP37Hosi1216syasou2ui12ticket__time(ticket.started_at)} — ${_M0FP37Hosi1216syasou2ui12ticket__time(ticket.arrived_at)}`;
  const _tmp$47 = _M0FP37Hosi1216syasou2ui4node("span", _tmp$46, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$11)]);
  const _tmp$48 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-stamp")];
  const _p$12 = welcome ? "WELCOME" : _M0IPC16option6OptionPB2Eq5equalGsE(ticket.kind, _M0FP37Hosi1216syasou2ui12render__cardN6constrS1433) ? "SAMPLE" : "ARRIVED";
  const _tmp$49 = _M0FP37Hosi1216syasou2ui4node("div", _tmp$9, [_tmp$14, _tmp$43, _M0FP37Hosi1216syasou2ui4node("div", _tmp$44, [_tmp$45, _tmp$47, _M0FP37Hosi1216syasou2ui4node("span", _tmp$48, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$12)])]), _M0FP37Hosi1216syasou2ui12render__cardN5sheenS403(props)]);
  const _tmp$50 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-face ticket-back"), _M0FP37Hosi1216syasou2ui1pGbE("aria-hidden", !props.back), _M0FP37Hosi1216syasou2ui1pGbE("inert", !props.back)];
  const _tmp$51 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-back-heading")];
  const _tmp$52 = [];
  const _p$13 = "旅の余白";
  const _tmp$53 = _M0FP37Hosi1216syasou2ui4node("div", _tmp$51, [_M0FP37Hosi1216syasou2ui4node("span", _tmp$52, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$13)]), _M0FP37Hosi1216syasou2ui4node("small", [], [new _M0DTP37Hosi1216syasou4view7Element4Text(date)])]);
  const _bind$6 = props.on_note;
  let _tmp$54;
  if (_bind$6 === undefined) {
    const _tmp$55 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-note")];
    const _p$14 = ticket.note;
    _tmp$54 = _M0FP37Hosi1216syasou2ui4node("p", _tmp$55, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$14)]);
  } else {
    const _Some = _bind$6;
    const _change = _Some;
    _tmp$54 = _M0FP37Hosi1216syasou2ui4node("textarea", [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-note"), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", "切符のメモ"), _M0FP37Hosi1216syasou2ui1pGsE("value", ticket.note), _M0FP37Hosi1216syasou2ui1pGiE("maxLength", 300), _M0FP37Hosi1216syasou2ui1pGsE("onChange", (e) => {
      _change(_M0MP37Hosi1216syasou2ui7UiEvent5value(e));
    }), _M0FP37Hosi1216syasou2ui1pGsE("placeholder", "この旅で考えたこと、残しておきたいこと。"), _M0FP37Hosi1216syasou2ui1pGbE("spellCheck", false)], []);
  }
  const _tmp$55 = _tmp$54;
  const _tmp$56 = _M0FP37Hosi1216syasou2ui4node("span", [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-back-mark")], [_M0FP37Hosi1216syasou2ui18rail__mark_2einner(1.4)]);
  const _tmp$57 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-back-edition"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")];
  const _p$14 = `SYASOU RAILWAY / ${serial}`;
  return _M0FP37Hosi1216syasou2ui4node("div", _tmp, [_M0FP37Hosi1216syasou2ui12motion__node("div", _tmp$5, [_tmp$6, _tmp$7, _tmp$8, _tmp$49, _M0FP37Hosi1216syasou2ui4node("div", _tmp$50, [_tmp$53, _tmp$55, _tmp$56, _M0FP37Hosi1216syasou2ui4node("span", _tmp$57, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$14)]), _M0FP37Hosi1216syasou2ui12render__cardN5sheenS403(props)])])]);
}
function _M0FP37Hosi1216syasou2ui20ticket__card_2einner(ticket, back, rotation, shine_x, shine_opacity, on_title, on_note) {
  return _M0FP37Hosi1216syasou2ui9componentGRP37Hosi1216syasou2ui9SnowPropsE(_M0FP37Hosi1216syasou2ui12render__card, new _M0TP37Hosi1216syasou2ui15TicketCardProps(ticket, back, rotation, shine_x, shine_opacity, on_title, on_note), undefined);
}
function _M0FP37Hosi1216syasou2ui17render__touchableN3endS502(_env, event, complete) {
  const grip = _env._1;
  const release = _env._0;
  const _bind = grip.current;
  if (_bind === undefined) {
    return;
  } else {
    const _Some = _bind;
    const _current = _Some;
    if (_M0MP37Hosi1216syasou2ui7UiEvent7pointer(event) === _current.pointer) {
      release(complete);
      return;
    } else {
      return;
    }
  }
}
function _M0FP37Hosi1216syasou2ui17render__touchable(props) {
  const reduced = _M0FP37Hosi1216syasou2ui10use__media("(prefers-reduced-motion: reduce)");
  const _p = undefined;
  const grip = _M0FP37Hosi1216syasou4view4slot(() => _M0FP37Hosi1216syasou4view8new__refGsE(_p))._0.value;
  const _p$2 = new _M0DTPC16option6OptionGdE4Some(props.back ? 180 : 0);
  const resting = _M0FP37Hosi1216syasou4view4slot(() => _M0FP37Hosi1216syasou4view8new__refGdE(_p$2))._0.value;
  const _bind = _M0FP37Hosi1216syasou4view10use__stateGbE(false);
  const _held = _bind._0;
  const _set_held = _bind._1;
  const _bind$2 = _M0FP37Hosi1216syasou4view10use__stateGbE(props.back);
  const _back = _bind$2._0;
  const _set_back = _bind$2._1;
  const follow = [_M0FP37Hosi1216syasou2ui1pGdE("stiffness", 340), _M0FP37Hosi1216syasou2ui1pGdE("damping", 32), _M0FP37Hosi1216syasou2ui1pGdE("mass", 0.65)];
  const angle = _M0FP37Hosi1216syasou2ui6springGdE(_M0MPC16option6Option6unwrapGdE(resting.current), follow);
  const x = _M0FP37Hosi1216syasou2ui6springGdE(0, follow);
  const y = _M0FP37Hosi1216syasou2ui6springGdE(0, follow);
  const z = _M0FP37Hosi1216syasou2ui6springGdE(0, follow);
  const tilt = _M0FP37Hosi1216syasou2ui6springGdE(0, follow);
  const roll = _M0FP37Hosi1216syasou2ui6springGdE(0, follow);
  const shine_x = _M0FP37Hosi1216syasou2ui6springGdE(0, follow);
  const shine_opacity = _M0FP37Hosi1216syasou2ui6springGdE(0.12, follow);
  const shadow_y = _M0FP37Hosi1216syasou2ui6springGdE(7, follow);
  const shadow_opacity = _M0FP37Hosi1216syasou2ui6springGdE(0.28, follow);
  const shadow_x = _M0FP37Hosi1216syasou2ui14use__transform(x, (v) => v * 0.6);
  const shadow_width = _M0FP37Hosi1216syasou2ui14use__transform(angle, _M0FP37Hosi1216syasou6domain21ticket__shadow__width);
  _M0FP37Hosi1216syasou2ui18use__motion__event(angle, "change", (v) => {
    _M0FP37Hosi1216syasou2ui6updateGbE(_set_back, (current) => _M0FP37Hosi1216syasou6domain16ticket__is__back(v) === current ? current : !current);
  });
  const put_down = _M0FP37Hosi1216syasou4view13use__callbackGWEuE(() => {
    _M0MP37Hosi1216syasou4view11MotionValue3set(x, 0);
    _M0MP37Hosi1216syasou4view11MotionValue3set(y, 0);
    _M0MP37Hosi1216syasou4view11MotionValue3set(z, 0);
    _M0MP37Hosi1216syasou4view11MotionValue3set(tilt, 0);
    _M0MP37Hosi1216syasou4view11MotionValue3set(roll, 0);
    _M0MP37Hosi1216syasou4view11MotionValue3set(shine_x, 0);
    _M0MP37Hosi1216syasou4view11MotionValue3set(shine_opacity, 0.12);
    _M0MP37Hosi1216syasou4view11MotionValue3set(shadow_y, 7);
    _M0MP37Hosi1216syasou4view11MotionValue3set(shadow_opacity, 0.28);
  }, [x, y, z, tilt, roll, shine_x, shine_opacity, shadow_y, shadow_opacity]);
  const _p$3 = props.on_back;
  const release = _M0FP37Hosi1216syasou4view13use__callbackGWEuE((complete) => {
    const _bind$3 = grip.current;
    if (_bind$3 === undefined) {
      return false;
    } else {
      const _Some = _bind$3;
      const _current = _Some;
      const released = _M0FP37Hosi1216syasou6domain15release__ticket(_current.grip, complete);
      _M0MP37Hosi1216syasou4view7ViewRef12set__currentGdE(resting, new _M0DTPC16option6OptionGdE4Some(released.angle));
      _M0MP37Hosi1216syasou4view7ViewRef12set__currentGsE(grip, undefined);
      _set_held(false);
      if (_M0MP37Hosi1216syasou2ui11PointerNode8captured(_current.node, _current.pointer)) {
        _M0MP37Hosi1216syasou2ui11PointerNode7release(_current.node, _current.pointer);
      }
      if (reduced) {
        _M0MP37Hosi1216syasou4view11MotionValue4jump(angle, released.angle);
      } else {
        _M0MP37Hosi1216syasou4view11MotionValue3set(angle, released.angle);
      }
      put_down();
      const _func = props.on_back;
      _func(released.back);
      return true;
    }
  }, [angle, _p$3, put_down, reduced]);
  _M0FP37Hosi1216syasou4view23use__imperative__handleGRP37Hosi1216syasou2ui12TicketHandleE(props.handle, () => new _M0TP37Hosi1216syasou2ui12TicketHandle(() => release(false)), [release]);
  const _p$4 = props.back;
  _M0FP37Hosi1216syasou2ui7observe(() => {
    const _bind$3 = grip.current;
    if (_bind$3 === undefined) {
    } else {
      return undefined;
    }
    const next = _M0FP37Hosi1216syasou6domain22ticket__resting__angle(_M0MPC16option6Option6unwrapGdE(resting.current), props.back);
    _M0MP37Hosi1216syasou4view7ViewRef12set__currentGdE(resting, new _M0DTPC16option6OptionGdE4Some(next));
    if (reduced) {
      _M0MP37Hosi1216syasou4view11MotionValue4jump(angle, next);
      return;
    } else {
      _M0MP37Hosi1216syasou4view11MotionValue3set(angle, next);
      return;
    }
  }, [_p$4, reduced, angle]);
  _M0FP37Hosi1216syasou2ui6effect(() => {
    const cancel = () => {
      release(false);
    };
    const blur = _M0FP37Hosi1216syasou2ui10on__window("blur", cancel);
    const resize = _M0FP37Hosi1216syasou2ui10on__window("resize", cancel);
    const visibility = _M0FP37Hosi1216syasou2ui12on__document("visibilitychange", () => {
      if (_M0FP37Hosi1216syasou2ui6hidden()) {
        cancel();
        return;
      } else {
        return;
      }
    });
    return () => {
      blur();
      resize();
      visibility();
    };
  }, [release]);
  const _p$5 = props.disabled;
  _M0FP37Hosi1216syasou2ui7observe(() => {
    if (props.disabled) {
      release(false);
      return;
    } else {
      return;
    }
  }, [_p$5, release]);
  _M0FP37Hosi1216syasou2ui7observe(() => {
    if (!reduced) {
      return undefined;
    }
    release(false);
    _M0MP37Hosi1216syasou4view11MotionValue4jump(x, 0);
    _M0MP37Hosi1216syasou4view11MotionValue4jump(y, 0);
    _M0MP37Hosi1216syasou4view11MotionValue4jump(z, 0);
    _M0MP37Hosi1216syasou4view11MotionValue4jump(tilt, 0);
    _M0MP37Hosi1216syasou4view11MotionValue4jump(roll, 0);
    _M0MP37Hosi1216syasou4view11MotionValue4jump(shine_x, 0);
    _M0MP37Hosi1216syasou4view11MotionValue4jump(shine_opacity, 0.12);
    _M0MP37Hosi1216syasou4view11MotionValue4jump(shadow_y, 7);
    _M0MP37Hosi1216syasou4view11MotionValue4jump(shadow_opacity, 0.28);
  }, [reduced, release, x, y, z, tilt, roll, shine_x, shine_opacity, shadow_y, shadow_opacity]);
  const down = (event) => {
    _L: {
      _L$2: {
        if (props.disabled) {
          break _L$2;
        } else {
          const _bind$3 = grip.current;
          if (_bind$3 === undefined) {
            if (!_M0MP37Hosi1216syasou2ui7UiEvent7primary(event)) {
              break _L$2;
            } else {
              if (_M0MP37Hosi1216syasou2ui7UiEvent6button(event) !== 0) {
                break _L$2;
              }
            }
          } else {
            break _L$2;
          }
        }
        break _L;
      }
      return undefined;
    }
    if (_M0MP37Hosi1216syasou2ui7UiEvent7closest(event, "textarea, input, button, a, [contenteditable]")) {
      put_down();
      return undefined;
    }
    const node = _M0MP37Hosi1216syasou2ui7UiEvent13pointer__node(event);
    const rect = _M0MP37Hosi1216syasou2ui11PointerNode6bounds(node);
    const next = _M0FP37Hosi1216syasou6domain19begin__ticket__grip(_M0MP37Hosi1216syasou2ui7UiEvent1x(event), _M0MP37Hosi1216syasou2ui7UiEvent1y(event), rect.left, rect.width, rect.height, _M0MPC16option6Option6unwrapGdE(resting.current), props.back);
    _M0MP37Hosi1216syasou4view7ViewRef12set__currentGsE(grip, new _M0TP37Hosi1216syasou2ui11PointerGrip(next, _M0MP37Hosi1216syasou2ui7UiEvent7pointer(event), node));
    _M0MP37Hosi1216syasou2ui11PointerNode7capture(node, _M0MP37Hosi1216syasou2ui7UiEvent7pointer(event));
    _M0MP37Hosi1216syasou2ui7UiEvent7prevent(event);
    _set_held(true);
    const _func = props.on_touch;
    _func();
    if (reduced) {
      return undefined;
    }
    const lifted = _M0FP37Hosi1216syasou6domain12lift__ticket(next, rect.top);
    _M0MP37Hosi1216syasou4view11MotionValue3set(y, lifted.y);
    _M0MP37Hosi1216syasou4view11MotionValue3set(z, lifted.z);
    _M0MP37Hosi1216syasou4view11MotionValue3set(tilt, lifted.tilt);
    _M0MP37Hosi1216syasou4view11MotionValue3set(angle, lifted.angle);
    _M0MP37Hosi1216syasou4view11MotionValue3set(roll, lifted.roll);
    _M0MP37Hosi1216syasou4view11MotionValue3set(shine_opacity, lifted.shine_opacity);
    _M0MP37Hosi1216syasou4view11MotionValue3set(shadow_y, lifted.shadow_y);
    _M0MP37Hosi1216syasou4view11MotionValue3set(shadow_opacity, lifted.shadow_opacity);
  };
  const pointer_move = (event) => {
    const _bind$3 = grip.current;
    if (_bind$3 === undefined) {
    } else {
      const _Some = _bind$3;
      const _current = _Some;
      if (_M0MP37Hosi1216syasou2ui7UiEvent7pointer(event) !== _current.pointer) {
        return undefined;
      }
      const dragged = _M0FP37Hosi1216syasou6domain12drag__ticket(_current.grip, _M0MP37Hosi1216syasou2ui7UiEvent1x(event), _M0MP37Hosi1216syasou2ui7UiEvent1y(event));
      const _tmp = _current.grip;
      _current.grip = new _M0TP37Hosi1216syasou6domain10TicketGrip(_tmp.x, _tmp.y, _tmp.width, _tmp.height, _tmp.base, _tmp.back, dragged.dx, _tmp.edge);
      if (reduced) {
        return undefined;
      }
      _M0MP37Hosi1216syasou4view11MotionValue3set(x, dragged.x);
      _M0MP37Hosi1216syasou4view11MotionValue3set(y, dragged.y);
      _M0MP37Hosi1216syasou4view11MotionValue3set(angle, dragged.angle);
      _M0MP37Hosi1216syasou4view11MotionValue3set(tilt, dragged.tilt);
      _M0MP37Hosi1216syasou4view11MotionValue3set(roll, dragged.roll);
      _M0MP37Hosi1216syasou4view11MotionValue3set(shine_x, dragged.shine_x);
      return undefined;
    }
    let _tmp;
    if (props.disabled) {
      _tmp = true;
    } else {
      let _tmp$2;
      if (reduced) {
        _tmp$2 = true;
      } else {
        let _tmp$3;
        const _p$6 = _M0MP37Hosi1216syasou2ui7UiEvent13pointer__type(event);
        const _p$7 = "mouse";
        if (!(_p$6 === _p$7)) {
          _tmp$3 = true;
        } else {
          _tmp$3 = _M0MP37Hosi1216syasou2ui7UiEvent7buttons(event) !== 0;
        }
        _tmp$2 = _tmp$3;
      }
      _tmp = _tmp$2;
    }
    if (_tmp) {
      return undefined;
    }
    if (_M0MP37Hosi1216syasou2ui7UiEvent7closest(event, "textarea, input, [contenteditable]")) {
      put_down();
      return undefined;
    }
    const rect = _M0MP37Hosi1216syasou2ui11PointerNode6bounds(_M0MP37Hosi1216syasou2ui7UiEvent13pointer__node(event));
    const hovered = _M0FP37Hosi1216syasou6domain13hover__ticket(_M0MP37Hosi1216syasou2ui7UiEvent1x(event), _M0MP37Hosi1216syasou2ui7UiEvent1y(event), rect.left, rect.top, rect.width, rect.height);
    _M0MP37Hosi1216syasou4view11MotionValue3set(tilt, hovered.tilt);
    _M0MP37Hosi1216syasou4view11MotionValue3set(roll, hovered.roll);
    _M0MP37Hosi1216syasou4view11MotionValue3set(z, hovered.z);
    _M0MP37Hosi1216syasou4view11MotionValue3set(shine_x, hovered.shine_x);
    _M0MP37Hosi1216syasou4view11MotionValue3set(shine_opacity, hovered.shine_opacity);
  };
  const _env = { _0: release, _1: grip };
  return _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-handling"), _M0FP37Hosi1216syasou2ui1pGbE("data-held", _held), _M0FP37Hosi1216syasou2ui1pGsE("data-side", _back ? "back" : "front"), _M0FP37Hosi1216syasou2ui1pGsE("onPointerDown", down), _M0FP37Hosi1216syasou2ui1pGsE("onPointerMove", pointer_move), _M0FP37Hosi1216syasou2ui1pGsE("onTouchMove", (event) => {
    const _bind$3 = grip.current;
    if (_bind$3 === undefined) {
      return;
    } else {
      const _Some = _bind$3;
      const _current = _Some;
      if (event.touches.length === 1) {
        const touch = _M0MPC15array5Array2atGRP37Hosi1216syasou4view4SlotE(event.touches, 0);
        if (Math.abs(touch.clientX - _current.grip.x) > Math.abs(touch.clientY - _current.grip.y)) {
          _M0MP36mizchi11js__browser3dom10TouchEvent14preventDefault(event);
          return;
        } else {
          return;
        }
      } else {
        return;
      }
    }
  }), _M0FP37Hosi1216syasou2ui1pGsE("onPointerUp", (e) => {
    _M0FP37Hosi1216syasou2ui17render__touchableN3endS502(_env, e, true);
  }), _M0FP37Hosi1216syasou2ui1pGsE("onPointerCancel", (e) => {
    _M0FP37Hosi1216syasou2ui17render__touchableN3endS502(_env, e, false);
  }), _M0FP37Hosi1216syasou2ui1pGsE("onLostPointerCapture", (e) => {
    _M0FP37Hosi1216syasou2ui17render__touchableN3endS502(_env, e, false);
  }), _M0FP37Hosi1216syasou2ui1pGsE("onPointerLeave", () => {
    const _bind$3 = grip.current;
    if (_bind$3 === undefined) {
      put_down();
      return;
    } else {
      return;
    }
  }), _M0FP37Hosi1216syasou2ui1pGsE("onFocusCapture", (e) => {
    if (_M0MP37Hosi1216syasou2ui7UiEvent7matches(e, "textarea, input")) {
      put_down();
      return;
    } else {
      return;
    }
  }), _M0FP37Hosi1216syasou2ui1pGsE("onDragStart", (e) => {
    if (!_M0MP37Hosi1216syasou2ui7UiEvent7closest(e, "textarea, input, [contenteditable]")) {
      _M0MP37Hosi1216syasou2ui7UiEvent7prevent(e);
      return;
    } else {
      return;
    }
  })], [_M0FP37Hosi1216syasou2ui12motion__node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-ground-shadow"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true"), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("style", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGsE("x", shadow_x), _M0FP37Hosi1216syasou2ui1pGsE("y", shadow_y), _M0FP37Hosi1216syasou2ui1pGsE("scaleX", shadow_width), _M0FP37Hosi1216syasou2ui1pGsE("opacity", shadow_opacity)]))], []), _M0FP37Hosi1216syasou2ui12motion__node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-lift"), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("style", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGsE("x", x), _M0FP37Hosi1216syasou2ui1pGsE("y", y), _M0FP37Hosi1216syasou2ui1pGsE("z", z), _M0FP37Hosi1216syasou2ui1pGsE("rotateX", tilt), _M0FP37Hosi1216syasou2ui1pGsE("rotateZ", roll)]))], [_M0FP37Hosi1216syasou2ui20ticket__card_2einner(props.ticket, _back, angle, shine_x, shine_opacity, (title) => {
    const _func = props.on_edit;
    _func(props.ticket.id, title, undefined);
  }, (note) => {
    const _func = props.on_edit;
    _func(props.ticket.id, undefined, note);
  })])]);
}
function _M0FP37Hosi1216syasou2ui17touchable__ticket(props) {
  return _M0FP37Hosi1216syasou2ui9componentGRP37Hosi1216syasou2ui9SnowPropsE(_M0FP37Hosi1216syasou2ui17render__touchable, props, undefined);
}
function _M0FP37Hosi1216syasou2ui15focus__selector(selector) {
  const _bind = _M0MP36mizchi11js__browser3dom8Document13querySelector(_M0FP36mizchi11js__browser3dom8document(), selector);
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _node = _Some._0;
    _M0FP37Hosi1216syasou2ui5focus(_node);
    return;
  } else {
    return;
  }
}
function _M0FP37Hosi1216syasou2ui12render__trayN6selectS439(_env, next) {
  const _set_back = _env._2;
  const _set_selected = _env._1;
  const props = _env._0;
  _set_back(false);
  _set_selected(_M0MPC15array5Array2atGRP37Hosi1216syasou4view4SlotE(props.tickets, next).id);
}
function _M0FP37Hosi1216syasou2ui12render__tray(props) {
  const _bind = props.arrival;
  let _tmp;
  if (_bind === undefined) {
    _tmp = _M0MPC16option6Option3mapGRP37Hosi1216syasou6domain6TicketsE(_M0MPC15array5Array3getGRP37Hosi1216syasou6domain6TicketE(props.tickets, 0), (t) => t.id);
  } else {
    const _Some = _bind;
    const _id = _Some;
    _tmp = _id;
  }
  const _bind$2 = _M0FP37Hosi1216syasou4view10use__stateGOsE(_tmp);
  const _selected = _bind$2._0;
  const _set_selected = _bind$2._1;
  const _bind$3 = _M0FP37Hosi1216syasou4view10use__stateGbE(false);
  const _back = _bind$3._0;
  const _set_back = _bind$3._1;
  const _bind$4 = _M0FP37Hosi1216syasou4view10use__stateGbE(false);
  const _leaving = _bind$4._0;
  const _set_leaving = _bind$4._1;
  const _bind$5 = _M0FP37Hosi1216syasou4view10use__stateGbE(false);
  const _handled = _bind$5._0;
  const _set_handled = _bind$5._1;
  const _p = undefined;
  const physical = _M0FP37Hosi1216syasou4view4slot(() => _M0FP37Hosi1216syasou4view8new__refGsE(_p))._0.value;
  const _p$2 = _M0DTPC16option6OptionGRP36mizchi11js__browser3dom7ElementE4None__;
  const close_button = _M0FP37Hosi1216syasou4view4slot(() => _M0FP37Hosi1216syasou4view8new__refGRP36mizchi11js__browser3dom7ElementE(_p$2))._0.value;
  const reduced = _M0FP37Hosi1216syasou2ui15reduced__motion();
  const index = new _M0TPB8MutLocalGiE(0);
  const _bind$6 = props.tickets;
  const _bind$7 = _bind$6.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$7) {
      const ticket = _bind$6[i];
      if (_M0IPC16option6OptionPB2Eq5equalGsE(ticket.id, _selected)) {
        index.val = i;
        break;
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const ticket = _M0MPC15array5Array3getGRP37Hosi1216syasou6domain6TicketE(props.tickets, index.val);
  const _bind$8 = props.arrival;
  const arrival = !(_bind$8 === undefined);
  let welcome;
  if (arrival) {
    let _tmp$3;
    if (ticket === undefined) {
      _tmp$3 = false;
    } else {
      const _Some = ticket;
      const _x = _Some;
      const _x$2 = _x.kind;
      if (_x$2 === undefined) {
        _tmp$3 = false;
      } else {
        const _Some$2 = _x$2;
        const _x$3 = _Some$2;
        if (_x$3 === "welcome") {
          _tmp$3 = true;
        } else {
          _tmp$3 = false;
        }
      }
    }
    welcome = _tmp$3;
  } else {
    welcome = false;
  }
  const close = () => {
    if (!_leaving) {
      _L: {
        if (reduced) {
          break _L;
        } else {
          if (ticket === undefined) {
            break _L;
          } else {
            _set_leaving(true);
            return;
          }
        }
      }
      const _func = props.on_close;
      _func();
      return;
    } else {
      return;
    }
  };
  const _env = { _0: props, _1: _set_selected, _2: _set_back };
  const opacity = _leaving ? 0 : 1;
  const _tmp$3 = [_M0FP37Hosi1216syasou2ui1pGbE("open", true), _M0FP37Hosi1216syasou2ui1pGsE("onOpenChange", (open) => {
    if (!open) {
      close();
      return;
    } else {
      return;
    }
  })];
  const _tmp$4 = [];
  const _tmp$5 = _M0FP37Hosi1216syasou2ui7foreign("dialog", "Overlay", [_M0FP37Hosi1216syasou2ui1pGbE("asChild", true)], [_M0FP37Hosi1216syasou2ui12motion__node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-tray-shade"), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("initial", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("opacity", 0)])), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("animate", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("opacity", opacity)])), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("transition", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("duration", reduced ? 0 : 0.3)]))], [])]);
  const _tmp$6 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-tray-dialog"), _M0FP37Hosi1216syasou2ui1pGsE("onEscapeKeyDown", (e) => {
    const _bind$9 = physical.current;
    if (_bind$9 === undefined) {
      return;
    } else {
      const _Some = _bind$9;
      const _handle = _Some;
      const _func = _handle.cancel;
      if (_func()) {
        _M0MP37Hosi1216syasou2ui7UiEvent7prevent(e);
        return;
      } else {
        return;
      }
    }
  }), _M0FP37Hosi1216syasou2ui1pGsE("onOpenAutoFocus", (e) => {
    _M0MP37Hosi1216syasou2ui7UiEvent7prevent(e);
    const _bind$9 = close_button.current;
    if (_bind$9.$tag === 1) {
      const _Some = _bind$9;
      const _button = _Some._0;
      _M0FP37Hosi1216syasou2ui5focus(_button);
      return;
    } else {
      return;
    }
  }), _M0FP37Hosi1216syasou2ui1pGsE("onCloseAutoFocus", (e) => {
    _M0MP37Hosi1216syasou2ui7UiEvent7prevent(e);
    if (arrival && !welcome) {
      _M0FP37Hosi1216syasou2ui9microtask(() => {
        _M0FP37Hosi1216syasou2ui15focus__selector(".notebook-object");
      });
      return;
    } else {
      return;
    }
  })];
  const _tmp$7 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "sr-only")];
  const _p$3 = welcome ? "はじめての切符" : arrival ? "到着の切符" : "集めた切符";
  const _tmp$8 = _M0FP37Hosi1216syasou2ui7foreign("dialog", "Title", _tmp$7, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$3)]);
  const _tmp$9 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "sr-only")];
  const _p$4 = welcome ? "旅のしおりをめくった記念の一枚です。裏返してメモを読み、手帳にしまってみましょう。手帳の右ポケットからまた見返せます。" : arrival ? "旅の記録が切符になりました。作業名や裏面のメモを書き込んで、手帳にしまえます。" : "手帳に残した切符を一枚ずつ見返せます。裏面には旅のメモがあります。";
  const _tmp$10 = _M0FP37Hosi1216syasou2ui7foreign("dialog", "Description", _tmp$9, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$4)]);
  const _tmp$11 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-tray-stage")];
  const _tmp$12 = _M0FP37Hosi1216syasou2ui12motion__node("img", [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-tray-box"), _M0FP37Hosi1216syasou2ui1pGsE("src", "/ticket-tray.png"), _M0FP37Hosi1216syasou2ui1pGsE("alt", ""), _M0FP37Hosi1216syasou2ui1pGbE("draggable", false), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("initial", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("opacity", 0)])), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("animate", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("opacity", opacity)])), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("transition", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("duration", reduced ? 0 : 0.4)]))], []);
  let _tmp$13;
  if (welcome) {
    const _tmp$14 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-welcome-caption"), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("initial", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("opacity", 0)])), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("animate", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("opacity", opacity)])), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("transition", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("duration", reduced ? 0 : 0.3), _M0FP37Hosi1216syasou2ui1pGdE("delay", reduced || _leaving ? 0 : 1.3)]))];
    const _p$5 = "ようこそ、車窓へ。";
    _tmp$13 = _M0FP37Hosi1216syasou2ui12motion__node("p", _tmp$14, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$5)]);
  } else {
    _tmp$13 = _M0DTP37Hosi1216syasou4view7Element5Blank__;
  }
  const _tmp$14 = _tmp$13;
  const _tmp$15 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-tray-well")];
  let _tmp$16;
  if (ticket === undefined) {
    const _tmp$17 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-empty")];
    const _tmp$18 = [];
    const _p$5 = "次の到着が、最初の一枚に。";
    _tmp$16 = _M0FP37Hosi1216syasou2ui4node("div", _tmp$17, [_M0FP37Hosi1216syasou2ui4node("p", _tmp$18, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$5)])]);
  } else {
    const _Some = ticket;
    const _ticket = _Some;
    const older = [];
    let _tmp$17 = index.val + 1 | 0;
    while (true) {
      const i = _tmp$17;
      if (i < props.tickets.length && i < (index.val + 3 | 0)) {
        _M0MPC15array5Array4pushGsE(older, _M0MPC15array5Array2atGRP37Hosi1216syasou4view4SlotE(props.tickets, i));
        _tmp$17 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC15array5Array14rev__in__placeGRP37Hosi1216syasou6domain6TicketE(older);
    const _tmp$18 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-stack-under"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true"), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("animate", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("opacity", opacity)])), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("transition", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("duration", 0.2)]))];
    let _tmp$19;
    let _p$5;
    _L: {
      _L$2: {
        if (older.length === 0) {
          _p$5 = [];
          break _L$2;
        }
        const _p$6 = new Array(older.length);
        const _p$7 = older.length;
        let _tmp$20 = 0;
        while (true) {
          const _p$8 = _tmp$20;
          if (_p$8 < _p$7) {
            const _p$9 = older[_p$8];
            _p$6[_p$8] = _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("key", _p$9.id), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("style", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGsE("transform", _p$8 !== 0 ? "translate(-9px, 14px) rotate(-5deg)" : "translate(12px, 24px) rotate(3deg)")]))], [_M0FP37Hosi1216syasou2ui20ticket__card_2einner(_p$9, false, undefined, undefined, undefined, undefined, undefined)]);
            _tmp$20 = _p$8 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp$19 = _p$6;
        break _L;
      }
      _tmp$19 = _p$5;
    }
    const _tmp$20 = _M0FP37Hosi1216syasou2ui12motion__node("div", _tmp$18, _tmp$19);
    const _tmp$21 = [_M0FP37Hosi1216syasou2ui1pGsE("mode", "wait")];
    const _tmp$22 = _M0FP37Hosi1216syasou2ui1pGsE("key", _ticket.id);
    const _tmp$23 = _M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-on-top");
    let _tmp$24;
    if (reduced) {
      const _p$6 = false;
      _tmp$24 = _p$6;
    } else {
      _tmp$24 = arrival ? _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGsE("x", "-35vw"), _M0FP37Hosi1216syasou2ui1pGsE("y", "-65vh"), _M0FP37Hosi1216syasou2ui1pGdE("rotate", -24), _M0FP37Hosi1216syasou2ui1pGdE("scale", 1.2), _M0FP37Hosi1216syasou2ui1pGdE("opacity", 0)]) : _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("x", 24), _M0FP37Hosi1216syasou2ui1pGdE("y", -8), _M0FP37Hosi1216syasou2ui1pGdE("rotate", 1), _M0FP37Hosi1216syasou2ui1pGdE("opacity", 0)]);
    }
    _tmp$16 = _M0FP37Hosi1216syasou2ui5group([_tmp$20, _M0FP37Hosi1216syasou2ui7foreign("motion", "AnimatePresence", _tmp$21, [_M0FP37Hosi1216syasou2ui12motion__node("div", [_tmp$22, _tmp$23, _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("initial", _tmp$24), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("animate", _leaving ? _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGsE("x", "30vw"), _M0FP37Hosi1216syasou2ui1pGsE("y", "43vh"), _M0FP37Hosi1216syasou2ui1pGdE("rotate", 14), _M0FP37Hosi1216syasou2ui1pGdE("scale", 0.16), _M0FP37Hosi1216syasou2ui1pGdE("opacity", 0)]) : _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("x", 0), _M0FP37Hosi1216syasou2ui1pGdE("y", 0), _M0FP37Hosi1216syasou2ui1pGdE("rotate", -1.4), _M0FP37Hosi1216syasou2ui1pGdE("scale", 1), _M0FP37Hosi1216syasou2ui1pGdE("opacity", 1)])), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("exit", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("x", -24), _M0FP37Hosi1216syasou2ui1pGdE("opacity", 0), _M0FP37Hosi1216syasou2ui1pGdE("rotate", -4)])), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("transition", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("duration", reduced ? 0 : _leaving ? 0.7 : arrival ? 1.25 : 0.18), _M0FP37Hosi1216syasou2ui1pGsE("ease", "easeOut"), _M0FP37Hosi1216syasou2ui1pGdE("delay", arrival && !_leaving ? 0.15 : 0)])), _M0FP37Hosi1216syasou2ui1pGsE("onAnimationComplete", () => {
      if (_leaving) {
        const _func = props.on_close;
        _func();
        return;
      } else {
        return;
      }
    })], [_M0FP37Hosi1216syasou2ui17touchable__ticket(new _M0TP37Hosi1216syasou2ui14TouchableProps(physical, _ticket, _back, _leaving, _set_back, () => {
      _set_handled(true);
    }, props.on_edit))])])]);
  }
  const _tmp$17 = _M0FP37Hosi1216syasou2ui4node("div", _tmp$15, [_tmp$16]);
  const _tmp$18 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-tray-controls"), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("animate", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("opacity", opacity)])), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("transition", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("duration", reduced ? 0 : 0.18)]))];
  const _tmp$19 = _M0FP37Hosi1216syasou2ui4node("button", [_M0FP37Hosi1216syasou2ui1pGsE("className", "tray-close"), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", arrival ? "切符をしまって閉じる" : "切符を閉じる"), _M0FP37Hosi1216syasou2ui1pGsE("onClick", close), _M0FP37Hosi1216syasou2ui1pGbE("disabled", _leaving)], [_M0FP37Hosi1216syasou2ui12icon_2einner("X", 20, 1, false)]);
  let _tmp$20;
  _L: {
    _L$2: {
      if (!arrival) {
        if (ticket === undefined) {
          break _L$2;
        } else {
          _tmp$20 = _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-browse")], [_M0FP37Hosi1216syasou2ui4node("button", [_M0FP37Hosi1216syasou2ui1pGsE("aria-label", "新しい切符を見る"), _M0FP37Hosi1216syasou2ui1pGbE("disabled", index.val === 0 || _leaving), _M0FP37Hosi1216syasou2ui1pGsE("onClick", () => {
            _M0FP37Hosi1216syasou2ui12render__trayN6selectS439(_env, index.val - 1 | 0);
          })], [_M0FP37Hosi1216syasou2ui12icon_2einner("ArrowLeft", 23, 1, false)]), _M0FP37Hosi1216syasou2ui4node("button", [_M0FP37Hosi1216syasou2ui1pGsE("aria-label", "前の切符を見る"), _M0FP37Hosi1216syasou2ui1pGbE("disabled", index.val >= (props.tickets.length - 1 | 0) || _leaving), _M0FP37Hosi1216syasou2ui1pGsE("onClick", () => {
            _M0FP37Hosi1216syasou2ui12render__trayN6selectS439(_env, index.val + 1 | 0);
          })], [_M0FP37Hosi1216syasou2ui12icon_2einner("ArrowRight", 23, 1, false)])]);
        }
      } else {
        break _L$2;
      }
      break _L;
    }
    _tmp$20 = _M0DTP37Hosi1216syasou4view7Element5Blank__;
  }
  const _tmp$21 = _tmp$20;
  const _tmp$22 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-tray-actions")];
  const _tmp$23 = ticket === undefined ? _M0DTP37Hosi1216syasou4view7Element5Blank__ : _M0FP37Hosi1216syasou2ui4node("button", [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-flip"), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", _back ? "切符の表を見る" : "切符の裏を見る"), _M0FP37Hosi1216syasou2ui1pGsE("onClick", () => {
    _set_back(!_back);
    _set_handled(true);
  }), _M0FP37Hosi1216syasou2ui1pGbE("disabled", _leaving), _M0FP37Hosi1216syasou2ui1pGsE("title", _back ? "表へ" : "裏へ")], [_M0FP37Hosi1216syasou2ui12icon_2einner("RotateCcw", 18, 1.1, false)]);
  const _tmp$24 = [_M0FP37Hosi1216syasou2ui1pGsE("ref", close_button), _M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-put-away"), _M0FP37Hosi1216syasou2ui1pGsE("onClick", close), _M0FP37Hosi1216syasou2ui1pGbE("disabled", _leaving)];
  const _p$5 = arrival ? "手帳にしまう" : "手帳に戻る";
  const _tmp$25 = _M0FP37Hosi1216syasou2ui4node("div", _tmp$22, [_tmp$23, _M0FP37Hosi1216syasou2ui4node("button", _tmp$24, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$5), _M0FP37Hosi1216syasou2ui12icon_2einner("ArrowRight", 16, 1, false)])]);
  let _tmp$26;
  if (props.save_error) {
    const _tmp$27 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-save-error"), _M0FP37Hosi1216syasou2ui1pGsE("role", "alert")];
    const _p$6 = "このブラウザに切符を保存できません。ページを閉じると記録が失われます。";
    _tmp$26 = _M0FP37Hosi1216syasou2ui4node("p", _tmp$27, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$6)]);
  } else {
    _tmp$26 = _M0DTP37Hosi1216syasou4view7Element5Blank__;
  }
  const _tmp$27 = _tmp$26;
  let _tmp$28;
  _L$2: {
    _L$3: {
      if (ticket === undefined) {
        break _L$3;
      } else {
        if (!props.save_error) {
          const _tmp$29 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "ticket-handling-hint"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true"), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("animate", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("opacity", _handled || _leaving ? 0 : 1)])), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("transition", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("duration", reduced ? 0 : 0.18)]))];
          const _p$6 = "端をつまんで、左右にめくる";
          _tmp$28 = _M0FP37Hosi1216syasou2ui12motion__node("p", _tmp$29, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$6)]);
        } else {
          break _L$3;
        }
      }
      break _L$2;
    }
    _tmp$28 = _M0DTP37Hosi1216syasou4view7Element5Blank__;
  }
  return _M0FP37Hosi1216syasou2ui7foreign("dialog", "Root", _tmp$3, [_M0FP37Hosi1216syasou2ui7foreign("dialog", "Portal", _tmp$4, [_tmp$5, _M0FP37Hosi1216syasou2ui7foreign("dialog", "Content", _tmp$6, [_tmp$8, _tmp$10, _M0FP37Hosi1216syasou2ui4node("div", _tmp$11, [_tmp$12, _tmp$14, _tmp$17, _M0FP37Hosi1216syasou2ui12motion__node("div", _tmp$18, [_tmp$19, _tmp$21, _tmp$25, _tmp$27, _tmp$28])])])])]);
}
function _M0FP37Hosi1216syasou2ui12ticket__tray(props) {
  return _M0FP37Hosi1216syasou2ui9componentGRP37Hosi1216syasou2ui9SnowPropsE(_M0FP37Hosi1216syasou2ui12render__tray, props, _M0MPC16option6Option10unwrap__orGsE(props.arrival, "archive"));
}
function _M0FP37Hosi1216syasou2ui14clear__timeout(timer) {
  _M0MP36mizchi11js__browser3dom6Window12clearTimeout(_M0FP36mizchi11js__browser3dom6window(), timer);
}
function _M0FP37Hosi1216syasou2ui12storage__key(key) {
  return _M0FP37Hosi1216syasou2ui4demo ? `${key}.demo` : key;
}
function _M0FP37Hosi1216syasou2ui6launch(task) {
  const _func = _M0FP26mizchi8js__core10promisify0GuE((_cont, _err_cont) => task(_cont, _err_cont));
  _func();
}
function _M0FP37Hosi1216syasou2ui16create__renderer(canvas, unavailable) {
  const renderer = _M0FP37Hosi1216syasou6bridge24create__window__renderer(canvas, unavailable);
  return _M0FP26mizchi8js__core11is__nullish(renderer) ? _M0DTPC16option6OptionGRP37Hosi1216syasou2ui14WindowRendererE4None__ : new _M0DTPC16option6OptionGRP37Hosi1216syasou2ui14WindowRendererE4Some(renderer);
}
function _M0FP37Hosi1216syasou2ui17fallback__sceneryN5stripS129(name, path) {
  return _M0FP37Hosi1216syasou2ui4node("svg", [_M0FP37Hosi1216syasou2ui1pGsE("className", name), _M0FP37Hosi1216syasou2ui1pGsE("viewBox", "0 0 2400 900"), _M0FP37Hosi1216syasou2ui1pGsE("preserveAspectRatio", "none")], [_M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", path)], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", path), _M0FP37Hosi1216syasou2ui1pGsE("transform", "translate(1200)")], [])]);
}
function _M0FP37Hosi1216syasou2ui17fallback__scenery() {
  const _tmp = [_M0FP37Hosi1216syasou2ui1pGsE("className", "window-fallback-scene")];
  const _tmp$2 = _M0FP37Hosi1216syasou2ui17fallback__sceneryN5stripS129("fallback-ridge", _M0FP37Hosi1216syasou2ui17fallback__sceneryN5hillsS125);
  const _tmp$3 = _M0FP37Hosi1216syasou2ui17fallback__sceneryN5stripS129("fallback-slope", _M0FP37Hosi1216syasou2ui17fallback__sceneryN6slopesS126);
  const _tmp$4 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "fallback-trees"), _M0FP37Hosi1216syasou2ui1pGsE("viewBox", "0 0 2400 900"), _M0FP37Hosi1216syasou2ui1pGsE("preserveAspectRatio", "none")];
  const _p = [0, 1200];
  const _p$2 = new Array(_p.length);
  const _p$3 = _p.length;
  let _tmp$5 = 0;
  while (true) {
    const _p$4 = _tmp$5;
    if (_p$4 < _p$3) {
      const _p$5 = _p[_p$4];
      const _tmp$6 = _M0FP37Hosi1216syasou2ui1pGiE("key", _p$5);
      const _p$6 = _M0MPB13StringBuilder21StringBuilder_2einner(11);
      _M0IPB13StringBuilderPB6Logger13write__string(_p$6, "translate(");
      _M0MPB13StringBuilder13write__objectGiE(_p$6, _p$5);
      _M0IPB13StringBuilderPB6Logger13write__string(_p$6, ")");
      const _tmp$7 = [_tmp$6, _M0FP37Hosi1216syasou2ui1pGsE("transform", _p$6.val)];
      const _p$7 = [];
      _M0MPC15array5Array4pushGsE(_p$7, _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M0 795 Q160 770 310 800 T610 795 T940 810 T1200 795 V900 H0Z")], []));
      const _p$8 = 16;
      let _tmp$8;
      if (_p$8 <= 0) {
        _tmp$8 = [];
      } else {
        const _p$9 = new Array(_p$8);
        let _tmp$9 = 0;
        while (true) {
          const _p$10 = _tmp$9;
          if (_p$10 < _p$8) {
            const _tmp$10 = _M0FP37Hosi1216syasou2ui1pGiE("key", _p$10);
            const _p$11 = _M0MPB13StringBuilder21StringBuilder_2einner(20);
            _M0IPB13StringBuilderPB6Logger13write__string(_p$11, "translate(");
            _M0MPB13StringBuilder13write__objectGiE(_p$11, (Math.imul(_p$10, 76) | 0) + 10 | 0);
            _M0IPB13StringBuilderPB6Logger13write__string(_p$11, ",");
            _M0MPB13StringBuilder13write__objectGdE(_p$11, 810 + _M0FPC14math3sin((Math.imul(_p$10, 13) | 0) + 0) * 15);
            _M0IPB13StringBuilderPB6Logger13write__string(_p$11, ") scale(");
            _M0MPB13StringBuilder13write__objectGdE(_p$11, 0.55 + (_M0FPC14math3sin((Math.imul(_p$10, 9) | 0) + 0) + 1) * 0.3);
            _M0IPB13StringBuilderPB6Logger13write__string(_p$11, ")");
            _p$9[_p$10] = _M0FP37Hosi1216syasou2ui4node("path", [_tmp$10, _M0FP37Hosi1216syasou2ui1pGsE("transform", _p$11.val), _M0FP37Hosi1216syasou2ui1pGsE("d", "M-4 15 V-65 L-55-60 L-39-89 L-48-87 L-29-124 L-37-119 L-19-155 L-26-152 L0-221 L20-166 L14-169 L33-128 L24-132 L44-93 L34-97 L53-62 L4-66 V15Z")], []);
            _tmp$9 = _p$10 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp$8 = _p$9;
      }
      _M0MPC15array5Array10push__iterGUsRP37Hosi1216syasou2ui13PropertyValueEE(_p$7, _M0MPC15array5Array4iterGUsRP37Hosi1216syasou2ui13PropertyValueEE(_tmp$8));
      _p$2[_p$4] = _M0FP37Hosi1216syasou2ui4node("g", _tmp$7, _p$7);
      _tmp$5 = _p$4 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP37Hosi1216syasou2ui4node("div", _tmp, [_tmp$2, _tmp$3, _M0FP37Hosi1216syasou2ui4node("svg", _tmp$4, _p$2)]);
}
function _M0MP37Hosi1216syasou2ui14WindowRenderer7dispose(self) {
  _M0MP26mizchi8js__core3Any6__call(self, "dispose", []);
}
function _M0MP37Hosi1216syasou2ui14WindowRenderer6update(self, props) {
  _M0MP26mizchi8js__core3Any6__call(self, "update", [props]);
}
function _M0FP37Hosi1216syasou2ui17render__landscape(props) {
  const _p = undefined;
  const canvas = _M0FP37Hosi1216syasou4view4slot(() => _M0FP37Hosi1216syasou4view8new__refGsE(_p))._0.value;
  const _p$2 = _M0DTPC16option6OptionGRP37Hosi1216syasou2ui14WindowRendererE4None__;
  const renderer = _M0FP37Hosi1216syasou4view4slot(() => _M0FP37Hosi1216syasou4view8new__refGRP36mizchi11js__browser3dom7ElementE(_p$2))._0.value;
  const _bind = _M0FP37Hosi1216syasou4view10use__stateGbE(false);
  const _webgl = _bind._0;
  const _set_webgl = _bind._1;
  _M0FP37Hosi1216syasou2ui6effect(() => {
    const _bind$2 = canvas.current;
    if (_bind$2 === undefined) {
    } else {
      const _Some = _bind$2;
      const _canvas = _Some;
      const next = _M0FP37Hosi1216syasou2ui16create__renderer(_canvas, () => {
        _set_webgl(false);
      });
      _M0MP37Hosi1216syasou4view7ViewRef12set__currentGRP37Hosi1216syasou2ui11SoundEngineE(renderer, next);
      let _tmp;
      if (next.$tag === 1) {
        _tmp = true;
      } else {
        _tmp = false;
      }
      _set_webgl(_tmp);
    }
    return () => {
      const _bind$3 = renderer.current;
      if (_bind$3.$tag === 1) {
        const _Some = _bind$3;
        const _value = _Some._0;
        _M0MP37Hosi1216syasou2ui14WindowRenderer7dispose(_value);
      }
      _M0MP37Hosi1216syasou4view7ViewRef12set__currentGRP37Hosi1216syasou2ui11SoundEngineE(renderer, _M0DTPC16option6OptionGRP37Hosi1216syasou2ui14WindowRendererE4None__);
    };
  }, []);
  const _p$3 = props.scene;
  const _p$4 = props.speed;
  const _p$5 = props.moving;
  const _p$6 = props.windowOpen;
  const _p$7 = props.travelling;
  _M0FP37Hosi1216syasou2ui7observe(() => {
    const _bind$2 = renderer.current;
    if (_bind$2.$tag === 1) {
      const _Some = _bind$2;
      const _value = _Some._0;
      _M0MP37Hosi1216syasou2ui14WindowRenderer6update(_value, props);
      return;
    } else {
      return;
    }
  }, [_p$3, _p$4, _p$5, _p$6, _p$7]);
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(23);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "landscape scene-");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder, props.scene);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " speed-");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder, props.speed);
  return _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", _M0FP37Hosi1216syasou2ui15classes_2einner(_string_builder.val, [{ _0: "landscape-paused", _1: !props.moving }, { _0: "window-is-open", _1: props.windowOpen }])), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true"), _M0FP37Hosi1216syasou2ui1pGsE("data-renderer", _webgl ? "webgl" : "css")], [_M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "window-gradient")], []), _webgl ? _M0DTP37Hosi1216syasou4view7Element5Blank__ : _M0FP37Hosi1216syasou2ui17fallback__scenery(), _M0FP37Hosi1216syasou2ui4node("canvas", [_M0FP37Hosi1216syasou2ui1pGsE("ref", canvas), _M0FP37Hosi1216syasou2ui1pGsE("className", "window-canvas")], []), _webgl ? _M0DTP37Hosi1216syasou4view7Element5Blank__ : _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "window-fallback-grain")], []), _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "glass-reflection")], [])]);
}
function _M0FP37Hosi1216syasou2ui9landscape(props) {
  return _M0FP37Hosi1216syasou2ui9componentGRP37Hosi1216syasou2ui9SnowPropsE(_M0FP37Hosi1216syasou2ui17render__landscape, props, undefined);
}
function _M0FP37Hosi1216syasou2ui12set__timeout(callback, delay) {
  return _M0MP36mizchi11js__browser3dom6Window10setTimeout(_M0FP36mizchi11js__browser3dom6window(), callback, delay);
}
function _M0FP37Hosi1216syasou2ui13create__sound() {
  const _bind = _M0FP26mizchi8js__core9try__sync(() => _M0FP37Hosi1216syasou6bridge13create__sound());
  let _tmp;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp = _ok._0;
  } else {
    return _bind;
  }
  return new _M0DTPC16result6ResultGRP37Hosi1216syasou2ui11SoundEngineRPC15error5ErrorE2Ok(_tmp);
}
function _M0MP37Hosi1216syasou2ui11SoundEngine7disable(self) {
  return _M0FP37Hosi1216syasou6bridge14disable__sound(self);
}
function _M0MP37Hosi1216syasou2ui11SoundEngine7dispose(self) {
  _M0FP37Hosi1216syasou6bridge14dispose__sound(self);
}
function _M0MP37Hosi1216syasou2ui11SoundEngine6enable(self) {
  return _M0FP37Hosi1216syasou6bridge13enable__sound(self);
}
function _M0MP37Hosi1216syasou2ui11SoundEngine6update(self, preferences, moving, open) {
  _M0FP37Hosi1216syasou6bridge13update__sound(self, preferences, moving, open);
}
function _M0MP37Hosi1216syasou2ui11SoundEngine15update__checked(self, preferences, moving, open) {
  const _bind = _M0FP26mizchi8js__core9try__sync(() => {
    _M0MP37Hosi1216syasou2ui11SoundEngine6update(self, preferences, moving, open);
    return _M0FP26mizchi8js__core9undefined();
  });
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
}
function _M0FP37Hosi1216syasou2ui10use__soundN16_2aasync__driverS1308(_state) {
  let _tmp = _state;
  _L: while (true) {
    const _state$2 = _tmp;
    switch (_state$2.$tag) {
      case 0: {
        const _$42$defer_try$47$947 = _state$2;
        const _defer = _$42$defer_try$47$947._1;
        const _err = _$42$defer_try$47$947._0;
        _defer();
        return new _M0DTPC16result6ResultGOuRPB9CancelledE3Err(_err);
      }
      case 1: {
        const _State_1 = _state$2;
        const _defer$2 = _State_1._1;
        const _cont_param = _State_1._0;
        _defer$2();
        return new _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(_cont_param);
      }
      case 2: {
        const _$42$try$47$948 = _state$2;
        const _defer$3 = _$42$try$47$948._4;
        const set_error = _$42$try$47$948._3;
        const set_enabled = _$42$try$47$948._2;
        const engine = _$42$try$47$948._1;
        const _try_err = _$42$try$47$948._0;
        if (_try_err.$tag === 0) {
          _tmp = new _M0DTP37Hosi1216syasou2ui68_24Hosi121_2fsyasou_2fui_2euse__sound_2etoggle_2f364_2elambda_2f1305L5State19_2adefer__try_2f947(_try_err, _defer$3);
          continue _L;
        } else {
          set_error("音を再生できませんでした。もう一度お試しください。");
          const _bind = engine.current;
          if (_bind.$tag === 1) {
            const _Some = _bind;
            const _sound = _Some._0;
            _M0MP37Hosi1216syasou2ui11SoundEngine7dispose(_sound);
          }
          _M0MP37Hosi1216syasou4view7ViewRef12set__currentGRP37Hosi1216syasou2ui11SoundEngineE(engine, _M0DTPC16option6OptionGRP37Hosi1216syasou2ui11SoundEngineE4None__);
          _tmp = new _M0DTP37Hosi1216syasou2ui68_24Hosi121_2fsyasou_2fui_2euse__sound_2etoggle_2f364_2elambda_2f1305L5State8State__1(set_enabled(false), _defer$3);
          continue _L;
        }
      }
      default: {
        const _State_3 = _state$2;
        const _defer$4 = _State_3._3;
        const set_enabled$2 = _State_3._2;
        const enabled = _State_3._1;
        _tmp = new _M0DTP37Hosi1216syasou2ui68_24Hosi121_2fsyasou_2fui_2euse__sound_2etoggle_2f364_2elambda_2f1305L5State8State__1(set_enabled$2(!enabled), _defer$4);
        continue _L;
      }
    }
  }
}
function _M0FP37Hosi1216syasou2ui10use__sound(preferences, moving, window_open) {
  const _p = _M0DTPC16option6OptionGRP37Hosi1216syasou2ui11SoundEngineE4None__;
  const engine = _M0FP37Hosi1216syasou4view4slot(() => _M0FP37Hosi1216syasou4view8new__refGRP36mizchi11js__browser3dom7ElementE(_p))._0.value;
  const busy_ref = _M0FP37Hosi1216syasou4view4slot(() => _M0FP37Hosi1216syasou4view8new__refGbE(_M0FP37Hosi1216syasou2ui10use__soundN6constrS1435))._0.value;
  const _bind = _M0FP37Hosi1216syasou4view10use__stateGbE(false);
  const _enabled = _bind._0;
  const _set_enabled = _bind._1;
  const _bind$2 = _M0FP37Hosi1216syasou4view10use__stateGbE(false);
  const _busy = _bind$2._0;
  const _set_busy = _bind$2._1;
  const _bind$3 = _M0FP37Hosi1216syasou4view10use__stateGsE("");
  const _error = _bind$3._0;
  const _set_error = _bind$3._1;
  _M0FP37Hosi1216syasou2ui7observe(() => {
    const _bind$4 = engine.current;
    if (_bind$4.$tag === 1) {
      const _Some = _bind$4;
      const _sound = _Some._0;
      _M0MP37Hosi1216syasou2ui11SoundEngine6update(_sound, preferences, moving, window_open);
      return;
    } else {
      return;
    }
  }, [preferences, moving, window_open]);
  _M0FP37Hosi1216syasou2ui6effect(() => () => {
    const _bind$4 = engine.current;
    if (_bind$4.$tag === 1) {
      const _Some = _bind$4;
      const _sound = _Some._0;
      _M0MP37Hosi1216syasou2ui11SoundEngine7dispose(_sound);
    }
    _M0MP37Hosi1216syasou4view7ViewRef12set__currentGRP37Hosi1216syasou2ui11SoundEngineE(engine, _M0DTPC16option6OptionGRP37Hosi1216syasou2ui11SoundEngineE4None__);
  }, []);
  const toggle = () => {
    if (_M0MPC16option6Option10unwrap__orGbE(busy_ref.current, false)) {
      return undefined;
    }
    _M0MP37Hosi1216syasou4view7ViewRef12set__currentGbE(busy_ref, _M0FP37Hosi1216syasou2ui10use__soundN6constrS1436);
    _set_busy(true);
    _set_error("");
    _M0FP37Hosi1216syasou2ui6launch((_cont, _err_cont) => {
      const _defer = () => {
        _M0MP37Hosi1216syasou4view7ViewRef12set__currentGbE(busy_ref, _M0FP37Hosi1216syasou2ui10use__soundN6constrS1437);
        _set_busy(false);
      };
      const _bind$4 = engine.current;
      let sound;
      if (_bind$4.$tag === 1) {
        const _Some = _bind$4;
        sound = _Some._0;
      } else {
        let sound$2;
        let _err;
        _L: {
          _L$2: {
            const _bind$5 = _M0FP37Hosi1216syasou2ui13create__sound();
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              sound$2 = _ok._0;
            } else {
              const _err$2 = _bind$5;
              _err = _err$2._0;
              break _L$2;
            }
            break _L;
          }
          const _bind$5 = _M0FP37Hosi1216syasou2ui10use__soundN16_2aasync__driverS1308(new _M0DTP37Hosi1216syasou2ui68_24Hosi121_2fsyasou_2fui_2euse__sound_2etoggle_2f364_2elambda_2f1305L5State12_2atry_2f948(_err, engine, _set_enabled, _set_error, _defer));
          let _tmp;
          if (_bind$5.$tag === 1) {
            const _ok = _bind$5;
            _tmp = _ok._0;
          } else {
            return _bind$5;
          }
          return new _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(_tmp);
        }
        _M0MP37Hosi1216syasou4view7ViewRef12set__currentGRP37Hosi1216syasou2ui11SoundEngineE(engine, new _M0DTPC16option6OptionGRP37Hosi1216syasou2ui11SoundEngineE4Some(sound$2));
        sound = sound$2;
      }
      let _err;
      _L: {
        const _bind$5 = _M0MP37Hosi1216syasou2ui11SoundEngine15update__checked(sound, preferences, moving, window_open);
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _ok._0;
        } else {
          const _err$2 = _bind$5;
          _err = _err$2._0;
          break _L;
        }
        if (_enabled) {
          let _err$2;
          _L$2: {
            const _bind$6 = _M0MP26mizchi8js__core7Promise4waitGuE(_M0MP37Hosi1216syasou2ui11SoundEngine7disable(sound), (_cont_param) => {
              let _err$3;
              _L$3: {
                const _bind$7 = _M0FP37Hosi1216syasou2ui10use__soundN16_2aasync__driverS1308(new _M0DTP37Hosi1216syasou2ui68_24Hosi121_2fsyasou_2fui_2euse__sound_2etoggle_2f364_2elambda_2f1305L5State8State__3(_cont_param, _enabled, _set_enabled, _defer));
                let _bind$8;
                if (_bind$7.$tag === 1) {
                  const _ok = _bind$7;
                  _bind$8 = _ok._0;
                } else {
                  const _err$4 = _bind$7;
                  _err$3 = _err$4._0;
                  break _L$3;
                }
                if (_bind$8 === -1) {
                  return;
                } else {
                  const _Some = _bind$8;
                  const _payload = _Some;
                  _cont(_payload);
                  return;
                }
              }
              _err_cont(_err$3);
            }, (_cont_param) => {
              let _err$3;
              _L$3: {
                const _bind$7 = _M0FP37Hosi1216syasou2ui10use__soundN16_2aasync__driverS1308(new _M0DTP37Hosi1216syasou2ui68_24Hosi121_2fsyasou_2fui_2euse__sound_2etoggle_2f364_2elambda_2f1305L5State12_2atry_2f948(_cont_param, engine, _set_enabled, _set_error, _defer));
                let _bind$8;
                if (_bind$7.$tag === 1) {
                  const _ok = _bind$7;
                  _bind$8 = _ok._0;
                } else {
                  const _err$4 = _bind$7;
                  _err$3 = _err$4._0;
                  break _L$3;
                }
                if (_bind$8 === -1) {
                  return;
                } else {
                  const _Some = _bind$8;
                  const _payload = _Some;
                  _cont(_payload);
                  return;
                }
              }
              _err_cont(_err$3);
            });
            let _bind$7;
            if (_bind$6.$tag === 1) {
              const _ok = _bind$6;
              _bind$7 = _ok._0;
            } else {
              const _err$3 = _bind$6;
              _err$2 = _err$3._0;
              break _L$2;
            }
            if (_bind$7 === -1) {
              return new _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(-1);
            } else {
              const _Some = _bind$7;
              const _payload = _Some;
              return _M0FP37Hosi1216syasou2ui10use__soundN16_2aasync__driverS1308(new _M0DTP37Hosi1216syasou2ui68_24Hosi121_2fsyasou_2fui_2euse__sound_2etoggle_2f364_2elambda_2f1305L5State8State__3(_payload, _enabled, _set_enabled, _defer));
            }
          }
          return _M0FP37Hosi1216syasou2ui10use__soundN16_2aasync__driverS1308(new _M0DTP37Hosi1216syasou2ui68_24Hosi121_2fsyasou_2fui_2euse__sound_2etoggle_2f364_2elambda_2f1305L5State12_2atry_2f948(_err$2, engine, _set_enabled, _set_error, _defer));
        } else {
          let _err$2;
          _L$2: {
            const _bind$6 = _M0MP26mizchi8js__core7Promise4waitGuE(_M0MP37Hosi1216syasou2ui11SoundEngine6enable(sound), (_cont_param) => {
              let _err$3;
              _L$3: {
                const _bind$7 = _M0FP37Hosi1216syasou2ui10use__soundN16_2aasync__driverS1308(new _M0DTP37Hosi1216syasou2ui68_24Hosi121_2fsyasou_2fui_2euse__sound_2etoggle_2f364_2elambda_2f1305L5State8State__3(_cont_param, _enabled, _set_enabled, _defer));
                let _bind$8;
                if (_bind$7.$tag === 1) {
                  const _ok = _bind$7;
                  _bind$8 = _ok._0;
                } else {
                  const _err$4 = _bind$7;
                  _err$3 = _err$4._0;
                  break _L$3;
                }
                if (_bind$8 === -1) {
                  return;
                } else {
                  const _Some = _bind$8;
                  const _payload = _Some;
                  _cont(_payload);
                  return;
                }
              }
              _err_cont(_err$3);
            }, (_cont_param) => {
              let _err$3;
              _L$3: {
                const _bind$7 = _M0FP37Hosi1216syasou2ui10use__soundN16_2aasync__driverS1308(new _M0DTP37Hosi1216syasou2ui68_24Hosi121_2fsyasou_2fui_2euse__sound_2etoggle_2f364_2elambda_2f1305L5State12_2atry_2f948(_cont_param, engine, _set_enabled, _set_error, _defer));
                let _bind$8;
                if (_bind$7.$tag === 1) {
                  const _ok = _bind$7;
                  _bind$8 = _ok._0;
                } else {
                  const _err$4 = _bind$7;
                  _err$3 = _err$4._0;
                  break _L$3;
                }
                if (_bind$8 === -1) {
                  return;
                } else {
                  const _Some = _bind$8;
                  const _payload = _Some;
                  _cont(_payload);
                  return;
                }
              }
              _err_cont(_err$3);
            });
            let _bind$7;
            if (_bind$6.$tag === 1) {
              const _ok = _bind$6;
              _bind$7 = _ok._0;
            } else {
              const _err$3 = _bind$6;
              _err$2 = _err$3._0;
              break _L$2;
            }
            if (_bind$7 === -1) {
              return new _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(-1);
            } else {
              const _Some = _bind$7;
              const _payload = _Some;
              return _M0FP37Hosi1216syasou2ui10use__soundN16_2aasync__driverS1308(new _M0DTP37Hosi1216syasou2ui68_24Hosi121_2fsyasou_2fui_2euse__sound_2etoggle_2f364_2elambda_2f1305L5State8State__3(_payload, _enabled, _set_enabled, _defer));
            }
          }
          return _M0FP37Hosi1216syasou2ui10use__soundN16_2aasync__driverS1308(new _M0DTP37Hosi1216syasou2ui68_24Hosi121_2fsyasou_2fui_2euse__sound_2etoggle_2f364_2elambda_2f1305L5State12_2atry_2f948(_err$2, engine, _set_enabled, _set_error, _defer));
        }
      }
      return _M0FP37Hosi1216syasou2ui10use__soundN16_2aasync__driverS1308(new _M0DTP37Hosi1216syasou2ui68_24Hosi121_2fsyasou_2fui_2euse__sound_2etoggle_2f364_2elambda_2f1305L5State12_2atry_2f948(_err, engine, _set_enabled, _set_error, _defer));
    });
  };
  return new _M0TP37Hosi1216syasou2ui9SoundView(_enabled, _busy, _error, toggle);
}
function _M0FP37Hosi1216syasou2ui14all__resourcesN16_2aasync__driverS1359(_state) {
  return new _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(undefined);
}
function _M0FP37Hosi1216syasou2ui14all__resources(resources, _cont, _err_cont) {
  const _bind = _M0MP26mizchi8js__core7Promise4waitGRPB5ArrayGuEE(_M0MP26mizchi8js__core7Promise3allGuE(resources), (_cont_param) => {
    let _err;
    _L: {
      const _bind$2 = _M0FP37Hosi1216syasou2ui14all__resourcesN16_2aasync__driverS1359(new _M0DTP37Hosi1216syasou2ui41_24Hosi121_2fsyasou_2fui_2eall__resourcesL5State8State__0(_cont_param));
      let _bind$3;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _bind$3 = _ok._0;
      } else {
        const _err$2 = _bind$2;
        _err = _err$2._0;
        break _L;
      }
      if (_bind$3 === -1) {
        return;
      } else {
        const _Some = _bind$3;
        const _payload = _Some;
        _cont(_payload);
        return;
      }
    }
    _err_cont(_err);
  }, _err_cont);
  let _tmp;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp = _ok._0;
  } else {
    return _bind;
  }
  const _tmp$2 = _tmp;
  if (_tmp$2.$tag === 1) {
    const _Some = _tmp$2;
    const _payload = _Some._0;
    return _M0FP37Hosi1216syasou2ui14all__resourcesN16_2aasync__driverS1359(new _M0DTP37Hosi1216syasou2ui41_24Hosi121_2fsyasou_2fui_2eall__resourcesL5State8State__0(_payload));
  } else {
    return new _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(-1);
  }
}
function _M0FP37Hosi1216syasou2ui11snow__strip(layer) {
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(16);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "snow-layer snow-");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder, layer);
  const _tmp = [_M0FP37Hosi1216syasou2ui1pGsE("className", _string_builder.val)];
  const _tmp$2 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "snow-strip")];
  const _p = 4;
  let _tmp$3;
  if (_p <= 0) {
    _tmp$3 = [];
  } else {
    const _p$2 = new Array(_p);
    let _tmp$4 = 0;
    while (true) {
      const _p$3 = _tmp$4;
      if (_p$3 < _p) {
        _p$2[_p$3] = _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "snow-tile"), _M0FP37Hosi1216syasou2ui1pGiE("key", _p$3)], []);
        _tmp$4 = _p$3 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _tmp$3 = _p$2;
  }
  return _M0FP37Hosi1216syasou2ui4node("div", _tmp, [_M0FP37Hosi1216syasou2ui4node("div", _tmp$2, _tmp$3)]);
}
function _M0FP37Hosi1216syasou2ui21subscribe__visibility(listener) {
  return _M0FP37Hosi1216syasou2ui12on__document("visibilitychange", listener);
}
function _M0FP37Hosi1216syasou2ui7visible() {
  return !_M0FP37Hosi1216syasou2ui6hidden();
}
function _M0FP37Hosi1216syasou2ui12render__snowN16_2aasync__driverS1373(_state) {
  if (_state.$tag === 0) {
    const _$42$try$47$981 = _state;
    const active = _$42$try$47$981._2;
    const set_status = _$42$try$47$981._1;
    const _try_err = _$42$try$47$981._0;
    if (_try_err.$tag === 0) {
      return new _M0DTPC16result6ResultGOuRPB9CancelledE3Err(_try_err);
    } else {
      return active.val ? new _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(set_status(2)) : new _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(undefined);
    }
  } else {
    const _State_1 = _state;
    const active = _State_1._2;
    const set_status = _State_1._1;
    return active.val ? new _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(set_status(1)) : new _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(undefined);
  }
}
function _M0FP37Hosi1216syasou2ui12render__snow(input) {
  const props = input.landscape;
  const is_visible = _M0FP37Hosi1216syasou4view26use__sync__external__storeGbE(_M0FP37Hosi1216syasou2ui21subscribe__visibility, _M0FP37Hosi1216syasou2ui7visible);
  const _bind = _M0FP37Hosi1216syasou4view10use__stateGiE(0);
  const _attempt = _bind._0;
  const _set_attempt = _bind._1;
  const _bind$2 = _M0FP37Hosi1216syasou4view10use__stateGRP37Hosi1216syasou2ui13ArtworkStatusE(0);
  const _status = _bind$2._0;
  const _set_status = _bind$2._1;
  const _p = input.exterior;
  _M0FP37Hosi1216syasou2ui6effect(() => {
    const active = _M0MPC13ref3Ref3RefGbE(true);
    _set_status(0);
    const sources = ["/scenery/overcast-sky.png", "/scenery/snowfield.png"];
    if (input.exterior) {
      _M0MPC15array5Array4pushGsE(sources, "/scenery/train.png");
    }
    const _p$2 = new Array(sources.length);
    const _p$3 = sources.length;
    let _tmp = 0;
    while (true) {
      const _p$4 = _tmp;
      if (_p$4 < _p$3) {
        const _p$5 = sources[_p$4];
        _p$2[_p$4] = _M0FP37Hosi1216syasou2ui13image__decode(_p$5);
        _tmp = _p$4 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const resources = _p$2;
    _M0FP37Hosi1216syasou2ui6launch((_cont, _err_cont) => {
      let _err;
      _L: {
        const _bind$3 = _M0FP37Hosi1216syasou2ui14all__resources(resources, (_cont_param) => {
          let _err$2;
          _L$2: {
            const _bind$4 = _M0FP37Hosi1216syasou2ui12render__snowN16_2aasync__driverS1373(new _M0DTP37Hosi1216syasou2ui64_24Hosi121_2fsyasou_2fui_2erender__snow_2elambda_2elambda_2f1370L5State8State__1(_cont_param, _set_status, active));
            let _bind$5;
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _bind$5 = _ok._0;
            } else {
              const _err$3 = _bind$4;
              _err$2 = _err$3._0;
              break _L$2;
            }
            if (_bind$5 === -1) {
              return;
            } else {
              const _Some = _bind$5;
              const _payload = _Some;
              _cont(_payload);
              return;
            }
          }
          _err_cont(_err$2);
        }, (_cont_param) => {
          let _err$2;
          _L$2: {
            const _bind$4 = _M0FP37Hosi1216syasou2ui12render__snowN16_2aasync__driverS1373(new _M0DTP37Hosi1216syasou2ui64_24Hosi121_2fsyasou_2fui_2erender__snow_2elambda_2elambda_2f1370L5State12_2atry_2f981(_cont_param, _set_status, active));
            let _bind$5;
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _bind$5 = _ok._0;
            } else {
              const _err$3 = _bind$4;
              _err$2 = _err$3._0;
              break _L$2;
            }
            if (_bind$5 === -1) {
              return;
            } else {
              const _Some = _bind$5;
              const _payload = _Some;
              _cont(_payload);
              return;
            }
          }
          _err_cont(_err$2);
        });
        let _bind$4;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _bind$4 = _ok._0;
        } else {
          const _err$2 = _bind$3;
          _err = _err$2._0;
          break _L;
        }
        if (_bind$4 === -1) {
          return new _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(-1);
        } else {
          const _Some = _bind$4;
          const _payload = _Some;
          return _M0FP37Hosi1216syasou2ui12render__snowN16_2aasync__driverS1373(new _M0DTP37Hosi1216syasou2ui64_24Hosi121_2fsyasou_2fui_2erender__snow_2elambda_2elambda_2f1370L5State8State__1(_payload, _set_status, active));
        }
      }
      return _M0FP37Hosi1216syasou2ui12render__snowN16_2aasync__driverS1373(new _M0DTP37Hosi1216syasou2ui64_24Hosi121_2fsyasou_2fui_2erender__snow_2elambda_2elambda_2f1370L5State12_2atry_2f981(_err, _set_status, active));
    });
    return () => {
      active.val = false;
    };
  }, [_attempt, _p]);
  if (_M0IP37Hosi1216syasou2ui13ArtworkStatusPB2Eq5equal(_status, 2)) {
    const _tmp = _M0FP37Hosi1216syasou2ui9landscape(props);
    const _tmp$2 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "scenery-error"), _M0FP37Hosi1216syasou2ui1pGsE("role", "alert")];
    const _p$2 = "雪原の素材を読み込めませんでした。";
    const _tmp$3 = new _M0DTP37Hosi1216syasou4view7Element4Text(_p$2);
    const _tmp$4 = [_M0FP37Hosi1216syasou2ui1pGsE("onClick", () => {
      _M0FP37Hosi1216syasou2ui6updateGiE(_set_attempt, (value) => value + 1 | 0);
    })];
    const _p$3 = "もう一度読み込む";
    return _M0FP37Hosi1216syasou2ui5group([_tmp, _M0FP37Hosi1216syasou2ui4node("div", _tmp$2, [_tmp$3, _M0FP37Hosi1216syasou2ui4node("button", _tmp$4, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$3)])])]);
  }
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(38);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "landscape snow-landscape scene-");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder, props.scene);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " speed-");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder, props.speed);
  return _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", _M0FP37Hosi1216syasou2ui15classes_2einner(_string_builder.val, [{ _0: "landscape-paused", _1: !props.moving || (!is_visible || _M0IP016_24default__implPB2Eq10not__equalGRP37Hosi1216syasou2ui13ArtworkStatusE(_status, 1)) }, { _0: "snow-exterior", _1: input.exterior }, { _0: "window-is-open", _1: props.windowOpen }])), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true"), _M0FP37Hosi1216syasou2ui1pGsE("data-renderer", "artwork"), _M0FP37Hosi1216syasou2ui1pGbE("data-loaded", _M0IP37Hosi1216syasou2ui13ArtworkStatusPB2Eq5equal(_status, 1))], [_M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "snow-artwork"), _M0FP37Hosi1216syasou2ui1pGbE("data-ready", _M0IP37Hosi1216syasou2ui13ArtworkStatusPB2Eq5equal(_status, 1))], [_M0FP37Hosi1216syasou2ui11snow__strip("sky"), _M0FP37Hosi1216syasou2ui11snow__strip("ground"), input.exterior ? _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "distant-train")], [_M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "train-artwork")], []), _M0FP37Hosi1216syasou2ui4node("span", [_M0FP37Hosi1216syasou2ui1pGsE("className", "train-contact-shadow")], [])]) : _M0DTP37Hosi1216syasou4view7Element5Blank__, _M0FP37Hosi1216syasou2ui11snow__strip("near")]), _M0IP37Hosi1216syasou2ui13ArtworkStatusPB2Eq5equal(_status, 0) ? _M0FP37Hosi1216syasou2ui4node("span", [_M0FP37Hosi1216syasou2ui1pGsE("className", "scenery-loading")], []) : _M0DTP37Hosi1216syasou4view7Element5Blank__, input.exterior ? _M0DTP37Hosi1216syasou4view7Element5Blank__ : _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "glass-reflection")], [])]);
}
function _M0FP37Hosi1216syasou2ui21snow__scenery_2einner(props, exterior) {
  return _M0FP37Hosi1216syasou2ui9componentGRP37Hosi1216syasou2ui9SnowPropsE(_M0FP37Hosi1216syasou2ui12render__snow, new _M0TP37Hosi1216syasou2ui9SnowProps(props, exterior), undefined);
}
function _M0MP37Hosi1216syasou2ui11Preferences12focusMinutes(self) {
  return _M0MP26mizchi8js__core3Any5__get(self, "focusMinutes");
}
function _M0MP37Hosi1216syasou2ui11Preferences10rainVolume(self) {
  return _M0MP26mizchi8js__core3Any5__get(self, "rainVolume");
}
function _M0MP37Hosi1216syasou2ui11Preferences11restMinutes(self) {
  return _M0MP26mizchi8js__core3Any5__get(self, "restMinutes");
}
function _M0MP37Hosi1216syasou2ui11Preferences5scene(self) {
  return _M0MP26mizchi8js__core3Any5__get(self, "scene");
}
function _M0MP37Hosi1216syasou2ui11Preferences8showTime(self) {
  return _M0MP26mizchi8js__core3Any5__get(self, "showTime");
}
function _M0MP37Hosi1216syasou2ui11Preferences5speed(self) {
  return _M0MP26mizchi8js__core3Any5__get(self, "speed");
}
function _M0MP37Hosi1216syasou2ui11Preferences11trainVolume(self) {
  return _M0MP26mizchi8js__core3Any5__get(self, "trainVolume");
}
function _M0MP37Hosi1216syasou2ui11Preferences10windVolume(self) {
  return _M0MP26mizchi8js__core3Any5__get(self, "windVolume");
}
function _M0MP37Hosi1216syasou2ui11Preferences11with__valueGsE(self, key, value) {
  const copy = _M0FP26mizchi8js__core14object__assign(_M0FP26mizchi8js__core11new__object(), self);
  _M0MP26mizchi8js__core3Any5__set(copy, key, value);
  return copy;
}
function _M0MP37Hosi1216syasou2ui11Preferences11with__valueGdE(self, key, value) {
  const copy = _M0FP26mizchi8js__core14object__assign(_M0FP26mizchi8js__core11new__object(), self);
  _M0MP26mizchi8js__core3Any5__set(copy, key, value);
  return copy;
}
function _M0MP37Hosi1216syasou2ui11Preferences11with__valueGbE(self, key, value) {
  const copy = _M0FP26mizchi8js__core14object__assign(_M0FP26mizchi8js__core11new__object(), self);
  _M0MP26mizchi8js__core3Any5__set(copy, key, value);
  return copy;
}
function _M0FP37Hosi1216syasou2ui16render__settingsN8durationS309(_env, label, field, value, choices, untimed) {
  const on_change = _env._1;
  const prefs = _env._0;
  const _p = new Array(choices.length);
  const _p$2 = choices.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = choices[_p$3];
      const _tmp$2 = _M0FP37Hosi1216syasou2ui1pGsE("value", _M0MPC13int3Int18to__string_2einner(_p$4, 10));
      const _tmp$3 = _M0FP37Hosi1216syasou2ui1pGiE("key", _p$4);
      const _p$5 = _M0MPB13StringBuilder21StringBuilder_2einner(3);
      _M0MPB13StringBuilder13write__objectGiE(_p$5, _p$4);
      _M0IPB13StringBuilderPB6Logger13write__string(_p$5, "分");
      const _tmp$4 = [_tmp$2, _tmp$3, _M0FP37Hosi1216syasou2ui1pGsE("aria-label", _p$5.val)];
      const _p$6 = _M0MPC13int3Int18to__string_2einner(_p$4, 10);
      _p[_p$3] = _M0FP37Hosi1216syasou2ui7foreign("toggle", "Item", _tmp$4, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$6)]);
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const items = _p;
  if (untimed) {
    const _tmp$2 = [_M0FP37Hosi1216syasou2ui1pGsE("value", "0"), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", "時間を決めずに")];
    const _p$3 = "∞";
    _M0MPC15array5Array4pushGsE(items, _M0FP37Hosi1216syasou2ui7foreign("toggle", "Item", _tmp$2, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$3)]));
  }
  return _M0FP37Hosi1216syasou2ui7foreign("toggle", "Root", [_M0FP37Hosi1216syasou2ui1pGsE("type", "single"), _M0FP37Hosi1216syasou2ui1pGsE("className", "paper-options"), _M0FP37Hosi1216syasou2ui1pGsE("value", String(value)), _M0FP37Hosi1216syasou2ui1pGsE("onValueChange", (v) => {
    const _p$3 = "";
    if (!(v === _p$3)) {
      on_change(_M0MP37Hosi1216syasou2ui11Preferences11with__valueGdE(prefs, field, _M0FP37Hosi1216syasou2ui13number__value(v)));
      return;
    } else {
      return;
    }
  }), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", label)], items);
}
function _M0FP37Hosi1216syasou2ui16render__settings(props) {
  const prefs = props.preferences;
  const on_change = props.on_change;
  const _env = { _0: prefs, _1: on_change };
  const _tmp = [_M0FP37Hosi1216syasou2ui1pGsE("className", "notebook-settings"), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", "旅の設定")];
  const _tmp$2 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "setting-row")];
  const _tmp$3 = [];
  const _p = "時間";
  const _tmp$4 = _M0FP37Hosi1216syasou2ui4node("div", _tmp$2, [_M0FP37Hosi1216syasou2ui4node("span", _tmp$3, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p)]), _M0FP37Hosi1216syasou2ui16render__settingsN8durationS309(_env, "作業時間", "focusMinutes", _M0MP37Hosi1216syasou2ui11Preferences12focusMinutes(prefs), [15, 25, 45, 60, 90], true)]);
  const _tmp$5 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "setting-row")];
  const _tmp$6 = [];
  const _p$2 = "休憩";
  const _tmp$7 = _M0FP37Hosi1216syasou2ui4node("div", _tmp$5, [_M0FP37Hosi1216syasou2ui4node("span", _tmp$6, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$2)]), _M0FP37Hosi1216syasou2ui16render__settingsN8durationS309(_env, "休憩時間", "restMinutes", _M0MP37Hosi1216syasou2ui11Preferences11restMinutes(prefs), [3, 5, 10, 15], false)]);
  let _tmp$8;
  if (props.active) {
    const _tmp$9 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "next-journey-note")];
    const _p$3 = "時間の変更は次の乗車から";
    _tmp$8 = _M0FP37Hosi1216syasou2ui4node("p", _tmp$9, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$3)]);
  } else {
    _tmp$8 = _M0DTP37Hosi1216syasou4view7Element5Blank__;
  }
  const _tmp$9 = _tmp$8;
  const _tmp$10 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "setting-row")];
  const _tmp$11 = [];
  const _p$3 = "速度";
  const _tmp$12 = _M0FP37Hosi1216syasou2ui4node("span", _tmp$11, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$3)]);
  const _tmp$13 = [_M0FP37Hosi1216syasou2ui1pGsE("type", "single"), _M0FP37Hosi1216syasou2ui1pGsE("className", "paper-options speed-options"), _M0FP37Hosi1216syasou2ui1pGsE("value", _M0MP37Hosi1216syasou2ui11Preferences5speed(prefs)), _M0FP37Hosi1216syasou2ui1pGsE("onValueChange", (v) => {
    const _p$4 = "";
    if (!(v === _p$4)) {
      on_change(_M0MP37Hosi1216syasou2ui11Preferences11with__valueGsE(prefs, "speed", v));
      return;
    } else {
      return;
    }
  }), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", "列車の速さ")];
  const _tmp$14 = [_M0FP37Hosi1216syasou2ui1pGsE("value", "local")];
  const _p$4 = "各駅";
  const _tmp$15 = _M0FP37Hosi1216syasou2ui7foreign("toggle", "Item", _tmp$14, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$4)]);
  const _tmp$16 = [_M0FP37Hosi1216syasou2ui1pGsE("value", "rapid")];
  const _p$5 = "準急";
  const _tmp$17 = _M0FP37Hosi1216syasou2ui7foreign("toggle", "Item", _tmp$16, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$5)]);
  const _tmp$18 = [_M0FP37Hosi1216syasou2ui1pGsE("value", "express")];
  const _p$6 = "特急";
  const _tmp$19 = _M0FP37Hosi1216syasou2ui4node("div", _tmp$10, [_tmp$12, _M0FP37Hosi1216syasou2ui7foreign("toggle", "Root", _tmp$13, [_tmp$15, _tmp$17, _M0FP37Hosi1216syasou2ui7foreign("toggle", "Item", _tmp$18, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$6)])])]);
  const _tmp$20 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "setting-row")];
  const _tmp$21 = [];
  const _p$7 = "光";
  const _tmp$22 = _M0FP37Hosi1216syasou2ui4node("div", _tmp$20, [_M0FP37Hosi1216syasou2ui4node("span", _tmp$21, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$7)]), _M0FP37Hosi1216syasou2ui7foreign("toggle", "Root", [_M0FP37Hosi1216syasou2ui1pGsE("type", "single"), _M0FP37Hosi1216syasou2ui1pGsE("className", "paper-options scene-options"), _M0FP37Hosi1216syasou2ui1pGsE("value", _M0MP37Hosi1216syasou2ui11Preferences5scene(prefs)), _M0FP37Hosi1216syasou2ui1pGsE("onValueChange", (v) => {
    const _p$8 = "";
    if (!(v === _p$8)) {
      on_change(_M0MP37Hosi1216syasou2ui11Preferences11with__valueGsE(prefs, "scene", v));
      return;
    } else {
      return;
    }
  }), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", "車窓の景色")], [_M0FP37Hosi1216syasou2ui7foreign("toggle", "Item", [_M0FP37Hosi1216syasou2ui1pGsE("value", "mist"), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", "霧")], [_M0FP37Hosi1216syasou2ui12icon_2einner("CloudFog", 19, 1.2, false)]), _M0FP37Hosi1216syasou2ui7foreign("toggle", "Item", [_M0FP37Hosi1216syasou2ui1pGsE("value", "dawn"), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", "朝")], [_M0FP37Hosi1216syasou2ui12icon_2einner("Sun", 19, 1.2, false)]), _M0FP37Hosi1216syasou2ui7foreign("toggle", "Item", [_M0FP37Hosi1216syasou2ui1pGsE("value", "night"), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", "夜")], [_M0FP37Hosi1216syasou2ui12icon_2einner("Moon", 19, 1.2, false)])])]);
  const _tmp$23 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "paper-sound-controls")];
  const _p$8 = [{ _0: "trainVolume", _1: "列車の走行音", _2: "TrainFront", _3: _M0MP37Hosi1216syasou2ui11Preferences11trainVolume(prefs) }, { _0: "rainVolume", _1: "雨の音", _2: "CloudRain", _3: _M0MP37Hosi1216syasou2ui11Preferences10rainVolume(prefs) }, { _0: "windVolume", _1: "風の音", _2: "Wind", _3: _M0MP37Hosi1216syasou2ui11Preferences10windVolume(prefs) }];
  const _p$9 = new Array(_p$8.length);
  const _p$10 = _p$8.length;
  let _tmp$24 = 0;
  while (true) {
    const _p$11 = _tmp$24;
    if (_p$11 < _p$10) {
      const _p$12 = _p$8[_p$11];
      const _p$13 = _p$12._0;
      const _p$14 = _p$12._1;
      const _p$15 = _p$12._2;
      const _p$16 = _p$12._3;
      _p$9[_p$11] = _M0FP37Hosi1216syasou2ui4node("label", [_M0FP37Hosi1216syasou2ui1pGsE("key", _p$13), _M0FP37Hosi1216syasou2ui1pGsE("className", "paper-volume")], [_M0FP37Hosi1216syasou2ui12icon_2einner(_p$15, 17, 1.2, true), _M0FP37Hosi1216syasou2ui4node("input", [_M0FP37Hosi1216syasou2ui1pGsE("aria-label", _p$14), _M0FP37Hosi1216syasou2ui1pGsE("type", "range"), _M0FP37Hosi1216syasou2ui1pGsE("min", "0"), _M0FP37Hosi1216syasou2ui1pGsE("max", "100"), _M0FP37Hosi1216syasou2ui1pGdE("value", _p$16), _M0FP37Hosi1216syasou2ui1pGsE("onChange", (_p$17) => {
        on_change(_M0MP37Hosi1216syasou2ui11Preferences11with__valueGdE(prefs, _p$13, _M0MP37Hosi1216syasou2ui7UiEvent6number(_p$17)));
      })], [])]);
      _tmp$24 = _p$11 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp$25 = _M0FP37Hosi1216syasou2ui4node("div", _tmp$23, _p$9);
  const _tmp$26 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "clock-setting"), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", "残り時間を表示する"), _M0FP37Hosi1216syasou2ui1pGbE("aria-pressed", _M0MP37Hosi1216syasou2ui11Preferences8showTime(prefs)), _M0FP37Hosi1216syasou2ui1pGsE("onClick", () => {
    on_change(_M0MP37Hosi1216syasou2ui11Preferences11with__valueGbE(prefs, "showTime", !_M0MP37Hosi1216syasou2ui11Preferences8showTime(prefs)));
  })];
  const _tmp$27 = _M0FP37Hosi1216syasou2ui12icon_2einner(_M0MP37Hosi1216syasou2ui11Preferences8showTime(prefs) ? "Eye" : "EyeOff", 17, 1.2, false);
  const _tmp$28 = [];
  const _p$11 = "時計";
  return _M0FP37Hosi1216syasou2ui4node("div", _tmp, [_tmp$4, _tmp$7, _tmp$9, _tmp$19, _tmp$22, _tmp$25, _M0FP37Hosi1216syasou2ui4node("button", _tmp$26, [_tmp$27, _M0FP37Hosi1216syasou2ui4node("span", _tmp$28, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$11)])])]);
}
function _M0FP37Hosi1216syasou2ui8settings(preferences, on_change, active) {
  return _M0FP37Hosi1216syasou2ui9componentGRP37Hosi1216syasou2ui9SnowPropsE(_M0FP37Hosi1216syasou2ui16render__settings, new _M0TP37Hosi1216syasou2ui13SettingsProps(preferences, on_change, active), undefined);
}
function _M0FP37Hosi1216syasou2ui3now() {
  return Date.now();
}
function _M0FP37Hosi1216syasou2ui4uuid() {
  return _M0MP36mizchi7js__web6crypto6Crypto10randomUUID(_M0MP36mizchi7js__web6crypto6Crypto3get());
}
function _M0FP37Hosi1216syasou2ui13set__interval(callback, delay) {
  return _M0MP36mizchi11js__browser3dom6Window11setInterval(_M0FP36mizchi11js__browser3dom6window(), callback, delay);
}
function _M0FP37Hosi1216syasou2ui15clear__interval(timer) {
  _M0MP36mizchi11js__browser3dom6Window13clearInterval(_M0FP36mizchi11js__browser3dom6window(), timer);
}
function _M0FP37Hosi1216syasou2ui5frame(callback) {
  _M0MP36mizchi11js__browser3dom6Window21requestAnimationFrame(_M0FP36mizchi11js__browser3dom6window(), (_discard_) => {
    callback();
  });
}
function _M0FP37Hosi1216syasou2ui13printed__date() {
  const date = _M0MP36mizchi11js__builtin4date4Date3new();
  const year = _M0MPC13int3Int18to__string_2einner(_M0MP36mizchi11js__builtin4date4Date15get__full__year(date), 10);
  const _tmp = year.substring(year.length - 2 | 0, year.length);
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(2);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " ");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, _M0MP36mizchi11js__builtin4date4Date10get__month(date) + 1 | 0);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "/");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, _M0MP36mizchi11js__builtin4date4Date9get__date(date));
  return `'${_tmp}${_string_builder.val}`;
}
function _M0FP37Hosi1216syasou2ui12format__time(milliseconds) {
  return _M0FP37Hosi1216syasou6domain12format__time(milliseconds);
}
function _M0FP37Hosi1216syasou2ui14guide__drawing(step) {
  const children = step === 0 ? [_M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M20 18l54 5 53-5v53l-53 5-54-5V18ZM74 24v51M26 26l41 4M26 36l33 3M26 45l26 3M82 31l34-3M82 40l28-3")], []), _M0FP37Hosi1216syasou2ui4node("circle", [_M0FP37Hosi1216syasou2ui1pGsE("cx", "109"), _M0FP37Hosi1216syasou2ui1pGsE("cy", "61"), _M0FP37Hosi1216syasou2ui1pGsE("r", "14"), _M0FP37Hosi1216syasou2ui1pGsE("fill", "#e5e5e5")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M106 54l9 7-9 6V54Z")], [])] : step === 1 ? [_M0FP37Hosi1216syasou2ui4node("rect", [_M0FP37Hosi1216syasou2ui1pGsE("x", "16"), _M0FP37Hosi1216syasou2ui1pGsE("y", "12"), _M0FP37Hosi1216syasou2ui1pGsE("width", "117"), _M0FP37Hosi1216syasou2ui1pGsE("height", "61"), _M0FP37Hosi1216syasou2ui1pGsE("rx", "13")], []), _M0FP37Hosi1216syasou2ui4node("rect", [_M0FP37Hosi1216syasou2ui1pGsE("x", "21"), _M0FP37Hosi1216syasou2ui1pGsE("y", "17"), _M0FP37Hosi1216syasou2ui1pGsE("width", "107"), _M0FP37Hosi1216syasou2ui1pGsE("height", "50"), _M0FP37Hosi1216syasou2ui1pGsE("rx", "9")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M23 52l23-13 20 9 26-19 34 17M23 61l36-10 31 11 36-9M44 80h62")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M96 7h23m-7-4 7 4-7 4"), _M0FP37Hosi1216syasou2ui1pGsE("strokeWidth", ".8")], [])] : [_M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M30 29l-2-14 93-8 5 51-19 2")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M26 31l96 6-3 41-96-6 3-41Z"), _M0FP37Hosi1216syasou2ui1pGsE("fill", "#ddd")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M30 46l86 5M27 58l87 5M79 50l22 1")], []), _M0FP37Hosi1216syasou2ui4node("rect", [_M0FP37Hosi1216syasou2ui1pGsE("x", "39"), _M0FP37Hosi1216syasou2ui1pGsE("y", "14"), _M0FP37Hosi1216syasou2ui1pGsE("width", "63"), _M0FP37Hosi1216syasou2ui1pGsE("height", "44"), _M0FP37Hosi1216syasou2ui1pGsE("rx", "3"), _M0FP37Hosi1216syasou2ui1pGsE("transform", "rotate(5 39 14)"), _M0FP37Hosi1216syasou2ui1pGsE("fill", "#e7e7e7")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M40 27l60 5M39 48l60 5M53 37l30 3M25 60l49-2 41 8")], []), _M0FP37Hosi1216syasou2ui4node("circle", [_M0FP37Hosi1216syasou2ui1pGsE("cx", "46"), _M0FP37Hosi1216syasou2ui1pGsE("cy", "52"), _M0FP37Hosi1216syasou2ui1pGsE("r", "2")], [])];
  return _M0FP37Hosi1216syasou2ui4node("svg", [_M0FP37Hosi1216syasou2ui1pGsE("viewBox", "0 0 150 85"), _M0FP37Hosi1216syasou2ui1pGsE("fill", "none"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true"), _M0FP37Hosi1216syasou2ui1pGsE("stroke", "currentColor"), _M0FP37Hosi1216syasou2ui1pGsE("strokeWidth", "1.1"), _M0FP37Hosi1216syasou2ui1pGsE("strokeLinecap", "round"), _M0FP37Hosi1216syasou2ui1pGsE("strokeLinejoin", "round")], children);
}
function _M0FP37Hosi1216syasou2ui13render__guide(props) {
  const _p = _M0DTPC16option6OptionGRP36mizchi11js__browser3dom7ElementE4None__;
  const primary = _M0FP37Hosi1216syasou4view4slot(() => _M0FP37Hosi1216syasou4view8new__refGRP36mizchi11js__browser3dom7ElementE(_p))._0.value;
  const receiving = _M0FP37Hosi1216syasou4view4slot(() => _M0FP37Hosi1216syasou4view8new__refGbE(_M0FP37Hosi1216syasou2ui13render__guideN6constrS1438))._0.value;
  const reduced = _M0FP37Hosi1216syasou2ui15reduced__motion();
  const _p$2 = props.step;
  const _bind = _p$2 >>> 0 < _M0FP37Hosi1216syasou2ui12guide__steps.length ? _M0FP37Hosi1216syasou2ui12guide__steps[_p$2] : $oob();
  const _title = _bind._0;
  const _description = _bind._1;
  const finish = () => {
    _M0MP37Hosi1216syasou4view7ViewRef12set__currentGbE(receiving, _M0FP37Hosi1216syasou2ui13render__guideN6constrS1439);
    const _func = props.on_finish;
    _func();
  };
  const _tmp = [_M0FP37Hosi1216syasou2ui1pGbE("open", true), _M0FP37Hosi1216syasou2ui1pGsE("onOpenChange", (open) => {
    if (!open) {
      const _func = props.on_skip;
      _func();
      return;
    } else {
      return;
    }
  })];
  const _tmp$2 = [];
  const _tmp$3 = _M0FP37Hosi1216syasou2ui7foreign("dialog", "Overlay", [_M0FP37Hosi1216syasou2ui1pGsE("className", _M0FP37Hosi1216syasou2ui15classes_2einner("guide-shade", [{ _0: "guide-shade-window", _1: props.step === 1 }]))], []);
  const _tmp$4 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "guide-position"), _M0FP37Hosi1216syasou2ui1pGsE("onOpenAutoFocus", (event) => {
    _M0MP37Hosi1216syasou2ui7UiEvent7prevent(event);
    const _bind$2 = primary.current;
    if (_bind$2.$tag === 1) {
      const _Some = _bind$2;
      const _value = _Some._0;
      _M0FP37Hosi1216syasou2ui5focus(_value);
      return;
    } else {
      return;
    }
  }), _M0FP37Hosi1216syasou2ui1pGsE("onCloseAutoFocus", (event) => {
    _M0MP37Hosi1216syasou2ui7UiEvent7prevent(event);
    if (!_M0MPC16option6Option10unwrap__orGbE(receiving.current, false)) {
      _M0FP37Hosi1216syasou2ui9microtask(() => {
        _M0FP37Hosi1216syasou2ui15focus__selector(".notebook-object");
      });
      return;
    } else {
      return;
    }
  })];
  const _tmp$5 = _M0FP37Hosi1216syasou2ui1pGsE("className", "guide-paper");
  let _tmp$6;
  if (reduced) {
    const _p$3 = false;
    _tmp$6 = _p$3;
  } else {
    _tmp$6 = _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("opacity", 0), _M0FP37Hosi1216syasou2ui1pGdE("y", 14), _M0FP37Hosi1216syasou2ui1pGdE("rotate", 0)]);
  }
  const _tmp$7 = [_tmp$5, _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("initial", _tmp$6), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("animate", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("opacity", 1), _M0FP37Hosi1216syasou2ui1pGdE("y", 0), _M0FP37Hosi1216syasou2ui1pGdE("rotate", -1.2)])), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("transition", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("duration", 0.18), _M0FP37Hosi1216syasou2ui1pGsE("ease", "easeOut")]))];
  const _tmp$8 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "guide-topline")];
  const _tmp$9 = [];
  const _p$3 = "旅のしおり";
  const _tmp$10 = _M0FP37Hosi1216syasou2ui7foreign("dialog", "Title", _tmp$9, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$3)]);
  const _tmp$11 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "guide-skip")];
  const _p$4 = "スキップ";
  const _tmp$12 = _M0FP37Hosi1216syasou2ui4node("div", _tmp$8, [_tmp$10, _M0FP37Hosi1216syasou2ui7foreign("dialog", "Close", _tmp$11, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$4)])]);
  const _tmp$13 = _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "guide-drawing")], [_M0FP37Hosi1216syasou2ui14guide__drawing(props.step)]);
  const _tmp$14 = _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("aria-live", "polite"), _M0FP37Hosi1216syasou2ui1pGsE("aria-atomic", "true")], [_M0FP37Hosi1216syasou2ui4node("h2", [_M0FP37Hosi1216syasou2ui1pGsE("className", "guide-title")], [new _M0DTP37Hosi1216syasou4view7Element4Text(_title)]), _M0FP37Hosi1216syasou2ui7foreign("dialog", "Description", [_M0FP37Hosi1216syasou2ui1pGsE("className", "guide-description")], [new _M0DTP37Hosi1216syasou4view7Element4Text(_description)])]);
  const _tmp$15 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "guide-footer")];
  const _tmp$16 = _M0FP37Hosi1216syasou2ui1pGsE("className", "guide-stops");
  const _tmp$17 = _M0FP37Hosi1216syasou2ui1pGsE("role", "img");
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(11);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "案内 ");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, props.step + 1 | 0);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " / 3");
  const _tmp$18 = [_tmp$16, _tmp$17, _M0FP37Hosi1216syasou2ui1pGsE("aria-label", _string_builder.val)];
  const _p$5 = 3;
  let _tmp$19;
  if (_p$5 <= 0) {
    _tmp$19 = [];
  } else {
    const _p$6 = new Array(_p$5);
    let _tmp$20 = 0;
    while (true) {
      const _p$7 = _tmp$20;
      if (_p$7 < _p$5) {
        _p$6[_p$7] = _M0FP37Hosi1216syasou2ui4node("span", [_M0FP37Hosi1216syasou2ui1pGiE("key", _p$7), _M0FP37Hosi1216syasou2ui1pGsE("className", _M0FP37Hosi1216syasou2ui15classes_2einner("", [{ _0: "guide-stop-visited", _1: _p$7 <= props.step }, { _0: "guide-stop-current", _1: _p$7 === props.step }]))], []);
        _tmp$20 = _p$7 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _tmp$19 = _p$6;
  }
  const _tmp$20 = _M0FP37Hosi1216syasou2ui4node("div", _tmp$18, _tmp$19);
  const _tmp$21 = props.step > 0 ? _M0FP37Hosi1216syasou2ui4node("button", [_M0FP37Hosi1216syasou2ui1pGsE("className", "guide-back"), _M0FP37Hosi1216syasou2ui1pGsE("onClick", () => {
    const _func = props.on_step;
    _func(props.step - 1 | 0);
  }), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", "前の案内へ")], [_M0FP37Hosi1216syasou2ui12icon_2einner("ArrowLeft", 17, 1, false)]) : _M0DTP37Hosi1216syasou4view7Element5Blank__;
  const _tmp$22 = [_M0FP37Hosi1216syasou2ui1pGsE("ref", primary), _M0FP37Hosi1216syasou2ui1pGsE("className", "guide-next"), _M0FP37Hosi1216syasou2ui1pGsE("onClick", props.step === 2 ? finish : () => {
    const _func = props.on_step;
    _func(props.step + 1 | 0);
  })];
  const _p$6 = props.step === 2 ? "切符を受け取る" : "次へ";
  return _M0FP37Hosi1216syasou2ui7foreign("dialog", "Root", _tmp, [_M0FP37Hosi1216syasou2ui7foreign("dialog", "Portal", _tmp$2, [_tmp$3, _M0FP37Hosi1216syasou2ui7foreign("dialog", "Content", _tmp$4, [_M0FP37Hosi1216syasou2ui12motion__node("div", _tmp$7, [_tmp$12, _tmp$13, _tmp$14, _M0FP37Hosi1216syasou2ui4node("div", _tmp$15, [_tmp$20, _tmp$21, _M0FP37Hosi1216syasou2ui4node("button", _tmp$22, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$6), _M0FP37Hosi1216syasou2ui12icon_2einner("ArrowRight", 17, 1, false)])])])])])]);
}
function _M0FP37Hosi1216syasou2ui10onboarding(props) {
  return _M0FP37Hosi1216syasou2ui9componentGRP37Hosi1216syasou2ui9SnowPropsE(_M0FP37Hosi1216syasou2ui13render__guide, props, undefined);
}
function _M0FP37Hosi1216syasou2ui10route__map() {
  return _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "route-map"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")], [_M0FP37Hosi1216syasou2ui4node("svg", [_M0FP37Hosi1216syasou2ui1pGsE("viewBox", "0 0 380 510"), _M0FP37Hosi1216syasou2ui1pGsE("fill", "none"), _M0FP37Hosi1216syasou2ui1pGsE("preserveAspectRatio", "none")], [_M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M-10 441 59 419 185 407 204 371 236 356 235 250 285 175 344 78 398 28"), _M0FP37Hosi1216syasou2ui1pGsE("stroke", "#f8f8f8"), _M0FP37Hosi1216syasou2ui1pGsE("strokeWidth", "9"), _M0FP37Hosi1216syasou2ui1pGsE("strokeLinejoin", "round")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M223-5 250 62 239 163 235 250M236 356 278 453 210 518M344 78 356 140 401 164M-5 242 60 235 118 200 174 211 236 250"), _M0FP37Hosi1216syasou2ui1pGsE("stroke", "#eeeeee"), _M0FP37Hosi1216syasou2ui1pGsE("strokeWidth", "1.6")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M96-5 117 89 173 137 160 222 185 285 151 332 185 407M284 175 347 214 320 285 383 367M15 110 87 128 117 89M60 235 23 330 40 401M278 453 367 426"), _M0FP37Hosi1216syasou2ui1pGsE("stroke", "#bcbcbc"), _M0FP37Hosi1216syasou2ui1pGsE("strokeWidth", ".7"), _M0FP37Hosi1216syasou2ui1pGsE("opacity", ".5")], []), _M0FP37Hosi1216syasou2ui4node("circle", [_M0FP37Hosi1216syasou2ui1pGsE("cx", "185"), _M0FP37Hosi1216syasou2ui1pGsE("cy", "407"), _M0FP37Hosi1216syasou2ui1pGsE("r", "3.5"), _M0FP37Hosi1216syasou2ui1pGsE("stroke", "#a3a3a3"), _M0FP37Hosi1216syasou2ui1pGsE("strokeWidth", "1.2")], []), _M0FP37Hosi1216syasou2ui4node("circle", [_M0FP37Hosi1216syasou2ui1pGsE("cx", "235"), _M0FP37Hosi1216syasou2ui1pGsE("cy", "250"), _M0FP37Hosi1216syasou2ui1pGsE("r", "3.5"), _M0FP37Hosi1216syasou2ui1pGsE("stroke", "#a3a3a3"), _M0FP37Hosi1216syasou2ui1pGsE("strokeWidth", "1.2")], [])])]);
}
function _M0FP37Hosi1216syasou2ui16render__notebook(props) {
  const _bind = _M0FP37Hosi1216syasou4view10use__stateGbE(false);
  const _show_settings = _bind._0;
  const _set_settings = _bind._1;
  const reduced = _M0FP37Hosi1216syasou2ui15reduced__motion();
  const compact = _M0FP37Hosi1216syasou2ui10use__media(_M0FP37Hosi1216syasou2ui15compact__layout);
  const travel = props.travel;
  const journey = travel.journey;
  const preferences = travel.preferences;
  const active = _M0IP37Hosi1216syasou6domain5PhasePB2Eq5equal(journey.phase, 1) || _M0IP37Hosi1216syasou6domain5PhasePB2Eq5equal(journey.phase, 2);
  const speeds = [_M0FP37Hosi1216syasou2ui16render__notebookN5tupleS1440, _M0FP37Hosi1216syasou2ui16render__notebookN5tupleS1441, _M0FP37Hosi1216syasou2ui16render__notebookN5tupleS1442];
  const _bind$2 = _M0MP37Hosi1216syasou2ui11Preferences5speed(preferences);
  let speed_index;
  switch (_bind$2) {
    case "rapid": {
      speed_index = 1;
      break;
    }
    case "express": {
      speed_index = 2;
      break;
    }
    default: {
      speed_index = 0;
    }
  }
  const sound = props.sound;
  const sound_label = sound.enabled ? "音を消す" : "音を入れる";
  const _tmp = [_M0FP37Hosi1216syasou2ui1pGbE("open", props.open), _M0FP37Hosi1216syasou2ui1pGsE("onOpenChange", (value) => {
    const _func = props.on_open;
    _func(value);
    if (!value) {
      _set_settings(false);
      return;
    } else {
      return;
    }
  })];
  const _tmp$2 = _M0FP37Hosi1216syasou2ui7foreign("dialog", "Trigger", [_M0FP37Hosi1216syasou2ui1pGbE("asChild", true)], [_M0FP37Hosi1216syasou2ui12motion__node("button", [_M0FP37Hosi1216syasou2ui1pGsE("className", "notebook-object"), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", "旅の手帳を開く"), _M0FP37Hosi1216syasou2ui1pGsE("title", "手帳をひらく")], [_M0FP37Hosi1216syasou2ui4node("span", [_M0FP37Hosi1216syasou2ui1pGsE("className", "resting-book-pages"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")], []), _M0FP37Hosi1216syasou2ui4node("span", [_M0FP37Hosi1216syasou2ui1pGsE("className", "resting-book-cover"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")], [_M0FP37Hosi1216syasou2ui4node("span", [_M0FP37Hosi1216syasou2ui1pGsE("className", "cover-border")], []), _M0FP37Hosi1216syasou2ui4node("span", [_M0FP37Hosi1216syasou2ui1pGsE("className", "cover-mark")], [_M0FP37Hosi1216syasou2ui18rail__mark_2einner(0.8)]), _M0FP37Hosi1216syasou2ui4node("span", [_M0FP37Hosi1216syasou2ui1pGsE("className", "book-elastic")], [])]), _M0FP37Hosi1216syasou2ui4node("span", [_M0FP37Hosi1216syasou2ui1pGsE("className", "resting-book-ribbon"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")], [])])]);
  const _tmp$3 = [];
  const _tmp$4 = _M0FP37Hosi1216syasou2ui7foreign("dialog", "Overlay", [_M0FP37Hosi1216syasou2ui1pGsE("className", "journal-shade")], []);
  const _tmp$5 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "journal-anchor"), _M0FP37Hosi1216syasou2ui1pGsE("onOpenAutoFocus", (event) => {
    _M0MP37Hosi1216syasou2ui7UiEvent7prevent(event);
    _M0FP37Hosi1216syasou2ui15focus__selector(props.focus_pocket ? ".ticket-pocket" : "#journal-main-action");
  }), _M0FP37Hosi1216syasou2ui1pGsE("onCloseAutoFocus", (event) => {
    if (props.suspended) {
      _M0MP37Hosi1216syasou2ui7UiEvent7prevent(event);
      return;
    } else {
      return;
    }
  })];
  const _tmp$6 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "sr-only")];
  const _p = "旅の手帳";
  const _tmp$7 = _M0FP37Hosi1216syasou2ui7foreign("dialog", "Title", _tmp$6, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p)]);
  const _tmp$8 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "sr-only")];
  const _p$2 = "作業時間、列車の速さ、音、メモを手帳で操作できます。";
  const _tmp$9 = _M0FP37Hosi1216syasou2ui7foreign("dialog", "Description", _tmp$8, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$2)]);
  const _tmp$10 = _M0FP37Hosi1216syasou2ui1pGsE("className", "journal");
  const _tmp$11 = _M0FP37Hosi1216syasou2ui1pGbE("data-settings", _show_settings);
  let _tmp$12;
  if (reduced) {
    const _p$3 = false;
    _tmp$12 = _p$3;
  } else {
    _tmp$12 = _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("opacity", 0), _M0FP37Hosi1216syasou2ui1pGdE("y", compact ? 14 : 55), _M0FP37Hosi1216syasou2ui1pGdE("rotateX", compact ? 0 : 12), _M0FP37Hosi1216syasou2ui1pGdE("rotate", compact ? 0 : -5), _M0FP37Hosi1216syasou2ui1pGdE("scale", compact ? 1 : 0.93)]);
  }
  const _tmp$13 = [_tmp$10, _tmp$11, _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("initial", _tmp$12), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("animate", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("opacity", 1), _M0FP37Hosi1216syasou2ui1pGdE("y", 0), _M0FP37Hosi1216syasou2ui1pGdE("rotateX", 0), _M0FP37Hosi1216syasou2ui1pGdE("rotate", compact ? 0 : -2), _M0FP37Hosi1216syasou2ui1pGdE("scale", 1)])), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("transition", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("duration", compact ? 0.18 : 0.55), _M0FP37Hosi1216syasou2ui1pGsE("ease", "easeOut")]))];
  const _tmp$14 = _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "journal-cover"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")], []);
  const _tmp$15 = _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "journal-page-edges"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")], []);
  const _tmp$16 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "journal-spread")];
  const _tmp$17 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "journal-page journal-left")];
  let _tmp$18;
  if (_show_settings) {
    _tmp$18 = _M0FP37Hosi1216syasou2ui5group([_M0FP37Hosi1216syasou2ui4node("button", [_M0FP37Hosi1216syasou2ui1pGsE("className", "paper-back paper-icon"), _M0FP37Hosi1216syasou2ui1pGsE("onClick", () => {
      _set_settings(false);
    }), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", "手帳に戻る")], [_M0FP37Hosi1216syasou2ui12icon_2einner("ArrowLeft", 19, 1.1, false)]), _M0FP37Hosi1216syasou2ui8settings(preferences, travel.set_preferences, active)]);
  } else {
    const _tmp$19 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "journey-paper")];
    const _tmp$20 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "paper-date")];
    const _p$3 = _M0FP37Hosi1216syasou2ui13printed__date();
    const _tmp$21 = _M0FP37Hosi1216syasou2ui4node("span", _tmp$20, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$3)]);
    const _tmp$22 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "paper-time"), _M0FP37Hosi1216syasou2ui1pGsE("onClick", () => {
      _set_settings(true);
    }), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", "作業と休憩の時間を設定")];
    let _tmp$23;
    if (active) {
      _L: {
        _L$2: {
          if (_M0MP37Hosi1216syasou2ui11Preferences8showTime(preferences)) {
            const _bind$3 = travel.remaining;
            if (_bind$3.$tag === 1) {
              const _Some = _bind$3;
              const _remaining = _Some._0;
              const _tmp$24 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "time-value")];
              const _p$4 = _M0FP37Hosi1216syasou2ui12format__time(_remaining);
              _tmp$23 = _M0FP37Hosi1216syasou2ui4node("span", _tmp$24, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$4)]);
            } else {
              break _L$2;
            }
          } else {
            break _L$2;
          }
          break _L;
        }
        const _tmp$24 = [_M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")];
        const _p$4 = "—";
        _tmp$23 = _M0FP37Hosi1216syasou2ui4node("span", _tmp$24, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$4)]);
      }
    } else {
      const _tmp$24 = [];
      let _p$4;
      if (_M0MP37Hosi1216syasou2ui11Preferences12focusMinutes(preferences) !== 0) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(11);
        _M0MPB13StringBuilder13write__objectGdE(_string_builder, _M0MP37Hosi1216syasou2ui11Preferences12focusMinutes(preferences));
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " min / ");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder, _M0MP37Hosi1216syasou2ui11Preferences11restMinutes(preferences));
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " min");
        _p$4 = _string_builder.val;
      } else {
        _p$4 = "∞";
      }
      _tmp$23 = _M0FP37Hosi1216syasou2ui4node("span", _tmp$24, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$4)]);
    }
    const _tmp$24 = _M0FP37Hosi1216syasou2ui4node("button", _tmp$22, [_tmp$23]);
    const _tmp$25 = _M0FP37Hosi1216syasou2ui1pGsE("className", "paper-speed");
    const _tmp$26 = _M0FP37Hosi1216syasou2ui1pGsE("onClick", () => {
      const _func = travel.set_preferences;
      _func(_M0MP37Hosi1216syasou2ui11Preferences11with__valueGsE(preferences, "speed", _M0MPC15array5Array2atGRP37Hosi1216syasou4view4SlotE(speeds, (speed_index + 1 | 0) % 3 | 0)._0));
    });
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(42);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "列車の速さ：");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0MPC15array5Array2atGRP37Hosi1216syasou4view4SlotE(speeds, speed_index)._1);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "。クリックで変更");
    const _tmp$27 = [_tmp$25, _tmp$26, _M0FP37Hosi1216syasou2ui1pGsE("aria-label", _string_builder.val)];
    const _p$4 = _M0MPC15array5Array2atGRP37Hosi1216syasou4view4SlotE(speeds, speed_index)._2;
    const _tmp$28 = _M0FP37Hosi1216syasou2ui4node("button", _tmp$27, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$4)]);
    let _tmp$29;
    if (_M0IP37Hosi1216syasou6domain5PhasePB2Eq5equal(journey.phase, 2)) {
      const _tmp$30 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "paper-phase")];
      const _p$5 = "休憩";
      _tmp$29 = _M0FP37Hosi1216syasou2ui4node("span", _tmp$30, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$5)]);
    } else {
      _tmp$29 = _M0DTP37Hosi1216syasou4view7Element5Blank__;
    }
    const _tmp$30 = _tmp$29;
    let _tmp$31;
    if (_M0IP37Hosi1216syasou6domain5PhasePB2Eq5equal(journey.phase, 3)) {
      const _tmp$32 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "paper-phase")];
      const _p$5 = "到着";
      _tmp$31 = _M0FP37Hosi1216syasou2ui4node("span", _tmp$32, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$5)]);
    } else {
      _tmp$31 = _M0DTP37Hosi1216syasou4view7Element5Blank__;
    }
    _tmp$18 = _M0FP37Hosi1216syasou2ui5group([_M0FP37Hosi1216syasou2ui4node("div", _tmp$19, [_tmp$21, _tmp$24, _tmp$28, _tmp$30, _tmp$31, _M0FP37Hosi1216syasou2ui4node("button", [_M0FP37Hosi1216syasou2ui1pGsE("id", "journal-main-action"), _M0FP37Hosi1216syasou2ui1pGsE("className", "paper-play"), _M0FP37Hosi1216syasou2ui1pGsE("onClick", active ? props.on_toggle : props.on_start), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", active ? (journey.running ? "一時停止" : "旅を再開") : _M0IP37Hosi1216syasou6domain5PhasePB2Eq5equal(journey.phase, 3) ? "もう一度乗車する" : "乗車する"), _M0FP37Hosi1216syasou2ui1pGsE("title", active ? (journey.running ? "一時停止" : "再開") : "乗車する")], [_M0FP37Hosi1216syasou2ui12icon_2einner(active && journey.running ? "Pause" : "Play", 19, 1.3, false)])]), _M0FP37Hosi1216syasou2ui4node("textarea", [_M0FP37Hosi1216syasou2ui1pGsE("className", "paper-memo"), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", "手帳のメモ"), _M0FP37Hosi1216syasou2ui1pGsE("value", props.note), _M0FP37Hosi1216syasou2ui1pGiE("maxLength", 300), _M0FP37Hosi1216syasou2ui1pGsE("onChange", (e) => {
      const _func = props.on_note;
      _func(_M0MP37Hosi1216syasou2ui7UiEvent5value(e));
    }), _M0FP37Hosi1216syasou2ui1pGbE("spellCheck", false)], [])]);
  }
  const _tmp$19 = _tmp$18;
  const _tmp$20 = _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "paper-tools")], [_M0FP37Hosi1216syasou2ui4node("button", [_M0FP37Hosi1216syasou2ui1pGsE("className", "paper-icon"), _M0FP37Hosi1216syasou2ui1pGsE("onClick", () => {
    _set_settings(!_show_settings);
  }), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", _show_settings ? "手帳に戻る" : "旅の設定"), _M0FP37Hosi1216syasou2ui1pGbE("aria-pressed", _show_settings), _M0FP37Hosi1216syasou2ui1pGsE("title", "設定")], [_M0FP37Hosi1216syasou2ui12icon_2einner("Settings2", 17, 1.15, false)]), _M0FP37Hosi1216syasou2ui4node("button", [_M0FP37Hosi1216syasou2ui1pGsE("className", "paper-icon"), _M0FP37Hosi1216syasou2ui1pGsE("onClick", sound.toggle), _M0FP37Hosi1216syasou2ui1pGbE("disabled", sound.busy), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", sound_label), _M0FP37Hosi1216syasou2ui1pGbE("aria-pressed", sound.enabled), _M0FP37Hosi1216syasou2ui1pGsE("title", sound_label)], [_M0FP37Hosi1216syasou2ui12icon_2einner(sound.enabled ? "Volume2" : "VolumeX", 17, 1.15, false)]), active ? _M0FP37Hosi1216syasou2ui4node("button", [_M0FP37Hosi1216syasou2ui1pGsE("className", "paper-icon"), _M0FP37Hosi1216syasou2ui1pGsE("onClick", travel.finish), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", "旅を終える"), _M0FP37Hosi1216syasou2ui1pGsE("title", "旅を終える")], [_M0FP37Hosi1216syasou2ui12icon_2einner("Square", 14, 1.15, false)]) : _M0DTP37Hosi1216syasou4view7Element5Blank__]);
  let _tmp$21;
  const _p$3 = sound.error;
  const _p$4 = "";
  if (!(_p$3 === _p$4)) {
    const _tmp$22 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "paper-error"), _M0FP37Hosi1216syasou2ui1pGsE("role", "alert")];
    const _p$5 = sound.error;
    _tmp$21 = _M0FP37Hosi1216syasou2ui4node("p", _tmp$22, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$5)]);
  } else {
    _tmp$21 = _M0DTP37Hosi1216syasou4view7Element5Blank__;
  }
  const _tmp$22 = _M0FP37Hosi1216syasou2ui4node("div", _tmp$17, [_tmp$19, _tmp$20, _tmp$21]);
  const _tmp$23 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "journal-page journal-right")];
  const _tmp$24 = _M0FP37Hosi1216syasou2ui10route__map();
  const _tmp$25 = [_M0FP37Hosi1216syasou2ui1pGsE("className", _M0FP37Hosi1216syasou2ui15classes_2einner("ticket-pocket", [{ _0: "ticket-pocket-filled", _1: travel.tickets.length > 0 }])), _M0FP37Hosi1216syasou2ui1pGsE("onClick", props.on_archive), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", "集めた切符を見る"), _M0FP37Hosi1216syasou2ui1pGsE("title", "集めた切符")];
  const _bind$3 = _M0MPC15array5Array3getGRP37Hosi1216syasou6domain6TicketE(travel.tickets, 0);
  let _tmp$26;
  if (_bind$3 === undefined) {
    _tmp$26 = _M0DTP37Hosi1216syasou4view7Element5Blank__;
  } else {
    const _Some = _bind$3;
    const _ticket = _Some;
    _tmp$26 = _M0FP37Hosi1216syasou2ui4node("span", [_M0FP37Hosi1216syasou2ui1pGsE("className", "pocket-ticket"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")], [_M0FP37Hosi1216syasou2ui20ticket__card_2einner(_ticket, false, undefined, undefined, undefined, undefined, undefined)]);
  }
  const _tmp$27 = _tmp$26;
  const _tmp$28 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "pocket-paper"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")];
  const _tmp$29 = _M0FP37Hosi1216syasou2ui12icon_2einner("Tickets", 18, 1, false);
  const _tmp$30 = [];
  const _p$5 = "切符";
  return _M0FP37Hosi1216syasou2ui7foreign("dialog", "Root", _tmp, [_tmp$2, _M0FP37Hosi1216syasou2ui7foreign("dialog", "Portal", _tmp$3, [_tmp$4, _M0FP37Hosi1216syasou2ui7foreign("dialog", "Content", _tmp$5, [_tmp$7, _tmp$9, _M0FP37Hosi1216syasou2ui12motion__node("div", _tmp$13, [_tmp$14, _tmp$15, _M0FP37Hosi1216syasou2ui4node("div", _tmp$16, [_tmp$22, _M0FP37Hosi1216syasou2ui4node("div", _tmp$23, [_tmp$24, _M0FP37Hosi1216syasou2ui4node("button", _tmp$25, [_tmp$27, _M0FP37Hosi1216syasou2ui4node("span", _tmp$28, [_tmp$29, _M0FP37Hosi1216syasou2ui4node("span", _tmp$30, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$5)])])])])]), _M0FP37Hosi1216syasou2ui7foreign("dialog", "Close", [_M0FP37Hosi1216syasou2ui1pGsE("className", "paper-close paper-icon"), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", "手帳を閉じる"), _M0FP37Hosi1216syasou2ui1pGsE("title", "手帳を閉じる")], [_M0FP37Hosi1216syasou2ui12icon_2einner("X", 19, 1, false)]), _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "journal-spine"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")], []), _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "journal-ribbon"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")], [])])])])]);
}
function _M0FP37Hosi1216syasou2ui8notebook(props) {
  return _M0FP37Hosi1216syasou2ui9componentGRP37Hosi1216syasou2ui9SnowPropsE(_M0FP37Hosi1216syasou2ui16render__notebook, props, undefined);
}
function _M0FP37Hosi1216syasou2ui17read__preferences() {
  const defaults = _M0FP37Hosi1216syasou6bridge20default__preferences();
  return _M0FP37Hosi1216syasou6bridge13read__storage(_M0FP37Hosi1216syasou2ui12storage__key("syasou.preferences.v1"), defaults, _M0FP37Hosi1216syasou6bridge15is__preferences);
}
function _M0FP37Hosi1216syasou2ui17save__preferences(preferences) {
  _M0FP37Hosi1216syasou6bridge14write__storage(_M0FP37Hosi1216syasou2ui12storage__key("syasou.preferences.v1"), preferences);
}
function _M0FP37Hosi1216syasou2ui12load__travel(preferences, note) {
  const stored = _M0FP37Hosi1216syasou6bridge13read__storage(_M0FP37Hosi1216syasou2ui12storage__key("syasou.travel.v2"), _M0FP26mizchi8js__core4null(), _M0FP37Hosi1216syasou6bridge17is__travel__state);
  if (!_M0FP26mizchi8js__core8is__null(stored)) {
    return _M0FP37Hosi1216syasou6bridge15restore__travel(stored, _M0FP37Hosi1216syasou2ui3now(), note);
  }
  const empty_journey = _M0FP37Hosi1216syasou6bridge14empty__journey();
  const initial = _M0FP26mizchi8js__core11new__object();
  _M0MP26mizchi8js__core3Any5__set(initial, "pendingArrivalId", _M0FP26mizchi8js__core4null());
  if (_M0FP37Hosi1216syasou2ui4demo) {
    _M0MP26mizchi8js__core3Any5__set(initial, "journey", empty_journey);
    _M0MP26mizchi8js__core3Any5__set(initial, "tickets", _M0FP37Hosi1216syasou6bridge15sample__tickets(_M0FP37Hosi1216syasou2ui3now()));
    return initial;
  }
  const legacy = _M0FP37Hosi1216syasou6bridge13read__storage(_M0FP37Hosi1216syasou2ui12storage__key("syasou.journey.v1"), empty_journey, _M0FP37Hosi1216syasou6bridge11is__journey);
  const journey = _M0FP37Hosi1216syasou6bridge24migrate__legacy__journey(legacy, preferences, _M0FP37Hosi1216syasou2ui4uuid, _M0FP37Hosi1216syasou2ui3now);
  _M0MP26mizchi8js__core3Any5__set(initial, "journey", journey);
  _M0MP26mizchi8js__core3Any5__set(initial, "tickets", []);
  return _M0FP37Hosi1216syasou6bridge15restore__travel(initial, _M0FP37Hosi1216syasou2ui3now(), note);
}
function _M0MP37Hosi1216syasou2ui11SavedTravel7journey(self) {
  return _M0FP37Hosi1216syasou6bridge13read__journey(_M0MP26mizchi8js__core3Any5__get(self, "journey"));
}
function _M0MP37Hosi1216syasou2ui11SavedTravel7tickets(self) {
  const items = _M0MP26mizchi8js__core3Any5__get(self, "tickets");
  const _p = new Array(items.length);
  const _p$2 = items.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = items[_p$3];
      _p[_p$3] = _M0FP37Hosi1216syasou6bridge12read__ticket(_p$4);
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _p;
}
function _M0MP37Hosi1216syasou2ui11SavedTravel7pending(self) {
  const value = _M0MP26mizchi8js__core3Any5__get(self, "pendingArrivalId");
  return _M0FP26mizchi8js__core11is__nullish(value) ? undefined : value;
}
function _M0FP37Hosi1216syasou2ui12save__travel(travel) {
  return _M0FP37Hosi1216syasou6bridge14write__storage(_M0FP37Hosi1216syasou2ui12storage__key("syasou.travel.v2"), travel);
}
function _M0FP37Hosi1216syasou2ui13travel__event(kind, attrs) {
  const _self = [];
  _M0MPC15array5Array4pushGsE(_self, _M0FP37Hosi1216syasou2ui1pGsE("type", kind));
  _M0MPC15array5Array10push__iterGUsRP37Hosi1216syasou2ui13PropertyValueEE(_self, _M0MPC15array5Array4iterGUsRP37Hosi1216syasou2ui13PropertyValueEE(attrs));
  return _M0FP37Hosi1216syasou2ui10properties(_self);
}
function _M0FP37Hosi1216syasou2ui22journey__event_2einner(kind, time, note, attrs) {
  const _tmp = _M0FP37Hosi1216syasou2ui1pGsE("note", note);
  const _self = [];
  _M0MPC15array5Array4pushGsE(_self, _M0FP37Hosi1216syasou2ui1pGsE("type", kind));
  _M0MPC15array5Array4pushGsE(_self, _M0FP37Hosi1216syasou2ui1pGdE("now", time));
  _M0MPC15array5Array10push__iterGUsRP37Hosi1216syasou2ui13PropertyValueEE(_self, _M0MPC15array5Array4iterGUsRP37Hosi1216syasou2ui13PropertyValueEE(attrs));
  return _M0FP37Hosi1216syasou2ui13travel__event("journey", [_tmp, _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("action", _M0FP37Hosi1216syasou2ui10properties(_self))]);
}
function _M0FP37Hosi1216syasou2ui14journey__event(kind, time, note, attrs$46$opt) {
  let attrs;
  if (attrs$46$opt.$tag === 1) {
    const _Some = attrs$46$opt;
    attrs = _Some._0;
  } else {
    attrs = [];
  }
  return _M0FP37Hosi1216syasou2ui22journey__event_2einner(kind, time, note, attrs);
}
function _M0FP37Hosi1216syasou2ui14reduce__travel(travel, event) {
  return _M0FP37Hosi1216syasou6bridge15travel__reducer(travel, event);
}
function _M0FP37Hosi1216syasou2ui20use__travel__reducer(initialize) {
  const _bind = _M0FP37Hosi1216syasou4view16use__state__lazyGRP37Hosi1216syasou2ui11PreferencesE(initialize);
  const _travel = _bind._0;
  const _set_travel = _bind._1;
  const dispatch = _M0FP37Hosi1216syasou4view13use__callbackGWEuE((event) => {
    _M0FP37Hosi1216syasou4view6updateGRP37Hosi1216syasou2ui11SavedTravelE(_set_travel, (current) => _M0FP37Hosi1216syasou2ui14reduce__travel(current, event));
  }, []);
  return { _0: _travel, _1: dispatch };
}
function _M0FP37Hosi1216syasou2ui11edit__event(id, title, note) {
  const changes = _M0FP26mizchi8js__core11new__object();
  if (title === undefined) {
  } else {
    const _Some = title;
    const _value = _Some;
    _M0MP26mizchi8js__core3Any5__set(changes, "title", _value);
  }
  if (note === undefined) {
  } else {
    const _Some = note;
    const _value = _Some;
    _M0MP26mizchi8js__core3Any5__set(changes, "note", _value);
  }
  return _M0FP37Hosi1216syasou2ui13travel__event("edit-ticket", [_M0FP37Hosi1216syasou2ui1pGsE("id", id), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("changes", changes)]);
}
function _M0FP37Hosi1216syasou2ui10read__note() {
  return _M0FP37Hosi1216syasou6bridge13read__storage(_M0FP37Hosi1216syasou2ui12storage__key("syasou.note.v1"), "", _M0FP37Hosi1216syasou6bridge8is__note);
}
function _M0FP37Hosi1216syasou2ui10save__note(note) {
  _M0FP37Hosi1216syasou6bridge14write__storage(_M0FP37Hosi1216syasou2ui12storage__key("syasou.note.v1"), note);
}
function _M0FP37Hosi1216syasou2ui17read__guide__done() {
  return _M0FP37Hosi1216syasou6bridge13read__storage(_M0FP37Hosi1216syasou2ui12storage__key("syasou.onboarding.v1"), false, _M0FP37Hosi1216syasou6bridge19is__stored__boolean);
}
function _M0FP37Hosi1216syasou2ui17save__guide__done() {
  _M0FP37Hosi1216syasou6bridge14write__storage(_M0FP37Hosi1216syasou2ui12storage__key("syasou.onboarding.v1"), true);
}
function _M0FP37Hosi1216syasou2ui10read__view() {
  return _M0FP37Hosi1216syasou6bridge13read__storage(_M0FP37Hosi1216syasou2ui12storage__key("syasou.view.v1"), "forest", _M0FP37Hosi1216syasou6bridge8is__view);
}
function _M0FP37Hosi1216syasou2ui10save__view(view) {
  _M0FP37Hosi1216syasou6bridge14write__storage(_M0FP37Hosi1216syasou2ui12storage__key("syasou.view.v1"), view);
}
function _M0FP37Hosi1216syasou2ui12use__journey(note) {
  const _bind = _M0FP37Hosi1216syasou4view16use__state__lazyGRP37Hosi1216syasou2ui11PreferencesE(_M0FP37Hosi1216syasou2ui17read__preferences);
  const _preferences = _bind._0;
  const _set_preferences = _bind._1;
  const _bind$2 = _M0FP37Hosi1216syasou2ui20use__travel__reducer(() => _M0FP37Hosi1216syasou2ui12load__travel(_preferences, note));
  const _travel = _bind$2._0;
  const _dispatch = _bind$2._1;
  const journey = _M0MP37Hosi1216syasou2ui11SavedTravel7journey(_travel);
  const _bind$3 = _M0FP37Hosi1216syasou4view16use__state__lazyGdE(_M0FP37Hosi1216syasou2ui3now);
  const _time = _bind$3._0;
  const _set_time = _bind$3._1;
  const _bind$4 = _M0FP37Hosi1216syasou4view10use__stateGbE(false);
  const _save_error = _bind$4._0;
  const _set_save_error = _bind$4._1;
  const _p = note;
  const note_ref = _M0FP37Hosi1216syasou4view4slot(() => _M0FP37Hosi1216syasou4view8new__refGsE(_p))._0.value;
  _M0FP37Hosi1216syasou2ui7observe(() => {
    _M0MP37Hosi1216syasou4view7ViewRef12set__currentGsE(note_ref, note);
  }, [note]);
  _M0FP37Hosi1216syasou2ui7observe(() => {
    _M0FP37Hosi1216syasou2ui17save__preferences(_preferences);
  }, [_preferences]);
  _M0FP37Hosi1216syasou2ui7observe(() => {
    _set_save_error(!_M0FP37Hosi1216syasou2ui12save__travel(_travel));
  }, [_travel]);
  const _p$2 = journey.running;
  _M0FP37Hosi1216syasou2ui6effect(() => {
    if (!journey.running) {
      return () => {
      };
    }
    const tick = () => {
      const time = _M0FP37Hosi1216syasou2ui3now();
      _set_time(time);
      _dispatch(_M0FP37Hosi1216syasou2ui14journey__event("tick", time, _M0MPC16option6Option10unwrap__orGsE(note_ref.current, ""), _M0DTPC16option6OptionGRPB5ArrayGUsRP37Hosi1216syasou2ui13PropertyValueEEE4None__));
    };
    const timer = _M0FP37Hosi1216syasou2ui13set__interval(tick, 500);
    const unsubscribe = _M0FP37Hosi1216syasou2ui12on__document("visibilitychange", tick);
    return () => {
      _M0FP37Hosi1216syasou2ui15clear__interval(timer);
      unsubscribe();
    };
  }, [_p$2]);
  const start = () => {
    const time = _M0FP37Hosi1216syasou2ui3now();
    _set_time(time);
    _dispatch(_M0FP37Hosi1216syasou2ui22journey__event_2einner("start", time, note, [_M0FP37Hosi1216syasou2ui1pGdE("focusMinutes", _M0MP37Hosi1216syasou2ui11Preferences12focusMinutes(_preferences)), _M0FP37Hosi1216syasou2ui1pGdE("restMinutes", _M0MP37Hosi1216syasou2ui11Preferences11restMinutes(_preferences)), _M0FP37Hosi1216syasou2ui1pGsE("id", _M0FP37Hosi1216syasou2ui4uuid()), _M0FP37Hosi1216syasou2ui1pGsE("speed", _M0MP37Hosi1216syasou2ui11Preferences5speed(_preferences)), _M0FP37Hosi1216syasou2ui1pGsE("scene", _M0MP37Hosi1216syasou2ui11Preferences5scene(_preferences))]));
  };
  const toggle = () => {
    const time = _M0FP37Hosi1216syasou2ui3now();
    _set_time(time);
    _dispatch(_M0FP37Hosi1216syasou2ui14journey__event("toggle", time, note, _M0DTPC16option6OptionGRPB5ArrayGUsRP37Hosi1216syasou2ui13PropertyValueEEE4None__));
  };
  return new _M0TP37Hosi1216syasou2ui11JourneyView(journey, _preferences, _set_preferences, _M0FP37Hosi1216syasou6domain18journey__remaining(journey, _time), _M0MP37Hosi1216syasou2ui11SavedTravel7tickets(_travel), _M0MP37Hosi1216syasou2ui11SavedTravel7pending(_travel), _save_error, start, toggle, () => {
    _dispatch(_M0FP37Hosi1216syasou2ui14journey__event("finish", _M0FP37Hosi1216syasou2ui3now(), note, _M0DTPC16option6OptionGRPB5ArrayGUsRP37Hosi1216syasou2ui13PropertyValueEEE4None__));
  }, () => {
    _dispatch(_M0FP37Hosi1216syasou2ui13travel__event("acknowledge-arrival", []));
  }, () => {
    _dispatch(_M0FP37Hosi1216syasou2ui13travel__event("welcome-ticket", [_M0FP37Hosi1216syasou2ui1pGdE("now", _M0FP37Hosi1216syasou2ui3now())]));
  }, (id, title, note$2) => {
    _dispatch(_M0FP37Hosi1216syasou2ui11edit__event(id, title, note$2));
  });
}
function _M0FP37Hosi1216syasou2ui3appN13finish__guideS55(_env, receive) {
  const _set_guide_step = _env._6;
  const _set_notebook = _env._5;
  const _set_guide = _env._4;
  const _set_at_window = _env._3;
  const look_target_x = _env._2;
  const travel = _env._1;
  const look_target_y = _env._0;
  if (receive) {
    const _func = travel.welcome;
    _func();
  } else {
    _M0FP37Hosi1216syasou2ui17save__guide__done();
  }
  _set_guide(false);
  _set_guide_step(0);
  _set_at_window(false);
  _set_notebook(false);
  _M0MP37Hosi1216syasou4view11MotionValue3set(look_target_x, 0);
  _M0MP37Hosi1216syasou4view11MotionValue3set(look_target_y, 0);
}
function _M0FP37Hosi1216syasou2ui3appN16_2aasync__driverS1399(_state) {
  const _$42$try$47$1131 = _state;
  const set_fullscreen_error = _$42$try$47$1131._1;
  const _try_err = _$42$try$47$1131._0;
  if (_try_err.$tag === 0) {
    return new _M0DTPC16result6ResultGOuRPB9CancelledE3Err(_try_err);
  } else {
    return new _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(set_fullscreen_error("全画面表示を開始できませんでした。"));
  }
}
function _M0FP37Hosi1216syasou2ui3app(props) {
  _M0FP37Hosi1216syasou2ui21use__visual__viewport();
  const portrait = _M0FP37Hosi1216syasou2ui10use__media("(max-width: 760px) and (orientation: portrait)");
  const supports_fullscreen = _M0FP37Hosi1216syasou2ui21fullscreen__supported();
  const _bind = _M0FP37Hosi1216syasou4view16use__state__lazyGsE(_M0FP37Hosi1216syasou2ui10read__note);
  const _note = _bind._0;
  const _set_note = _bind._1;
  const travel = _M0FP37Hosi1216syasou2ui12use__journey(_note);
  const journey = travel.journey;
  const preferences = travel.preferences;
  const _bind$2 = _M0FP37Hosi1216syasou4view10use__stateGbE(false);
  const _notebook_open = _bind$2._0;
  const _set_notebook = _bind$2._1;
  const _bind$3 = _M0FP37Hosi1216syasou4view10use__stateGbE(false);
  const _focus_pocket = _bind$3._0;
  const _set_focus_pocket = _bind$3._1;
  const _bind$4 = _M0FP37Hosi1216syasou4view10use__stateGbE(false);
  const _archive_open = _bind$4._0;
  const _set_archive = _bind$4._1;
  const _bind$5 = travel.pending;
  const tray_open = _bind$5 === undefined ? _archive_open : true;
  const _bind$6 = _M0FP37Hosi1216syasou4view16use__state__lazyGbE(() => {
    if (!_M0FP37Hosi1216syasou2ui17read__guide__done()) {
      let _tmp;
      if (_M0IP37Hosi1216syasou6domain5PhasePB2Eq5equal(journey.phase, 0)) {
        const _p = travel.tickets;
        let _tmp$2;
        let _p$2;
        _L: {
          _L$2: {
            const _p$3 = _p.length;
            let _tmp$3 = 0;
            while (true) {
              const _p$4 = _tmp$3;
              if (_p$4 < _p$3) {
                const _p$5 = _p[_p$4];
                if (!_M0IPC16option6OptionPB2Eq5equalGsE(_p$5.kind, _M0FP37Hosi1216syasou2ui3appN6constrS1443)) {
                  _p$2 = false;
                  break _L$2;
                }
                _tmp$3 = _p$4 + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _tmp$2 = true;
            break _L;
          }
          _tmp$2 = _p$2;
        }
        _tmp = _tmp$2;
      } else {
        _tmp = false;
      }
      return _tmp;
    } else {
      return false;
    }
  });
  const _guide_open = _bind$6._0;
  const _set_guide = _bind$6._1;
  const _bind$7 = _M0FP37Hosi1216syasou4view10use__stateGiE(0);
  const _guide_step = _bind$7._0;
  const _set_guide_step = _bind$7._1;
  const _bind$8 = _M0FP37Hosi1216syasou4view10use__stateGbE(false);
  const _window_open = _bind$8._0;
  const _set_window = _bind$8._1;
  const _bind$9 = _M0FP37Hosi1216syasou4view10use__stateGbE(false);
  const _at_window = _bind$9._0;
  const _set_at_window = _bind$9._1;
  const _bind$10 = _M0FP37Hosi1216syasou4view16use__state__lazyGsE(_M0FP37Hosi1216syasou2ui10read__view);
  const _view = _bind$10._0;
  const _set_view = _bind$10._1;
  const _p = _view === "train" ? "snow" : _view;
  const previous_view = _M0FP37Hosi1216syasou4view4slot(() => _M0FP37Hosi1216syasou4view8new__refGsE(_p))._0.value;
  const outside = _view === "train";
  const _bind$11 = _M0FP37Hosi1216syasou4view10use__stateGbE(false);
  const _fullscreen = _bind$11._0;
  const _set_fullscreen = _bind$11._1;
  const _bind$12 = _M0FP37Hosi1216syasou4view10use__stateGsE("");
  const _fullscreen_error = _bind$12._0;
  const _set_fullscreen_error = _bind$12._1;
  const _bind$13 = _M0FP37Hosi1216syasou4view10use__stateGbE(false);
  const _awake = _bind$13._0;
  const _set_awake = _bind$13._1;
  const _bind$14 = _M0FP37Hosi1216syasou4view10use__stateGsE("");
  const _announcement = _bind$14._0;
  const _set_announcement = _bind$14._1;
  const _p$2 = undefined;
  const sleep_timer = _M0FP37Hosi1216syasou4view4slot(() => _M0FP37Hosi1216syasou4view8new__refGiE(_p$2))._0.value;
  const _p$3 = journey.phase;
  const previous_phase = _M0FP37Hosi1216syasou4view4slot(() => _M0FP37Hosi1216syasou4view8new__refGRP37Hosi1216syasou6domain5PhaseE(_p$3))._0.value;
  const look_target_x = _M0FP37Hosi1216syasou2ui18use__motion__value(0);
  const look_target_y = _M0FP37Hosi1216syasou2ui18use__motion__value(0);
  const look_x = _M0FP37Hosi1216syasou2ui6springGRP37Hosi1216syasou4view11MotionValueE(look_target_x, [_M0FP37Hosi1216syasou2ui1pGdE("stiffness", 25), _M0FP37Hosi1216syasou2ui1pGdE("damping", 22)]);
  const look_y = _M0FP37Hosi1216syasou2ui6springGRP37Hosi1216syasou4view11MotionValueE(look_target_y, [_M0FP37Hosi1216syasou2ui1pGdE("stiffness", 25), _M0FP37Hosi1216syasou2ui1pGdE("damping", 22)]);
  const reduced = _M0FP37Hosi1216syasou2ui15reduced__motion();
  const moving = _M0IP37Hosi1216syasou6domain5PhasePB2Eq5equal(journey.phase, 0) || _M0IP37Hosi1216syasou6domain5PhasePB2Eq5equal(journey.phase, 1) && journey.running;
  const sound = _M0FP37Hosi1216syasou2ui10use__sound(preferences, moving && !props.covered, _window_open);
  const _p$4 = _M0DTPC16option6OptionGRP36mizchi11js__browser3dom7ElementE4None__;
  const window_button = _M0FP37Hosi1216syasou4view4slot(() => _M0FP37Hosi1216syasou4view8new__refGRP36mizchi11js__browser3dom7ElementE(_p$4))._0.value;
  const wake = _M0FP37Hosi1216syasou4view13use__callbackGWEuE(() => {
    _set_awake(true);
    const _bind$15 = sleep_timer.current;
    if (_bind$15 === undefined) {
    } else {
      const _Some = _bind$15;
      const _timer = _Some;
      _M0FP37Hosi1216syasou2ui14clear__timeout(_timer);
    }
    _M0MP37Hosi1216syasou4view7ViewRef12set__currentGiE(sleep_timer, _M0FP37Hosi1216syasou2ui12set__timeout(() => {
      _set_awake(false);
    }, 2200));
  }, []);
  _M0FP37Hosi1216syasou2ui6effect(() => () => {
    const _bind$15 = sleep_timer.current;
    if (_bind$15 === undefined) {
      return;
    } else {
      const _Some = _bind$15;
      const _timer = _Some;
      _M0FP37Hosi1216syasou2ui14clear__timeout(_timer);
      return;
    }
  }, []);
  _M0FP37Hosi1216syasou2ui7observe(() => {
    _M0FP37Hosi1216syasou2ui10save__note(_note);
  }, [_note]);
  _M0FP37Hosi1216syasou2ui7observe(() => {
    _M0FP37Hosi1216syasou2ui10save__view(_view);
  }, [_view]);
  const _tmp = props.onReady;
  const _p$5 = props.onReady;
  _M0FP37Hosi1216syasou2ui7observe(_tmp, [_p$5]);
  const _p$6 = props.covered;
  _M0FP37Hosi1216syasou2ui7observe(() => {
    if (!props.covered && (!tray_open && (!_notebook_open && !_guide_open))) {
      if (outside) {
        _M0FP37Hosi1216syasou2ui15focus__selector(".view-picker-trigger");
        return;
      } else {
        if (_at_window) {
          const _bind$15 = window_button.current;
          if (_bind$15.$tag === 1) {
            const _Some = _bind$15;
            const _button = _Some._0;
            _M0FP37Hosi1216syasou2ui5focus(_button);
            return;
          } else {
            return;
          }
        } else {
          _M0FP37Hosi1216syasou2ui15focus__selector(".notebook-object");
          return;
        }
      }
    } else {
      return;
    }
  }, [_p$6]);
  const show_guide = _M0FP37Hosi1216syasou4view13use__callbackGWEuE(() => {
    _set_guide_step(0);
    _set_guide(true);
    _set_at_window(false);
    _M0FP37Hosi1216syasou2ui6updateGsE(_set_view, (current) => {
      if (current === "train") {
        const _p$7 = previous_view.current;
        if (_p$7 === undefined) {
          return $panic();
        } else {
          const _p$8 = _p$7;
          return _p$8;
        }
      } else {
        return current;
      }
    });
    _set_notebook(false);
  }, []);
  const _p$7 = props.guideRequest;
  _M0FP37Hosi1216syasou2ui7observe(() => {
    if (props.guideRequest > 0) {
      show_guide();
      return;
    } else {
      return;
    }
  }, [_p$7, show_guide]);
  const _p$8 = travel.pending;
  _M0FP37Hosi1216syasou2ui7observe(() => {
    const _bind$15 = travel.pending;
    if (_bind$15 === undefined) {
      return;
    } else {
      const _Some = _bind$15;
      const _id = _Some;
      const _p$9 = "";
      if (!(_id === _p$9)) {
        _set_guide(false);
        return;
      } else {
        return;
      }
    }
  }, [_p$8]);
  const _env = { _0: look_target_y, _1: travel, _2: look_target_x, _3: _set_at_window, _4: _set_guide, _5: _set_notebook, _6: _set_guide_step };
  const _p$9 = journey.phase;
  _M0FP37Hosi1216syasou2ui7observe(() => {
    const phase = journey.phase;
    if (_M0IP016_24default__implPB2Eq10not__equalGORP37Hosi1216syasou6domain5PhaseE(previous_phase.current, phase)) {
      let _tmp$2;
      switch (phase) {
        case 2: {
          _tmp$2 = "作業時間が終わり、休憩に入りました。";
          break;
        }
        case 3: {
          _tmp$2 = "旅を終えました。";
          break;
        }
        case 1: {
          _tmp$2 = "乗車しました。";
          break;
        }
        default: {
          _tmp$2 = "";
        }
      }
      _set_announcement(_tmp$2);
      _M0MP37Hosi1216syasou4view7ViewRef12set__currentGRP37Hosi1216syasou6domain5PhaseE(previous_phase, phase);
    }
    let _tmp$2;
    switch (phase) {
      case 2: {
        _tmp$2 = "休憩 — 車窓";
        break;
      }
      case 1: {
        _tmp$2 = "車窓 — 乗車中";
        break;
      }
      default: {
        _tmp$2 = "車窓";
      }
    }
    _M0FP37Hosi1216syasou2ui20set__document__title(_tmp$2);
  }, [_p$9]);
  const leave_window = _M0FP37Hosi1216syasou4view13use__callbackGWEuE(() => {
    _set_at_window(false);
    _M0FP37Hosi1216syasou2ui6updateGsE(_set_view, (current) => {
      if (current === "train") {
        const _p$10 = previous_view.current;
        if (_p$10 === undefined) {
          return $panic();
        } else {
          const _p$11 = _p$10;
          return _p$11;
        }
      } else {
        return current;
      }
    });
    _M0FP37Hosi1216syasou2ui5frame(() => {
      const _bind$15 = window_button.current;
      if (_bind$15.$tag === 1) {
        const _Some = _bind$15;
        const _button = _Some._0;
        _M0FP37Hosi1216syasou2ui5focus(_button);
        return;
      } else {
        return;
      }
    });
  }, []);
  const choose_view = (next) => {
    const _p$10 = "train";
    if (!(next === _p$10)) {
      _M0MP37Hosi1216syasou4view7ViewRef12set__currentGsE(previous_view, next);
    }
    _set_view(next);
    _M0MP37Hosi1216syasou4view11MotionValue3set(look_target_x, 0);
    _M0MP37Hosi1216syasou4view11MotionValue3set(look_target_y, 0);
  };
  const _p$10 = props.covered;
  _M0FP37Hosi1216syasou2ui6effect(() => {
    const keydown = _M0FP37Hosi1216syasou2ui11on__keydown((event) => {
      if (_M0MP37Hosi1216syasou2ui7UiEvent3key(event) === "Escape" && (!_M0MP37Hosi1216syasou2ui7UiEvent9prevented(event) && ((_at_window || outside) && (!_notebook_open && (!tray_open && (!props.covered && !_guide_open)))))) {
        leave_window();
        return;
      } else {
        return;
      }
    });
    const fullscreen = _M0FP37Hosi1216syasou2ui12on__document("fullscreenchange", () => {
      _set_fullscreen(_M0FP37Hosi1216syasou2ui18fullscreen__active());
    });
    return () => {
      keydown();
      fullscreen();
    };
  }, [_at_window, outside, _notebook_open, tray_open, _p$10, _guide_open, leave_window]);
  const board = () => {
    const _func = travel.start;
    _func();
    _set_notebook(false);
    if (!sound.enabled) {
      const _func$2 = sound.toggle;
      _func$2();
      return;
    } else {
      return;
    }
  };
  const resume_journey = () => {
    const _func = travel.toggle;
    _func();
    if (!journey.running) {
      _set_notebook(false);
      return;
    } else {
      return;
    }
  };
  const toggle_fullscreen = () => {
    _set_fullscreen_error("");
    _M0FP37Hosi1216syasou2ui6launch((_cont, _err_cont) => {
      if (_M0FP37Hosi1216syasou2ui18fullscreen__active()) {
        let _err;
        _L: {
          const _bind$15 = _M0MP26mizchi8js__core7Promise4waitGuE(_M0FP37Hosi1216syasou2ui16fullscreen__exit(), _cont, (_cont_param) => {
            let _err$2;
            _L$2: {
              const _bind$16 = _M0FP37Hosi1216syasou2ui3appN16_2aasync__driverS1399(new _M0DTP37Hosi1216syasou2ui149_24Hosi121_2fsyasou_2fui_2eapp_2efinish__guide_2f55_2echoose__view_2f61_2eboard_2f65_2eresume__journey_2f66_2etoggle__fullscreen_2f67_2elambda_2f1396L5State13_2atry_2f1131(_cont_param, _set_fullscreen_error));
              let _bind$17;
              if (_bind$16.$tag === 1) {
                const _ok = _bind$16;
                _bind$17 = _ok._0;
              } else {
                const _err$3 = _bind$16;
                _err$2 = _err$3._0;
                break _L$2;
              }
              if (_bind$17 === -1) {
                return;
              } else {
                const _Some = _bind$17;
                const _payload = _Some;
                _cont(_payload);
                return;
              }
            }
            _err_cont(_err$2);
          });
          let _bind$16;
          if (_bind$15.$tag === 1) {
            const _ok = _bind$15;
            _bind$16 = _ok._0;
          } else {
            const _err$2 = _bind$15;
            _err = _err$2._0;
            break _L;
          }
          if (_bind$16 === -1) {
            return new _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(-1);
          } else {
            const _Some = _bind$16;
            const _payload = _Some;
            return new _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(_payload);
          }
        }
        return _M0FP37Hosi1216syasou2ui3appN16_2aasync__driverS1399(new _M0DTP37Hosi1216syasou2ui149_24Hosi121_2fsyasou_2fui_2eapp_2efinish__guide_2f55_2echoose__view_2f61_2eboard_2f65_2eresume__journey_2f66_2etoggle__fullscreen_2f67_2elambda_2f1396L5State13_2atry_2f1131(_err, _set_fullscreen_error));
      } else {
        if (_M0FP37Hosi1216syasou2ui30fullscreen__request__available()) {
          let _err;
          _L: {
            const _bind$15 = _M0MP26mizchi8js__core7Promise4waitGuE(_M0FP37Hosi1216syasou2ui17fullscreen__enter(), _cont, (_cont_param) => {
              let _err$2;
              _L$2: {
                const _bind$16 = _M0FP37Hosi1216syasou2ui3appN16_2aasync__driverS1399(new _M0DTP37Hosi1216syasou2ui149_24Hosi121_2fsyasou_2fui_2eapp_2efinish__guide_2f55_2echoose__view_2f61_2eboard_2f65_2eresume__journey_2f66_2etoggle__fullscreen_2f67_2elambda_2f1396L5State13_2atry_2f1131(_cont_param, _set_fullscreen_error));
                let _bind$17;
                if (_bind$16.$tag === 1) {
                  const _ok = _bind$16;
                  _bind$17 = _ok._0;
                } else {
                  const _err$3 = _bind$16;
                  _err$2 = _err$3._0;
                  break _L$2;
                }
                if (_bind$17 === -1) {
                  return;
                } else {
                  const _Some = _bind$17;
                  const _payload = _Some;
                  _cont(_payload);
                  return;
                }
              }
              _err_cont(_err$2);
            });
            let _bind$16;
            if (_bind$15.$tag === 1) {
              const _ok = _bind$15;
              _bind$16 = _ok._0;
            } else {
              const _err$2 = _bind$15;
              _err = _err$2._0;
              break _L;
            }
            if (_bind$16 === -1) {
              return new _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(-1);
            } else {
              const _Some = _bind$16;
              const _payload = _Some;
              return new _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(_payload);
            }
          }
          return _M0FP37Hosi1216syasou2ui3appN16_2aasync__driverS1399(new _M0DTP37Hosi1216syasou2ui149_24Hosi121_2fsyasou_2fui_2eapp_2efinish__guide_2f55_2echoose__view_2f61_2eboard_2f65_2eresume__journey_2f66_2etoggle__fullscreen_2f67_2elambda_2f1396L5State13_2atry_2f1131(_err, _set_fullscreen_error));
        } else {
          return new _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(_set_fullscreen_error("このブラウザでは全画面表示を利用できません。"));
        }
      }
    });
  };
  const _bind$15 = _M0MP37Hosi1216syasou2ui11Preferences5scene(preferences);
  const _bind$16 = _M0MP37Hosi1216syasou2ui11Preferences5speed(preferences);
  const _bind$17 = moving && (!props.covered && !tray_open);
  const _bind$18 = _M0IP37Hosi1216syasou6domain5PhasePB2Eq5equal(journey.phase, 1);
  const scenery = new _M0TP37Hosi1216syasou2ui14LandscapeProps(_bind$15, _bind$16, _bind$17, _window_open, _bind$18);
  const _tmp$2 = [_M0FP37Hosi1216syasou2ui1pGsE("reducedMotion", "user")];
  const _tmp$3 = [_M0FP37Hosi1216syasou2ui1pGsE("className", _M0FP37Hosi1216syasou2ui15classes_2einner("world", [{ _0: "at-window", _1: _at_window }, { _0: "outside-train", _1: outside }, { _0: "journal-is-open", _1: _notebook_open }, { _0: "world-awake", _1: _awake }])), _M0FP37Hosi1216syasou2ui1pGbE("inert", props.covered), _M0FP37Hosi1216syasou2ui1pGbE("aria-hidden", props.covered), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", "列車の窓辺"), _M0FP37Hosi1216syasou2ui1pGsE("data-view", _view), _M0FP37Hosi1216syasou2ui1pGsE("onPointerDown", wake), _M0FP37Hosi1216syasou2ui1pGsE("onPointerMove", (event) => {
    wake();
    let _tmp$4;
    const _p$11 = _M0MP37Hosi1216syasou2ui7UiEvent13pointer__type(event);
    const _p$12 = "mouse";
    if (!(_p$11 === _p$12)) {
      _tmp$4 = true;
    } else {
      _tmp$4 = reduced || (_notebook_open || (_at_window || (outside || (tray_open || _guide_open))));
    }
    if (_tmp$4) {
      return undefined;
    }
    _M0MP37Hosi1216syasou4view11MotionValue3set(look_target_x, (_M0MP37Hosi1216syasou2ui7UiEvent1x(event) / (_M0MP36mizchi11js__browser3dom6Window10innerWidth(_M0FP36mizchi11js__browser3dom6window()) + 0) - 0.5) * -9);
    _M0MP37Hosi1216syasou4view11MotionValue3set(look_target_y, (_M0MP37Hosi1216syasou2ui7UiEvent1y(event) / (_M0MP36mizchi11js__browser3dom6Window11innerHeight(_M0FP36mizchi11js__browser3dom6window()) + 0) - 0.5) * -5);
  }), _M0FP37Hosi1216syasou2ui1pGsE("onPointerLeave", () => {
    _M0MP37Hosi1216syasou4view11MotionValue3set(look_target_x, 0);
    _M0MP37Hosi1216syasou4view11MotionValue3set(look_target_y, 0);
  })];
  const _tmp$4 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "sr-only")];
  const _p$11 = "車窓";
  const _tmp$5 = _M0FP37Hosi1216syasou2ui4node("h1", _tmp$4, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$11)]);
  const _tmp$6 = outside ? _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "exterior-view")], [_M0FP37Hosi1216syasou2ui21snow__scenery_2einner(new _M0TP37Hosi1216syasou2ui14LandscapeProps(_bind$15, _bind$16, _bind$17, false, _bind$18), true)]) : _M0DTP37Hosi1216syasou4view7Element5Blank__;
  const _tmp$7 = _M0FP37Hosi1216syasou2ui12motion__node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "world-camera"), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("style", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGsE("x", look_x), _M0FP37Hosi1216syasou2ui1pGsE("y", look_y)])), _M0FP37Hosi1216syasou2ui1pGbE("inert", outside), _M0FP37Hosi1216syasou2ui1pGbE("aria-hidden", outside)], [_M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "room-wall"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")], []), _M0FP37Hosi1216syasou2ui12motion__node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "window-world"), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("animate", _at_window ? (portrait ? _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("scale", 1.5), _M0FP37Hosi1216syasou2ui1pGsE("x", "0%"), _M0FP37Hosi1216syasou2ui1pGsE("y", "10%")]) : _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("scale", 1.36), _M0FP37Hosi1216syasou2ui1pGsE("x", "13%"), _M0FP37Hosi1216syasou2ui1pGsE("y", "5%")])) : _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("scale", 1), _M0FP37Hosi1216syasou2ui1pGsE("x", "0%"), _M0FP37Hosi1216syasou2ui1pGsE("y", "0%")])), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("transition", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("duration", reduced ? 0 : 1.15), _M0FP37Hosi1216syasou2ui1pGsE("ease", "easeInOut")]))], [!outside ? (_view === "snow" ? _M0FP37Hosi1216syasou2ui21snow__scenery_2einner(scenery, false) : _M0FP37Hosi1216syasou2ui9landscape(scenery)) : _M0DTP37Hosi1216syasou4view7Element5Blank__, _M0FP37Hosi1216syasou2ui4node("button", [_M0FP37Hosi1216syasou2ui1pGsE("ref", window_button), _M0FP37Hosi1216syasou2ui1pGsE("className", "look-through-window"), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", _at_window ? "座席に戻る" : "車窓を眺める"), _M0FP37Hosi1216syasou2ui1pGsE("onClick", () => {
    _set_at_window(!_at_window);
    _M0MP37Hosi1216syasou4view11MotionValue3set(look_target_x, 0);
    _M0MP37Hosi1216syasou4view11MotionValue3set(look_target_y, 0);
  }), _M0FP37Hosi1216syasou2ui1pGiE("tabIndex", _notebook_open ? -1 : 0)], [])]), _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "window-lower-shadow"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")], []), _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "table-light"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")], []), _M0FP37Hosi1216syasou2ui4node("button", [_M0FP37Hosi1216syasou2ui1pGsE("className", _M0FP37Hosi1216syasou2ui15classes_2einner("window-latch", [{ _0: "latch-open", _1: _window_open }])), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", _window_open ? "窓を閉める" : "窓をひらく"), _M0FP37Hosi1216syasou2ui1pGbE("aria-pressed", _window_open), _M0FP37Hosi1216syasou2ui1pGbE("aria-hidden", _at_window), _M0FP37Hosi1216syasou2ui1pGsE("onClick", () => {
    _set_window(!_window_open);
  }), _M0FP37Hosi1216syasou2ui1pGsE("title", _window_open ? "窓を閉める" : "窓をひらく"), _M0FP37Hosi1216syasou2ui1pGiE("tabIndex", _at_window ? -1 : 0)], [_M0FP37Hosi1216syasou2ui4node("span", [_M0FP37Hosi1216syasou2ui1pGsE("className", "latch-plate"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")], [_M0FP37Hosi1216syasou2ui4node("i", [], []), _M0FP37Hosi1216syasou2ui4node("i", [], [])]), _M0FP37Hosi1216syasou2ui4node("span", [_M0FP37Hosi1216syasou2ui1pGsE("className", "latch-handle"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")], [])])]);
  const _tmp$8 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "book-location"), _M0FP37Hosi1216syasou2ui1pGbE("inert", _at_window || outside), _M0FP37Hosi1216syasou2ui1pGbE("aria-hidden", _at_window || outside)];
  const _bind$19 = _notebook_open && (!tray_open && (!props.covered && !_guide_open));
  const _bind$20 = tray_open || (props.covered || _guide_open);
  const _bind$21 = (open) => {
    _set_notebook(open);
    _set_focus_pocket(false);
    _M0MP37Hosi1216syasou4view11MotionValue3set(look_target_x, 0);
    _M0MP37Hosi1216syasou4view11MotionValue3set(look_target_y, 0);
  };
  const _bind$22 = () => {
    _set_notebook(false);
    _set_archive(true);
  };
  const _tmp$9 = _M0FP37Hosi1216syasou2ui4node("div", _tmp$8, [_M0FP37Hosi1216syasou2ui8notebook(new _M0TP37Hosi1216syasou2ui13NotebookProps(_bind$19, _bind$20, _bind$21, travel, board, resume_journey, sound, _note, _set_note, _bind$22, _focus_pocket))]);
  const _tmp$10 = _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "world-corners")], [_M0FP37Hosi1216syasou2ui12view__picker(_view, choose_view), outside ? _M0FP37Hosi1216syasou2ui4node("button", [_M0FP37Hosi1216syasou2ui1pGsE("className", "corner-action"), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", "旅の手帳を開く"), _M0FP37Hosi1216syasou2ui1pGsE("title", "手帳をひらく"), _M0FP37Hosi1216syasou2ui1pGsE("onClick", () => {
    const _p$12 = previous_view.current;
    let _tmp$11;
    if (_p$12 === undefined) {
      _tmp$11 = $panic();
    } else {
      const _p$13 = _p$12;
      _tmp$11 = _p$13;
    }
    _set_view(_tmp$11);
    _set_at_window(false);
    _set_notebook(true);
  })], [_M0FP37Hosi1216syasou2ui12icon_2einner("NotebookPen", 18, 1, false)]) : _M0DTP37Hosi1216syasou4view7Element5Blank__, _M0FP37Hosi1216syasou2ui4node("button", [_M0FP37Hosi1216syasou2ui1pGsE("className", "corner-action"), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", "タイトルに戻る"), _M0FP37Hosi1216syasou2ui1pGsE("onClick", props.onShowOpening), _M0FP37Hosi1216syasou2ui1pGsE("title", "タイトルへ")], [_M0FP37Hosi1216syasou2ui4node("span", [_M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("style", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGiE("width", 24), _M0FP37Hosi1216syasou2ui1pGiE("height", 24)]))], [_M0FP37Hosi1216syasou2ui18rail__mark_2einner(1)])]), _M0FP37Hosi1216syasou2ui4node("button", [_M0FP37Hosi1216syasou2ui1pGsE("className", "corner-action"), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", "使い方を見る"), _M0FP37Hosi1216syasou2ui1pGsE("onClick", show_guide), _M0FP37Hosi1216syasou2ui1pGsE("title", "旅のしおり")], [_M0FP37Hosi1216syasou2ui12icon_2einner("BookOpen", 18, 1, false)]), _at_window || outside ? _M0FP37Hosi1216syasou2ui4node("button", [_M0FP37Hosi1216syasou2ui1pGsE("className", "corner-action"), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", "座席に戻る"), _M0FP37Hosi1216syasou2ui1pGsE("onClick", leave_window), _M0FP37Hosi1216syasou2ui1pGsE("title", "座席に戻る")], [_M0FP37Hosi1216syasou2ui12icon_2einner("ArrowLeft", 19, 1, false)]) : _M0DTP37Hosi1216syasou4view7Element5Blank__, supports_fullscreen ? _M0FP37Hosi1216syasou2ui4node("button", [_M0FP37Hosi1216syasou2ui1pGsE("className", "corner-action"), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", _fullscreen ? "全画面を終了" : "全画面で見る"), _M0FP37Hosi1216syasou2ui1pGbE("aria-pressed", _fullscreen), _M0FP37Hosi1216syasou2ui1pGsE("onClick", toggle_fullscreen), _M0FP37Hosi1216syasou2ui1pGsE("title", _fullscreen ? "全画面を終了" : "全画面で見る")], [_M0FP37Hosi1216syasou2ui12icon_2einner(_fullscreen ? "Minimize" : "Maximize", 18, 1, false)]) : _M0DTP37Hosi1216syasou4view7Element5Blank__]);
  let _tmp$11;
  const _p$12 = "";
  if (!(_fullscreen_error === _p$12)) {
    _tmp$11 = _M0FP37Hosi1216syasou2ui4node("p", [_M0FP37Hosi1216syasou2ui1pGsE("className", "world-error"), _M0FP37Hosi1216syasou2ui1pGsE("role", "alert")], [new _M0DTP37Hosi1216syasou4view7Element4Text(_fullscreen_error)]);
  } else {
    _tmp$11 = _M0DTP37Hosi1216syasou4view7Element5Blank__;
  }
  const _tmp$12 = _tmp$11;
  let _tmp$13;
  let _tmp$14;
  const _p$13 = sound.error;
  const _p$14 = "";
  if (!(_p$13 === _p$14)) {
    _tmp$14 = !_notebook_open;
  } else {
    _tmp$14 = false;
  }
  if (_tmp$14) {
    const _tmp$15 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "world-error"), _M0FP37Hosi1216syasou2ui1pGsE("role", "alert")];
    const _p$15 = sound.error;
    _tmp$13 = _M0FP37Hosi1216syasou2ui4node("p", _tmp$15, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$15)]);
  } else {
    _tmp$13 = _M0DTP37Hosi1216syasou4view7Element5Blank__;
  }
  return _M0FP37Hosi1216syasou2ui7foreign("motion", "MotionConfig", _tmp$2, [_M0FP37Hosi1216syasou2ui4node("main", _tmp$3, [_tmp$5, _tmp$6, _tmp$7, _tmp$9, _tmp$10, _tmp$12, _tmp$13, _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "sr-only"), _M0FP37Hosi1216syasou2ui1pGsE("role", "status"), _M0FP37Hosi1216syasou2ui1pGsE("aria-live", "polite")], [new _M0DTP37Hosi1216syasou4view7Element4Text(_announcement)]), _guide_open && (!props.covered && !tray_open) ? _M0FP37Hosi1216syasou2ui10onboarding(new _M0TP37Hosi1216syasou2ui10GuideProps(_guide_step, (step) => {
    _set_guide_step(step);
    _set_at_window(step === 1);
  }, () => {
    _M0FP37Hosi1216syasou2ui3appN13finish__guideS55(_env, true);
  }, () => {
    _M0FP37Hosi1216syasou2ui3appN13finish__guideS55(_env, false);
  })) : _M0DTP37Hosi1216syasou4view7Element5Blank__, tray_open && !props.covered ? _M0FP37Hosi1216syasou2ui12ticket__tray(new _M0TP37Hosi1216syasou2ui9TrayProps(travel.tickets, travel.pending, travel.save_error, travel.edit, () => {
    const _p$15 = travel.tickets;
    let welcome;
    let _p$16;
    _L: {
      _L$2: {
        const _p$17 = _p$15.length;
        let _tmp$15 = 0;
        while (true) {
          const _p$18 = _tmp$15;
          if (_p$18 < _p$17) {
            const _p$19 = _p$15[_p$18];
            if (_M0IPC16option6OptionPB2Eq5equalGsE(_p$19.id, travel.pending) && _M0IPC16option6OptionPB2Eq5equalGsE(_p$19.kind, _M0FP37Hosi1216syasou2ui3appN6constrS1444)) {
              _p$16 = true;
              break _L$2;
            }
            _tmp$15 = _p$18 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        welcome = false;
        break _L;
      }
      welcome = _p$16;
    }
    const _bind$23 = travel.pending;
    const return_to_book = _bind$23 === undefined ? true : welcome;
    if (welcome) {
      _M0FP37Hosi1216syasou2ui17save__guide__done();
    }
    const _func = travel.acknowledge;
    _func();
    _set_archive(false);
    _set_at_window(false);
    _M0FP37Hosi1216syasou2ui6updateGsE(_set_view, (current) => {
      if (current === "train") {
        const _p$17 = previous_view.current;
        if (_p$17 === undefined) {
          return $panic();
        } else {
          const _p$18 = _p$17;
          return _p$18;
        }
      } else {
        return current;
      }
    });
    _set_notebook(return_to_book);
    _set_focus_pocket(welcome);
    _M0MP37Hosi1216syasou4view11MotionValue3set(look_target_x, 0);
    _M0MP37Hosi1216syasou4view11MotionValue3set(look_target_y, 0);
  })) : _M0DTP37Hosi1216syasou4view7Element5Blank__])]);
}
function _M0FP37Hosi1216syasou9ui__world3app(props) {
  return _M0FP37Hosi1216syasou2ui3app(props);
}
function _M0FP37Hosi1216syasou9ui__world11prepare__ui() {
  return _M0FP37Hosi1216syasou2ui11prepare__ui();
}
export { _M0FP37Hosi1216syasou9ui__world3app as App, _M0FP37Hosi1216syasou9ui__world11prepare__ui as prepareUi }
