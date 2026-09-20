///|
fn startup(_props : Unit) -> @react.Element {
  let (show_opening, set_opening) = @react.use_state(true)
  let (wants_title, set_wants_title) = @react.use_state_lazy(() => {
    !has_entered()
  })
  let (world_ready, set_world_ready) = @react.use_state(false)
  let (paper_ready, set_paper_ready) = @react.use_state(false)
  let (failed, set_failed) = @react.use_state(false)
  let (guide_request, set_guide_request) = @react.use_state(0)
  let ready = world_ready && paper_ready && !failed
  let scene_ready = @react.use_callback(() => set_world_ready(true), [])
  let scene_failed = @react.use_callback(
    () => {
      set_failed(true)
      set_opening(true)
    },
    [],
  )
  let reveal = @react.use_callback(() => set_opening(false), [])
  let show_title = @react.use_callback(
    () => {
      set_wants_title(true)
      set_opening(true)
    },
    [],
  )
  effect(
    () => {
      let active = Ref(true)
      let ceiling = set_timeout(
        () => if active.val { set_paper_ready(true) },
        5000,
      )
      launch(async fn() noraise {
        settle_resources([
          image_decode("/paper-grain.png"),
          font_load("400 16px \"Shippori Mincho\"", " "),
          font_load("500 16px \"Shippori Mincho\"", " "),
          font_load("400 16px \"DM Mono\"", " "),
          font_load("500 80px \"Syasou Title\"", "車窓"),
        ]) catch {
          _ => ()
        }
        clear_timeout(ceiling)
        if active.val {
          set_paper_ready(true)
        }
      })
      () => {
        active.val = false
        clear_timeout(ceiling)
      }
    },
    [],
  )
  effect(
    () => {
      on_document("visibilitychange", () => root_class("page-hidden", hidden()))
    },
    [],
  )
  let enter = () => {
    if ready {
      save_entered()
      set_wants_title(false)
    }
  }
  let guide = () => {
    update(set_guide_request, n => n + 1)
    enter()
  }
  group([
    world_boundary(
      scene_failed,
      @react.suspense(
        [
          component(lazy_world, {
            covered: show_opening,
            guideRequest: guide_request,
            onReady: scene_ready,
            onShowOpening: show_title,
          }),
        ],
        fallback=empty(),
      ),
    ),
    if show_opening {
      opening({
        ready,
        leaving: ready && !wants_title,
        failed,
        on_enter: enter,
        on_guide: guide,
        on_complete: reveal,
      })
    } else {
      empty()
    },
  ])
}

///|
pub fn start() -> @js.Promise[Unit] {
  @js.promisify0(async fn() {
    prepare_ui().wait()
    let root = @dom.document().getElementById("root").unwrap()
    @react_dom.create_root(root).render(
      @react.strict_mode([component(startup, ())]),
    )
  })()
}
