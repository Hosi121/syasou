///|
priv enum ArtworkStatus {
  Loading
  Ready
  Failed
} derive(Eq)

///|
priv struct SnowProps {
  landscape : LandscapeProps
  exterior : Bool
}

///|
fn snow_scenery(
  props : LandscapeProps,
  exterior? : Bool = false,
) -> @view.Element {
  component("render_snow", render_snow, { landscape: props, exterior, })
}

///|
fn snow_strip(layer : String) -> @view.Element {
  node("div", [p("className", "snow-layer snow-\{layer}")], [
    node(
      "div",
      [p("className", "snow-strip")],
      Array::makei(4, i => {
        node("div", [p("className", "snow-tile"), p("key", i)], [])
      }),
    ),
  ])
}

///|
fn render_snow(input : SnowProps) -> @view.Element {
  let props = input.landscape
  let is_visible = @view.use_sync_external_store(subscribe_visibility, visible)
  let (attempt, _, update_attempt) = @view.use_state_update(0)
  let (status, set_status) = @view.use_state(Loading)
  effect(
    () => {
      let active = Ref(true)
      set_status(Loading)
      let sources = ["/scenery/overcast-sky.png", "/scenery/snowfield.png"]
      if input.exterior {
        sources.push("/scenery/train.png")
      }
      let resources = sources.map(image_decode)
      launch(async fn() noraise {
        try {
          all_resources(resources)
          if active.val {
            set_status(Ready)
          }
        } catch {
          _ => if active.val { set_status(Failed) }
        }
      })
      () => active.val = false
    },
    [d(attempt), d(input.exterior)],
  )
  if status == Failed {
    return group([
      landscape(props),
      node("div", [p("className", "scenery-error"), p("role", "alert")], [
        text("雪原の素材を読み込めませんでした。"),
        node(
          "button",
          [p0("onClick", () => update_attempt(value => value + 1))],
          [text("もう一度読み込む")],
        ),
      ]),
    ])
  }
  node(
    "div",
    [
      p(
        "className",
        classes(
          "landscape snow-landscape scene-\{props.scene} speed-\{props.speed}",
          flags=[
            (
              "landscape-paused",
              !props.moving || !is_visible || status != Ready,
            ),
            ("snow-exterior", input.exterior),
            ("window-is-open", props.windowOpen),
          ],
        ),
      ),
      p("aria-hidden", "true"),
      p("data-renderer", "artwork"),
      p("data-loaded", status == Ready),
    ],
    [
      node(
        "div",
        [p("className", "snow-artwork"), p("data-ready", status == Ready)],
        [
          snow_strip("sky"),
          snow_strip("ground"),
          if input.exterior {
            node("div", [p("className", "distant-train")], [
              node("div", [p("className", "train-artwork")], []),
              node("span", [p("className", "train-contact-shadow")], []),
            ])
          } else {
            empty()
          },
          snow_strip("near"),
        ],
      ),
      if status == Loading {
        node("span", [p("className", "scenery-loading")], [])
      } else {
        empty()
      },
      if input.exterior {
        empty()
      } else {
        node("div", [p("className", "glass-reflection")], [])
      },
    ],
  )
}

///|
impl @js.Same for ArtworkStatus with fn same(a, b) {
  physical_equal(a, b)
}
