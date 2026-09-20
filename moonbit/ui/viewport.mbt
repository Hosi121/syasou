///|
#external
priv type VisualViewport

///|
#cfg(target="js")
extern "js" fn viewport_raw() -> @js.Any =
  #| () => window.visualViewport

///|
fn visual_viewport() -> VisualViewport? {
  let value = viewport_raw()
  if @js.is_nullish(value) {
    None
  } else {
    Some(value.cast())
  }
}

///|
#cfg(target="js")
extern "js" fn VisualViewport::scale(self : VisualViewport) -> Double =
  #| viewport => viewport.scale

///|
#cfg(target="js")
extern "js" fn VisualViewport::height(self : VisualViewport) -> Double =
  #| viewport => viewport.height

///|
#cfg(target="js")
extern "js" fn VisualViewport::top(self : VisualViewport) -> Double =
  #| viewport => viewport.offsetTop

///|
#cfg(target="js")
extern "js" fn VisualViewport::subscribe_raw(
  self : VisualViewport,
  name : String,
  listener : () -> Unit,
) -> @js.Any =
  #| (viewport,name,listener) => {viewport.addEventListener(name,listener);return () => viewport.removeEventListener(name,listener)}

///|
#cfg(target="js")
extern "js" fn root_style(name : String, value : String) -> Unit =
  #| (name,value) => document.documentElement.style.setProperty(name,value)

///|
#cfg(target="js")
extern "js" fn remove_root_style(name : String) -> Unit =
  #| name => {document.documentElement.style.removeProperty(name)}

///|
fn use_visual_viewport() -> Unit {
  effect(
    () => {
      guard visual_viewport() is Some(viewport) else { return () => () }
      let update = () => {
        if viewport.scale() > 1.05 {
          return
        }
        root_style("--visual-height", "\{viewport.height()}px")
        root_style("--visual-top", "\{viewport.top()}px")
      }
      update()
      let resize = viewport.subscribe("resize", update)
      let scroll = viewport.subscribe("scroll", update)
      () => {
        resize()
        scroll()
        remove_root_style("--visual-height")
        remove_root_style("--visual-top")
      }
    },
    [],
  )
}

///|
fn VisualViewport::subscribe(
  self : VisualViewport,
  name : String,
  callback : () -> Unit,
) -> () -> Unit {
  @js.to_fn0(self.subscribe_raw(name, callback))
}
