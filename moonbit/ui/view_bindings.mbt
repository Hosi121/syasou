///|
// The DOM adapter builds property dictionaries; screen logic stays typed.
#external
pub type PropertyValue

///|
fn[T : @js.ToJs] p(name : String, value : T) -> (String, PropertyValue) {
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
fn empty() -> @view.Element {
  @view.Blank
}

///|
fn text(value : String) -> @view.Element {
  @view.Text(value)
}

///|
fn node(
  tag : String,
  attrs : Array[(String, PropertyValue)],
  children : Array[@view.Element],
) -> @view.Element {
  @view.element(tag, properties(attrs), children)
}

///|
fn group(children : Array[@view.Element]) -> @view.Element {
  @view.fragment(children)
}

///|
fn[T] component(
  identity : String,
  render : (T) -> @view.Element,
  props : T,
  key? : String,
) -> @view.Element {
  @view.component(identity, render, props, key?)
}

///|
fn[T : @js.Same] d(value : T) -> @view.Dependency {
  @view.dependency(value)
}

///|
fn effect(run : () -> () -> Unit, deps : Array[@view.Dependency]) -> Unit {
  @view.use_effect(run, deps)
}

///|
fn observe(run : () -> Unit, deps : Array[@view.Dependency]) -> Unit {
  effect(
    () => {
      run()
      () => ()
    },
    deps,
  )
}

///|
pub fn prepare_ui() -> @js.Promise[Unit] {
  @js.Promise::resolve(())
}

///|
fn foreign(
  library : String,
  name : String,
  attrs : Array[(String, PropertyValue)],
  children : Array[@view.Element],
) -> @view.Element {
  @view.control(library, name, properties(attrs), children)
}

///|
fn motion_node(
  tag : String,
  attrs : Array[(String, PropertyValue)],
  children : Array[@view.Element],
) -> @view.Element {
  node(tag, attrs, children)
}

///|
type MotionValue = @view.MotionValue

///|
fn motion_or(value : MotionValue?, fallback : Double) -> PropertyValue {
  match value {
    Some(v) => @js.any(v).cast()
    None => @js.any(fallback).cast()
  }
}

///|
fn use_motion_value(value : Double) -> MotionValue {
  @view.use_motion_value(value)
}

///|
fn[T : @js.ToJs] spring(
  value : T,
  options : Array[(String, PropertyValue)],
) -> MotionValue {
  @view.use_spring(@js.any(value), properties(options))
}

///|
fn use_transform(
  value : MotionValue,
  transform : (Double) -> Double,
) -> MotionValue {
  @view.use_transform(value, transform)
}

///|
fn use_motion_event(
  value : MotionValue,
  name : String,
  listener : (Double) -> Unit,
) -> Unit {
  @view.use_motion_event(value, name, listener)
}

///|
fn reduced_motion() -> Bool {
  use_media("(prefers-reduced-motion: reduce)")
}

///|
fn p0(name : String, callback : () -> Unit) -> (String, PropertyValue) {
  p(name, @js.from_fn0(callback))
}

///|
fn[T : @js.FromJs] p1(
  name : String,
  callback : (T) -> Unit,
) -> (String, PropertyValue) {
  p(name, @js.from_fn1(callback))
}
