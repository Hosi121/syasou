///|
pub fn app(props : @ui.AppProps) -> @view.Element {
  @ui.app(props)
}

///|
pub fn prepare_ui() -> @js.Promise[Unit] {
  @ui.prepare_ui()
}
