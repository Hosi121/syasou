///|
pub fn app(props : @ui.AppProps) -> @react.Element {
  @ui.app(props)
}

///|
pub fn prepare_ui() -> @js.Promise[Unit] {
  @ui.prepare_ui()
}
