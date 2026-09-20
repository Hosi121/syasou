///|
fn invoke(props : @js.Any, name : String, event : @js.Any) -> Unit {
  let callback = props._get(name)
  if kind(callback) == "function" {
    let call : (@js.Any) -> Unit = @js.to_fn1(callback)
    call(event)
  }
}

///|
fn event_name(name : String) -> (String, Bool) {
  let capture = name.has_suffix("Capture")
  let name = name.unsafe_substring(
    start=2,
    end=name.length() - (if capture { 7 } else { 0 }),
  )
  let lower = name.to_lower()
  (if lower == "change" { "input" } else { lower }, capture)
}

///|
fn attribute_name(name : String) -> String {
  match name {
    "className" => "class"
    "htmlFor" => "for"
    "tabIndex" => "tabindex"
    "maxLength" => "maxlength"
    "spellCheck" => "spellcheck"
    "strokeWidth" => "stroke-width"
    "strokeLinecap" => "stroke-linecap"
    "strokeLinejoin" => "stroke-linejoin"
    "fillRule" => "fill-rule"
    "clipRule" => "clip-rule"
    _ => name
  }
}

///|
fn reserved(name : String) -> Bool {
  [
    "key", "ref", "style", "initial", "animate", "exit", "transition", "whileHover",
    "onAnimationComplete", "panel", "panelCallbacks", "asChild",
  ].contains(name)
}

///|
fn update_props(mounted : Mounted, props : @js.Any, fresh : Bool) -> Unit {
  let old = mounted.props
  let element = as_element(mounted.first)
  for name in mounted.listeners.keys().to_array() {
    if kind(props._get(name)) != "function" {
      let (event, capture) = event_name(name)
      remove_listener(mounted.first, event, mounted.listeners[name], capture)
      mounted.listeners.remove(name)
    }
  }
  for name in keys(old) {
    if !name.has_prefix("on") &&
      !reserved(name) &&
      @js.is_nullish(props._get(name)) {
      element.removeAttribute(attribute_name(name))
    }
  }
  mounted.props = props
  for name in keys(props) {
    let value = props._get(name)
    if reserved(name) || @js.is_nullish(value) {
      continue
    }
    if name.has_prefix("on") {
      if kind(value) == "function" && !mounted.listeners.contains(name) {
        let (event, capture) = event_name(name)
        let listener = (event : @js.Any) => invoke(mounted.props, name, event)
        mounted.listeners.set(name, listener)
        add_listener(mounted.first, event, listener, capture)
      }
    } else if ["value", "checked", "disabled", "inert"].contains(name) {
      property(mounted.first, name, value)
      if name != "value" && kind(value) == "boolean" {
        if bool(value) {
          element.setAttribute(name, "")
        } else {
          element.removeAttribute(name)
        }
      }
    } else if kind(value) == "boolean" &&
      !name.has_prefix("aria-") &&
      !name.has_prefix("data-") &&
      name != "draggable" &&
      name != "spellCheck" {
      if bool(value) {
        element.setAttribute(attribute_name(name), "")
      } else {
        element.removeAttribute(attribute_name(name))
      }
    } else if !identical(old._get(name), value) {
      element.setAttribute(attribute_name(name), value.to_string())
    }
  }
  let reference = props._get("ref")
  if !@js.is_nullish(reference) {
    assign_ref(reference, @js.any(mounted.first))
  }
  motion_props(mounted, props, fresh)
}
