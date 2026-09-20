///|
// Missing DOM overloads/properties. Keep FFI declarations separate from lifecycle
// code; these are candidates for the existing DOM binding package.
#cfg(target="js")
extern "js" fn hidden() -> Bool =
  #| () => document.hidden

///|
#cfg(target="js")
extern "js" fn bounds(canvas : @dom.HTMLCanvasElement) -> @dom.DOMRect =
  #| canvas => canvas.getBoundingClientRect()

///|
#cfg(target="js")
extern "js" fn set_opacity(
  canvas : @dom.HTMLCanvasElement,
  value : String,
) -> Unit =
  #| (canvas, value) => { canvas.style.opacity = value }

///|
fn[T] catch_js(f : () -> T) -> T? {
  Some(@js.uncapsule(@js.try_sync(fn() { @js.capsule(f()) }))) catch {
    _ => None
  }
}

///|
pub fn read_storage(
  key : String,
  fallback : @js.Any,
  validate : (@js.Any) -> Bool,
) -> @js.Any {
  // Do not capture a nullable externref in a Wasm closure: the pinned
  // compiler narrows captured references to non-null. Keep fallback outside.
  let result = @js.try_sync(fn() {
    let source = @storage.localStorage().getItem(key).unwrap_or("null")
    let value = @js.json_parse(if source == "" { "null" } else { source })
    if validate(value) {
      let found = @js.new_object()
      found._set("value", value)
      found
    } else {
      @js.undefined()
    }
  }) catch {
    _ => @js.undefined()
  }
  if @js.is_undefined(result) {
    fallback
  } else {
    result._get("value")
  }
}

///|
pub fn write_storage(key : String, value : @js.Any) -> Bool {
  let holder = @js.new_object()
  holder._set("value", value)
  let result = @js.try_sync(fn() {
    @storage.localStorage().setItem(
      key,
      @js.json_stringify(holder._get("value")),
    )
    @js.any(true)
  }) catch {
    _ => @js.any(false)
  }
  result.cast()
}
