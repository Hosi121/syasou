///|
// JS values are confined to the React/DOM adapter. Components use typed props,
// hooks and elements; this wrapper only constructs React property dictionaries.
#external
pub type PropertyValue

///|
fn[T] p(name : String, value : T) -> (String, PropertyValue) {
  (name, @js.any(value).cast())
}

///|
fn properties(values : Array[(String, PropertyValue)]) -> @js.Any {
  let out = @js.new_object()
  for (key, value) in values {
    out._set(key, @js.any(value))
  }
  out
}

///|
fn styles(values : Array[(String, PropertyValue)]) -> PropertyValue {
  properties(values).cast()
}

///|
fn absent() -> PropertyValue {
  @js.undefined().cast()
}

///|
fn boolean_property(value : Bool) -> PropertyValue {
  @js.any(value).cast()
}

///|
fn empty() -> @react.Element {
  @js.null().cast()
}

///|
fn text(value : String) -> @react.Element {
  @js.any(value).cast()
}

///|
fn node(
  tag : String,
  attrs : Array[(String, PropertyValue)],
  children : Array[@react.Element],
) -> @react.Element {
  make_node(@js.any(tag), attrs, children)
}

///|
fn make_node(
  tag : @js.Any,
  attrs : Array[(String, PropertyValue)],
  children : Array[@react.Element],
) -> @react.Element {
  let props = properties(attrs)
  let key : String? = if @js.is_undefined(props._get("key")) {
    None
  } else {
    Some(props._get("key").to_string())
  }
  let props = if key is Some(_) {
    properties(attrs.filter(pair => pair.0 != "key"))
  } else {
    props
  }
  if children.length() == 1 {
    props._set("children", children[0].as_any())
  } else if children.length() > 1 {
    props._set("children", @js.any(children))
  }
  @react.createElementWithKey(tag, props, key, children_count=children.length())
}

///|
fn group(children : Array[@react.Element]) -> @react.Element {
  @react.fragment(children.map(e => e as &@react.ReactNode))
}

///|
fn[T] component(
  render : (T) -> @react.Element,
  props : T,
  key? : String,
) -> @react.Element {
  @react.component(render, props, key?)
}

///|
fn[T] d(value : T) -> @js.Any {
  @js.any(value)
}

///|
fn effect(run : () -> () -> Unit, deps : Array[@js.Any]) -> Unit {
  @react.use_effect(run, deps)
}

///|
fn observe(run : () -> Unit, deps : Array[@js.Any]) -> Unit {
  @react.use_effect(
    () => {
      run()
      () => ()
    },
    deps,
  )
}

///|
extern "js" fn update_raw(setter : @js.Any, transform : @js.Any) -> Unit =
  #| (set, transform) => set(transform)

///|
fn[T] update(setter : (T) -> Unit, transform : (T) -> T) -> Unit {
  update_raw(@js.any(setter), @js.any(transform))
}

///|
extern "js" fn truthy(value : @js.Any) -> Bool =
  #| value => Boolean(value)

///|
// The upstream React binding cannot yet import component values (forwardRef
// objects, Motion's proxy or React.Component). Load those values as module
// objects, retaining their identity rather than wrapping them as functions.
extern "js" fn load_components() -> @js.Promise[@js.Any] =
  #| async () => {
  #|   const [react, motion, dialog, popover, toggle, icons] = await Promise.all([
  #|     import('react'), import('motion/react'), import('@radix-ui/react-dialog'),
  #|     import('@radix-ui/react-popover'), import('@radix-ui/react-toggle-group'),
  #|     import('lucide-react').then(({ArrowLeft, ArrowRight, BookOpen, Maximize, Minimize, NotebookPen, Check, PanelsTopLeft, RotateCcw, X, Pause, Play, Settings2, Square, Tickets, Volume2, VolumeX, CloudFog, CloudRain, Eye, EyeOff, Moon, Sun, TrainFront, Wind}) => ({ArrowLeft, ArrowRight, BookOpen, Maximize, Minimize, NotebookPen, Check, PanelsTopLeft, RotateCcw, X, Pause, Play, Settings2, Square, Tickets, Volume2, VolumeX, CloudFog, CloudRain, Eye, EyeOff, Moon, Sun, TrainFront, Wind}))
  #|   ]);
  #|   return {react, motion, dialog, popover, toggle, icons};
  #| }

///|
let components : Ref[@js.Any?] = Ref(None)

///|
pub fn prepare_ui() -> @js.Promise[Unit] {
  @js.promisify0(async fn() {
    if components.val is None {
      components.val = Some(load_components().wait())
    }
  })()
}

///|
fn foreign(
  library : String,
  name : String,
  attrs : Array[(String, PropertyValue)],
  children : Array[@react.Element],
) -> @react.Element {
  make_node(components.val.unwrap()._get(library)._get(name), attrs, children)
}

///|
fn motion_node(
  tag : String,
  attrs : Array[(String, PropertyValue)],
  children : Array[@react.Element],
) -> @react.Element {
  make_node(
    components.val.unwrap()._get("motion")._get("motion")._get(tag),
    attrs,
    children,
  )
}

///|
fn icon(
  name : String,
  size : Double,
  stroke_width : Double,
  hidden? : Bool = false,
) -> @react.Element {
  let attrs = [p("size", size), p("strokeWidth", stroke_width)]
  if hidden {
    attrs.push(p("aria-hidden", "true"))
  }
  foreign("icons", name, attrs, [])
}

///|
fn motion_or(value : MotionValue?, fallback : Double) -> PropertyValue {
  match value {
    Some(v) => @js.any(v).cast()
    None => @js.any(fallback).cast()
  }
}

///|
#external
priv type MotionValue

///|
#module("motion/react")
extern "js" fn use_motion_value(value : Double) -> MotionValue = "useMotionValue"

///|
#module("motion/react")
extern "js" fn use_spring_raw(
  value : @js.Any,
  options : @js.Any,
) -> MotionValue = "useSpring"

///|
fn[T] spring(
  value : T,
  options : Array[(String, PropertyValue)],
) -> MotionValue {
  use_spring_raw(@js.any(value), properties(options))
}

///|
#module("motion/react")
extern "js" fn use_transform(
  value : MotionValue,
  transform : (Double) -> Double,
) -> MotionValue = "useTransform"

///|
#module("motion/react")
extern "js" fn use_motion_event(
  value : MotionValue,
  name : String,
  listener : (Double) -> Unit,
) -> Unit = "useMotionValueEvent"

///|
#module("motion/react")
extern "js" fn reduced_motion_raw() -> @js.Any = "useReducedMotion"

///|
fn reduced_motion() -> Bool {
  truthy(reduced_motion_raw())
}

///|
extern "js" fn MotionValue::set(self : MotionValue, value : Double) -> Unit =
  #| (motion, value) => motion.set(value)

///|
extern "js" fn MotionValue::jump(self : MotionValue, value : Double) -> Unit =
  #| (motion, value) => motion.jump(value)
