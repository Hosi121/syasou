///|
let guide_steps : ReadOnlyArray[(String, String)] = [
  (
    "手帳で、旅の支度。", "時間と速さを選び、▶で出発。メモには、今日進めたいことを書けます。",
  ),
  (
    "ときどき、窓の外へ。", "窓を押すと、景色だけの眺めに。もう一度押すと席へ戻れます。横向きにして、広い車窓を眺めるのも。",
  ),
  (
    "ひと区切りを、一枚に。", "到着すると、作業が切符になります。まずは記念の一枚を受け取って、手帳にしまってみましょう。",
  ),
]

///|
fn guide_drawing(step : Int) -> @view.Element {
  let children = if step == 0 {
    [
      node(
        "path",
        [
          p(
            "d", "M20 18l54 5 53-5v53l-53 5-54-5V18ZM74 24v51M26 26l41 4M26 36l33 3M26 45l26 3M82 31l34-3M82 40l28-3",
          ),
        ],
        [],
      ),
      node(
        "circle",
        [p("cx", "109"), p("cy", "61"), p("r", "14"), p("fill", "#e5e5e5")],
        [],
      ),
      node("path", [p("d", "M106 54l9 7-9 6V54Z")], []),
    ]
  } else if step == 1 {
    [
      node(
        "rect",
        [
          p("x", "16"),
          p("y", "12"),
          p("width", "117"),
          p("height", "61"),
          p("rx", "13"),
        ],
        [],
      ),
      node(
        "rect",
        [
          p("x", "21"),
          p("y", "17"),
          p("width", "107"),
          p("height", "50"),
          p("rx", "9"),
        ],
        [],
      ),
      node(
        "path",
        [
          p(
            "d", "M23 52l23-13 20 9 26-19 34 17M23 61l36-10 31 11 36-9M44 80h62",
          ),
        ],
        [],
      ),
      node("path", [p("d", "M96 7h23m-7-4 7 4-7 4"), p("strokeWidth", ".8")], []),
    ]
  } else {
    [
      node("path", [p("d", "M30 29l-2-14 93-8 5 51-19 2")], []),
      node("path", [p("d", "M26 31l96 6-3 41-96-6 3-41Z"), p("fill", "#ddd")], []),
      node("path", [p("d", "M30 46l86 5M27 58l87 5M79 50l22 1")], []),
      node(
        "rect",
        [
          p("x", "39"),
          p("y", "14"),
          p("width", "63"),
          p("height", "44"),
          p("rx", "3"),
          p("transform", "rotate(5 39 14)"),
          p("fill", "#e7e7e7"),
        ],
        [],
      ),
      node(
        "path",
        [p("d", "M40 27l60 5M39 48l60 5M53 37l30 3M25 60l49-2 41 8")],
        [],
      ),
      node("circle", [p("cx", "46"), p("cy", "52"), p("r", "2")], []),
    ]
  }
  node(
    "svg",
    [
      p("viewBox", "0 0 150 85"),
      p("fill", "none"),
      p("aria-hidden", "true"),
      p("stroke", "currentColor"),
      p("strokeWidth", "1.1"),
      p("strokeLinecap", "round"),
      p("strokeLinejoin", "round"),
    ],
    children,
  )
}

///|
priv struct GuideProps {
  step : Int
  on_step : (Int) -> Unit
  on_finish : () -> Unit
  on_skip : () -> Unit
}

///|
fn onboarding(props : GuideProps) -> @view.Element {
  component(render_guide, props)
}

///|
fn render_guide(props : GuideProps) -> @view.Element {
  let primary : @view.ViewRef[@dom.Element] = @view.use_ref(None)
  let receiving = @view.use_ref(Some(false))
  let reduced = reduced_motion()
  let (title, description) = guide_steps[props.step]
  let finish = () => {
    receiving.set_current(Some(true))
    (props.on_finish)()
  }
  foreign(
    "dialog",
    "Root",
    [
      p("open", true),
      p("onOpenChange", (open : Bool) => if !open { (props.on_skip)() }),
    ],
    [
      foreign("dialog", "Portal", [], [
        foreign(
          "dialog",
          "Overlay",
          [
            p(
              "className",
              classes("guide-shade", flags=[
                ("guide-shade-window", props.step == 1),
              ]),
            ),
          ],
          [],
        ),
        foreign(
          "dialog",
          "Content",
          [
            p("className", "guide-position"),
            p("onOpenAutoFocus", (event : UiEvent) => {
              event.prevent()
              if primary.get_current() is Some(value) {
                focus(value)
              }
            }),
            p("onCloseAutoFocus", (event : UiEvent) => {
              event.prevent()
              if !receiving.get_current().unwrap_or(false) {
                microtask(() => focus_selector(".notebook-object"))
              }
            }),
          ],
          [
            motion_node(
              "div",
              [
                p("className", "guide-paper"),
                p(
                  "initial",
                  if reduced {
                    boolean_property(false)
                  } else {
                    styles([p("opacity", 0.0), p("y", 14.0), p("rotate", 0.0)])
                  },
                ),
                p(
                  "animate",
                  styles([p("opacity", 1.0), p("y", 0.0), p("rotate", -1.2)]),
                ),
                p(
                  "transition",
                  styles([p("duration", 0.18), p("ease", "easeOut")]),
                ),
              ],
              [
                node("div", [p("className", "guide-topline")], [
                  foreign("dialog", "Title", [], [text("旅のしおり")]),
                  foreign("dialog", "Close", [p("className", "guide-skip")], [
                    text("スキップ"),
                  ]),
                ]),
                node("div", [p("className", "guide-drawing")], [
                  guide_drawing(props.step),
                ]),
                node(
                  "div",
                  [p("aria-live", "polite"), p("aria-atomic", "true")],
                  [
                    node("h2", [p("className", "guide-title")], [text(title)]),
                    foreign(
                      "dialog",
                      "Description",
                      [p("className", "guide-description")],
                      [text(description)],
                    ),
                  ],
                ),
                node("div", [p("className", "guide-footer")], [
                  node(
                    "div",
                    [
                      p("className", "guide-stops"),
                      p("role", "img"),
                      p("aria-label", "案内 \{props.step+1} / 3"),
                    ],
                    Array::makei(3, i => {
                      node(
                        "span",
                        [
                          p("key", i),
                          p(
                            "className",
                            classes("", flags=[
                              ("guide-stop-visited", i <= props.step),
                              ("guide-stop-current", i == props.step),
                            ]),
                          ),
                        ],
                        [],
                      )
                    }),
                  ),
                  if props.step > 0 {
                    node(
                      "button",
                      [
                        p("className", "guide-back"),
                        p("onClick", () => (props.on_step)(props.step - 1)),
                        p("aria-label", "前の案内へ"),
                      ],
                      [icon("ArrowLeft", 17.0, 1.0)],
                    )
                  } else {
                    empty()
                  },
                  node(
                    "button",
                    [
                      p("ref", primary),
                      p("className", "guide-next"),
                      p(
                        "onClick",
                        if props.step == 2 {
                          finish
                        } else {
                          () => (props.on_step)(props.step + 1)
                        },
                      ),
                    ],
                    [
                      text(
                        if props.step == 2 {
                          "切符を受け取る"
                        } else {
                          "次へ"
                        },
                      ),
                      icon("ArrowRight", 17.0, 1.0),
                    ],
                  ),
                ]),
              ],
            ),
          ],
        ),
      ]),
    ],
  )
}
