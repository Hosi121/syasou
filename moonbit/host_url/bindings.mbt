///|
#external
pub type URLSearchParams

///|
#cfg(target="js")
pub extern "js" fn URLSearchParams::get_value(
  self : URLSearchParams,
  key : String,
) -> @js.Any =
  #| (s,k) => s.get(k)

///|
pub fn URLSearchParams::get(self : URLSearchParams, key : String) -> String? {
  self.get_value(key).cast()
}
