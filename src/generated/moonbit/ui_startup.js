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
function _M0TPB4IterGsE(param0, param1) {
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
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
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
function _M0TPB9ArrayViewGRP37Hosi1216syasou4view7ElementE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function _M0TPB3MapGsWRP26mizchi8js__core3AnyEuE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGsWRP26mizchi8js__core3AnyEuE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGssE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGiWdEuE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB8MutLocalGORPB5EntryGsWRP26mizchi8js__core3AnyEuEE(param0) {
  this.val = param0;
}
function _M0TPB4IterGURP26mizchi8js__core3AnyRP26mizchi8js__core3AnyEE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
const _M0MPB7JSArray4copy = (arr) => arr.slice(0);
const _M0MPB7JSArray11set__length = (arr, len) => { arr.length = len; };
function _M0TPB12MutArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16option6OptionGRP36mizchi11js__browser3dom4NodeE4None() {}
_M0DTPC16option6OptionGRP36mizchi11js__browser3dom4NodeE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP36mizchi11js__browser3dom4NodeE4None__ = new _M0DTPC16option6OptionGRP36mizchi11js__browser3dom4NodeE4None();
function _M0DTPC16option6OptionGRP36mizchi11js__browser3dom4NodeE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP36mizchi11js__browser3dom4NodeE4Some.prototype.$tag = 1;
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPC13ref3RefGbE(param0) {
  this.val = param0;
}
const _M0FP26mizchi8js__core9undefined = () => undefined;
const _M0MP26mizchi8js__core3Any5__get = (obj, key) => obj[key];
const _M0FP26mizchi8js__core21ffi__promise__resolve = (value) => Promise.resolve(value);
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
function _M0DTPC16result6ResultGORP26mizchi8js__core3AnyRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORP26mizchi8js__core3AnyRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORP26mizchi8js__core3AnyRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORP26mizchi8js__core3AnyRPC15error5ErrorE2Ok.prototype.$tag = 1;
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
const _M0MP26mizchi8js__core3Any5__set = (obj, key, value) => { obj[key] = value };
const _M0FP26mizchi8js__core3new = (cls, args) => new cls(...args);
const _M0FP26mizchi8js__core12global__this = () => globalThis;
const _M0FP26mizchi8js__core4null = () => null;
const _M0FP26mizchi8js__core13is__undefined = (v) => v === undefined;
const _M0FP26mizchi8js__core11new__object = () => ({});
const _M0FP26mizchi8js__core14object__assign = (target, source) => Object.assign(target, source);
const _M0FP26mizchi8js__core18ffi__from__entries = (entries) => Object.fromEntries(entries.map(e => [e._0, e._1]));
function _M0TPB9ArrayViewGUsRP26mizchi8js__core3AnyEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0MP26mizchi8js__core3Any10to__string = (self) => self == null ? String(self) : self.toString();
function _M0DTPC16option6OptionGRP36mizchi11js__browser3dom7ElementE4None() {}
_M0DTPC16option6OptionGRP36mizchi11js__browser3dom7ElementE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP36mizchi11js__browser3dom7ElementE4None__ = new _M0DTPC16option6OptionGRP36mizchi11js__browser3dom7ElementE4None();
function _M0DTPC16option6OptionGRP36mizchi11js__browser3dom7ElementE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP36mizchi11js__browser3dom7ElementE4Some.prototype.$tag = 1;
const _M0FP36mizchi11js__builtin6global10globalThis = () => globalThis;
const _M0FP36mizchi11js__browser3dom6window = () => window;
const _M0FP36mizchi11js__browser3dom8document = () => document;
const _M0MP36mizchi11js__browser3dom8Document13createElement = (self, tag) => self.createElement(tag);
const _M0MP36mizchi11js__browser3dom8Document15createElementNs = (self, namespaceURI, qualifiedName) => self.createElementNS(namespaceURI, qualifiedName);
const _M0MP36mizchi11js__browser3dom8Document14createTextNode = (self, data) => self.createTextNode(data);
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
const _M0FP36mizchi11js__browser7storage14sessionStorage = () => sessionStorage;
const _M0MP36mizchi11js__browser7storage7Storage7getItem = (storage, key) => storage.getItem(key) ?? undefined;
const _M0MP36mizchi11js__browser7storage7Storage7setItem = (storage, key, value) => {
  storage.setItem(key, value);
};
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
const _M0FP37Hosi1216syasou4view7attempt = (run,onError) => {try {run()} catch {onError()}};
const _M0FP37Hosi1216syasou4view7guarded = (run,onError) => {try {run()} catch (error) {onError();throw error}};
function _M0TP37Hosi1216syasou4view5Scope(param0, param1, param2) {
  this.slots = param0;
  this.cursor = param1;
  this.alive = param2;
}
const _M0FP37Hosi1216syasou4view10clear__ref = (reference,node) => {if(reference._node===node){reference._assign(undefined);reference._node=undefined}};
const _M0FP37Hosi1216syasou4view16remove__listener = (node,name,listener,capture) => node.removeEventListener(name,listener,capture);
const _M0MP37Hosi1216syasou4view9Animation6cancel = animation => animation.cancel();
const _M0FP37Hosi1216syasou4view15shared__runtime = initial => globalThis[Symbol.for('syasou.view.runtime')] ??= initial;
const _M0FP37Hosi1216syasou4view10body__node = () => document.body;
const _M0FP37Hosi1216syasou4view12active__node = () => document.activeElement;
const _M0FP37Hosi1216syasou4view13add__listener = (node,name,listener,capture) => node.addEventListener(name,listener,capture);
const _M0FP37Hosi1216syasou4view4kind = value => typeof value;
const _M0FP37Hosi1216syasou4view12close__modal = node => node.close();
const _M0FP37Hosi1216syasou4view9connected = node => node.isConnected;
const _M0FP37Hosi1216syasou4view8contains = (parent,node) => parent.contains(node);
const _M0FP37Hosi1216syasou4view13custom__event = name => new Event(name,{cancelable:true});
const _M0FP37Hosi1216syasou4view10event__key = event => event.key;
const _M0FP37Hosi1216syasou4view13event__target = event => event.target;
const _M0FP37Hosi1216syasou4view11focus__node = node => node.focus({preventScroll:true});
const _M0FP37Hosi1216syasou4view10query__all = (node,selector) => Array.from(node.querySelectorAll(selector));
const _M0FP37Hosi1216syasou4view8tabbable = node => !node.disabled && !node.closest('[inert],[aria-hidden="true"]') && node.getClientRects().length>0 && node.tabIndex>=0;
const _M0FP37Hosi1216syasou4view10pointer__x = event => event.clientX;
const _M0FP37Hosi1216syasou4view10pointer__y = event => event.clientY;
const _M0FP37Hosi1216syasou4view7prevent = event => event.preventDefault();
const _M0FP37Hosi1216syasou4view9prevented = event => event.defaultPrevented;
const _M0FP37Hosi1216syasou4view5queue = run => queueMicrotask(run);
const _M0FP37Hosi1216syasou4view4rect = node => node.getBoundingClientRect();
const _M0FP37Hosi1216syasou4view5shift = event => event.shiftKey;
const _M0FP37Hosi1216syasou4view11show__modal = node => node.showModal();
const _M0FP37Hosi1216syasou4view4stop = event => event.stopPropagation();
const _M0FP37Hosi1216syasou4view15style__property = (node,name,value) => node.style.setProperty(name,value);
const _M0FP37Hosi1216syasou4view7animate = (node,from,to,duration,delay,easing,done) => {const a=node.animate([from,to],{duration,delay,easing,fill:'backwards'});a.onfinish=done;return a};
const _M0FP37Hosi1216syasou4view14current__style = (node,names) => {const style=getComputedStyle(node);return Object.fromEntries(names.map(name=>[name,style.getPropertyValue(name)]))};
const _M0FP37Hosi1216syasou4view4keys = value => Object.keys(value);
function _M0TPB9ArrayViewGUssEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0FP37Hosi1216syasou4view4bool = value => Boolean(value);
const _M0FP37Hosi1216syasou4view13register__ref = (reference,assign) => {reference._assign=assign};
function _M0TP37Hosi1216syasou4view7ViewRefGRP36mizchi11js__browser3dom4NodeE(param0) {
  this.current = param0;
}
function _M0TP37Hosi1216syasou4view7ViewRefGRP36mizchi11js__browser3dom17HTMLCanvasElementE(param0) {
  this.current = param0;
}
const _M0FP37Hosi1216syasou4view15current__target = event => event.currentTarget;
function _M0TP37Hosi1216syasou4view7Context(param0, param1) {
  this.panel = param0;
  this.toggle = param1;
}
function _M0TP37Hosi1216syasou4view6Toggle(param0, param1) {
  this.value = param0;
  this.props = param1;
}
function _M0TP37Hosi1216syasou4view5Panel(param0, param1, param2, param3, param4) {
  this.id = param0;
  this.modal = param1;
  this.open = param2;
  this.props = param3;
  this.trigger = param4;
}
const _M0FP37Hosi1216syasou4view15render__finally = (run,cleanup) => {try {return run()} finally {cleanup()}};
const _M0FP37Hosi1216syasou4view9set__text = (node,text) => {if(node.data!==text)node.data=text};
const _M0FP37Hosi1216syasou4view11assign__ref = (reference,value) => {reference._assign(value);reference._node=value};
const _M0FP37Hosi1216syasou4view13remove__style = (node,name) => {node.style.removeProperty(name)};
function _M0DTPC16option6OptionGRP37Hosi1216syasou4view9AnimationE4None() {}
_M0DTPC16option6OptionGRP37Hosi1216syasou4view9AnimationE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP37Hosi1216syasou4view9AnimationE4None__ = new _M0DTPC16option6OptionGRP37Hosi1216syasou4view9AnimationE4None();
function _M0DTPC16option6OptionGRP37Hosi1216syasou4view9AnimationE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP37Hosi1216syasou4view9AnimationE4Some.prototype.$tag = 1;
const _M0FP37Hosi1216syasou4view8property = (node,name,value) => {if(node[name]!==value)node[name]=value};
function _M0TP37Hosi1216syasou4view7Mounted(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13, param14, param15, param16, param17, param18) {
  this.tree = param0;
  this.parent = param1;
  this.first = param2;
  this.last = param3;
  this.children = param4;
  this.scope = param5;
  this.props = param6;
  this.listeners = param7;
  this.context = param8;
  this.exiting = param9;
  this.failed = param10;
  this.style_names = param11;
  this.cleanup = param12;
  this.motion_cleanup = param13;
  this.animation = param14;
  this.target_style = param15;
  this.id = param16;
  this.panel = param17;
  this.svg = param18;
}
function _M0TPB9ArrayViewGUsWRP26mizchi8js__core3AnyEuEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP37Hosi1216syasou4view4Slot(param0, param1, param2, param3) {
  this.value = param0;
  this.deps = param1;
  this.cleanup = param2;
  this.generation = param3;
}
const _M0FP37Hosi1216syasou4view14attach__setter = (setter,slot) => {setter[Symbol.for('syasou.view.state')]=slot};
const _M0FP37Hosi1216syasou4view12setter__slot = setter => setter[Symbol.for('syasou.view.state')];
const _M0FP37Hosi1216syasou2ui11root__class = (name,enabled) => {document.documentElement.classList.toggle(name,enabled)};
const _M0FP37Hosi1216syasou2ui6hidden = () => document.hidden;
const _M0FP37Hosi1216syasou2ui5focus = node => node.focus({preventScroll:true});
const _M0FP37Hosi1216syasou2ui11load__world = () => import('../../App.tsx');
const _M0FP37Hosi1216syasou2ui10font__load = (font, sample) => document.fonts.load(font, sample).then(() => {});
const _M0FP37Hosi1216syasou2ui16location__search = () => window.location.search;
const _M0FP37Hosi1216syasou2ui13image__decode = source => { const image = new Image(); image.src = source; return image.decode(); };
function _M0DTPC16option6OptionGRP37Hosi1216syasou2ui14WindowRendererE4None() {}
_M0DTPC16option6OptionGRP37Hosi1216syasou2ui14WindowRendererE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP37Hosi1216syasou2ui14WindowRendererE4None__ = new _M0DTPC16option6OptionGRP37Hosi1216syasou2ui14WindowRendererE4None();
function _M0DTPC16option6OptionGRP37Hosi1216syasou2ui14WindowRendererE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP37Hosi1216syasou2ui14WindowRendererE4Some.prototype.$tag = 1;
const _M0FP37Hosi1216syasou2ui6reload = () => location.reload();
function _M0TP37Hosi1216syasou2ui14LandscapeProps(param0, param1, param2, param3, param4) {
  this.scene = param0;
  this.speed = param1;
  this.moving = param2;
  this.windowOpen = param3;
  this.travelling = param4;
}
function _M0DTP37Hosi1216syasou2ui44_24Hosi121_2fsyasou_2fui_2esettle__resourcesL5State8State__0(param0) {
  this._0 = param0;
}
_M0DTP37Hosi1216syasou2ui44_24Hosi121_2fsyasou_2fui_2esettle__resourcesL5State8State__0.prototype.$tag = 0;
function _M0DTP37Hosi1216syasou2ui59_24Hosi121_2fsyasou_2fui_2estartup_2elambda_2elambda_2f1263L5State8State__0(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
_M0DTP37Hosi1216syasou2ui59_24Hosi121_2fsyasou_2fui_2estartup_2elambda_2elambda_2f1263L5State8State__0.prototype.$tag = 0;
function _M0DTP37Hosi1216syasou2ui59_24Hosi121_2fsyasou_2fui_2estartup_2elambda_2elambda_2f1263L5State12_2atry_2f891(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
_M0DTP37Hosi1216syasou2ui59_24Hosi121_2fsyasou_2fui_2estartup_2elambda_2elambda_2f1263L5State12_2atry_2f891.prototype.$tag = 1;
function _M0DTP37Hosi1216syasou2ui59_24Hosi121_2fsyasou_2fui_2estartup_2elambda_2elambda_2f1237L5State12_2atry_2f886(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP37Hosi1216syasou2ui59_24Hosi121_2fsyasou_2fui_2estartup_2elambda_2elambda_2f1237L5State12_2atry_2f886.prototype.$tag = 0;
function _M0DTP37Hosi1216syasou2ui59_24Hosi121_2fsyasou_2fui_2estartup_2elambda_2elambda_2f1237L5State8State__1(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP37Hosi1216syasou2ui59_24Hosi121_2fsyasou_2fui_2estartup_2elambda_2elambda_2f1237L5State8State__1.prototype.$tag = 1;
function _M0TP37Hosi1216syasou2ui8AppProps(param0, param1, param2, param3) {
  this.covered = param0;
  this.guideRequest = param1;
  this.onReady = param2;
  this.onShowOpening = param3;
}
function _M0TP37Hosi1216syasou2ui12OpeningProps(param0, param1, param2, param3, param4, param5) {
  this.ready = param0;
  this.leaving = param1;
  this.failed = param2;
  this.on_enter = param3;
  this.on_guide = param4;
  this.on_complete = param5;
}
function _M0DTP37Hosi1216syasou2ui48_24Hosi121_2fsyasou_2fui_2estart_2elambda_2f1291L5State8State__0(param0) {
  this._0 = param0;
}
_M0DTP37Hosi1216syasou2ui48_24Hosi121_2fsyasou_2fui_2estart_2elambda_2f1291L5State8State__0.prototype.$tag = 0;
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
const _M0MPB4Iter4nextN6constrS9918GsE = 0;
const _M0MPB4Iter4nextN6constrS9919GsE = 0;
const _M0MPB4Iter4nextN6constrS9918GRP26mizchi8js__core3AnyE = 0;
const _M0MPB4Iter4nextN6constrS9919GRP26mizchi8js__core3AnyE = 0;
const _M0MPB4Iter3newN6constrS9926GsE = 0;
const _M0MPB4Iter3newN6constrS9926GRP26mizchi8js__core3AnyE = 0;
const _M0FP37Hosi1216syasou7browser16fragment__source = "\nprecision highp float;\nuniform vec2 u_resolution;\nuniform float u_time;\nuniform float u_travel;\nuniform float u_scene;\nfloat hash(vec2 p) {\n  vec3 q = fract(vec3(p.xyx) * .1031);\n  q += dot(q, q.yzx + 33.33);\n  return fract((q.x + q.y) * q.z);\n}\nfloat noise(float x) {\n  float i = floor(x);\n  float f = fract(x);\n  f = f * f * (3.0 - 2.0 * f);\n  return mix(hash(vec2(i, 19.0)), hash(vec2(i + 1.0, 19.0)), f);\n}\nfloat ridge(float x) {\n  return noise(x) * .64 + noise(x * 2.13 + 8.0) * .25\n       + noise(x * 5.37 + 30.0) * .085 + noise(x * 13.1) * .025;\n}\nfloat below(float y, float height, float softness) {\n  return 1.0 - smoothstep(height - softness, height + softness, y);\n}\n// Uneven tiers and individual heights keep the conifers from reading as a pattern.\nfloat forest(vec2 p, float spacing, float height, float seed, float softness) {\n  float cell = floor(p.x / spacing);\n  float shape = 0.0;\n  for (int i = -1; i <= 1; i++) {\n    float id = cell + float(i);\n    float random = hash(vec2(id, seed));\n    float center = (id + .25 + random * .5) * spacing;\n    float h = height * (.48 + .65 * hash(vec2(id, seed + 7.0)));\n    float base = -.015 + .035 * noise(id * .41 + seed);\n    float y = (p.y - base) / h;\n    float localX = p.x - center + y * y * h * (random - .5) * .055;\n    float width = h * .19 * pow(max(0.0, 1.0 - y), .95);\n    float branches = .80 + .16 * sin(y * (72.0 + random * 27.0) + random * 9.0 + sign(localX) * 1.6)\n                         + .04 * sin(y * 231.0 + random * 11.0);\n    float crown = (1.0 - smoothstep(width * branches - softness, width * branches + softness, abs(localX)))\n                * smoothstep(-.03, .06, y) * (1.0 - smoothstep(.97, 1.0, y));\n    float trunk = (1.0 - smoothstep(h * .012, h * .012 + softness, abs(p.x - center)))\n                * below(p.y, base + h * .8, softness) * smoothstep(-.07, base, p.y);\n    shape = max(shape, max(crown, trunk));\n  }\n  return shape;\n}\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / u_resolution;\n  float aspect = u_resolution.x / u_resolution.y;\n  float x = uv.x * aspect;\n  float t = u_time;\n  float y = uv.y;\n  float value = mix(.81, .975, smoothstep(.35, 1.0, y));\n  float cloud = noise(x * 2.1 + t * .008 + y * 3.0) * noise(y * 9.0 + x * .3);\n  value -= cloud * .045;\n\n  // The far ridges remain almost still while the nearer slopes slide past them.\n  float farX = x + t * .012;\n  float farRidge = .50 + .30 * ridge(farX * 1.7 + 12.0);\n  float farTone = .64 + .11 * (1.0 - smoothstep(.46, .77, y));\n  value = mix(value, farTone, below(y, farRidge, .005));\n\n  float hillX = x + t * .032;\n  float hillRidge = .40 + .28 * ridge(hillX * 2.0 + 35.0);\n  float hillTone = .43 + .22 * (1.0 - smoothstep(.37, .64, y));\n  hillTone += (noise(hillX * 22.0 + y * 5.0) - .5) * .028;\n  value = mix(value, hillTone, below(y, hillRidge, .003));\n\n  float woodX = x + t * .085;\n  float woodRidge = .30 + .18 * ridge(woodX * 2.8 + 71.0);\n  float woods = forest(vec2(woodX, y - woodRidge), .027, .063, 4.0, .0018);\n  float woodTone = .28 + .22 * (1.0 - smoothstep(.27, .48, y));\n  value = mix(value, woodTone, max(woods, below(y, woodRidge, .003)));\n\n  // A pale valley separates the near trees from the mountains without a hard horizon.\n  float fog = exp(-pow((y - .335) / .075, 2.0));\n  value = mix(value, .76, fog * .64);\n  float fieldX = x + t * .15;\n  float field = .20 + .10 * ridge(fieldX * 2.3 + 5.0);\n  float fieldTone = .40 + .14 * noise(fieldX * 3.0 + y * 12.0);\n  value = mix(value, fieldTone, below(y, field, .012));\n\n  float nearX = x + t * .24;\n  float nearBase = .11 + .075 * ridge(nearX * 2.4 + 6.0);\n  float nearTrees = forest(vec2(nearX, y - nearBase), .10, .20, 23.0, .0017);\n  value = mix(value, .16 + y * .16, nearTrees * .94);\n  value = mix(value, .16, below(y, nearBase, .008));\n\n  // Sparse close trees cross the window in seconds; their edges soften with motion.\n  float closeX = x + t * .62;\n  float closeBase = -.035 + .055 * ridge(closeX * 1.8 + 9.0);\n  float closeTrees = forest(vec2(closeX, y - closeBase), .73, .49, 51.0, .0035);\n  value = mix(value, .052 + y * .065, closeTrees);\n  float bank = .045 + .035 * ridge(closeX * 4.0);\n  value = mix(value, .055, below(y, bank, .012));\n\n  if (u_scene > .5 && u_scene < 1.5) value = mix(value, 1.0, .16);\n  if (u_scene > 1.5) value = value * .37 + .01;\n  float cycle = mod(u_travel, 240.0);\n  float tunnel = smoothstep(211.0, 215.0, cycle) * (1.0 - smoothstep(223.0, 229.0, cycle));\n  float light = smoothstep(224.0, 228.0, cycle) * (1.0 - smoothstep(228.0, 236.0, cycle));\n  value = mix(value, .018, tunnel);\n  value = mix(value, .985, light * .88);\n  value = clamp(value, .018, .974);\n  vec2 pixel = floor(gl_FragCoord.xy);\n  float random = hash(pixel);\n  float fleck = smoothstep(random - .045, random + .045, value);\n  float tone = mix(value, fleck, .82);\n  tone += (hash(pixel + 173.0) - .5) * .07;\n  gl_FragColor = vec4(vec3(clamp(tone, .015, .985)), 1.0);\n}\n";
const _M0FP37Hosi1216syasou7browser14vertex__source = "\nattribute vec2 a_position;\nvoid main() { gl_Position = vec4(a_position, 0.0, 1.0); }\n";
const _M0FP37Hosi1216syasou4view11event__nameN7_2abindS565 = "Capture";
const _M0FP37Hosi1216syasou4view10css__valueN7_2abindS682 = "--";
const _M0FP37Hosi1216syasou4view16transform__valueN7_2abindS683 = "rotate";
const _M0FP37Hosi1216syasou4view16transform__valueN7_2abindS684 = "skew";
const _M0FP37Hosi1216syasou4view16transform__valueN7_2abindS685 = "scale";
const _M0FP37Hosi1216syasou4view10style__mapN7_2abindS699 = " ";
const _M0FP37Hosi1216syasou4view16style__signatureN7_2abindS755 = ";";
const _M0FP37Hosi1216syasou4view13update__propsN7_2abindS836 = "on";
const _M0FP37Hosi1216syasou4view13update__propsN7_2abindS842 = "on";
const _M0FP37Hosi1216syasou4view13update__propsN7_2abindS848 = "aria-";
const _M0FP37Hosi1216syasou4view13update__propsN7_2abindS849 = "data-";
const _M0FP37Hosi1216syasou2ui15classes_2einnerN7_2abindS675 = " ";
const _M0FP37Hosi1216syasou2ui17fallback__sceneryN5hillsS125 = "M0 360 C130 340 170 210 310 250 S490 430 660 350 S880 170 1030 290 S1140 350 1200 360 V900 H0Z";
const _M0FP37Hosi1216syasou2ui17fallback__sceneryN6slopesS126 = "M0 540 C130 600 200 400 350 440 S580 660 740 520 S1030 430 1200 540 V900 H0Z";
const _M0FP37Hosi1216syasou6bridge16is__demo__searchN6constrS235 = "1";
const _M0FP37Hosi1216syasou2ui4demo = _M0FP37Hosi1216syasou6bridge16is__demo__search(_M0FP37Hosi1216syasou2ui16location__search());
const _M0FP37Hosi1216syasou4view7runtime = _M0FP37Hosi1216syasou4view15shared__runtime(new _M0TP37Hosi1216syasou4view7Runtime(undefined, () => {
}, [], 0));
const _M0FP37Hosi1216syasou7browser16create__rendererN6recordS214 = new _M0TP37Hosi1216syasou5webgl14ContextOptions(false, false, false, true);
const _M0FP37Hosi1216syasou7browser16create__rendererN6recordS215 = new _M0TP37Hosi1216syasou6domain9Landscape("mist", "local", true, false);
const _M0FP37Hosi1216syasou2ui12has__enteredN6constrS1434 = "1";
const _M0FPB4seed = _M0FPB12random__seed();
function _M0FPB13consume4__acc(acc, input) {
  const _p = (acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0;
  const _p$2 = 17;
  return Math.imul(_p << _p$2 | (_p >>> (32 - _p$2 | 0) | 0), 668265263) | 0;
}
function _M0MPB13StringBuilder13write__objectGiE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGiE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGdE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGdE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGsE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGsE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
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
function _M0IP016_24default__implPB2Eq10not__equalGOsE(x, y) {
  return !_M0IPC16option6OptionPB2Eq5equalGsE(x, y);
}
function _M0IP016_24default__implPB7Compare6op__ltGsE(x, y) {
  return _M0IPC16string6StringPB7Compare7compare(x, y) < 0;
}
function _M0IP016_24default__implPB7Compare6op__gtGsE(x, y) {
  return _M0IPC16string6StringPB7Compare7compare(x, y) > 0;
}
function _M0IP016_24default__implPB7Compare6op__geGsE(x, y) {
  return _M0IPC16string6StringPB7Compare7compare(x, y) >= 0;
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
function _M0IP016_24default__implPB4Show6outputGiE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC13int3IntPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGdE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16double6DoublePB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGsE(self, logger) {
  logger.method_table.method_0(logger.self, self);
}
function _M0MPB4Iter4nextGsE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9919GsE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9918GsE;
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
function _M0MPB4Iter3newGsE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9926GsE;
  }
  return new _M0TPB4IterGsE(f, size_hint$2);
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
function _M0MPC16string6String20unsafe__range__equal(self, self_off, other, other_off, len) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      const _p = self.charCodeAt(self_off + i | 0);
      const _p$2 = other.charCodeAt(other_off + i | 0);
      if (_p === _p$2) {
      } else {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
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
function _M0MPC16string10StringView11has__suffix(self, str) {
  const self_len = self.end - self.start | 0;
  const str_len = str.end - str.start | 0;
  if (str_len <= self_len) {
    const start = self_len - str_len | 0;
    let _tmp;
    if (str_len === 0) {
      _tmp = true;
    } else {
      const _p = self.str.charCodeAt(self.start + start | 0);
      const _p$2 = str.str.charCodeAt(str.start);
      _tmp = _p === _p$2;
    }
    if (_tmp) {
      return _M0MPC16string6String20unsafe__range__equal(self.str, self.start + start | 0, str.str, str.start, str_len);
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function _M0MPC16string6String11has__suffix(self, str) {
  return _M0MPC16string10StringView11has__suffix(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC16string10StringView11has__prefix(self, str) {
  const str_len = str.end - str.start | 0;
  if (str_len <= (self.end - self.start | 0)) {
    let _tmp;
    if (str_len === 0) {
      _tmp = true;
    } else {
      const _p = self.str.charCodeAt(self.start);
      const _p$2 = str.str.charCodeAt(str.start);
      _tmp = _p === _p$2;
    }
    if (_tmp) {
      return _M0MPC16string6String20unsafe__range__equal(self.str, self.start, str.str, str.start, str_len);
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function _M0MPC16string6String11has__prefix(self, str) {
  return _M0MPC16string10StringView11has__prefix(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC15array5Array4pushGRP37Hosi1216syasou4view7MountedE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGRP36mizchi11js__browser3dom4NodeE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPB4Iter9to__arrayGsE(self) {
  const _bind = self.size_hint;
  let result;
  if (_bind === undefined) {
    result = [];
  } else {
    result = [];
  }
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGsE(self);
    if (_bind$2 === undefined) {
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      _M0MPC15array5Array4pushGRP37Hosi1216syasou4view7MountedE(result, _x);
      continue;
    }
  }
  return result;
}
function _M0MPC14char4Char20is__ascii__uppercase(self) {
  return self >= 65 && self <= 90;
}
function _M0MPC16string6String9to__lower(self) {
  const _bind = _M0MPC16string6String8find__by(self, (c) => _M0MPC14char4Char20is__ascii__uppercase(c));
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
        if (_M0MPC14char4Char20is__ascii__uppercase(_decoded_char)) {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char + 32 | 0);
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
function _M0IPC16string6StringPB7Compare7compare(self, other) {
  const len = self.length;
  const _bind = $compare_int(len, other.length);
  if (_bind === 0) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _p = self.charCodeAt(i);
        const _p$2 = other.charCodeAt(i);
        const order = $compare_int(_p, _p$2);
        if (order !== 0) {
          return order;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return 0;
  } else {
    return _bind;
  }
}
function _M0IPC13int3IntPB4Show10to__string(self) {
  return _M0MPC13int3Int18to__string_2einner(self, 10);
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
function _M0MPC15array9ArrayView4iterGRP37Hosi1216syasou4view7ElementE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.end - self.start | 0;
  return _M0MPB4Iter3newGsE(() => {
    if (i.val < len) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return undefined;
    }
  }, len);
}
function _M0MPC15array5Array4iterGRP26mizchi8js__core3AnyE(self) {
  return _M0MPC15array9ArrayView4iterGRP26mizchi8js__core3AnyE(new _M0TPB9ArrayViewGRP26mizchi8js__core3AnyE(self, 0, self.length));
}
function _M0MPC15array5Array4iterGRP37Hosi1216syasou4view7ElementE(self) {
  return _M0MPC15array9ArrayView4iterGRP37Hosi1216syasou4view7ElementE(new _M0TPB9ArrayViewGRP37Hosi1216syasou4view7ElementE(self, 0, self.length));
}
function _M0MPC15array10FixedArray11from__arrayGsE(array) {
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
function _M0MPC16option6Option6unwrapGRP36mizchi11js__browser3dom7ElementE(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function _M0MPC16option6Option10unwrap__orGRP36mizchi11js__browser3dom4NodeE(self, default_) {
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
function _M0FPB8new__mapGsWRP26mizchi8js__core3AnyEuE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsWRP26mizchi8js__core3AnyEuE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB21capacity__for__length(length) {
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  return capacity;
}
function _M0MPB3Map20add__entry__to__tailGsWRP26mizchi8js__core3AnyEuE(self, idx, entry) {
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
function _M0MPB3Map10set__entryGsWRP26mizchi8js__core3AnyEuE(self, entry, new_idx) {
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
function _M0MPB3Map10push__awayGsWRP26mizchi8js__core3AnyEuE(self, idx, entry) {
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
      _M0MPB3Map10set__entryGsWRP26mizchi8js__core3AnyEuE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsWRP26mizchi8js__core3AnyEuE(self, entry$2, idx$2);
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
function _M0MPB3Map20rehash__place__entryGsWRP26mizchi8js__core3AnyEuE(self, outer) {
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
      _M0MPB3Map20add__entry__to__tailGsWRP26mizchi8js__core3AnyEuE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsWRP26mizchi8js__core3AnyEuE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsWRP26mizchi8js__core3AnyEuE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
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
function _M0MPB3Map4growGsWRP26mizchi8js__core3AnyEuE(self) {
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
      _M0MPB3Map20rehash__place__entryGsWRP26mizchi8js__core3AnyEuE(self, _e);
      _tmp = next_in_chain;
      continue;
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
function _M0MPB3Map15set__with__hashGsWRP26mizchi8js__core3AnyEuE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsWRP26mizchi8js__core3AnyEuE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsWRP26mizchi8js__core3AnyEuE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsWRP26mizchi8js__core3AnyEuE(self, idx, entry);
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
          _M0MPB3Map4growGsWRP26mizchi8js__core3AnyEuE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsWRP26mizchi8js__core3AnyEuE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsWRP26mizchi8js__core3AnyEuE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsWRP26mizchi8js__core3AnyEuE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGssE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsWRP26mizchi8js__core3AnyEuE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGssE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsWRP26mizchi8js__core3AnyEuE(self, idx, entry);
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
          _M0MPB3Map4growGsWRP26mizchi8js__core3AnyEuE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsWRP26mizchi8js__core3AnyEuE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGssE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsWRP26mizchi8js__core3AnyEuE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
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
function _M0MPB3Map3setGsWRP26mizchi8js__core3AnyEuE(self, key, value) {
  _M0MPB3Map15set__with__hashGsWRP26mizchi8js__core3AnyEuE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGssE(self, key, value) {
  _M0MPB3Map15set__with__hashGssE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGiWdEuE(self, key, value) {
  _M0MPB3Map15set__with__hashGiWdEuE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3MapGsWRP26mizchi8js__core3AnyEuE(arr, capacity) {
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
  const m = _M0FPB8new__mapGsWRP26mizchi8js__core3AnyEuE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsWRP26mizchi8js__core3AnyEuE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGssE(arr, capacity) {
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
  const m = _M0FPB8new__mapGsWRP26mizchi8js__core3AnyEuE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGssE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map2atGsWRP26mizchi8js__core3AnyEuE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      $panic();
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i <= _entry.psl) {
        _tmp = i + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      } else {
        $panic();
      }
    }
    continue;
  }
}
function _M0MPB3Map2atGssE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      $panic();
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i <= _entry.psl) {
        _tmp = i + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      } else {
        $panic();
      }
    }
    continue;
  }
}
function _M0MPB3Map8containsGsWRP26mizchi8js__core3AnyEuE(self, key) {
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
function _M0MPB3Map8containsGssE(self, key) {
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
function _M0MPB3Map13remove__entryGsWRP26mizchi8js__core3AnyEuE(self, entry) {
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
function _M0MPB3Map11shift__backGsWRP26mizchi8js__core3AnyEuE(self, idx) {
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
          _M0MPB3Map10set__entryGsWRP26mizchi8js__core3AnyEuE(self, _x, cur);
          _tmp = next;
          continue;
        }
      }
    }
    self.entries[cur] = undefined;
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
function _M0MPB3Map18remove__with__hashGsWRP26mizchi8js__core3AnyEuE(self, key, hash) {
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
        _M0MPB3Map13remove__entryGsWRP26mizchi8js__core3AnyEuE(self, _entry);
        _M0MPB3Map11shift__backGsWRP26mizchi8js__core3AnyEuE(self, idx);
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
function _M0MPB3Map6removeGsWRP26mizchi8js__core3AnyEuE(self, key) {
  _M0MPB3Map18remove__with__hashGsWRP26mizchi8js__core3AnyEuE(self, key, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map6removeGiWdEuE(self, key) {
  _M0MPB3Map18remove__with__hashGiWdEuE(self, key, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPC15array10FixedArray12fill_2einnerGORPB5EntryGsWRP26mizchi8js__core3AnyEuEE(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function _M0MPB3Map5clearGsWRP26mizchi8js__core3AnyEuE(self) {
  _M0MPC15array10FixedArray12fill_2einnerGORPB5EntryGsWRP26mizchi8js__core3AnyEuEE(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function _M0MPB3Map4iterGsWRP26mizchi8js__core3AnyEuE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsWRP26mizchi8js__core3AnyEuEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGsE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind = curr_entry.val;
        if (_bind === undefined) {
          break _L;
        } else {
          const _Some = _bind;
          const _x = _Some;
          const _key = _x.key;
          const _value = _x.value;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return { _0: _key, _1: _value };
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0MPB3Map5iter2GsWRP26mizchi8js__core3AnyEuE(self) {
  return _M0MPB3Map4iterGsWRP26mizchi8js__core3AnyEuE(self);
}
function _M0MPB3Map4keysGsWRP26mizchi8js__core3AnyEuE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsWRP26mizchi8js__core3AnyEuEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGsE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind = curr_entry.val;
        if (_bind === undefined) {
          break _L;
        } else {
          const _Some = _bind;
          const _x = _Some;
          const _key = _x.key;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return _key;
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
function _M0MPB5Iter24nextGsWRP26mizchi8js__core3AnyEuE(self) {
  return _M0MPB4Iter4nextGsE(self);
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
function _M0MPC16double6Double3min(self, other) {
  return self !== self ? other : other !== other ? self : self < other ? self : other;
}
function _M0MPC16double6Double3max(self, other) {
  return self !== self ? other : other !== other ? self : self > other ? self : other;
}
function _M0IPC16double6DoublePB4Show10to__string(self) {
  return String(self);
}
function _M0MPC15array5Array28unsafe__truncate__to__lengthGWEuE(self, new_len) {
  _M0MPB7JSArray11set__length(self, new_len);
}
function _M0MPC15array5Array4copyGWEuE(self) {
  return _M0MPB7JSArray4copy(self);
}
function _M0MPC15array5Array2atGbE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGRP37Hosi1216syasou4view7MountedE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGRP36mizchi11js__browser3dom4NodeE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array12MutArrayView4swapGsE(arr, i, j) {
  const temp = arr.buf[arr.start + i | 0];
  arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
  arr.buf[arr.start + j | 0] = temp;
}
function _M0MPC15array12MutArrayView5sliceGsE(arr, start, end) {
  const _bind = arr.end - arr.start | 0;
  if (start < 0 || (start > end || end > _bind)) {
    $panic();
  }
  return new _M0TPB12MutArrayViewGsE(arr.buf, start + arr.start | 0, end + arr.start | 0);
}
function _M0MPC15array5Array3setGbE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array12MutArrayView14rev__in__placeGsE(arr) {
  const len = arr.end - arr.start | 0;
  const mid_len = len / 2 | 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < mid_len) {
      const j = (len - i | 0) - 1 | 0;
      const temp = arr.buf[arr.start + i | 0];
      arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
      arr.buf[arr.start + j | 0] = temp;
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB17fixed__get__limit(len) {
  let _tmp = len;
  let _tmp$2 = 0;
  while (true) {
    const len$2 = _tmp;
    const limit = _tmp$2;
    if (len$2 > 0) {
      _tmp = len$2 / 2 | 0;
      _tmp$2 = limit + 1 | 0;
      continue;
    } else {
      return limit;
    }
  }
}
function _M0FPB19fixed__bubble__sortGsE(arr) {
  const _bind = arr.end - arr.start | 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && _M0IP016_24default__implPB7Compare6op__gtGsE(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0])) {
          _M0MPC15array12MutArrayView4swapGsE(arr, j, j - 1 | 0);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB20fixed__choose__pivotN7sort__2S571GsE(_env, a, b) {
  const arr = _env._1;
  const swaps = _env._0;
  if (_M0IP016_24default__implPB7Compare6op__gtGsE(arr.buf[arr.start + a | 0], arr.buf[arr.start + b | 0])) {
    _M0MPC15array12MutArrayView4swapGsE(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0FPB20fixed__choose__pivotN7sort__3S575GsE(_env, a, b, c) {
  _M0FPB20fixed__choose__pivotN7sort__2S571GsE(_env, a, b);
  _M0FPB20fixed__choose__pivotN7sort__2S571GsE(_env, b, c);
  _M0FPB20fixed__choose__pivotN7sort__2S571GsE(_env, a, b);
}
function _M0FPB20fixed__choose__pivotGsE(arr) {
  const len = arr.end - arr.start | 0;
  const swaps = new _M0TPB8MutLocalGiE(0);
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    const a = Math.imul(len / 4 | 0, 1) | 0;
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: swaps, _1: arr };
    if (len > 50) {
      _M0FPB20fixed__choose__pivotN7sort__3S575GsE(_env, a - 1 | 0, a, a + 1 | 0);
      _M0FPB20fixed__choose__pivotN7sort__3S575GsE(_env, b - 1 | 0, b, b + 1 | 0);
      _M0FPB20fixed__choose__pivotN7sort__3S575GsE(_env, c - 1 | 0, c, c + 1 | 0);
    }
    _M0FPB20fixed__choose__pivotN7sort__3S575GsE(_env, a, b, c);
  }
  if (swaps.val === 12) {
    _M0MPC15array12MutArrayView14rev__in__placeGsE(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function _M0FPB17fixed__sift__downGsE(arr, index) {
  const len = arr.end - arr.start | 0;
  let _tmp = index;
  let _tmp$2 = (Math.imul(index, 2) | 0) + 1 | 0;
  while (true) {
    const index$2 = _tmp;
    const child = _tmp$2;
    if (child < len) {
      const child$2 = (child + 1 | 0) < len && _M0IP016_24default__implPB7Compare6op__ltGsE(arr.buf[arr.start + child | 0], arr.buf[arr.start + (child + 1 | 0) | 0]) ? child + 1 | 0 : child;
      if (_M0IP016_24default__implPB7Compare6op__geGsE(arr.buf[arr.start + index$2 | 0], arr.buf[arr.start + child$2 | 0])) {
        return undefined;
      }
      _M0MPC15array12MutArrayView4swapGsE(arr, index$2, child$2);
      _tmp = child$2;
      _tmp$2 = (Math.imul(child$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB17fixed__heap__sortGsE(arr) {
  const len = arr.end - arr.start | 0;
  const _bind = len / 2 | 0;
  let _tmp = _bind - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      _M0FPB17fixed__sift__downGsE(arr, i);
      _tmp = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2 = len - 1 | 0;
  while (true) {
    const i = _tmp$2;
    if (i >= 1) {
      _M0MPC15array12MutArrayView4swapGsE(arr, 0, i);
      _M0FPB17fixed__sift__downGsE(_M0MPC15array12MutArrayView5sliceGsE(arr, 0, i), 0);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB16fixed__partitionGsE(arr, pivot_index) {
  _M0MPC15array12MutArrayView4swapGsE(arr, pivot_index, (arr.end - arr.start | 0) - 1 | 0);
  const pivot = arr.buf[arr.start + ((arr.end - arr.start | 0) - 1 | 0) | 0];
  const _bind = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp = 0;
  let _tmp$2 = 0;
  let _tmp$3 = true;
  while (true) {
    const j = _tmp;
    const i = _tmp$2;
    const partitioned = _tmp$3;
    if (j < _bind) {
      if (_M0IP016_24default__implPB7Compare6op__ltGsE(arr.buf[arr.start + j | 0], pivot)) {
        if (i !== j) {
          _M0MPC15array12MutArrayView4swapGsE(arr, i, j);
          _tmp = j + 1 | 0;
          _tmp$2 = i + 1 | 0;
          _tmp$3 = false;
          continue;
        } else {
          _tmp = j + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue;
        }
      } else {
        _tmp = j + 1 | 0;
        continue;
      }
    } else {
      _M0MPC15array12MutArrayView4swapGsE(arr, i, (arr.end - arr.start | 0) - 1 | 0);
      return { _0: i, _1: partitioned };
    }
  }
}
function _M0FPB24fixed__try__bubble__sortGsE(arr) {
  const _bind = arr.end - arr.start | 0;
  let _tmp = 1;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp;
    const tries = _tmp$2;
    if (i < _bind) {
      let sorted;
      let _tmp$3 = i;
      let _tmp$4 = true;
      while (true) {
        const j = _tmp$3;
        const sorted$2 = _tmp$4;
        if (j > 0 && _M0IP016_24default__implPB7Compare6op__gtGsE(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0])) {
          _M0MPC15array12MutArrayView4swapGsE(arr, j, j - 1 | 0);
          _tmp$3 = j - 1 | 0;
          _tmp$4 = false;
          continue;
        } else {
          sorted = sorted$2;
          break;
        }
      }
      if (!sorted) {
        const tries$2 = tries + 1 | 0;
        if (tries$2 > 8) {
          return false;
        }
        _tmp = i + 1 | 0;
        _tmp$2 = tries$2;
        continue;
      } else {
        _tmp = i + 1 | 0;
        continue;
      }
    } else {
      return true;
    }
  }
}
function _M0FPB18fixed__quick__sortGsE(arr, pred, limit) {
  let _tmp = limit;
  let _tmp$2 = arr;
  let _tmp$3 = pred;
  let _tmp$4 = true;
  let _tmp$5 = true;
  while (true) {
    const limit$2 = _tmp;
    const arr$2 = _tmp$2;
    const pred$2 = _tmp$3;
    const was_partitioned = _tmp$4;
    const balanced = _tmp$5;
    const len = arr$2.end - arr$2.start | 0;
    if (len <= 16) {
      if (len >= 2) {
        _M0FPB19fixed__bubble__sortGsE(arr$2);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      _M0FPB17fixed__heap__sortGsE(arr$2);
      return undefined;
    }
    const _bind = _M0FPB20fixed__choose__pivotGsE(arr$2);
    const _pivot_index = _bind._0;
    const _likely_sorted = _bind._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (_M0FPB24fixed__try__bubble__sortGsE(arr$2)) {
        return undefined;
      }
    }
    const _bind$2 = _M0FPB16fixed__partitionGsE(arr$2, _pivot_index);
    const _pivot = _bind$2._0;
    const _partitioned = _bind$2._1;
    const _p = len - _pivot | 0;
    const balanced$2 = (_pivot > _p ? _p : _pivot) >= (len / 8 | 0);
    const limit$3 = !balanced$2 ? limit$2 - 1 | 0 : limit$2;
    if (pred$2 === undefined) {
    } else {
      const _Some = pred$2;
      const _p$2 = _Some;
      if (_p$2 === arr$2.buf[arr$2.start + _pivot | 0]) {
        let i;
        let _tmp$6 = _pivot;
        while (true) {
          const i$2 = _tmp$6;
          if (i$2 < len && _p$2 === arr$2.buf[arr$2.start + i$2 | 0]) {
            _tmp$6 = i$2 + 1 | 0;
            continue;
          } else {
            i = i$2;
            break;
          }
        }
        _tmp = limit$3;
        _tmp$2 = _M0MPC15array12MutArrayView5sliceGsE(arr$2, i, len);
        _tmp$4 = _partitioned;
        _tmp$5 = balanced$2;
        continue;
      }
    }
    const left = _M0MPC15array12MutArrayView5sliceGsE(arr$2, 0, _pivot);
    const right = _M0MPC15array12MutArrayView5sliceGsE(arr$2, _pivot + 1 | 0, len);
    if ((left.end - left.start | 0) < (right.end - right.start | 0)) {
      _M0FPB18fixed__quick__sortGsE(left, pred$2, limit$3);
      _tmp = limit$3;
      _tmp$2 = right;
      _tmp$3 = arr$2.buf[arr$2.start + _pivot | 0];
      _tmp$4 = _partitioned;
      _tmp$5 = balanced$2;
      continue;
    } else {
      _M0FPB18fixed__quick__sortGsE(right, arr$2.buf[arr$2.start + _pivot | 0], limit$3);
      _tmp = limit$3;
      _tmp$2 = left;
      _tmp$4 = _partitioned;
      _tmp$5 = balanced$2;
      continue;
    }
  }
}
function _M0MPC15array12MutArrayView4sortGsE(self) {
  _M0FPB18fixed__quick__sortGsE(self, undefined, _M0FPB17fixed__get__limit(self.end - self.start | 0));
}
function _M0MPC15array5Array4sortGsE(self) {
  const _bind = self.length;
  _M0MPC15array12MutArrayView4sortGsE(new _M0TPB12MutArrayViewGsE(self, 0, _bind));
}
function _M0MPC15array5Array4makeGbE(len, elem) {
  const arr = new Array(len);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      arr[i] = elem;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3getGRP36mizchi11js__browser3dom4NodeE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? new _M0DTPC16option6OptionGRP36mizchi11js__browser3dom4NodeE4Some(self[index]) : _M0DTPC16option6OptionGRP36mizchi11js__browser3dom4NodeE4None__;
}
function _M0MPC15array5Array3getGRP37Hosi1216syasou4view7ElementE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : undefined;
}
function _M0MPC15array5Array5clearGWEuE(self) {
  _M0MPC15array5Array28unsafe__truncate__to__lengthGWEuE(self, 0);
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
function _M0MPC15array5Array10push__iterGRP37Hosi1216syasou4view7ElementE(self, iter) {
  const _bind = iter.size_hint;
  if (_bind === undefined) {
  }
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGsE(iter);
    if (_bind$2 === undefined) {
      return;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      _M0MPC15array5Array4pushGRP37Hosi1216syasou4view7MountedE(self, _x);
      continue;
    }
  }
}
function _M0MPC15array5Array4joinGsE(self, separator) {
  return _M0MPC15array9ArrayView4joinGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length), separator);
}
function _M0MPC13ref3Ref3RefGbE(x) {
  return new _M0TPC13ref3RefGbE(x);
}
function _M0FPC14math3sin(_tmp) {
  return Math.sin(_tmp);
}
function _M0FP37Hosi1216syasou6domain11number__min(a, b) {
  return a !== a ? a : b !== b ? b : a === 0 && b === 0 ? (1 / a < 0 || 1 / b < 0 ? -0 : 0) : _M0MPC16double6Double3min(a, b);
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
function _M0MP26mizchi8js__core7Promise4waitGuE(self, _cont, _err_cont) {
  _M0MP26mizchi8js__core3Any6__call(_M0MP26mizchi8js__core3Any6__call(self, "then", [_cont]), "catch", [_err_cont]);
  return new _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(-1);
}
function _M0MP26mizchi8js__core7Promise4waitGRP26mizchi8js__core3AnyE(self, _cont, _err_cont) {
  _M0MP26mizchi8js__core3Any6__call(_M0MP26mizchi8js__core3Any6__call(self, "then", [_cont]), "catch", [_err_cont]);
  return new _M0DTPC16result6ResultGORP26mizchi8js__core3AnyRPC15error5ErrorE2Ok(_M0DTPC16option6OptionGRP26mizchi8js__core3AnyE4None__);
}
function _M0MP26mizchi8js__core7Promise10allSettledGuE(promises) {
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
  return _M0FP26mizchi8js__core18ffi__from__entries(_M0MPC15array10FixedArray11from__arrayGsE(new _M0TPB9ArrayViewGUsRP26mizchi8js__core3AnyEE(entries, 0, entries.length)));
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
  _M0MPC15array5Array4pushGRP37Hosi1216syasou4view7MountedE(entries, { _0: "capture", _1: capture });
  _M0MPC15array5Array4pushGRP37Hosi1216syasou4view7MountedE(entries, { _0: "once", _1: once });
  _M0MPC15array5Array4pushGRP37Hosi1216syasou4view7MountedE(entries, { _0: "passive", _1: passive });
  if (signal.$tag === 1) {
    const _Some = signal;
    const _v = _Some._0;
    _M0MPC15array5Array4pushGRP37Hosi1216syasou4view7MountedE(entries, { _0: "signal", _1: _v });
  }
  _M0MP26mizchi8js__core3Any6__call(self, "addEventListener", [event_type, handler, _M0FP26mizchi8js__core13from__entries(entries)]);
}
function _M0MP36mizchi7js__web5event11EventTarget27removeEventListener_2einner(self, event_type, handler, capture) {
  _M0MP26mizchi8js__core3Any6__call(self, "removeEventListener", [event_type, handler, _M0FP26mizchi8js__core13from__entries([{ _0: "capture", _1: capture }])]);
}
function _M0MP36mizchi11js__browser3dom6Window10innerWidth(self) {
  return _M0MP26mizchi8js__core3Any5__get(self, "innerWidth");
}
function _M0MP36mizchi11js__browser3dom6Window10setTimeout(self, handler, delay) {
  return _M0MP26mizchi8js__core3Any6__call(self, "setTimeout", [handler, delay]);
}
function _M0MP36mizchi11js__browser3dom6Window12clearTimeout(self, id) {
  _M0MP26mizchi8js__core3Any6__call(self, "clearTimeout", [id]);
}
function _M0MP36mizchi11js__browser3dom6Window21requestAnimationFrame(self, callback) {
  return _M0MP26mizchi8js__core3Any6__call(self, "requestAnimationFrame", [callback]);
}
function _M0MP36mizchi11js__browser3dom6Window20cancelAnimationFrame(self, id) {
  _M0MP26mizchi8js__core3Any6__call(self, "cancelAnimationFrame", [id]);
}
function _M0MP36mizchi11js__browser3dom4Node10parentNode(self) {
  const v = _M0MP26mizchi8js__core3Any5__get(self, "parentNode");
  return _M0FP26mizchi8js__core16identity__optionGRP36mizchi11js__browser3dom7ElementE(v);
}
function _M0MP36mizchi11js__browser3dom4Node10firstChild(self) {
  const v = _M0MP26mizchi8js__core3Any5__get(self, "firstChild");
  return _M0FP26mizchi8js__core16identity__optionGRP36mizchi11js__browser3dom7ElementE(v);
}
function _M0MP36mizchi11js__browser3dom4Node11nextSibling(self) {
  const v = _M0MP26mizchi8js__core3Any5__get(self, "nextSibling");
  return _M0FP26mizchi8js__core16identity__optionGRP36mizchi11js__browser3dom7ElementE(v);
}
function _M0MP36mizchi11js__browser3dom4Node11removeChild(self, child) {
  return _M0MP26mizchi8js__core3Any6__call(self, "removeChild", [child]);
}
function _M0MP36mizchi11js__browser3dom4Node12insertBefore(self, new_node, ref_node) {
  if (ref_node.$tag === 1) {
    const _Some = ref_node;
    const _node = _Some._0;
    return _M0MP26mizchi8js__core3Any6__call(self, "insertBefore", [new_node, _node]);
  } else {
    return _M0MP26mizchi8js__core3Any6__call(self, "insertBefore", [new_node, _M0FP26mizchi8js__core4null()]);
  }
}
function _M0MP36mizchi11js__browser3dom5Event14preventDefault(self) {
  _M0MP26mizchi8js__core3Any6__call(self, "preventDefault", []);
}
function _M0MP36mizchi11js__browser3dom7Element12setAttribute(self, name, value) {
  _M0MP26mizchi8js__core3Any6__call(self, "setAttribute", [name, value]);
}
function _M0MP36mizchi11js__browser3dom7Element15removeAttribute(self, name) {
  _M0MP26mizchi8js__core3Any6__call(self, "removeAttribute", [name]);
}
function _M0MP36mizchi11js__browser3dom8Document14getElementById(self, id) {
  const v = _M0MP26mizchi8js__core3Any6__call(self, "getElementById", [id]);
  return _M0FP26mizchi8js__core16identity__optionGRP36mizchi11js__browser3dom7ElementE(v);
}
function _M0MP36mizchi11js__browser3dom8Document13createComment(self, data) {
  return _M0MP26mizchi8js__core3Any6__call(self, "createComment", [data]);
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
    _M0MPC15array5Array4pushGRP36mizchi11js__browser3dom4NodeE(shaders, _shader);
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
function _M0MP36mizchi7js__web3url15URLSearchParams3get(self, name) {
  return _M0FP26mizchi8js__core16identity__optionGsE(_M0MP26mizchi8js__core3Any6__call(self, "get", [name]));
}
function _M0FP37Hosi1216syasou6bridge16is__demo__search(search) {
  return _M0IPC16option6OptionPB2Eq5equalGsE(_M0MP36mizchi7js__web3url15URLSearchParams3get(_M0FP37Hosi1216syasou6bridge14search__params(search), "demo"), _M0FP37Hosi1216syasou6bridge16is__demo__searchN6constrS235);
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
function _M0FP37Hosi1216syasou4view9componentGuE(render, props, key) {
  return new _M0DTP37Hosi1216syasou4view7Element9Component(render, () => render(props), key);
}
function _M0FP37Hosi1216syasou4view9componentGRP37Hosi1216syasou2ui8AppPropsE(render, props, key) {
  return new _M0DTP37Hosi1216syasou4view7Element9Component(render, () => render(props), key);
}
function _M0FP37Hosi1216syasou4view10value__key(value) {
  const key = _M0MP26mizchi8js__core3Any5__get(value, "key");
  return _M0FP26mizchi8js__core11is__nullish(key) ? undefined : _M0MP26mizchi8js__core3Any10to__string(key);
}
function _M0FP37Hosi1216syasou4view3key(node) {
  let props;
  _L: {
    switch (node.$tag) {
      case 2: {
        const _Tag = node;
        const _props = _Tag._1;
        props = _props;
        break _L;
      }
      case 5: {
        const _Control = node;
        const _props$2 = _Control._2;
        props = _props$2;
        break _L;
      }
      case 4: {
        const _Component = node;
        return _Component._2;
      }
      default: {
        return undefined;
      }
    }
  }
  return _M0FP37Hosi1216syasou4view10value__key(props);
}
function _M0FP37Hosi1216syasou4view9identical(_tmp, _tmp$2) {
  return Object.is(_tmp, _tmp$2);
}
function _M0FP37Hosi1216syasou4view10compatible(a, b) {
  if (_M0IP016_24default__implPB2Eq10not__equalGOsE(_M0FP37Hosi1216syasou4view3key(a), _M0FP37Hosi1216syasou4view3key(b))) {
    return false;
  }
  switch (a.$tag) {
    case 0: {
      if (b.$tag === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (b.$tag === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (b.$tag === 3) {
        return true;
      } else {
        return false;
      }
    }
    case 6: {
      if (b.$tag === 6) {
        return true;
      } else {
        return false;
      }
    }
    case 7: {
      if (b.$tag === 7) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      const _Tag = a;
      const _a = _Tag._0;
      if (b.$tag === 2) {
        const _Tag$2 = b;
        const _b = _Tag$2._0;
        return _a === _b;
      } else {
        return false;
      }
    }
    case 4: {
      const _Component = a;
      const _a$2 = _Component._0;
      if (b.$tag === 4) {
        const _Component$2 = b;
        const _b = _Component$2._0;
        return _M0FP37Hosi1216syasou4view9identical(_a$2, _b);
      } else {
        return false;
      }
    }
    default: {
      const _Control = a;
      const _a$3 = _Control._0;
      const _b = _Control._1;
      if (b.$tag === 5) {
        const _Control$2 = b;
        const _c = _Control$2._0;
        const _d = _Control$2._1;
        return _a$3 === _c && _b === _d;
      } else {
        return false;
      }
    }
  }
}
function _M0FP37Hosi1216syasou4view10new__scope() {
  return new _M0TP37Hosi1216syasou4view5Scope([], 0, true);
}
function _M0FP37Hosi1216syasou4view14dispose__scope(scope) {
  scope.alive = false;
  const _bind = scope.slots;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const cell = _bind[_];
      const _func = cell.cleanup;
      _func();
      cell.cleanup = () => {
      };
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP37Hosi1216syasou4view11event__name(name) {
  const capture = _M0MPC16string6String11has__suffix(name, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou4view11event__nameN7_2abindS565, 0, _M0FP37Hosi1216syasou4view11event__nameN7_2abindS565.length));
  const name$2 = name.substring(2, name.length - (capture ? 7 : 0) | 0);
  const lower = _M0MPC16string6String9to__lower(name$2);
  return { _0: lower === "change" ? "input" : lower, _1: capture };
}
function _M0FP37Hosi1216syasou4view12remove__node(node) {
  const _bind = _M0MP36mizchi11js__browser3dom4Node10parentNode(node);
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _parent = _Some._0;
    _M0MP36mizchi11js__browser3dom4Node11removeChild(_parent, node);
    return;
  } else {
    return;
  }
}
function _M0FP37Hosi1216syasou4view10same__node(a, b) {
  return _M0FP37Hosi1216syasou4view9identical(a, b);
}
function _M0FP37Hosi1216syasou4view7dispose(mounted) {
  _M0FP37Hosi1216syasou4view14dispose__scope(mounted.scope);
  const _it = _M0MPB3Map5iter2GsWRP26mizchi8js__core3AnyEuE(mounted.listeners);
  while (true) {
    const _bind = _M0MPB5Iter24nextGsWRP26mizchi8js__core3AnyEuE(_it);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const _name = _x._0;
      const _listener = _x._1;
      const _bind$2 = _M0FP37Hosi1216syasou4view11event__name(_name);
      const _event = _bind$2._0;
      const _capture = _bind$2._1;
      _M0FP37Hosi1216syasou4view16remove__listener(mounted.first, _event, _listener, _capture);
      continue;
    }
  }
  _M0MPB3Map5clearGsWRP26mizchi8js__core3AnyEuE(mounted.listeners);
  const _func = mounted.cleanup;
  _func();
  const _func$2 = mounted.motion_cleanup;
  _func$2();
  const _bind = mounted.animation;
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _animation = _Some._0;
    _M0MP37Hosi1216syasou4view9Animation6cancel(_animation);
  }
  const _bind$2 = mounted.children;
  const _bind$3 = _bind$2.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const child = _bind$2[_];
      _M0FP37Hosi1216syasou4view7dispose(child);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const reference = _M0MP26mizchi8js__core3Any5__get(mounted.props, "ref");
  if (!_M0FP26mizchi8js__core11is__nullish(reference)) {
    _M0FP37Hosi1216syasou4view10clear__ref(reference, mounted.first);
  }
  _M0FP37Hosi1216syasou4view12remove__node(mounted.first);
  if (!_M0FP37Hosi1216syasou4view10same__node(mounted.first, mounted.last)) {
    _M0FP37Hosi1216syasou4view12remove__node(mounted.last);
    return;
  } else {
    return;
  }
}
function _M0FP37Hosi1216syasou4view13after__render(run) {
  _M0MPC15array5Array4pushGRP37Hosi1216syasou4view7MountedE(_M0FP37Hosi1216syasou4view7runtime.effects, run);
}
function _M0FP37Hosi1216syasou4view6invoke(props, name, event) {
  const callback = _M0MP26mizchi8js__core3Any5__get(props, name);
  if (_M0FP37Hosi1216syasou4view4kind(callback) === "function") {
    const call = callback;
    call(event);
    return;
  } else {
    return;
  }
}
function _M0FP37Hosi1216syasou4view13change__panel(panel, open) {
  _M0FP37Hosi1216syasou4view6invoke(panel.props, "onOpenChange", open);
}
function _M0FP37Hosi1216syasou4view9focusable(node) {
  const _acc = [];
  const _bind = _M0FP37Hosi1216syasou4view10query__all(node, "button,input,textarea,a[href],select,[tabindex]");
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const item = _bind[_];
      if (_M0FP37Hosi1216syasou4view8tabbable(item)) {
        _M0MPC15array5Array4pushGRP36mizchi11js__browser3dom4NodeE(_acc, item);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return _acc;
    }
  }
}
function _M0FP37Hosi1216syasou4view15mount__behavior(mounted) {
  const raw = _M0MP26mizchi8js__core3Any5__get(mounted.props, "panel");
  if (_M0FP26mizchi8js__core11is__nullish(raw)) {
    return undefined;
  }
  const panel = raw;
  const node = mounted.first;
  const previous = _M0FP37Hosi1216syasou4view12active__node();
  const keydown = (event) => {
    if (_M0FP37Hosi1216syasou4view10event__key(event) === "Escape") {
      _M0FP37Hosi1216syasou4view6invoke(_M0MP26mizchi8js__core3Any5__get(mounted.props, "panelCallbacks"), "onEscapeKeyDown", event);
      if (!_M0FP37Hosi1216syasou4view9prevented(event)) {
        _M0FP37Hosi1216syasou4view13change__panel(panel, false);
      }
      _M0FP37Hosi1216syasou4view7prevent(event);
      _M0FP37Hosi1216syasou4view4stop(event);
      return;
    } else {
      if (panel.modal && _M0FP37Hosi1216syasou4view10event__key(event) === "Tab") {
        const items = _M0FP37Hosi1216syasou4view9focusable(node);
        if (items.length === 0) {
          _M0FP37Hosi1216syasou4view7prevent(event);
          _M0FP37Hosi1216syasou4view11focus__node(node);
          return;
        } else {
          if (_M0FP37Hosi1216syasou4view5shift(event) && _M0FP37Hosi1216syasou4view10same__node(_M0FP37Hosi1216syasou4view12active__node(), _M0MPC15array5Array2atGRP36mizchi11js__browser3dom4NodeE(items, 0))) {
            _M0FP37Hosi1216syasou4view7prevent(event);
            _M0FP37Hosi1216syasou4view11focus__node(_M0MPC15array5Array2atGRP36mizchi11js__browser3dom4NodeE(items, items.length - 1 | 0));
            return;
          } else {
            if (!_M0FP37Hosi1216syasou4view5shift(event) && _M0FP37Hosi1216syasou4view10same__node(_M0FP37Hosi1216syasou4view12active__node(), _M0MPC15array5Array2atGRP36mizchi11js__browser3dom4NodeE(items, items.length - 1 | 0))) {
              _M0FP37Hosi1216syasou4view7prevent(event);
              _M0FP37Hosi1216syasou4view11focus__node(_M0MPC15array5Array2atGRP36mizchi11js__browser3dom4NodeE(items, 0));
              return;
            } else {
              return;
            }
          }
        }
      } else {
        return;
      }
    }
  };
  const cancel = (event) => {
    _M0FP37Hosi1216syasou4view6invoke(_M0MP26mizchi8js__core3Any5__get(mounted.props, "panelCallbacks"), "onEscapeKeyDown", event);
    if (!_M0FP37Hosi1216syasou4view9prevented(event)) {
      _M0FP37Hosi1216syasou4view13change__panel(panel, false);
    }
    _M0FP37Hosi1216syasou4view7prevent(event);
  };
  const outside = (event) => {
    const target = _M0FP37Hosi1216syasou4view13event__target(event);
    if (panel.modal) {
      if (_M0FP37Hosi1216syasou4view10same__node(target, node)) {
        const box = _M0FP37Hosi1216syasou4view4rect(node);
        const x = _M0FP37Hosi1216syasou4view10pointer__x(event);
        const y = _M0FP37Hosi1216syasou4view10pointer__y(event);
        if (x < box.x || (y < box.y || (x > box.x + box.width || y > box.y + box.height))) {
          _M0FP37Hosi1216syasou4view13change__panel(panel, false);
          return;
        } else {
          return;
        }
      } else {
        return;
      }
    } else {
      let _tmp;
      if (!_M0FP37Hosi1216syasou4view8contains(node, target)) {
        const _bind = panel.trigger.current;
        let _tmp$2;
        if (_bind.$tag === 1) {
          const _Some = _bind;
          const _trigger = _Some._0;
          _tmp$2 = _M0FP37Hosi1216syasou4view8contains(_trigger, target);
        } else {
          _tmp$2 = false;
        }
        _tmp = !_tmp$2;
      } else {
        _tmp = false;
      }
      if (_tmp) {
        _M0FP37Hosi1216syasou4view13change__panel(panel, false);
        return;
      } else {
        return;
      }
    }
  };
  const _p = _M0FP36mizchi11js__browser3dom8document();
  const document = _p;
  _M0FP37Hosi1216syasou4view13add__listener(node, "keydown", keydown, false);
  if (panel.modal) {
    _M0FP37Hosi1216syasou4view13add__listener(node, "cancel", cancel, false);
  }
  _M0FP37Hosi1216syasou4view13add__listener(document, "pointerdown", outside, false);
  _M0FP37Hosi1216syasou4view13after__render(() => {
    if (!mounted.scope.alive) {
      return undefined;
    }
    if (panel.modal) {
      _M0FP37Hosi1216syasou4view11show__modal(node);
    } else {
      const _bind = panel.trigger.current;
      if (_bind.$tag === 1) {
        const _Some = _bind;
        const _trigger = _Some._0;
        const anchor = _M0FP37Hosi1216syasou4view4rect(_trigger);
        const box = _M0FP37Hosi1216syasou4view4rect(node);
        const width = _M0MP36mizchi11js__browser3dom6Window10innerWidth(_M0FP36mizchi11js__browser3dom6window()) + 0;
        _M0FP37Hosi1216syasou4view15style__property(node, "position", "fixed");
        _M0FP37Hosi1216syasou4view15style__property(node, "z-index", "80");
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(2);
        _M0MPB13StringBuilder13write__objectGdE(_string_builder, _M0MPC16double6Double3min(_M0MPC16double6Double3max(anchor.x + anchor.width - box.width, 24), width - box.width - 24));
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "px");
        _M0FP37Hosi1216syasou4view15style__property(node, "left", _string_builder.val);
        const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(2);
        _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, _M0MPC16double6Double3max(anchor.y - box.height - 14, 24));
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "px");
        _M0FP37Hosi1216syasou4view15style__property(node, "top", _string_builder$2.val);
      }
    }
    const event = _M0FP37Hosi1216syasou4view13custom__event("openautofocus");
    _M0FP37Hosi1216syasou4view6invoke(_M0MP26mizchi8js__core3Any5__get(mounted.props, "panelCallbacks"), "onOpenAutoFocus", event);
    if (!_M0FP37Hosi1216syasou4view9prevented(event)) {
      const items = _M0FP37Hosi1216syasou4view9focusable(node);
      _M0FP37Hosi1216syasou4view11focus__node(_M0MPC16option6Option10unwrap__orGRP36mizchi11js__browser3dom4NodeE(_M0MPC15array5Array3getGRP36mizchi11js__browser3dom4NodeE(items, 0), node));
      return;
    } else {
      return;
    }
  });
  mounted.cleanup = () => {
    _M0FP37Hosi1216syasou4view16remove__listener(node, "keydown", keydown, false);
    if (panel.modal) {
      _M0FP37Hosi1216syasou4view16remove__listener(node, "cancel", cancel, false);
    }
    _M0FP37Hosi1216syasou4view16remove__listener(document, "pointerdown", outside, false);
    if (panel.modal) {
      _M0FP37Hosi1216syasou4view12close__modal(node);
    }
    const event = _M0FP37Hosi1216syasou4view13custom__event("closeautofocus");
    _M0FP37Hosi1216syasou4view6invoke(_M0MP26mizchi8js__core3Any5__get(mounted.props, "panelCallbacks"), "onCloseAutoFocus", event);
    if (!_M0FP37Hosi1216syasou4view9prevented(event)) {
      const target = _M0MPC16option6Option10unwrap__orGRP36mizchi11js__browser3dom4NodeE(panel.trigger.current, previous);
      _M0FP37Hosi1216syasou4view5queue(() => {
        if (_M0FP37Hosi1216syasou4view9connected(target)) {
          _M0FP37Hosi1216syasou4view11focus__node(target);
          return;
        } else {
          return;
        }
      });
      return;
    } else {
      return;
    }
  };
}
function _M0FP37Hosi1216syasou4view12apply__style(node, style) {
  const _it = _M0MPB3Map5iter2GsWRP26mizchi8js__core3AnyEuE(style);
  while (true) {
    const _bind = _M0MPB5Iter24nextGsWRP26mizchi8js__core3AnyEuE(_it);
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const _name = _x._0;
      const _value = _x._1;
      _M0FP37Hosi1216syasou4view15style__property(node, _name, _value);
      continue;
    }
  }
}
function _M0FP37Hosi1216syasou4view14flush__effects() {
  const pending = _M0MPC15array5Array4copyGWEuE(_M0FP37Hosi1216syasou4view7runtime.effects);
  _M0MPC15array5Array5clearGWEuE(_M0FP37Hosi1216syasou4view7runtime.effects);
  const _bind = pending.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const run = pending[_];
      run();
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP37Hosi1216syasou4view11map__object(style) {
  const out = _M0FP26mizchi8js__core11new__object();
  const _it = _M0MPB3Map5iter2GsWRP26mizchi8js__core3AnyEuE(style);
  while (true) {
    const _bind = _M0MPB5Iter24nextGsWRP26mizchi8js__core3AnyEuE(_it);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const _name = _x._0;
      const _value = _x._1;
      _M0MP26mizchi8js__core3Any5__set(out, _name, _value);
      continue;
    }
  }
  return out;
}
function _M0FP37Hosi1216syasou4view14number__option(props, name, fallback) {
  const value = _M0MP26mizchi8js__core3Any5__get(props, name);
  return _M0FP37Hosi1216syasou4view4kind(value) === "number" ? value : fallback;
}
function _M0FP37Hosi1216syasou4view11move__range(parent, first, last, before) {
  let current = new _M0DTPC16option6OptionGRP36mizchi11js__browser3dom4NodeE4Some(first);
  while (true) {
    const _bind = current;
    if (_bind.$tag === 1) {
      const _Some = _bind;
      const _node = _Some._0;
      const next = _M0MP36mizchi11js__browser3dom4Node11nextSibling(_node);
      _M0MP36mizchi11js__browser3dom4Node12insertBefore(parent, _node, before);
      if (_M0FP37Hosi1216syasou4view10same__node(_node, last)) {
        return;
      }
      current = next;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP37Hosi1216syasou4view20same__optional__node(a, b) {
  if (a.$tag === 1) {
    const _Some = a;
    const _a = _Some._0;
    if (b.$tag === 1) {
      const _Some$2 = b;
      const _b = _Some$2._0;
      return _M0FP37Hosi1216syasou4view10same__node(_a, _b);
    } else {
      return false;
    }
  } else {
    if (b.$tag === 0) {
      return true;
    } else {
      return false;
    }
  }
}
function _M0FP37Hosi1216syasou4view9css__name(name) {
  const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _bind = name.length;
  let _tmp = 0;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$2 = name.charCodeAt(_string_index);
        if (_bind$2 >= 55296 && _bind$2 <= 56319 && (_string_index + 1 | 0) < _bind) {
          const _bind$3 = name.charCodeAt(_string_index + 1 | 0);
          if (_bind$3 >= 56320 && _bind$3 <= 57343) {
            const _tmp$2 = _string_index + 2 | 0;
            const _p = (((Math.imul(_bind$2 - 55296 | 0, 1024) | 0) + _bind$3 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          } else {
            const _tmp$2 = _string_index + 1 | 0;
            const _p = _bind$2;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          }
        } else {
          const _tmp$2 = _string_index + 1 | 0;
          const _p = _bind$2;
          _decoded_next_string_index = _tmp$2;
          _decoded_char = _p;
          break _L;
        }
      }
      if (_decoded_char >= 65 && _decoded_char <= 90) {
        _M0IPB13StringBuilderPB6Logger11write__char(out, 45);
        _M0IPB13StringBuilderPB6Logger11write__char(out, _decoded_char + 32 | 0);
      } else {
        _M0IPB13StringBuilderPB6Logger11write__char(out, _decoded_char);
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return out.val;
}
function _M0FP37Hosi1216syasou4view10is__motion(value) {
  return _M0FP37Hosi1216syasou4view4kind(value) === "object" && (!_M0FP26mizchi8js__core8is__null(value) && _M0MP26mizchi8js__core3Any10to__string(_M0MP26mizchi8js__core3Any5__get(value, "motion_tag")) === "syasou-motion");
}
function _M0FP37Hosi1216syasou4view6scalar(value) {
  if (_M0FP37Hosi1216syasou4view10is__motion(value)) {
    const motion = value;
    return motion.value;
  } else {
    return value;
  }
}
function _M0FP37Hosi1216syasou4view10css__value(name, value) {
  const value$2 = _M0FP37Hosi1216syasou4view6scalar(value);
  const unitless = ["opacity", "zIndex", "fontWeight", "lineHeight", "flex", "flexGrow", "flexShrink", "order", "scale"];
  return _M0FP37Hosi1216syasou4view4kind(value$2) === "number" && (!_M0MPC15array5Array8containsGsE(unitless, name) && !_M0MPC16string6String11has__prefix(name, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou4view10css__valueN7_2abindS682, 0, _M0FP37Hosi1216syasou4view10css__valueN7_2abindS682.length))) ? `${_M0MP26mizchi8js__core3Any10to__string(value$2)}px` : _M0MP26mizchi8js__core3Any10to__string(value$2);
}
function _M0FP37Hosi1216syasou4view16transform__value(name, value) {
  const value$2 = _M0FP37Hosi1216syasou4view6scalar(value);
  const number = _M0FP37Hosi1216syasou4view4kind(value$2) === "number";
  const unit = _M0MPC16string6String11has__prefix(name, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou4view16transform__valueN7_2abindS683, 0, _M0FP37Hosi1216syasou4view16transform__valueN7_2abindS683.length)) || _M0MPC16string6String11has__prefix(name, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou4view16transform__valueN7_2abindS684, 0, _M0FP37Hosi1216syasou4view16transform__valueN7_2abindS684.length)) ? "deg" : _M0MPC16string6String11has__prefix(name, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou4view16transform__valueN7_2abindS685, 0, _M0FP37Hosi1216syasou4view16transform__valueN7_2abindS685.length)) ? "" : "px";
  return `${_M0MP26mizchi8js__core3Any10to__string(value$2)}${number ? unit : ""}`;
}
function _M0FP37Hosi1216syasou4view10style__map(style) {
  const _bind = [];
  const out = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind, 0, 0), undefined);
  let _tmp;
  if (_M0FP26mizchi8js__core11is__nullish(style)) {
    _tmp = true;
  } else {
    const _p = _M0FP37Hosi1216syasou4view4kind(style);
    const _p$2 = "object";
    _tmp = !(_p === _p$2);
  }
  if (_tmp) {
    return out;
  }
  const transforms = ["x", "y", "z", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skewX", "skewY"];
  const parts = [];
  const _bind$2 = _M0FP37Hosi1216syasou4view4keys(style);
  const _bind$3 = _bind$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const name = _bind$2[_];
      _L: {
        const value = _M0MP26mizchi8js__core3Any5__get(style, name);
        if (_M0FP26mizchi8js__core11is__nullish(value)) {
          break _L;
        }
        if (!_M0MPC15array5Array8containsGsE(transforms, name)) {
          _M0MPB3Map3setGssE(out, _M0FP37Hosi1216syasou4view9css__name(name), _M0FP37Hosi1216syasou4view10css__value(name, value));
        }
        break _L;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$4 = transforms.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$4) {
      const name = transforms[_];
      _L: {
        const value = _M0MP26mizchi8js__core3Any5__get(style, name);
        if (_M0FP26mizchi8js__core11is__nullish(value)) {
          break _L;
        }
        let function_name;
        switch (name) {
          case "x": {
            function_name = "translateX";
            break;
          }
          case "y": {
            function_name = "translateY";
            break;
          }
          case "z": {
            function_name = "translateZ";
            break;
          }
          default: {
            function_name = name;
          }
        }
        _M0MPC15array5Array4pushGRP37Hosi1216syasou4view7MountedE(parts, `${function_name}(${_M0FP37Hosi1216syasou4view16transform__value(name, value)})`);
        break _L;
      }
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (!(parts.length === 0)) {
    _M0MPB3Map3setGssE(out, "transform", _M0MPC15array5Array4joinGsE(parts, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou4view10style__mapN7_2abindS699, 0, _M0FP37Hosi1216syasou4view10style__mapN7_2abindS699.length)));
  }
  return out;
}
function _M0FP37Hosi1216syasou4view12merge__props(a, b) {
  return _M0FP26mizchi8js__core14object__assign(_M0FP26mizchi8js__core14object__assign(_M0FP26mizchi8js__core11new__object(), a), b);
}
function _M0FP37Hosi1216syasou4view10child__tag(children, props) {
  _L: {
    const _bind = _M0MPC15array5Array3getGRP37Hosi1216syasou4view7ElementE(children, 0);
    if (_bind === undefined) {
      break _L;
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (_x.$tag === 2) {
        const _Tag = _x;
        const _tag = _Tag._0;
        const _child = _Tag._1;
        const _grandchildren = _Tag._2;
        return new _M0DTP37Hosi1216syasou4view7Element3Tag(_tag, _M0FP37Hosi1216syasou4view12merge__props(_child, props), _grandchildren);
      } else {
        break _L;
      }
    }
  }
  return new _M0DTP37Hosi1216syasou4view7Element5Group(children);
}
function _M0FP37Hosi1216syasou4view11copy__props(props, omit) {
  const out = _M0FP26mizchi8js__core11new__object();
  const _bind = _M0FP37Hosi1216syasou4view4keys(props);
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const name = _bind[_];
      if (!_M0MPC15array5Array8containsGsE(omit, name)) {
        _M0MP26mizchi8js__core3Any5__set(out, name, _M0MP26mizchi8js__core3Any5__get(props, name));
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP37Hosi1216syasou4view10dictionary(values) {
  const out = _M0FP26mizchi8js__core11new__object();
  const _bind = values.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const _foreach_element = values[_];
      const _name = _foreach_element._0;
      const _value = _foreach_element._1;
      _M0MP26mizchi8js__core3Any5__set(out, _name, _value);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP37Hosi1216syasou4view8new__refGRP36mizchi11js__browser3dom4NodeE(initial) {
  const reference = new _M0TP37Hosi1216syasou4view7ViewRefGRP36mizchi11js__browser3dom4NodeE(initial);
  _M0FP37Hosi1216syasou4view13register__ref(reference, (value) => {
    reference.current = _M0FP26mizchi8js__core13is__undefined(value) ? _M0DTPC16option6OptionGRP36mizchi11js__browser3dom4NodeE4None__ : new _M0DTPC16option6OptionGRP36mizchi11js__browser3dom4NodeE4Some(value);
  });
  return reference;
}
function _M0FP37Hosi1216syasou4view8new__refGRP36mizchi11js__browser3dom17HTMLCanvasElementE(initial) {
  const reference = new _M0TP37Hosi1216syasou4view7ViewRefGRP36mizchi11js__browser3dom17HTMLCanvasElementE(initial);
  _M0FP37Hosi1216syasou4view13register__ref(reference, (value) => {
    reference.current = _M0FP26mizchi8js__core13is__undefined(value) ? undefined : value;
  });
  return reference;
}
function _M0FP37Hosi1216syasou4view14radio__keydown(event) {
  const key = _M0FP37Hosi1216syasou4view10event__key(event);
  if (!_M0MPC15array5Array8containsGsE(["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"], key)) {
    return undefined;
  }
  const items = _M0FP37Hosi1216syasou4view10query__all(_M0FP37Hosi1216syasou4view15current__target(event), "[role=radio]:not(:disabled)");
  if (items.length === 0) {
    return undefined;
  }
  let current = 0;
  const _bind = items.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const item = items[i];
      if (_M0FP37Hosi1216syasou4view10same__node(item, _M0FP37Hosi1216syasou4view12active__node())) {
        current = i;
        break;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let next;
  _L: {
    _L$2: {
      switch (key) {
        case "Home": {
          next = 0;
          break;
        }
        case "End": {
          next = items.length - 1 | 0;
          break;
        }
        case "ArrowLeft": {
          break _L$2;
        }
        case "ArrowUp": {
          break _L$2;
        }
        default: {
          next = (current + 1 | 0) % items.length | 0;
        }
      }
      break _L;
    }
    next = ((current + items.length | 0) - 1 | 0) % items.length | 0;
  }
  _M0FP37Hosi1216syasou4view7prevent(event);
  _M0FP37Hosi1216syasou4view11focus__node(next >>> 0 < items.length ? items[next] : $oob());
}
function _M0FP37Hosi1216syasou4view12run__control(mounted, library, name, props, children, context) {
  if (library === "motion") {
    return { _0: new _M0DTP37Hosi1216syasou4view7Element5Group(children), _1: context };
  }
  if (library === "toggle") {
    if (name === "Root") {
      const next = new _M0TP37Hosi1216syasou4view7Context(context.panel, new _M0TP37Hosi1216syasou4view6Toggle(_M0MP26mizchi8js__core3Any10to__string(_M0MP26mizchi8js__core3Any5__get(props, "value")), props));
      const attrs = _M0FP37Hosi1216syasou4view11copy__props(props, ["type", "value", "onValueChange"]);
      _M0MP26mizchi8js__core3Any5__set(attrs, "tabIndex", -1);
      _M0MP26mizchi8js__core3Any5__set(attrs, "style", _M0FP37Hosi1216syasou4view10dictionary([{ _0: "outline", _1: "none" }]));
      _M0MP26mizchi8js__core3Any5__set(attrs, "role", "radiogroup");
      _M0MP26mizchi8js__core3Any5__set(attrs, "dir", "ltr");
      _M0MP26mizchi8js__core3Any5__set(attrs, "onKeyDown", (event) => {
        _M0FP37Hosi1216syasou4view14radio__keydown(event);
      });
      return { _0: new _M0DTP37Hosi1216syasou4view7Element3Tag("div", attrs, children), _1: next };
    }
    const _p = context.toggle;
    let toggle;
    if (_p === undefined) {
      toggle = $panic();
    } else {
      const _p$2 = _p;
      toggle = _p$2;
    }
    const value = _M0MP26mizchi8js__core3Any10to__string(_M0MP26mizchi8js__core3Any5__get(props, "value"));
    const selected = value === toggle.value;
    const attrs = _M0FP37Hosi1216syasou4view11copy__props(props, ["value"]);
    _M0MP26mizchi8js__core3Any5__set(attrs, "type", "button");
    _M0MP26mizchi8js__core3Any5__set(attrs, "role", "radio");
    _M0MP26mizchi8js__core3Any5__set(attrs, "aria-checked", selected);
    _M0MP26mizchi8js__core3Any5__set(attrs, "data-state", selected ? "on" : "off");
    _M0MP26mizchi8js__core3Any5__set(attrs, "tabIndex", selected ? 0 : -1);
    _M0MP26mizchi8js__core3Any5__set(attrs, "onClick", () => {
      _M0FP37Hosi1216syasou4view6invoke(toggle.props, "onValueChange", selected ? "" : value);
    });
    return { _0: new _M0DTP37Hosi1216syasou4view7Element3Tag("button", attrs, children), _1: context };
  }
  if (name === "Root") {
    const _bind = mounted.panel;
    let panel;
    if (_bind === undefined) {
      const value = new _M0TP37Hosi1216syasou4view5Panel(mounted.id, library === "dialog", false, props, _M0FP37Hosi1216syasou4view8new__refGRP36mizchi11js__browser3dom4NodeE(_M0DTPC16option6OptionGRP36mizchi11js__browser3dom4NodeE4None__));
      mounted.panel = value;
      panel = value;
    } else {
      const _Some = _bind;
      panel = _Some;
    }
    panel.open = _M0FP37Hosi1216syasou4view4bool(_M0MP26mizchi8js__core3Any5__get(props, "open"));
    panel.props = props;
    return { _0: new _M0DTP37Hosi1216syasou4view7Element5Group(children), _1: new _M0TP37Hosi1216syasou4view7Context(panel, context.toggle) };
  }
  const _p = context.panel;
  let panel;
  if (_p === undefined) {
    panel = $panic();
  } else {
    const _p$2 = _p;
    panel = _p$2;
  }
  switch (name) {
    case "Trigger": {
      const attrs = _M0FP37Hosi1216syasou4view11copy__props(props, ["asChild"]);
      _M0MP26mizchi8js__core3Any5__set(attrs, "ref", panel.trigger);
      _M0MP26mizchi8js__core3Any5__set(attrs, "type", "button");
      _M0MP26mizchi8js__core3Any5__set(attrs, "aria-haspopup", "dialog");
      _M0MP26mizchi8js__core3Any5__set(attrs, "aria-expanded", panel.open);
      _M0MP26mizchi8js__core3Any5__set(attrs, "aria-controls", `${panel.id}-content`);
      _M0MP26mizchi8js__core3Any5__set(attrs, "data-state", panel.open ? "open" : "closed");
      _M0MP26mizchi8js__core3Any5__set(attrs, "onClick", () => {
        _M0FP37Hosi1216syasou4view13change__panel(panel, !panel.open);
      });
      return { _0: _M0FP37Hosi1216syasou4view4bool(_M0MP26mizchi8js__core3Any5__get(props, "asChild")) ? _M0FP37Hosi1216syasou4view10child__tag(children, attrs) : new _M0DTP37Hosi1216syasou4view7Element3Tag("button", attrs, children), _1: context };
    }
    case "Portal": {
      return { _0: panel.open ? new _M0DTP37Hosi1216syasou4view7Element6Portal(children) : _M0DTP37Hosi1216syasou4view7Element5Blank__, _1: context };
    }
    case "Overlay": {
      const attrs$2 = _M0FP37Hosi1216syasou4view11copy__props(props, ["asChild"]);
      _M0MP26mizchi8js__core3Any5__set(attrs$2, "aria-hidden", "true");
      _M0MP26mizchi8js__core3Any5__set(attrs$2, "data-state", "open");
      return { _0: _M0FP37Hosi1216syasou4view4bool(_M0MP26mizchi8js__core3Any5__get(props, "asChild")) ? _M0FP37Hosi1216syasou4view10child__tag(children, attrs$2) : new _M0DTP37Hosi1216syasou4view7Element3Tag("div", attrs$2, children), _1: context };
    }
    case "Content": {
      const attrs$3 = _M0FP37Hosi1216syasou4view11copy__props(props, ["onOpenAutoFocus", "onCloseAutoFocus", "onEscapeKeyDown", "side", "align", "sideOffset", "collisionPadding"]);
      _M0MP26mizchi8js__core3Any5__set(attrs$3, "panel", panel);
      _M0MP26mizchi8js__core3Any5__set(attrs$3, "id", `${panel.id}-content`);
      _M0MP26mizchi8js__core3Any5__set(attrs$3, "role", "dialog");
      _M0MP26mizchi8js__core3Any5__set(attrs$3, "tabIndex", -1);
      _M0MP26mizchi8js__core3Any5__set(attrs$3, "data-state", "open");
      if (panel.modal) {
        _M0MP26mizchi8js__core3Any5__set(attrs$3, "aria-modal", "true");
        _M0MP26mizchi8js__core3Any5__set(attrs$3, "aria-labelledby", `${panel.id}-title`);
        _M0MP26mizchi8js__core3Any5__set(attrs$3, "aria-describedby", `${panel.id}-description`);
      }
      _M0MP26mizchi8js__core3Any5__set(attrs$3, "panelCallbacks", props);
      return { _0: new _M0DTP37Hosi1216syasou4view7Element3Tag(panel.modal ? "dialog" : "div", attrs$3, children), _1: context };
    }
    case "Title": {
      const attrs$4 = _M0FP37Hosi1216syasou4view12merge__props(props, _M0FP37Hosi1216syasou4view10dictionary([{ _0: "id", _1: `${panel.id}-title` }]));
      return { _0: new _M0DTP37Hosi1216syasou4view7Element3Tag("h2", attrs$4, children), _1: context };
    }
    case "Description": {
      const attrs$5 = _M0FP37Hosi1216syasou4view12merge__props(props, _M0FP37Hosi1216syasou4view10dictionary([{ _0: "id", _1: `${panel.id}-description` }]));
      return { _0: new _M0DTP37Hosi1216syasou4view7Element3Tag("p", attrs$5, children), _1: context };
    }
    case "Close": {
      const attrs$6 = _M0FP37Hosi1216syasou4view12merge__props(props, _M0FP37Hosi1216syasou4view10dictionary([{ _0: "type", _1: "button" }, { _0: "onClick", _1: () => {
        _M0FP37Hosi1216syasou4view13change__panel(panel, false);
      } }]));
      return { _0: new _M0DTP37Hosi1216syasou4view7Element3Tag("button", attrs$6, children), _1: context };
    }
    default: {
      return { _0: new _M0DTP37Hosi1216syasou4view7Element5Group(children), _1: context };
    }
  }
}
function _M0FP37Hosi1216syasou4view14run__in__scope(scope, run) {
  const previous = _M0FP37Hosi1216syasou4view7runtime.scope;
  _M0FP37Hosi1216syasou4view7runtime.scope = scope;
  scope.cursor = 0;
  return _M0FP37Hosi1216syasou4view15render__finally(run, () => {
    _M0FP37Hosi1216syasou4view7runtime.scope = previous;
  });
}
function _M0FP37Hosi1216syasou4view15attribute__name(name) {
  switch (name) {
    case "className": {
      return "class";
    }
    case "htmlFor": {
      return "for";
    }
    case "tabIndex": {
      return "tabindex";
    }
    case "maxLength": {
      return "maxlength";
    }
    case "spellCheck": {
      return "spellcheck";
    }
    case "strokeWidth": {
      return "stroke-width";
    }
    case "strokeLinecap": {
      return "stroke-linecap";
    }
    case "strokeLinejoin": {
      return "stroke-linejoin";
    }
    case "fillRule": {
      return "fill-rule";
    }
    case "clipRule": {
      return "clip-rule";
    }
    default: {
      return name;
    }
  }
}
function _M0FP37Hosi1216syasou4view16style__signature(style) {
  const names = _M0MPB4Iter9to__arrayGsE(_M0MPB3Map4keysGsWRP26mizchi8js__core3AnyEuE(style));
  _M0MPC15array5Array4sortGsE(names);
  const _p = new Array(names.length);
  const _p$2 = names.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = names[_p$3];
      _p[_p$3] = `${_p$4}:${_M0MPB3Map2atGssE(style, _p$4)}`;
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPC15array5Array4joinGsE(_p, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou4view16style__signatureN7_2abindS755, 0, _M0FP37Hosi1216syasou4view16style__signatureN7_2abindS755.length));
}
function _M0FP37Hosi1216syasou4view17subscribe__motion(value, listener) {
  value.serial = value.serial + 1 | 0;
  const id = value.serial;
  _M0MPB3Map3setGiWdEuE(value.listeners, id, listener);
  return () => {
    _M0MPB3Map6removeGiWdEuE(value.listeners, id);
  };
}
function _M0FP37Hosi1216syasou4view13motion__propsN11write__baseS153(_env) {
  const base = _env._1;
  const mounted = _env._0;
  _M0FP37Hosi1216syasou4view12apply__style(mounted.first, _M0FP37Hosi1216syasou4view10style__map(base));
}
function _M0FP37Hosi1216syasou4view13motion__props(mounted, props, fresh) {
  const _func = mounted.motion_cleanup;
  _func();
  const base = _M0MP26mizchi8js__core3Any5__get(props, "style");
  const initial = _M0MP26mizchi8js__core3Any5__get(props, "initial");
  const target = _M0MP26mizchi8js__core3Any5__get(props, "animate");
  const target_map = _M0FP37Hosi1216syasou4view10style__map(target);
  const signature = _M0FP37Hosi1216syasou4view16style__signature(target_map);
  const base_map = _M0FP37Hosi1216syasou4view10style__map(base);
  const names = _M0MPB4Iter9to__arrayGsE(_M0MPB3Map4keysGsWRP26mizchi8js__core3AnyEuE(base_map));
  const _it = _M0MPB3Map4keysGsWRP26mizchi8js__core3AnyEuE(target_map);
  while (true) {
    const _bind = _M0MPB4Iter4nextGsE(_it);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _name = _Some;
      if (!_M0MPC15array5Array8containsGsE(names, _name)) {
        _M0MPC15array5Array4pushGRP37Hosi1216syasou4view7MountedE(names, _name);
      }
      continue;
    }
  }
  const _bind = mounted.style_names;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const name = _bind[_];
      if (!_M0MPC15array5Array8containsGsE(names, name)) {
        _M0FP37Hosi1216syasou4view13remove__style(mounted.first, name);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  mounted.style_names = names;
  const _env = { _0: mounted, _1: base };
  _M0FP37Hosi1216syasou4view13motion__propsN11write__baseS153(_env);
  const subscriptions = [];
  if (_M0FP37Hosi1216syasou4view4kind(base) === "object" && !_M0FP26mizchi8js__core8is__null(base)) {
    const _bind$3 = _M0FP37Hosi1216syasou4view4keys(base);
    const _bind$4 = _bind$3.length;
    let _tmp$2 = 0;
    while (true) {
      const _ = _tmp$2;
      if (_ < _bind$4) {
        const name = _bind$3[_];
        const value = _M0MP26mizchi8js__core3Any5__get(base, name);
        if (_M0FP37Hosi1216syasou4view10is__motion(value)) {
          _M0MPC15array5Array4pushGRP37Hosi1216syasou4view7MountedE(subscriptions, _M0FP37Hosi1216syasou4view17subscribe__motion(value, (_discard_) => {
            _M0FP37Hosi1216syasou4view13motion__propsN11write__baseS153(_env);
          }));
        }
        _tmp$2 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  mounted.motion_cleanup = () => {
    const _bind$3 = subscriptions.length;
    let _tmp$2 = 0;
    while (true) {
      const _ = _tmp$2;
      if (_ < _bind$3) {
        const cancel = subscriptions[_];
        cancel();
        _tmp$2 = _ + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  };
  if (signature === mounted.target_style && !fresh) {
    return undefined;
  }
  mounted.target_style = signature;
  if (target_map.size === 0) {
    return undefined;
  }
  let from;
  if (fresh) {
    const start = _M0FP37Hosi1216syasou4view10style__map(initial);
    const _it$2 = _M0MPB3Map5iter2GsWRP26mizchi8js__core3AnyEuE(base_map);
    while (true) {
      const _bind$3 = _M0MPB5Iter24nextGsWRP26mizchi8js__core3AnyEuE(_it$2);
      if (_bind$3 === undefined) {
        break;
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        const _name = _x._0;
        const _value = _x._1;
        if (!_M0MPB3Map8containsGssE(start, _name)) {
          _M0MPB3Map3setGssE(start, _name, _value);
        }
        continue;
      }
    }
    from = _M0FP37Hosi1216syasou4view11map__object(start);
  } else {
    const _tmp$2 = mounted.first;
    const _acc = [];
    const _it$2 = _M0MPB3Map4keysGsWRP26mizchi8js__core3AnyEuE(target_map);
    let _tmp$3;
    while (true) {
      const _bind$3 = _M0MPB4Iter4nextGsE(_it$2);
      if (_bind$3 === undefined) {
        _tmp$3 = _M0MPC15array10FixedArray11from__arrayGsE(new _M0TPB9ArrayViewGsE(_acc, 0, _acc.length));
        break;
      } else {
        const _Some = _bind$3;
        const _name = _Some;
        _M0MPC15array5Array4pushGRP37Hosi1216syasou4view7MountedE(_acc, _name);
        continue;
      }
    }
    from = _M0FP37Hosi1216syasou4view14current__style(_tmp$2, _tmp$3);
  }
  const _bind$3 = mounted.animation;
  if (_bind$3.$tag === 1) {
    const _Some = _bind$3;
    const _animation = _Some._0;
    _M0MP37Hosi1216syasou4view9Animation6cancel(_animation);
    mounted.animation = _M0DTPC16option6OptionGRP37Hosi1216syasou4view9AnimationE4None__;
  }
  _M0FP37Hosi1216syasou4view12apply__style(mounted.first, target_map);
  const transition = _M0MP26mizchi8js__core3Any5__get(props, "transition");
  const transition$2 = _M0FP26mizchi8js__core11is__nullish(transition) ? _M0FP26mizchi8js__core11new__object() : transition;
  const duration = _M0FP37Hosi1216syasou4view14number__option(transition$2, "duration", 0.3) * 1000;
  const delay = _M0FP37Hosi1216syasou4view14number__option(transition$2, "delay", 0) * 1000;
  const _bind$4 = _M0MP26mizchi8js__core3Any10to__string(_M0MP26mizchi8js__core3Any5__get(transition$2, "ease"));
  let easing;
  switch (_bind$4) {
    case "easeInOut": {
      easing = "ease-in-out";
      break;
    }
    case "easeOut": {
      easing = "ease-out";
      break;
    }
    default: {
      easing = "ease";
    }
  }
  const complete = () => {
    if (mounted.scope.alive) {
      _M0FP37Hosi1216syasou4view6invoke(mounted.props, "onAnimationComplete", _M0FP26mizchi8js__core9undefined());
      return;
    } else {
      return;
    }
  };
  const initial_false = _M0FP37Hosi1216syasou4view4kind(initial) === "boolean" && !_M0FP37Hosi1216syasou4view4bool(initial);
  if (duration <= 0 || fresh && (initial_false || _M0FP26mizchi8js__core11is__nullish(initial))) {
    _M0FP37Hosi1216syasou4view13after__render(complete);
    return;
  } else {
    mounted.animation = new _M0DTPC16option6OptionGRP37Hosi1216syasou4view9AnimationE4Some(_M0FP37Hosi1216syasou4view7animate(mounted.first, from, _M0FP37Hosi1216syasou4view11map__object(target_map), duration, delay, easing, complete));
    return;
  }
}
function _M0FP37Hosi1216syasou4view8reserved(name) {
  return _M0MPC15array5Array8containsGsE(["key", "ref", "style", "initial", "animate", "exit", "transition", "whileHover", "onAnimationComplete", "panel", "panelCallbacks", "asChild"], name);
}
function _M0FP37Hosi1216syasou4view13update__props(mounted, props, fresh) {
  const old = mounted.props;
  const _p = mounted.first;
  const element = _p;
  const _bind = _M0MPB4Iter9to__arrayGsE(_M0MPB3Map4keysGsWRP26mizchi8js__core3AnyEuE(mounted.listeners));
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const name = _bind[_];
      const _p$2 = _M0FP37Hosi1216syasou4view4kind(_M0MP26mizchi8js__core3Any5__get(props, name));
      const _p$3 = "function";
      if (!(_p$2 === _p$3)) {
        const _bind$3 = _M0FP37Hosi1216syasou4view11event__name(name);
        const _event = _bind$3._0;
        const _capture = _bind$3._1;
        _M0FP37Hosi1216syasou4view16remove__listener(mounted.first, _event, _M0MPB3Map2atGsWRP26mizchi8js__core3AnyEuE(mounted.listeners, name), _capture);
        _M0MPB3Map6removeGsWRP26mizchi8js__core3AnyEuE(mounted.listeners, name);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$3 = _M0FP37Hosi1216syasou4view4keys(old);
  const _bind$4 = _bind$3.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const name = _bind$3[_];
      if (!_M0MPC16string6String11has__prefix(name, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou4view13update__propsN7_2abindS836, 0, _M0FP37Hosi1216syasou4view13update__propsN7_2abindS836.length)) && (!_M0FP37Hosi1216syasou4view8reserved(name) && _M0FP26mizchi8js__core11is__nullish(_M0MP26mizchi8js__core3Any5__get(props, name)))) {
        _M0MP36mizchi11js__browser3dom7Element15removeAttribute(element, _M0FP37Hosi1216syasou4view15attribute__name(name));
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  mounted.props = props;
  const _bind$5 = _M0FP37Hosi1216syasou4view4keys(props);
  const _bind$6 = _bind$5.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$6) {
      const name = _bind$5[_];
      _L: {
        const value = _M0MP26mizchi8js__core3Any5__get(props, name);
        if (_M0FP37Hosi1216syasou4view8reserved(name) || _M0FP26mizchi8js__core11is__nullish(value)) {
          break _L;
        }
        if (_M0MPC16string6String11has__prefix(name, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou4view13update__propsN7_2abindS842, 0, _M0FP37Hosi1216syasou4view13update__propsN7_2abindS842.length))) {
          if (_M0FP37Hosi1216syasou4view4kind(value) === "function" && !_M0MPB3Map8containsGsWRP26mizchi8js__core3AnyEuE(mounted.listeners, name)) {
            const _bind$7 = _M0FP37Hosi1216syasou4view11event__name(name);
            const _event = _bind$7._0;
            const _capture = _bind$7._1;
            const listener = (event) => {
              _M0FP37Hosi1216syasou4view6invoke(mounted.props, name, event);
            };
            _M0MPB3Map3setGsWRP26mizchi8js__core3AnyEuE(mounted.listeners, name, listener);
            _M0FP37Hosi1216syasou4view13add__listener(mounted.first, _event, listener, _capture);
          }
        } else {
          if (_M0MPC15array5Array8containsGsE(["value", "checked", "disabled", "inert"], name)) {
            _M0FP37Hosi1216syasou4view8property(mounted.first, name, value);
            let _tmp$4;
            const _p$2 = "value";
            if (!(name === _p$2)) {
              _tmp$4 = _M0FP37Hosi1216syasou4view4kind(value) === "boolean";
            } else {
              _tmp$4 = false;
            }
            if (_tmp$4) {
              if (_M0FP37Hosi1216syasou4view4bool(value)) {
                _M0MP36mizchi11js__browser3dom7Element12setAttribute(element, name, "");
              } else {
                _M0MP36mizchi11js__browser3dom7Element15removeAttribute(element, name);
              }
            }
          } else {
            let _tmp$4;
            if (_M0FP37Hosi1216syasou4view4kind(value) === "boolean") {
              let _tmp$5;
              if (!_M0MPC16string6String11has__prefix(name, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou4view13update__propsN7_2abindS848, 0, _M0FP37Hosi1216syasou4view13update__propsN7_2abindS848.length))) {
                let _tmp$6;
                if (!_M0MPC16string6String11has__prefix(name, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou4view13update__propsN7_2abindS849, 0, _M0FP37Hosi1216syasou4view13update__propsN7_2abindS849.length))) {
                  let _tmp$7;
                  const _p$2 = "draggable";
                  if (!(name === _p$2)) {
                    const _p$3 = "spellCheck";
                    _tmp$7 = !(name === _p$3);
                  } else {
                    _tmp$7 = false;
                  }
                  _tmp$6 = _tmp$7;
                } else {
                  _tmp$6 = false;
                }
                _tmp$5 = _tmp$6;
              } else {
                _tmp$5 = false;
              }
              _tmp$4 = _tmp$5;
            } else {
              _tmp$4 = false;
            }
            if (_tmp$4) {
              if (_M0FP37Hosi1216syasou4view4bool(value)) {
                _M0MP36mizchi11js__browser3dom7Element12setAttribute(element, _M0FP37Hosi1216syasou4view15attribute__name(name), "");
              } else {
                _M0MP36mizchi11js__browser3dom7Element15removeAttribute(element, _M0FP37Hosi1216syasou4view15attribute__name(name));
              }
            } else {
              if (!_M0FP37Hosi1216syasou4view9identical(_M0MP26mizchi8js__core3Any5__get(old, name), value)) {
                _M0MP36mizchi11js__browser3dom7Element12setAttribute(element, _M0FP37Hosi1216syasou4view15attribute__name(name), _M0MP26mizchi8js__core3Any10to__string(value));
              }
            }
          }
        }
        break _L;
      }
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const reference = _M0MP26mizchi8js__core3Any5__get(props, "ref");
  if (!_M0FP26mizchi8js__core11is__nullish(reference)) {
    _M0FP37Hosi1216syasou4view11assign__ref(reference, mounted.first);
  }
  _M0FP37Hosi1216syasou4view13motion__props(mounted, props, fresh);
}
function _M0FP37Hosi1216syasou4view11mount__node(parent, tree, before, context, svg) {
  _M0FP37Hosi1216syasou4view7runtime.serial = _M0FP37Hosi1216syasou4view7runtime.serial + 1 | 0;
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(7);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "syasou-");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, _M0FP37Hosi1216syasou4view7runtime.serial);
  const id = _string_builder.val;
  let first;
  let last;
  let is_svg;
  _L: {
    switch (tree.$tag) {
      case 2: {
        const _Tag = tree;
        const _tag = _Tag._0;
        const is_svg$2 = svg || _tag === "svg";
        const _p = is_svg$2 ? _M0MP36mizchi11js__browser3dom8Document15createElementNs(_M0FP36mizchi11js__browser3dom8document(), "http://www.w3.org/2000/svg", _tag) : _M0MP36mizchi11js__browser3dom8Document13createElement(_M0FP36mizchi11js__browser3dom8document(), _tag);
        const node = _p;
        first = node;
        last = node;
        is_svg = is_svg$2;
        break _L;
      }
      case 1: {
        const _Text = tree;
        const _value = _Text._0;
        const _p$2 = _M0MP36mizchi11js__browser3dom8Document14createTextNode(_M0FP36mizchi11js__browser3dom8document(), _value);
        const node$2 = _p$2;
        first = node$2;
        last = node$2;
        is_svg = svg;
        break _L;
      }
      default: {
        const first$2 = _M0MP36mizchi11js__browser3dom8Document13createComment(_M0FP36mizchi11js__browser3dom8document(), "");
        const last$2 = _M0MP36mizchi11js__browser3dom8Document13createComment(_M0FP36mizchi11js__browser3dom8document(), "");
        first = first$2;
        last = last$2;
        is_svg = svg;
        break _L;
      }
    }
  }
  _M0MP36mizchi11js__browser3dom4Node12insertBefore(parent, first, before);
  if (!_M0FP37Hosi1216syasou4view10same__node(first, last)) {
    _M0MP36mizchi11js__browser3dom4Node12insertBefore(parent, last, before);
  }
  const _tmp = [];
  const _tmp$2 = _M0FP37Hosi1216syasou4view10new__scope();
  const _tmp$3 = _M0FP26mizchi8js__core11new__object();
  const _bind = [];
  const mounted = new _M0TP37Hosi1216syasou4view7Mounted(tree, parent, first, last, _tmp, _tmp$2, _tmp$3, _M0MPB3Map3MapGsWRP26mizchi8js__core3AnyEuE(new _M0TPB9ArrayViewGUsWRP26mizchi8js__core3AnyEuEE(_bind, 0, 0), undefined), context, false, false, [], () => {
  }, () => {
  }, _M0DTPC16option6OptionGRP37Hosi1216syasou4view9AnimationE4None__, "", id, undefined, is_svg);
  _M0FP37Hosi1216syasou4view7guarded(() => {
    _M0FP37Hosi1216syasou4view5patch(mounted, tree, context, true);
  }, () => {
    _M0FP37Hosi1216syasou4view7dispose(mounted);
  });
  return mounted;
}
function _M0FP37Hosi1216syasou4view5patch(mounted, tree, context, fresh) {
  mounted.tree = tree;
  mounted.context = context;
  switch (tree.$tag) {
    case 0: {
      return;
    }
    case 1: {
      const _Text = tree;
      const _value = _Text._0;
      _M0FP37Hosi1216syasou4view9set__text(mounted.first, _value);
      return;
    }
    case 2: {
      const _Tag = tree;
      const _tag = _Tag._0;
      const _props = _Tag._1;
      const _children = _Tag._2;
      _M0FP37Hosi1216syasou4view13update__props(mounted, _props, fresh);
      const _tmp = mounted.first;
      const _tmp$2 = mounted.children;
      let _tmp$3;
      if (mounted.svg) {
        const _p = "foreignObject";
        _tmp$3 = !(_tag === _p);
      } else {
        _tmp$3 = false;
      }
      mounted.children = _M0FP37Hosi1216syasou4view9reconcile(_tmp, _tmp$2, _children, _M0DTPC16option6OptionGRP36mizchi11js__browser3dom4NodeE4None__, context, _tmp$3);
      if (fresh) {
        _M0FP37Hosi1216syasou4view15mount__behavior(mounted);
        return;
      } else {
        return;
      }
    }
    case 3: {
      const _Group = tree;
      const _children$2 = _Group._0;
      mounted.children = _M0FP37Hosi1216syasou4view9reconcile(mounted.parent, mounted.children, _children$2, new _M0DTPC16option6OptionGRP36mizchi11js__browser3dom4NodeE4Some(mounted.last), context, mounted.svg);
      return;
    }
    case 4: {
      const _Component = tree;
      const _render = _Component._1;
      const child = _M0FP37Hosi1216syasou4view14run__in__scope(mounted.scope, _render);
      mounted.children = _M0FP37Hosi1216syasou4view9reconcile(mounted.parent, mounted.children, [child], new _M0DTPC16option6OptionGRP36mizchi11js__browser3dom4NodeE4Some(mounted.last), context, mounted.svg);
      return;
    }
    case 7: {
      const _Boundary = tree;
      const _child = _Boundary._0;
      const _on_error = _Boundary._1;
      if (!mounted.failed) {
        _M0FP37Hosi1216syasou4view7attempt(() => {
          mounted.children = _M0FP37Hosi1216syasou4view9reconcile(mounted.parent, mounted.children, [_child], new _M0DTPC16option6OptionGRP36mizchi11js__browser3dom4NodeE4Some(mounted.last), context, mounted.svg);
        }, () => {
          mounted.failed = true;
          const _bind = mounted.children;
          const _bind$2 = _bind.length;
          let _tmp$4 = 0;
          while (true) {
            const _ = _tmp$4;
            if (_ < _bind$2) {
              const child$2 = _bind[_];
              _M0FP37Hosi1216syasou4view7dispose(child$2);
              _tmp$4 = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          mounted.children = [];
          _M0FP37Hosi1216syasou4view13after__render(_on_error);
        });
        return;
      } else {
        return;
      }
    }
    case 5: {
      const _Control = tree;
      const _library = _Control._0;
      const _name = _Control._1;
      const _props$2 = _Control._2;
      const _children$3 = _Control._3;
      if (_library === "motion" && _name === "AnimatePresence") {
        _M0FP37Hosi1216syasou4view15patch__presence(mounted, _children$3, context);
        return undefined;
      }
      const _bind = _M0FP37Hosi1216syasou4view12run__control(mounted, _library, _name, _props$2, _children$3, context);
      const _next = _bind._0;
      const _context = _bind._1;
      mounted.children = _M0FP37Hosi1216syasou4view9reconcile(mounted.parent, mounted.children, [_next], new _M0DTPC16option6OptionGRP36mizchi11js__browser3dom4NodeE4Some(mounted.last), _context, mounted.svg);
      return;
    }
    default: {
      const _Portal = tree;
      const _children$4 = _Portal._0;
      mounted.children = _M0FP37Hosi1216syasou4view9reconcile(_M0FP37Hosi1216syasou4view10body__node(), mounted.children, _children$4, _M0DTPC16option6OptionGRP36mizchi11js__browser3dom4NodeE4None__, context, false);
      return;
    }
  }
}
function _M0FP37Hosi1216syasou4view15patch__presence(mounted, children, context) {
  if (mounted.exiting) {
    return undefined;
  }
  if (mounted.children.length === 1 && (children.length === 1 && !_M0FP37Hosi1216syasou4view10compatible(_M0MPC15array5Array2atGRP37Hosi1216syasou4view7MountedE(mounted.children, 0).tree, _M0MPC15array5Array2atGRP37Hosi1216syasou4view7MountedE(children, 0)))) {
    const old = _M0MPC15array5Array2atGRP37Hosi1216syasou4view7MountedE(mounted.children, 0);
    const exit_style = _M0FP37Hosi1216syasou4view10style__map(_M0MP26mizchi8js__core3Any5__get(old.props, "exit"));
    const transition = _M0MP26mizchi8js__core3Any5__get(old.props, "transition");
    const duration = _M0FP26mizchi8js__core11is__nullish(transition) ? 300 : _M0FP37Hosi1216syasou4view14number__option(transition, "duration", 0.3) * 1000;
    if (!(exit_style.size === 0) && duration > 0) {
      mounted.exiting = true;
      const _bind = old.animation;
      if (_bind.$tag === 1) {
        const _Some = _bind;
        const _animation = _Some._0;
        _M0MP37Hosi1216syasou4view9Animation6cancel(_animation);
      }
      const _tmp = old.first;
      const _acc = [];
      const _it = _M0MPB3Map4keysGsWRP26mizchi8js__core3AnyEuE(exit_style);
      let _tmp$2;
      while (true) {
        const _bind$2 = _M0MPB4Iter4nextGsE(_it);
        if (_bind$2 === undefined) {
          _tmp$2 = _M0MPC15array10FixedArray11from__arrayGsE(new _M0TPB9ArrayViewGsE(_acc, 0, _acc.length));
          break;
        } else {
          const _Some = _bind$2;
          const _name = _Some;
          _M0MPC15array5Array4pushGRP37Hosi1216syasou4view7MountedE(_acc, _name);
          continue;
        }
      }
      const from = _M0FP37Hosi1216syasou4view14current__style(_tmp, _tmp$2);
      _M0FP37Hosi1216syasou4view12apply__style(old.first, exit_style);
      old.animation = new _M0DTPC16option6OptionGRP37Hosi1216syasou4view9AnimationE4Some(_M0FP37Hosi1216syasou4view7animate(old.first, from, _M0FP37Hosi1216syasou4view11map__object(exit_style), duration, 0, "ease-out", () => {
        if (mounted.scope.alive) {
          _M0FP37Hosi1216syasou4view7dispose(old);
          mounted.children = [];
          mounted.exiting = false;
          _M0FP37Hosi1216syasou4view5patch(mounted, mounted.tree, mounted.context, false);
          _M0FP37Hosi1216syasou4view14flush__effects();
          return;
        } else {
          return;
        }
      }));
      return undefined;
    }
  }
  mounted.children = _M0FP37Hosi1216syasou4view9reconcile(mounted.parent, mounted.children, children, new _M0DTPC16option6OptionGRP36mizchi11js__browser3dom4NodeE4Some(mounted.last), context, mounted.svg);
}
function _M0FP37Hosi1216syasou4view9reconcile(parent, old, next, before, context, svg) {
  const used = _M0MPC15array5Array4makeGbE(old.length, false);
  const result = [];
  const created = [];
  _M0FP37Hosi1216syasou4view7guarded(() => {
    const _bind = next.length;
    let _tmp = 0;
    while (true) {
      const index = _tmp;
      if (index < _bind) {
        const tree = next[index];
        let found = undefined;
        if (index < old.length && (!_M0MPC15array5Array2atGbE(used, index) && _M0FP37Hosi1216syasou4view10compatible(_M0MPC15array5Array2atGRP37Hosi1216syasou4view7MountedE(old, index).tree, tree))) {
          found = index;
        }
        const _bind$2 = found;
        if (_bind$2 === undefined) {
          const _bind$3 = _M0FP37Hosi1216syasou4view3key(tree);
          if (_bind$3 === undefined) {
          } else {
            const _bind$4 = old.length;
            let _tmp$2 = 0;
            while (true) {
              const i = _tmp$2;
              if (i < _bind$4) {
                const item = old[i];
                if (!_M0MPC15array5Array2atGbE(used, i) && _M0FP37Hosi1216syasou4view10compatible(item.tree, tree)) {
                  found = i;
                  break;
                }
                _tmp$2 = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          }
        }
        const _bind$3 = found;
        if (_bind$3 === undefined) {
          const anchor = index < old.length ? new _M0DTPC16option6OptionGRP36mizchi11js__browser3dom4NodeE4Some(_M0MPC15array5Array2atGRP37Hosi1216syasou4view7MountedE(old, index).first) : before;
          const item = _M0FP37Hosi1216syasou4view11mount__node(parent, tree, anchor, context, svg);
          _M0MPC15array5Array4pushGRP37Hosi1216syasou4view7MountedE(created, item);
          _M0MPC15array5Array4pushGRP37Hosi1216syasou4view7MountedE(result, item);
        } else {
          const _Some = _bind$3;
          const _i = _Some;
          _M0MPC15array5Array3setGbE(used, _i, true);
          _M0FP37Hosi1216syasou4view5patch(_M0MPC15array5Array2atGRP37Hosi1216syasou4view7MountedE(old, _i), tree, context, false);
          _M0MPC15array5Array4pushGRP37Hosi1216syasou4view7MountedE(result, _M0MPC15array5Array2atGRP37Hosi1216syasou4view7MountedE(old, _i));
        }
        _tmp = index + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$2 = old.length;
    let _tmp$2 = 0;
    while (true) {
      const i = _tmp$2;
      if (i < _bind$2) {
        const item = old[i];
        if (!_M0MPC15array5Array2atGbE(used, i)) {
          _M0FP37Hosi1216syasou4view7dispose(item);
        }
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    let cursor = before;
    let _tmp$3 = result.length - 1 | 0;
    while (true) {
      const i = _tmp$3;
      if (i >= 0) {
        const item = _M0MPC15array5Array2atGRP37Hosi1216syasou4view7MountedE(result, i);
        if (!_M0FP37Hosi1216syasou4view20same__optional__node(_M0MP36mizchi11js__browser3dom4Node11nextSibling(item.last), cursor)) {
          _M0FP37Hosi1216syasou4view11move__range(parent, item.first, item.last, cursor);
        }
        cursor = new _M0DTPC16option6OptionGRP36mizchi11js__browser3dom4NodeE4Some(item.first);
        _tmp$3 = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }, () => {
    const _bind = created.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const item = created[_];
        _M0FP37Hosi1216syasou4view7dispose(item);
        _tmp = _ + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  });
  return result;
}
function _M0FP37Hosi1216syasou4view11clear__node(node) {
  while (true) {
    const _bind = _M0MP36mizchi11js__browser3dom4Node10firstChild(node);
    if (_bind.$tag === 1) {
      const _Some = _bind;
      const _child = _Some._0;
      _M0MP36mizchi11js__browser3dom4Node11removeChild(node, _child);
      continue;
    } else {
      return;
    }
  }
}
function _M0FP37Hosi1216syasou4view14empty__context() {
  return new _M0TP37Hosi1216syasou4view7Context(undefined, undefined);
}
function _M0FP37Hosi1216syasou4view5mount(root, tree) {
  const parent = root;
  _M0FP37Hosi1216syasou4view11clear__node(parent);
  const mounted = _M0FP37Hosi1216syasou4view11mount__node(parent, tree, _M0DTPC16option6OptionGRP36mizchi11js__browser3dom4NodeE4None__, _M0FP37Hosi1216syasou4view14empty__context(), false);
  const pending = _M0MPC13ref3Ref3RefGbE(false);
  const live = _M0MPC13ref3Ref3RefGbE(true);
  _M0FP37Hosi1216syasou4view7runtime.schedule = () => {
    if (!pending.val && live.val) {
      pending.val = true;
      _M0FP37Hosi1216syasou4view5queue(() => {
        pending.val = false;
        if (live.val) {
          _M0FP37Hosi1216syasou4view5patch(mounted, tree, _M0FP37Hosi1216syasou4view14empty__context(), false);
          _M0FP37Hosi1216syasou4view14flush__effects();
          return;
        } else {
          return;
        }
      });
      return;
    } else {
      return;
    }
  };
  _M0FP37Hosi1216syasou4view14flush__effects();
  return () => {
    live.val = false;
    _M0FP37Hosi1216syasou4view7dispose(mounted);
  };
}
function _M0MP37Hosi1216syasou4view7ViewRef12set__currentGRP37Hosi1216syasou2ui14WindowRendererE(self, value) {
  self.current = value;
}
function _M0FP37Hosi1216syasou4view10same__deps(a, b) {
  if (a.length === b.length) {
    const _p = _M0MPB4Iter3zipGRP26mizchi8js__core3AnyRP26mizchi8js__core3AnyE(_M0MPC15array5Array4iterGRP26mizchi8js__core3AnyE(a), _M0MPC15array5Array4iterGRP26mizchi8js__core3AnyE(b));
    let _tmp;
    while (true) {
      const _p$2 = _M0MPB4Iter4nextGsE(_p);
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
    _M0MPC15array5Array4pushGRP37Hosi1216syasou4view7MountedE(scope.slots, new _M0TP37Hosi1216syasou4view4Slot(initialize(), [], () => {
    }, 0));
  }
  return { _0: _M0MPC15array5Array2atGRP37Hosi1216syasou4view7MountedE(scope.slots, index), _1: fresh };
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
function _M0FP37Hosi1216syasou4view16use__state__lazyGOWRP37Hosi1216syasou2ui8AppPropsERP37Hosi1216syasou4view7ElementE(initialize) {
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
function _M0FP37Hosi1216syasou4view10use__stateGOWRP37Hosi1216syasou2ui8AppPropsERP37Hosi1216syasou4view7ElementE(value) {
  return _M0FP37Hosi1216syasou4view16use__state__lazyGOWRP37Hosi1216syasou2ui8AppPropsERP37Hosi1216syasou4view7ElementE(() => value);
}
function _M0FP37Hosi1216syasou4view10use__stateGbE(value) {
  return _M0FP37Hosi1216syasou4view16use__state__lazyGbE(() => value);
}
function _M0FP37Hosi1216syasou4view10use__stateGiE(value) {
  return _M0FP37Hosi1216syasou4view16use__state__lazyGiE(() => value);
}
function _M0FP37Hosi1216syasou4view6updateGiE(setter, transform) {
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
    _M0MPC15array5Array4pushGRP37Hosi1216syasou4view7MountedE(_M0FP37Hosi1216syasou4view7runtime.effects, () => {
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
function _M0FP37Hosi1216syasou2ui6effect(run, deps) {
  _M0FP37Hosi1216syasou4view11use__effect(run, deps);
}
function _M0FP37Hosi1216syasou2ui9componentGuE(render, props, key) {
  return _M0FP37Hosi1216syasou4view9componentGuE(render, props, key);
}
function _M0FP37Hosi1216syasou2ui9componentGRP37Hosi1216syasou2ui8AppPropsE(render, props, key) {
  return _M0FP37Hosi1216syasou4view9componentGRP37Hosi1216syasou2ui8AppPropsE(render, props, key);
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
function _M0FP37Hosi1216syasou2ui4node(tag, attrs, children) {
  const _p = _M0FP37Hosi1216syasou2ui10properties(attrs);
  return new _M0DTP37Hosi1216syasou4view7Element3Tag(tag, _p, children);
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
function _M0FP37Hosi1216syasou2ui1pGdE(name, value) {
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
function _M0FP37Hosi1216syasou2ui6styles(values) {
  return _M0FP37Hosi1216syasou2ui10properties(values);
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
function _M0FP37Hosi1216syasou2ui6updateGiE(setter, transform) {
  _M0FP37Hosi1216syasou4view6updateGiE(setter, transform);
}
function _M0FP37Hosi1216syasou2ui11prepare__ui() {
  return _M0MP26mizchi8js__core7Promise7resolveGuE(undefined);
}
function _M0FP37Hosi1216syasou2ui12motion__node(tag, attrs, children) {
  return _M0FP37Hosi1216syasou2ui4node(tag, attrs, children);
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
        _M0MPC15array5Array4pushGRP37Hosi1216syasou4view7MountedE(items, _name);
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
function _M0FP37Hosi1216syasou2ui16world__component(world_module) {
  return _M0MP26mizchi8js__core3Any5__get(world_module, "default");
}
function _M0FP37Hosi1216syasou2ui14clear__timeout(timer) {
  _M0MP36mizchi11js__browser3dom6Window12clearTimeout(_M0FP36mizchi11js__browser3dom6window(), timer);
}
function _M0FP37Hosi1216syasou2ui12storage__key(key) {
  return _M0FP37Hosi1216syasou2ui4demo ? `${key}.demo` : key;
}
function _M0FP37Hosi1216syasou2ui12has__entered() {
  let _try_err;
  _L: {
    const _bind = _M0FP26mizchi8js__core9try__sync(() => _M0IPC16option6OptionPB2Eq5equalGsE(_M0MP36mizchi11js__browser7storage7Storage7getItem(_M0FP36mizchi11js__browser7storage14sessionStorage(), _M0FP37Hosi1216syasou2ui12storage__key("syasou.entered.v1")), _M0FP37Hosi1216syasou2ui12has__enteredN6constrS1434));
    if (_bind.$tag === 1) {
      const _ok = _bind;
      return _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
  }
  return false;
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
      _M0MPC15array5Array4pushGRP37Hosi1216syasou4view7MountedE(_p$7, _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M0 795 Q160 770 310 800 T610 795 T940 810 T1200 795 V900 H0Z")], []));
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
      _M0MPC15array5Array10push__iterGRP37Hosi1216syasou4view7ElementE(_p$7, _M0MPC15array5Array4iterGRP37Hosi1216syasou4view7ElementE(_tmp$8));
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
  const canvas = _M0FP37Hosi1216syasou4view4slot(() => _M0FP37Hosi1216syasou4view8new__refGRP36mizchi11js__browser3dom17HTMLCanvasElementE(_p))._0.value;
  const _p$2 = _M0DTPC16option6OptionGRP37Hosi1216syasou2ui14WindowRendererE4None__;
  const renderer = _M0FP37Hosi1216syasou4view4slot(() => _M0FP37Hosi1216syasou4view8new__refGRP36mizchi11js__browser3dom4NodeE(_p$2))._0.value;
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
      _M0MP37Hosi1216syasou4view7ViewRef12set__currentGRP37Hosi1216syasou2ui14WindowRendererE(renderer, next);
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
      _M0MP37Hosi1216syasou4view7ViewRef12set__currentGRP37Hosi1216syasou2ui14WindowRendererE(renderer, _M0DTPC16option6OptionGRP37Hosi1216syasou2ui14WindowRendererE4None__);
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
  return _M0FP37Hosi1216syasou2ui9componentGRP37Hosi1216syasou2ui8AppPropsE(_M0FP37Hosi1216syasou2ui17render__landscape, props, undefined);
}
function _M0FP37Hosi1216syasou2ui15render__opening(props) {
  const reduced = _M0FP37Hosi1216syasou2ui15reduced__motion();
  const _p = _M0DTPC16option6OptionGRP36mizchi11js__browser3dom7ElementE4None__;
  const enter_button = _M0FP37Hosi1216syasou4view4slot(() => _M0FP37Hosi1216syasou4view8new__refGRP36mizchi11js__browser3dom4NodeE(_p))._0.value;
  const _p$2 = props.leaving;
  const _p$3 = props.on_complete;
  _M0FP37Hosi1216syasou2ui7observe(() => {
    if (props.leaving && reduced) {
      const _func = props.on_complete;
      _func();
      return;
    } else {
      return;
    }
  }, [_p$2, reduced, _p$3]);
  const _p$4 = props.ready;
  const _p$5 = props.leaving;
  _M0FP37Hosi1216syasou2ui7observe(() => {
    if (props.ready && !props.leaving) {
      const _bind = enter_button.current;
      if (_bind.$tag === 1) {
        const _Some = _bind;
        const _node = _Some._0;
        _M0FP37Hosi1216syasou2ui5focus(_node);
        return;
      } else {
        return;
      }
    } else {
      return;
    }
  }, [_p$4, _p$5]);
  const _tmp = [_M0FP37Hosi1216syasou2ui1pGsE("className", "opening-screen"), _M0FP37Hosi1216syasou2ui1pGsE("aria-label", "車窓のタイトル画面"), _M0FP37Hosi1216syasou2ui1pGbE("aria-busy", !props.ready && !props.failed), _M0FP37Hosi1216syasou2ui1pGbE("initial", false), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("animate", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("opacity", props.leaving ? 0 : 1)])), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("transition", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("duration", reduced ? 0 : 1.15), _M0FP37Hosi1216syasou2ui1pGsE("ease", "easeOut")])), _M0FP37Hosi1216syasou2ui1pGsE("onAnimationComplete", () => {
    if (props.leaving) {
      const _func = props.on_complete;
      _func();
      return;
    } else {
      return;
    }
  })];
  const _tmp$2 = _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "opening-light"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")], []);
  const _tmp$3 = _M0FP37Hosi1216syasou2ui12motion__node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "opening-window"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true"), _M0FP37Hosi1216syasou2ui1pGbE("initial", false), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("animate", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("x", props.leaving && !reduced ? 24 : 0), _M0FP37Hosi1216syasou2ui1pGdE("scale", props.leaving && !reduced ? 1.035 : 1)])), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("transition", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("duration", 1.15), _M0FP37Hosi1216syasou2ui1pGsE("ease", "easeOut")]))], [_M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "opening-window-glass")], [_M0FP37Hosi1216syasou2ui9landscape(new _M0TP37Hosi1216syasou2ui14LandscapeProps("mist", "local", props.ready && !props.leaving, false, false))]), _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "opening-window-edge")], [])]);
  const _tmp$4 = _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "opening-window-sill"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")], []);
  const _tmp$5 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "opening-brand"), _M0FP37Hosi1216syasou2ui1pGbE("initial", false), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("animate", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("opacity", props.leaving ? 0 : 1), _M0FP37Hosi1216syasou2ui1pGdE("y", props.leaving && !reduced ? -10 : 0)])), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("transition", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("duration", reduced ? 0 : 0.45), _M0FP37Hosi1216syasou2ui1pGsE("ease", "easeOut")]))];
  const _tmp$6 = _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "opening-emblem"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")], [_M0FP37Hosi1216syasou2ui18rail__mark_2einner(0.95)]);
  const _tmp$7 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "opening-title")];
  const _p$6 = "車窓";
  const _tmp$8 = _M0FP37Hosi1216syasou2ui4node("h1", _tmp$7, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$6)]);
  const _tmp$9 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "opening-roman"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")];
  const _p$7 = _M0FP37Hosi1216syasou2ui4demo ? "SYASOU / TRIAL" : "SYASOU";
  const _tmp$10 = _M0FP37Hosi1216syasou2ui4node("p", _tmp$9, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$7)]);
  const _tmp$11 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "opening-action")];
  let _tmp$12;
  if (props.failed) {
    const _tmp$13 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "opening-failure"), _M0FP37Hosi1216syasou2ui1pGsE("role", "alert")];
    const _tmp$14 = [];
    const _p$8 = "景色をひらけませんでした。";
    const _tmp$15 = _M0FP37Hosi1216syasou2ui4node("p", _tmp$14, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$8)]);
    const _tmp$16 = [_M0FP37Hosi1216syasou2ui1pGsE("onClick", _M0FP37Hosi1216syasou2ui6reload)];
    const _p$9 = "もう一度ひらく";
    _tmp$12 = _M0FP37Hosi1216syasou2ui4node("div", _tmp$13, [_tmp$15, _M0FP37Hosi1216syasou2ui4node("button", _tmp$16, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$9), _M0FP37Hosi1216syasou2ui12icon_2einner("RotateCcw", 14, 1, false)])]);
  } else {
    if (props.ready) {
      const _tmp$13 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "opening-ready"), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("initial", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("opacity", 0)])), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("animate", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("opacity", 1)])), _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE("transition", _M0FP37Hosi1216syasou2ui6styles([_M0FP37Hosi1216syasou2ui1pGdE("duration", reduced ? 0 : 0.4)]))];
      const _tmp$14 = [_M0FP37Hosi1216syasou2ui1pGsE("ref", enter_button), _M0FP37Hosi1216syasou2ui1pGsE("className", "opening-enter"), _M0FP37Hosi1216syasou2ui1pGsE("onClick", props.on_enter), _M0FP37Hosi1216syasou2ui1pGbE("disabled", props.leaving)];
      const _tmp$15 = [];
      const _p$8 = "窓辺へ";
      const _tmp$16 = _M0FP37Hosi1216syasou2ui4node("button", _tmp$14, [_M0FP37Hosi1216syasou2ui4node("span", _tmp$15, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$8)]), _M0FP37Hosi1216syasou2ui12icon_2einner("ArrowRight", 20, 0.9, false)]);
      const _tmp$17 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "opening-guide"), _M0FP37Hosi1216syasou2ui1pGsE("onClick", props.on_guide), _M0FP37Hosi1216syasou2ui1pGbE("disabled", props.leaving)];
      const _p$9 = "使い方を見る";
      _tmp$12 = _M0FP37Hosi1216syasou2ui12motion__node("div", _tmp$13, [_tmp$16, _M0FP37Hosi1216syasou2ui4node("button", _tmp$17, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$9)])]);
    } else {
      const _tmp$13 = [_M0FP37Hosi1216syasou2ui1pGsE("className", "opening-loading"), _M0FP37Hosi1216syasou2ui1pGsE("role", "status")];
      const _tmp$14 = _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "opening-track"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")], [_M0FP37Hosi1216syasou2ui4node("span", [], [])]);
      const _tmp$15 = [];
      const _p$8 = "旅の支度をしています";
      _tmp$12 = _M0FP37Hosi1216syasou2ui4node("div", _tmp$13, [_tmp$14, _M0FP37Hosi1216syasou2ui4node("span", _tmp$15, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$8)])]);
    }
  }
  return _M0FP37Hosi1216syasou2ui12motion__node("main", _tmp, [_tmp$2, _tmp$3, _tmp$4, _M0FP37Hosi1216syasou2ui12motion__node("div", _tmp$5, [_tmp$6, _tmp$8, _tmp$10, _M0FP37Hosi1216syasou2ui4node("div", _tmp$11, [_tmp$12])]), _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "opening-paper-grain"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")], [])]);
}
function _M0FP37Hosi1216syasou2ui7opening(props) {
  return _M0FP37Hosi1216syasou2ui9componentGRP37Hosi1216syasou2ui8AppPropsE(_M0FP37Hosi1216syasou2ui15render__opening, props, undefined);
}
function _M0FP37Hosi1216syasou2ui13save__entered() {
  let _try_err;
  _L: {
    const _bind = _M0FP26mizchi8js__core9try__sync(() => {
      _M0MP36mizchi11js__browser7storage7Storage7setItem(_M0FP36mizchi11js__browser7storage14sessionStorage(), _M0FP37Hosi1216syasou2ui12storage__key("syasou.entered.v1"), "1");
      return _M0FP26mizchi8js__core9undefined();
    });
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    return;
  }
}
function _M0FP37Hosi1216syasou2ui12set__timeout(callback, delay) {
  return _M0MP36mizchi11js__browser3dom6Window10setTimeout(_M0FP36mizchi11js__browser3dom6window(), callback, delay);
}
function _M0FP37Hosi1216syasou2ui17settle__resourcesN16_2aasync__driverS1226(_state) {
  return new _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(undefined);
}
function _M0FP37Hosi1216syasou2ui17settle__resources(resources, _cont, _err_cont) {
  const _bind = _M0MP26mizchi8js__core7Promise4waitGRP26mizchi8js__core3AnyE(_M0MP26mizchi8js__core7Promise10allSettledGuE(resources), (_cont_param) => {
    let _err;
    _L: {
      const _bind$2 = _M0FP37Hosi1216syasou2ui17settle__resourcesN16_2aasync__driverS1226(new _M0DTP37Hosi1216syasou2ui44_24Hosi121_2fsyasou_2fui_2esettle__resourcesL5State8State__0(_cont_param));
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
    return _M0FP37Hosi1216syasou2ui17settle__resourcesN16_2aasync__driverS1226(new _M0DTP37Hosi1216syasou2ui44_24Hosi121_2fsyasou_2fui_2esettle__resourcesL5State8State__0(_payload));
  } else {
    return new _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(-1);
  }
}
function _M0FP37Hosi1216syasou2ui7startupN16_2aasync__driverS1240(_state) {
  if (_state.$tag === 0) {
    const _$42$try$47$886 = _state;
    const active = _$42$try$47$886._2;
    const scene_failed = _$42$try$47$886._1;
    const _try_err = _$42$try$47$886._0;
    if (_try_err.$tag === 0) {
      return new _M0DTPC16result6ResultGOuRPB9CancelledE3Err(_try_err);
    } else {
      return active.val ? new _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(scene_failed()) : new _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(undefined);
    }
  } else {
    const _State_1 = _state;
    const active = _State_1._2;
    const set_world = _State_1._1;
    const _cont_param = _State_1._0;
    return active.val ? new _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(set_world(_M0FP37Hosi1216syasou2ui16world__component(_cont_param))) : new _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(undefined);
  }
}
function _M0FP37Hosi1216syasou2ui7startupN16_2aasync__driverS1266(_state) {
  let _tmp = _state;
  while (true) {
    const _state$2 = _tmp;
    if (_state$2.$tag === 0) {
      const _State_0 = _state$2;
      const ceiling = _State_0._3;
      const active = _State_0._2;
      const set_paper_ready = _State_0._1;
      _M0FP37Hosi1216syasou2ui14clear__timeout(ceiling);
      return active.val ? new _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(set_paper_ready(true)) : new _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(undefined);
    } else {
      const _$42$try$47$891 = _state$2;
      const ceiling = _$42$try$47$891._3;
      const active = _$42$try$47$891._2;
      const set_paper_ready = _$42$try$47$891._1;
      const _try_err = _$42$try$47$891._0;
      if (_try_err.$tag === 0) {
        return new _M0DTPC16result6ResultGOuRPB9CancelledE3Err(_try_err);
      } else {
        _tmp = new _M0DTP37Hosi1216syasou2ui59_24Hosi121_2fsyasou_2fui_2estartup_2elambda_2elambda_2f1263L5State8State__0(undefined, set_paper_ready, active, ceiling);
        continue;
      }
    }
  }
}
function _M0FP37Hosi1216syasou2ui7startup(_props) {
  const _bind = _M0FP37Hosi1216syasou4view10use__stateGOWRP37Hosi1216syasou2ui8AppPropsERP37Hosi1216syasou4view7ElementE(undefined);
  const _world = _bind._0;
  const _set_world = _bind._1;
  const _bind$2 = _M0FP37Hosi1216syasou4view10use__stateGbE(true);
  const _show_opening = _bind$2._0;
  const _set_opening = _bind$2._1;
  const _bind$3 = _M0FP37Hosi1216syasou4view16use__state__lazyGbE(() => !_M0FP37Hosi1216syasou2ui12has__entered());
  const _wants_title = _bind$3._0;
  const _set_wants_title = _bind$3._1;
  const _bind$4 = _M0FP37Hosi1216syasou4view10use__stateGbE(false);
  const _world_ready = _bind$4._0;
  const _set_world_ready = _bind$4._1;
  const _bind$5 = _M0FP37Hosi1216syasou4view10use__stateGbE(false);
  const _paper_ready = _bind$5._0;
  const _set_paper_ready = _bind$5._1;
  const _bind$6 = _M0FP37Hosi1216syasou4view10use__stateGbE(false);
  const _failed = _bind$6._0;
  const _set_failed = _bind$6._1;
  const _bind$7 = _M0FP37Hosi1216syasou4view10use__stateGiE(0);
  const _guide_request = _bind$7._0;
  const _set_guide_request = _bind$7._1;
  const ready = _world_ready && (_paper_ready && !_failed);
  const scene_ready = _M0FP37Hosi1216syasou4view13use__callbackGWEuE(() => {
    _set_world_ready(true);
  }, []);
  const scene_failed = _M0FP37Hosi1216syasou4view13use__callbackGWEuE(() => {
    _set_failed(true);
    _set_opening(true);
  }, []);
  _M0FP37Hosi1216syasou2ui6effect(() => {
    const active = _M0MPC13ref3Ref3RefGbE(true);
    _M0FP37Hosi1216syasou2ui6launch((_cont, _err_cont) => {
      let _err;
      _L: {
        const _bind$8 = _M0MP26mizchi8js__core7Promise4waitGRP26mizchi8js__core3AnyE(_M0FP37Hosi1216syasou2ui11load__world(), (_cont_param) => {
          let _err$2;
          _L$2: {
            const _bind$9 = _M0FP37Hosi1216syasou2ui7startupN16_2aasync__driverS1240(new _M0DTP37Hosi1216syasou2ui59_24Hosi121_2fsyasou_2fui_2estartup_2elambda_2elambda_2f1237L5State8State__1(_cont_param, _set_world, active));
            let _bind$10;
            if (_bind$9.$tag === 1) {
              const _ok = _bind$9;
              _bind$10 = _ok._0;
            } else {
              const _err$3 = _bind$9;
              _err$2 = _err$3._0;
              break _L$2;
            }
            if (_bind$10 === -1) {
              return;
            } else {
              const _Some = _bind$10;
              const _payload = _Some;
              _cont(_payload);
              return;
            }
          }
          _err_cont(_err$2);
        }, (_cont_param) => {
          let _err$2;
          _L$2: {
            const _bind$9 = _M0FP37Hosi1216syasou2ui7startupN16_2aasync__driverS1240(new _M0DTP37Hosi1216syasou2ui59_24Hosi121_2fsyasou_2fui_2estartup_2elambda_2elambda_2f1237L5State12_2atry_2f886(_cont_param, scene_failed, active));
            let _bind$10;
            if (_bind$9.$tag === 1) {
              const _ok = _bind$9;
              _bind$10 = _ok._0;
            } else {
              const _err$3 = _bind$9;
              _err$2 = _err$3._0;
              break _L$2;
            }
            if (_bind$10 === -1) {
              return;
            } else {
              const _Some = _bind$10;
              const _payload = _Some;
              _cont(_payload);
              return;
            }
          }
          _err_cont(_err$2);
        });
        let _tmp;
        if (_bind$8.$tag === 1) {
          const _ok = _bind$8;
          _tmp = _ok._0;
        } else {
          const _err$2 = _bind$8;
          _err = _err$2._0;
          break _L;
        }
        const _tmp$2 = _tmp;
        if (_tmp$2.$tag === 1) {
          const _Some = _tmp$2;
          const _payload = _Some._0;
          return _M0FP37Hosi1216syasou2ui7startupN16_2aasync__driverS1240(new _M0DTP37Hosi1216syasou2ui59_24Hosi121_2fsyasou_2fui_2estartup_2elambda_2elambda_2f1237L5State8State__1(_payload, _set_world, active));
        } else {
          return new _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(-1);
        }
      }
      return _M0FP37Hosi1216syasou2ui7startupN16_2aasync__driverS1240(new _M0DTP37Hosi1216syasou2ui59_24Hosi121_2fsyasou_2fui_2estartup_2elambda_2elambda_2f1237L5State12_2atry_2f886(_err, scene_failed, active));
    });
    return () => {
      active.val = false;
    };
  }, []);
  const reveal = _M0FP37Hosi1216syasou4view13use__callbackGWEuE(() => {
    _set_opening(false);
  }, []);
  const show_title = _M0FP37Hosi1216syasou4view13use__callbackGWEuE(() => {
    _set_wants_title(true);
    _set_opening(true);
  }, []);
  _M0FP37Hosi1216syasou2ui6effect(() => {
    const active = _M0MPC13ref3Ref3RefGbE(true);
    const ceiling = _M0FP37Hosi1216syasou2ui12set__timeout(() => {
      if (active.val) {
        _set_paper_ready(true);
        return;
      } else {
        return;
      }
    }, 5000);
    _M0FP37Hosi1216syasou2ui6launch((_cont, _err_cont) => {
      let _err;
      _L: {
        const _bind$8 = _M0FP37Hosi1216syasou2ui17settle__resources([_M0FP37Hosi1216syasou2ui13image__decode("/paper-grain.png"), _M0FP37Hosi1216syasou2ui10font__load("400 16px \"Shippori Mincho\"", " "), _M0FP37Hosi1216syasou2ui10font__load("500 16px \"Shippori Mincho\"", " "), _M0FP37Hosi1216syasou2ui10font__load("400 16px \"DM Mono\"", " "), _M0FP37Hosi1216syasou2ui10font__load("500 80px \"Syasou Title\"", "車窓")], (_cont_param) => {
          let _err$2;
          _L$2: {
            const _bind$9 = _M0FP37Hosi1216syasou2ui7startupN16_2aasync__driverS1266(new _M0DTP37Hosi1216syasou2ui59_24Hosi121_2fsyasou_2fui_2estartup_2elambda_2elambda_2f1263L5State8State__0(_cont_param, _set_paper_ready, active, ceiling));
            let _bind$10;
            if (_bind$9.$tag === 1) {
              const _ok = _bind$9;
              _bind$10 = _ok._0;
            } else {
              const _err$3 = _bind$9;
              _err$2 = _err$3._0;
              break _L$2;
            }
            if (_bind$10 === -1) {
              return;
            } else {
              const _Some = _bind$10;
              const _payload = _Some;
              _cont(_payload);
              return;
            }
          }
          _err_cont(_err$2);
        }, (_cont_param) => {
          let _err$2;
          _L$2: {
            const _bind$9 = _M0FP37Hosi1216syasou2ui7startupN16_2aasync__driverS1266(new _M0DTP37Hosi1216syasou2ui59_24Hosi121_2fsyasou_2fui_2estartup_2elambda_2elambda_2f1263L5State12_2atry_2f891(_cont_param, _set_paper_ready, active, ceiling));
            let _bind$10;
            if (_bind$9.$tag === 1) {
              const _ok = _bind$9;
              _bind$10 = _ok._0;
            } else {
              const _err$3 = _bind$9;
              _err$2 = _err$3._0;
              break _L$2;
            }
            if (_bind$10 === -1) {
              return;
            } else {
              const _Some = _bind$10;
              const _payload = _Some;
              _cont(_payload);
              return;
            }
          }
          _err_cont(_err$2);
        });
        let _bind$9;
        if (_bind$8.$tag === 1) {
          const _ok = _bind$8;
          _bind$9 = _ok._0;
        } else {
          const _err$2 = _bind$8;
          _err = _err$2._0;
          break _L;
        }
        if (_bind$9 === -1) {
          return new _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(-1);
        } else {
          const _Some = _bind$9;
          const _payload = _Some;
          return _M0FP37Hosi1216syasou2ui7startupN16_2aasync__driverS1266(new _M0DTP37Hosi1216syasou2ui59_24Hosi121_2fsyasou_2fui_2estartup_2elambda_2elambda_2f1263L5State8State__0(_payload, _set_paper_ready, active, ceiling));
        }
      }
      return _M0FP37Hosi1216syasou2ui7startupN16_2aasync__driverS1266(new _M0DTP37Hosi1216syasou2ui59_24Hosi121_2fsyasou_2fui_2estartup_2elambda_2elambda_2f1263L5State12_2atry_2f891(_err, _set_paper_ready, active, ceiling));
    });
    return () => {
      active.val = false;
      _M0FP37Hosi1216syasou2ui14clear__timeout(ceiling);
    };
  }, []);
  _M0FP37Hosi1216syasou2ui6effect(() => _M0FP37Hosi1216syasou2ui12on__document("visibilitychange", () => {
    _M0FP37Hosi1216syasou2ui11root__class("page-hidden", _M0FP37Hosi1216syasou2ui6hidden());
  }), []);
  const enter = () => {
    if (ready) {
      _M0FP37Hosi1216syasou2ui13save__entered();
      _set_wants_title(false);
      return;
    } else {
      return;
    }
  };
  const guide = () => {
    _M0FP37Hosi1216syasou2ui6updateGiE(_set_guide_request, (n) => n + 1 | 0);
    enter();
  };
  let _tmp;
  if (_world === undefined) {
    _tmp = _M0DTP37Hosi1216syasou4view7Element5Blank__;
  } else {
    const _Some = _world;
    const _render = _Some;
    const _p = _M0FP37Hosi1216syasou2ui9componentGRP37Hosi1216syasou2ui8AppPropsE(_render, new _M0TP37Hosi1216syasou2ui8AppProps(_show_opening, _guide_request, scene_ready, show_title), undefined);
    _tmp = new _M0DTP37Hosi1216syasou4view7Element8Boundary(_p, scene_failed);
  }
  return _M0FP37Hosi1216syasou2ui5group([_tmp, _show_opening ? _M0FP37Hosi1216syasou2ui7opening(new _M0TP37Hosi1216syasou2ui12OpeningProps(ready, ready && !_wants_title, _failed, enter, guide, reveal)) : _M0DTP37Hosi1216syasou4view7Element5Blank__]);
}
function _M0FP37Hosi1216syasou2ui5startN16_2aasync__driverS1294(_state) {
  const root = _M0MPC16option6Option6unwrapGRP36mizchi11js__browser3dom7ElementE(_M0MP36mizchi11js__browser3dom8Document14getElementById(_M0FP36mizchi11js__browser3dom8document(), "root"));
  _M0FP37Hosi1216syasou4view5mount(root, _M0FP37Hosi1216syasou2ui9componentGuE(_M0FP37Hosi1216syasou2ui7startup, undefined, undefined));
  return new _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(undefined);
}
function _M0FP37Hosi1216syasou2ui5start() {
  const _func = _M0FP26mizchi8js__core10promisify0GuE((_cont, _err_cont) => {
    const _bind = _M0MP26mizchi8js__core7Promise4waitGuE(_M0FP37Hosi1216syasou2ui11prepare__ui(), (_cont_param) => {
      let _err;
      _L: {
        const _bind$2 = _M0FP37Hosi1216syasou2ui5startN16_2aasync__driverS1294(new _M0DTP37Hosi1216syasou2ui48_24Hosi121_2fsyasou_2fui_2estart_2elambda_2f1291L5State8State__0(_cont_param));
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
    let _bind$2;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _bind$2 = _ok._0;
    } else {
      return _bind;
    }
    if (_bind$2 === -1) {
      return new _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(-1);
    } else {
      const _Some = _bind$2;
      const _payload = _Some;
      return _M0FP37Hosi1216syasou2ui5startN16_2aasync__driverS1294(new _M0DTP37Hosi1216syasou2ui48_24Hosi121_2fsyasou_2fui_2estart_2elambda_2f1291L5State8State__0(_payload));
    }
  });
  return _func();
}
function _M0FP37Hosi1216syasou11ui__startup5start() {
  return _M0FP37Hosi1216syasou2ui5start();
}
export { _M0FP37Hosi1216syasou11ui__startup5start as start }
