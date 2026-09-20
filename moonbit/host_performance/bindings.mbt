///|
#external
pub type Performance

///|
#cfg(target="js")
pub extern "js" fn performance() -> Performance =
  #| () => performance

///|
#cfg(target="js")
pub extern "js" fn Performance::now(self : Performance) -> Double =
  #| p => p.now()
