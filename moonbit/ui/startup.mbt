///|
fn startup(_props : Unit) -> @view.Element {
  let (world, set_world) : (
    ((AppProps) -> @view.Element)?,
    (((AppProps) -> @view.Element)?) -> Unit,
  ) = @view.use_state(None)
  let (show_opening, set_opening) = @view.use_state(true)
  let (wants_title, set_wants_title) = @view.use_state_lazy(() => !has_entered())
  let (world_ready, set_world_ready) = @view.use_state(false)
  let (paper_ready, set_paper_ready) = @view.use_state(false)
  let (failed, set_failed) = @view.use_state(false)
  let (guide_request, set_guide_request) = @view.use_state(0)
  let ready = world_ready && paper_ready && !failed
  let scene_ready = @view.use_callback(() => set_world_ready(true), [])
  let scene_failed = @view.use_callback(
    () => {
      set_failed(true)
      set_opening(true)
    },
    [],
  )
  effect(
    () => {
      let active = Ref(true)
      launch(async fn() noraise {
        try {
          let world_module = load_world().wait()
          if active.val {
            set_world(Some(world_component(world_module)))
          }
        } catch {
          _ => if active.val { scene_failed() }
        }
      })
      () => active.val = false
    },
    [],
  )
  let reveal = @view.use_callback(() => set_opening(false), [])
  let show_title = @view.use_callback(
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
    match world {
      Some(render) =>
        @view.boundary(
          component(render, {
            covered: show_opening,
            guideRequest: guide_request,
            onReady: scene_ready,
            onShowOpening: show_title,
          }),
          scene_failed,
        )
      None => empty()
    },
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
    @view.mount(root, component(startup, ())) |> ignore
  })()
}
