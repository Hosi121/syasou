///|
#external
pub type Crypto

///|
#cfg(target="js")
pub extern "js" fn Crypto::get() -> Crypto =
  #| () => crypto

///|
#cfg(target="js")
pub extern "js" fn Crypto::randomUUID(self : Crypto) -> String =
  #| c => c.randomUUID()
