///|
// A genuine Vite import boundary keeps download failures recoverable from the title.
extern "js" fn load_world() -> @js.Promise[@js.Any] =
  #| () => import('../../App.tsx')

///|
fn world_component(world_module : @js.Any) -> (AppProps) -> @view.Element {
  world_module._get("default").cast()
}
