///|
priv struct LandscapeProps {
  scene : String
  speed : String
  moving : Bool
  windowOpen : Bool
  travelling : Bool
}

///|
fn landscape(props : LandscapeProps) -> @view.Element {
  component("render_landscape", render_landscape, props)
}

///|
fn fallback_scenery() -> @view.Element {
  let hills = "M0 360 C130 340 170 210 310 250 S490 430 660 350 S880 170 1030 290 S1140 350 1200 360 V900 H0Z"
  let slopes = "M0 540 C130 600 200 400 350 440 S580 660 740 520 S1030 430 1200 540 V900 H0Z"
  let strip = (name : String, path : String) => {
    node(
      "svg",
      [
        p("className", name),
        p("viewBox", "0 0 2400 900"),
        p("preserveAspectRatio", "none"),
      ],
      [
        node("path", [p("d", path)], []),
        node("path", [p("d", path), p("transform", "translate(1200)")], []),
      ],
    )
  }
  node("div", [p("className", "window-fallback-scene")], [
    strip("fallback-ridge", hills),
    strip("fallback-slope", slopes),
    node(
      "svg",
      [
        p("className", "fallback-trees"),
        p("viewBox", "0 0 2400 900"),
        p("preserveAspectRatio", "none"),
      ],
      [0, 1200].map(offset => {
        node(
          "g",
          [p("key", offset), p("transform", "translate(\{offset})")],
          [
            node(
              "path",
              [
                p(
                  "d", "M0 795 Q160 770 310 800 T610 795 T940 810 T1200 795 V900 H0Z",
                ),
              ],
              [],
            ),
            ..Array::makei(16, i => {
              node(
                "path",
                [
                  p("key", i),
                  p(
                    "transform",
                    "translate(\{i * 76 + 10},\{810.0 + @math.sin((i * 13).to_double()) * 15.0}) scale(\{0.55 + (@math.sin((i * 9).to_double()) + 1.0) * 0.3})",
                  ),
                  p(
                    "d", "M-4 15 V-65 L-55-60 L-39-89 L-48-87 L-29-124 L-37-119 L-19-155 L-26-152 L0-221 L20-166 L14-169 L33-128 L24-132 L44-93 L34-97 L53-62 L4-66 V15Z",
                  ),
                ],
                [],
              )
            }),
          ],
        )
      }),
    ),
  ])
}

///|
fn render_landscape(props : LandscapeProps) -> @view.Element {
  let canvas : @view.ViewRef[@dom.HTMLCanvasElement] = @view.use_ref(None)
  let renderer : @view.ViewRef[WindowRenderer] = @view.use_ref(None)
  let (webgl, set_webgl) = @view.use_state(false)
  effect(
    () => {
      if canvas.get_current() is Some(canvas) {
        let next = create_renderer(canvas, () => set_webgl(false))
        renderer.set_current(next)
        set_webgl(next is Some(_))
      }
      () => {
        if renderer.get_current() is Some(value) {
          value.dispose()
        }
        renderer.set_current(None)
      }
    },
    [],
  )
  observe(
    () => if renderer.get_current() is Some(value) { value.update(props) },
    [
      d(props.scene),
      d(props.speed),
      d(props.moving),
      d(props.windowOpen),
      d(props.travelling),
    ],
  )
  node(
    "div",
    [
      p(
        "className",
        classes("landscape scene-\{props.scene} speed-\{props.speed}", flags=[
          ("landscape-paused", !props.moving),
          ("window-is-open", props.windowOpen),
        ]),
      ),
      p("aria-hidden", "true"),
      p("data-renderer", if webgl { "webgl" } else { "css" }),
    ],
    [
      node("div", [p("className", "window-gradient")], []),
      if webgl {
        empty()
      } else {
        fallback_scenery()
      },
      node("canvas", [p("ref", canvas), p("className", "window-canvas")], []),
      if webgl {
        empty()
      } else {
        node("div", [p("className", "window-fallback-grain")], [])
      },
      node("div", [p("className", "glass-reflection")], []),
    ],
  )
}

///|
impl @js.ToJs for LandscapeProps with fn to_js(self) {
  properties([
    p("scene", self.scene),
    p("speed", self.speed),
    p("moving", self.moving),
    p("windowOpen", self.windowOpen),
    p("travelling", self.travelling),
  ])
}

///|
impl @js.FromJs for LandscapeProps with fn from_js(value) {
  {
    scene: value._get("scene").cast(),
    speed: value._get("speed").cast(),
    moving: value._get("moving").cast(),
    windowOpen: value._get("windowOpen").cast(),
    travelling: value._get("travelling").cast(),
  }
}
