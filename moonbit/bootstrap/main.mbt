///|
suberror DownloadFailed {
  DownloadFailed(Int)
}

///|
// A weak cache preserves event-listener identity without retaining a Wasm
// closure or its captured object beyond their browser lifetime.
fn make_closure(
  cache : WeakMap,
  callback : @js.Any,
  capture : @js.Any,
) -> @js.Any {
  let entry = cache.get(callback)
  let captures : WeakMap = if @js.is_undefined(entry) {
    let map = WeakMap()
    cache.set(callback, @js.any(map))
    map
  } else {
    entry.cast()
  }
  let existing = captures.get(capture)
  if !@js.is_undefined(existing) {
    existing
  } else {
    let bound = bind_capture(callback, capture)
    captures.set(capture, bound)
    bound
  }
}

///|
async fn start() -> Unit {
  let response = fetch(wasm_url()).wait()
  if !(response._get("ok").cast() : Bool) {
    raise DownloadFailed(response._get("status").cast())
  }
  let cache = WeakMap()
  let ffi = @js.new_object()
  ffi._set(
    "make_closure",
    @js.from_fn2((callback, capture) => make_closure(cache, callback, capture)),
  )
  let imports = @js.new_object()
  imports._set("syasou", browser_imports())
  imports._set("moonbit:ffi", ffi)
  let options = @js.new_object()
  options._set("builtins", @js.any(["js-string"]))
  options._set("importedStringConstants", @js.any("_"))
  let loading : @js.Promise[@js.Any] = @js.try_sync(() => {
    @js.any(instantiate(response, imports, options))
  }).cast()
  let loaded = loading.wait()
  let started : @js.Promise[Unit] = @js.try_sync(() => {
    loaded._get("instance")._get("exports")._call("start", [])
  }).cast()
  started.wait()
}

///|
fn main {
  let container = root()
  let fallback = container._get("firstElementChild")
  @js.run_async(async fn() noraise {
    start() catch {
      _ => {
        restore(container, fallback)
        show_boot_error()
      }
    }
  })
}
