///|
fn escape_html(value : String) -> String {
  value
  .replace_all(old="&", new="&amp;")
  .replace_all(old="<", new="&lt;")
  .replace_all(old=">", new="&gt;")
  .replace_all(old="\"", new="&quot;")
  .replace_all(old="'", new="&#x27;")
}

///|
fn static_context(id : String) -> Mounted {
  let dummy : @dom.Node = @js.null().cast()
  {
    tree: Blank,
    parent: dummy,
    first: dummy,
    last: dummy,
    children: [],
    scope: new_scope(),
    props: @js.new_object(),
    listeners: Map([]),
    context: empty_context(),
    exiting: false,
    failed: false,
    style_names: [],
    cleanup: () => (),
    motion_cleanup: () => (),
    animation: None,
    target_style: "",
    id,
    panel: None,
    svg: false,
  }
}

///|
fn serialize(tree : Element, context : Context, out : StringBuilder) -> Unit {
  match tree {
    Blank => ()
    Text(value) => out.write_string(escape_html(value))
    Group(children) =>
      for child in children {
        serialize(child, context, out)
      }
    Portal(_) => ()
    Boundary(child, _) => serialize(child, context, out)
    Component(_, render, _) => {
      let scope = new_scope()
      serialize(run_in_scope(scope, render), context, out)
      scope.alive = false
    }
    Control(library, name, props, children) => {
      let (tree, context) = run_control(
        static_context("snapshot"),
        library,
        name,
        props,
        children,
        context,
      )
      serialize(tree, context, out)
    }
    Tag(tag, props, children) => {
      out.write_string("<" + tag)
      for name in keys(props) {
        let value = props._get(name)
        if reserved(name) ||
          name.has_prefix("on") ||
          @js.is_nullish(value) ||
          (name == "value" && tag == "textarea") {
          continue
        }
        let bool_attr = kind(value) == "boolean" &&
          !name.has_prefix("aria-") &&
          !name.has_prefix("data-") &&
          name != "draggable" &&
          name != "spellCheck"
        if bool_attr && !bool(value) {
          continue
        }
        out.write_string(
          " " +
          attribute_name(name) +
          "=\"" +
          (if bool_attr { "" } else { escape_html(value.to_string()) }) +
          "\"",
        )
      }
      let style = style_map(props._get("style"))
      let initial = props._get("initial")
      let animation = style_map(
        if kind(initial) == "object" && !@js.is_null(initial) {
          initial
        } else {
          props._get("animate")
        },
      )
      for name, value in animation {
        style.set(name, value)
      }
      if !style.is_empty() {
        out.write_string(
          " style=\"" + escape_html(style_signature(style)) + "\"",
        )
      }
      out.write_string(">")
      if !["input", "img", "br", "hr", "meta", "link"].contains(tag) {
        if tag == "textarea" && !@js.is_nullish(props._get("value")) {
          out.write_string(escape_html(props._get("value").to_string()))
        } else {
          for child in children {
            serialize(child, context, out)
          }
        }
        out.write_string("</" + tag + ">")
      }
    }
  }
}

///|
pub fn render_static(tree : Element) -> String {
  let previous = runtime.effects.copy()
  runtime.effects.clear()
  let out = StringBuilder()
  serialize(tree, empty_context(), out)
  runtime.effects.clear()
  for callback in previous {
    runtime.effects.push(callback)
  }
  out.to_string()
}
