///|
#external
priv type WindowRenderer

///|
fn create_renderer(
  canvas : @dom.HTMLCanvasElement,
  unavailable : () -> Unit,
) -> WindowRenderer? {
  let renderer = @bridge.create_window_renderer(
    canvas.as_any(),
    @js.any(unavailable),
  )
  if @js.is_nullish(renderer) {
    None
  } else {
    Some(renderer.cast())
  }
}

///|
fn WindowRenderer::update(
  self : WindowRenderer,
  props : LandscapeProps,
) -> Unit {
  @js.any(self)._call("update", [@js.any(props)]) |> ignore
}

///|
fn WindowRenderer::dispose(self : WindowRenderer) -> Unit {
  @js.any(self)._call("dispose", []) |> ignore
}
