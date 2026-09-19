///|
// Missing DOM overloads/properties. Keep FFI declarations separate from lifecycle
// code; these are candidates for the existing DOM binding package.
extern "js" fn hidden() -> Bool =
  #| () => document.hidden

///|
extern "js" fn bounds(canvas : @dom.HTMLCanvasElement) -> @dom.DOMRect =
  #| canvas => canvas.getBoundingClientRect()

///|
extern "js" fn set_opacity(
  canvas : @dom.HTMLCanvasElement,
  value : String,
) -> Unit =
  #| (canvas, value) => { canvas.style.opacity = value }

///|
fn[T] catch_js(f : () -> T) -> T? {
  Some(@js.try_sync(fn() { @js.any(f()) }).cast()) catch {
    _ => None
  }
}

///|
pub fn read_storage(
  key : String,
  fallback : @js.Any,
  validate : (@js.Any) -> Bool,
) -> @js.Any {
  @js.try_sync(fn() {
    let source = @storage.localStorage().getItem(key).unwrap_or("null")
    let value = @js.json_parse(if source == "" { "null" } else { source })
    if validate(value) {
      value
    } else {
      fallback
    }
  }) catch {
    _ => fallback
  }
}

///|
pub fn write_storage(key : String, value : @js.Any) -> Bool {
  let result = @js.try_sync(fn() {
    @storage.localStorage().setItem(key, @js.json_stringify(value))
    @js.any(true)
  }) catch {
    _ => @js.any(false)
  }
  result.cast()
}
