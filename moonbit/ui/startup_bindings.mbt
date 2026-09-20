///|
// A genuine Vite import boundary keeps download failures recoverable from the title.
#cfg(target="js")
extern "js" fn load_world() -> @js.Promise[@js.Any] =
  #| () => import('../../world.css')
