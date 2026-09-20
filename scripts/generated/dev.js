import { dirname as dirname$1988, resolve as resolve$1986 } from "node:path";
import { spawnSync as spawnSync$1992 } from "node:child_process";
import { createHash as createHash$1997 } from "node:crypto";
import { deflateSync as deflateSync$2003 } from "node:zlib";
import { tmpdir as tmpdir$1984 } from "node:os";
import { statSync as statSync$1971, readdirSync as readdirSync$1967, existsSync as existsSync$1969, rmSync as rmSync$1983, mkdtempSync as mkdtempSync$1980, copyFileSync as copyFileSync$1978, writeFileSync as writeFileSync$1963, readFileSync as readFileSync$1959, mkdirSync as mkdirSync$1975 } from "node:fs";
import { pathToFileURL as pathToFileURL$1994 } from "node:url";
function $oob() {
  throw new Error("Index out of bounds");
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
function _M0TPB4IterGcE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGUssEE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function $makebytes(a, b) {
  const arr = new Uint8Array(a);
  if (b !== 0) {
    arr.fill(b);
  }
  return arr;
}
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB4IterGsE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGRPC16string10StringViewE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB8MutLocalGORPC16string10StringViewE(param0) {
  this.val = param0;
}
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
function _M0TPB3MapGssE(param0, param1, param2, param3, param4, param5, param6) {
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
function _M0TPB8MutLocalGORPB5EntryGssEE(param0) {
  this.val = param0;
}
const $bytes_literal$0 = new Uint8Array();
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0MPB7JSArray12append__view = (dst, src, src_offset, len) => {
   for (let i = 0; i < len; i++) {
     dst.push(src[src_offset + i]);
   }
 };
function _M0TPB12MutArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0FPC28encoding4utf816encode__utf8__js = (() => {
   const encoder = new TextEncoder();
   return function(src, start, len, bom) {
     const end = start + len;
     const encoded = encoder.encode(src.slice(start, end));
     if (!bom) {
       return encoded;
     }
     const result = new Uint8Array(encoded.length + 3);
     result[0] = 0xEF;
     result[1] = 0xBB;
     result[2] = 0xBF;
     result.set(encoded, 3);
     return result;
   };
 })();
const _M0FPC13env19get__cli__args__ffi = function() {
  if (typeof process !== "undefined" && typeof process.argv !== "undefined") {
    return process.argv;
  } else {
    return [];
  }
 };
const _M0FPC13env30get__env__var__value__internal = function(key) {
   if (typeof process === "undefined" || typeof process.env === "undefined") {
     return "";
   }
   const value = process.env[key];
   return value === undefined ? "" : String(value);
 };
const _M0FPC13env30is__env__var__exists__internal = function(key) {
   if (typeof process === "undefined" || typeof process.env === "undefined") {
     return false;
   }
   return Object.prototype.hasOwnProperty.call(process.env, key);
 };
const _M0FPC13env31get__env__vars__array__internal = function() {
   if (typeof process === "undefined" || typeof process.env === "undefined") {
     return [];
   }
   const result = [];
   for (const key in process.env) {
     const value = process.env[key];
     if (value !== undefined) {
       result.push(key);
       result.push(String(value));
     }
   }
   return result;
 };
function _M0TPB9ArrayViewGUssEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0FP37Hosi1216syasou7interop13int__from__js = v => v;
const _M0FP37Hosi1216syasou7interop12bool__to__js = v => Boolean(v);
const _M0FP37Hosi1216syasou7interop14bool__from__js = v => Boolean(v);
const _M0FP37Hosi1216syasou7interop14string__to__js = v => v;
const _M0FP37Hosi1216syasou7interop16string__from__js = v => v;
const _M0FP37Hosi1216syasou7interop14unit__from__js = () => {};
const _M0MP37Hosi1216syasou7interop3Any5__get = (o,k) => o[k];
const _M0MP37Hosi1216syasou7interop3Any12__get__index = (o,k) => o[k];
const _M0FP37Hosi1216syasou7interop11is__nullish = v => v == null;
const _M0FP37Hosi1216syasou7interop4null = () => null;
const _M0MP37Hosi1216syasou7interop3Any5__set = (o,k,v) => {o[k]=v};
const _M0FP37Hosi1216syasou7interop11new__object = () => ({});
const _M0FP37Hosi1216syasou7interop8is__null = v => v === null;
const _M0FP37Hosi1216syasou7interop11json__parse = JSON.parse;
const _M0FP37Hosi1216syasou7interop15json__stringify = JSON.stringify;
const _M0MP37Hosi1216syasou7interop3Any10to__string = String;
const _M0FP37Hosi1216syasou7interop12throw__error = message => {throw new Error(message)};
const _M0FP37Hosi1216syasou7interop8ffi__try = run => {try {return {ok:true,value:run()}} catch(error) {return {ok:false,value:error}}};
const _M0FP37Hosi1216syasou7interop13promise__wait = (promise,ok,error) => {promise.then(ok,error)};
function _M0DTPC15error5Error52moonbitlang_2fcore_2fbuiltin_2eCancelled_2eCancelled() {}
_M0DTPC15error5Error52moonbitlang_2fcore_2fbuiltin_2eCancelled_2eCancelled.prototype.$tag = 1;
function _M0DTPC15error5Error50Hosi121_2fsyasou_2finterop_2eHostError_2eHostError(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error50Hosi121_2fsyasou_2finterop_2eHostError_2eHostError.prototype.$tag = 0;
function _M0DTPC16result6ResultGORP37Hosi1216syasou7interop3AnyRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORP37Hosi1216syasou7interop3AnyRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORP37Hosi1216syasou7interop3AnyRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORP37Hosi1216syasou7interop3AnyRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16option6OptionGRP37Hosi1216syasou7interop3AnyE4None() {}
_M0DTPC16option6OptionGRP37Hosi1216syasou7interop3AnyE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP37Hosi1216syasou7interop3AnyE4None__ = new _M0DTPC16option6OptionGRP37Hosi1216syasou7interop3AnyE4None();
function _M0DTPC16option6OptionGRP37Hosi1216syasou7interop3AnyE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP37Hosi1216syasou7interop3AnyE4Some.prototype.$tag = 1;
function _M0DTPC16result6ResultGOuRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOuRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGORP37Hosi1216syasou3dev4PageRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORP37Hosi1216syasou3dev4PageRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORP37Hosi1216syasou3dev4PageRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORP37Hosi1216syasou3dev4PageRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16option6OptionGRP37Hosi1216syasou3dev4PageE4None() {}
_M0DTPC16option6OptionGRP37Hosi1216syasou3dev4PageE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP37Hosi1216syasou3dev4PageE4None__ = new _M0DTPC16option6OptionGRP37Hosi1216syasou3dev4PageE4None();
function _M0DTPC16option6OptionGRP37Hosi1216syasou3dev4PageE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP37Hosi1216syasou3dev4PageE4Some.prototype.$tag = 1;
function _M0DTPC16result6ResultGORP37Hosi1216syasou3dev7BrowserRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORP37Hosi1216syasou3dev7BrowserRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORP37Hosi1216syasou3dev7BrowserRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORP37Hosi1216syasou3dev7BrowserRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16option6OptionGRP37Hosi1216syasou3dev7BrowserE4None() {}
_M0DTPC16option6OptionGRP37Hosi1216syasou3dev7BrowserE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP37Hosi1216syasou3dev7BrowserE4None__ = new _M0DTPC16option6OptionGRP37Hosi1216syasou3dev7BrowserE4None();
function _M0DTPC16option6OptionGRP37Hosi1216syasou3dev7BrowserE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP37Hosi1216syasou3dev7BrowserE4Some.prototype.$tag = 1;
const _M0MP37Hosi1216syasou3dev4Stat13is__directory = s => s.isDirectory();
const _M0FP37Hosi1216syasou3dev16node__executable = () => process.execPath;
const _M0FP37Hosi1216syasou3dev8platform = () => process.platform;
const _M0FP37Hosi1216syasou3dev11module__url = () => import.meta.url;
const _M0MP37Hosi1216syasou3dev7FileUrl4href = url => url.href;
const _M0MP37Hosi1216syasou3dev4Hash6update = (hash, bytes) => hash.update(bytes);
const _M0MP37Hosi1216syasou3dev4Hash6digest = (hash, encoding) => hash.digest(encoding);
const _M0FP37Hosi1216syasou3dev5regex = (pattern, flags) => new RegExp(pattern, flags);
const _M0MP37Hosi1216syasou3dev5Regex4exec = (re, input) => re.exec(input);
const _M0FP37Hosi1216syasou3dev12json__pretty = value => JSON.stringify(value, null, 2);
const _M0FP37Hosi1216syasou3dev13wasm__imports = bytes => WebAssembly.Module.imports(new WebAssembly.Module(bytes, {builtins:['js-string'], importedStringConstants:'_'}));
function $bytes_equal(a, b) {
    if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
function _M0TPB9ArrayViewGyE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function $f64_convert_i32_u(a) {
  return a < 0 ? a + 4294967296.0 : a + 0.0;
}
function _M0TPB8MutLocalGjE(param0) {
  this.val = param0;
}
const $bytes_literal$1 = new Uint8Array([8,6,0,0,0]);
const $bytes_literal$2 = new Uint8Array([137,80,78,71,13,10,26,10]);
const _M0FP37Hosi1216syasou3dev15launch__browser = (module, options) => module.chromium.launch(options);
const _M0FP37Hosi1216syasou3dev10playwright = () => import('@playwright/test');
const _M0MP37Hosi1216syasou3dev7Browser5close = browser => browser.close();
const _M0MP37Hosi1216syasou3dev7Browser9new__page = browser => browser.newPage({deviceScaleFactor:1});
const _M0MP37Hosi1216syasou3dev4Page7content = (page, html) => page.setContent(html);
const _M0MP37Hosi1216syasou3dev4Page10screenshot = (page, path) => page.screenshot({path});
const _M0MP37Hosi1216syasou3dev4Page8viewport = (page, size) => page.setViewportSize({width:size, height:size});
function _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__0(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__0.prototype.$tag = 0;
function _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State19_2adefer__try_2f349(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
_M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State19_2adefer__try_2f349.prototype.$tag = 1;
function _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__2(param0) {
  this._0 = param0;
}
_M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__2.prototype.$tag = 2;
function _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__3(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
_M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__3.prototype.$tag = 3;
function _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State9_2afor__4(param0, param1, param2, param3, param4, param5, param6, param7) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
  this._5 = param5;
  this._6 = param6;
  this._7 = param7;
}
_M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State9_2afor__4.prototype.$tag = 4;
function _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__5(param0, param1, param2, param3, param4, param5, param6, param7, param8) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
  this._5 = param5;
  this._6 = param6;
  this._7 = param7;
  this._8 = param8;
}
_M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__5.prototype.$tag = 5;
function _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__6(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
  this._5 = param5;
  this._6 = param6;
  this._7 = param7;
  this._8 = param8;
  this._9 = param9;
}
_M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__6.prototype.$tag = 6;
function _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__7(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
  this._5 = param5;
  this._6 = param6;
  this._7 = param7;
  this._8 = param8;
  this._9 = param9;
}
_M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__7.prototype.$tag = 7;
function _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__8(param0, param1, param2, param3, param4) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
}
_M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__8.prototype.$tag = 8;
function _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__9(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
_M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__9.prototype.$tag = 9;
function _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State9State__10(param0, param1, param2, param3, param4) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
}
_M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State9State__10.prototype.$tag = 10;
function _M0DTPC16result6ResultGOuRPB9CancelledE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOuRPB9CancelledE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOuRPB9CancelledE2Ok.prototype.$tag = 1;
function _M0DTP37Hosi1216syasou3dev65_24Hosi121_2fsyasou_2fdev_2e_2ainit_2e_2aarm_2f372_2elambda_2f547L5State12_2atry_2f365(param0) {
  this._0 = param0;
}
_M0DTP37Hosi1216syasou3dev65_24Hosi121_2fsyasou_2fdev_2e_2ainit_2e_2aarm_2f372_2elambda_2f547L5State12_2atry_2f365.prototype.$tag = 0;
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
function _M0FP15Error10to__string(_e) {
  if (_e.$tag === 0) {
    return "Hosi121/syasou/interop.HostError.HostError";
  } else {
    return "moonbitlang/core/builtin.Cancelled.Cancelled";
  }
}
const _M0MPC16string10StringView11trim__startN7_2abindS6877 = "\t\n\r ";
const _M0MPC16string6String4trimN7_2abindS6942 = "\t\n\r ";
const _M0MPB4Iter4nextN6constrS9918GUssEE = 0;
const _M0MPB4Iter4nextN6constrS9919GUssEE = 0;
const _M0MPB4Iter4nextN6constrS9918GcE = 0;
const _M0MPB4Iter4nextN6constrS9919GcE = 0;
const _M0MPB4Iter3newN6constrS9926GcE = 0;
const _M0MPB4Iter3newN6constrS9926GUssEE = 0;
const _M0FP37Hosi1216syasou3dev17compiler__version = "v0.10.13+cbb11c36f";
const _M0FP37Hosi1216syasou3dev3runN7_2abindS243 = " ";
const _M0FP37Hosi1216syasou3dev12embed__guardN13start__markerS15 = "<!-- moonbit:boot-guard:start -->";
const _M0FP37Hosi1216syasou3dev12embed__guardN11end__markerS16 = "<!-- moonbit:boot-guard:end -->";
const _M0FP37Hosi1216syasou3dev19boolean__parametersN7_2abindS244 = "(";
const _M0FP37Hosi1216syasou3dev8js__bodyN7_2abindS249 = "#|";
const _M0FP37Hosi1216syasou3dev8js__bodyN7_2abindS250 = "\n";
const _M0FP37Hosi1216syasou3dev8js__bodyN7_2abindS251 = "#| ";
const _M0FP37Hosi1216syasou3dev8js__bodyN7_2abindS252 = "\n";
const _M0FP37Hosi1216syasou3dev8js__bodyN7_2abindS253 = ".";
const _M0FP37Hosi1216syasou3dev8js__bodyN7_2abindS248 = "";
const _M0FP37Hosi1216syasou3dev12convert__ffiN7patternS83 = "(?:#cfg\\(target=\"js\"\\)\\s*)?((?:pub )?extern \"js\" fn ([\\w:]+)\\s*\\([\\s\\S]*?\\)\\s*(?:->\\s*[\\s\\S]*?)?=)\\s*(#\\|[^\\n]*(?:\\n[ \\t]*#\\|[^\\n]*)*|\"[^\"\\n]+\"(?:[ \\t]+\"[^\"\\n]+\")?)";
const _M0FP37Hosi1216syasou3dev12convert__ffiN7_2abindS261 = "::";
const _M0FP37Hosi1216syasou3dev12convert__ffiN7_2abindS262 = "_";
const _M0FP37Hosi1216syasou3dev12convert__ffiN7_2abindS259 = "extern \"js\"";
const _M0FP37Hosi1216syasou3dev12convert__ffiN7_2abindS260 = "extern \"wasm\"";
const _M0FP37Hosi1216syasou3dev12convert__ffiN7_2abindS263 = "";
const _M0FP37Hosi1216syasou3dev13generate__ffiN7_2abindS284 = "@js_core";
const _M0FP37Hosi1216syasou3dev13generate__ffiN7_2abindS272 = ".mbt";
const _M0FP37Hosi1216syasou3dev13generate__ffiN7_2abindS273 = "generated";
const _M0FP37Hosi1216syasou3dev13generate__ffiN7_2abindS274 = "test.mbt";
const _M0FP37Hosi1216syasou3dev13generate__ffiN7_2abindS282 = "\n\n";
const _M0FP37Hosi1216syasou3dev13generate__ffiN7_2abindS283 = "\n\n";
const _M0FP37Hosi1216syasou3dev15generated__hostN7_2abindS297 = "\n";
const _M0FP37Hosi1216syasou3dev9cli__path = "scripts/generated/dev.js";
const _M0FP37Hosi1216syasou3dev11output__dir = "src/generated/moonbit/";
const _M0FP37Hosi1216syasou3dev14source__digestN7_2abindS299 = ".mbt";
const _M0FP37Hosi1216syasou3dev14source__digestN7_2abindS300 = "/moon.pkg";
const _M0FP37Hosi1216syasou3dev14source__digestN7_2abindS298 = "";
const _M0FP37Hosi1216syasou3dev5buildN9test__dirS7 = "_build/wasm-gc/release/build/wasm_contract/";
const _M0FP37Hosi1216syasou3dev10cli__build = "_build/js/release/build/dev/dev.js";
const _M0FP37Hosi1216syasou3dev12source__textN7_2abindS318 = ".mbt";
const _M0FP37Hosi1216syasou3dev12source__textN7_2abindS319 = ".html";
const _M0FP37Hosi1216syasou3dev12source__textN7_2abindS320 = "\n";
const _M0FP37Hosi1216syasou3dev5fontsN11destinationS111 = "public/fonts";
const _M0FP37Hosi1216syasou3dev5iconsN7_2abindS361 = "<svg ";
const _M0FP37Hosi1216syasou3dev5iconsN7_2abindS362 = "<svg x=\"8\" y=\"8\" width=\"48\" height=\"48\" ";
const _M0FP37Hosi1216syasou3dev13js__artifacts = [{ _0: `${_M0FP37Hosi1216syasou3dev11output__dir}bootstrap.js`, _1: "bootstrap/bootstrap.js" }, { _0: `${_M0FP37Hosi1216syasou3dev11output__dir}boot-guard.js`, _1: "boot_guard/boot_guard.js" }, { _0: `${_M0FP37Hosi1216syasou3dev11output__dir}runtime-policy.js`, _1: "runtime_policy/runtime_policy.js" }, { _0: _M0FP37Hosi1216syasou3dev9cli__path, _1: "dev/dev.js" }];
const _M0MPC16string10StringView4findN6constrS9928 = 0;
const _M0FPB4seed = _M0FPB12random__seed();
const _M0FP37Hosi1216syasou3dev5iconsN5tupleS575 = { _0: 192, _1: "app-192.png" };
const _M0FP37Hosi1216syasou3dev5iconsN5tupleS576 = { _0: 512, _1: "app-512.png" };
const _M0FP37Hosi1216syasou3dev5iconsN5tupleS577 = { _0: 180, _1: "apple-touch-icon.png" };
function _M0FPB13consume4__acc(acc, input) {
  const _p = (acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0;
  const _p$2 = 17;
  return Math.imul(_p << _p$2 | (_p >>> (32 - _p$2 | 0) | 0), 668265263) | 0;
}
function _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGsEE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPC15array10FixedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGyEE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPB18UninitializedArray12unsafe__blitGsE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGsEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB18UninitializedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGyEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB18UninitializedArray23unsafe__make__and__blitGyE(src, allocate_len, src_offset, dst_offset, blit_len) {
  const dst = new Uint8Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, blit_len);
  return dst;
}
function _M0MPB13StringBuilder13write__objectGiE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGiE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
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
function _M0FPB32code__point__of__surrogate__pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function _M0MPC16string6String16unsafe__char__at(self, index) {
  const c1 = self.charCodeAt(index);
  if (c1 >= 55296 && c1 <= 56319) {
    const c2 = self.charCodeAt(index + 1 | 0);
    return _M0FPB32code__point__of__surrogate__pair(c1, c2);
  } else {
    return c1;
  }
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
function _M0MPB4Iter4nextGUssEE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9919GUssEE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9918GUssEE;
    }
  }
  return result;
}
function _M0MPB4Iter4nextGcE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === -1) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9919GcE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9918GcE;
    }
  }
  return result;
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0MPB4Iter3newGcE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9926GcE;
  }
  return new _M0TPB4IterGcE(f, size_hint$2);
}
function _M0MPB4Iter3newGUssEE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9926GUssEE;
  }
  return new _M0TPB4IterGUssEE(f, size_hint$2);
}
function _M0MPC15array10FixedArray5makeiGsE(length, value) {
  if (length <= 0) {
    return [];
  } else {
    const array = $make_array_len_and_init(length, value(0));
    let _tmp = 1;
    while (true) {
      const i = _tmp;
      if (i < length) {
        if (i >>> 0 < array.length) {
          array[i] = value(i);
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return array;
  }
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0MPC16string10StringView4iter(self) {
  const start = self.start;
  const end = self.end;
  const index = new _M0TPB8MutLocalGiE(start);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < end) {
      const c1 = self.str.charCodeAt(index.val);
      if (c1 >= 55296 && c1 <= 56319 && (index.val + 1 | 0) < self.end) {
        const c2 = self.str.charCodeAt(index.val + 1 | 0);
        if (c2 >= 56320 && c2 <= 57343) {
          index.val = index.val + 2 | 0;
          return _M0FPB32code__point__of__surrogate__pair(c1, c2);
        }
      }
      index.val = index.val + 1 | 0;
      return c1;
    } else {
      return -1;
    }
  }, undefined);
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
function _M0MPC16string6String31offset__of__nth__char__backward(self, n, start_offset, end_offset) {
  let _tmp = end_offset;
  let _tmp$2 = 0;
  while (true) {
    const utf16_offset = _tmp;
    const char_count = _tmp$2;
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const c = self.charCodeAt(utf16_offset - 1 | 0);
      if (c >= 56320 && c <= 57343) {
        _tmp = utf16_offset - 2 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      } else {
        _tmp = utf16_offset - 1 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      }
    } else {
      return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
    }
  }
}
function _M0MPC16string6String30offset__of__nth__char__forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let _tmp = start_offset;
    let _tmp$2 = 0;
    while (true) {
      const utf16_offset = _tmp;
      const char_count = _tmp$2;
      if (utf16_offset < end_offset && char_count < n) {
        const c = self.charCodeAt(utf16_offset);
        if (c >= 55296 && c <= 56319) {
          _tmp = utf16_offset + 2 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        } else {
          _tmp = utf16_offset + 1 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        }
      } else {
        return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
      }
    }
  } else {
    return $panic();
  }
}
function _M0MPC16string6String29offset__of__nth__char_2einner(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return i >= 0 ? _M0MPC16string6String30offset__of__nth__char__forward(self, i, start_offset, end_offset$2) : _M0MPC16string6String31offset__of__nth__char__backward(self, -i | 0, start_offset, end_offset$2);
}
function _M0MPB13StringBuilder11write__iter(self, iter) {
  while (true) {
    const _bind = _M0MPB4Iter4nextGcE(iter);
    if (_bind === -1) {
      return;
    } else {
      const _Some = _bind;
      const _ch = _Some;
      _M0IPB13StringBuilderPB6Logger11write__char(self, _ch);
      continue;
    }
  }
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
function _M0MPC15array5Array4pushGsE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGRP37Hosi1216syasou7interop3AnyE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGiE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0FPB36string__contains__code__unit__scalar(str, start, end, code) {
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < end) {
      const _p = str.charCodeAt(i);
      if (_p === code) {
        return true;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPB28string__contains__code__unit(str, start, end, code) {
  return _M0FPB36string__contains__code__unit__scalar(str, start, end, code);
}
function _M0MPC16string10StringView20contains__code__unit(self, code) {
  return _M0FPB28string__contains__code__unit(self.str, self.start, self.end, code);
}
function _M0MPC16string10StringView8contains(self, str) {
  const _bind = str.end - str.start | 0;
  switch (_bind) {
    case 0: {
      return true;
    }
    case 1: {
      return _M0MPC16string10StringView20contains__code__unit(self, str.str.charCodeAt(str.start));
    }
    default: {
      const _bind$2 = _M0MPC16string10StringView4find(self, str);
      return !(_bind$2 === undefined);
    }
  }
}
function _M0MPC16string6String8contains(self, str) {
  return _M0MPC16string10StringView8contains(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0FPB23build__ascii__char__set(chars) {
  let bits0 = 0;
  let bits1 = 0;
  let bits2 = 0;
  let bits3 = 0;
  const _bind = chars.str;
  const _bind$2 = chars.start;
  const _bind$3 = chars.end;
  let _tmp = _bind$2;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind$3) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$4 = _bind.charCodeAt(_string_index);
        if (_bind$4 >= 55296 && _bind$4 <= 56319 && (_string_index + 1 | 0) < _bind$3) {
          const _bind$5 = _bind.charCodeAt(_string_index + 1 | 0);
          if (_bind$5 >= 56320 && _bind$5 <= 57343) {
            const _tmp$2 = _string_index + 2 | 0;
            const _p = (((Math.imul(_bind$4 - 55296 | 0, 1024) | 0) + _bind$5 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          } else {
            const _tmp$2 = _string_index + 1 | 0;
            const _p = _bind$4;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          }
        } else {
          const _tmp$2 = _string_index + 1 | 0;
          const _p = _bind$4;
          _decoded_next_string_index = _tmp$2;
          _decoded_char = _p;
          break _L;
        }
      }
      const code = _decoded_char;
      if (code >>> 0 < 128 >>> 0) {
        const bit = 1 << (code & 31);
        const _bind$4 = code >>> 5 | 0;
        switch (_bind$4) {
          case 0: {
            bits0 = bits0 | bit;
            break;
          }
          case 1: {
            bits1 = bits1 | bit;
            break;
          }
          case 2: {
            bits2 = bits2 | bit;
            break;
          }
          default: {
            bits3 = bits3 | bit;
          }
        }
      } else {
        return undefined;
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return { _0: bits0, _1: bits1, _2: bits2, _3: bits3 };
}
function _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, code) {
  if (code >>> 0 < 128 >>> 0) {
    const bit = 1 << (code & 31);
    const _bind = code >>> 5 | 0;
    switch (_bind) {
      case 0: {
        return (bits0 & bit) !== 0;
      }
      case 1: {
        return (bits1 & bit) !== 0;
      }
      case 2: {
        return (bits2 & bit) !== 0;
      }
      default: {
        return (bits3 & bit) !== 0;
      }
    }
  } else {
    return false;
  }
}
function _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    let _tmp$2;
    if (pos < end) {
      const _p = str.charCodeAt(pos);
      _tmp$2 = _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _p);
    } else {
      _tmp$2 = false;
    }
    if (_tmp$2) {
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp = end;
  while (true) {
    const pos = _tmp;
    let _tmp$2;
    if (pos > start) {
      const _p = str.charCodeAt(pos - 1 | 0);
      _tmp$2 = _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _p);
    } else {
      _tmp$2 = false;
    }
    if (_tmp$2) {
      _tmp = pos - 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB26string__trim__start__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0FPB24string__trim__end__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0MPC16string10StringView14contains__char(self, c) {
  const len = self.end - self.start | 0;
  if (len > 0) {
    const c$2 = c;
    if (c$2 >= 0 && c$2 <= 65535) {
      return _M0MPC16string10StringView20contains__code__unit(self, c$2 & 65535);
    } else {
      if (c$2 < 0) {
        return false;
      } else {
        if (len >= 2) {
          const adj = c$2 - 65536 | 0;
          const high = 55296 + (adj >> 10) | 0;
          if (high <= 65535) {
            const high$2 = high & 65535;
            const low = (56320 + (adj & 1023) | 0) & 65535;
            let _tmp = 0;
            while (true) {
              const i = _tmp;
              if (i < (len - 1 | 0)) {
                const _p = self.str.charCodeAt(self.start + i | 0);
                if (_p === high$2) {
                  const _p$2 = self.str.charCodeAt(self.start + (i + 1 | 0) | 0);
                  if (_p$2 === low) {
                    return true;
                  }
                  _tmp = i + 2 | 0;
                  continue;
                }
                _tmp = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    }
    return false;
  } else {
    return false;
  }
}
function _M0MPC16string10StringView24trim__start__with__chars(self, chars) {
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 0, x.start, x.end));
      const _tmp$2 = x.str;
      const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 1, x.start, x.end);
      let _tmp$3;
      if (_bind === undefined) {
        _tmp$3 = x.end;
      } else {
        const _Some = _bind;
        _tmp$3 = _Some;
      }
      const _x = new _M0TPC16string10StringView(_tmp$2, _tmp$3, x.end);
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView22trim__end__with__chars(self, chars) {
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      const _x = new _M0TPC16string10StringView(x.str, x.start, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView12trim_2einner(self, chars) {
  const _bind = _M0FPB23build__ascii__char__set(chars);
  if (_bind === undefined) {
    return _M0MPC16string10StringView22trim__end__with__chars(_M0MPC16string10StringView24trim__start__with__chars(self, chars), chars);
  } else {
    const _Some = _bind;
    const _x = _Some;
    const _bits0 = _x._0;
    const _bits1 = _x._1;
    const _bits2 = _x._2;
    const _bits3 = _x._3;
    const start = _M0FPB26string__trim__start__ascii(self.str, self.start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    const end = _M0FPB24string__trim__end__ascii(self.str, start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    return new _M0TPC16string10StringView(self.str, start, end);
  }
}
function _M0MPC16string10StringView19trim__start_2einner(self, chars) {
  const _bind = _M0FPB23build__ascii__char__set(chars);
  if (_bind === undefined) {
    return _M0MPC16string10StringView24trim__start__with__chars(self, chars);
  } else {
    const _Some = _bind;
    const _x = _Some;
    const _bits0 = _x._0;
    const _bits1 = _x._1;
    const _bits2 = _x._2;
    const _bits3 = _x._3;
    const start = _M0FPB26string__trim__start__ascii(self.str, self.start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    return new _M0TPC16string10StringView(self.str, start, self.end);
  }
}
function _M0MPC16string10StringView11trim__start(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = new _M0TPC16string10StringView(_M0MPC16string10StringView11trim__startN7_2abindS6877, 0, _M0MPC16string10StringView11trim__startN7_2abindS6877.length);
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string10StringView19trim__start_2einner(self, chars);
}
function _M0MPC16string6String12trim_2einner(self, chars) {
  return _M0MPC16string10StringView12trim_2einner(new _M0TPC16string10StringView(self, 0, self.length), chars);
}
function _M0MPC16string6String4trim(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = new _M0TPC16string10StringView(_M0MPC16string6String4trimN7_2abindS6942, 0, _M0MPC16string6String4trimN7_2abindS6942.length);
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string6String12trim_2einner(self, chars);
}
function _M0MPB4Iter3mapGRPC16string10StringViewsE(self, f) {
  return new _M0TPB4IterGsE(() => {
    const _bind = _M0MPB4Iter4nextGUssEE(self);
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0MPB4Iter3mapGcRPC16string10StringViewE(self, f) {
  return new _M0TPB4IterGRPC16string10StringViewE(() => {
    const _bind = _M0MPB4Iter4nextGcE(self);
    if (_bind === -1) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0IPC14char4CharPB4Show10to__string(self) {
  return String.fromCodePoint(self);
}
function _M0MPC16string10StringView5split(self, sep) {
  const sep_len = sep.end - sep.start | 0;
  if (sep_len === 0) {
    return _M0MPB4Iter3mapGcRPC16string10StringViewE(_M0MPC16string10StringView4iter(self), (c) => _M0MPC16string6String12view_2einner(_M0IPC14char4CharPB4Show10to__string(c), 0, undefined));
  }
  const remaining = new _M0TPB8MutLocalGORPC16string10StringViewE(self);
  return _M0MPB4Iter3newGUssEE(() => {
    const _bind = remaining.val;
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _view = _Some;
      const _bind$2 = _M0MPC16string10StringView4find(_view, sep);
      if (_bind$2 === undefined) {
        remaining.val = undefined;
        return _view;
      } else {
        const _Some$2 = _bind$2;
        const _end = _Some$2;
        remaining.val = _M0MPC16string10StringView12view_2einner(_view, _end + sep_len | 0, undefined);
        return _M0MPC16string10StringView12view_2einner(_view, 0, _end);
      }
    }
  }, undefined);
}
function _M0MPC16string6String5split(self, sep) {
  return _M0MPC16string10StringView5split(new _M0TPC16string10StringView(self, 0, self.length), sep);
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
    const _bind$2 = _M0MPB4Iter4nextGUssEE(self);
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
function _M0MPC16string6String7replace(self, old, new_) {
  const _bind = _M0MPC16string6String4find(self, old);
  if (_bind === undefined) {
    return self;
  } else {
    const _Some = _bind;
    const _end = _Some;
    const _self = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    _M0MPB13StringBuilder11write__iter(_self, _M0MPC16string10StringView4iter(_M0MPC16string6String12view_2einner(self, 0, _end)));
    _M0MPB13StringBuilder11write__iter(_self, _M0MPC16string10StringView4iter(new_));
    _M0MPB13StringBuilder11write__iter(_self, _M0MPC16string10StringView4iter(_M0MPC16string6String12view_2einner(self, _end + (old.end - old.start | 0) | 0, undefined)));
    const _p = _self;
    return _p.val;
  }
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
function _M0MPC16option6Option10unwrap__orGsE(self, default_) {
  if (self === undefined) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(src, allocate_len, len, src_offset, dst_offset) {
  const dst = new Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGsE(dst, dst_offset, src, src_offset, len);
  return dst;
}
function _M0MPC15array9ArrayView9to__ownedGsE(self) {
  const len = self.end - self.start | 0;
  return len === 0 ? [] : _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(self.buf, len, len, self.start, 0);
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
function _M0FPB8new__mapGssE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGssE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
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
function _M0MPB3Map3setGssE(self, key, value) {
  _M0MPB3Map15set__with__hashGssE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
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
  const m = _M0FPB8new__mapGssE(capacity$2);
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
function _M0MPB3Map3getGssE(self, key) {
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
function _M0MPB3Map4iterGssE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGssEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGUssEE(() => {
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
function _M0MPB5Iter24nextGssE(self) {
  return _M0MPB4Iter4nextGUssEE(self);
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
function _M0MPB18UninitializedArray19unsafe__blit__fixedGsE(dst, dst_offset, src, src_offset, len) {
  let _tmp = len - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      const _tmp$2 = dst_offset + i | 0;
      const _tmp$3 = src_offset + i | 0;
      if (_tmp$2 >>> 0 < dst.length) {
        dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
      } else {
        $oob();
      }
      _tmp = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MPC16double6Double7to__int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function _M0FPB7printlnGsE(input) {
  console.log(input);
}
function _M0MPC15array10FixedArray17blit__from__bytes(self, bytes_offset, src, src_offset, length) {
  const e1 = (bytes_offset + length | 0) - 1 | 0;
  const e2 = (src_offset + length | 0) - 1 | 0;
  const len1 = self.length;
  const len2 = src.length;
  if (length >= 0 && (bytes_offset >= 0 && (e1 < len1 && (src_offset >= 0 && e2 < len2)))) {
    _M0MPC15array10FixedArray12unsafe__blitGyE(self, bytes_offset, src, src_offset, length);
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15bytes5Bytes11from__array(arr) {
  const len = arr.end - arr.start | 0;
  if (len === 0) {
    return $bytes_literal$0;
  }
  const result = _M0MPB18UninitializedArray23unsafe__make__and__blitGyE(arr.buf, len, arr.start, 0, len);
  return result;
}
function _M0MPC15array5Array44unsafe__make__and__blit__from__fixed_2einnerGsE(src, allocate_len, len, src_offset, dst_offset) {
  const dst = new Array(allocate_len);
  _M0MPB18UninitializedArray19unsafe__blit__fixedGsE(dst, dst_offset, src, src_offset, len);
  return dst;
}
function _M0MPC15bytes5Bytes16bytes__add__impl(self, other) {
  const len_self = self.length;
  const len_other = other.length;
  const rv = $makebytes(len_self + len_other | 0, 0);
  _M0MPC15array10FixedArray17blit__from__bytes(rv, 0, self, 0, len_self);
  _M0MPC15array10FixedArray17blit__from__bytes(rv, len_self, other, 0, len_other);
  return rv;
}
function _M0IPC15bytes5BytesPB3Add3add(self, other) {
  return _M0MPC15bytes5Bytes16bytes__add__impl(self, other);
}
function _M0MPC15array5Array21clamped__view_2einnerGsE(self, start, end) {
  const len = self.length;
  const lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _end = _Some;
    hi = _end < 0 ? 0 : _end > len ? len : _end;
  }
  const count = hi > lo ? hi - lo | 0 : 0;
  const _bind = self;
  return new _M0TPB9ArrayViewGsE(_bind, lo, lo + count | 0);
}
function _M0MPC15array5Array6appendGsE(self, other) {
  const old_len = self.length;
  const append_len = other.end - other.start | 0;
  if ((old_len + append_len | 0) >= old_len) {
    _M0MPB7JSArray12append__view(self, other.buf, other.start, append_len);
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array2atGsE(self, index) {
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
function _M0MPC15array5Array3setGyE(self, index, value) {
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
function _M0MPC15array5Array4makeGyE(len, elem) {
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
function _M0MPC15array5Array18from__fixed__arrayGsE(arr) {
  const len = arr.length;
  return _M0MPC15array5Array44unsafe__make__and__blit__from__fixed_2einnerGsE(arr, len, len, 0, 0);
}
function _M0MPC15array5Array3getGsE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : undefined;
}
function _M0MPC15array5Array4joinGsE(self, separator) {
  return _M0MPC15array9ArrayView4joinGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length), separator);
}
function _M0FPC28encoding4utf814encode_2einner(str, bom) {
  return _M0FPC28encoding4utf816encode__utf8__js(str.str, str.start, str.end - str.start | 0, bom);
}
function _M0FPC13env24get__cli__args__internal() {
  return _M0MPC15array5Array18from__fixed__arrayGsE(_M0FPC13env19get__cli__args__ffi());
}
function _M0FPC13env23get__env__var__internal(key) {
  return _M0FPC13env30is__env__var__exists__internal(key) ? _M0FPC13env30get__env__var__value__internal(key) : undefined;
}
function _M0FPC13env24get__env__vars__internal() {
  const tmp = _M0FPC13env31get__env__vars__array__internal();
  const _bind = [];
  const res = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind, 0, 0), undefined);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < tmp.length) {
      const _tmp$2 = i >>> 0 < tmp.length ? tmp[i] : $oob();
      const _tmp$3 = i + 1 | 0;
      _M0MPB3Map3setGssE(res, _tmp$2, _tmp$3 >>> 0 < tmp.length ? tmp[_tmp$3] : $oob());
      _tmp = i + 2 | 0;
      continue;
    } else {
      break;
    }
  }
  return res;
}
function _M0FPC13env4args() {
  return _M0FPC13env24get__cli__args__internal();
}
function _M0FPC13env13get__env__var(key) {
  return _M0FPC13env23get__env__var__internal(key);
}
function _M0FPC13env14get__env__vars() {
  return _M0FPC13env24get__env__vars__internal();
}
function _M0FP37Hosi1216syasou7interop3anyGsE(value) {
  return _M0IPC16string6StringP37Hosi1216syasou7interop4ToJs6to__js(value);
}
function _M0FP37Hosi1216syasou7interop3anyGbE(value) {
  return _M0IPC14bool4BoolP37Hosi1216syasou7interop4ToJs6to__js(value);
}
function _M0MP37Hosi1216syasou7interop3Any4castGbE(value) {
  return _M0IPC14bool4BoolP37Hosi1216syasou7interop6FromJs8from__js(value);
}
function _M0MP37Hosi1216syasou7interop3Any4castGiE(value) {
  return _M0IPC13int3IntP37Hosi1216syasou7interop6FromJs8from__js(value);
}
function _M0MP37Hosi1216syasou7interop3Any4castGsE(value) {
  return _M0IPC16string6StringP37Hosi1216syasou7interop6FromJs8from__js(value);
}
function _M0MP37Hosi1216syasou7interop3Any4castGRP37Hosi1216syasou7interop3AnyE(value) {
  return value;
}
function _M0MP37Hosi1216syasou7interop3Any4castGuE(value) {
  _M0IPC14unit4UnitP37Hosi1216syasou7interop6FromJs8from__js(value);
}
function _M0IPC13int3IntP37Hosi1216syasou7interop6FromJs8from__js(value) {
  return _M0FP37Hosi1216syasou7interop13int__from__js(value);
}
function _M0IPC14bool4BoolP37Hosi1216syasou7interop4ToJs6to__js(self) {
  return _M0FP37Hosi1216syasou7interop12bool__to__js(self);
}
function _M0IPC14bool4BoolP37Hosi1216syasou7interop6FromJs8from__js(value) {
  return _M0FP37Hosi1216syasou7interop14bool__from__js(value);
}
function _M0IPC16string6StringP37Hosi1216syasou7interop4ToJs6to__js(self) {
  return _M0FP37Hosi1216syasou7interop14string__to__js(self);
}
function _M0IPC16string6StringP37Hosi1216syasou7interop6FromJs8from__js(value) {
  return _M0FP37Hosi1216syasou7interop16string__from__js(value);
}
function _M0IPC14unit4UnitP37Hosi1216syasou7interop6FromJs8from__js(value) {
  _M0FP37Hosi1216syasou7interop14unit__from__js(value);
}
function _M0MP37Hosi1216syasou7interop7Promise4waitGRP37Hosi1216syasou7interop3AnyE(self, _cont, _err_cont) {
  _M0FP37Hosi1216syasou7interop13promise__wait(self, (value) => {
    _cont(_M0MP37Hosi1216syasou7interop3Any4castGRP37Hosi1216syasou7interop3AnyE(value));
  }, (value) => {
    _err_cont(new _M0DTPC15error5Error50Hosi121_2fsyasou_2finterop_2eHostError_2eHostError(value));
  });
  return new _M0DTPC16result6ResultGORP37Hosi1216syasou7interop3AnyRPC15error5ErrorE2Ok(_M0DTPC16option6OptionGRP37Hosi1216syasou7interop3AnyE4None__);
}
function _M0MP37Hosi1216syasou7interop7Promise4waitGuE(self, _cont, _err_cont) {
  _M0FP37Hosi1216syasou7interop13promise__wait(self, (value) => {
    _cont(_M0MP37Hosi1216syasou7interop3Any4castGuE(value));
  }, (value) => {
    _err_cont(new _M0DTPC15error5Error50Hosi121_2fsyasou_2finterop_2eHostError_2eHostError(value));
  });
  return new _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(-1);
}
function _M0MP37Hosi1216syasou7interop7Promise4waitGRP37Hosi1216syasou3dev4PageE(self, _cont, _err_cont) {
  _M0FP37Hosi1216syasou7interop13promise__wait(self, (value) => {
    _cont(value);
  }, (value) => {
    _err_cont(new _M0DTPC15error5Error50Hosi121_2fsyasou_2finterop_2eHostError_2eHostError(value));
  });
  return new _M0DTPC16result6ResultGORP37Hosi1216syasou3dev4PageRPC15error5ErrorE2Ok(_M0DTPC16option6OptionGRP37Hosi1216syasou3dev4PageE4None__);
}
function _M0MP37Hosi1216syasou7interop7Promise4waitGRP37Hosi1216syasou3dev7BrowserE(self, _cont, _err_cont) {
  _M0FP37Hosi1216syasou7interop13promise__wait(self, (value) => {
    _cont(value);
  }, (value) => {
    _err_cont(new _M0DTPC15error5Error50Hosi121_2fsyasou_2finterop_2eHostError_2eHostError(value));
  });
  return new _M0DTPC16result6ResultGORP37Hosi1216syasou3dev7BrowserRPC15error5ErrorE2Ok(_M0DTPC16option6OptionGRP37Hosi1216syasou3dev7BrowserE4None__);
}
function _M0FP37Hosi1216syasou3dev10read__text(_tmp, _tmp$2) {
  return readFileSync$1959(_tmp, _tmp$2);
}
function _M0FP37Hosi1216syasou3dev11read__bytes(_tmp) {
  return readFileSync$1959(_tmp);
}
function _M0FP37Hosi1216syasou3dev11write__text(_tmp, _tmp$2) {
  return writeFileSync$1963(_tmp, _tmp$2);
}
function _M0FP37Hosi1216syasou3dev12write__bytes(_tmp, _tmp$2) {
  return writeFileSync$1963(_tmp, _tmp$2);
}
function _M0FP37Hosi1216syasou3dev7entries(_tmp) {
  return readdirSync$1967(_tmp);
}
function _M0FP37Hosi1216syasou3dev6exists(_tmp) {
  return existsSync$1969(_tmp);
}
function _M0FP37Hosi1216syasou3dev4stat(_tmp) {
  return statSync$1971(_tmp);
}
function _M0FP37Hosi1216syasou3dev14mkdir__options(_tmp, _tmp$2) {
  return mkdirSync$1975(_tmp, _tmp$2);
}
function _M0FP37Hosi1216syasou3dev10copy__file(_tmp, _tmp$2) {
  return copyFileSync$1978(_tmp, _tmp$2);
}
function _M0FP37Hosi1216syasou3dev20temporary__directory(_tmp) {
  return mkdtempSync$1980(_tmp);
}
function _M0FP37Hosi1216syasou3dev15remove__options(_tmp, _tmp$2) {
  return rmSync$1983(_tmp, _tmp$2);
}
function _M0FP37Hosi1216syasou3dev6tmpdir() {
  return tmpdir$1984();
}
function _M0FP37Hosi1216syasou3dev8absolute(_tmp) {
  return resolve$1986(_tmp);
}
function _M0FP37Hosi1216syasou3dev7dirname(_tmp) {
  return dirname$1988(_tmp);
}
function _M0FP37Hosi1216syasou3dev5spawn(_tmp, _tmp$2, _tmp$3) {
  return spawnSync$1992(_tmp, _tmp$2, _tmp$3);
}
function _M0FP37Hosi1216syasou3dev9file__url(_tmp) {
  return pathToFileURL$1994(_tmp);
}
function _M0FP37Hosi1216syasou3dev12create__hash(_tmp) {
  return createHash$1997(_tmp);
}
function _M0FP37Hosi1216syasou3dev7deflate(_tmp) {
  return deflateSync$2003(_tmp);
}
function _M0FP37Hosi1216syasou3dev4read(path) {
  return _M0FP37Hosi1216syasou3dev10read__text(path, "utf8");
}
function _M0FP37Hosi1216syasou3dev4hash(bytes) {
  return _M0MP37Hosi1216syasou3dev4Hash6digest(_M0MP37Hosi1216syasou3dev4Hash6update(_M0FP37Hosi1216syasou3dev12create__hash("sha256"), bytes), "hex");
}
function _M0FP37Hosi1216syasou3dev10text__hash(text) {
  return _M0FP37Hosi1216syasou3dev4hash(_M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(text, 0, text.length), false));
}
function _M0FP37Hosi1216syasou3dev5mkdir(path) {
  const options = _M0FP37Hosi1216syasou7interop11new__object();
  _M0MP37Hosi1216syasou7interop3Any5__set(options, "recursive", _M0FP37Hosi1216syasou7interop3anyGbE(true));
  _M0FP37Hosi1216syasou3dev14mkdir__options(path, options);
}
function _M0FP37Hosi1216syasou3dev6remove(path) {
  const options = _M0FP37Hosi1216syasou7interop11new__object();
  _M0MP37Hosi1216syasou7interop3Any5__set(options, "recursive", _M0FP37Hosi1216syasou7interop3anyGbE(true));
  _M0MP37Hosi1216syasou7interop3Any5__set(options, "force", _M0FP37Hosi1216syasou7interop3anyGbE(true));
  _M0FP37Hosi1216syasou3dev15remove__options(path, options);
}
function _M0FP37Hosi1216syasou3dev4fail(message) {
  _M0FP37Hosi1216syasou7interop12throw__error(message);
}
function _M0FP37Hosi1216syasou3dev4walk(path) {
  const files = [];
  const _bind = _M0FP37Hosi1216syasou3dev7entries(path);
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const name = _bind[_];
      const child = `${path}/${name}`;
      if (_M0MP37Hosi1216syasou3dev4Stat13is__directory(_M0FP37Hosi1216syasou3dev4stat(child))) {
        const _bind$3 = _M0FP37Hosi1216syasou3dev4walk(child);
        _M0MPC15array5Array6appendGsE(files, new _M0TPB9ArrayViewGsE(_bind$3, 0, _bind$3.length));
      } else {
        _M0MPC15array5Array4pushGsE(files, child);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return files;
}
function _M0FP37Hosi1216syasou3dev7matches(pattern, input) {
  return !_M0FP37Hosi1216syasou7interop8is__null(_M0MP37Hosi1216syasou3dev5Regex4exec(_M0FP37Hosi1216syasou3dev5regex(pattern, ""), input));
}
function _M0FP37Hosi1216syasou3dev8captures(pattern, input) {
  const re = _M0FP37Hosi1216syasou3dev5regex(pattern, "g");
  const result = [];
  while (true) {
    const found = _M0MP37Hosi1216syasou3dev5Regex4exec(re, input);
    if (_M0FP37Hosi1216syasou7interop8is__null(found)) {
      break;
    }
    _M0MPC15array5Array4pushGRP37Hosi1216syasou7interop3AnyE(result, found);
    continue;
  }
  return result;
}
function _M0FP37Hosi1216syasou3dev8compiler() {
  _L: {
    const _bind = _M0FPC13env13get__env__var("MOON_BIN");
    if (_bind === undefined) {
      break _L;
    } else {
      const _Some = _bind;
      const _value = _Some;
      const _p = "";
      if (!(_value === _p)) {
        return _value;
      } else {
        break _L;
      }
    }
  }
  const local_bin = _M0FP37Hosi1216syasou3dev8absolute("artifacts/moon-toolchain/bin/moon");
  return _M0FP37Hosi1216syasou3dev6exists(local_bin) ? local_bin : "moon";
}
function _M0FP37Hosi1216syasou3dev16process__options(command, capture) {
  const options = _M0FP37Hosi1216syasou7interop11new__object();
  const env = _M0FP37Hosi1216syasou7interop11new__object();
  const _it = _M0MPB3Map5iter2GssE(_M0FPC13env14get__env__vars());
  while (true) {
    const _bind = _M0MPB5Iter24nextGssE(_it);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const _key = _x._0;
      const _value = _x._1;
      _M0MP37Hosi1216syasou7interop3Any5__set(env, _key, _M0FP37Hosi1216syasou7interop3anyGsE(_value));
      continue;
    }
  }
  const _p = "moon";
  if (!(command === _p)) {
    _M0MP37Hosi1216syasou7interop3Any5__set(env, "MOON_HOME", _M0FP37Hosi1216syasou7interop3anyGsE(_M0FP37Hosi1216syasou3dev8absolute(`${_M0FP37Hosi1216syasou3dev7dirname(command)}/..`)));
    const separator = _M0FP37Hosi1216syasou3dev8platform() === "win32" ? ";" : ":";
    _M0MP37Hosi1216syasou7interop3Any5__set(env, "PATH", _M0FP37Hosi1216syasou7interop3anyGsE(`${_M0FP37Hosi1216syasou3dev7dirname(command)}${separator}${_M0MPC16option6Option10unwrap__orGsE(_M0FPC13env13get__env__var("PATH"), "")}`));
  }
  _M0MP37Hosi1216syasou7interop3Any5__set(options, "env", env);
  _M0MP37Hosi1216syasou7interop3Any5__set(options, "encoding", _M0FP37Hosi1216syasou7interop3anyGsE("utf8"));
  _M0MP37Hosi1216syasou7interop3Any5__set(options, "stdio", _M0FP37Hosi1216syasou7interop3anyGsE(capture ? "pipe" : "inherit"));
  return options;
}
function _M0FP37Hosi1216syasou3dev3run(command, args, options) {
  const result = _M0FP37Hosi1216syasou3dev5spawn(command, _M0MPC15array10FixedArray5makeiGsE(args.length, (i) => _M0MPC15array5Array2atGsE(args, i)), options);
  const error = _M0MP37Hosi1216syasou7interop3Any5__get(result, "error");
  if (!_M0FP37Hosi1216syasou7interop11is__nullish(error)) {
    _M0FP37Hosi1216syasou3dev4fail(`${command}: ${_M0MP37Hosi1216syasou7interop3Any10to__string(error)}`);
  }
  const status = _M0MP37Hosi1216syasou7interop3Any5__get(result, "status");
  if (_M0FP37Hosi1216syasou7interop11is__nullish(status) || _M0MP37Hosi1216syasou7interop3Any4castGiE(status) !== 0) {
    const stderr = _M0MP37Hosi1216syasou7interop3Any5__get(result, "stderr");
    _M0FP37Hosi1216syasou3dev4fail(`${command} ${_M0MPC15array5Array4joinGsE(args, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev3runN7_2abindS243, 0, _M0FP37Hosi1216syasou3dev3runN7_2abindS243.length))} failed\n${_M0FP37Hosi1216syasou7interop11is__nullish(stderr) ? "" : _M0MP37Hosi1216syasou7interop3Any10to__string(stderr)}`);
  }
  const stdout = _M0MP37Hosi1216syasou7interop3Any5__get(result, "stdout");
  return _M0FP37Hosi1216syasou7interop11is__nullish(stdout) ? "" : _M0MP37Hosi1216syasou7interop3Any4castGsE(stdout);
}
function _M0FP37Hosi1216syasou3dev15check__compiler() {
  const command = _M0FP37Hosi1216syasou3dev8compiler();
  const moonc = command === "moon" ? "moonc" : `${_M0FP37Hosi1216syasou3dev7dirname(command)}/moonc`;
  const version = _M0FP37Hosi1216syasou3dev3run(moonc, ["-v"], _M0FP37Hosi1216syasou3dev16process__options(command, true));
  if (!_M0MPC16string6String8contains(version, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev17compiler__version, 0, _M0FP37Hosi1216syasou3dev17compiler__version.length))) {
    _M0FP37Hosi1216syasou3dev4fail(`Expected MoonBit ${_M0FP37Hosi1216syasou3dev17compiler__version}; got ${version}`);
    return;
  } else {
    return;
  }
}
function _M0FP37Hosi1216syasou3dev12embed__guard(html, boot_code) {
  const _p = _M0MPC16string6String4find(html, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev12embed__guardN13start__markerS15, 0, _M0FP37Hosi1216syasou3dev12embed__guardN13start__markerS15.length));
  let start;
  if (_p === undefined) {
    start = $panic();
  } else {
    const _p$2 = _p;
    start = _p$2;
  }
  const _p$2 = _M0MPC16string6String4find(html, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev12embed__guardN11end__markerS16, 0, _M0FP37Hosi1216syasou3dev12embed__guardN11end__markerS16.length));
  let _tmp;
  if (_p$2 === undefined) {
    _tmp = $panic();
  } else {
    const _p$3 = _p$2;
    _tmp = _p$3;
  }
  const end = _tmp + _M0FP37Hosi1216syasou3dev12embed__guardN11end__markerS16.length | 0;
  return `${html.substring(0, start)}${_M0FP37Hosi1216syasou3dev12embed__guardN13start__markerS15}\n    <script>${boot_code}</script>\n    ${_M0FP37Hosi1216syasou3dev12embed__guardN11end__markerS16}${html.substring(end, html.length)}`;
}
function _M0FP37Hosi1216syasou3dev13changed__text(path, text) {
  let _tmp;
  if (!_M0FP37Hosi1216syasou3dev6exists(path)) {
    _tmp = true;
  } else {
    const _p = _M0FP37Hosi1216syasou3dev4read(path);
    _tmp = !(_p === text);
  }
  if (_tmp) {
    _M0FP37Hosi1216syasou3dev11write__text(path, text);
    return;
  } else {
    return;
  }
}
function _M0FP37Hosi1216syasou3dev19boolean__parameters(signature) {
  const positions = [];
  let depth = 0;
  const _p = _M0MPC16string6String4find(signature, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev19boolean__parametersN7_2abindS244, 0, _M0FP37Hosi1216syasou3dev19boolean__parametersN7_2abindS244.length));
  let _tmp;
  if (_p === undefined) {
    _tmp = $panic();
  } else {
    const _p$2 = _p;
    _tmp = _p$2;
  }
  let start = _tmp + 1 | 0;
  let index = 0;
  let _tmp$2 = start;
  while (true) {
    const i = _tmp$2;
    if (i < signature.length) {
      const c = i >>> 0 < signature.length ? signature.charCodeAt(i) : $oob();
      let _tmp$3;
      const _p$2 = 40;
      if (c === _p$2) {
        _tmp$3 = true;
      } else {
        const _p$3 = 91;
        _tmp$3 = c === _p$3;
      }
      if (_tmp$3) {
        depth = depth + 1 | 0;
      }
      let last;
      const _p$3 = 41;
      if (c === _p$3) {
        last = depth === 0;
      } else {
        last = false;
      }
      let _tmp$4;
      if (last) {
        _tmp$4 = true;
      } else {
        let _tmp$5;
        const _p$4 = 44;
        if (c === _p$4) {
          _tmp$5 = depth === 0;
        } else {
          _tmp$5 = false;
        }
        _tmp$4 = _tmp$5;
      }
      if (_tmp$4) {
        if (_M0FP37Hosi1216syasou3dev7matches(":\\s*Bool\\s*$", signature.substring(start, i))) {
          _M0MPC15array5Array4pushGiE(positions, index);
        }
        index = index + 1 | 0;
        start = i + 1 | 0;
      }
      if (last) {
        break;
      }
      let _tmp$5;
      const _p$4 = 41;
      if (c === _p$4) {
        _tmp$5 = true;
      } else {
        const _p$5 = 93;
        _tmp$5 = c === _p$5;
      }
      if (_tmp$5) {
        depth = depth - 1 | 0;
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return positions;
}
function _M0FP37Hosi1216syasou3dev8js__body(implementation, signature) {
  let body;
  if (_M0MPC16string6String11has__prefix(implementation, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev8js__bodyN7_2abindS249, 0, _M0FP37Hosi1216syasou3dev8js__bodyN7_2abindS249.length))) {
    body = _M0MPC15array5Array4joinGsE(_M0MPB4Iter9to__arrayGsE(_M0MPB4Iter3mapGRPC16string10StringViewsE(_M0MPC16string6String5split(implementation, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev8js__bodyN7_2abindS250, 0, _M0FP37Hosi1216syasou3dev8js__bodyN7_2abindS250.length)), (line) => {
      const line$2 = _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView11trim__start(line, undefined));
      const start = _M0MPC16string6String11has__prefix(line$2, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev8js__bodyN7_2abindS251, 0, _M0FP37Hosi1216syasou3dev8js__bodyN7_2abindS251.length)) ? 3 : 2;
      return line$2.substring(start, line$2.length);
    })), new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev8js__bodyN7_2abindS252, 0, _M0FP37Hosi1216syasou3dev8js__bodyN7_2abindS252.length));
  } else {
    const _p = _M0FP37Hosi1216syasou3dev8captures("\"([^\"]+)\"", implementation);
    const _p$2 = new Array(_p.length);
    const _p$3 = _p.length;
    let _tmp = 0;
    while (true) {
      const _p$4 = _tmp;
      if (_p$4 < _p$3) {
        const _p$5 = _p[_p$4];
        _p$2[_p$4] = _M0MP37Hosi1216syasou7interop3Any10to__string(_M0MP37Hosi1216syasou7interop3Any12__get__index(_p$5, 1));
        _tmp = _p$4 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    body = _M0MPC15array5Array4joinGsE(_p$2, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev8js__bodyN7_2abindS253, 0, _M0FP37Hosi1216syasou3dev8js__bodyN7_2abindS253.length));
  }
  const booleans = _M0FP37Hosi1216syasou3dev19boolean__parameters(signature);
  if (booleans.length === 0) {
    return body;
  } else {
    const _p = new Array(booleans.length);
    const _p$2 = booleans.length;
    let _tmp = 0;
    while (true) {
      const _p$3 = _tmp;
      if (_p$3 < _p$2) {
        const _p$4 = booleans[_p$3];
        const _p$5 = _M0MPB13StringBuilder21StringBuilder_2einner(23);
        _M0IPB13StringBuilderPB6Logger13write__string(_p$5, "args[");
        _M0MPB13StringBuilder13write__objectGiE(_p$5, _p$4);
        _M0IPB13StringBuilderPB6Logger13write__string(_p$5, "]=Boolean(args[");
        _M0MPB13StringBuilder13write__objectGiE(_p$5, _p$4);
        _M0IPB13StringBuilderPB6Logger13write__string(_p$5, "]);");
        _p[_p$3] = _p$5.val;
        _tmp = _p$3 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return `(...args) => {${_M0MPC15array5Array4joinGsE(_p, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev8js__bodyN7_2abindS248, 0, _M0FP37Hosi1216syasou3dev8js__bodyN7_2abindS248.length))}return (${body})(...args)}`;
  }
}
function _M0FP37Hosi1216syasou3dev12convert__ffi(source, package_name, operations, declarations) {
  const parts = [];
  let offset = 0;
  const _bind = _M0FP37Hosi1216syasou3dev8captures(_M0FP37Hosi1216syasou3dev12convert__ffiN7patternS83, source);
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const found = _bind[_];
      const index = _M0MP37Hosi1216syasou7interop3Any4castGiE(_M0MP37Hosi1216syasou7interop3Any5__get(found, "index"));
      const full = _M0MP37Hosi1216syasou7interop3Any10to__string(_M0MP37Hosi1216syasou7interop3Any12__get__index(found, 0));
      const signature = _M0MP37Hosi1216syasou7interop3Any10to__string(_M0MP37Hosi1216syasou7interop3Any12__get__index(found, 1));
      const name = _M0MP37Hosi1216syasou7interop3Any10to__string(_M0MP37Hosi1216syasou7interop3Any12__get__index(found, 2));
      const implementation = _M0MP37Hosi1216syasou7interop3Any10to__string(_M0MP37Hosi1216syasou7interop3Any12__get__index(found, 3));
      const key = `${package_name}_${_M0MPC16string6String12replace__all(name, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev12convert__ffiN7_2abindS261, 0, _M0FP37Hosi1216syasou3dev12convert__ffiN7_2abindS261.length), new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev12convert__ffiN7_2abindS262, 0, _M0FP37Hosi1216syasou3dev12convert__ffiN7_2abindS262.length))}`;
      if (_M0MPB3Map8containsGssE(operations, key)) {
        _M0FP37Hosi1216syasou3dev4fail(`Duplicate FFI ${key}`);
      }
      _M0MPB3Map3setGssE(operations, key, _M0FP37Hosi1216syasou3dev8js__body(implementation, signature));
      _M0MPC15array5Array4pushGsE(declarations, `${_M0MPC16string6String7replace(signature, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev12convert__ffiN7_2abindS259, 0, _M0FP37Hosi1216syasou3dev12convert__ffiN7_2abindS259.length), new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev12convert__ffiN7_2abindS260, 0, _M0FP37Hosi1216syasou3dev12convert__ffiN7_2abindS260.length))} \"syasou\" \"${key}\"`);
      _M0MPC15array5Array4pushGsE(parts, source.substring(offset, index));
      _M0MPC15array5Array4pushGsE(parts, `#cfg(target=\"js\")\n${signature}\n  ${implementation}`);
      offset = index + full.length | 0;
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array4pushGsE(parts, source.substring(offset, source.length));
  return _M0MPC15array5Array4joinGsE(parts, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev12convert__ffiN7_2abindS263, 0, _M0FP37Hosi1216syasou3dev12convert__ffiN7_2abindS263.length));
}
function _M0FP37Hosi1216syasou3dev13generate__ffi() {
  const _bind = [];
  const operations = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind, 0, 0), undefined);
  const _bind$2 = _M0FP37Hosi1216syasou3dev7entries("moonbit");
  const _bind$3 = _bind$2.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const package_name = _bind$2[_];
      _L: {
        const folder = `moonbit/${package_name}`;
        if (!_M0MP37Hosi1216syasou3dev4Stat13is__directory(_M0FP37Hosi1216syasou3dev4stat(folder))) {
          break _L;
        }
        const package_text = _M0FP37Hosi1216syasou3dev4read(`${folder}/moon.pkg`);
        if (_M0FP37Hosi1216syasou3dev7matches("supported_targets\\s*=\\s*\"js\"", package_text)) {
          break _L;
        }
        const js_alias = _M0MPC16string6String8contains(package_text, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev13generate__ffiN7_2abindS284, 0, _M0FP37Hosi1216syasou3dev13generate__ffiN7_2abindS284.length)) ? "@js_core" : "@js";
        const declarations = [];
        const conversions = [];
        const _bind$4 = _M0FP37Hosi1216syasou3dev7entries(folder);
        const _bind$5 = _bind$4.length;
        let _tmp$2 = 0;
        while (true) {
          const _$2 = _tmp$2;
          if (_$2 < _bind$5) {
            const name = _bind$4[_$2];
            _L$2: {
              if (!_M0MPC16string6String11has__suffix(name, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev13generate__ffiN7_2abindS272, 0, _M0FP37Hosi1216syasou3dev13generate__ffiN7_2abindS272.length)) || (_M0MPC16string6String8contains(name, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev13generate__ffiN7_2abindS273, 0, _M0FP37Hosi1216syasou3dev13generate__ffiN7_2abindS273.length)) || _M0MPC16string6String11has__suffix(name, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev13generate__ffiN7_2abindS274, 0, _M0FP37Hosi1216syasou3dev13generate__ffiN7_2abindS274.length)))) {
                break _L$2;
              }
              const path = `${folder}/${name}`;
              const source = _M0FP37Hosi1216syasou3dev4read(path);
              const _p = "interop";
              if (!(package_name === _p)) {
                const _bind$6 = _M0FP37Hosi1216syasou3dev8captures("#external\\s+(pub |priv )?type (\\w+)(?!\\w|\\[)", source);
                const _bind$7 = _bind$6.length;
                let _tmp$3 = 0;
                while (true) {
                  const _$3 = _tmp$3;
                  if (_$3 < _bind$7) {
                    const found = _bind$6[_$3];
                    _L$3: {
                      const _p$2 = _M0MP37Hosi1216syasou7interop3Any10to__string(_M0MP37Hosi1216syasou7interop3Any12__get__index(found, 1));
                      const _p$3 = "pub ";
                      if (!(_p$2 === _p$3)) {
                        break _L$3;
                      }
                      const name$2 = _M0MP37Hosi1216syasou7interop3Any10to__string(_M0MP37Hosi1216syasou7interop3Any12__get__index(found, 2));
                      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(202);
                      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "pub impl ");
                      _M0MPB13StringBuilder13write__objectGsE(_string_builder, js_alias);
                      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ".ToJs for ");
                      _M0MPB13StringBuilder13write__objectGsE(_string_builder, name$2);
                      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " with fn to_js(self) -> ");
                      _M0MPB13StringBuilder13write__objectGsE(_string_builder, js_alias);
                      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ".Any = \"%identity\"\npub impl ");
                      _M0MPB13StringBuilder13write__objectGsE(_string_builder, js_alias);
                      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ".FromJs for ");
                      _M0MPB13StringBuilder13write__objectGsE(_string_builder, name$2);
                      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " with fn from_js(value : ");
                      _M0MPB13StringBuilder13write__objectGsE(_string_builder, js_alias);
                      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ".Any) -> ");
                      _M0MPB13StringBuilder13write__objectGsE(_string_builder, name$2);
                      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " = \"%identity\"\npub impl ");
                      _M0MPB13StringBuilder13write__objectGsE(_string_builder, js_alias);
                      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ".Same for ");
                      _M0MPB13StringBuilder13write__objectGsE(_string_builder, name$2);
                      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " with fn same(a,b) { ");
                      _M0MPB13StringBuilder13write__objectGsE(_string_builder, js_alias);
                      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ".same_host(");
                      _M0MPB13StringBuilder13write__objectGsE(_string_builder, js_alias);
                      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ".any(a), ");
                      _M0MPB13StringBuilder13write__objectGsE(_string_builder, js_alias);
                      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ".any(b)) }");
                      _M0MPC15array5Array4pushGsE(conversions, _string_builder.val);
                      break _L$3;
                    }
                    _tmp$3 = _$3 + 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
              }
              _M0FP37Hosi1216syasou3dev13changed__text(path, _M0FP37Hosi1216syasou3dev12convert__ffi(source, package_name, operations, declarations));
              break _L$2;
            }
            _tmp$2 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (!(declarations.length === 0)) {
          const _tmp$3 = `${folder}/ffi_wasm.generated.mbt`;
          const _p = new Array(declarations.length);
          const _p$2 = declarations.length;
          let _tmp$4 = 0;
          while (true) {
            const _p$3 = _tmp$4;
            if (_p$3 < _p$2) {
              const _p$4 = declarations[_p$3];
              _p[_p$3] = `///|\n#cfg(target=\"wasm-gc\")\n${_p$4}`;
              _tmp$4 = _p$3 + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0FP37Hosi1216syasou3dev13changed__text(_tmp$3, `// Generated by moonbit/dev/ffi.mbt.\n${_M0MPC15array5Array4joinGsE(_p, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev13generate__ffiN7_2abindS282, 0, _M0FP37Hosi1216syasou3dev13generate__ffiN7_2abindS282.length))}\n`);
        }
        if (!(conversions.length === 0)) {
          const _tmp$3 = `${folder}/ffi_types.generated.mbt`;
          const _p = new Array(conversions.length);
          const _p$2 = conversions.length;
          let _tmp$4 = 0;
          while (true) {
            const _p$3 = _tmp$4;
            if (_p$3 < _p$2) {
              const _p$4 = conversions[_p$3];
              _p[_p$3] = `///|\n${_p$4}`;
              _tmp$4 = _p$3 + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0FP37Hosi1216syasou3dev13changed__text(_tmp$3, `// Typed conversions between opaque browser references.\n${_M0MPC15array5Array4joinGsE(_p, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev13generate__ffiN7_2abindS283, 0, _M0FP37Hosi1216syasou3dev13generate__ffiN7_2abindS283.length))}\n`);
        }
        break _L;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return operations;
}
function _M0FP37Hosi1216syasou3dev15generated__host(bytes, operations) {
  const lines = [];
  const _bind = _M0FP37Hosi1216syasou3dev13wasm__imports(bytes);
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const item = _bind[_];
      _L: {
        const _p = _M0MP37Hosi1216syasou7interop3Any10to__string(_M0MP37Hosi1216syasou7interop3Any5__get(item, "module"));
        const _p$2 = "syasou";
        if (!(_p === _p$2)) {
          break _L;
        }
        const name = _M0MP37Hosi1216syasou7interop3Any10to__string(_M0MP37Hosi1216syasou7interop3Any5__get(item, "name"));
        const _bind$3 = _M0MPB3Map3getGssE(operations, name);
        let body;
        if (_bind$3 === undefined) {
          _M0FP37Hosi1216syasou3dev4fail(`Missing browser operation ${name}`);
          body = "";
        } else {
          const _Some = _bind$3;
          body = _Some;
        }
        _M0MPC15array5Array4pushGsE(lines, `  ${_M0FP37Hosi1216syasou7interop15json__stringify(_M0FP37Hosi1216syasou7interop3anyGsE(name))}: (${body}),`);
        break _L;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return `export const imports = {\n${_M0MPC15array5Array4joinGsE(lines, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev15generated__hostN7_2abindS297, 0, _M0FP37Hosi1216syasou3dev15generated__hostN7_2abindS297.length))}\n}\n`;
}
function _M0FP37Hosi1216syasou3dev4moon(args) {
  const command = _M0FP37Hosi1216syasou3dev8compiler();
  _M0FP37Hosi1216syasou3dev3run(command, args, _M0FP37Hosi1216syasou3dev16process__options(command, false));
}
function _M0FP37Hosi1216syasou3dev6output(path, bytes, check) {
  if (check) {
    let _tmp;
    if (!_M0FP37Hosi1216syasou3dev6exists(path)) {
      _tmp = true;
    } else {
      const _p = _M0FP37Hosi1216syasou3dev11read__bytes(path);
      _tmp = !$bytes_equal(_p, bytes);
    }
    if (_tmp) {
      _M0FP37Hosi1216syasou3dev4fail(`Generated ${path} is stale; run npm run build:moonbit`);
      return;
    } else {
      return;
    }
  } else {
    let _tmp;
    if (!_M0FP37Hosi1216syasou3dev6exists(path)) {
      _tmp = true;
    } else {
      const _p = _M0FP37Hosi1216syasou3dev11read__bytes(path);
      _tmp = !$bytes_equal(_p, bytes);
    }
    if (_tmp) {
      _M0FP37Hosi1216syasou3dev5mkdir(_M0FP37Hosi1216syasou3dev7dirname(path));
      _M0FP37Hosi1216syasou3dev12write__bytes(path, bytes);
      return;
    } else {
      return;
    }
  }
}
function _M0FP37Hosi1216syasou3dev14source__digest() {
  const _p = _M0FP37Hosi1216syasou3dev4walk("moonbit");
  const _p$2 = [];
  const _p$3 = _p.length;
  let _tmp = 0;
  while (true) {
    const _p$4 = _tmp;
    if (_p$4 < _p$3) {
      const _p$5 = _p[_p$4];
      if (_M0MPC16string6String11has__suffix(_p$5, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev14source__digestN7_2abindS299, 0, _M0FP37Hosi1216syasou3dev14source__digestN7_2abindS299.length)) || _M0MPC16string6String11has__suffix(_p$5, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev14source__digestN7_2abindS300, 0, _M0FP37Hosi1216syasou3dev14source__digestN7_2abindS300.length))) {
        _M0MPC15array5Array4pushGsE(_p$2, _p$5);
      }
      _tmp = _p$4 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const files = _p$2;
  _M0MPC15array5Array4pushGsE(files, "moon.mod");
  _M0MPC15array5Array4sortGsE(files);
  const _p$4 = new Array(files.length);
  const _p$5 = files.length;
  let _tmp$2 = 0;
  while (true) {
    const _p$6 = _tmp$2;
    if (_p$6 < _p$5) {
      const _p$7 = files[_p$6];
      _p$4[_p$6] = `${_p$7}\u0000${_M0FP37Hosi1216syasou3dev4hash(_M0FP37Hosi1216syasou3dev11read__bytes(_p$7))}\n`;
      _tmp$2 = _p$6 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP37Hosi1216syasou3dev10text__hash(_M0MPC15array5Array4joinGsE(_p$4, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev14source__digestN7_2abindS298, 0, _M0FP37Hosi1216syasou3dev14source__digestN7_2abindS298.length)));
}
function _M0FP37Hosi1216syasou3dev5build(check) {
  _M0FP37Hosi1216syasou3dev15check__compiler();
  const operations = _M0FP37Hosi1216syasou3dev13generate__ffi();
  _M0FP37Hosi1216syasou3dev4moon(["fmt"]);
  _M0FP37Hosi1216syasou3dev4moon(["build", "--target", "wasm-gc", "--release"]);
  _M0FP37Hosi1216syasou3dev4moon(["build", "--target", "js", "--release"]);
  const _p = new Array(_M0FP37Hosi1216syasou3dev13js__artifacts.length);
  const _p$2 = _M0FP37Hosi1216syasou3dev13js__artifacts.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = _M0FP37Hosi1216syasou3dev13js__artifacts[_p$3];
      _p[_p$3] = { _0: _p$4._0, _1: _M0FP37Hosi1216syasou3dev11read__bytes(`_build/js/release/build/${_p$4._1}`) };
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const outputs = _p;
  const wasm = _M0FP37Hosi1216syasou3dev11read__bytes("_build/wasm-gc/release/build/wasm/wasm.wasm");
  const host = `// Generated browser API imports; game and rendering logic execute in Wasm.\n${_M0FP37Hosi1216syasou3dev15generated__host(wasm, operations)}export function getImports() { return imports }\n`;
  _M0MPC15array5Array4pushGsE(outputs, { _0: `${_M0FP37Hosi1216syasou3dev11output__dir}app.wasm`, _1: wasm });
  _M0MPC15array5Array4pushGsE(outputs, { _0: `${_M0FP37Hosi1216syasou3dev11output__dir}browser-host.js`, _1: _M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(host, 0, host.length), false) });
  _M0FP37Hosi1216syasou3dev11write__text(`${_M0FP37Hosi1216syasou3dev5buildN9test__dirS7}browser-host.mjs`, _M0FP37Hosi1216syasou3dev15generated__host(_M0FP37Hosi1216syasou3dev11read__bytes(`${_M0FP37Hosi1216syasou3dev5buildN9test__dirS7}wasm_contract.wasm`), operations));
  const hashes = _M0FP37Hosi1216syasou7interop11new__object();
  const _bind = outputs.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind) {
      const _foreach_element = outputs[_];
      const _path = _foreach_element._0;
      const _bytes = _foreach_element._1;
      _M0MP37Hosi1216syasou7interop3Any5__set(hashes, _path, _M0FP37Hosi1216syasou7interop3anyGsE(_M0FP37Hosi1216syasou3dev4hash(_bytes)));
      _M0FP37Hosi1216syasou3dev6output(_path, _bytes, check);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const manifest = _M0FP37Hosi1216syasou7interop11new__object();
  _M0MP37Hosi1216syasou7interop3Any5__set(manifest, "compiler", _M0FP37Hosi1216syasou7interop3anyGsE(_M0FP37Hosi1216syasou3dev17compiler__version));
  _M0MP37Hosi1216syasou7interop3Any5__set(manifest, "source", _M0FP37Hosi1216syasou7interop3anyGsE(_M0FP37Hosi1216syasou3dev14source__digest()));
  _M0MP37Hosi1216syasou7interop3Any5__set(manifest, "artifacts", hashes);
  const _tmp$3 = `${_M0FP37Hosi1216syasou3dev11output__dir}build.json`;
  const _bind$2 = `${_M0FP37Hosi1216syasou3dev12json__pretty(manifest)}\n`;
  _M0FP37Hosi1216syasou3dev6output(_tmp$3, _M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length), false), check);
  const boot_code = _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(_M0FP37Hosi1216syasou3dev4read(`${_M0FP37Hosi1216syasou3dev11output__dir}boot-guard.js`), undefined));
  const _bind$3 = _M0FP37Hosi1216syasou3dev12embed__guard(_M0FP37Hosi1216syasou3dev4read("index.html"), boot_code);
  _M0FP37Hosi1216syasou3dev6output("index.html", _M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length), false), check);
  _M0FPB7printlnGsE(check ? "MoonBit artifacts reproduce exactly" : "Generated MoonBit application, browser bindings and development CLI");
}
function _M0FP37Hosi1216syasou3dev15artifact__names() {
  const _p = new Array(_M0FP37Hosi1216syasou3dev13js__artifacts.length);
  const _p$2 = _M0FP37Hosi1216syasou3dev13js__artifacts.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = _M0FP37Hosi1216syasou3dev13js__artifacts[_p$3];
      _p[_p$3] = _p$4._0;
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const names = _p;
  _M0MPC15array5Array4pushGsE(names, `${_M0FP37Hosi1216syasou3dev11output__dir}app.wasm`);
  _M0MPC15array5Array4pushGsE(names, `${_M0FP37Hosi1216syasou3dev11output__dir}browser-host.js`);
  return names;
}
function _M0FP37Hosi1216syasou3dev16check__artifacts() {
  const manifest = _M0FP37Hosi1216syasou7interop11json__parse(_M0FP37Hosi1216syasou3dev4read(`${_M0FP37Hosi1216syasou3dev11output__dir}build.json`));
  const _p = _M0MP37Hosi1216syasou7interop3Any10to__string(_M0MP37Hosi1216syasou7interop3Any5__get(manifest, "source"));
  const _p$2 = _M0FP37Hosi1216syasou3dev14source__digest();
  if (!(_p === _p$2)) {
    _M0FP37Hosi1216syasou3dev4fail("MoonBit source changed. Run npm run build:moonbit and commit the generated artifacts.");
  }
  const _bind = _M0FP37Hosi1216syasou3dev15artifact__names();
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const path = _bind[_];
      const _p$3 = _M0MP37Hosi1216syasou7interop3Any10to__string(_M0MP37Hosi1216syasou7interop3Any5__get(_M0MP37Hosi1216syasou7interop3Any5__get(manifest, "artifacts"), path));
      const _p$4 = _M0FP37Hosi1216syasou3dev4hash(_M0FP37Hosi1216syasou3dev11read__bytes(path));
      if (!(_p$3 === _p$4)) {
        _M0FP37Hosi1216syasou3dev4fail(`Generated ${path} changed. Run npm run build:moonbit.`);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const boot_code = _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(_M0FP37Hosi1216syasou3dev4read(`${_M0FP37Hosi1216syasou3dev11output__dir}boot-guard.js`), undefined));
  const _tmp$2 = _M0FP37Hosi1216syasou3dev4read("index.html");
  const _bind$3 = `<script>${boot_code}</script>`;
  if (!_M0MPC16string6String8contains(_tmp$2, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))) {
    _M0FP37Hosi1216syasou3dev4fail("Generated HTML boot guard changed. Run npm run build:moonbit.");
    return;
  } else {
    return;
  }
}
function _M0FP37Hosi1216syasou3dev12source__text(directory) {
  const _p = _M0FP37Hosi1216syasou3dev4walk(directory);
  const _p$2 = [];
  const _p$3 = _p.length;
  let _tmp = 0;
  while (true) {
    const _p$4 = _tmp;
    if (_p$4 < _p$3) {
      const _p$5 = _p[_p$4];
      if (_M0MPC16string6String11has__suffix(_p$5, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev12source__textN7_2abindS318, 0, _M0FP37Hosi1216syasou3dev12source__textN7_2abindS318.length)) || _M0MPC16string6String11has__suffix(_p$5, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev12source__textN7_2abindS319, 0, _M0FP37Hosi1216syasou3dev12source__textN7_2abindS319.length))) {
        _M0MPC15array5Array4pushGsE(_p$2, _p$5);
      }
      _tmp = _p$4 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _p$4 = _p$2;
  const _p$5 = new Array(_p$4.length);
  const _p$6 = _p$4.length;
  let _tmp$2 = 0;
  while (true) {
    const _p$7 = _tmp$2;
    if (_p$7 < _p$6) {
      const _p$8 = _p$4[_p$7];
      _p$5[_p$7] = _M0FP37Hosi1216syasou3dev4read(_p$8);
      _tmp$2 = _p$7 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPC15array5Array4joinGsE(_p$5, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev12source__textN7_2abindS320, 0, _M0FP37Hosi1216syasou3dev12source__textN7_2abindS320.length));
}
function _M0FP37Hosi1216syasou3dev10subprocess(command, args) {
  const options = _M0FP37Hosi1216syasou7interop11new__object();
  _M0MP37Hosi1216syasou7interop3Any5__set(options, "stdio", _M0FP37Hosi1216syasou7interop3anyGsE("inherit"));
  _M0FP37Hosi1216syasou3dev3run(command, args, options);
}
function _M0FP37Hosi1216syasou3dev5fonts() {
  const directory = _M0FP37Hosi1216syasou3dev20temporary__directory(`${_M0FP37Hosi1216syasou3dev6tmpdir()}/syasou-fonts-`);
  _M0FP37Hosi1216syasou3dev5mkdir(_M0FP37Hosi1216syasou3dev5fontsN11destinationS111);
  const result = _M0FP37Hosi1216syasou7interop8ffi__try(() => {
    const text_file = `${directory}/characters.txt`;
    _M0FP37Hosi1216syasou3dev11write__text(text_file, `${_M0FP37Hosi1216syasou3dev12source__text("src")}\n${_M0FP37Hosi1216syasou3dev12source__text("moonbit")}`);
    const _bind = [400, 500];
    const _bind$2 = _bind.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const weight = _bind[_];
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(85);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "node_modules/@fontsource/shippori-mincho/files/shippori-mincho-japanese-");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, weight);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "-normal.woff2");
        const _tmp$2 = _string_builder.val;
        const _tmp$3 = `--text-file=${text_file}`;
        const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(37);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "--output-file=");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _M0FP37Hosi1216syasou3dev5fontsN11destinationS111);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "/shippori-mincho-");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, weight);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ".woff2");
        _M0FP37Hosi1216syasou3dev10subprocess("pyftsubset", [_tmp$2, _tmp$3, _string_builder$2.val, "--flavor=woff2", "--layout-features=*", "--name-IDs=*", "--name-legacy", "--name-languages=*"]);
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0FP37Hosi1216syasou3dev10subprocess("pyftsubset", ["node_modules/@fontsource/shippori-mincho/files/shippori-mincho-japanese-500-normal.woff2", "--text=車窓", `--output-file=${_M0FP37Hosi1216syasou3dev5fontsN11destinationS111}/syasou-title.woff2`, "--flavor=woff2", "--layout-features=*"]);
    _M0FP37Hosi1216syasou3dev10copy__file("node_modules/@fontsource/shippori-mincho/LICENSE", `${_M0FP37Hosi1216syasou3dev5fontsN11destinationS111}/Shippori-Mincho-LICENSE.txt`);
    return _M0FP37Hosi1216syasou7interop4null();
  });
  _M0FP37Hosi1216syasou3dev6remove(directory);
  if (!_M0MP37Hosi1216syasou7interop3Any4castGbE(_M0MP37Hosi1216syasou7interop3Any5__get(result, "ok"))) {
    _M0FP37Hosi1216syasou3dev4fail(_M0MP37Hosi1216syasou7interop3Any10to__string(_M0MP37Hosi1216syasou7interop3Any5__get(result, "value")));
  }
  _M0FPB7printlnGsE("Prepared local Japanese UI fonts");
}
function _M0FP37Hosi1216syasou3dev11big__endian(value) {
  const _p = value >>> 24 | 0;
  const _tmp = _p & 255;
  const _p$2 = value >>> 16 | 0;
  const _tmp$2 = _p$2 & 255;
  const _p$3 = value >>> 8 | 0;
  const _bind = new Uint8Array([_tmp, _tmp$2, _p$3 & 255, value & 255]);
  return _M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(_bind, 0, 4));
}
function _M0FP37Hosi1216syasou3dev5crc32(data) {
  let crc = -1;
  const _bind = data.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const byte = data[_];
      crc = crc ^ byte;
      let _tmp$2 = 0;
      while (true) {
        const _$2 = _tmp$2;
        if (_$2 < 8) {
          crc = crc >>> 1 ^ -306674912 & ((0 >>> 0) - ((crc & 1) >>> 0) | 0);
          _tmp$2 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return crc ^ -1;
}
function _M0FP37Hosi1216syasou3dev10png__chunk(name, data) {
  const payload = _M0IPC15bytes5BytesPB3Add3add(_M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(name, 0, name.length), false), data);
  return _M0IPC15bytes5BytesPB3Add3add(_M0IPC15bytes5BytesPB3Add3add(_M0FP37Hosi1216syasou3dev11big__endian(data.length), payload), _M0FP37Hosi1216syasou3dev11big__endian(_M0FP37Hosi1216syasou3dev5crc32(payload)));
}
function _M0FP37Hosi1216syasou3dev10grain__pngN6randomS120(state) {
  state.val = state.val ^ state.val << 13;
  state.val = state.val ^ (state.val >>> 17 | 0);
  state.val = state.val ^ state.val << 5;
  return $f64_convert_i32_u(state.val) / 4294967296;
}
function _M0FP37Hosi1216syasou3dev10grain__png() {
  const pixels = _M0MPC15array5Array4makeGyE(1049088, 0);
  const state = new _M0TPB8MutLocalGjE(927163);
  let _tmp = 0;
  while (true) {
    const y = _tmp;
    if (y < 512) {
      let _tmp$2 = 0;
      while (true) {
        const x = _tmp$2;
        if (x < 512) {
          const offset = ((Math.imul(y, 2049) | 0) + 1 | 0) + (Math.imul(x, 4) | 0) | 0;
          const n = _M0FP37Hosi1216syasou3dev10grain__pngN6randomS120(state);
          const alpha = n < 0.024 ? 195 : n < 0.22 ? 30 + _M0FP37Hosi1216syasou3dev10grain__pngN6randomS120(state) * 105 : _M0FP37Hosi1216syasou3dev10grain__pngN6randomS120(state) * 12;
          _M0MPC15array5Array3setGyE(pixels, offset + 3 | 0, _M0MPC16double6Double7to__int(alpha) & 255);
          _tmp$2 = x + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = y + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const header = _M0IPC15bytes5BytesPB3Add3add(_M0IPC15bytes5BytesPB3Add3add(_M0FP37Hosi1216syasou3dev11big__endian(512), _M0FP37Hosi1216syasou3dev11big__endian(512)), $bytes_literal$1);
  return _M0IPC15bytes5BytesPB3Add3add(_M0IPC15bytes5BytesPB3Add3add(_M0IPC15bytes5BytesPB3Add3add($bytes_literal$2, _M0FP37Hosi1216syasou3dev10png__chunk("IHDR", header)), _M0FP37Hosi1216syasou3dev10png__chunk("IDAT", _M0FP37Hosi1216syasou3dev7deflate(_M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(pixels, 0, pixels.length))))), _M0FP37Hosi1216syasou3dev10png__chunk("IEND", $bytes_literal$0));
}
function _M0FP37Hosi1216syasou3dev5iconsN16_2aasync__driverS383(_env, _state) {
  const tuple = _env._2;
  const tuple$2 = _env._1;
  const tuple$3 = _env._0;
  let _tmp = _state;
  _L: while (true) {
    const _state$2 = _tmp;
    switch (_state$2.$tag) {
      case 0: {
        const _State_0 = _state$2;
        const _err = _State_0._1;
        return new _M0DTPC16result6ResultGOuRPC15error5ErrorE3Err(_err);
      }
      case 1: {
        const _$42$defer_try$47$349 = _state$2;
        const _err_cont = _$42$defer_try$47$349._3;
        const _cont = _$42$defer_try$47$349._2;
        const browser = _$42$defer_try$47$349._1;
        const _err$2 = _$42$defer_try$47$349._0;
        const _bind = _M0MP37Hosi1216syasou7interop7Promise4waitGuE(_M0MP37Hosi1216syasou3dev7Browser5close(browser), (_cont_param) => {
          let _err$3;
          _L$2: {
            const _bind$2 = _M0FP37Hosi1216syasou3dev5iconsN16_2aasync__driverS383(_env, new _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__0(_cont_param, _err$2));
            let _bind$3;
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _bind$3 = _ok._0;
            } else {
              const _err$4 = _bind$2;
              _err$3 = _err$4._0;
              break _L$2;
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
          _err_cont(_err$3);
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
          _tmp = new _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__0(_payload, _err$2);
          continue _L;
        }
      }
      case 2: {
        return new _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(_M0FPB7printlnGsE("Rendered app icons from the existing train mark"));
      }
      case 3: {
        const _State_3 = _state$2;
        const _err_cont$2 = _State_3._3;
        const _cont$2 = _State_3._2;
        const browser$2 = _State_3._1;
        let _err$3;
        _L$2: {
          const _bind$3 = _M0MP37Hosi1216syasou7interop7Promise4waitGuE(_M0MP37Hosi1216syasou3dev7Browser5close(browser$2), (_cont_param) => {
            let _err$4;
            _L$3: {
              const _bind$4 = _M0FP37Hosi1216syasou3dev5iconsN16_2aasync__driverS383(_env, new _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__2(_cont_param));
              let _bind$5;
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _bind$5 = _ok._0;
              } else {
                const _err$5 = _bind$4;
                _err$4 = _err$5._0;
                break _L$3;
              }
              if (_bind$5 === -1) {
                return;
              } else {
                const _Some = _bind$5;
                const _payload = _Some;
                _cont$2(_payload);
                return;
              }
            }
            _err_cont$2(_err$4);
          }, (_cont_param) => {
            let _err$4;
            _L$3: {
              const _bind$4 = _M0FP37Hosi1216syasou3dev5iconsN16_2aasync__driverS383(_env, new _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State19_2adefer__try_2f349(_cont_param, browser$2, _cont$2, _err_cont$2));
              let _bind$5;
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _bind$5 = _ok._0;
              } else {
                const _err$5 = _bind$4;
                _err$4 = _err$5._0;
                break _L$3;
              }
              if (_bind$5 === -1) {
                return;
              } else {
                const _Some = _bind$5;
                const _payload = _Some;
                _cont$2(_payload);
                return;
              }
            }
            _err_cont$2(_err$4);
          });
          let _bind$4;
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            _bind$4 = _ok._0;
          } else {
            const _err$4 = _bind$3;
            _err$3 = _err$4._0;
            break _L$2;
          }
          if (_bind$4 === -1) {
            return new _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(-1);
          } else {
            const _Some = _bind$4;
            const _payload = _Some;
            _tmp = new _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__2(_payload);
            continue _L;
          }
        }
        _tmp = new _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State19_2adefer__try_2f349(_err$3, browser$2, _cont$2, _err_cont$2);
        continue _L;
      }
      case 4: {
        const _$42$for_4 = _state$2;
        const _err_cont$3 = _$42$for_4._7;
        const _cont$3 = _$42$for_4._6;
        const _bind$3 = _$42$for_4._5;
        const _bind$4 = _$42$for_4._4;
        const page = _$42$for_4._3;
        const browser$3 = _$42$for_4._2;
        const svg = _$42$for_4._1;
        const _ = _$42$for_4._0;
        if (_ < _bind$3) {
          const _foreach_element = _bind$4[_];
          const _size = _foreach_element._0;
          const _filename = _foreach_element._1;
          let _err$4;
          _L$3: {
            const _bind$5 = _M0MP37Hosi1216syasou7interop7Promise4waitGuE(_M0MP37Hosi1216syasou3dev4Page8viewport(page, _size), (_cont_param) => {
              let _err$5;
              _L$4: {
                const _bind$6 = _M0FP37Hosi1216syasou3dev5iconsN16_2aasync__driverS383(_env, new _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__7(_cont_param, svg, browser$3, page, _filename, _, _bind$4, _bind$3, _cont$3, _err_cont$3));
                let _bind$7;
                if (_bind$6.$tag === 1) {
                  const _ok = _bind$6;
                  _bind$7 = _ok._0;
                } else {
                  const _err$6 = _bind$6;
                  _err$5 = _err$6._0;
                  break _L$4;
                }
                if (_bind$7 === -1) {
                  return;
                } else {
                  const _Some = _bind$7;
                  const _payload = _Some;
                  _cont$3(_payload);
                  return;
                }
              }
              _err_cont$3(_err$5);
            }, (_cont_param) => {
              let _err$5;
              _L$4: {
                const _bind$6 = _M0FP37Hosi1216syasou3dev5iconsN16_2aasync__driverS383(_env, new _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State19_2adefer__try_2f349(_cont_param, browser$3, _cont$3, _err_cont$3));
                let _bind$7;
                if (_bind$6.$tag === 1) {
                  const _ok = _bind$6;
                  _bind$7 = _ok._0;
                } else {
                  const _err$6 = _bind$6;
                  _err$5 = _err$6._0;
                  break _L$4;
                }
                if (_bind$7 === -1) {
                  return;
                } else {
                  const _Some = _bind$7;
                  const _payload = _Some;
                  _cont$3(_payload);
                  return;
                }
              }
              _err_cont$3(_err$5);
            });
            let _bind$6;
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              _bind$6 = _ok._0;
            } else {
              const _err$5 = _bind$5;
              _err$4 = _err$5._0;
              break _L$3;
            }
            if (_bind$6 === -1) {
              return new _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(-1);
            } else {
              const _Some = _bind$6;
              const _payload = _Some;
              _tmp = new _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__7(_payload, svg, browser$3, page, _filename, _, _bind$4, _bind$3, _cont$3, _err_cont$3);
              continue _L;
            }
          }
          _tmp = new _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State19_2adefer__try_2f349(_err$4, browser$3, _cont$3, _err_cont$3);
          continue _L;
        } else {
          _tmp = new _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__3(undefined, browser$3, _cont$3, _err_cont$3);
          continue _L;
        }
      }
      case 5: {
        const _State_5 = _state$2;
        const _err_cont$4 = _State_5._8;
        const _cont$4 = _State_5._7;
        const _bind$5 = _State_5._6;
        const _bind$6 = _State_5._5;
        const _$2 = _State_5._4;
        const page$2 = _State_5._3;
        const browser$4 = _State_5._2;
        const svg$2 = _State_5._1;
        _tmp = new _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State9_2afor__4(_$2 + 1 | 0, svg$2, browser$4, page$2, _bind$6, _bind$5, _cont$4, _err_cont$4);
        continue _L;
      }
      case 6: {
        const _State_6 = _state$2;
        const _err_cont$5 = _State_6._9;
        const _cont$5 = _State_6._8;
        const _bind$7 = _State_6._7;
        const _bind$8 = _State_6._6;
        const _$3 = _State_6._5;
        const filename = _State_6._4;
        const page$3 = _State_6._3;
        const browser$5 = _State_6._2;
        const svg$3 = _State_6._1;
        let _err$4;
        _L$3: {
          const _bind$9 = _M0MP37Hosi1216syasou7interop7Promise4waitGuE(_M0MP37Hosi1216syasou3dev4Page10screenshot(page$3, `public/icons/${filename}`), (_cont_param) => {
            let _err$5;
            _L$4: {
              const _bind$10 = _M0FP37Hosi1216syasou3dev5iconsN16_2aasync__driverS383(_env, new _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__5(_cont_param, svg$3, browser$5, page$3, _$3, _bind$8, _bind$7, _cont$5, _err_cont$5));
              let _bind$11;
              if (_bind$10.$tag === 1) {
                const _ok = _bind$10;
                _bind$11 = _ok._0;
              } else {
                const _err$6 = _bind$10;
                _err$5 = _err$6._0;
                break _L$4;
              }
              if (_bind$11 === -1) {
                return;
              } else {
                const _Some = _bind$11;
                const _payload = _Some;
                _cont$5(_payload);
                return;
              }
            }
            _err_cont$5(_err$5);
          }, (_cont_param) => {
            let _err$5;
            _L$4: {
              const _bind$10 = _M0FP37Hosi1216syasou3dev5iconsN16_2aasync__driverS383(_env, new _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State19_2adefer__try_2f349(_cont_param, browser$5, _cont$5, _err_cont$5));
              let _bind$11;
              if (_bind$10.$tag === 1) {
                const _ok = _bind$10;
                _bind$11 = _ok._0;
              } else {
                const _err$6 = _bind$10;
                _err$5 = _err$6._0;
                break _L$4;
              }
              if (_bind$11 === -1) {
                return;
              } else {
                const _Some = _bind$11;
                const _payload = _Some;
                _cont$5(_payload);
                return;
              }
            }
            _err_cont$5(_err$5);
          });
          let _bind$10;
          if (_bind$9.$tag === 1) {
            const _ok = _bind$9;
            _bind$10 = _ok._0;
          } else {
            const _err$5 = _bind$9;
            _err$4 = _err$5._0;
            break _L$3;
          }
          if (_bind$10 === -1) {
            return new _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(-1);
          } else {
            const _Some = _bind$10;
            const _payload = _Some;
            _tmp = new _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__5(_payload, svg$3, browser$5, page$3, _$3, _bind$8, _bind$7, _cont$5, _err_cont$5);
            continue _L;
          }
        }
        _tmp = new _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State19_2adefer__try_2f349(_err$4, browser$5, _cont$5, _err_cont$5);
        continue _L;
      }
      case 7: {
        const _State_7 = _state$2;
        const _err_cont$6 = _State_7._9;
        const _cont$6 = _State_7._8;
        const _bind$9 = _State_7._7;
        const _bind$10 = _State_7._6;
        const _$4 = _State_7._5;
        const filename$2 = _State_7._4;
        const page$4 = _State_7._3;
        const browser$6 = _State_7._2;
        const svg$4 = _State_7._1;
        let _err$5;
        _L$4: {
          const _bind$11 = _M0MP37Hosi1216syasou7interop7Promise4waitGuE(_M0MP37Hosi1216syasou3dev4Page7content(page$4, `<html><head><style>html,body{margin:0;width:100%;height:100%;background:#e5e5e5}svg{display:block;width:100%;height:100%}svg svg{width:48px;height:48px}</style></head><body>${svg$4}</body></html>`), (_cont_param) => {
            let _err$6;
            _L$5: {
              const _bind$12 = _M0FP37Hosi1216syasou3dev5iconsN16_2aasync__driverS383(_env, new _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__6(_cont_param, svg$4, browser$6, page$4, filename$2, _$4, _bind$10, _bind$9, _cont$6, _err_cont$6));
              let _bind$13;
              if (_bind$12.$tag === 1) {
                const _ok = _bind$12;
                _bind$13 = _ok._0;
              } else {
                const _err$7 = _bind$12;
                _err$6 = _err$7._0;
                break _L$5;
              }
              if (_bind$13 === -1) {
                return;
              } else {
                const _Some = _bind$13;
                const _payload = _Some;
                _cont$6(_payload);
                return;
              }
            }
            _err_cont$6(_err$6);
          }, (_cont_param) => {
            let _err$6;
            _L$5: {
              const _bind$12 = _M0FP37Hosi1216syasou3dev5iconsN16_2aasync__driverS383(_env, new _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State19_2adefer__try_2f349(_cont_param, browser$6, _cont$6, _err_cont$6));
              let _bind$13;
              if (_bind$12.$tag === 1) {
                const _ok = _bind$12;
                _bind$13 = _ok._0;
              } else {
                const _err$7 = _bind$12;
                _err$6 = _err$7._0;
                break _L$5;
              }
              if (_bind$13 === -1) {
                return;
              } else {
                const _Some = _bind$13;
                const _payload = _Some;
                _cont$6(_payload);
                return;
              }
            }
            _err_cont$6(_err$6);
          });
          let _bind$12;
          if (_bind$11.$tag === 1) {
            const _ok = _bind$11;
            _bind$12 = _ok._0;
          } else {
            const _err$6 = _bind$11;
            _err$5 = _err$6._0;
            break _L$4;
          }
          if (_bind$12 === -1) {
            return new _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(-1);
          } else {
            const _Some = _bind$12;
            const _payload = _Some;
            _tmp = new _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__6(_payload, svg$4, browser$6, page$4, filename$2, _$4, _bind$10, _bind$9, _cont$6, _err_cont$6);
            continue _L;
          }
        }
        _tmp = new _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State19_2adefer__try_2f349(_err$5, browser$6, _cont$6, _err_cont$6);
        continue _L;
      }
      case 8: {
        const _State_8 = _state$2;
        const _err_cont$7 = _State_8._4;
        const _cont$7 = _State_8._3;
        const browser$7 = _State_8._2;
        const svg$5 = _State_8._1;
        const _cont_param = _State_8._0;
        const _bind$11 = [tuple, tuple$2, tuple$3];
        const _bind$12 = _bind$11.length;
        _tmp = new _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State9_2afor__4(0, svg$5, browser$7, _cont_param, _bind$11, _bind$12, _cont$7, _err_cont$7);
        continue _L;
      }
      case 9: {
        const _State_9 = _state$2;
        const _err_cont$8 = _State_9._3;
        const _cont$8 = _State_9._2;
        const svg$6 = _State_9._1;
        const _cont_param$2 = _State_9._0;
        let _err$6;
        _L$5: {
          const _bind$13 = _M0MP37Hosi1216syasou7interop7Promise4waitGRP37Hosi1216syasou3dev4PageE(_M0MP37Hosi1216syasou3dev7Browser9new__page(_cont_param$2), (_cont_param$3) => {
            let _err$7;
            _L$6: {
              const _bind$14 = _M0FP37Hosi1216syasou3dev5iconsN16_2aasync__driverS383(_env, new _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__8(_cont_param$3, svg$6, _cont_param$2, _cont$8, _err_cont$8));
              let _bind$15;
              if (_bind$14.$tag === 1) {
                const _ok = _bind$14;
                _bind$15 = _ok._0;
              } else {
                const _err$8 = _bind$14;
                _err$7 = _err$8._0;
                break _L$6;
              }
              if (_bind$15 === -1) {
                return;
              } else {
                const _Some = _bind$15;
                const _payload = _Some;
                _cont$8(_payload);
                return;
              }
            }
            _err_cont$8(_err$7);
          }, (_cont_param$3) => {
            let _err$7;
            _L$6: {
              const _bind$14 = _M0FP37Hosi1216syasou3dev5iconsN16_2aasync__driverS383(_env, new _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State19_2adefer__try_2f349(_cont_param$3, _cont_param$2, _cont$8, _err_cont$8));
              let _bind$15;
              if (_bind$14.$tag === 1) {
                const _ok = _bind$14;
                _bind$15 = _ok._0;
              } else {
                const _err$8 = _bind$14;
                _err$7 = _err$8._0;
                break _L$6;
              }
              if (_bind$15 === -1) {
                return;
              } else {
                const _Some = _bind$15;
                const _payload = _Some;
                _cont$8(_payload);
                return;
              }
            }
            _err_cont$8(_err$7);
          });
          let _tmp$2;
          if (_bind$13.$tag === 1) {
            const _ok = _bind$13;
            _tmp$2 = _ok._0;
          } else {
            const _err$7 = _bind$13;
            _err$6 = _err$7._0;
            break _L$5;
          }
          const _tmp$3 = _tmp$2;
          if (_tmp$3.$tag === 1) {
            const _Some = _tmp$3;
            const _payload = _Some._0;
            _tmp = new _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__8(_payload, svg$6, _cont_param$2, _cont$8, _err_cont$8);
            continue _L;
          } else {
            return new _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(-1);
          }
        }
        _tmp = new _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State19_2adefer__try_2f349(_err$6, _cont_param$2, _cont$8, _err_cont$8);
        continue _L;
      }
      default: {
        const _State_10 = _state$2;
        const _err_cont$9 = _State_10._4;
        const _cont$9 = _State_10._3;
        const options = _State_10._2;
        const svg$7 = _State_10._1;
        const _cont_param$3 = _State_10._0;
        const _bind$13 = _M0MP37Hosi1216syasou7interop7Promise4waitGRP37Hosi1216syasou3dev7BrowserE(_M0FP37Hosi1216syasou3dev15launch__browser(_cont_param$3, options), (_cont_param$4) => {
          let _err$7;
          _L$6: {
            const _bind$14 = _M0FP37Hosi1216syasou3dev5iconsN16_2aasync__driverS383(_env, new _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__9(_cont_param$4, svg$7, _cont$9, _err_cont$9));
            let _bind$15;
            if (_bind$14.$tag === 1) {
              const _ok = _bind$14;
              _bind$15 = _ok._0;
            } else {
              const _err$8 = _bind$14;
              _err$7 = _err$8._0;
              break _L$6;
            }
            if (_bind$15 === -1) {
              return;
            } else {
              const _Some = _bind$15;
              const _payload = _Some;
              _cont$9(_payload);
              return;
            }
          }
          _err_cont$9(_err$7);
        }, _err_cont$9);
        let _tmp$2;
        if (_bind$13.$tag === 1) {
          const _ok = _bind$13;
          _tmp$2 = _ok._0;
        } else {
          return _bind$13;
        }
        const _tmp$3 = _tmp$2;
        if (_tmp$3.$tag === 1) {
          const _Some = _tmp$3;
          const _payload = _Some._0;
          _tmp = new _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State8State__9(_payload, svg$7, _cont$9, _err_cont$9);
          continue _L;
        } else {
          return new _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(-1);
        }
      }
    }
  }
}
function _M0FP37Hosi1216syasou3dev5icons(_cont, _err_cont) {
  const _env = { _0: _M0FP37Hosi1216syasou3dev5iconsN5tupleS577, _1: _M0FP37Hosi1216syasou3dev5iconsN5tupleS576, _2: _M0FP37Hosi1216syasou3dev5iconsN5tupleS575 };
  const source = _M0FP37Hosi1216syasou3dev4read("public/favicon.svg");
  const mark = _M0MPC16string6String7replace(source, new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev5iconsN7_2abindS361, 0, _M0FP37Hosi1216syasou3dev5iconsN7_2abindS361.length), new _M0TPC16string10StringView(_M0FP37Hosi1216syasou3dev5iconsN7_2abindS362, 0, _M0FP37Hosi1216syasou3dev5iconsN7_2abindS362.length));
  const svg = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\"><rect width=\"64\" height=\"64\" fill=\"#e5e5e5\"/>${mark}</svg>`;
  _M0FP37Hosi1216syasou3dev5mkdir("public/icons");
  const options = _M0FP37Hosi1216syasou7interop11new__object();
  const _bind = _M0FPC13env13get__env__var("CHROMIUM_PATH");
  if (_bind === undefined) {
  } else {
    const _Some = _bind;
    const _path = _Some;
    _M0MP37Hosi1216syasou7interop3Any5__set(options, "executablePath", _M0FP37Hosi1216syasou7interop3anyGsE(_path));
  }
  const _bind$2 = _M0MP37Hosi1216syasou7interop7Promise4waitGRP37Hosi1216syasou7interop3AnyE(_M0FP37Hosi1216syasou3dev10playwright(), (_cont_param) => {
    let _err;
    _L: {
      const _bind$3 = _M0FP37Hosi1216syasou3dev5iconsN16_2aasync__driverS383(_env, new _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State9State__10(_cont_param, svg, options, _cont, _err_cont));
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
        return;
      } else {
        const _Some = _bind$4;
        const _payload = _Some;
        _cont(_payload);
        return;
      }
    }
    _err_cont(_err);
  }, _err_cont);
  let _tmp;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp = _ok._0;
  } else {
    return _bind$2;
  }
  const _tmp$2 = _tmp;
  if (_tmp$2.$tag === 1) {
    const _Some = _tmp$2;
    const _payload = _Some._0;
    return _M0FP37Hosi1216syasou3dev5iconsN16_2aasync__driverS383(_env, new _M0DTP37Hosi1216syasou3dev33_24Hosi121_2fsyasou_2fdev_2eiconsL5State9State__10(_payload, svg, options, _cont, _err_cont));
  } else {
    return new _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(-1);
  }
}
function _M0FP017____moonbit__mainN7_2acontS548(_param) {}
function _M0FP017____moonbit__mainN12_2aerr__contS549(_err) {}
function _M0FP017____moonbit__mainN16_2aasync__driverS550(_state) {
  const _$42$try$47$365 = _state;
  const _try_err = _$42$try$47$365._0;
  if (_try_err.$tag === 1) {
    return new _M0DTPC16result6ResultGOuRPB9CancelledE3Err(_try_err);
  } else {
    return new _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(_M0FP37Hosi1216syasou3dev4fail(_M0FP15Error10to__string(_try_err)));
  }
}
(() => {
  const args = _M0FPC13env4args();
  if (args.length >= 2 && _M0MP37Hosi1216syasou3dev7FileUrl4href(_M0FP37Hosi1216syasou3dev9file__url(_M0MPC15array5Array2atGsE(args, 1))) === _M0FP37Hosi1216syasou3dev11module__url()) {
    let command;
    _L: {
      const _bind = _M0MPC16option6Option10unwrap__orGsE(_M0MPC15array5Array3getGsE(args, 2), "help");
      switch (_bind) {
        case "moon": {
          _M0FP37Hosi1216syasou3dev15check__compiler();
          _M0FP37Hosi1216syasou3dev4moon(_M0MPC15array9ArrayView9to__ownedGsE(_M0MPC15array5Array21clamped__view_2einnerGsE(args, 3, undefined)));
          return;
        }
        case "check": {
          _M0FP37Hosi1216syasou3dev16check__artifacts();
          _M0FPB7printlnGsE("MoonBit source and committed artifacts match (no compiler required)");
          return;
        }
        case "build": {
          command = _bind;
          break _L;
        }
        case "check-generated": {
          command = _bind;
          break _L;
        }
        case "generate": {
          _M0FP37Hosi1216syasou3dev5build(false);
          return;
        }
        case "verify": {
          _M0FP37Hosi1216syasou3dev5build(true);
          return;
        }
        case "grain": {
          _M0FP37Hosi1216syasou3dev12write__bytes("public/paper-grain.png", _M0FP37Hosi1216syasou3dev10grain__png());
          _M0FPB7printlnGsE("Generated paper grain");
          return;
        }
        case "fonts": {
          _M0FP37Hosi1216syasou3dev5fonts();
          return;
        }
        case "icons": {
          let _cancel_err;
          _L$2: {
            let _bind$2;
            let _err;
            _L$3: {
              _L$4: {
                const _bind$3 = _M0FP37Hosi1216syasou3dev5icons(_M0FP017____moonbit__mainN7_2acontS548, (_cont_param) => {
                  let _err$2;
                  _L$5: {
                    const _bind$4 = _M0FP017____moonbit__mainN16_2aasync__driverS550(new _M0DTP37Hosi1216syasou3dev65_24Hosi121_2fsyasou_2fdev_2e_2ainit_2e_2aarm_2f372_2elambda_2f547L5State12_2atry_2f365(_cont_param));
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
                      _M0FP017____moonbit__mainN7_2acontS548(_payload);
                      return;
                    }
                  }
                  _M0FP017____moonbit__mainN12_2aerr__contS549(_err$2);
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
                  _bind$2 = new _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(_payload);
                }
                break _L$3;
              }
              _bind$2 = _M0FP017____moonbit__mainN16_2aasync__driverS550(new _M0DTP37Hosi1216syasou3dev65_24Hosi121_2fsyasou_2fdev_2e_2ainit_2e_2aarm_2f372_2elambda_2f547L5State12_2atry_2f365(_err));
            }
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _ok._0;
            } else {
              const _err$2 = _bind$2;
              _cancel_err = _err$2._0;
              break _L$2;
            }
            return;
          }
          return;
        }
        case "help": {
          _M0FPB7printlnGsE("MoonBit development CLI: moon <args> | build | check | check-generated | fonts | icons | grain");
          return;
        }
        default: {
          _M0FP37Hosi1216syasou3dev4fail(`Unknown command: ${_bind}`);
          return;
        }
      }
    }
    _M0FP37Hosi1216syasou3dev15check__compiler();
    _M0FP37Hosi1216syasou3dev4moon(["build", "moonbit/dev", "--target", "js", "--release"]);
    _M0FP37Hosi1216syasou3dev10subprocess(_M0FP37Hosi1216syasou3dev16node__executable(), [_M0FP37Hosi1216syasou3dev10cli__build, command === "build" ? "generate" : "verify"]);
    return;
  } else {
    return;
  }
})();
export { _M0FP37Hosi1216syasou3dev16check__artifacts as checkArtifacts }
