///|
#external
pub type Node

///|
#external
pub type Element

///|
#external
pub type Document

///|
#external
pub type Window

///|
#external
pub type HTMLCanvasElement

///|
#external
pub type MediaQueryList

///|
#external
pub type Event

///|
#external
pub type TouchEvent

///|
#external
pub type Touch

///|
#external
pub type DOMRect

///|
#cfg(target="js")
pub extern "js" fn document() -> Document =
  #| () => document

///|
#cfg(target="js")
pub extern "js" fn window() -> Window =
  #| () => window

///|
#cfg(target="js")
pub extern "js" fn matchMedia(query : String) -> MediaQueryList =
  #| q => matchMedia(q)

///|
#cfg(target="js")
pub extern "js" fn Document::createElement(
  self : Document,
  tag : String,
) -> Element =
  #| (d,t) => d.createElement(t)

///|
#cfg(target="js")
pub extern "js" fn Document::createElementNs(
  self : Document,
  ns : String,
  tag : String,
) -> Element =
  #| (d,n,t) => d.createElementNS(n,t)

///|
#cfg(target="js")
pub extern "js" fn Document::createTextNode(
  self : Document,
  text : String,
) -> Node =
  #| (d,t) => d.createTextNode(t)

///|
#cfg(target="js")
pub extern "js" fn Document::createComment(
  self : Document,
  text : String,
) -> Node =
  #| (d,t) => d.createComment(t)

///|
#cfg(target="js")
pub extern "js" fn Node::removeChild(self : Node, child : Node) -> Node =
  #| (n,c) => n.removeChild(c)

///|
#cfg(target="js")
pub extern "js" fn Node::insert_before(
  self : Node,
  child : Node,
  before : @js.Any,
) -> Node =
  #| (n,c,b) => n.insertBefore(c,b)

///|
#cfg(target="js")
pub extern "js" fn Node::parent(self : Node) -> @js.Any =
  #| n => n.parentNode

///|
#cfg(target="js")
pub extern "js" fn Node::first(self : Node) -> @js.Any =
  #| n => n.firstChild

///|
#cfg(target="js")
pub extern "js" fn Node::next(self : Node) -> @js.Any =
  #| n => n.nextSibling

///|
#cfg(target="js")
pub extern "js" fn Document::query(
  self : Document,
  selector : String,
) -> @js.Any =
  #| (d,s) => d.querySelector(s)

///|
#cfg(target="js")
pub extern "js" fn Document::by_id(self : Document, id : String) -> @js.Any =
  #| (d,i) => d.getElementById(i)

///|
#cfg(target="js")
pub extern "js" fn Element::setAttribute(
  self : Element,
  name : String,
  value : String,
) -> Unit =
  #| (e,n,v) => e.setAttribute(n,v)

///|
#cfg(target="js")
pub extern "js" fn Element::removeAttribute(
  self : Element,
  name : String,
) -> Unit =
  #| (e,n) => e.removeAttribute(n)

///|
#cfg(target="js")
pub extern "js" fn Event::preventDefault(self : Event) -> Unit =
  #| e => e.preventDefault()

///|
#cfg(target="js")
pub extern "js" fn Touch::client_x(self : Touch) -> Double =
  #| t => t.clientX

///|
#cfg(target="js")
pub extern "js" fn Touch::client_y(self : Touch) -> Double =
  #| t => t.clientY

///|
#cfg(target="js")
pub extern "js" fn TouchEvent::touch_values(self : TouchEvent) -> @js.Any =
  #| e => Array.from(e.touches)

///|
#cfg(target="js")
pub extern "js" fn TouchEvent::preventDefault(self : TouchEvent) -> Unit =
  #| e => e.preventDefault()

///|
#cfg(target="js")
pub extern "js" fn Window::setTimeout(
  self : Window,
  f : () -> Unit,
  delay : Int,
) -> Int =
  #| (w,f,d) => w.setTimeout(f,d)

///|
#cfg(target="js")
pub extern "js" fn Window::setInterval(
  self : Window,
  f : () -> Unit,
  delay : Int,
) -> Int =
  #| (w,f,d) => w.setInterval(f,d)

///|
#cfg(target="js")
pub extern "js" fn Window::clearTimeout(self : Window, id : Int) -> Unit =
  #| (w,i) => w.clearTimeout(i)

///|
#cfg(target="js")
pub extern "js" fn Window::clearInterval(self : Window, id : Int) -> Unit =
  #| (w,i) => w.clearInterval(i)

///|
#cfg(target="js")
pub extern "js" fn Window::requestAnimationFrame(
  self : Window,
  f : (Double) -> Unit,
) -> Int =
  #| (w,f) => w.requestAnimationFrame(f)

///|
#cfg(target="js")
pub extern "js" fn Window::cancelAnimationFrame(
  self : Window,
  id : Int,
) -> Unit =
  #| (w,i) => w.cancelAnimationFrame(i)

///|
#cfg(target="js")
pub extern "js" fn Window::innerWidth(self : Window) -> Int =
  #| w => w.innerWidth

///|
#cfg(target="js")
pub extern "js" fn Window::innerHeight(self : Window) -> Int =
  #| w => w.innerHeight

///|
#cfg(target="js")
pub extern "js" fn HTMLCanvasElement::width(self : HTMLCanvasElement) -> Int =
  #| c => c.width

///|
#cfg(target="js")
pub extern "js" fn HTMLCanvasElement::height(self : HTMLCanvasElement) -> Int =
  #| c => c.height

///|
#cfg(target="js")
pub extern "js" fn HTMLCanvasElement::set_width(
  self : HTMLCanvasElement,
  n : Int,
) -> Unit =
  #| (c,n) => {c.width=n}

///|
#cfg(target="js")
pub extern "js" fn HTMLCanvasElement::set_height(
  self : HTMLCanvasElement,
  n : Int,
) -> Unit =
  #| (c,n) => {c.height=n}

///|
#cfg(target="js")
pub extern "js" fn MediaQueryList::matches(self : MediaQueryList) -> Bool =
  #| m => m.matches

///|
#cfg(target="js")
pub extern "js" fn DOMRect::x(self : DOMRect) -> Double =
  #| r => r.x

///|
#cfg(target="js")
pub extern "js" fn DOMRect::y(self : DOMRect) -> Double =
  #| r => r.y

///|
#cfg(target="js")
pub extern "js" fn DOMRect::left(self : DOMRect) -> Double =
  #| r => r.left

///|
#cfg(target="js")
pub extern "js" fn DOMRect::top(self : DOMRect) -> Double =
  #| r => r.top

///|
#cfg(target="js")
pub extern "js" fn DOMRect::width(self : DOMRect) -> Double =
  #| r => r.width

///|
#cfg(target="js")
pub extern "js" fn DOMRect::height(self : DOMRect) -> Double =
  #| r => r.height

///|
#cfg(target="js")
pub extern "js" fn Document::addEventListener(
  self : Document,
  name : String,
  callback : (@js.Any) -> Unit,
) -> Unit =
  #| (o,n,f) => o.addEventListener(n,f)

///|
#cfg(target="js")
pub extern "js" fn Document::removeEventListener(
  self : Document,
  name : String,
  callback : (@js.Any) -> Unit,
) -> Unit =
  #| (o,n,f) => o.removeEventListener(n,f)

///|
#cfg(target="js")
pub extern "js" fn HTMLCanvasElement::addEventListener(
  self : HTMLCanvasElement,
  name : String,
  callback : (@js.Any) -> Unit,
) -> Unit =
  #| (o,n,f) => o.addEventListener(n,f)

///|
#cfg(target="js")
pub extern "js" fn HTMLCanvasElement::removeEventListener(
  self : HTMLCanvasElement,
  name : String,
  callback : (@js.Any) -> Unit,
) -> Unit =
  #| (o,n,f) => o.removeEventListener(n,f)

///|
#cfg(target="js")
pub extern "js" fn MediaQueryList::addChangeListener(
  self : MediaQueryList,
  callback : (Event) -> Unit,
) -> Unit =
  #| (m,f) => m.addEventListener("change",f)

///|
#cfg(target="js")
pub extern "js" fn MediaQueryList::removeChangeListener(
  self : MediaQueryList,
  callback : (Event) -> Unit,
) -> Unit =
  #| (m,f) => m.removeEventListener("change",f)

///|
pub fn Document::getElementById(self : Document, id : String) -> Element? {
  self.by_id(id).cast()
}

///|
pub fn Document::querySelector(self : Document, selector : String) -> Element? {
  self.query(selector).cast()
}

///|
pub fn Node::parentNode(self : Node) -> Node? {
  self.parent().cast()
}

///|
pub fn Node::firstChild(self : Node) -> Node? {
  self.first().cast()
}

///|
pub fn Node::nextSibling(self : Node) -> Node? {
  self.next().cast()
}

///|
pub fn Node::insertBefore(self : Node, child : Node, before : Node?) -> Node {
  self.insert_before(child, @js.any(before))
}

///|
pub fn HTMLCanvasElement::as_any(self : HTMLCanvasElement) -> @js.Any = "%identity"

///|
pub fn HTMLCanvasElement::as_element(self : HTMLCanvasElement) -> Element = "%identity"

///|
pub fn TouchEvent::touches(self : TouchEvent) -> Array[Touch] {
  self.touch_values().cast()
}
