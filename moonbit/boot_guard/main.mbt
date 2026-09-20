///|
#external
type LoadError

///|
extern "js" fn listen(callback : (LoadError) -> Unit) -> Unit =
  #| callback => window.addEventListener('error', callback, true)

///|
extern "js" fn is_script(event : LoadError) -> Bool =
  #| event => event.target instanceof HTMLScriptElement

///|
extern "js" fn script_type(event : LoadError) -> String =
  #| event => event.target.type

///|
extern "js" fn show_boot_error() -> Unit =
  #| () => { document.documentElement.dataset.bootError = 'true' }

///|
fn main {
  listen(event => {
    if is_script(event) && script_type(event) == "module" {
      show_boot_error()
    }
  })
}
