///|
#external
pub type Storage

///|
#cfg(target="js")
pub extern "js" fn localStorage() -> Storage =
  #| () => localStorage

///|
#cfg(target="js")
pub extern "js" fn sessionStorage() -> Storage =
  #| () => sessionStorage

///|
#cfg(target="js")
pub extern "js" fn Storage::get_item(self : Storage, key : String) -> @js.Any =
  #| (s,k) => s.getItem(k)

///|
#cfg(target="js")
pub extern "js" fn Storage::setItem(
  self : Storage,
  key : String,
  value : String,
) -> Unit =
  #| (s,k,v) => s.setItem(k,v)

///|
pub fn Storage::getItem(self : Storage, key : String) -> String? {
  self.get_item(key).cast()
}
