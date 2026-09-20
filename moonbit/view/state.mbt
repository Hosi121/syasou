///|
pub(all) struct ViewRef[T] {
  mut current : T?
  host : @js.Any
}

///|
pub fn[T] ViewRef::get_current(self : ViewRef[T]) -> T? {
  self.current
}

///|
pub fn[T] ViewRef::set_current(self : ViewRef[T], value : T?) -> Unit {
  self.current = value
}

///|
priv struct Slot {
  mut value : @js.Box[Unit]
  mut deps : Array[Dependency]
  mut cleanup : () -> Unit
  mut generation : Int
}

///|
priv struct Scope {
  slots : Array[Slot]
  mut cursor : Int
  mut alive : Bool
}

///|
priv struct Runtime {
  mut scope : Scope?
  mut schedule : () -> Unit
  effects : Array[() -> Unit]
  mut serial : Int
}

///|
// One Wasm instance owns both the entrance and the world.
let runtime : Runtime = {
  scope: None,
  schedule: () => (),
  effects: [],
  serial: 0,
}

///|
pub struct Dependency {
  value : @js.Box[Unit]
  same : (@js.Box[Unit]) -> Bool
}

///|
pub fn[T : @js.Same] dependency(value : T) -> Dependency {
  { value: @js.box(value), same: other => value.same((@js.unbox(other) : T)), }
}

///|

///|
#cfg(target="js")
extern "js" fn identical(a : @js.Any, b : @js.Any) -> Bool = "Object" "is"

///|
fn same_deps(a : Array[Dependency], b : Array[Dependency]) -> Bool {
  a.length() == b.length() &&
  a.iter().zip(b.iter()).all(pair => (pair.0.same)(pair.1.value))
}

///|
fn slot(initialize : () -> @js.Box[Unit]) -> (Slot, Bool) {
  let scope = runtime.scope.unwrap()
  let index = scope.cursor
  scope.cursor += 1
  let fresh = index == scope.slots.length()
  if fresh {
    scope.slots.push({
      value: initialize(),
      deps: [],
      cleanup: () => (),
      generation: 0,
    })
  }
  (scope.slots[index], fresh)
}

///|

///|
pub fn[T : @js.Same] use_state_lazy_update(
  initialize : () -> T,
) -> (T, (T) -> Unit, ((T) -> T) -> Unit) {
  let scope = runtime.scope.unwrap()
  let (cell, _) = slot(() => @js.box(initialize()))
  let (setter, _) = slot(() => {
    let set = (value : T) => {
      if scope.alive && !value.same((@js.unbox(cell.value) : T)) {
        cell.value = @js.box(value)
        (runtime.schedule)()
      }
    }
    @js.box(set)
  })
  let set : (T) -> Unit = @js.unbox(setter.value)
  let (updater, _) = slot(() => {
    @js.box((transform : (T) -> T) => set(transform(@js.unbox(cell.value))))
  })
  (@js.unbox(cell.value), set, @js.unbox(updater.value))
}

///|
pub fn[T : @js.Same] use_state(value : T) -> (T, (T) -> Unit) {
  use_state_lazy(() => value)
}

///|
pub fn[T : @js.Same] use_state_lazy(initialize : () -> T) -> (T, (T) -> Unit) {
  let (value, set, _) = use_state_lazy_update(initialize)
  (value, set)
}

///|
pub fn[T : @js.Same] use_state_update(
  value : T,
) -> (T, (T) -> Unit, ((T) -> T) -> Unit) {
  use_state_lazy_update(() => value)
}

///|
pub fn[T] use_ref(initial : T?) -> ViewRef[T] {
  @js.unbox(slot(() => @js.box(new_ref(initial))).0.value)
}

///|
pub fn[T] use_callback(callback : T, deps : Array[Dependency]) -> T {
  let (cell, fresh) = slot(() => @js.box(callback))
  if fresh || !same_deps(cell.deps, deps) {
    cell.value = @js.box(callback)
    cell.deps = deps
  }
  @js.unbox(cell.value)
}

///|
pub fn use_effect(run : () -> () -> Unit, deps : Array[Dependency]) -> Unit {
  let scope = runtime.scope.unwrap()
  let (cell, fresh) = slot(() => @js.box(()))
  if fresh || !same_deps(cell.deps, deps) {
    cell.deps = deps
    cell.generation += 1
    let generation = cell.generation
    runtime.effects.push(() => {
      if scope.alive && cell.generation == generation {
        (cell.cleanup)()
        cell.cleanup = run()
      }
    })
  }
}

///|
pub fn[T] use_imperative_handle(
  reference : ViewRef[T],
  make : () -> T,
  deps : Array[Dependency],
) -> Unit {
  use_effect(
    () => {
      reference.current = Some(make())
      () => reference.current = None
    },
    deps,
  )
}

///|
pub fn[T : @js.Same] use_sync_external_store(
  subscribe : (() -> Unit) -> () -> Unit,
  snapshot : () -> T,
) -> T {
  let (value, set) = use_state_lazy(snapshot)
  use_effect(
    () => {
      let check = () => set(snapshot())
      let cleanup = subscribe(check)
      check()
      cleanup
    },
    [reference_dependency(subscribe)],
  )
  value
}

///|
// A Unit callback catches host throws without exposing MoonBit trees in FFI.
#cfg(target="js")
extern "js" fn render_finally(run : () -> Unit, cleanup : () -> Unit) -> Unit =
  #| (run,cleanup) => {try {run()} finally {cleanup()}}

///|
fn run_in_scope(scope : Scope, run : () -> Element) -> Element {
  let previous = runtime.scope
  runtime.scope = Some(scope)
  scope.cursor = 0
  let result : Ref[Element?] = Ref(None)
  render_finally(() => result.val = Some(run()), () => runtime.scope = previous)
  result.val.unwrap()
}

///|
fn dispose_scope(scope : Scope) -> Unit {
  scope.alive = false
  for cell in scope.slots {
    (cell.cleanup)()
    cell.cleanup = () => ()
  }
}

///|
fn flush_effects() -> Unit {
  let pending = runtime.effects.copy()
  runtime.effects.clear()
  for run in pending {
    run()
  }
}

///|
pub fn after_render(run : () -> Unit) -> Unit {
  runtime.effects.push(run)
}

///|
fn[T] new_ref(initial : T?) -> ViewRef[T] {
  { current: initial, host: @js.new_object(), }
}

// Only DOM refs are exported. Other hook references remain entirely in MoonBit.

///|
pub impl[T : @js.FromJs] @js.ToJs for ViewRef[T] with fn to_js(self) {
  self.host._set(
    "_assign",
    @js.from_fn1((value : @js.Any) => {
      self.current = if @js.is_undefined(value) {
        None
      } else {
        Some(value.cast())
      }
    }),
  )
  self.host
}

// For MoonBit reference values, notably closures; never use for external refs.

///|
pub fn[T] reference_dependency(value : T) -> Dependency {
  {
    value: @js.box(value),
    same: other => physical_equal(value, (@js.unbox(other) : T)),
  }
}
