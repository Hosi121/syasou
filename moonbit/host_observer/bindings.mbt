///|
#external
pub type ResizeObserver

///|
#cfg(target="js")
pub extern "js" fn ResizeObserver::new(
  callback : (@js.Any, @js.Any) -> Unit,
) -> ResizeObserver =
  #| f => new ResizeObserver(f)

///|
#cfg(target="js")
pub extern "js" fn ResizeObserver::observe(
  self : ResizeObserver,
  node : @dom.Element,
) -> Unit =
  #| (o,n) => o.observe(n)

///|
#cfg(target="js")
pub extern "js" fn ResizeObserver::disconnect(self : ResizeObserver) -> Unit =
  #| o => o.disconnect()
