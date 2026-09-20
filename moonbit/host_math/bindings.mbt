///|
#external
pub type Math

///|
#cfg(target="js")
pub extern "js" fn Math::random() -> Double =
  #| () => Math.random()

///|
#cfg(target="js")
pub extern "js" fn Math::round(value : Double) -> Int =
  #| value => Math.round(value)
