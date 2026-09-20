///|
#external
pub type Date

///|
#cfg(target="js")
pub extern "js" fn Date::new() -> Date =
  #| () => new Date()

///|
#cfg(target="js")
pub extern "js" fn Date::get_full_year(self : Date) -> Int =
  #| d => d.getFullYear()

///|
#cfg(target="js")
pub extern "js" fn Date::get_month(self : Date) -> Int =
  #| d => d.getMonth()

///|
#cfg(target="js")
pub extern "js" fn Date::get_date(self : Date) -> Int =
  #| d => d.getDate()
