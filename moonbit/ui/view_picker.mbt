///|
priv struct ViewPickerProps {
  value : String
  on_change : (String) -> Unit
}

///|
fn view_picker(value : String, on_change : (String) -> Unit) -> @view.Element {
  component("render_view_picker", render_view_picker, { value, on_change, })
}

///|
fn render_view_picker(props : ViewPickerProps) -> @view.Element {
  let (open, set_open) = @view.use_state(false)
  foreign("popover", "Root", [p("open", open), p1("onOpenChange", set_open)], [
    foreign("popover", "Trigger", [p("asChild", true)], [
      node(
        "button",
        [
          p("className", "corner-action view-picker-trigger"),
          p("aria-label", "眺めを選ぶ"),
          p("title", "眺めを選ぶ"),
        ],
        [icon("PanelsTopLeft", 19.0, 1.0)],
      ),
    ]),
    foreign("popover", "Portal", [], [
      foreign(
        "popover",
        "Content",
        [
          p("className", "view-picker"),
          p("side", "top"),
          p("align", "end"),
          p("sideOffset", 14),
          p("collisionPadding", 24),
          p("aria-label", "眺めを選ぶ"),
          p1("onEscapeKeyDown", (e : UiEvent) => e.stop()),
        ],
        [
          foreign(
            "toggle",
            "Root",
            [
              p("type", "single"),
              p("className", "view-options"),
              p("value", props.value),
              p("aria-label", "眺め"),
              p1("onValueChange", (next : String) => {
                if next == "forest" || next == "snow" || next == "train" {
                  (props.on_change)(next)
                  set_open(false)
                }
              }),
            ],
            Array::makei(@domain.view_options.length(), i => {
              let view = @domain.view_options[i]
              let (id, label) = view
              foreign(
                "toggle",
                "Item",
                [
                  p("key", id),
                  p("value", id),
                  p("className", "view-option"),
                  p("aria-label", label),
                ],
                [
                  node(
                    "span",
                    [
                      p("className", "view-preview view-preview-\{id}"),
                      p("aria-hidden", "true"),
                    ],
                    [
                      node("span", [p("className", "preview-sky")], []),
                      node("span", [p("className", "preview-ground")], []),
                      if id == "train" {
                        node(
                          "span",
                          [p("className", "train-artwork preview-train")],
                          [],
                        )
                      } else {
                        empty()
                      },
                    ],
                  ),
                  node("span", [p("className", "view-option-label")], [
                    text(label),
                    icon("Check", 12.0, 1.3, hidden=true),
                  ]),
                ],
              )
            }),
          ),
        ],
      ),
    ]),
  ])
}
