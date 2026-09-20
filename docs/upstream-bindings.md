# Upstream contribution candidates

The migration identified reusable work for [mizchi/js.mbt](https://github.com/mizchi/js.mbt).
No upstream issue or PR has been submitted. Package versions reviewed here are
`mizchi/js_builtin@0.13.0`, `js_browser@0.13.0` and `js_core@0.13.0`.

## 1. Float32Array fractional element types

The installed `js_builtin/src/arraybuffer/_generated_float32array.mbt` declares
`get_at` as returning `Int`, and `set_at` as accepting `Int`. This prevents normal
fractional audio sample access through those typed APIs. It is a focused bugfix
candidate before adding larger browser API packages. The generator and related
float-array methods need review, not just edits to a generated file.

Reproduced with MoonBit `0.10.13+cbb11c36f` and a package importing
`mizchi/js_builtin/arraybuffer`:

```moonbit
pub fn read_fraction(values : @arraybuffer.Float32Array) -> Double {
  values.get_at(0)
}

pub fn write_fraction(values : @arraybuffer.Float32Array) -> Unit {
  values.set_at(0, 0.125)
}
```

`moon check --target js` reports `Int` where `Double` is required on read,
and `Double` where `Int` is required on write. A fix should include fractional
read/write roundtrips and Float32 rounding, plus tests for Float64Array and other
methods generated from the same element-type table if they share the defect.

This app uses a small opaque `Samples` binding with `Double` get/set until the
upstream type contract is corrected. Its regression test is
`moonbit/webaudio/bindings_wbtest.mbt`; deterministic source-oracle tests also
compare all generated Float32 samples for a small stereo noise buffer.

## 2. Web Audio bindings

`moonbit/webaudio/bindings.mbt` contains application-independent opaque types for
AudioContext, nodes, AudioParam, AudioBuffer and sample storage, with typed graph
connections, automation, source lifetimes and promise-based context operations.
These could seed an upstream audio package. Before submitting, align naming,
optional arguments, error conventions and sample types with upstream APIs.
The present subset covers this app; it is not a complete Web Audio binding.

The contribution would include a minimal synthesized-tone example and browser
integration tests. Train rhythm, volume policy, noise formulas and scheduling in
`browser/sound.mbt` and `domain/ambience.mbt` remain app code.

## 3. WebGL bindings

`moonbit/webgl/bindings.mbt` provides opaque contexts, shaders, programs, buffers
and uniform locations. It preserves nullable resource creation and supplies
Float32 buffer upload and typed draw/uniform operations. These could seed a
WebGL 1 package once naming and constants follow upstream conventions.

The app's traces verify options marshalling, shader setup, null/error paths,
resource deletion and uniform calls. An upstream contribution should add a
standalone triangle example and tests in real Chromium/WebKit. The landscape
GLSL and animation policy stay in the app. WebGL 2 and the full API are outside
this subset.

A few missing canvas/document accessors in `browser/platform.mbt` can be proposed
separately for the existing DOM package. Storage already uses upstream bindings;
the persisted-data rules belong to this app.


## 4. UI runtime findings

The earlier migration at `91e51d1` used `mizchi/npm_typed@0.1.18`.
Its installed React error boundary was disabled, and imports of class,
forwardRef and proxy component values needed identity-preserving adapters.
Those observations remain potential binding fixes, but this application now
renders DOM directly and no longer depends on npm_typed or React. The former
adapters can be inspected in that commit; they are not current application code.

The new `moonbit/view/` package implements the app's state lifetime, DOM updates,
springs and native panels. It is deliberately scoped to this app, not a complete
replacement for React, Radix or Motion. Before proposing it as a general library,
its API, focus behavior and lifecycle should be reviewed with an existing
MoonBit UI project. The independently packaged WebGL and Web Audio bindings above
remain the more focused upstream candidates. No upstream PR has been submitted.
