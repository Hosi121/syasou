///|
fn[T] as_node(value : T) -> @dom.Node {
  @js.any(value).cast()
}

///|
fn as_element(value : @dom.Node) -> @dom.Element {
  @js.any(value).cast()
}

///|
fn same_node(a : @dom.Node, b : @dom.Node) -> Bool {
  identical(@js.any(a), @js.any(b))
}

///|
fn same_optional_node(a : @dom.Node?, b : @dom.Node?) -> Bool {
  match (a, b) {
    (Some(a), Some(b)) => same_node(a, b)
    (None, None) => true
    _ => false
  }
}

///|
extern "js" fn body_node() -> @dom.Node =
  #| () => document.body

///|
extern "js" fn set_text(node : @dom.Node, text : String) -> Unit =
  #| (node,text) => {if(node.data!==text)node.data=text}

///|
fn remove_node(node : @dom.Node) -> Unit {
  if node.parentNode() is Some(parent) {
    parent.removeChild(node) |> ignore
  }
}

///|
fn clear_node(node : @dom.Node) -> Unit {
  while node.firstChild() is Some(child) {
    node.removeChild(child) |> ignore
  }
}

///|
fn move_range(
  parent : @dom.Node,
  first : @dom.Node,
  last : @dom.Node,
  before : @dom.Node?,
) -> Unit {
  let mut current = Some(first)
  while current is Some(node) {
    let next = node.nextSibling()
    parent.insertBefore(node, before) |> ignore
    if same_node(node, last) {
      break
    }
    current = next
  }
}

///|
extern "js" fn queue(run : () -> Unit) -> Unit =
  #| run => queueMicrotask(run)

///|
extern "js" fn assign_ref(reference : @js.Any, value : @js.Any) -> Unit =
  #| (reference,value) => {reference._assign(value);reference._node=value}

///|
extern "js" fn kind(value : @js.Any) -> String =
  #| value => typeof value

///|
extern "js" fn keys(value : @js.Any) -> FixedArray[String] =
  #| value => Object.keys(value)

///|
extern "js" fn bool(value : @js.Any) -> Bool =
  #| value => Boolean(value)

///|
extern "js" fn property(
  node : @dom.Node,
  name : String,
  value : @js.Any,
) -> Unit =
  #| (node,name,value) => {if(node[name]!==value)node[name]=value}

///|
extern "js" fn style_property(
  node : @dom.Node,
  name : String,
  value : String,
) -> Unit =
  #| (node,name,value) => node.style.setProperty(name,value)

///|
extern "js" fn remove_style(node : @dom.Node, name : String) -> Unit =
  #| (node,name) => {node.style.removeProperty(name)}

///|
extern "js" fn add_listener(
  node : @dom.Node,
  name : String,
  listener : (@js.Any) -> Unit,
  capture : Bool,
) -> Unit =
  #| (node,name,listener,capture) => node.addEventListener(name,listener,capture)

///|
extern "js" fn remove_listener(
  node : @dom.Node,
  name : String,
  listener : (@js.Any) -> Unit,
  capture : Bool,
) -> Unit =
  #| (node,name,listener,capture) => node.removeEventListener(name,listener,capture)

///|
extern "js" fn focus_node(node : @dom.Node) -> Unit =
  #| node => node.focus({preventScroll:true})

///|
extern "js" fn active_node() -> @dom.Node =
  #| () => document.activeElement

///|
extern "js" fn connected(node : @dom.Node) -> Bool =
  #| node => node.isConnected

///|
extern "js" fn contains(parent : @dom.Node, node : @dom.Node) -> Bool =
  #| (parent,node) => parent.contains(node)

///|
extern "js" fn event_target(event : @js.Any) -> @dom.Node =
  #| event => event.target

///|
extern "js" fn event_key(event : @js.Any) -> String =
  #| event => event.key

///|
extern "js" fn prevent(event : @js.Any) -> Unit =
  #| event => event.preventDefault()

///|
extern "js" fn stop(event : @js.Any) -> Unit =
  #| event => event.stopPropagation()

///|
extern "js" fn prevented(event : @js.Any) -> Bool =
  #| event => event.defaultPrevented

///|
extern "js" fn custom_event(name : String) -> @js.Any =
  #| name => new Event(name,{cancelable:true})

///|
extern "js" fn clear_ref(reference : @js.Any, node : @dom.Node) -> Unit =
  #| (reference,node) => {if(reference._node===node){reference._assign(undefined);reference._node=undefined}}
