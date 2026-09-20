///|
priv struct TicketHandle {
  cancel : () -> Bool
}

///|
priv struct PointerGrip {
  mut grip : @domain.TicketGrip
  pointer : Int
  node : PointerNode
}

///|
priv struct TouchableProps {
  handle : @view.ViewRef[TicketHandle]
  ticket : @domain.Ticket
  back : Bool
  disabled : Bool
  on_back : (Bool) -> Unit
  on_touch : () -> Unit
  on_edit : (String, String?, String?) -> Unit
}

///|
fn touchable_ticket(props : TouchableProps) -> @view.Element {
  component("render_touchable", render_touchable, props)
}

///|
fn render_touchable(props : TouchableProps) -> @view.Element {
  let reduced = use_media("(prefers-reduced-motion: reduce)")
  let grip : @view.ViewRef[PointerGrip] = @view.use_ref(None)
  let resting = @view.use_ref(Some(if props.back { 180.0 } else { 0.0 }))
  let (held, set_held) = @view.use_state(false)
  let (back, _, update_back) = @view.use_state_update(props.back)
  let follow = [p("stiffness", 340.0), p("damping", 32.0), p("mass", 0.65)]
  let angle = spring(resting.get_current().unwrap(), follow)
  let x = spring(0.0, follow)
  let y = spring(0.0, follow)
  let z = spring(0.0, follow)
  let tilt = spring(0.0, follow)
  let roll = spring(0.0, follow)
  let shine_x = spring(0.0, follow)
  let shine_opacity = spring(0.12, follow)
  let shadow_y = spring(7.0, follow)
  let shadow_opacity = spring(0.28, follow)
  let shadow_x = use_transform(x, v => v * 0.6)
  let shadow_width = use_transform(angle, @domain.ticket_shadow_width)
  use_motion_event(angle, "change", v => {
    update_back(current => {
      if @domain.ticket_is_back(v) == current {
        current
      } else {
        !current
      }
    })
  })
  let put_down = @view.use_callback(
    () => {
      x.set(0.0)
      y.set(0.0)
      z.set(0.0)
      tilt.set(0.0)
      roll.set(0.0)
      shine_x.set(0.0)
      shine_opacity.set(0.12)
      shadow_y.set(7.0)
      shadow_opacity.set(0.28)
    },
    [
      d(x),
      d(y),
      d(z),
      d(tilt),
      d(roll),
      d(shine_x),
      d(shine_opacity),
      d(shadow_y),
      d(shadow_opacity),
    ],
  )
  let release = @view.use_callback(
    (complete : Bool) => {
      guard grip.get_current() is Some(current) else { return false }
      let released = @domain.release_ticket(current.grip, complete)
      resting.set_current(Some(released.angle))
      grip.set_current(None)
      set_held(false)
      if current.node.captured(current.pointer) {
        current.node.release(current.pointer)
      }
      if reduced {
        angle.jump(released.angle)
      } else {
        angle.set(released.angle)
      }
      put_down()
      (props.on_back)(released.back)
      true
    },
    [
      d(angle),
      @view.reference_dependency(props.on_back),
      @view.reference_dependency(put_down),
      d(reduced),
    ],
  )
  @view.use_imperative_handle(
    props.handle,
    () => { cancel: () => release(false), },
    [@view.reference_dependency(release)],
  )
  observe(
    () => {
      if grip.get_current() is Some(_) {
        return
      }
      let next = @domain.ticket_resting_angle(
        resting.get_current().unwrap(),
        props.back,
      )
      resting.set_current(Some(next))
      if reduced {
        angle.jump(next)
      } else {
        angle.set(next)
      }
    },
    [d(props.back), d(reduced), d(angle)],
  )
  effect(
    () => {
      let cancel = () => release(false) |> ignore
      let blur = on_window("blur", cancel)
      let resize = on_window("resize", cancel)
      let visibility = on_document("visibilitychange", () => {
        if hidden() {
          cancel()
        }
      })
      () => {
        blur()
        resize()
        visibility()
      }
    },
    [@view.reference_dependency(release)],
  )
  observe(() => if props.disabled { release(false) |> ignore }, [
    d(props.disabled),
    @view.reference_dependency(release),
  ])
  observe(
    () => {
      if !reduced {
        return
      }
      release(false) |> ignore
      x.jump(0.0)
      y.jump(0.0)
      z.jump(0.0)
      tilt.jump(0.0)
      roll.jump(0.0)
      shine_x.jump(0.0)
      shine_opacity.jump(0.12)
      shadow_y.jump(7.0)
      shadow_opacity.jump(0.28)
    },
    [
      d(reduced),
      @view.reference_dependency(release),
      d(x),
      d(y),
      d(z),
      d(tilt),
      d(roll),
      d(shine_x),
      d(shine_opacity),
      d(shadow_y),
      d(shadow_opacity),
    ],
  )
  let down = (event : UiEvent) => {
    if props.disabled ||
      grip.get_current() is Some(_) ||
      !event.primary() ||
      event.button() != 0 {
      return
    }
    if event.closest("textarea, input, button, a, [contenteditable]") {
      put_down()
      return
    }
    let node = event.pointer_node()
    let rect = node.bounds()
    let next = @domain.begin_ticket_grip(
      event.x(),
      event.y(),
      rect.left(),
      rect.width(),
      rect.height(),
      resting.get_current().unwrap(),
      props.back,
    )
    grip.set_current(Some({ grip: next, pointer: event.pointer(), node, }))
    node.capture(event.pointer())
    event.prevent()
    set_held(true)
    (props.on_touch)()
    if reduced {
      return
    }
    let lifted = @domain.lift_ticket(next, rect.top())
    y.set(lifted.y)
    z.set(lifted.z)
    tilt.set(lifted.tilt)
    angle.set(lifted.angle)
    roll.set(lifted.roll)
    shine_opacity.set(lifted.shine_opacity)
    shadow_y.set(lifted.shadow_y)
    shadow_opacity.set(lifted.shadow_opacity)
  }
  let pointer_move = (event : UiEvent) => {
    if grip.get_current() is Some(current) {
      if event.pointer() != current.pointer {
        return
      }
      let dragged = @domain.drag_ticket(current.grip, event.x(), event.y())
      current.grip = { ..current.grip, dx: dragged.dx, }
      if reduced {
        return
      }
      x.set(dragged.x)
      y.set(dragged.y)
      angle.set(dragged.angle)
      tilt.set(dragged.tilt)
      roll.set(dragged.roll)
      shine_x.set(dragged.shine_x)
      return
    }
    if props.disabled ||
      reduced ||
      event.pointer_type() != "mouse" ||
      event.buttons() != 0 {
      return
    }
    if event.closest("textarea, input, [contenteditable]") {
      put_down()
      return
    }
    let rect = event.pointer_node().bounds()
    let hovered = @domain.hover_ticket(
      event.x(),
      event.y(),
      rect.left(),
      rect.top(),
      rect.width(),
      rect.height(),
    )
    tilt.set(hovered.tilt)
    roll.set(hovered.roll)
    z.set(hovered.z)
    shine_x.set(hovered.shine_x)
    shine_opacity.set(hovered.shine_opacity)
  }
  let end = (event : UiEvent, complete : Bool) => {
    if grip.get_current() is Some(current) && event.pointer() == current.pointer {
      release(complete) |> ignore
    }
  }
  node(
    "div",
    [
      p("className", "ticket-handling"),
      p("data-held", held),
      p("data-side", if back { "back" } else { "front" }),
      p1("onPointerDown", down),
      p1("onPointerMove", pointer_move),
      // Radix previously suppressed horizontal native touch gestures in its
      // scroll lock. Keep the ticket drag from starting a browser gesture that
      // consumes the next tap, while allowing vertical scrolling and pinch zoom.
      p1("onTouchMove", (event : @dom.TouchEvent) => {
        if grip.get_current() is Some(current) && event.touches().length() == 1 {
          let touch = event.touches()[0]
          if (touch.client_x() - current.grip.x).abs() >
            (touch.client_y() - current.grip.y).abs() {
            event.preventDefault()
          }
        }
      }),
      p1("onPointerUp", (e : UiEvent) => end(e, true)),
      p1("onPointerCancel", (e : UiEvent) => end(e, false)),
      p1("onLostPointerCapture", (e : UiEvent) => end(e, false)),
      p0("onPointerLeave", () => if grip.get_current() is None { put_down() }),
      p1("onFocusCapture", (e : UiEvent) => {
        if e.matches("textarea, input") {
          put_down()
        }
      }),
      p1("onDragStart", (e : UiEvent) => {
        if !e.closest("textarea, input, [contenteditable]") {
          e.prevent()
        }
      }),
    ],
    [
      motion_node(
        "div",
        [
          p("className", "ticket-ground-shadow"),
          p("aria-hidden", "true"),
          p(
            "style",
            styles([
              p("x", shadow_x),
              p("y", shadow_y),
              p("scaleX", shadow_width),
              p("opacity", shadow_opacity),
            ]),
          ),
        ],
        [],
      ),
      motion_node(
        "div",
        [
          p("className", "ticket-lift"),
          p(
            "style",
            styles([
              p("x", x),
              p("y", y),
              p("z", z),
              p("rotateX", tilt),
              p("rotateZ", roll),
            ]),
          ),
        ],
        [
          ticket_card(
            props.ticket,
            back~,
            rotation=angle,
            shine_x~,
            shine_opacity~,
            on_title=title => {
              (props.on_edit)(props.ticket.id, Some(title), None)
            },
            on_note=note => (props.on_edit)(props.ticket.id, None, Some(note)),
          ),
        ],
      ),
    ],
  )
}
