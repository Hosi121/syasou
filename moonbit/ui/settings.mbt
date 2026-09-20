///|
priv struct SettingsProps {
  preferences : Preferences
  on_change : (Preferences) -> Unit
  active : Bool
}

///|
fn settings(
  preferences : Preferences,
  on_change : (Preferences) -> Unit,
  active : Bool,
) -> @react.Element {
  component(render_settings, { preferences, on_change, active, })
}

///|
fn render_settings(props : SettingsProps) -> @react.Element {
  let prefs = props.preferences
  let on_change = props.on_change
  let duration = (
    label : String,
    field : String,
    value : Double,
    choices : Array[Int],
    untimed : Bool,
  ) => {
    let items = choices.map(n => {
      foreign(
        "toggle",
        "Item",
        [p("value", n.to_string()), p("key", n), p("aria-label", "\{n}分")],
        [text(n.to_string())],
      )
    })
    if untimed {
      items.push(
        foreign(
          "toggle",
          "Item",
          [p("value", "0"), p("aria-label", "時間を決めずに")],
          [text("∞")],
        ),
      )
    }
    foreign(
      "toggle",
      "Root",
      [
        p("type", "single"),
        p("className", "paper-options"),
        p("value", value.to_string()),
        p("onValueChange", (v : String) => {
          if v != "" {
            on_change(prefs.with_value(field, number_value(v)))
          }
        }),
        p("aria-label", label),
      ],
      items,
    )
  }
  node(
    "div",
    [p("className", "notebook-settings"), p("aria-label", "旅の設定")],
    [
      node("div", [p("className", "setting-row")], [
        node("span", [], [text("時間")]),
        duration(
          "作業時間",
          "focusMinutes",
          prefs.focusMinutes(),
          [15, 25, 45, 60, 90],
          true,
        ),
      ]),
      node("div", [p("className", "setting-row")], [
        node("span", [], [text("休憩")]),
        duration(
          "休憩時間",
          "restMinutes",
          prefs.restMinutes(),
          [3, 5, 10, 15],
          false,
        ),
      ]),
      if props.active {
        node("p", [p("className", "next-journey-note")], [
          text("時間の変更は次の乗車から"),
        ])
      } else {
        empty()
      },
      node("div", [p("className", "setting-row")], [
        node("span", [], [text("速度")]),
        foreign(
          "toggle",
          "Root",
          [
            p("type", "single"),
            p("className", "paper-options speed-options"),
            p("value", prefs.speed()),
            p("onValueChange", (v : String) => {
              if v != "" {
                on_change(prefs.with_value("speed", v))
              }
            }),
            p("aria-label", "列車の速さ"),
          ],
          [
            foreign("toggle", "Item", [p("value", "local")], [text("各駅")]),
            foreign("toggle", "Item", [p("value", "rapid")], [text("準急")]),
            foreign("toggle", "Item", [p("value", "express")], [text("特急")]),
          ],
        ),
      ]),
      node("div", [p("className", "setting-row")], [
        node("span", [], [text("光")]),
        foreign(
          "toggle",
          "Root",
          [
            p("type", "single"),
            p("className", "paper-options scene-options"),
            p("value", prefs.scene()),
            p("onValueChange", (v : String) => {
              if v != "" {
                on_change(prefs.with_value("scene", v))
              }
            }),
            p("aria-label", "車窓の景色"),
          ],
          [
            foreign(
              "toggle",
              "Item",
              [p("value", "mist"), p("aria-label", "霧")],
              [icon("CloudFog", 19.0, 1.2)],
            ),
            foreign(
              "toggle",
              "Item",
              [p("value", "dawn"), p("aria-label", "朝")],
              [icon("Sun", 19.0, 1.2)],
            ),
            foreign(
              "toggle",
              "Item",
              [p("value", "night"), p("aria-label", "夜")],
              [icon("Moon", 19.0, 1.2)],
            ),
          ],
        ),
      ]),
      node(
        "div",
        [p("className", "paper-sound-controls")],
        [
          (
            "trainVolume",
            "列車の走行音",
            "TrainFront",
            prefs.trainVolume(),
          ),
          ("rainVolume", "雨の音", "CloudRain", prefs.rainVolume()),
          ("windVolume", "風の音", "Wind", prefs.windVolume()),
        ].map(item => {
          let (key, label, image, value) = item
          node("label", [p("key", key), p("className", "paper-volume")], [
            icon(image, 17.0, 1.2, hidden=true),
            node(
              "input",
              [
                p("aria-label", label),
                p("type", "range"),
                p("min", "0"),
                p("max", "100"),
                p("value", value),
                p("onChange", (e : UiEvent) => {
                  on_change(prefs.with_value(key, e.number()))
                }),
              ],
              [],
            ),
          ])
        }),
      ),
      node(
        "button",
        [
          p("className", "clock-setting"),
          p("aria-label", "残り時間を表示する"),
          p("aria-pressed", prefs.showTime()),
          p("onClick", () => {
            on_change(prefs.with_value("showTime", !prefs.showTime()))
          }),
        ],
        [
          icon(if prefs.showTime() { "Eye" } else { "EyeOff" }, 17.0, 1.2),
          node("span", [], [text("時計")]),
        ],
      ),
    ],
  )
}
