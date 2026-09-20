///|
pub(all) struct AppProps {
  covered : Bool
  guideRequest : Int
  onReady : () -> Unit
  onShowOpening : () -> Unit
}

///|
pub fn app(props : AppProps) -> @react.Element {
  use_visual_viewport()
  let portrait = use_media("(max-width: 760px) and (orientation: portrait)")
  let supports_fullscreen = fullscreen_supported()
  let (note, set_note) = @react.use_state_lazy(read_note)
  let travel = use_journey(note)
  let journey = travel.journey
  let preferences = travel.preferences
  let (notebook_open, set_notebook) = @react.use_state(false)
  let (focus_pocket, set_focus_pocket) = @react.use_state(false)
  let (archive_open, set_archive) = @react.use_state(false)
  let tray_open = travel.pending is Some(_) || archive_open
  let (guide_open, set_guide) = @react.use_state_lazy(() => {
    !read_guide_done() &&
    journey.phase == @domain.Idle &&
    travel.tickets.all(t => t.kind == Some("sample"))
  })
  let (guide_step, set_guide_step) = @react.use_state(0)
  let (window_open, set_window) = @react.use_state(false)
  let (at_window, set_at_window) = @react.use_state(false)
  let (view, set_view) = @react.use_state_lazy(read_view)
  let previous_view = @react.use_ref(
    Some(if view == "train" { "snow" } else { view }),
  )
  let outside = view == "train"
  let (fullscreen, set_fullscreen) = @react.use_state(false)
  let (fullscreen_error, set_fullscreen_error) = @react.use_state("")
  let (awake, set_awake) = @react.use_state(false)
  let (announcement, set_announcement) = @react.use_state("")
  let sleep_timer : @react.ReactRef[Int] = @react.use_ref(None)
  let previous_phase = @react.use_ref(Some(journey.phase))
  let look_target_x = use_motion_value(0.0)
  let look_target_y = use_motion_value(0.0)
  let look_x = spring(look_target_x, [p("stiffness", 25.0), p("damping", 22.0)])
  let look_y = spring(look_target_y, [p("stiffness", 25.0), p("damping", 22.0)])
  let reduced = reduced_motion()
  let moving = journey.phase == @domain.Idle ||
    (journey.phase == @domain.Focus && journey.running)
  let sound = use_sound(preferences, moving && !props.covered, window_open)
  let window_button : @react.ReactRef[@dom.Element] = @react.use_ref(None)
  let wake = @react.use_callback(
    () => {
      set_awake(true)
      if sleep_timer.get_current() is Some(timer) {
        clear_timeout(timer)
      }
      sleep_timer.set_current(Some(set_timeout(() => set_awake(false), 2200)))
    },
    [],
  )
  effect(
    () => {
      () => if sleep_timer.get_current() is Some(timer) { clear_timeout(timer) }
    },
    [],
  )
  observe(() => save_note(note), [d(note)])
  observe(() => save_view(view), [d(view)])
  observe(props.onReady, [d(props.onReady)])
  observe(
    () => {
      if !props.covered && !tray_open && !notebook_open && !guide_open {
        if outside {
          focus_selector(".view-picker-trigger")
        } else if at_window {
          if window_button.get_current() is Some(button) {
            focus(button)
          }
        } else {
          focus_selector(".notebook-object")
        }
      }
    },
    [d(props.covered)],
  )
  let show_guide = @react.use_callback(
    () => {
      set_guide_step(0)
      set_guide(true)
      set_at_window(false)
      update(set_view, current => {
        if current == "train" {
          previous_view.get_current().unwrap()
        } else {
          current
        }
      })
      set_notebook(false)
    },
    [],
  )
  observe(() => if props.guideRequest > 0 { show_guide() }, [
    d(props.guideRequest),
    d(show_guide),
  ])
  observe(
    () => if travel.pending is Some(id) && id != "" { set_guide(false) },
    [d(travel.pending)],
  )
  let finish_guide = (receive : Bool) => {
    if receive {
      (travel.welcome)()
    } else {
      save_guide_done()
    }
    set_guide(false)
    set_guide_step(0)
    set_at_window(false)
    set_notebook(false)
    look_target_x.set(0.0)
    look_target_y.set(0.0)
  }
  observe(
    () => {
      let phase = journey.phase
      if previous_phase.get_current() != Some(phase) {
        set_announcement(
          match phase {
            @domain.Rest =>
              "作業時間が終わり、休憩に入りました。"
            @domain.Finished => "旅を終えました。"
            @domain.Focus => "乗車しました。"
            _ => ""
          },
        )
        previous_phase.set_current(Some(phase))
      }
      set_document_title(
        match phase {
          @domain.Rest => "休憩 — 車窓"
          @domain.Focus => "車窓 — 乗車中"
          _ => "車窓"
        },
      )
    },
    [d(journey.phase)],
  )
  let leave_window = @react.use_callback(
    () => {
      set_at_window(false)
      update(set_view, current => {
        if current == "train" {
          previous_view.get_current().unwrap()
        } else {
          current
        }
      })
      frame(() => {
        if window_button.get_current() is Some(button) {
          focus(button)
        }
      })
    },
    [],
  )
  let choose_view = (next : String) => {
    if next != "train" {
      previous_view.set_current(Some(next))
    }
    set_view(next)
    look_target_x.set(0.0)
    look_target_y.set(0.0)
  }
  effect(
    () => {
      let keydown = on_keydown(event => {
        if event.key() == "Escape" &&
          !event.prevented() &&
          (at_window || outside) &&
          !notebook_open &&
          !tray_open &&
          !props.covered &&
          !guide_open {
          leave_window()
        }
      })
      let fullscreen = on_document("fullscreenchange", () => {
        set_fullscreen(fullscreen_active())
      })
      () => {
        keydown()
        fullscreen()
      }
    },
    [
      d(at_window),
      d(outside),
      d(notebook_open),
      d(tray_open),
      d(props.covered),
      d(guide_open),
      d(leave_window),
    ],
  )
  let board = () => {
    (travel.start)()
    set_notebook(false)
    if !sound.enabled {
      (sound.toggle)()
    }
  }
  let resume_journey = () => {
    (travel.toggle)()
    if !journey.running {
      set_notebook(false)
    }
  }
  let toggle_fullscreen = () => {
    set_fullscreen_error("")
    launch(async fn() noraise {
      try {
        if fullscreen_active() {
          fullscreen_exit().wait()
        } else if fullscreen_request_available() {
          fullscreen_enter().wait()
        } else {
          set_fullscreen_error(
            "このブラウザでは全画面表示を利用できません。",
          )
        }
      } catch {
        _ =>
          set_fullscreen_error(
            "全画面表示を開始できませんでした。",
          )
      }
    })
  }
  let scenery : LandscapeProps = {
    scene: preferences.scene(),
    speed: preferences.speed(),
    moving: moving && !props.covered && !tray_open,
    windowOpen: window_open,
    travelling: journey.phase == @domain.Focus,
  }
  foreign("motion", "MotionConfig", [p("reducedMotion", "user")], [
    node(
      "main",
      [
        p(
          "className",
          classes("world", flags=[
            ("at-window", at_window),
            ("outside-train", outside),
            ("journal-is-open", notebook_open),
            ("world-awake", awake),
          ]),
        ),
        p("inert", props.covered),
        p("aria-hidden", props.covered),
        p("aria-label", "列車の窓辺"),
        p("data-view", view),
        p("onPointerDown", wake),
        p("onPointerMove", (event : UiEvent) => {
          wake()
          if event.pointer_type() != "mouse" ||
            reduced ||
            notebook_open ||
            at_window ||
            outside ||
            tray_open ||
            guide_open {
            return
          }
          look_target_x.set(
            (event.x() / @dom.window().innerWidth().to_double() - 0.5) * -9.0,
          )
          look_target_y.set(
            (event.y() / @dom.window().innerHeight().to_double() - 0.5) * -5.0,
          )
        }),
        p("onPointerLeave", () => {
          look_target_x.set(0.0)
          look_target_y.set(0.0)
        }),
      ],
      [
        node("h1", [p("className", "sr-only")], [text("車窓")]),
        if outside {
          node("div", [p("className", "exterior-view")], [
            snow_scenery({ ..scenery, windowOpen: false, }, exterior=true),
          ])
        } else {
          empty()
        },
        motion_node(
          "div",
          [
            p("className", "world-camera"),
            p("style", styles([p("x", look_x), p("y", look_y)])),
            p("inert", outside),
            p("aria-hidden", outside),
          ],
          [
            node(
              "div",
              [p("className", "room-wall"), p("aria-hidden", "true")],
              [],
            ),
            motion_node(
              "div",
              [
                p("className", "window-world"),
                p(
                  "animate",
                  if at_window {
                    if portrait {
                      styles([p("scale", 1.5), p("x", "0%"), p("y", "10%")])
                    } else {
                      styles([p("scale", 1.36), p("x", "13%"), p("y", "5%")])
                    }
                  } else {
                    styles([p("scale", 1.0), p("x", "0%"), p("y", "0%")])
                  },
                ),
                p(
                  "transition",
                  styles([
                    p("duration", if reduced { 0.0 } else { 1.15 }),
                    p("ease", "easeInOut"),
                  ]),
                ),
              ],
              [
                if !outside {
                  if view == "snow" {
                    snow_scenery(scenery)
                  } else {
                    landscape(scenery)
                  }
                } else {
                  empty()
                },
                node(
                  "button",
                  [
                    p("ref", window_button),
                    p("className", "look-through-window"),
                    p(
                      "aria-label",
                      if at_window {
                        "座席に戻る"
                      } else {
                        "車窓を眺める"
                      },
                    ),
                    p("onClick", () => {
                      set_at_window(!at_window)
                      look_target_x.set(0.0)
                      look_target_y.set(0.0)
                    }),
                    p("tabIndex", if notebook_open { -1 } else { 0 }),
                  ],
                  [],
                ),
              ],
            ),
            node(
              "div",
              [p("className", "window-lower-shadow"), p("aria-hidden", "true")],
              [],
            ),
            node(
              "div",
              [p("className", "table-light"), p("aria-hidden", "true")],
              [],
            ),
            node(
              "button",
              [
                p(
                  "className",
                  classes("window-latch", flags=[("latch-open", window_open)]),
                ),
                p(
                  "aria-label",
                  if window_open {
                    "窓を閉める"
                  } else {
                    "窓をひらく"
                  },
                ),
                p("aria-pressed", window_open),
                p("aria-hidden", at_window),
                p("onClick", () => set_window(!window_open)),
                p(
                  "title",
                  if window_open {
                    "窓を閉める"
                  } else {
                    "窓をひらく"
                  },
                ),
                p("tabIndex", if at_window { -1 } else { 0 }),
              ],
              [
                node(
                  "span",
                  [p("className", "latch-plate"), p("aria-hidden", "true")],
                  [node("i", [], []), node("i", [], [])],
                ),
                node(
                  "span",
                  [p("className", "latch-handle"), p("aria-hidden", "true")],
                  [],
                ),
              ],
            ),
          ],
        ),
        node(
          "div",
          [
            p("className", "book-location"),
            p("inert", at_window || outside),
            p("aria-hidden", at_window || outside),
          ],
          [
            notebook({
              open: notebook_open && !tray_open && !props.covered && !guide_open,
              suspended: tray_open || props.covered || guide_open,
              focus_pocket,
              on_open: open => {
                set_notebook(open)
                set_focus_pocket(false)
                look_target_x.set(0.0)
                look_target_y.set(0.0)
              },
              travel,
              on_start: board,
              on_toggle: resume_journey,
              sound,
              note,
              on_note: set_note,
              on_archive: () => {
                set_notebook(false)
                set_archive(true)
              },
            }),
          ],
        ),
        node("div", [p("className", "world-corners")], [
          view_picker(view, choose_view),
          if outside {
            node(
              "button",
              [
                p("className", "corner-action"),
                p("aria-label", "旅の手帳を開く"),
                p("title", "手帳をひらく"),
                p("onClick", () => {
                  set_view(previous_view.get_current().unwrap())
                  set_at_window(false)
                  set_notebook(true)
                }),
              ],
              [icon("NotebookPen", 18.0, 1.0)],
            )
          } else {
            empty()
          },
          node(
            "button",
            [
              p("className", "corner-action"),
              p("aria-label", "タイトルに戻る"),
              p("onClick", props.onShowOpening),
              p("title", "タイトルへ"),
            ],
            [
              node(
                "span",
                [p("style", styles([p("width", 24), p("height", 24)]))],
                [rail_mark(stroke_width=1.0)],
              ),
            ],
          ),
          node(
            "button",
            [
              p("className", "corner-action"),
              p("aria-label", "使い方を見る"),
              p("onClick", show_guide),
              p("title", "旅のしおり"),
            ],
            [icon("BookOpen", 18.0, 1.0)],
          ),
          if at_window || outside {
            node(
              "button",
              [
                p("className", "corner-action"),
                p("aria-label", "座席に戻る"),
                p("onClick", leave_window),
                p("title", "座席に戻る"),
              ],
              [icon("ArrowLeft", 19.0, 1.0)],
            )
          } else {
            empty()
          },
          if supports_fullscreen {
            node(
              "button",
              [
                p("className", "corner-action"),
                p(
                  "aria-label",
                  if fullscreen {
                    "全画面を終了"
                  } else {
                    "全画面で見る"
                  },
                ),
                p("aria-pressed", fullscreen),
                p("onClick", toggle_fullscreen),
                p(
                  "title",
                  if fullscreen {
                    "全画面を終了"
                  } else {
                    "全画面で見る"
                  },
                ),
              ],
              [
                icon(
                  if fullscreen {
                    "Minimize"
                  } else {
                    "Maximize"
                  },
                  18.0,
                  1.0,
                ),
              ],
            )
          } else {
            empty()
          },
        ]),
        if fullscreen_error != "" {
          node("p", [p("className", "world-error"), p("role", "alert")], [
            text(fullscreen_error),
          ])
        } else {
          empty()
        },
        if sound.error != "" && !notebook_open {
          node("p", [p("className", "world-error"), p("role", "alert")], [
            text(sound.error),
          ])
        } else {
          empty()
        },
        node(
          "div",
          [
            p("className", "sr-only"),
            p("role", "status"),
            p("aria-live", "polite"),
          ],
          [text(announcement)],
        ),
        if guide_open && !props.covered && !tray_open {
          onboarding({
            step: guide_step,
            on_step: step => {
              set_guide_step(step)
              set_at_window(step == 1)
            },
            on_finish: () => finish_guide(true),
            on_skip: () => finish_guide(false),
          })
        } else {
          empty()
        },
        if tray_open && !props.covered {
          ticket_tray({
            tickets: travel.tickets,
            arrival: travel.pending,
            save_error: travel.save_error,
            on_edit: travel.edit,
            on_close: () => {
              let welcome = travel.tickets.any(t => {
                Some(t.id) == travel.pending && t.kind == Some("welcome")
              })
              let return_to_book = travel.pending is None || welcome
              if welcome {
                save_guide_done()
              }
              (travel.acknowledge)()
              set_archive(false)
              set_at_window(false)
              update(set_view, current => {
                if current == "train" {
                  previous_view.get_current().unwrap()
                } else {
                  current
                }
              })
              set_notebook(return_to_book)
              set_focus_pocket(welcome)
              look_target_x.set(0.0)
              look_target_y.set(0.0)
            },
          })
        } else {
          empty()
        },
      ],
    ),
  ])
}
