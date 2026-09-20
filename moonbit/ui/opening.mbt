///|
priv struct OpeningProps {
  ready : Bool
  leaving : Bool
  failed : Bool
  on_enter : () -> Unit
  on_guide : () -> Unit
  on_complete : () -> Unit
}

///|
fn opening(props : OpeningProps) -> @view.Element {
  component("render_opening", render_opening, props)
}

///|
fn render_opening(props : OpeningProps) -> @view.Element {
  let reduced = reduced_motion()
  let enter_button : @view.ViewRef[@dom.Element] = @view.use_ref(None)
  observe(() => if props.leaving && reduced { (props.on_complete)() }, [
    d(props.leaving),
    d(reduced),
    @view.reference_dependency(props.on_complete),
  ])
  observe(
    () => {
      if props.ready && !props.leaving {
        if enter_button.get_current() is Some(node) {
          focus(node)
        }
      }
    },
    [d(props.ready), d(props.leaving)],
  )
  motion_node(
    "main",
    [
      p("className", "opening-screen"),
      p("aria-label", "車窓のタイトル画面"),
      p("aria-busy", !props.ready && !props.failed),
      p("initial", false),
      p(
        "animate",
        styles([p("opacity", if props.leaving { 0.0 } else { 1.0 })]),
      ),
      p(
        "transition",
        styles([
          p("duration", if reduced { 0.0 } else { 1.15 }),
          p("ease", "easeOut"),
        ]),
      ),
      p0("onAnimationComplete", () => if props.leaving { (props.on_complete)() }),
    ],
    [
      node("div", [p("className", "opening-light"), p("aria-hidden", "true")], []),
      motion_node(
        "div",
        [
          p("className", "opening-window"),
          p("aria-hidden", "true"),
          p("initial", false),
          p(
            "animate",
            styles([
              p("x", if props.leaving && !reduced { 24.0 } else { 0.0 }),
              p("scale", if props.leaving && !reduced { 1.035 } else { 1.0 }),
            ]),
          ),
          p("transition", styles([p("duration", 1.15), p("ease", "easeOut")])),
        ],
        [
          node("div", [p("className", "opening-window-glass")], [
            landscape({
              scene: "mist",
              speed: "local",
              moving: props.ready && !props.leaving,
              windowOpen: false,
              travelling: false,
            }),
          ]),
          node("div", [p("className", "opening-window-edge")], []),
        ],
      ),
      node(
        "div",
        [p("className", "opening-window-sill"), p("aria-hidden", "true")],
        [],
      ),
      motion_node(
        "div",
        [
          p("className", "opening-brand"),
          p("initial", false),
          p(
            "animate",
            styles([
              p("opacity", if props.leaving { 0.0 } else { 1.0 }),
              p("y", if props.leaving && !reduced { -10.0 } else { 0.0 }),
            ]),
          ),
          p(
            "transition",
            styles([
              p("duration", if reduced { 0.0 } else { 0.45 }),
              p("ease", "easeOut"),
            ]),
          ),
        ],
        [
          node(
            "div",
            [p("className", "opening-emblem"), p("aria-hidden", "true")],
            [rail_mark(stroke_width=0.95)],
          ),
          node("h1", [p("className", "opening-title")], [text("車窓")]),
          node(
            "p",
            [p("className", "opening-roman"), p("aria-hidden", "true")],
            [text(if demo_mode() { "SYASOU / TRIAL" } else { "SYASOU" })],
          ),
          node("div", [p("className", "opening-action")], [
            if props.failed {
              node(
                "div",
                [p("className", "opening-failure"), p("role", "alert")],
                [
                  node("p", [], [
                    text("景色をひらけませんでした。"),
                  ]),
                  node("button", [p0("onClick", reload)], [
                    text("もう一度ひらく"),
                    icon("RotateCcw", 14.0, 1.0),
                  ]),
                ],
              )
            } else if props.ready {
              motion_node(
                "div",
                [
                  p("className", "opening-ready"),
                  p("initial", styles([p("opacity", 0.0)])),
                  p("animate", styles([p("opacity", 1.0)])),
                  p(
                    "transition",
                    styles([p("duration", if reduced { 0.0 } else { 0.4 })]),
                  ),
                ],
                [
                  node(
                    "button",
                    [
                      p("ref", enter_button),
                      p("className", "opening-enter"),
                      p0("onClick", props.on_enter),
                      p("disabled", props.leaving),
                    ],
                    [
                      node("span", [], [text("窓辺へ")]),
                      icon("ArrowRight", 20.0, 0.9),
                    ],
                  ),
                  node(
                    "button",
                    [
                      p("className", "opening-guide"),
                      p0("onClick", props.on_guide),
                      p("disabled", props.leaving),
                    ],
                    [text("使い方を見る")],
                  ),
                ],
              )
            } else {
              node(
                "div",
                [p("className", "opening-loading"), p("role", "status")],
                [
                  node(
                    "div",
                    [p("className", "opening-track"), p("aria-hidden", "true")],
                    [node("span", [], [])],
                  ),
                  node("span", [], [text("旅の支度をしています")]),
                ],
              )
            },
          ]),
        ],
      ),
      node(
        "div",
        [p("className", "opening-paper-grain"), p("aria-hidden", "true")],
        [],
      ),
    ],
  )
}
