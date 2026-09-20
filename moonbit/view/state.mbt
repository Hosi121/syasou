///|
pub(all) struct ViewRef[T] {
  mut current : T?
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
  mut value : @js.Any
  mut deps : Array[@js.Any]
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
// The lazy world and entrance are separately compiled modules. They share the
// same app-owned scheduler; no framework or application code lives in this FFI.
extern "js" fn shared_runtime(initial : Runtime) -> Runtime =
  #| initial => globalThis[Symbol.for('syasou.view.runtime')] ??= initial

///|
let runtime : Runtime = shared_runtime({
  scope: None,
  schedule: () => (),
  effects: [],
  serial: 0,
})

///|
extern "js" fn identical(a : @js.Any, b : @js.Any) -> Bool = "Object" "is"

///|
fn same_deps(a : Array[@js.Any], b : Array[@js.Any]) -> Bool {
  a.length() == b.length() &&
  a.iter().zip(b.iter()).all(pair => identical(pair.0, pair.1))
}

///|
fn slot(initialize : () -> @js.Any) -> (Slot, Bool) {
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
extern "js" fn attach_setter(setter : @js.Any, slot : Slot) -> Unit =
  #| (setter,slot) => {setter[Symbol.for('syasou.view.state')]=slot}

///|
extern "js" fn setter_slot(setter : @js.Any) -> Slot =
  #| setter => setter[Symbol.for('syasou.view.state')]

///|
pub fn[T] use_state_lazy(initialize : () -> T) -> (T, (T) -> Unit) {
  let scope = runtime.scope.unwrap()
  let (cell, _) = slot(() => @js.any(initialize()))
  let (setter, _) = slot(() => {
    let set = (value : T) => {
      if scope.alive && !identical(cell.value, @js.any(value)) {
        cell.value = @js.any(value)
        (runtime.schedule)()
      }
    }
    attach_setter(@js.any(set), cell)
    @js.any(set)
  })
  (cell.value.cast(), setter.value.cast())
}

///|
pub fn[T] use_state(value : T) -> (T, (T) -> Unit) {
  use_state_lazy(() => value)
}

///|
pub fn[T] update(setter : (T) -> Unit, transform : (T) -> T) -> Unit {
  setter(transform(setter_slot(@js.any(setter)).value.cast()))
}

///|
pub fn[T] use_ref(initial : T?) -> ViewRef[T] {
  slot(() => @js.any(new_ref(initial))).0.value.cast()
}

///|
pub fn[T] use_callback(callback : T, deps : Array[@js.Any]) -> T {
  let (cell, fresh) = slot(() => @js.any(callback))
  if fresh || !same_deps(cell.deps, deps) {
    cell.value = @js.any(callback)
    cell.deps = deps
  }
  cell.value.cast()
}

///|
pub fn use_effect(run : () -> () -> Unit, deps : Array[@js.Any]) -> Unit {
  let scope = runtime.scope.unwrap()
  let (cell, fresh) = slot(@js.undefined)
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
  deps : Array[@js.Any],
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
pub fn[T] use_sync_external_store(
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
    [@js.any(subscribe)],
  )
  value
}

///|
// MoonBit's non-raising defer does not catch host JS exceptions.
extern "js" fn render_finally(
  run : () -> Element,
  cleanup : () -> Unit,
) -> Element =
  #| (run,cleanup) => {try {return run()} finally {cleanup()}}

///|
fn run_in_scope(scope : Scope, run : () -> Element) -> Element {
  let previous = runtime.scope
  runtime.scope = Some(scope)
  scope.cursor = 0
  render_finally(run, () => runtime.scope = previous)
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
extern "js" fn register_ref(
  reference : @js.Any,
  assign : (@js.Any) -> Unit,
) -> Unit =
  #| (reference,assign) => {reference._assign=assign}

///|
fn[T] new_ref(initial : T?) -> ViewRef[T] {
  let reference = ViewRef::{ current: initial, }
  register_ref(@js.any(reference), value => {
    reference.current = if @js.is_undefined(value) {
      None
    } else {
      Some(value.cast())
    }
  })
  reference
}
