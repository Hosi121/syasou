///|
test "functional updates compose before a render and setters stay stable" {
  let scope = new_scope()
  let saved : Ref[((Int) -> Unit)?] = Ref(None)
  let initializations = Ref(0)
  let seen = Ref(0)
  let render = () => {
    let (value, set) = use_state_lazy(() => {
      initializations.val += 1
      0
    })
    seen.val = value
    saved.val = Some(set)
    Blank
  }
  run_in_scope(scope, render) |> ignore
  let first = saved.val.unwrap()
  update(first, n => n + 1)
  update(first, n => n + 1)
  run_in_scope(scope, render) |> ignore
  assert_eq(seen.val, 2)
  assert_eq(initializations.val, 1)
  assert_true(identical(@js.any(first), @js.any(saved.val.unwrap())))
  dispose_scope(scope)
  first(99)
  let retained : Int = setter_slot(@js.any(first)).value.cast()
  assert_eq(retained, 2)
}

///|
test "effects clean up before replacement and on disposal" {
  let scope = new_scope()
  let dependency = Ref(1)
  let events : Array[Int] = []
  let render = () => {
    let current = dependency.val
    use_effect(
      () => {
        events.push(current)
        () => events.push(-current)
      },
      [@js.any(current)],
    )
    Blank
  }
  run_in_scope(scope, render) |> ignore
  assert_eq(events.length(), 0)
  flush_effects()
  run_in_scope(scope, render) |> ignore
  flush_effects()
  assert_eq(events.length(), 1)
  dependency.val = 2
  run_in_scope(scope, render) |> ignore
  flush_effects()
  dispose_scope(scope)
  assert_eq(events, [1, -1, 2, -2])
}

///|
test "superseded and disposed pending effects never run" {
  let scope = new_scope()
  let dependency = Ref(1)
  let events : Array[Int] = []
  let render = () => {
    let current = dependency.val
    use_effect(
      () => {
        events.push(current)
        () => ()
      },
      [@js.any(current)],
    )
    Blank
  }
  run_in_scope(scope, render) |> ignore
  dependency.val = 2
  run_in_scope(scope, render) |> ignore
  flush_effects()
  assert_eq(events, [2])
  dependency.val = 3
  run_in_scope(scope, render) |> ignore
  dispose_scope(scope)
  flush_effects()
  assert_eq(events, [2])
}

///|
test "nested components restore the parent hook scope" {
  let parent = new_scope()
  let child = new_scope()
  run_in_scope(parent, () => {
    use_state(1) |> ignore
    run_in_scope(child, () => {
      use_state(9) |> ignore
      Blank
    })
    |> ignore
    use_state(2) |> ignore
    Blank
  })
  |> ignore
  assert_eq(parent.slots.length(), 4)
  assert_eq(child.slots.length(), 2)
  assert_true(runtime.scope is None)
}

///|
test "opaque DOM refs preserve boxed options and clear only the removed node" {
  let reference : ViewRef[@dom.Element] = new_ref(None)
  let old = @js.new_object()
  let next = @js.new_object()
  assign_ref(@js.any(reference), old)
  assert_true(identical(@js.any(reference.get_current().unwrap()), old))
  assign_ref(@js.any(reference), next)
  clear_ref(@js.any(reference), old.cast())
  assert_true(identical(@js.any(reference.get_current().unwrap()), next))
  clear_ref(@js.any(reference), next.cast())
  assert_true(reference.get_current() is None)
}

///|
test "reconciliation reuses equal keyed tags and rejects changed identity" {
  let props = dictionary([("key", @js.any("a"))])
  assert_true(compatible(Tag("input", props, []), Tag("input", props, [])))
  assert_false(compatible(Tag("input", props, []), Tag("textarea", props, [])))
  assert_false(
    compatible(
      Tag("input", props, []),
      Tag("input", dictionary([("key", @js.any("b"))]), []),
    ),
  )
}

///|
extern "js" fn fail_render() -> Element =
  #| () => {throw new Error('render failed')}

///|
test "host rendering failures restore hook scope before recovery" {
  let scope = new_scope()
  let caught = Ref(false)
  attempt(() => run_in_scope(scope, fail_render) |> ignore, () => {
    caught.val = true
  })
  assert_true(caught.val)
  assert_true(runtime.scope is None)
  let next = new_scope()
  run_in_scope(next, () => {
    use_state(1) |> ignore
    Blank
  })
  |> ignore
  assert_eq(next.slots.length(), 2)
}
