///|
priv struct NotebookProps {
  open : Bool
  suspended : Bool
  on_open : (Bool) -> Unit
  travel : JourneyView
  on_start : () -> Unit
  on_toggle : () -> Unit
  sound : SoundView
  note : String
  on_note : (String) -> Unit
  on_archive : () -> Unit
  focus_pocket : Bool
}

///|
fn notebook(props : NotebookProps) -> @view.Element {
  component(render_notebook, props)
}

///|
fn render_notebook(props : NotebookProps) -> @view.Element {
  let (show_settings, set_settings) = @view.use_state(false)
  let reduced = reduced_motion()
  let compact = use_media(compact_layout)
  let travel = props.travel
  let journey = travel.journey
  let preferences = travel.preferences
  let active = journey.phase == @domain.Focus || journey.phase == @domain.Rest
  let speeds = [
    ("local", "各駅", "local"),
    ("rapid", "準急", "semi-express"),
    ("express", "特急", "express"),
  ]
  let speed_index = match preferences.speed() {
    "rapid" => 1
    "express" => 2
    _ => 0
  }
  let sound = props.sound
  let sound_label = if sound.enabled {
    "音を消す"
  } else {
    "音を入れる"
  }
  foreign(
    "dialog",
    "Root",
    [
      p("open", props.open),
      p("onOpenChange", (value : Bool) => {
        (props.on_open)(value)
        if !value {
          set_settings(false)
        }
      }),
    ],
    [
      foreign("dialog", "Trigger", [p("asChild", true)], [
        motion_node(
          "button",
          [
            p("className", "notebook-object"),
            p("aria-label", "旅の手帳を開く"),
            p("title", "手帳をひらく"),
          ],
          [
            node(
              "span",
              [p("className", "resting-book-pages"), p("aria-hidden", "true")],
              [],
            ),
            node(
              "span",
              [p("className", "resting-book-cover"), p("aria-hidden", "true")],
              [
                node("span", [p("className", "cover-border")], []),
                node("span", [p("className", "cover-mark")], [
                  rail_mark(stroke_width=0.8),
                ]),
                node("span", [p("className", "book-elastic")], []),
              ],
            ),
            node(
              "span",
              [p("className", "resting-book-ribbon"), p("aria-hidden", "true")],
              [],
            ),
          ],
        ),
      ]),
      foreign("dialog", "Portal", [], [
        foreign("dialog", "Overlay", [p("className", "journal-shade")], []),
        foreign(
          "dialog",
          "Content",
          [
            p("className", "journal-anchor"),
            p("onOpenAutoFocus", (event : UiEvent) => {
              event.prevent()
              focus_selector(
                if props.focus_pocket {
                  ".ticket-pocket"
                } else {
                  "#journal-main-action"
                },
              )
            }),
            p("onCloseAutoFocus", (event : UiEvent) => {
              if props.suspended {
                event.prevent()
              }
            }),
          ],
          [
            foreign("dialog", "Title", [p("className", "sr-only")], [
              text("旅の手帳"),
            ]),
            foreign("dialog", "Description", [p("className", "sr-only")], [
              text(
                "作業時間、列車の速さ、音、メモを手帳で操作できます。",
              ),
            ]),
            motion_node(
              "div",
              [
                p("className", "journal"),
                p("data-settings", show_settings),
                p(
                  "initial",
                  if reduced {
                    boolean_property(false)
                  } else {
                    styles([
                      p("opacity", 0.0),
                      p("y", if compact { 14.0 } else { 55.0 }),
                      p("rotateX", if compact { 0.0 } else { 12.0 }),
                      p("rotate", if compact { 0.0 } else { -5.0 }),
                      p("scale", if compact { 1.0 } else { 0.93 }),
                    ])
                  },
                ),
                p(
                  "animate",
                  styles([
                    p("opacity", 1.0),
                    p("y", 0.0),
                    p("rotateX", 0.0),
                    p("rotate", if compact { 0.0 } else { -2.0 }),
                    p("scale", 1.0),
                  ]),
                ),
                p(
                  "transition",
                  styles([
                    p("duration", if compact { 0.18 } else { 0.55 }),
                    p("ease", "easeOut"),
                  ]),
                ),
              ],
              [
                node(
                  "div",
                  [p("className", "journal-cover"), p("aria-hidden", "true")],
                  [],
                ),
                node(
                  "div",
                  [
                    p("className", "journal-page-edges"),
                    p("aria-hidden", "true"),
                  ],
                  [],
                ),
                node("div", [p("className", "journal-spread")], [
                  node("div", [p("className", "journal-page journal-left")], [
                    if show_settings {
                      group([
                        node(
                          "button",
                          [
                            p("className", "paper-back paper-icon"),
                            p("onClick", () => set_settings(false)),
                            p("aria-label", "手帳に戻る"),
                          ],
                          [icon("ArrowLeft", 19.0, 1.1)],
                        ),
                        settings(preferences, travel.set_preferences, active),
                      ])
                    } else {
                      group([
                        node("div", [p("className", "journey-paper")], [
                          node("span", [p("className", "paper-date")], [
                            text(printed_date()),
                          ]),
                          node(
                            "button",
                            [
                              p("className", "paper-time"),
                              p("onClick", () => set_settings(true)),
                              p(
                                "aria-label", "作業と休憩の時間を設定",
                              ),
                            ],
                            [
                              if active {
                                if preferences.showTime() &&
                                  travel.remaining is Some(remaining) {
                                  node("span", [p("className", "time-value")], [
                                    text(format_time(remaining)),
                                  ])
                                } else {
                                  node("span", [p("aria-hidden", "true")], [
                                    text("—"),
                                  ])
                                }
                              } else {
                                node("span", [], [
                                  text(
                                    if preferences.focusMinutes() != 0.0 {
                                      "\{preferences.focusMinutes()} min / \{preferences.restMinutes()} min"
                                    } else {
                                      "∞"
                                    },
                                  ),
                                ])
                              },
                            ],
                          ),
                          node(
                            "button",
                            [
                              p("className", "paper-speed"),
                              p("onClick", () => {
                                (travel.set_preferences)(
                                  preferences.with_value(
                                    "speed",
                                    speeds[(speed_index + 1) % 3].0,
                                  ),
                                )
                              }),
                              p(
                                "aria-label",
                                "列車の速さ：\{speeds[speed_index].1}。クリックで変更",
                              ),
                            ],
                            [text(speeds[speed_index].2)],
                          ),
                          if journey.phase == @domain.Rest {
                            node("span", [p("className", "paper-phase")], [
                              text("休憩"),
                            ])
                          } else {
                            empty()
                          },
                          if journey.phase == @domain.Finished {
                            node("span", [p("className", "paper-phase")], [
                              text("到着"),
                            ])
                          } else {
                            empty()
                          },
                          node(
                            "button",
                            [
                              p("id", "journal-main-action"),
                              p("className", "paper-play"),
                              p(
                                "onClick",
                                if active {
                                  props.on_toggle
                                } else {
                                  props.on_start
                                },
                              ),
                              p(
                                "aria-label",
                                if active {
                                  if journey.running {
                                    "一時停止"
                                  } else {
                                    "旅を再開"
                                  }
                                } else if journey.phase == @domain.Finished {
                                  "もう一度乗車する"
                                } else {
                                  "乗車する"
                                },
                              ),
                              p(
                                "title",
                                if active {
                                  if journey.running {
                                    "一時停止"
                                  } else {
                                    "再開"
                                  }
                                } else {
                                  "乗車する"
                                },
                              ),
                            ],
                            [
                              icon(
                                if active && journey.running {
                                  "Pause"
                                } else {
                                  "Play"
                                },
                                19.0,
                                1.3,
                              ),
                            ],
                          ),
                        ]),
                        node(
                          "textarea",
                          [
                            p("className", "paper-memo"),
                            p("aria-label", "手帳のメモ"),
                            p("value", props.note),
                            p("maxLength", 300),
                            p("onChange", (e : UiEvent) => {
                              (props.on_note)(e.value())
                            }),
                            p("spellCheck", false),
                          ],
                          [],
                        ),
                      ])
                    },
                    node("div", [p("className", "paper-tools")], [
                      node(
                        "button",
                        [
                          p("className", "paper-icon"),
                          p("onClick", () => set_settings(!show_settings)),
                          p(
                            "aria-label",
                            if show_settings {
                              "手帳に戻る"
                            } else {
                              "旅の設定"
                            },
                          ),
                          p("aria-pressed", show_settings),
                          p("title", "設定"),
                        ],
                        [icon("Settings2", 17.0, 1.15)],
                      ),
                      node(
                        "button",
                        [
                          p("className", "paper-icon"),
                          p("onClick", sound.toggle),
                          p("disabled", sound.busy),
                          p("aria-label", sound_label),
                          p("aria-pressed", sound.enabled),
                          p("title", sound_label),
                        ],
                        [
                          icon(
                            if sound.enabled {
                              "Volume2"
                            } else {
                              "VolumeX"
                            },
                            17.0,
                            1.15,
                          ),
                        ],
                      ),
                      if active {
                        node(
                          "button",
                          [
                            p("className", "paper-icon"),
                            p("onClick", travel.finish),
                            p("aria-label", "旅を終える"),
                            p("title", "旅を終える"),
                          ],
                          [icon("Square", 14.0, 1.15)],
                        )
                      } else {
                        empty()
                      },
                    ]),
                    if sound.error != "" {
                      node(
                        "p",
                        [p("className", "paper-error"), p("role", "alert")],
                        [text(sound.error)],
                      )
                    } else {
                      empty()
                    },
                  ]),
                  node("div", [p("className", "journal-page journal-right")], [
                    route_map(),
                    node(
                      "button",
                      [
                        p(
                          "className",
                          classes("ticket-pocket", flags=[
                            (
                              "ticket-pocket-filled",
                              travel.tickets.length() > 0,
                            ),
                          ]),
                        ),
                        p("onClick", props.on_archive),
                        p("aria-label", "集めた切符を見る"),
                        p("title", "集めた切符"),
                      ],
                      [
                        match travel.tickets.get(0) {
                          Some(ticket) =>
                            node(
                              "span",
                              [
                                p("className", "pocket-ticket"),
                                p("aria-hidden", "true"),
                              ],
                              [ticket_card(ticket)],
                            )
                          None => empty()
                        },
                        node(
                          "span",
                          [
                            p("className", "pocket-paper"),
                            p("aria-hidden", "true"),
                          ],
                          [
                            icon("Tickets", 18.0, 1.0),
                            node("span", [], [text("切符")]),
                          ],
                        ),
                      ],
                    ),
                  ]),
                ]),
                foreign(
                  "dialog",
                  "Close",
                  [
                    p("className", "paper-close paper-icon"),
                    p("aria-label", "手帳を閉じる"),
                    p("title", "手帳を閉じる"),
                  ],
                  [icon("X", 19.0, 1.0)],
                ),
                node(
                  "div",
                  [p("className", "journal-spine"), p("aria-hidden", "true")],
                  [],
                ),
                node(
                  "div",
                  [p("className", "journal-ribbon"), p("aria-hidden", "true")],
                  [],
                ),
              ],
            ),
          ],
        ),
      ]),
    ],
  )
}
