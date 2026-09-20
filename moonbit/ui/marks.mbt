///|
fn rail_mark(stroke_width? : Double = 1.4) -> @view.Element {
  node(
    "svg",
    [p("viewBox", "0 0 40 40"), p("fill", "none"), p("aria-hidden", "true")],
    [
      node(
        "path",
        [
          p(
            "d", "M9 28V12a5 5 0 0 1 5-5h12a5 5 0 0 1 5 5v16H9ZM9 19h22M20 7v12M14 28l-4 7m16-7 4 7M12 32h16",
          ),
          p("stroke", "currentColor"),
          p("strokeWidth", stroke_width),
        ],
        [],
      ),
      node(
        "circle",
        [p("cx", "15"), p("cy", "24"), p("r", "1.2"), p("fill", "currentColor")],
        [],
      ),
      node(
        "circle",
        [p("cx", "25"), p("cy", "24"), p("r", "1.2"), p("fill", "currentColor")],
        [],
      ),
    ],
  )
}

///|
fn route_map() -> @view.Element {
  node("div", [p("className", "route-map"), p("aria-hidden", "true")], [
    node(
      "svg",
      [
        p("viewBox", "0 0 380 510"),
        p("fill", "none"),
        p("preserveAspectRatio", "none"),
      ],
      [
        node(
          "path",
          [
            p(
              "d", "M-10 441 59 419 185 407 204 371 236 356 235 250 285 175 344 78 398 28",
            ),
            p("stroke", "#f8f8f8"),
            p("strokeWidth", "9"),
            p("strokeLinejoin", "round"),
          ],
          [],
        ),
        node(
          "path",
          [
            p(
              "d", "M223-5 250 62 239 163 235 250M236 356 278 453 210 518M344 78 356 140 401 164M-5 242 60 235 118 200 174 211 236 250",
            ),
            p("stroke", "#eeeeee"),
            p("strokeWidth", "1.6"),
          ],
          [],
        ),
        node(
          "path",
          [
            p(
              "d", "M96-5 117 89 173 137 160 222 185 285 151 332 185 407M284 175 347 214 320 285 383 367M15 110 87 128 117 89M60 235 23 330 40 401M278 453 367 426",
            ),
            p("stroke", "#bcbcbc"),
            p("strokeWidth", ".7"),
            p("opacity", ".5"),
          ],
          [],
        ),
        node(
          "circle",
          [
            p("cx", "185"),
            p("cy", "407"),
            p("r", "3.5"),
            p("stroke", "#a3a3a3"),
            p("strokeWidth", "1.2"),
          ],
          [],
        ),
        node(
          "circle",
          [
            p("cx", "235"),
            p("cy", "250"),
            p("r", "3.5"),
            p("stroke", "#a3a3a3"),
            p("strokeWidth", "1.2"),
          ],
          [],
        ),
      ],
    ),
  ])
}
