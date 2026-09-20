///|
pub struct MotionValue {
  motion_tag : String
  mut value : Double
  mut target : Double
  mut velocity : Double
  stiffness : Double
  damping : Double
  mass : Double
  spring : Bool
  listeners : Map[Int, (Double) -> Unit]
  mut serial : Int
  mut frame : Int?
  mut last_time : Double
}

///|
fn motion_value(
  value : Double,
  spring : Bool,
  options : @js.Any,
) -> MotionValue {
  {
    motion_tag: "syasou-motion",
    value,
    target: value,
    velocity: 0.0,
    stiffness: number_option(options, "stiffness", 100.0),
    damping: number_option(options, "damping", 10.0),
    mass: number_option(options, "mass", 1.0),
    spring,
    listeners: Map([]),
    serial: 0,
    frame: None,
    last_time: 0.0,
  }
}

///|
fn number_option(props : @js.Any, name : String, fallback : Double) -> Double {
  let value = props._get(name)
  if kind(value) == "number" {
    value.cast()
  } else {
    fallback
  }
}

///|
fn is_motion(value : @js.Any) -> Bool {
  kind(value) == "object" &&
  !@js.is_null(value) &&
  value._get("motion_tag").to_string() == "syasou-motion"
}

///|
fn emit(value : MotionValue) -> Unit {
  for listener in value.listeners.values().to_array() {
    listener(value.value)
  }
}

///|
fn stop_motion(value : MotionValue) -> Unit {
  if value.frame is Some(id) {
    @dom.window().cancelAnimationFrame(id)
    value.frame = None
  }
}

///|
pub fn MotionValue::jump(self : MotionValue, value : Double) -> Unit {
  stop_motion(self)
  self.target = value
  self.value = value
  self.velocity = 0.0
  emit(self)
}

///|
fn step_motion(value : MotionValue, time : Double) -> Unit {
  value.frame = None
  let elapsed = if value.last_time == 0.0 {
    1.0 / 60.0
  } else {
    ((time - value.last_time) / 1000.0).min(0.064)
  }
  value.last_time = time
  // Substeps keep stiff ticket springs stable after a delayed browser frame.
  let steps = @math.ceil(elapsed / 0.004).to_int().max(1)
  let dt = elapsed / steps.to_double()
  for _ in 0..<steps {
    let acceleration = (
        -value.stiffness * (value.value - value.target) -
        value.damping * value.velocity
      ) /
      value.mass
    value.velocity += acceleration * dt
    value.value += value.velocity * dt
  }
  if (value.value - value.target).abs() < 0.005 && value.velocity.abs() < 0.01 {
    value.value = value.target
    value.velocity = 0.0
    value.last_time = 0.0
  } else {
    value.frame = Some(
      @dom.window().requestAnimationFrame(time => step_motion(value, time)),
    )
  }
  emit(value)
}

///|
pub fn MotionValue::set(self : MotionValue, value : Double) -> Unit {
  if !self.spring {
    self.jump(value)
    return
  }
  self.target = value
  if self.frame is None && self.value != value {
    self.last_time = 0.0
    self.frame = Some(
      @dom.window().requestAnimationFrame(time => step_motion(self, time)),
    )
  }
}

///|
fn subscribe_motion(
  value : MotionValue,
  listener : (Double) -> Unit,
) -> () -> Unit {
  value.serial += 1
  let id = value.serial
  value.listeners.set(id, listener)
  () => value.listeners.remove(id)
}

///|
pub fn use_motion_value(initial : Double) -> MotionValue {
  let (value, _) = use_state_lazy(() => {
    motion_value(initial, false, @js.new_object())
  })
  value
}

///|
pub fn use_spring(input : @js.Any, options : @js.Any) -> MotionValue {
  let source : MotionValue? = if is_motion(input) {
    Some(input.cast())
  } else {
    None
  }
  let initial = match source {
    Some(value) => value.value
    None => input.cast()
  }
  let (value, _) = use_state_lazy(() => motion_value(initial, true, options))
  use_effect(
    () => {
      let unsubscribe = match source {
        Some(source) => subscribe_motion(source, next => value.set(next))
        None => () => ()
      }
      () => {
        unsubscribe()
        stop_motion(value)
      }
    },
    [],
  )
  value
}

///|
pub fn use_transform(
  source : MotionValue,
  transform : (Double) -> Double,
) -> MotionValue {
  let output = use_motion_value(transform(source.value))
  use_effect(
    () => subscribe_motion(source, value => output.jump(transform(value))),
    [@js.any(source)],
  )
  output
}

///|
pub fn use_motion_event(
  source : MotionValue,
  _name : String,
  listener : (Double) -> Unit,
) -> Unit {
  use_effect(() => subscribe_motion(source, listener), [
    @js.any(source),
    @js.any(listener),
  ])
}

///|
fn css_name(name : String) -> String {
  let out = StringBuilder()
  for c in name {
    if c >= 'A' && c <= 'Z' {
      out.write_char('-')
      out.write_char((c.to_int() + 32).unsafe_to_char())
    } else {
      out.write_char(c)
    }
  }
  out.to_string()
}

///|
fn scalar(value : @js.Any) -> @js.Any {
  if is_motion(value) {
    let motion : MotionValue = value.cast()
    @js.any(motion.value)
  } else {
    value
  }
}

///|
fn css_value(name : String, value : @js.Any) -> String {
  let value = scalar(value)
  let unitless = [
    "opacity", "zIndex", "fontWeight", "lineHeight", "flex", "flexGrow", "flexShrink",
    "order", "scale",
  ]
  if kind(value) == "number" &&
    !unitless.contains(name) &&
    !name.has_prefix("--") {
    value.to_string() + "px"
  } else {
    value.to_string()
  }
}

///|
fn transform_value(name : String, value : @js.Any) -> String {
  let value = scalar(value)
  let number = kind(value) == "number"
  let unit = if name.has_prefix("rotate") || name.has_prefix("skew") {
    "deg"
  } else if name.has_prefix("scale") {
    ""
  } else {
    "px"
  }
  value.to_string() + (if number { unit } else { "" })
}

///|
fn style_map(style : @js.Any) -> Map[String, String] {
  let out = Map([])
  if @js.is_nullish(style) || kind(style) != "object" {
    return out
  }
  let transforms = [
    "x", "y", "z", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ",
    "skewX", "skewY",
  ]
  let parts : Array[String] = []
  for name in keys(style) {
    let value = style._get(name)
    if @js.is_nullish(value) {
      continue
    }
    if !transforms.contains(name) {
      out.set(css_name(name), css_value(name, value))
    }
  }
  for name in transforms {
    let value = style._get(name)
    if @js.is_nullish(value) {
      continue
    }
    let function_name = match name {
      "x" => "translateX"
      "y" => "translateY"
      "z" => "translateZ"
      _ => name
    }
    parts.push(function_name + "(" + transform_value(name, value) + ")")
  }
  if !parts.is_empty() {
    out.set("transform", parts.join(" "))
  }
  out
}

///|
fn style_signature(style : Map[String, String]) -> String {
  let names = style.keys().to_array()
  names.sort()
  names.map(name => name + ":" + style[name]).join(";")
}

///|
fn apply_style(node : @dom.Node, style : Map[String, String]) -> Unit {
  for name, value in style {
    style_property(node, name, value)
  }
}

///|
fn map_object(style : Map[String, String]) -> @js.Any {
  let out = @js.new_object()
  for name, value in style {
    out._set(name, @js.any(value))
  }
  out
}

///|
#external
priv type Animation

///|
extern "js" fn animate(
  node : @dom.Node,
  from : @js.Any,
  to : @js.Any,
  duration : Double,
  delay : Double,
  easing : String,
  done : () -> Unit,
) -> Animation =
  #| (node,from,to,duration,delay,easing,done) => {const a=node.animate([from,to],{duration,delay,easing,fill:'backwards'});a.onfinish=done;return a}

///|
extern "js" fn Animation::cancel(self : Animation) -> Unit =
  #| animation => animation.cancel()

///|
extern "js" fn current_style(
  node : @dom.Node,
  names : FixedArray[String],
) -> @js.Any =
  #| (node,names) => {const style=getComputedStyle(node);return Object.fromEntries(names.map(name=>[name,style.getPropertyValue(name)]))}

///|
fn motion_props(mounted : Mounted, props : @js.Any, fresh : Bool) -> Unit {
  (mounted.motion_cleanup)()
  let base = props._get("style")
  let initial = props._get("initial")
  let target = props._get("animate")
  let target_map = style_map(target)
  let signature = style_signature(target_map)
  let base_map = style_map(base)
  let names = base_map.keys().to_array()
  for name in target_map.keys() {
    if !names.contains(name) {
      names.push(name)
    }
  }
  for name in mounted.style_names {
    if !names.contains(name) {
      remove_style(mounted.first, name)
    }
  }
  mounted.style_names = names
  let write_base = () => apply_style(mounted.first, style_map(base))
  write_base()
  let subscriptions : Array[() -> Unit] = []
  if kind(base) == "object" && !@js.is_null(base) {
    for name in keys(base) {
      let value = base._get(name)
      if is_motion(value) {
        subscriptions.push(subscribe_motion(value.cast(), _ => write_base()))
      }
    }
  }
  mounted.motion_cleanup = () => {
    for cancel in subscriptions {
      cancel()
    }
  }
  if signature == mounted.target_style && !fresh {
    return
  }
  mounted.target_style = signature
  if target_map.is_empty() {
    return
  }
  let from = if fresh {
    let start = style_map(initial)
    for name, value in base_map {
      if !start.contains(name) {
        start.set(name, value)
      }
    }
    map_object(start)
  } else {
    current_style(mounted.first, [ for name in target_map.keys() => name ])
  }
  if mounted.animation is Some(animation) {
    animation.cancel()
    mounted.animation = None
  }
  apply_style(mounted.first, target_map)
  let transition = props._get("transition")
  let transition = if @js.is_nullish(transition) {
    @js.new_object()
  } else {
    transition
  }
  let duration = number_option(transition, "duration", 0.3) * 1000.0
  let delay = number_option(transition, "delay", 0.0) * 1000.0
  let easing = match transition._get("ease").to_string() {
    "easeInOut" => "ease-in-out"
    "easeOut" => "ease-out"
    _ => "ease"
  }
  let complete = () => {
    if mounted.scope.alive {
      invoke(mounted.props, "onAnimationComplete", @js.undefined())
    }
  }
  let initial_false = kind(initial) == "boolean" && !bool(initial)
  if duration <= 0.0 || (fresh && (initial_false || @js.is_nullish(initial))) {
    after_render(complete)
  } else {
    mounted.animation = Some(
      animate(
        mounted.first,
        from,
        map_object(target_map),
        duration,
        delay,
        easing,
        complete,
      ),
    )
  }
}
