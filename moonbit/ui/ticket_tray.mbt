///|
priv struct TrayProps {
  tickets : Array[@domain.Ticket]
  arrival : String?
  save_error : Bool
  on_edit : (String, String?, String?) -> Unit
  on_close : () -> Unit
}

///|
fn ticket_tray(props : TrayProps) -> @view.Element {
  component(
    "render_tray",
    render_tray,
    props,
    key=props.arrival.unwrap_or("archive"),
  )
}

///|
fn render_tray(props : TrayProps) -> @view.Element {
  let (selected, set_selected) = @view.use_state(
    match props.arrival {
      Some(id) => Some(id)
      None => props.tickets.get(0).map(t => t.id)
    },
  )
  let (back, set_back) = @view.use_state(false)
  let (leaving, set_leaving) = @view.use_state(false)
  let (handled, set_handled) = @view.use_state(false)
  let physical : @view.ViewRef[TicketHandle] = @view.use_ref(None)
  let close_button : @view.ViewRef[@dom.Element] = @view.use_ref(None)
  let reduced = reduced_motion()
  let mut index = 0
  for i, ticket in props.tickets {
    if Some(ticket.id) == selected {
      index = i
      break
    }
  }
  let ticket = props.tickets.get(index)
  let arrival = props.arrival is Some(_)
  let welcome = arrival && ticket is Some({ kind: Some("welcome"), .. })
  let close = () => {
    if !leaving {
      if reduced || ticket is None {
        (props.on_close)()
      } else {
        set_leaving(true)
      }
    }
  }
  let select = (next : Int) => {
    set_back(false)
    set_selected(Some(props.tickets[next].id))
  }
  let opacity = if leaving { 0.0 } else { 1.0 }
  foreign(
    "dialog",
    "Root",
    [p("open", true), p1("onOpenChange", (open : Bool) => if !open { close() })],
    [
      foreign("dialog", "Portal", [], [
        foreign("dialog", "Overlay", [p("asChild", true)], [
          motion_node(
            "div",
            [
              p("className", "ticket-tray-shade"),
              p("initial", styles([p("opacity", 0.0)])),
              p("animate", styles([p("opacity", opacity)])),
              p(
                "transition",
                styles([p("duration", if reduced { 0.0 } else { 0.3 })]),
              ),
            ],
            [],
          ),
        ]),
        foreign(
          "dialog",
          "Content",
          [
            p("className", "ticket-tray-dialog"),
            p1("onEscapeKeyDown", (e : UiEvent) => {
              if physical.get_current() is Some(handle) && (handle.cancel)() {
                e.prevent()
              }
            }),
            p1("onOpenAutoFocus", (e : UiEvent) => {
              e.prevent()
              if close_button.get_current() is Some(button) {
                focus(button)
              }
            }),
            p1("onCloseAutoFocus", (e : UiEvent) => {
              e.prevent()
              if arrival && !welcome {
                microtask(() => focus_selector(".notebook-object"))
              }
            }),
          ],
          [
            foreign("dialog", "Title", [p("className", "sr-only")], [
              text(
                if welcome {
                  "はじめての切符"
                } else if arrival {
                  "到着の切符"
                } else {
                  "集めた切符"
                },
              ),
            ]),
            foreign("dialog", "Description", [p("className", "sr-only")], [
              text(
                if welcome {
                  "旅のしおりをめくった記念の一枚です。裏返してメモを読み、手帳にしまってみましょう。手帳の右ポケットからまた見返せます。"
                } else if arrival {
                  "旅の記録が切符になりました。作業名や裏面のメモを書き込んで、手帳にしまえます。"
                } else {
                  "手帳に残した切符を一枚ずつ見返せます。裏面には旅のメモがあります。"
                },
              ),
            ]),
            node("div", [p("className", "ticket-tray-stage")], [
              motion_node(
                "img",
                [
                  p("className", "ticket-tray-box"),
                  p("src", "/ticket-tray.png"),
                  p("alt", ""),
                  p("draggable", false),
                  p("initial", styles([p("opacity", 0.0)])),
                  p("animate", styles([p("opacity", opacity)])),
                  p(
                    "transition",
                    styles([p("duration", if reduced { 0.0 } else { 0.4 })]),
                  ),
                ],
                [],
              ),
              if welcome {
                motion_node(
                  "p",
                  [
                    p("className", "ticket-welcome-caption"),
                    p("initial", styles([p("opacity", 0.0)])),
                    p("animate", styles([p("opacity", opacity)])),
                    p(
                      "transition",
                      styles([
                        p("duration", if reduced { 0.0 } else { 0.3 }),
                        p("delay", if reduced || leaving { 0.0 } else { 1.3 }),
                      ]),
                    ),
                  ],
                  [text("ようこそ、車窓へ。")],
                )
              } else {
                empty()
              },
              node("div", [p("className", "ticket-tray-well")], [
                match ticket {
                  None =>
                    node("div", [p("className", "ticket-empty")], [
                      node("p", [], [
                        text("次の到着が、最初の一枚に。"),
                      ]),
                    ])
                  Some(ticket) => {
                    let older : Array[@domain.Ticket] = []
                    for i = index + 1
                        i < props.tickets.length() && i < index + 3
                        i = i + 1 {
                      older.push(props.tickets[i])
                    }
                    older.rev_in_place()
                    group([
                      motion_node(
                        "div",
                        [
                          p("className", "ticket-stack-under"),
                          p("aria-hidden", "true"),
                          p("animate", styles([p("opacity", opacity)])),
                          p("transition", styles([p("duration", 0.2)])),
                        ],
                        older.mapi((i, t) => {
                          node(
                            "div",
                            [
                              p("key", t.id),
                              p(
                                "style",
                                styles([
                                  p(
                                    "transform",
                                    if i != 0 {
                                      "translate(-9px, 14px) rotate(-5deg)"
                                    } else {
                                      "translate(12px, 24px) rotate(3deg)"
                                    },
                                  ),
                                ]),
                              ),
                            ],
                            [ticket_card(t)],
                          )
                        }),
                      ),
                      foreign(
                        "motion",
                        "AnimatePresence",
                        [p("mode", "wait")],
                        [
                          motion_node(
                            "div",
                            [
                              p("key", ticket.id),
                              p("className", "ticket-on-top"),
                              p(
                                "initial",
                                if reduced {
                                  boolean_property(false)
                                } else if arrival {
                                  styles([
                                    p("x", "-35vw"),
                                    p("y", "-65vh"),
                                    p("rotate", -24.0),
                                    p("scale", 1.2),
                                    p("opacity", 0.0),
                                  ])
                                } else {
                                  styles([
                                    p("x", 24.0),
                                    p("y", -8.0),
                                    p("rotate", 1.0),
                                    p("opacity", 0.0),
                                  ])
                                },
                              ),
                              p(
                                "animate",
                                if leaving {
                                  styles([
                                    p("x", "30vw"),
                                    p("y", "43vh"),
                                    p("rotate", 14.0),
                                    p("scale", 0.16),
                                    p("opacity", 0.0),
                                  ])
                                } else {
                                  styles([
                                    p("x", 0.0),
                                    p("y", 0.0),
                                    p("rotate", -1.4),
                                    p("scale", 1.0),
                                    p("opacity", 1.0),
                                  ])
                                },
                              ),
                              p(
                                "exit",
                                styles([
                                  p("x", -24.0),
                                  p("opacity", 0.0),
                                  p("rotate", -4.0),
                                ]),
                              ),
                              p(
                                "transition",
                                styles([
                                  p(
                                    "duration",
                                    if reduced {
                                      0.0
                                    } else if leaving {
                                      0.7
                                    } else if arrival {
                                      1.25
                                    } else {
                                      0.18
                                    },
                                  ),
                                  p("ease", "easeOut"),
                                  p(
                                    "delay",
                                    if arrival && !leaving {
                                      0.15
                                    } else {
                                      0.0
                                    },
                                  ),
                                ]),
                              ),
                              p0("onAnimationComplete", () => {
                                if leaving {
                                  (props.on_close)()
                                }
                              }),
                            ],
                            [
                              touchable_ticket({
                                handle: physical,
                                ticket,
                                back,
                                disabled: leaving,
                                on_back: set_back,
                                on_touch: () => set_handled(true),
                                on_edit: props.on_edit,
                              }),
                            ],
                          ),
                        ],
                      ),
                    ])
                  }
                },
              ]),
              motion_node(
                "div",
                [
                  p("className", "ticket-tray-controls"),
                  p("animate", styles([p("opacity", opacity)])),
                  p(
                    "transition",
                    styles([p("duration", if reduced { 0.0 } else { 0.18 })]),
                  ),
                ],
                [
                  node(
                    "button",
                    [
                      p("className", "tray-close"),
                      p(
                        "aria-label",
                        if arrival {
                          "切符をしまって閉じる"
                        } else {
                          "切符を閉じる"
                        },
                      ),
                      p0("onClick", close),
                      p("disabled", leaving),
                    ],
                    [icon("X", 20.0, 1.0)],
                  ),
                  if !arrival && ticket is Some(_) {
                    node("div", [p("className", "ticket-browse")], [
                      node(
                        "button",
                        [
                          p("aria-label", "新しい切符を見る"),
                          p("disabled", index == 0 || leaving),
                          p0("onClick", () => select(index - 1)),
                        ],
                        [icon("ArrowLeft", 23.0, 1.0)],
                      ),
                      node(
                        "button",
                        [
                          p("aria-label", "前の切符を見る"),
                          p(
                            "disabled",
                            index >= props.tickets.length() - 1 || leaving,
                          ),
                          p0("onClick", () => select(index + 1)),
                        ],
                        [icon("ArrowRight", 23.0, 1.0)],
                      ),
                    ])
                  } else {
                    empty()
                  },
                  node("div", [p("className", "ticket-tray-actions")], [
                    if ticket is Some(_) {
                      node(
                        "button",
                        [
                          p("className", "ticket-flip"),
                          p(
                            "aria-label",
                            if back {
                              "切符の表を見る"
                            } else {
                              "切符の裏を見る"
                            },
                          ),
                          p0("onClick", () => {
                            set_back(!back)
                            set_handled(true)
                          }),
                          p("disabled", leaving),
                          p("title", if back { "表へ" } else { "裏へ" }),
                        ],
                        [icon("RotateCcw", 18.0, 1.1)],
                      )
                    } else {
                      empty()
                    },
                    node(
                      "button",
                      [
                        p("ref", close_button),
                        p("className", "ticket-put-away"),
                        p0("onClick", close),
                        p("disabled", leaving),
                      ],
                      [
                        text(
                          if arrival {
                            "手帳にしまう"
                          } else {
                            "手帳に戻る"
                          },
                        ),
                        icon("ArrowRight", 16.0, 1.0),
                      ],
                    ),
                  ]),
                  if props.save_error {
                    node(
                      "p",
                      [p("className", "ticket-save-error"), p("role", "alert")],
                      [
                        text(
                          "このブラウザに切符を保存できません。ページを閉じると記録が失われます。",
                        ),
                      ],
                    )
                  } else {
                    empty()
                  },
                  if ticket is Some(_) && !props.save_error {
                    motion_node(
                      "p",
                      [
                        p("className", "ticket-handling-hint"),
                        p("aria-hidden", "true"),
                        p(
                          "animate",
                          styles([
                            p(
                              "opacity",
                              if handled || leaving {
                                0.0
                              } else {
                                1.0
                              },
                            ),
                          ]),
                        ),
                        p(
                          "transition",
                          styles([
                            p("duration", if reduced { 0.0 } else { 0.18 }),
                          ]),
                        ),
                      ],
                      [text("端をつまんで、左右にめくる")],
                    )
                  } else {
                    empty()
                  },
                ],
              ),
            ]),
          ],
        ),
      ]),
    ],
  )
}
