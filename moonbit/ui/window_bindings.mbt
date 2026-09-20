///|
extern "js" fn fullscreen_supported() -> Bool =
  #| () => Boolean(document.fullscreenEnabled && document.documentElement.requestFullscreen)

///|
extern "js" fn fullscreen_active() -> Bool =
  #| () => Boolean(document.fullscreenElement)

///|
extern "js" fn fullscreen_request_available() -> Bool =
  #| () => Boolean(document.documentElement.requestFullscreen)

///|
extern "js" fn fullscreen_enter() -> @js.Promise[Unit] =
  #| () => document.documentElement.requestFullscreen()

///|
extern "js" fn fullscreen_exit() -> @js.Promise[Unit] =
  #| () => document.exitFullscreen()

///|
extern "js" fn set_document_title(title : String) -> Unit =
  #| title => {document.title=title}

///|
extern "js" fn root_class(name : String, enabled : Bool) -> Unit =
  #| (name,enabled) => {document.documentElement.classList.toggle(name,enabled)}

///|
fn on_keydown(callback : (UiEvent) -> Unit) -> () -> Unit {
  let listener = (event : @js.Any) => callback(event.cast())
  @dom.document().addEventListener("keydown", listener)
  () => @dom.document().removeEventListener("keydown", listener)
}
