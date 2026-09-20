///|
#external
priv type PointerNode

///|
priv struct Bounds {
  left : Double
  top : Double
  width : Double
  height : Double
}

///|
extern "js" fn PointerNode::bounds(self : PointerNode) -> Bounds =
  #| node => node.getBoundingClientRect()

///|
extern "js" fn PointerNode::capture(self : PointerNode, pointer : Int) -> Unit =
  #| (node, pointer) => node.setPointerCapture(pointer)

///|
extern "js" fn PointerNode::captured(self : PointerNode, pointer : Int) -> Bool =
  #| (node, pointer) => node.hasPointerCapture(pointer)

///|
extern "js" fn PointerNode::release(self : PointerNode, pointer : Int) -> Unit =
  #| (node, pointer) => node.releasePointerCapture(pointer)

///|
extern "js" fn UiEvent::pointer_node(self : UiEvent) -> PointerNode =
  #| event => event.currentTarget

///|
extern "js" fn UiEvent::closest(self : UiEvent, selector : String) -> Bool =
  #| (event, selector) => Boolean(event.target.closest(selector))

///|
extern "js" fn UiEvent::matches(self : UiEvent, selector : String) -> Bool =
  #| (event, selector) => event.target.matches(selector)

///|
extern "js" fn UiEvent::primary(self : UiEvent) -> Bool =
  #| event => event.isPrimary

///|
extern "js" fn UiEvent::button(self : UiEvent) -> Int =
  #| event => event.button

///|
extern "js" fn UiEvent::buttons(self : UiEvent) -> Int =
  #| event => event.buttons

///|
extern "js" fn UiEvent::pointer(self : UiEvent) -> Int =
  #| event => event.pointerId

///|
extern "js" fn UiEvent::pointer_type(self : UiEvent) -> String =
  #| event => event.pointerType

///|
extern "js" fn UiEvent::x(self : UiEvent) -> Double =
  #| event => event.clientX

///|
extern "js" fn UiEvent::y(self : UiEvent) -> Double =
  #| event => event.clientY

///|
extern "js" fn UiEvent::key(self : UiEvent) -> String =
  #| event => event.key

///|
extern "js" fn UiEvent::prevented(self : UiEvent) -> Bool =
  #| event => event.defaultPrevented
