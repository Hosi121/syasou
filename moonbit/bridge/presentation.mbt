///|
pub fn format_time(milliseconds : Double) -> String {
  @domain.format_time(milliseconds)
}

///|
// URLSearchParams has methods upstream but no constructor binding.
#cfg(target="js")
extern "js" fn search_params(search : String) -> @url.URLSearchParams =
  #| search => new URLSearchParams(search)

///|
pub fn is_demo_search(search : String) -> Bool {
  search_params(search).get("demo") == Some("1")
}

///|
pub fn profile_storage_key(key : String, demo : Bool) -> String {
  @domain.profile_storage_key(key, demo)
}

///|
pub fn default_preferences() -> @js.Any {
  let out = @js.new_object()
  out._set("focusMinutes", @js.any(25.0))
  out._set("restMinutes", @js.any(5.0))
  out._set("speed", @js.any("local"))
  out._set("scene", @js.any("mist"))
  out._set("showTime", @js.any(true))
  out._set("trainVolume", @js.any(45.0))
  out._set("rainVolume", @js.any(0.0))
  out._set("windVolume", @js.any(20.0))
  out
}

///|
pub fn empty_journey() -> @js.Any {
  let out = @js.new_object()
  out._set("phase", @js.any("idle"))
  out._set("running", @js.any(false))
  out._set("deadline", @js.null())
  out._set("remaining", @js.null())
  out._set("focusMinutes", @js.any(25.0))
  out._set("restMinutes", @js.any(5.0))
  out
}

///|
pub fn views() -> @js.Any {
  @js.any(
    Array::makei(@domain.view_options.length(), i => {
      let pair = @domain.view_options[i]
      let out = @js.new_object()
      out._set("id", @js.any(pair.0))
      out._set("label", @js.any(pair.1))
      out
    }),
  )
}
