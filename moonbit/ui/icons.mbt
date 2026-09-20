///|
// SVG geometry from Lucide 1.47.0 (ISC license in docs/licenses/lucide.txt).
fn icon(
  name : String,
  size : Double,
  stroke_width : Double,
  hidden? : Bool = false,
) -> @view.Element {
  let _ = hidden
  let (class_name, children) = match name {
    "ArrowLeft" =>
      (
        "lucide lucide-arrow-left",
        [
          node("path", [p("d", "m12 19-7-7 7-7")], []),
          node("path", [p("d", "M19 12H5")], []),
        ],
      )
    "ArrowRight" =>
      (
        "lucide lucide-arrow-right",
        [
          node("path", [p("d", "M5 12h14")], []),
          node("path", [p("d", "m12 5 7 7-7 7")], []),
        ],
      )
    "BookOpen" =>
      (
        "lucide lucide-book-open",
        [
          node("path", [p("d", "M12 5v16")], []),
          node(
            "path",
            [
              p(
                "d", "M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",
              ),
            ],
            [],
          ),
        ],
      )
    "Maximize" =>
      (
        "lucide lucide-maximize",
        [
          node("path", [p("d", "M8 3H5a2 2 0 0 0-2 2v3")], []),
          node("path", [p("d", "M21 8V5a2 2 0 0 0-2-2h-3")], []),
          node("path", [p("d", "M3 16v3a2 2 0 0 0 2 2h3")], []),
          node("path", [p("d", "M16 21h3a2 2 0 0 0 2-2v-3")], []),
        ],
      )
    "Minimize" =>
      (
        "lucide lucide-minimize",
        [
          node("path", [p("d", "M8 3v3a2 2 0 0 1-2 2H3")], []),
          node("path", [p("d", "M21 8h-3a2 2 0 0 1-2-2V3")], []),
          node("path", [p("d", "M3 16h3a2 2 0 0 1 2 2v3")], []),
          node("path", [p("d", "M16 21v-3a2 2 0 0 1 2-2h3")], []),
        ],
      )
    "NotebookPen" =>
      (
        "lucide lucide-notebook-pen",
        [
          node(
            "path",
            [
              p(
                "d", "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",
              ),
            ],
            [],
          ),
          node("path", [p("d", "M2 6h4")], []),
          node("path", [p("d", "M2 10h4")], []),
          node("path", [p("d", "M2 14h4")], []),
          node("path", [p("d", "M2 18h4")], []),
          node(
            "path",
            [
              p(
                "d", "M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
              ),
            ],
            [],
          ),
        ],
      )
    "Check" =>
      ("lucide lucide-check", [node("path", [p("d", "M20 6 9 17l-5-5")], [])])
    "PanelsTopLeft" =>
      (
        "lucide lucide-panels-top-left lucide-layout",
        [
          node(
            "rect",
            [
              p("width", "18"),
              p("height", "18"),
              p("x", "3"),
              p("y", "3"),
              p("rx", "2"),
            ],
            [],
          ),
          node("path", [p("d", "M3 9h18")], []),
          node("path", [p("d", "M9 21V9")], []),
        ],
      )
    "RotateCcw" =>
      (
        "lucide lucide-rotate-ccw",
        [
          node(
            "path",
            [p("d", "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8")],
            [],
          ),
          node("path", [p("d", "M3 3v5h5")], []),
        ],
      )
    "X" =>
      (
        "lucide lucide-x",
        [
          node("path", [p("d", "M18 6 6 18")], []),
          node("path", [p("d", "m6 6 12 12")], []),
        ],
      )
    "Pause" =>
      (
        "lucide lucide-pause",
        [
          node(
            "rect",
            [
              p("x", "14"),
              p("y", "3"),
              p("width", "5"),
              p("height", "18"),
              p("rx", "1"),
            ],
            [],
          ),
          node(
            "rect",
            [
              p("x", "5"),
              p("y", "3"),
              p("width", "5"),
              p("height", "18"),
              p("rx", "1"),
            ],
            [],
          ),
        ],
      )
    "Play" =>
      (
        "lucide lucide-play",
        [
          node(
            "path",
            [
              p(
                "d", "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
              ),
            ],
            [],
          ),
        ],
      )
    "Settings2" =>
      (
        "lucide lucide-settings-2",
        [
          node("path", [p("d", "M14 17H5")], []),
          node("path", [p("d", "M19 7h-9")], []),
          node("circle", [p("cx", "17"), p("cy", "17"), p("r", "3")], []),
          node("circle", [p("cx", "7"), p("cy", "7"), p("r", "3")], []),
        ],
      )
    "Square" =>
      (
        "lucide lucide-square",
        [
          node(
            "rect",
            [
              p("width", "18"),
              p("height", "18"),
              p("x", "3"),
              p("y", "3"),
              p("rx", "2"),
            ],
            [],
          ),
        ],
      )
    "Tickets" =>
      (
        "lucide lucide-tickets",
        [
          node(
            "path",
            [p("d", "m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8")],
            [],
          ),
          node("path", [p("d", "M6 10V8")], []),
          node("path", [p("d", "M6 14v1")], []),
          node("path", [p("d", "M6 19v2")], []),
          node(
            "rect",
            [
              p("x", "2"),
              p("y", "8"),
              p("width", "20"),
              p("height", "13"),
              p("rx", "2"),
            ],
            [],
          ),
        ],
      )
    "Volume2" =>
      (
        "lucide lucide-volume-2",
        [
          node(
            "path",
            [
              p(
                "d", "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
              ),
            ],
            [],
          ),
          node("path", [p("d", "M16 9a5 5 0 0 1 0 6")], []),
          node("path", [p("d", "M19.364 18.364a9 9 0 0 0 0-12.728")], []),
        ],
      )
    "VolumeX" =>
      (
        "lucide lucide-volume-x",
        [
          node(
            "path",
            [
              p(
                "d", "M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",
              ),
            ],
            [],
          ),
          node("path", [p("d", "m16.5 14.5 5-5")], []),
          node("path", [p("d", "m16.5 9.5 5 5")], []),
        ],
      )
    "CloudFog" =>
      (
        "lucide lucide-cloud-fog",
        [
          node(
            "path",
            [p("d", "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242")],
            [],
          ),
          node("path", [p("d", "M16 17H7")], []),
          node("path", [p("d", "M17 21H9")], []),
        ],
      )
    "CloudRain" =>
      (
        "lucide lucide-cloud-rain",
        [
          node(
            "path",
            [p("d", "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242")],
            [],
          ),
          node("path", [p("d", "M16 14v6")], []),
          node("path", [p("d", "M8 14v6")], []),
          node("path", [p("d", "M12 16v6")], []),
        ],
      )
    "Eye" =>
      (
        "lucide lucide-eye",
        [
          node(
            "path",
            [
              p(
                "d", "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
              ),
            ],
            [],
          ),
          node("circle", [p("cx", "12"), p("cy", "12"), p("r", "3")], []),
        ],
      )
    "EyeOff" =>
      (
        "lucide lucide-eye-off",
        [
          node(
            "path",
            [
              p(
                "d", "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
              ),
            ],
            [],
          ),
          node("path", [p("d", "M14.084 14.158a3 3 0 0 1-4.242-4.242")], []),
          node(
            "path",
            [
              p(
                "d", "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
              ),
            ],
            [],
          ),
          node("path", [p("d", "m2 2 20 20")], []),
        ],
      )
    "Moon" =>
      (
        "lucide lucide-moon",
        [
          node(
            "path",
            [
              p(
                "d", "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
              ),
            ],
            [],
          ),
        ],
      )
    "Sun" =>
      (
        "lucide lucide-sun",
        [
          node("circle", [p("cx", "12"), p("cy", "12"), p("r", "4")], []),
          node("path", [p("d", "M12 2v2")], []),
          node("path", [p("d", "M12 20v2")], []),
          node("path", [p("d", "m4.93 4.93 1.41 1.41")], []),
          node("path", [p("d", "m17.66 17.66 1.41 1.41")], []),
          node("path", [p("d", "M2 12h2")], []),
          node("path", [p("d", "M20 12h2")], []),
          node("path", [p("d", "m6.34 17.66-1.41 1.41")], []),
          node("path", [p("d", "m19.07 4.93-1.41 1.41")], []),
        ],
      )
    "TrainFront" =>
      (
        "lucide lucide-train-front",
        [
          node("path", [p("d", "M8 3.1V7a4 4 0 0 0 8 0V3.1")], []),
          node("path", [p("d", "m9 15-1-1")], []),
          node("path", [p("d", "m15 15 1-1")], []),
          node(
            "path",
            [
              p(
                "d", "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z",
              ),
            ],
            [],
          ),
          node("path", [p("d", "m8 19-2 3")], []),
          node("path", [p("d", "m16 19 2 3")], []),
        ],
      )
    "Wind" =>
      (
        "lucide lucide-wind",
        [
          node("path", [p("d", "M12.8 19.6A2 2 0 1 0 14 16H2")], []),
          node("path", [p("d", "M17.5 8a2.5 2.5 0 1 1 2 4H2")], []),
          node("path", [p("d", "M9.8 4.4A2 2 0 1 1 11 8H2")], []),
        ],
      )
    _ => ("lucide", ([] : Array[@view.Element]))
  }
  node(
    "svg",
    [
      p("xmlns", "http://www.w3.org/2000/svg"),
      p("width", size),
      p("height", size),
      p("viewBox", "0 0 24 24"),
      p("fill", "none"),
      p("stroke", "currentColor"),
      p("strokeWidth", stroke_width),
      p("strokeLinecap", "round"),
      p("strokeLinejoin", "round"),
      p("className", class_name),
      p("aria-hidden", "true"),
    ],
    children,
  )
}
