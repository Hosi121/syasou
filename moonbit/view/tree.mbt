///|
pub(all) enum Element {
  Blank
  Text(String)
  Tag(String, @js.Any, Array[Element])
  Group(Array[Element])
  Component(String, () -> Element, String?)
  Control(String, String, @js.Any, Array[Element])
  Portal(Array[Element])
  Boundary(Element, () -> Unit)
}

///|
pub fn element(
  tag : String,
  props : @js.Any,
  children : Array[Element],
) -> Element {
  Tag(tag, props, children)
}

///|
pub fn fragment(children : Array[Element]) -> Element {
  Group(children)
}

///|
pub fn[T] component(
  identity : String,
  render : (T) -> Element,
  props : T,
  key? : String,
) -> Element {
  Component(identity, () => render(props), key)
}

///|
pub fn control(
  library : String,
  name : String,
  props : @js.Any,
  children : Array[Element],
) -> Element {
  Control(library, name, props, children)
}

///|
pub fn boundary(child : Element, on_error : () -> Unit) -> Element {
  Boundary(child, on_error)
}

///|
// Catch JavaScript host exceptions at the UI boundary, then recover in MoonBit.
#cfg(target="js")
extern "js" fn attempt(run : () -> Unit, on_error : () -> Unit) -> Unit =
  #| (run,onError) => {try {run()} catch {onError()}}

///|
#cfg(target="js")
extern "js" fn guarded(run : () -> Unit, on_error : () -> Unit) -> Unit =
  #| (run,onError) => {try {run()} catch (error) {onError();throw error}}

///|
fn value_key(value : @js.Any) -> String? {
  let key = value._get("key")
  if @js.is_nullish(key) {
    None
  } else {
    Some(key.to_string())
  }
}

///|
fn key(node : Element) -> String? {
  match node {
    Tag(_, props, _) | Control(_, _, props, _) => value_key(props)
    Component(_, _, key) => key
    _ => None
  }
}

///|
fn compatible(a : Element, b : Element) -> Bool {
  if key(a) != key(b) {
    return false
  }
  match (a, b) {
    (Blank, Blank)
    | (Text(_), Text(_))
    | (Group(_), Group(_))
    | (Portal(_), Portal(_))
    | (Boundary(_, _), Boundary(_, _)) => true
    (Tag(a, _, _), Tag(b, _, _)) => a == b
    (Component(a, _, _), Component(b, _, _)) => a == b
    (Control(a, b, _, _), Control(c, d, _, _)) => a == c && b == d
    _ => false
  }
}

///|
fn new_scope() -> Scope {
  { slots: [], cursor: 0, alive: true, }
}

///|
priv struct Mounted {
  mut tree : Element
  parent : @dom.Node
  first : @dom.Node
  last : @dom.Node
  mut children : Array[Mounted]
  scope : Scope
  mut props : @js.Any
  listeners : Map[String, (@js.Any) -> Unit]
  mut context : Context
  mut exiting : Bool
  mut failed : Bool
  mut style_names : Array[String]
  mut cleanup : () -> Unit
  mut motion_cleanup : () -> Unit
  mut animation : Animation?
  mut target_style : String
  id : String
  mut panel : Panel?
  svg : Bool
}

///|
fn mount_node(
  parent : @dom.Node,
  tree : Element,
  before : @dom.Node?,
  context : Context,
  svg : Bool,
) -> Mounted {
  runtime.serial += 1
  let id = "syasou-\{runtime.serial}"
  let (first, last, is_svg) = match tree {
    Tag(tag, _, _) => {
      let is_svg = svg || tag == "svg"
      let node = as_node(
        if is_svg {
          @dom.document().createElementNs("http://www.w3.org/2000/svg", tag)
        } else {
          @dom.document().createElement(tag)
        },
      )
      (node, node, is_svg)
    }
    Text(value) => {
      let node = as_node(@dom.document().createTextNode(value))
      (node, node, svg)
    }
    _ => {
      let first = @dom.document().createComment("")
      let last = @dom.document().createComment("")
      (first, last, svg)
    }
  }
  parent.insertBefore(first, before) |> ignore
  if !same_node(first, last) {
    parent.insertBefore(last, before) |> ignore
  }
  let mounted = {
    tree,
    parent,
    first,
    last,
    children: [],
    scope: new_scope(),
    props: @js.new_object(),
    listeners: Map([]),
    context,
    exiting: false,
    failed: false,
    style_names: [],
    cleanup: () => (),
    motion_cleanup: () => (),
    animation: None,
    target_style: "",
    id,
    panel: None,
    svg: is_svg,
  }
  guarded(() => patch(mounted, tree, context, true), () => dispose(mounted))
  mounted
}

///|
fn patch(
  mounted : Mounted,
  tree : Element,
  context : Context,
  fresh : Bool,
) -> Unit {
  mounted.tree = tree
  mounted.context = context
  match tree {
    Blank => ()
    Text(value) => set_text(mounted.first, value)
    Tag(tag, props, children) => {
      update_props(mounted, props, fresh)
      mounted.children = reconcile(
        mounted.first,
        mounted.children,
        children,
        None,
        context,
        mounted.svg && tag != "foreignObject",
      )
      if fresh {
        mount_behavior(mounted)
      }
    }
    Group(children) =>
      mounted.children = reconcile(
        mounted.parent,
        mounted.children,
        children,
        Some(mounted.last),
        context,
        mounted.svg,
      )
    Component(_, render, _) => {
      let child = run_in_scope(mounted.scope, render)
      mounted.children = reconcile(
        mounted.parent,
        mounted.children,
        [child],
        Some(mounted.last),
        context,
        mounted.svg,
      )
    }
    Boundary(child, on_error) =>
      if !mounted.failed {
        attempt(
          () => {
            mounted.children = reconcile(
              mounted.parent,
              mounted.children,
              [child],
              Some(mounted.last),
              context,
              mounted.svg,
            )
          },
          () => {
            mounted.failed = true
            for child in mounted.children {
              dispose(child)
            }
            mounted.children = []
            after_render(on_error)
          },
        )
      }
    Control(library, name, props, children) => {
      if library == "motion" && name == "AnimatePresence" {
        patch_presence(mounted, children, context)
        return
      }
      let (next, context) = run_control(
        mounted, library, name, props, children, context,
      )
      mounted.children = reconcile(
        mounted.parent,
        mounted.children,
        [next],
        Some(mounted.last),
        context,
        mounted.svg,
      )
    }
    Portal(children) =>
      mounted.children = reconcile(
        body_node(),
        mounted.children,
        children,
        None,
        context,
        false,
      )
  }
}

///|
fn reconcile(
  parent : @dom.Node,
  old : Array[Mounted],
  next : Array[Element],
  before : @dom.Node?,
  context : Context,
  svg : Bool,
) -> Array[Mounted] {
  let used = Array::make(old.length(), false)
  let result : Array[Mounted] = []
  let created : Array[Mounted] = []
  guarded(
    () => {
      for index, tree in next {
        let mut found : Int? = None
        if index < old.length() &&
          !used[index] &&
          compatible(old[index].tree, tree) {
          found = Some(index)
        }
        if found is None && key(tree) is Some(_) {
          for i, item in old {
            if !used[i] && compatible(item.tree, tree) {
              found = Some(i)
              break
            }
          }
        }
        match found {
          Some(i) => {
            used[i] = true
            patch(old[i], tree, context, false)
            result.push(old[i])
          }
          None => {
            // Insert replacements at their original position so neighboring inputs,
            // focused buttons and captured pointers never need a DOM move.
            let anchor = if index < old.length() {
              Some(old[index].first)
            } else {
              before
            }
            let item = mount_node(parent, tree, anchor, context, svg)
            created.push(item)
            result.push(item)
          }
        }
      }
      for i, item in old {
        if !used[i] {
          dispose(item)
        }
      }
      // Move ranges only when necessary. Stable nodes keep selection, focus,
      // pointer capture, canvas contexts, and browser-owned form state.
      let mut cursor = before
      for i = result.length() - 1; i >= 0; i = i - 1 {
        let item = result[i]
        if !same_optional_node(item.last.nextSibling(), cursor) {
          move_range(parent, item.first, item.last, cursor)
        }
        cursor = Some(item.first)
      }
    },
    () => {
      for item in created {
        dispose(item)
      }
    },
  )
  result
}

///|
fn dispose(mounted : Mounted) -> Unit {
  dispose_scope(mounted.scope)
  for name, listener in mounted.listeners {
    let (event, capture) = event_name(name)
    remove_listener(mounted.first, event, listener, capture)
  }
  mounted.listeners.clear()
  (mounted.cleanup)()
  (mounted.motion_cleanup)()
  if mounted.animation is Some(animation) {
    animation.cancel()
  }
  for child in mounted.children {
    dispose(child)
  }
  let reference = mounted.props._get("ref")
  if !@js.is_nullish(reference) {
    clear_ref(reference, mounted.first)
  }
  remove_node(mounted.first)
  if !same_node(mounted.first, mounted.last) {
    remove_node(mounted.last)
  }
}

///|
pub fn mount(root : @dom.Element, tree : Element) -> () -> Unit {
  let parent = as_node(root)
  clear_node(parent)
  let mounted = mount_node(parent, tree, None, empty_context(), false)
  let pending = Ref(false)
  let live = Ref(true)
  runtime.schedule = () => {
    if !pending.val && live.val {
      pending.val = true
      queue(() => {
        pending.val = false
        if live.val {
          patch(mounted, tree, empty_context(), false)
          flush_effects()
        }
      })
    }
  }
  flush_effects()
  () => {
    live.val = false
    dispose(mounted)
  }
}
