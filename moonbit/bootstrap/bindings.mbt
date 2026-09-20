///|
#external
type WeakMap

///|
extern "js" fn WeakMap::WeakMap() -> WeakMap =
  #| () => new WeakMap()

///|
extern "js" fn WeakMap::get(self : WeakMap, key : @js.Any) -> @js.Any =
  #| (map, key) => map.get(key)

///|
extern "js" fn WeakMap::set(
  self : WeakMap,
  key : @js.Any,
  value : @js.Any,
) -> Unit =
  #| (map, key, value) => { map.set(key, value) }

///|
impl @js.ToJs for WeakMap with fn to_js(self) -> @js.Any = "%identity"

///|
impl @js.FromJs for WeakMap with fn from_js(value : @js.Any) -> WeakMap = "%identity"

///|
extern "js" fn bind_capture(callback : @js.Any, capture : @js.Any) -> @js.Any =
  #| (callback, capture) => callback.bind(null, capture)

///|
extern "js" fn wasm_url() -> String =
  #| () => new URL('./app.wasm', import.meta.url).href

///|
#module("#syasou/browser-host")
extern "js" fn browser_imports() -> @js.Any = "getImports"

///|
extern "js" fn fetch(url : String) -> @js.Promise[@js.Any] =
  #| url => fetch(url)

///|
extern "js" fn instantiate(
  response : @js.Any,
  imports : @js.Any,
  options : @js.Any,
) -> @js.Promise[@js.Any] =
  #| (response, imports, options) => WebAssembly.instantiateStreaming(response, imports, options)

///|
extern "js" fn root() -> @js.Any =
  #| () => document.getElementById('root')

///|
extern "js" fn restore(root : @js.Any, fallback : @js.Any) -> Unit =
  #| (root, fallback) => { root.replaceChildren(fallback) }

///|
extern "js" fn show_boot_error() -> Unit =
  #| () => { document.documentElement.dataset.bootError = 'true' }
