///|
priv struct Panel {
  id : String
  modal : Bool
  mut open : Bool
  mut props : @js.Any
  trigger : ViewRef[@dom.Node]
}

///|
priv struct Toggle {
  value : String
  props : @js.Any
}

///|
priv struct Context {
  panel : Panel?
  toggle : Toggle?
}

///|
fn empty_context() -> Context {
  { panel: None, toggle: None, }
}

///|
fn dictionary(values : Array[(String, @js.Any)]) -> @js.Any {
  let out = @js.new_object()
  for (name, value) in values {
    out._set(name, value)
  }
  out
}

///|
fn copy_props(props : @js.Any, omit : Array[String]) -> @js.Any {
  let out = @js.new_object()
  for name in keys(props) {
    if !omit.contains(name) {
      out._set(name, props._get(name))
    }
  }
  out
}

///|
fn merge_props(a : @js.Any, b : @js.Any) -> @js.Any {
  @js.object_assign(@js.object_assign(@js.new_object(), a), b)
}

///|
fn child_tag(children : Array[Element], props : @js.Any) -> Element {
  match children.get(0) {
    Some(Tag(tag, child, grandchildren)) =>
      Tag(tag, merge_props(child, props), grandchildren)
    _ => Group(children)
  }
}

///|
fn change_panel(panel : Panel, open : Bool) -> Unit {
  invoke(panel.props, "onOpenChange", @js.any(open))
}

///|
fn run_control(
  mounted : Mounted,
  library : String,
  name : String,
  props : @js.Any,
  children : Array[Element],
  context : Context,
) -> (Element, Context) {
  if library == "motion" {
    return (Group(children), context)
  }
  if library == "toggle" {
    if name == "Root" {
      let next = {
        ..context,
        toggle: Some({ value: props._get("value").to_string(), props, }),
      }
      let attrs = copy_props(props, ["type", "value", "onValueChange"])
      attrs._set("tabIndex", @js.any(-1))
      attrs._set("style", dictionary([("outline", @js.any("none"))]))
      attrs._set("role", @js.any("radiogroup"))
      attrs._set("dir", @js.any("ltr"))
      attrs._set(
        "onKeyDown",
        @js.any((event : @js.Any) => radio_keydown(event)),
      )
      return (Tag("div", attrs, children), next)
    }
    let toggle = context.toggle.unwrap()
    let value = props._get("value").to_string()
    let selected = value == toggle.value
    let attrs = copy_props(props, ["value"])
    attrs._set("type", @js.any("button"))
    attrs._set("role", @js.any("radio"))
    attrs._set("aria-checked", @js.any(selected))
    attrs._set("data-state", @js.any(if selected { "on" } else { "off" }))
    attrs._set("tabIndex", @js.any(if selected { 0 } else { -1 }))
    attrs._set(
      "onClick",
      @js.any(() => {
        invoke(
          toggle.props,
          "onValueChange",
          @js.any(if selected { "" } else { value }),
        )
      }),
    )
    return (Tag("button", attrs, children), context)
  }
  if name == "Root" {
    let panel = match mounted.panel {
      Some(value) => value
      None => {
        let value = {
          id: mounted.id,
          modal: library == "dialog",
          open: false,
          props,
          trigger: new_ref(None),
        }
        mounted.panel = Some(value)
        value
      }
    }
    panel.open = bool(props._get("open"))
    panel.props = props
    return (Group(children), { ..context, panel: Some(panel), })
  }
  let panel = context.panel.unwrap()
  match name {
    "Trigger" => {
      let attrs = copy_props(props, ["asChild"])
      attrs._set("ref", @js.any(panel.trigger))
      attrs._set("type", @js.any("button"))
      attrs._set("aria-haspopup", @js.any("dialog"))
      attrs._set("aria-expanded", @js.any(panel.open))
      attrs._set("aria-controls", @js.any(panel.id + "-content"))
      attrs._set(
        "data-state",
        @js.any(if panel.open { "open" } else { "closed" }),
      )
      attrs._set("onClick", @js.any(() => change_panel(panel, !panel.open)))
      (
        if bool(props._get("asChild")) {
          child_tag(children, attrs)
        } else {
          Tag("button", attrs, children)
        },
        context,
      )
    }
    "Portal" => (if panel.open { Portal(children) } else { Blank }, context)
    "Overlay" => {
      let attrs = copy_props(props, ["asChild"])
      attrs._set("aria-hidden", @js.any("true"))
      attrs._set("data-state", @js.any("open"))
      (
        if bool(props._get("asChild")) {
          child_tag(children, attrs)
        } else {
          Tag("div", attrs, children)
        },
        context,
      )
    }
    "Content" => {
      let attrs = copy_props(props, [
        "onOpenAutoFocus", "onCloseAutoFocus", "onEscapeKeyDown", "side", "align",
        "sideOffset", "collisionPadding",
      ])
      attrs._set("panel", @js.any(panel))
      attrs._set("id", @js.any(panel.id + "-content"))
      attrs._set("role", @js.any("dialog"))
      attrs._set("tabIndex", @js.any(-1))
      attrs._set("data-state", @js.any("open"))
      if panel.modal {
        attrs._set("aria-modal", @js.any("true"))
        attrs._set("aria-labelledby", @js.any(panel.id + "-title"))
        attrs._set("aria-describedby", @js.any(panel.id + "-description"))
      }
      // These callbacks are lifecycle hooks, never DOM event attributes.
      attrs._set("panelCallbacks", props)
      (
        Tag(if panel.modal { "dialog" } else { "div" }, attrs, children),
        context,
      )
    }
    "Title" => {
      let attrs = merge_props(
        props,
        dictionary([("id", @js.any(panel.id + "-title"))]),
      )
      (Tag("h2", attrs, children), context)
    }
    "Description" => {
      let attrs = merge_props(
        props,
        dictionary([("id", @js.any(panel.id + "-description"))]),
      )
      (Tag("p", attrs, children), context)
    }
    "Close" => {
      let attrs = merge_props(
        props,
        dictionary([
          ("type", @js.any("button")),
          ("onClick", @js.any(() => change_panel(panel, false))),
        ]),
      )
      (Tag("button", attrs, children), context)
    }
    _ => (Group(children), context)
  }
}

///|
extern "js" fn query_all(
  node : @dom.Node,
  selector : String,
) -> FixedArray[@dom.Node] =
  #| (node,selector) => Array.from(node.querySelectorAll(selector))

///|
extern "js" fn current_target(event : @js.Any) -> @dom.Node =
  #| event => event.currentTarget

///|
extern "js" fn shift(event : @js.Any) -> Bool =
  #| event => event.shiftKey

///|
extern "js" fn tabbable(node : @dom.Node) -> Bool =
  #| node => !node.disabled && !node.closest('[inert],[aria-hidden="true"]') && node.getClientRects().length>0 && node.tabIndex>=0

///|
fn focusable(node : @dom.Node) -> Array[@dom.Node] {
  [
    for
      item in query_all(node, "button,input,textarea,a[href],select,[tabindex]") if tabbable(
      item,
    ) => item
  ]
}

///|
fn radio_keydown(event : @js.Any) -> Unit {
  let key = event_key(event)
  if !["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"].contains(
      key,
    ) {
    return
  }
  let items = query_all(current_target(event), "[role=radio]:not(:disabled)")
  if items.length() == 0 {
    return
  }
  let mut current = 0
  for i, item in items {
    if same_node(item, active_node()) {
      current = i
      break
    }
  }
  let next = match key {
    "Home" => 0
    "End" => items.length() - 1
    "ArrowLeft" | "ArrowUp" => (current + items.length() - 1) % items.length()
    _ => (current + 1) % items.length()
  }
  prevent(event)
  focus_node(items[next])
}

///|
extern "js" fn show_modal(node : @dom.Node) -> Unit =
  #| node => node.showModal()

///|
extern "js" fn close_modal(node : @dom.Node) -> Unit =
  #| node => node.close()

///|
priv struct Rect {
  x : Double
  y : Double
  width : Double
  height : Double
}

///|
extern "js" fn rect(node : @dom.Node) -> Rect =
  #| node => node.getBoundingClientRect()

///|
extern "js" fn pointer_x(event : @js.Any) -> Double =
  #| event => event.clientX

///|
extern "js" fn pointer_y(event : @js.Any) -> Double =
  #| event => event.clientY

///|
fn mount_behavior(mounted : Mounted) -> Unit {
  let raw = mounted.props._get("panel")
  if @js.is_nullish(raw) {
    return
  }
  let panel : Panel = raw.cast()
  let node = mounted.first
  let previous = active_node()
  let keydown = (event : @js.Any) => {
    if event_key(event) == "Escape" {
      invoke(mounted.props._get("panelCallbacks"), "onEscapeKeyDown", event)
      if !prevented(event) {
        change_panel(panel, false)
      }
      prevent(event)
      stop(event)
    } else if panel.modal && event_key(event) == "Tab" {
      let items = focusable(node)
      if items.is_empty() {
        prevent(event)
        focus_node(node)
      } else if shift(event) && same_node(active_node(), items[0]) {
        prevent(event)
        focus_node(items[items.length() - 1])
      } else if !shift(event) &&
        same_node(active_node(), items[items.length() - 1]) {
        prevent(event)
        focus_node(items[0])
      }
    }
  }
  let cancel = (event : @js.Any) => {
    invoke(mounted.props._get("panelCallbacks"), "onEscapeKeyDown", event)
    if !prevented(event) {
      change_panel(panel, false)
    }
    prevent(event)
  }
  let outside = (event : @js.Any) => {
    let target = event_target(event)
    if panel.modal {
      if same_node(target, node) {
        let box = rect(node)
        let x = pointer_x(event)
        let y = pointer_y(event)
        if x < box.x ||
          y < box.y ||
          x > box.x + box.width ||
          y > box.y + box.height {
          change_panel(panel, false)
        }
      }
    } else if !contains(node, target) &&
      !(panel.trigger.current is Some(trigger) && contains(trigger, target)) {
      change_panel(panel, false)
    }
  }
  let document = as_node(@dom.document())
  add_listener(node, "keydown", keydown, false)
  if panel.modal {
    add_listener(node, "cancel", cancel, false)
  }
  add_listener(document, "pointerdown", outside, false)
  after_render(() => {
    if !mounted.scope.alive {
      return
    }
    if panel.modal {
      show_modal(node)
    } else if panel.trigger.current is Some(trigger) {
      let anchor = rect(trigger)
      let box = rect(node)
      let width = @dom.window().innerWidth().to_double()
      style_property(node, "position", "fixed")
      style_property(node, "z-index", "80")
      style_property(
        node,
        "left",
        "\{(anchor.x+anchor.width-box.width).max(24.0).min(width-box.width-24.0)}px",
      )
      style_property(node, "top", "\{(anchor.y-box.height-14.0).max(24.0)}px")
    }
    let event = custom_event("openautofocus")
    invoke(mounted.props._get("panelCallbacks"), "onOpenAutoFocus", event)
    if !prevented(event) {
      let items = focusable(node)
      focus_node(items.get(0).unwrap_or(node))
    }
  })
  mounted.cleanup = () => {
    remove_listener(node, "keydown", keydown, false)
    if panel.modal {
      remove_listener(node, "cancel", cancel, false)
    }
    remove_listener(document, "pointerdown", outside, false)
    if panel.modal {
      close_modal(node)
    }
    let event = custom_event("closeautofocus")
    invoke(mounted.props._get("panelCallbacks"), "onCloseAutoFocus", event)
    if !prevented(event) {
      let target = panel.trigger.current.unwrap_or(previous)
      queue(() => if connected(target) { focus_node(target) })
    }
  }
}
