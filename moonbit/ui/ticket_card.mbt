///|
priv struct TicketCardProps {
  ticket : @domain.Ticket
  back : Bool
  rotation : MotionValue?
  shine_x : MotionValue?
  shine_opacity : MotionValue?
  on_title : ((String) -> Unit)?
  on_note : ((String) -> Unit)?
}

///|
fn ticket_card(
  ticket : @domain.Ticket,
  back? : Bool = false,
  rotation? : MotionValue,
  shine_x? : MotionValue,
  shine_opacity? : MotionValue,
  on_title? : (String) -> Unit,
  on_note? : (String) -> Unit,
) -> @react.Element {
  component(render_card, {
    ticket,
    back,
    rotation,
    shine_x,
    shine_opacity,
    on_title,
    on_note,
  })
}

///|
fn render_card(props : TicketCardProps) -> @react.Element {
  let ticket = props.ticket
  let reduced = reduced_motion()
  let date = ticket_date(ticket.arrived_at)
  let welcome = ticket.kind == Some("welcome")
  let serial = @domain.ticket_serial(ticket.id)
  let service = match ticket.speed {
    "rapid" => "SEMI-EXPRESS"
    "express" => "EXPRESS"
    _ => "LOCAL"
  }
  let route = match ticket.scene {
    "dawn" => "MORNING LIGHT"
    "night" => "NIGHT FOREST"
    _ => "MIST VALLEY"
  }
  let sheen = () => {
    motion_node(
      "div",
      [
        p("className", "ticket-sheen"),
        p("aria-hidden", "true"),
        p(
          "style",
          styles([
            p("x", motion_or(props.shine_x, 0.0)),
            p("opacity", motion_or(props.shine_opacity, 0.12)),
          ]),
        ),
      ],
      [],
    )
  }
  node(
    "div",
    [
      p("className", "rail-ticket"),
      p("data-ticket-kind", ticket.kind.unwrap_or("journey")),
    ],
    [
      motion_node(
        "div",
        [
          p("className", "ticket-turn"),
          p(
            "style",
            match props.rotation {
              Some(v) => styles([p("rotateY", v)])
              None => absent()
            },
          ),
          p(
            "animate",
            if props.rotation is Some(_) {
              absent()
            } else {
              styles([p("rotateY", if props.back { 180.0 } else { 0.0 })])
            },
          ),
          p(
            "transition",
            styles([
              p("duration", if reduced { 0.0 } else { 0.6 }),
              p("ease", "easeInOut"),
            ]),
          ),
        ],
        [
          node(
            "div",
            [
              p("className", "ticket-stock ticket-stock-bottom"),
              p("aria-hidden", "true"),
            ],
            [],
          ),
          node(
            "div",
            [p("className", "ticket-stock"), p("aria-hidden", "true")],
            [],
          ),
          node(
            "div",
            [
              p("className", "ticket-stock ticket-stock-top"),
              p("aria-hidden", "true"),
            ],
            [],
          ),
          node(
            "div",
            [
              p("className", "ticket-face ticket-front"),
              p("aria-hidden", props.back),
              p("inert", props.back),
            ],
            [
              node("div", [p("className", "ticket-band ticket-band-top")], [
                node("span", [], [text("SYASOU RAILWAY")]),
                node("span", [], [
                  text(if welcome { "FIRST RIDE" } else { "ONE WAY" }),
                ]),
              ]),
              node("div", [p("className", "ticket-print")], [
                node(
                  "svg",
                  [
                    p("className", "ticket-watermark"),
                    p("viewBox", "0 0 500 250"),
                    p("fill", "none"),
                    p("aria-hidden", "true"),
                  ],
                  Array::makei(10, i => {
                    node(
                      "ellipse",
                      [
                        p("key", i),
                        p("cx", "250"),
                        p("cy", "125"),
                        p("rx", 154 + i * 8),
                        p("ry", 44 + i * 7),
                        p(
                          "transform",
                          "rotate(\{if i % 2 == 1 { 13 } else { -13 }} 250 125)",
                        ),
                      ],
                      [],
                    )
                  }),
                ),
                node("div", [p("className", "ticket-print-main")], [
                  node("div", [p("className", "ticket-fields")], [
                    node("div", [], [
                      node("small", [], [text("Class")]),
                      node("span", [], [text("1ST")]),
                    ]),
                    node("div", [], [
                      node("small", [], [text("Service")]),
                      node("span", [p("className", "ticket-service")], [
                        text(service),
                      ]),
                    ]),
                  ]),
                  node(
                    "div",
                    [
                      p(
                        "className",
                        classes("ticket-task", flags=[
                          ("ticket-task-long", ticket.title.length() > 28),
                        ]),
                      ),
                    ],
                    [
                      match props.on_title {
                        Some(change) =>
                          node(
                            "textarea",
                            [
                              p("rows", 2),
                              p("aria-label", "切符に残す作業"),
                              p("value", ticket.title),
                              p("maxLength", 80),
                              p("onChange", (e : UiEvent) => change(e.value())),
                              p("placeholder", "この旅で進めたこと"),
                              p("spellCheck", false),
                            ],
                            [],
                          )
                        None =>
                          node("p", [], [
                            text(
                              if ticket.title == "" {
                                "名前のない旅"
                              } else {
                                ticket.title
                              },
                            ),
                          ])
                      },
                    ],
                  ),
                  node("div", [p("className", "ticket-journey-line")], [
                    node("div", [], [
                      node("small", [], [text("Route")]),
                      node("span", [], [
                        text(if welcome { "YOUR OWN PACE" } else { route }),
                      ]),
                    ]),
                    node("div", [], [
                      node("small", [], [text("Travelled on")]),
                      node("span", [], [text(date)]),
                    ]),
                  ]),
                ]),
                node(
                  "div",
                  [p("className", "ticket-stub"), p("aria-hidden", "true")],
                  [
                    node("span", [p("className", "ticket-stub-type")], [
                      text(if welcome { "GIFT" } else { "SGL" }),
                    ]),
                    node("span", [p("className", "ticket-stub-mark")], [
                      rail_mark(stroke_width=0.8),
                    ]),
                    node("span", [p("className", "ticket-barcode")], []),
                    node("span", [p("className", "ticket-serial")], [
                      text(serial),
                    ]),
                  ],
                ),
              ]),
              node("div", [p("className", "ticket-band ticket-band-bottom")], [
                node("span", [p("className", "ticket-roundel")], [rail_mark()]),
                node("span", [p("className", "ticket-times")], [
                  text(
                    if welcome {
                      "A SMALL BEGINNING"
                    } else {
                      ticket_time(ticket.started_at) +
                      " — " +
                      ticket_time(ticket.arrived_at)
                    },
                  ),
                ]),
                node("span", [p("className", "ticket-stamp")], [
                  text(
                    if welcome {
                      "WELCOME"
                    } else if ticket.kind == Some("sample") {
                      "SAMPLE"
                    } else {
                      "ARRIVED"
                    },
                  ),
                ]),
              ]),
              sheen(),
            ],
          ),
          node(
            "div",
            [
              p("className", "ticket-face ticket-back"),
              p("aria-hidden", !props.back),
              p("inert", !props.back),
            ],
            [
              node("div", [p("className", "ticket-back-heading")], [
                node("span", [], [text("旅の余白")]),
                node("small", [], [text(date)]),
              ]),
              match props.on_note {
                Some(change) =>
                  node(
                    "textarea",
                    [
                      p("className", "ticket-note"),
                      p("aria-label", "切符のメモ"),
                      p("value", ticket.note),
                      p("maxLength", 300),
                      p("onChange", (e : UiEvent) => change(e.value())),
                      p(
                        "placeholder", "この旅で考えたこと、残しておきたいこと。",
                      ),
                      p("spellCheck", false),
                    ],
                    [],
                  )
                None =>
                  node("p", [p("className", "ticket-note")], [text(ticket.note)])
              },
              node("span", [p("className", "ticket-back-mark")], [rail_mark()]),
              node(
                "span",
                [
                  p("className", "ticket-back-edition"),
                  p("aria-hidden", "true"),
                ],
                [text("SYASOU RAILWAY / " + serial)],
              ),
              sheen(),
            ],
          ),
        ],
      ),
    ],
  )
}
