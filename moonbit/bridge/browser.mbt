///|
pub fn read_storage(
  key : String,
  fallback : @js.Any,
  validate : (@js.Any) -> Bool,
) -> @js.Any {
  @browser.read_storage(key, fallback, validate)
}

///|
pub fn write_storage(key : String, value : @js.Any) -> Bool {
  @browser.write_storage(key, value)
}

///|
pub fn create_sound() -> @js.Any {
  @js.capsule(@browser.create_sound())
}

///|
pub fn enable_sound(value : @js.Any) -> @js.Promise[Unit] {
  let sound : @browser.Sound = @js.uncapsule(value)
  sound.enable()
}

///|
pub fn disable_sound(value : @js.Any) -> @js.Promise[Unit] {
  let sound : @browser.Sound = @js.uncapsule(value)
  sound.disable()
}

///|
pub fn update_sound(
  value : @js.Any,
  preferences : @js.Any,
  moving : Bool,
  open : Bool,
) -> Unit {
  let sound : @browser.Sound = @js.uncapsule(value)
  let mix = @domain.sound_mix(
    preferences._get("speed").cast(),
    preferences._get("trainVolume").cast(),
    preferences._get("rainVolume").cast(),
    preferences._get("windVolume").cast(),
    moving,
    open,
  )
  sound.update(mix, moving)
}

///|
pub fn dispose_sound(value : @js.Any) -> Unit {
  let sound : @browser.Sound = @js.uncapsule(value)
  sound.dispose()
}

///|
pub fn create_window_renderer(
  canvas : @js.Any,
  on_unavailable : @js.Any,
) -> @js.Any {
  let callback = fn() {
    if !@js.is_nullish(on_unavailable) {
      on_unavailable._invoke([]) |> ignore
    }
  }
  match @browser.create_renderer(canvas.cast(), callback) {
    None => @js.null()
    Some(renderer) => {
      let out = @js.new_object()
      out._set(
        "update",
        @js.from_fn1(fn(value : @js.Any) {
          renderer.update({
            scene: value._get("scene").cast(),
            speed: value._get("speed").cast(),
            moving: value._get("moving").cast(),
            travelling: value._get("travelling").cast(),
          })
        }),
      )
      out._set("dispose", @js.from_fn0(fn() { renderer.dispose() }))
      out
    }
  }
}
