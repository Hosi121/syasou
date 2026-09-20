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
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
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
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
const _M0FPB20uint__to__string__js = (x, radix) => {
  return (x >>> 0).toString(radix);
};
function _M0TPB4IterGRP37Hosi1216syasou4view7ElementE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGRP26mizchi8js__core3AnyE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function $oob() {
  throw new Error("Index out of bounds");
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
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
function _M0TPB9ArrayViewGRP37Hosi1216syasou4view7ElementE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGRP26mizchi8js__core3AnyE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
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
function _M0TPB5EntryGssE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsWRP26mizchi8js__core3AnyEuE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB8MutLocalGORPB5EntryGssEE(param0) {
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
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0FP26mizchi8js__core9undefined = () => undefined;
const _M0MP26mizchi8js__core3Any5__get = (obj, key) => obj[key];
const _M0FP26mizchi8js__core21ffi__promise__resolve = (value) => Promise.resolve(value);
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
function _M0TP37Hosi1216syasou4view5Scope(param0, param1, param2) {
  this.slots = param0;
  this.cursor = param1;
  this.alive = param2;
}
const _M0FP37Hosi1216syasou4view15shared__runtime = initial => globalThis[Symbol.for('syasou.view.runtime')] ??= initial;
const _M0FP37Hosi1216syasou4view12active__node = () => document.activeElement;
const _M0FP37Hosi1216syasou4view4kind = value => typeof value;
const _M0FP37Hosi1216syasou4view10event__key = event => event.key;
const _M0FP37Hosi1216syasou4view11focus__node = node => node.focus({preventScroll:true});
const _M0FP37Hosi1216syasou4view10query__all = (node,selector) => Array.from(node.querySelectorAll(selector));
const _M0FP37Hosi1216syasou4view7prevent = event => event.preventDefault();
const _M0FP37Hosi1216syasou4view4keys = value => Object.keys(value);
function _M0TPB9ArrayViewGUssEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0FP37Hosi1216syasou4view4bool = value => Boolean(value);
const _M0FP37Hosi1216syasou4view13register__ref = (reference,assign) => {reference._assign=assign};
function _M0TP37Hosi1216syasou4view7ViewRefGRP36mizchi11js__browser3dom17HTMLCanvasElementE(param0) {
  this.current = param0;
}
function _M0TP37Hosi1216syasou4view7ViewRefGRP37Hosi1216syasou2ui14WindowRendererE(param0) {
  this.current = param0;
}
function _M0DTPC16option6OptionGRP37Hosi1216syasou2ui14WindowRendererE4None() {}
_M0DTPC16option6OptionGRP37Hosi1216syasou2ui14WindowRendererE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP37Hosi1216syasou2ui14WindowRendererE4None__ = new _M0DTPC16option6OptionGRP37Hosi1216syasou2ui14WindowRendererE4None();
function _M0DTPC16option6OptionGRP37Hosi1216syasou2ui14WindowRendererE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP37Hosi1216syasou2ui14WindowRendererE4Some.prototype.$tag = 1;
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
function _M0DTPC16option6OptionGRP36mizchi11js__browser3dom4NodeE4None() {}
_M0DTPC16option6OptionGRP36mizchi11js__browser3dom4NodeE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP36mizchi11js__browser3dom4NodeE4None__ = new _M0DTPC16option6OptionGRP36mizchi11js__browser3dom4NodeE4None();
function _M0DTPC16option6OptionGRP36mizchi11js__browser3dom4NodeE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP36mizchi11js__browser3dom4NodeE4Some.prototype.$tag = 1;
const _M0FP37Hosi1216syasou4view15render__finally = (run,cleanup) => {try {return run()} finally {cleanup()}};
function _M0TP37Hosi1216syasou4view4Slot(param0, param1, param2, param3) {
  this.value = param0;
  this.deps = param1;
  this.cleanup = param2;
  this.generation = param3;
}
const _M0FP37Hosi1216syasou4view14attach__setter = (setter,slot) => {setter[Symbol.for('syasou.view.state')]=slot};
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
function _M0DTPC16option6OptionGRP37Hosi1216syasou4view9AnimationE4None() {}
_M0DTPC16option6OptionGRP37Hosi1216syasou4view9AnimationE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP37Hosi1216syasou4view9AnimationE4None__ = new _M0DTPC16option6OptionGRP37Hosi1216syasou4view9AnimationE4None();
function _M0DTPC16option6OptionGRP37Hosi1216syasou4view9AnimationE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP37Hosi1216syasou4view9AnimationE4Some.prototype.$tag = 1;
const _M0FP37Hosi1216syasou2ui23formatted__ticket__date = time => new Intl.DateTimeFormat('en-GB', {day:'2-digit',month:'short',year:'2-digit'}).format(time);
const _M0FP37Hosi1216syasou2ui12ticket__time = time => new Intl.DateTimeFormat('en-GB', {hour:'2-digit',minute:'2-digit',hour12:false}).format(time);
const _M0MP37Hosi1216syasou2ui7UiEvent5value = event => event.target.value;
const _M0FP37Hosi1216syasou2ui5focus = node => node.focus({preventScroll:true});
const _M0FP37Hosi1216syasou2ui16location__search = () => window.location.search;
const _M0FP37Hosi1216syasou2ui6reload = () => location.reload();
function _M0DTPC16option6OptionGRP36mizchi11js__browser3dom7ElementE4None() {}
_M0DTPC16option6OptionGRP36mizchi11js__browser3dom7ElementE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP36mizchi11js__browser3dom7ElementE4None__ = new _M0DTPC16option6OptionGRP36mizchi11js__browser3dom7ElementE4None();
function _M0DTPC16option6OptionGRP36mizchi11js__browser3dom7ElementE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP36mizchi11js__browser3dom7ElementE4Some.prototype.$tag = 1;
function _M0TP37Hosi1216syasou2ui14LandscapeProps(param0, param1, param2, param3, param4) {
  this.scene = param0;
  this.speed = param1;
  this.moving = param2;
  this.windowOpen = param3;
  this.travelling = param4;
}
const _M0FP37Hosi1216syasou2ui13number__value = value => Number(value);
const _M0MP37Hosi1216syasou2ui7UiEvent6number = event => Number(event.target.value);
function _M0DTPC16option6OptionGdE4None() {}
_M0DTPC16option6OptionGdE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGdE4None__ = new _M0DTPC16option6OptionGdE4None();
function _M0DTPC16option6OptionGdE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGdE4Some.prototype.$tag = 1;
function _M0TP37Hosi1216syasou2ui15TicketCardProps(param0, param1, param2, param3, param4, param5, param6) {
  this.ticket = param0;
  this.back = param1;
  this.rotation = param2;
  this.shine_x = param3;
  this.shine_opacity = param4;
  this.on_title = param5;
  this.on_note = param6;
}
function _M0TP37Hosi1216syasou2ui13SettingsProps(param0, param1, param2) {
  this.preferences = param0;
  this.on_change = param1;
  this.active = param2;
}
function _M0TP37Hosi1216syasou2ui12OpeningProps(param0, param1, param2, param3, param4, param5) {
  this.ready = param0;
  this.leaving = param1;
  this.failed = param2;
  this.on_enter = param3;
  this.on_guide = param4;
  this.on_complete = param5;
}
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
const _M0MPB4Iter4nextN6constrS9918GRP37Hosi1216syasou4view7ElementE = 0;
const _M0MPB4Iter4nextN6constrS9919GRP37Hosi1216syasou4view7ElementE = 0;
const _M0MPB4Iter4nextN6constrS9918GRP26mizchi8js__core3AnyE = 0;
const _M0MPB4Iter4nextN6constrS9919GRP26mizchi8js__core3AnyE = 0;
const _M0MPB4Iter3newN6constrS9926GRP37Hosi1216syasou4view7ElementE = 0;
const _M0MPB4Iter3newN6constrS9926GRP26mizchi8js__core3AnyE = 0;
const _M0FP37Hosi1216syasou7browser16fragment__source = "\nprecision highp float;\nuniform vec2 u_resolution;\nuniform float u_time;\nuniform float u_travel;\nuniform float u_scene;\nfloat hash(vec2 p) {\n  vec3 q = fract(vec3(p.xyx) * .1031);\n  q += dot(q, q.yzx + 33.33);\n  return fract((q.x + q.y) * q.z);\n}\nfloat noise(float x) {\n  float i = floor(x);\n  float f = fract(x);\n  f = f * f * (3.0 - 2.0 * f);\n  return mix(hash(vec2(i, 19.0)), hash(vec2(i + 1.0, 19.0)), f);\n}\nfloat ridge(float x) {\n  return noise(x) * .64 + noise(x * 2.13 + 8.0) * .25\n       + noise(x * 5.37 + 30.0) * .085 + noise(x * 13.1) * .025;\n}\nfloat below(float y, float height, float softness) {\n  return 1.0 - smoothstep(height - softness, height + softness, y);\n}\n// Uneven tiers and individual heights keep the conifers from reading as a pattern.\nfloat forest(vec2 p, float spacing, float height, float seed, float softness) {\n  float cell = floor(p.x / spacing);\n  float shape = 0.0;\n  for (int i = -1; i <= 1; i++) {\n    float id = cell + float(i);\n    float random = hash(vec2(id, seed));\n    float center = (id + .25 + random * .5) * spacing;\n    float h = height * (.48 + .65 * hash(vec2(id, seed + 7.0)));\n    float base = -.015 + .035 * noise(id * .41 + seed);\n    float y = (p.y - base) / h;\n    float localX = p.x - center + y * y * h * (random - .5) * .055;\n    float width = h * .19 * pow(max(0.0, 1.0 - y), .95);\n    float branches = .80 + .16 * sin(y * (72.0 + random * 27.0) + random * 9.0 + sign(localX) * 1.6)\n                         + .04 * sin(y * 231.0 + random * 11.0);\n    float crown = (1.0 - smoothstep(width * branches - softness, width * branches + softness, abs(localX)))\n                * smoothstep(-.03, .06, y) * (1.0 - smoothstep(.97, 1.0, y));\n    float trunk = (1.0 - smoothstep(h * .012, h * .012 + softness, abs(p.x - center)))\n                * below(p.y, base + h * .8, softness) * smoothstep(-.07, base, p.y);\n    shape = max(shape, max(crown, trunk));\n  }\n  return shape;\n}\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / u_resolution;\n  float aspect = u_resolution.x / u_resolution.y;\n  float x = uv.x * aspect;\n  float t = u_time;\n  float y = uv.y;\n  float value = mix(.81, .975, smoothstep(.35, 1.0, y));\n  float cloud = noise(x * 2.1 + t * .008 + y * 3.0) * noise(y * 9.0 + x * .3);\n  value -= cloud * .045;\n\n  // The far ridges remain almost still while the nearer slopes slide past them.\n  float farX = x + t * .012;\n  float farRidge = .50 + .30 * ridge(farX * 1.7 + 12.0);\n  float farTone = .64 + .11 * (1.0 - smoothstep(.46, .77, y));\n  value = mix(value, farTone, below(y, farRidge, .005));\n\n  float hillX = x + t * .032;\n  float hillRidge = .40 + .28 * ridge(hillX * 2.0 + 35.0);\n  float hillTone = .43 + .22 * (1.0 - smoothstep(.37, .64, y));\n  hillTone += (noise(hillX * 22.0 + y * 5.0) - .5) * .028;\n  value = mix(value, hillTone, below(y, hillRidge, .003));\n\n  float woodX = x + t * .085;\n  float woodRidge = .30 + .18 * ridge(woodX * 2.8 + 71.0);\n  float woods = forest(vec2(woodX, y - woodRidge), .027, .063, 4.0, .0018);\n  float woodTone = .28 + .22 * (1.0 - smoothstep(.27, .48, y));\n  value = mix(value, woodTone, max(woods, below(y, woodRidge, .003)));\n\n  // A pale valley separates the near trees from the mountains without a hard horizon.\n  float fog = exp(-pow((y - .335) / .075, 2.0));\n  value = mix(value, .76, fog * .64);\n  float fieldX = x + t * .15;\n  float field = .20 + .10 * ridge(fieldX * 2.3 + 5.0);\n  float fieldTone = .40 + .14 * noise(fieldX * 3.0 + y * 12.0);\n  value = mix(value, fieldTone, below(y, field, .012));\n\n  float nearX = x + t * .24;\n  float nearBase = .11 + .075 * ridge(nearX * 2.4 + 6.0);\n  float nearTrees = forest(vec2(nearX, y - nearBase), .10, .20, 23.0, .0017);\n  value = mix(value, .16 + y * .16, nearTrees * .94);\n  value = mix(value, .16, below(y, nearBase, .008));\n\n  // Sparse close trees cross the window in seconds; their edges soften with motion.\n  float closeX = x + t * .62;\n  float closeBase = -.035 + .055 * ridge(closeX * 1.8 + 9.0);\n  float closeTrees = forest(vec2(closeX, y - closeBase), .73, .49, 51.0, .0035);\n  value = mix(value, .052 + y * .065, closeTrees);\n  float bank = .045 + .035 * ridge(closeX * 4.0);\n  value = mix(value, .055, below(y, bank, .012));\n\n  if (u_scene > .5 && u_scene < 1.5) value = mix(value, 1.0, .16);\n  if (u_scene > 1.5) value = value * .37 + .01;\n  float cycle = mod(u_travel, 240.0);\n  float tunnel = smoothstep(211.0, 215.0, cycle) * (1.0 - smoothstep(223.0, 229.0, cycle));\n  float light = smoothstep(224.0, 228.0, cycle) * (1.0 - smoothstep(228.0, 236.0, cycle));\n  value = mix(value, .018, tunnel);\n  value = mix(value, .985, light * .88);\n  value = clamp(value, .018, .974);\n  vec2 pixel = floor(gl_FragCoord.xy);\n  float random = hash(pixel);\n  float fleck = smoothstep(random - .045, random + .045, value);\n  float tone = mix(value, fleck, .82);\n  tone += (hash(pixel + 173.0) - .5) * .07;\n  gl_FragColor = vec4(vec3(clamp(tone, .015, .985)), 1.0);\n}\n";
const _M0FP37Hosi1216syasou7browser14vertex__source = "\nattribute vec2 a_position;\nvoid main() { gl_Position = vec4(a_position, 0.0, 1.0); }\n";
const _M0FP37Hosi1216syasou4view10css__valueN7_2abindS682 = "--";
const _M0FP37Hosi1216syasou4view16transform__valueN7_2abindS683 = "rotate";
const _M0FP37Hosi1216syasou4view16transform__valueN7_2abindS684 = "skew";
const _M0FP37Hosi1216syasou4view16transform__valueN7_2abindS685 = "scale";
const _M0FP37Hosi1216syasou4view10style__mapN7_2abindS699 = " ";
const _M0FP37Hosi1216syasou4view16style__signatureN7_2abindS755 = ";";
const _M0FP37Hosi1216syasou4view12escape__htmlN7_2abindS980 = "&";
const _M0FP37Hosi1216syasou4view12escape__htmlN7_2abindS981 = "&amp;";
const _M0FP37Hosi1216syasou4view12escape__htmlN7_2abindS982 = "<";
const _M0FP37Hosi1216syasou4view12escape__htmlN7_2abindS983 = "&lt;";
const _M0FP37Hosi1216syasou4view12escape__htmlN7_2abindS984 = ">";
const _M0FP37Hosi1216syasou4view12escape__htmlN7_2abindS985 = "&gt;";
const _M0FP37Hosi1216syasou4view12escape__htmlN7_2abindS986 = "\"";
const _M0FP37Hosi1216syasou4view12escape__htmlN7_2abindS987 = "&quot;";
const _M0FP37Hosi1216syasou4view12escape__htmlN7_2abindS988 = "'";
const _M0FP37Hosi1216syasou4view12escape__htmlN7_2abindS989 = "&#x27;";
const _M0FP37Hosi1216syasou4view9serializeN7_2abindS1004 = "on";
const _M0FP37Hosi1216syasou4view9serializeN7_2abindS1005 = "aria-";
const _M0FP37Hosi1216syasou4view9serializeN7_2abindS1006 = "data-";
const _M0FP37Hosi1216syasou2ui15classes_2einnerN7_2abindS675 = " ";
const _M0FP37Hosi1216syasou2ui17fallback__sceneryN5hillsS125 = "M0 360 C130 340 170 210 310 250 S490 430 660 350 S880 170 1030 290 S1140 350 1200 360 V900 H0Z";
const _M0FP37Hosi1216syasou2ui17fallback__sceneryN6slopesS126 = "M0 540 C130 600 200 400 350 440 S580 660 740 520 S1030 430 1200 540 V900 H0Z";
const _M0FP37Hosi1216syasou4view7runtime = _M0FP37Hosi1216syasou4view15shared__runtime(new _M0TP37Hosi1216syasou4view7Runtime(undefined, () => {
}, [], 0));
const _M0FP37Hosi1216syasou2ui12render__cardN6constrS1432 = "welcome";
const _M0FP37Hosi1216syasou2ui12render__cardN6constrS1433 = "sample";
const _M0FP37Hosi1216syasou7browser16create__rendererN6recordS214 = new _M0TP37Hosi1216syasou5webgl14ContextOptions(false, false, false, true);
const _M0FP37Hosi1216syasou7browser16create__rendererN6recordS215 = new _M0TP37Hosi1216syasou6domain9Landscape("mist", "local", true, false);
const _M0FP37Hosi1216syasou6bridge16is__demo__searchN6constrS235 = "1";
const _M0FP37Hosi1216syasou2ui4demo = _M0FP37Hosi1216syasou6bridge16is__demo__search(_M0FP37Hosi1216syasou2ui16location__search());
const _M0FPB4seed = _M0FPB12random__seed();
const _M0MPC16string10StringView4findN6constrS9928 = 0;
function _M0FPB13consume4__acc(acc, input) {
  const _p = (acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0;
  const _p$2 = 17;
  return Math.imul(_p << _p$2 | (_p >>> (32 - _p$2 | 0) | 0), 668265263) | 0;
}
function _M0MPB13StringBuilder13write__objectGiE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGiE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGsE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGsE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGdE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGdE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
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
function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  if (start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0))) {
    return new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0);
  } else {
    return $panic();
  }
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
function _M0IP016_24default__implPB4Show6outputGsE(self, logger) {
  logger.method_table.method_0(logger.self, self);
}
function _M0IP016_24default__implPB4Show6outputGdE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16double6DoublePB4Show10to__string(self));
}
function _M0MPB4Iter4nextGRP37Hosi1216syasou4view7ElementE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9919GRP37Hosi1216syasou4view7ElementE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9918GRP37Hosi1216syasou4view7ElementE;
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
function _M0MPB4Iter3newGRP37Hosi1216syasou4view7ElementE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9926GRP37Hosi1216syasou4view7ElementE;
  }
  return new _M0TPB4IterGRP37Hosi1216syasou4view7ElementE(f, size_hint$2);
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
function _M0FPB19kmp__failure__table(pattern) {
  const m = pattern.end - pattern.start | 0;
  const table = $make_array_len_and_init(m, 0);
  let k = 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < m) {
      const c = pattern.str.charCodeAt(pattern.start + i | 0);
      while (true) {
        let _tmp$2;
        if (k > 0) {
          const _p = pattern.str.charCodeAt(pattern.start + k | 0);
          _tmp$2 = c !== _p;
        } else {
          _tmp$2 = false;
        }
        if (_tmp$2) {
          const _tmp$3 = k - 1 | 0;
          k = _tmp$3 >>> 0 < table.length ? table[_tmp$3] : $oob();
          continue;
        } else {
          break;
        }
      }
      const _p = pattern.str.charCodeAt(pattern.start + k | 0);
      if (c === _p) {
        k = k + 1 | 0;
      }
      if (i >>> 0 < table.length) {
        table[i] = k;
      } else {
        $oob();
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return table;
}
function _M0FPB24find__pattern__kmp__from(target, pattern, start) {
  const n = target.end - target.start | 0;
  const m = pattern.end - pattern.start | 0;
  const table = _M0FPB19kmp__failure__table(pattern);
  let k = 0;
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < n) {
      const c = target.str.charCodeAt(target.start + i | 0);
      while (true) {
        let _tmp$2;
        if (k > 0) {
          const _p = pattern.str.charCodeAt(pattern.start + k | 0);
          _tmp$2 = c !== _p;
        } else {
          _tmp$2 = false;
        }
        if (_tmp$2) {
          const _tmp$3 = k - 1 | 0;
          k = _tmp$3 >>> 0 < table.length ? table[_tmp$3] : $oob();
          continue;
        } else {
          break;
        }
      }
      const _p = pattern.str.charCodeAt(pattern.start + k | 0);
      if (c === _p) {
        k = k + 1 | 0;
      }
      if (k === m) {
        return (i - m | 0) + 1 | 0;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < candidate_end) {
      let _tmp$2;
      const _p = data.charCodeAt(pos);
      if (_p === first) {
        const _p$2 = data.charCodeAt(pos + last_offset | 0);
        _tmp$2 = _p$2 === last;
      } else {
        _tmp$2 = false;
      }
      if (_tmp$2) {
        return pos;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB42find__two__anchor__candidate__from__string(data, start, candidate_end, first, last_offset, last) {
  return _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last);
}
function _M0FPB21string__ranges__equal(left, left_start, right, right_start, length) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < length) {
      const _p = left.charCodeAt(left_start + i | 0);
      const _p$2 = right.charCodeAt(right_start + i | 0);
      if (_p !== _p$2) {
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
function _M0FPB22find__by__two__anchors(target, pattern) {
  const target_len = target.end - target.start | 0;
  const pattern_len = pattern.end - pattern.start | 0;
  const target_start = target.start;
  const pattern_start = pattern.start;
  const last_offset = pattern_len - 1 | 0;
  const candidate_end = ((target_start + target_len | 0) - pattern_len | 0) + 1 | 0;
  const first = pattern.str.charCodeAt(pattern.start);
  const last = pattern.str.charCodeAt(pattern.start + last_offset | 0);
  const middle_len = last_offset - 1 | 0;
  let _tmp = target_start;
  let _tmp$2 = 0;
  while (true) {
    const pos = _tmp;
    const failures = _tmp$2;
    if (pos < candidate_end) {
      const found = _M0FPB42find__two__anchor__candidate__from__string(target.str, pos, candidate_end, first, last_offset, last);
      if (found < 0) {
        return undefined;
      }
      if (_M0FPB21string__ranges__equal(target.str, found + 1 | 0, pattern.str, pattern_start + 1 | 0, middle_len)) {
        return found - target_start | 0;
      }
      const failures$2 = failures + 1 | 0;
      const scanned = found - target_start | 0;
      if (failures$2 > 64 || failures$2 > (4 + (scanned / 8 | 0) | 0)) {
        return _M0FPB24find__pattern__kmp__from(target, pattern, scanned + 1 | 0);
      }
      _tmp = found + 1 | 0;
      _tmp$2 = failures$2;
      continue;
    } else {
      return undefined;
    }
  }
}
function _M0FPB24find__code__unit__scalar(data, start, end, code) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < end) {
      const _p = data.charCodeAt(pos);
      if (_p === code) {
        return pos;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB30find__code__unit__from__string(data, start, end, code) {
  return _M0FPB24find__code__unit__scalar(data, start, end, code);
}
function _M0FPB28find__code__unit__from__view(target, start, end, code) {
  const target_start = target.start;
  const found = _M0FPB30find__code__unit__from__string(target.str, target_start + start | 0, target_start + end | 0, code);
  return found < 0 ? -1 : found - target_start | 0;
}
function _M0MPC16string10StringView4find(self, str) {
  const pattern_len = str.end - str.start | 0;
  switch (pattern_len) {
    case 0: {
      return _M0MPC16string10StringView4findN6constrS9928;
    }
    case 1: {
      const found = _M0FPB28find__code__unit__from__view(self, 0, self.end - self.start | 0, str.str.charCodeAt(str.start));
      return found < 0 ? undefined : found;
    }
    default: {
      return pattern_len > (self.end - self.start | 0) ? undefined : _M0FPB22find__by__two__anchors(self, str);
    }
  }
}
function _M0MPC16string6String4find(self, str) {
  return _M0MPC16string10StringView4find(new _M0TPC16string10StringView(self, 0, self.length), str);
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
function _M0MPC15array5Array4pushGWEuE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGRP37Hosi1216syasou5webgl6ShaderE(self, value) {
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
    const _bind$2 = _M0MPB4Iter4nextGRP37Hosi1216syasou4view7ElementE(self);
    if (_bind$2 === undefined) {
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      _M0MPC15array5Array4pushGWEuE(result, _x);
      continue;
    }
  }
  return result;
}
function _M0MPC16string6String12replace__all(self, old, new_) {
  const len = self.length;
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(len);
  const old_len = old.end - old.start | 0;
  const new$2 = _M0MPC16string10StringView9to__owned(new_);
  if (old_len === 0) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, new$2);
    const _bind = self.length;
    let _tmp = 0;
    while (true) {
      const _string_index = _tmp;
      if (_string_index < _bind) {
        let _decoded_next_string_index;
        let _decoded_char;
        _L: {
          const _bind$2 = self.charCodeAt(_string_index);
          if (_bind$2 >= 55296 && _bind$2 <= 56319 && (_string_index + 1 | 0) < _bind) {
            const _bind$3 = self.charCodeAt(_string_index + 1 | 0);
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
        _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
        _M0IPB13StringBuilderPB6Logger13write__string(buf, new$2);
        _tmp = _decoded_next_string_index;
        continue;
      } else {
        break;
      }
    }
    return buf.val;
  } else {
    const first_end = _M0MPC16string6String4find(self, old);
    if (first_end === undefined) {
      return self;
    } else {
      const _Some = first_end;
      const _end = _Some;
      let _tmp = new _M0TPC16string10StringView(self, 0, self.length);
      let _tmp$2 = _end;
      while (true) {
        const view = _tmp;
        const end = _tmp$2;
        const seg = _M0MPC16string10StringView12view_2einner(view, 0, end);
        _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, seg.str, seg.start, seg.end - seg.start | 0);
        _M0IPB13StringBuilderPB6Logger13write__string(buf, new$2);
        if ((end + old_len | 0) <= len) {
          const next_view = _M0MPC16string10StringView12view_2einner(view, end + old_len | 0, undefined);
          const _bind = _M0MPC16string10StringView4find(next_view, old);
          if (_bind === undefined) {
            _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, next_view.str, next_view.start, next_view.end - next_view.start | 0);
            break;
          } else {
            const _Some$2 = _bind;
            const _next_end = _Some$2;
            _tmp = next_view;
            _tmp$2 = _next_end;
            continue;
          }
        } else {
          break;
        }
      }
      return buf.val;
    }
  }
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
function _M0MPC15array9ArrayView4iterGRP37Hosi1216syasou4view7ElementE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.end - self.start | 0;
  return _M0MPB4Iter3newGRP37Hosi1216syasou4view7ElementE(() => {
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
function _M0MPC15array5Array4iterGRP37Hosi1216syasou4view7ElementE(self) {
  return _M0MPC15array9ArrayView4iterGRP37Hosi1216syasou4view7ElementE(new _M0TPB9ArrayViewGRP37Hosi1216syasou4view7ElementE(self, 0, self.length));
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
function _M0MPC16option6Option10unwrap__orGsE(self, default_) {
  if (self === undefined) {
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
function _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry) {
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
function _M0MPB3Map10set__entryGssE(self, entry, new_idx) {
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
function _M0MPB3Map10push__awayGssE(self, idx, entry) {
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
      _M0MPB3Map10set__entryGssE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGssE(self, entry$2, idx$2);
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
function _M0MPB3Map20rehash__place__entryGssE(self, outer) {
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
      _M0MPB3Map20add__entry__to__tailGssE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGssE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGssE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map4growGssE(self) {
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
      _M0MPB3Map20rehash__place__entryGssE(self, _e);
      _tmp = next_in_chain;
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
        _M0MPB3Map4growGssE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGssE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
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
          _M0MPB3Map4growGssE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGssE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGssE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
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
        _M0MPB3Map4growGssE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsWRP26mizchi8js__core3AnyEuE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
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
          _M0MPB3Map4growGssE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGssE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsWRP26mizchi8js__core3AnyEuE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGssE(self, key, value) {
  _M0MPB3Map15set__with__hashGssE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsWRP26mizchi8js__core3AnyEuE(self, key, value) {
  _M0MPB3Map15set__with__hashGsWRP26mizchi8js__core3AnyEuE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
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
function _M0MPB3Map4iterGssE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGssEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGRP37Hosi1216syasou4view7ElementE(() => {
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
function _M0MPB3Map5iter2GssE(self) {
  return _M0MPB3Map4iterGssE(self);
}
function _M0MPB3Map4keysGssE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGssEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGRP37Hosi1216syasou4view7ElementE(() => {
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
function _M0MPB5Iter24nextGssE(self) {
  return _M0MPB4Iter4nextGRP37Hosi1216syasou4view7ElementE(self);
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
function _M0MPC16double6Double3min(self, other) {
  return self !== self ? other : other !== other ? self : self < other ? self : other;
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
function _M0MPC15array5Array2atGRP37Hosi1216syasou4view4SlotE(self, index) {
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
    const _bind$2 = _M0MPB4Iter4nextGRP37Hosi1216syasou4view7ElementE(iter);
    if (_bind$2 === undefined) {
      return;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      _M0MPC15array5Array4pushGWEuE(self, _x);
      continue;
    }
  }
}
function _M0MPC15array5Array4joinGsE(self, separator) {
  return _M0MPC15array9ArrayView4joinGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length), separator);
}
function _M0FPC14math3sin(_tmp) {
  return Math.sin(_tmp);
}
function _M0FP37Hosi1216syasou6domain11number__min(a, b) {
  return a !== a ? a : b !== b ? b : a === 0 && b === 0 ? (1 / a < 0 || 1 / b < 0 ? -0 : 0) : _M0MPC16double6Double3min(a, b);
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
function _M0FP26mizchi8js__core16identity__optionGsE(v) {
  return _M0FP26mizchi8js__core11is__nullish(v) ? undefined : v;
}
function _M0FP36mizchi11js__builtin6global12global__this() {
  return _M0FP36mizchi11js__builtin6global10globalThis();
}
function _M0MP36mizchi7js__web5event11EventTarget24addEventListener_2einner(self, event_type, handler, capture, once, passive, signal) {
  const entries = [];
  _M0MPC15array5Array4pushGWEuE(entries, { _0: "capture", _1: capture });
  _M0MPC15array5Array4pushGWEuE(entries, { _0: "once", _1: once });
  _M0MPC15array5Array4pushGWEuE(entries, { _0: "passive", _1: passive });
  if (signal.$tag === 1) {
    const _Some = signal;
    const _v = _Some._0;
    _M0MPC15array5Array4pushGWEuE(entries, { _0: "signal", _1: _v });
  }
  _M0MP26mizchi8js__core3Any6__call(self, "addEventListener", [event_type, handler, _M0FP26mizchi8js__core13from__entries(entries)]);
}
function _M0MP36mizchi7js__web5event11EventTarget27removeEventListener_2einner(self, event_type, handler, capture) {
  _M0MP26mizchi8js__core3Any6__call(self, "removeEventListener", [event_type, handler, _M0FP26mizchi8js__core13from__entries([{ _0: "capture", _1: capture }])]);
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
    _M0MPC15array5Array4pushGRP37Hosi1216syasou5webgl6ShaderE(shaders, _shader);
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
function _M0FP37Hosi1216syasou6bridge8optionalGsE(value) {
  return _M0FP26mizchi8js__core11is__nullish(value) ? undefined : value;
}
function _M0FP37Hosi1216syasou6bridge12read__ticket(value) {
  return new _M0TP37Hosi1216syasou6domain6Ticket(_M0MP26mizchi8js__core3Any5__get(value, "id"), _M0FP37Hosi1216syasou6bridge8optionalGsE(_M0MP26mizchi8js__core3Any5__get(value, "kind")), _M0MP26mizchi8js__core3Any5__get(value, "startedAt"), _M0MP26mizchi8js__core3Any5__get(value, "arrivedAt"), _M0MP26mizchi8js__core3Any5__get(value, "speed"), _M0MP26mizchi8js__core3Any5__get(value, "scene"), _M0MP26mizchi8js__core3Any5__get(value, "title"), _M0MP26mizchi8js__core3Any5__get(value, "note"));
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
function _M0FP37Hosi1216syasou4view9componentGRP26mizchi8js__core3AnyE(render, props, key) {
  return new _M0DTP37Hosi1216syasou4view7Element9Component(render, () => render(props), key);
}
function _M0FP37Hosi1216syasou4view9componentGRP37Hosi1216syasou2ui14LandscapePropsE(render, props, key) {
  return new _M0DTP37Hosi1216syasou4view7Element9Component(render, () => render(props), key);
}
function _M0FP37Hosi1216syasou4view9identical(_tmp, _tmp$2) {
  return Object.is(_tmp, _tmp$2);
}
function _M0FP37Hosi1216syasou4view10new__scope() {
  return new _M0TP37Hosi1216syasou4view5Scope([], 0, true);
}
function _M0FP37Hosi1216syasou4view10same__node(a, b) {
  return _M0FP37Hosi1216syasou4view9identical(a, b);
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
        _M0MPC15array5Array4pushGWEuE(parts, `${function_name}(${_M0FP37Hosi1216syasou4view16transform__value(name, value)})`);
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
function _M0FP37Hosi1216syasou4view8new__refGRP36mizchi11js__browser3dom17HTMLCanvasElementE(initial) {
  const reference = new _M0TP37Hosi1216syasou4view7ViewRefGRP36mizchi11js__browser3dom17HTMLCanvasElementE(initial);
  _M0FP37Hosi1216syasou4view13register__ref(reference, (value) => {
    reference.current = _M0FP26mizchi8js__core13is__undefined(value) ? undefined : value;
  });
  return reference;
}
function _M0FP37Hosi1216syasou4view8new__refGRP37Hosi1216syasou2ui14WindowRendererE(initial) {
  const reference = new _M0TP37Hosi1216syasou4view7ViewRefGRP37Hosi1216syasou2ui14WindowRendererE(initial);
  _M0FP37Hosi1216syasou4view13register__ref(reference, (value) => {
    reference.current = _M0FP26mizchi8js__core13is__undefined(value) ? _M0DTPC16option6OptionGRP37Hosi1216syasou2ui14WindowRendererE4None__ : new _M0DTPC16option6OptionGRP37Hosi1216syasou2ui14WindowRendererE4Some(value);
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
      const value = new _M0TP37Hosi1216syasou4view5Panel(mounted.id, library === "dialog", false, props, _M0FP37Hosi1216syasou4view8new__refGRP37Hosi1216syasou2ui14WindowRendererE(_M0DTPC16option6OptionGRP36mizchi11js__browser3dom4NodeE4None__));
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
  const names = _M0MPB4Iter9to__arrayGsE(_M0MPB3Map4keysGssE(style));
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
function _M0FP37Hosi1216syasou4view8reserved(name) {
  return _M0MPC15array5Array8containsGsE(["key", "ref", "style", "initial", "animate", "exit", "transition", "whileHover", "onAnimationComplete", "panel", "panelCallbacks", "asChild"], name);
}
function _M0FP37Hosi1216syasou4view14empty__context() {
  return new _M0TP37Hosi1216syasou4view7Context(undefined, undefined);
}
function _M0MP37Hosi1216syasou4view7ViewRef12set__currentGRP37Hosi1216syasou2ui14WindowRendererE(self, value) {
  self.current = value;
}
function _M0FP37Hosi1216syasou4view10same__deps(a, b) {
  if (a.length === b.length) {
    const _p = _M0MPB4Iter3zipGRP26mizchi8js__core3AnyRP26mizchi8js__core3AnyE(_M0MPC15array5Array4iterGRP26mizchi8js__core3AnyE(a), _M0MPC15array5Array4iterGRP26mizchi8js__core3AnyE(b));
    let _tmp;
    while (true) {
      const _p$2 = _M0MPB4Iter4nextGRP37Hosi1216syasou4view7ElementE(_p);
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
    _M0MPC15array5Array4pushGWEuE(scope.slots, new _M0TP37Hosi1216syasou4view4Slot(initialize(), [], () => {
    }, 0));
  }
  return { _0: _M0MPC15array5Array2atGRP37Hosi1216syasou4view4SlotE(scope.slots, index), _1: fresh };
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
function _M0FP37Hosi1216syasou4view10use__stateGbE(value) {
  return _M0FP37Hosi1216syasou4view16use__state__lazyGbE(() => value);
}
function _M0FP37Hosi1216syasou4view13use__callbackGWWEuEWEuE(callback, deps) {
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
    _M0MPC15array5Array4pushGWEuE(_M0FP37Hosi1216syasou4view7runtime.effects, () => {
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
function _M0FP37Hosi1216syasou4view12escape__html(value) {
  return _M0MPC16string6String12replace__all(_M0MPC16string6String12replace__all(_M0MPC16string6String12replace__all(_M0MPC16string6String12replace__all(_M0MPC16string6String12replace__all(value, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou4view12escape__htmlN7_2abindS980, 0, _M0FP37Hosi1216syasou4view12escape__htmlN7_2abindS980.length), new _M0TPC16string10StringView(_M0FP37Hosi1216syasou4view12escape__htmlN7_2abindS981, 0, _M0FP37Hosi1216syasou4view12escape__htmlN7_2abindS981.length)), new _M0TPC16string10StringView(_M0FP37Hosi1216syasou4view12escape__htmlN7_2abindS982, 0, _M0FP37Hosi1216syasou4view12escape__htmlN7_2abindS982.length), new _M0TPC16string10StringView(_M0FP37Hosi1216syasou4view12escape__htmlN7_2abindS983, 0, _M0FP37Hosi1216syasou4view12escape__htmlN7_2abindS983.length)), new _M0TPC16string10StringView(_M0FP37Hosi1216syasou4view12escape__htmlN7_2abindS984, 0, _M0FP37Hosi1216syasou4view12escape__htmlN7_2abindS984.length), new _M0TPC16string10StringView(_M0FP37Hosi1216syasou4view12escape__htmlN7_2abindS985, 0, _M0FP37Hosi1216syasou4view12escape__htmlN7_2abindS985.length)), new _M0TPC16string10StringView(_M0FP37Hosi1216syasou4view12escape__htmlN7_2abindS986, 0, _M0FP37Hosi1216syasou4view12escape__htmlN7_2abindS986.length), new _M0TPC16string10StringView(_M0FP37Hosi1216syasou4view12escape__htmlN7_2abindS987, 0, _M0FP37Hosi1216syasou4view12escape__htmlN7_2abindS987.length)), new _M0TPC16string10StringView(_M0FP37Hosi1216syasou4view12escape__htmlN7_2abindS988, 0, _M0FP37Hosi1216syasou4view12escape__htmlN7_2abindS988.length), new _M0TPC16string10StringView(_M0FP37Hosi1216syasou4view12escape__htmlN7_2abindS989, 0, _M0FP37Hosi1216syasou4view12escape__htmlN7_2abindS989.length));
}
function _M0FP37Hosi1216syasou4view15static__context(id) {
  const dummy = _M0FP26mizchi8js__core4null();
  const _tmp = [];
  const _tmp$2 = _M0FP37Hosi1216syasou4view10new__scope();
  const _tmp$3 = _M0FP26mizchi8js__core11new__object();
  const _bind = [];
  return new _M0TP37Hosi1216syasou4view7Mounted(_M0DTP37Hosi1216syasou4view7Element5Blank__, dummy, dummy, dummy, _tmp, _tmp$2, _tmp$3, _M0MPB3Map3MapGsWRP26mizchi8js__core3AnyEuE(new _M0TPB9ArrayViewGUsWRP26mizchi8js__core3AnyEuEE(_bind, 0, 0), undefined), _M0FP37Hosi1216syasou4view14empty__context(), false, false, [], () => {
  }, () => {
  }, _M0DTPC16option6OptionGRP37Hosi1216syasou4view9AnimationE4None__, "", id, undefined, false);
}
function _M0FP37Hosi1216syasou4view9serialize(tree, context, out) {
  let _tmp = tree;
  let _tmp$2 = context;
  _L: while (true) {
    const tree$2 = _tmp;
    const context$2 = _tmp$2;
    switch (tree$2.$tag) {
      case 0: {
        return;
      }
      case 1: {
        const _Text = tree$2;
        const _value = _Text._0;
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0FP37Hosi1216syasou4view12escape__html(_value));
        return;
      }
      case 3: {
        const _Group = tree$2;
        const _children = _Group._0;
        const _bind = _children.length;
        let _tmp$3 = 0;
        while (true) {
          const _ = _tmp$3;
          if (_ < _bind) {
            const child = _children[_];
            _M0FP37Hosi1216syasou4view9serialize(child, context$2, out);
            _tmp$3 = _ + 1 | 0;
            continue;
          } else {
            return;
          }
        }
      }
      case 6: {
        return;
      }
      case 7: {
        const _Boundary = tree$2;
        const _child = _Boundary._0;
        _tmp = _child;
        continue _L;
      }
      case 4: {
        const _Component = tree$2;
        const _render = _Component._1;
        const scope = _M0FP37Hosi1216syasou4view10new__scope();
        _M0FP37Hosi1216syasou4view9serialize(_M0FP37Hosi1216syasou4view14run__in__scope(scope, _render), context$2, out);
        scope.alive = false;
        return;
      }
      case 5: {
        const _Control = tree$2;
        const _library = _Control._0;
        const _name = _Control._1;
        const _props = _Control._2;
        const _children$2 = _Control._3;
        const _bind$2 = _M0FP37Hosi1216syasou4view12run__control(_M0FP37Hosi1216syasou4view15static__context("snapshot"), _library, _name, _props, _children$2, context$2);
        const _tree = _bind$2._0;
        const _context = _bind$2._1;
        _tmp = _tree;
        _tmp$2 = _context;
        continue _L;
      }
      default: {
        const _Tag = tree$2;
        const _tag = _Tag._0;
        const _props$2 = _Tag._1;
        const _children$3 = _Tag._2;
        _M0IPB13StringBuilderPB6Logger13write__string(out, `<${_tag}`);
        const _bind$3 = _M0FP37Hosi1216syasou4view4keys(_props$2);
        const _bind$4 = _bind$3.length;
        let _tmp$4 = 0;
        while (true) {
          const _ = _tmp$4;
          if (_ < _bind$4) {
            const name = _bind$3[_];
            _L$2: {
              const value = _M0MP26mizchi8js__core3Any5__get(_props$2, name);
              if (_M0FP37Hosi1216syasou4view8reserved(name) || (_M0MPC16string6String11has__prefix(name, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou4view9serializeN7_2abindS1004, 0, _M0FP37Hosi1216syasou4view9serializeN7_2abindS1004.length)) || (_M0FP26mizchi8js__core11is__nullish(value) || name === "value" && _tag === "textarea"))) {
                break _L$2;
              }
              let bool_attr;
              if (_M0FP37Hosi1216syasou4view4kind(value) === "boolean") {
                let _tmp$5;
                if (!_M0MPC16string6String11has__prefix(name, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou4view9serializeN7_2abindS1005, 0, _M0FP37Hosi1216syasou4view9serializeN7_2abindS1005.length))) {
                  let _tmp$6;
                  if (!_M0MPC16string6String11has__prefix(name, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou4view9serializeN7_2abindS1006, 0, _M0FP37Hosi1216syasou4view9serializeN7_2abindS1006.length))) {
                    let _tmp$7;
                    const _p = "draggable";
                    if (!(name === _p)) {
                      const _p$2 = "spellCheck";
                      _tmp$7 = !(name === _p$2);
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
                bool_attr = _tmp$5;
              } else {
                bool_attr = false;
              }
              if (bool_attr && !_M0FP37Hosi1216syasou4view4bool(value)) {
                break _L$2;
              }
              _M0IPB13StringBuilderPB6Logger13write__string(out, ` ${_M0FP37Hosi1216syasou4view15attribute__name(name)}=\"${bool_attr ? "" : _M0FP37Hosi1216syasou4view12escape__html(_M0MP26mizchi8js__core3Any10to__string(value))}\"`);
              break _L$2;
            }
            _tmp$4 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const style = _M0FP37Hosi1216syasou4view10style__map(_M0MP26mizchi8js__core3Any5__get(_props$2, "style"));
        const initial = _M0MP26mizchi8js__core3Any5__get(_props$2, "initial");
        const animation = _M0FP37Hosi1216syasou4view10style__map(_M0FP37Hosi1216syasou4view4kind(initial) === "object" && !_M0FP26mizchi8js__core8is__null(initial) ? initial : _M0MP26mizchi8js__core3Any5__get(_props$2, "animate"));
        const _it = _M0MPB3Map5iter2GssE(animation);
        while (true) {
          const _bind$5 = _M0MPB5Iter24nextGssE(_it);
          if (_bind$5 === undefined) {
            break;
          } else {
            const _Some = _bind$5;
            const _x = _Some;
            const _name$2 = _x._0;
            const _value$2 = _x._1;
            _M0MPB3Map3setGssE(style, _name$2, _value$2);
            continue;
          }
        }
        if (!(style.size === 0)) {
          _M0IPB13StringBuilderPB6Logger13write__string(out, ` style=\"${_M0FP37Hosi1216syasou4view12escape__html(_M0FP37Hosi1216syasou4view16style__signature(style))}\"`);
        }
        _M0IPB13StringBuilderPB6Logger13write__string(out, ">");
        if (!_M0MPC15array5Array8containsGsE(["input", "img", "br", "hr", "meta", "link"], _tag)) {
          if (_tag === "textarea" && !_M0FP26mizchi8js__core11is__nullish(_M0MP26mizchi8js__core3Any5__get(_props$2, "value"))) {
            _M0IPB13StringBuilderPB6Logger13write__string(out, _M0FP37Hosi1216syasou4view12escape__html(_M0MP26mizchi8js__core3Any10to__string(_M0MP26mizchi8js__core3Any5__get(_props$2, "value"))));
          } else {
            const _bind$5 = _children$3.length;
            let _tmp$5 = 0;
            while (true) {
              const _ = _tmp$5;
              if (_ < _bind$5) {
                const child = _children$3[_];
                _M0FP37Hosi1216syasou4view9serialize(child, context$2, out);
                _tmp$5 = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          }
          _M0IPB13StringBuilderPB6Logger13write__string(out, `</${_tag}>`);
          return;
        } else {
          return;
        }
      }
    }
  }
}
function _M0FP37Hosi1216syasou4view14render__static(tree) {
  const previous = _M0MPC15array5Array4copyGWEuE(_M0FP37Hosi1216syasou4view7runtime.effects);
  _M0MPC15array5Array5clearGWEuE(_M0FP37Hosi1216syasou4view7runtime.effects);
  const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0FP37Hosi1216syasou4view9serialize(tree, _M0FP37Hosi1216syasou4view14empty__context(), out);
  _M0MPC15array5Array5clearGWEuE(_M0FP37Hosi1216syasou4view7runtime.effects);
  const _bind = previous.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const callback = previous[_];
      _M0MPC15array5Array4pushGWEuE(_M0FP37Hosi1216syasou4view7runtime.effects, callback);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out.val;
}
function _M0FP37Hosi1216syasou2ui6effect(run, deps) {
  _M0FP37Hosi1216syasou4view11use__effect(run, deps);
}
function _M0FP37Hosi1216syasou2ui9componentGRP26mizchi8js__core3AnyE(render, props, key) {
  return _M0FP37Hosi1216syasou4view9componentGRP26mizchi8js__core3AnyE(render, props, key);
}
function _M0FP37Hosi1216syasou2ui9componentGRP37Hosi1216syasou2ui14LandscapePropsE(render, props, key) {
  return _M0FP37Hosi1216syasou4view9componentGRP37Hosi1216syasou2ui14LandscapePropsE(render, props, key);
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
function _M0FP37Hosi1216syasou2ui1pGsE(name, value) {
  return { _0: name, _1: value };
}
function _M0FP37Hosi1216syasou2ui1pGdE(name, value) {
  return { _0: name, _1: value };
}
function _M0FP37Hosi1216syasou2ui1pGRP37Hosi1216syasou2ui13PropertyValueE(name, value) {
  return { _0: name, _1: value };
}
function _M0FP37Hosi1216syasou2ui1pGbE(name, value) {
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
function _M0FP37Hosi1216syasou2ui6absent() {
  return _M0FP26mizchi8js__core9undefined();
}
function _M0FP37Hosi1216syasou2ui7observe(run, deps) {
  _M0FP37Hosi1216syasou2ui6effect(() => {
    run();
    return () => {
    };
  }, deps);
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
  const subscribe = _M0FP37Hosi1216syasou4view13use__callbackGWWEuEWEuE((listener) => _M0FP37Hosi1216syasou2ui16subscribe__media(query, listener), [query]);
  return _M0FP37Hosi1216syasou4view26use__sync__external__storeGbE(subscribe, () => _M0FP36mizchi11js__browser3dom10matchMedia(query).matches);
}
function _M0FP37Hosi1216syasou2ui15reduced__motion() {
  return _M0FP37Hosi1216syasou2ui10use__media("(prefers-reduced-motion: reduce)");
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
        _M0MPC15array5Array4pushGWEuE(items, _name);
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
      _M0MPC15array5Array4pushGWEuE(_p$7, _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M0 795 Q160 770 310 800 T610 795 T940 810 T1200 795 V900 H0Z")], []));
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
  const renderer = _M0FP37Hosi1216syasou4view4slot(() => _M0FP37Hosi1216syasou4view8new__refGRP37Hosi1216syasou2ui14WindowRendererE(_p$2))._0.value;
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
  return _M0FP37Hosi1216syasou2ui9componentGRP37Hosi1216syasou2ui14LandscapePropsE(_M0FP37Hosi1216syasou2ui17render__landscape, props, undefined);
}
function _M0FP37Hosi1216syasou2ui15render__opening(props) {
  const reduced = _M0FP37Hosi1216syasou2ui15reduced__motion();
  const _p = _M0DTPC16option6OptionGRP36mizchi11js__browser3dom7ElementE4None__;
  const enter_button = _M0FP37Hosi1216syasou4view4slot(() => _M0FP37Hosi1216syasou4view8new__refGRP37Hosi1216syasou2ui14WindowRendererE(_p))._0.value;
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
    _M0MPC15array5Array4pushGWEuE(items, _M0FP37Hosi1216syasou2ui7foreign("toggle", "Item", _tmp$2, [new _M0DTP37Hosi1216syasou4view7Element4Text(_p$3)]));
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
function _M0FP37Hosi1216syasou2ui10route__map() {
  return _M0FP37Hosi1216syasou2ui4node("div", [_M0FP37Hosi1216syasou2ui1pGsE("className", "route-map"), _M0FP37Hosi1216syasou2ui1pGsE("aria-hidden", "true")], [_M0FP37Hosi1216syasou2ui4node("svg", [_M0FP37Hosi1216syasou2ui1pGsE("viewBox", "0 0 380 510"), _M0FP37Hosi1216syasou2ui1pGsE("fill", "none"), _M0FP37Hosi1216syasou2ui1pGsE("preserveAspectRatio", "none")], [_M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M-10 441 59 419 185 407 204 371 236 356 235 250 285 175 344 78 398 28"), _M0FP37Hosi1216syasou2ui1pGsE("stroke", "#f8f8f8"), _M0FP37Hosi1216syasou2ui1pGsE("strokeWidth", "9"), _M0FP37Hosi1216syasou2ui1pGsE("strokeLinejoin", "round")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M223-5 250 62 239 163 235 250M236 356 278 453 210 518M344 78 356 140 401 164M-5 242 60 235 118 200 174 211 236 250"), _M0FP37Hosi1216syasou2ui1pGsE("stroke", "#eeeeee"), _M0FP37Hosi1216syasou2ui1pGsE("strokeWidth", "1.6")], []), _M0FP37Hosi1216syasou2ui4node("path", [_M0FP37Hosi1216syasou2ui1pGsE("d", "M96-5 117 89 173 137 160 222 185 285 151 332 185 407M284 175 347 214 320 285 383 367M15 110 87 128 117 89M60 235 23 330 40 401M278 453 367 426"), _M0FP37Hosi1216syasou2ui1pGsE("stroke", "#bcbcbc"), _M0FP37Hosi1216syasou2ui1pGsE("strokeWidth", ".7"), _M0FP37Hosi1216syasou2ui1pGsE("opacity", ".5")], []), _M0FP37Hosi1216syasou2ui4node("circle", [_M0FP37Hosi1216syasou2ui1pGsE("cx", "185"), _M0FP37Hosi1216syasou2ui1pGsE("cy", "407"), _M0FP37Hosi1216syasou2ui1pGsE("r", "3.5"), _M0FP37Hosi1216syasou2ui1pGsE("stroke", "#a3a3a3"), _M0FP37Hosi1216syasou2ui1pGsE("strokeWidth", "1.2")], []), _M0FP37Hosi1216syasou2ui4node("circle", [_M0FP37Hosi1216syasou2ui1pGsE("cx", "235"), _M0FP37Hosi1216syasou2ui1pGsE("cy", "250"), _M0FP37Hosi1216syasou2ui1pGsE("r", "3.5"), _M0FP37Hosi1216syasou2ui1pGsE("stroke", "#a3a3a3"), _M0FP37Hosi1216syasou2ui1pGsE("strokeWidth", "1.2")], [])])]);
}
function _M0FP37Hosi1216syasou2ui12prop__optionGdE(props, key) {
  const value = _M0MP26mizchi8js__core3Any5__get(props, key);
  return _M0FP26mizchi8js__core11is__nullish(value) ? _M0DTPC16option6OptionGdE4None__ : new _M0DTPC16option6OptionGdE4Some(value);
}
function _M0FP37Hosi1216syasou2ui12prop__optionGbE(props, key) {
  const value = _M0MP26mizchi8js__core3Any5__get(props, key);
  return _M0FP26mizchi8js__core11is__nullish(value) ? -1 : value;
}
function _M0FP37Hosi1216syasou2ui12prop__optionGRP37Hosi1216syasou4view11MotionValueE(props, key) {
  const value = _M0MP26mizchi8js__core3Any5__get(props, key);
  return _M0FP26mizchi8js__core11is__nullish(value) ? undefined : value;
}
function _M0FP37Hosi1216syasou2ui14contract__rail(props) {
  return _M0FP37Hosi1216syasou2ui18rail__mark_2einner(_M0MPC16option6Option10unwrap__orGdE(_M0FP37Hosi1216syasou2ui12prop__optionGdE(props, "strokeWidth"), 1.4));
}
function _M0FP37Hosi1216syasou2ui15contract__route(_props) {
  return _M0FP37Hosi1216syasou2ui10route__map();
}
function _M0FP37Hosi1216syasou2ui14contract__card(props) {
  return _M0FP37Hosi1216syasou2ui12render__card(new _M0TP37Hosi1216syasou2ui15TicketCardProps(_M0FP37Hosi1216syasou6bridge12read__ticket(_M0MP26mizchi8js__core3Any5__get(props, "ticket")), _M0MPC16option6Option10unwrap__orGbE(_M0FP37Hosi1216syasou2ui12prop__optionGbE(props, "back"), false), _M0FP37Hosi1216syasou2ui12prop__optionGRP37Hosi1216syasou4view11MotionValueE(props, "rotation"), _M0FP37Hosi1216syasou2ui12prop__optionGRP37Hosi1216syasou4view11MotionValueE(props, "shineX"), _M0FP37Hosi1216syasou2ui12prop__optionGRP37Hosi1216syasou4view11MotionValueE(props, "shineOpacity"), _M0FP37Hosi1216syasou2ui12prop__optionGRP37Hosi1216syasou4view11MotionValueE(props, "onTitleChange"), _M0FP37Hosi1216syasou2ui12prop__optionGRP37Hosi1216syasou4view11MotionValueE(props, "onNoteChange")));
}
function _M0FP37Hosi1216syasou2ui18contract__settings(props) {
  return _M0FP37Hosi1216syasou2ui16render__settings(new _M0TP37Hosi1216syasou2ui13SettingsProps(_M0MP26mizchi8js__core3Any5__get(props, "preferences"), _M0MP26mizchi8js__core3Any5__get(props, "onChange"), _M0MP26mizchi8js__core3Any5__get(props, "active")));
}
function _M0FP37Hosi1216syasou2ui19contract__landscape(props) {
  return _M0FP37Hosi1216syasou2ui17render__landscape(props);
}
function _M0FP37Hosi1216syasou2ui17contract__opening(props) {
  return _M0FP37Hosi1216syasou2ui15render__opening(new _M0TP37Hosi1216syasou2ui12OpeningProps(_M0MP26mizchi8js__core3Any5__get(props, "ready"), _M0MP26mizchi8js__core3Any5__get(props, "leaving"), _M0MP26mizchi8js__core3Any5__get(props, "failed"), _M0MP26mizchi8js__core3Any5__get(props, "onEnter"), _M0MP26mizchi8js__core3Any5__get(props, "onGuide"), _M0MP26mizchi8js__core3Any5__get(props, "onComplete")));
}
function _M0FP37Hosi1216syasou2ui16render__contract(name, props) {
  let element;
  switch (name) {
    case "RailMark": {
      element = _M0FP37Hosi1216syasou2ui9componentGRP26mizchi8js__core3AnyE(_M0FP37Hosi1216syasou2ui14contract__rail, props, undefined);
      break;
    }
    case "RouteMap": {
      element = _M0FP37Hosi1216syasou2ui9componentGRP26mizchi8js__core3AnyE(_M0FP37Hosi1216syasou2ui15contract__route, props, undefined);
      break;
    }
    case "TicketCard": {
      element = _M0FP37Hosi1216syasou2ui9componentGRP26mizchi8js__core3AnyE(_M0FP37Hosi1216syasou2ui14contract__card, props, undefined);
      break;
    }
    case "Settings": {
      element = _M0FP37Hosi1216syasou2ui9componentGRP26mizchi8js__core3AnyE(_M0FP37Hosi1216syasou2ui18contract__settings, props, undefined);
      break;
    }
    case "Landscape": {
      element = _M0FP37Hosi1216syasou2ui9componentGRP26mizchi8js__core3AnyE(_M0FP37Hosi1216syasou2ui19contract__landscape, props, undefined);
      break;
    }
    case "Opening": {
      element = _M0FP37Hosi1216syasou2ui9componentGRP26mizchi8js__core3AnyE(_M0FP37Hosi1216syasou2ui17contract__opening, props, undefined);
      break;
    }
    default: {
      element = _M0DTP37Hosi1216syasou4view7Element5Blank__;
    }
  }
  return _M0FP37Hosi1216syasou4view14render__static(element);
}
export { _M0FP37Hosi1216syasou2ui11prepare__ui as prepareUi, _M0FP37Hosi1216syasou2ui14contract__rail as RailMark, _M0FP37Hosi1216syasou2ui15contract__route as RouteMap, _M0FP37Hosi1216syasou2ui14contract__card as TicketCard, _M0FP37Hosi1216syasou2ui18contract__settings as Settings, _M0FP37Hosi1216syasou2ui19contract__landscape as Landscape, _M0FP37Hosi1216syasou2ui17contract__opening as Opening, _M0FP37Hosi1216syasou2ui16render__contract as renderContract }
