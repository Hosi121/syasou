///|
#external
priv type PointerNode

///|
type Bounds = @dom.DOMRect

///|
#cfg(target="js")
extern "js" fn PointerNode::bounds(self : PointerNode) -> Bounds =
  #| node => node.getBoundingClientRect()

///|
#cfg(target="js")
extern "js" fn PointerNode::capture(self : PointerNode, pointer : Int) -> Unit =
  #| (node, pointer) => node.setPointerCapture(pointer)

///|
#cfg(target="js")
extern "js" fn PointerNode::captured(self : PointerNode, pointer : Int) -> Bool =
  #| (node, pointer) => node.hasPointerCapture(pointer)

///|
#cfg(target="js")
extern "js" fn PointerNode::release(self : PointerNode, pointer : Int) -> Unit =
  #| (node, pointer) => node.releasePointerCapture(pointer)

///|
#cfg(target="js")
extern "js" fn UiEvent::pointer_node(self : UiEvent) -> PointerNode =
  #| event => event.currentTarget

///|
#cfg(target="js")
extern "js" fn UiEvent::closest(self : UiEvent, selector : String) -> Bool =
  #| (event, selector) => Boolean(event.target.closest(selector))

///|
#cfg(target="js")
extern "js" fn UiEvent::matches(self : UiEvent, selector : String) -> Bool =
  #| (event, selector) => event.target.matches(selector)

///|
#cfg(target="js")
extern "js" fn UiEvent::primary(self : UiEvent) -> Bool =
  #| event => event.isPrimary

///|
#cfg(target="js")
extern "js" fn UiEvent::button(self : UiEvent) -> Int =
  #| event => event.button

///|
#cfg(target="js")
extern "js" fn UiEvent::buttons(self : UiEvent) -> Int =
  #| event => event.buttons

///|
#cfg(target="js")
extern "js" fn UiEvent::pointer(self : UiEvent) -> Int =
  #| event => event.pointerId

///|
#cfg(target="js")
extern "js" fn UiEvent::pointer_type(self : UiEvent) -> String =
  #| event => event.pointerType

///|
#cfg(target="js")
extern "js" fn UiEvent::x(self : UiEvent) -> Double =
  #| event => event.clientX

///|
#cfg(target="js")
extern "js" fn UiEvent::y(self : UiEvent) -> Double =
  #| event => event.clientY

///|
#cfg(target="js")
extern "js" fn UiEvent::key(self : UiEvent) -> String =
  #| event => event.key

///|
#cfg(target="js")
extern "js" fn UiEvent::prevented(self : UiEvent) -> Bool =
  #| event => event.defaultPrevented
