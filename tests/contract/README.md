# MoonBit migration contract

Source: `a79a3f5`, Node.js `v24.13.0`, locked npm dependencies.
The original TypeScript modules are frozen in `oracle/` (only runtime import
suffixes change for Node). `appStorage.ts` captures the two inline App predicates
with standalone names and parameter annotations; the expressions are unchanged. `signatures/` contains the emitted declarations.
The additional source at `84f571e` supplies `sampleTickets.ts` unchanged.
`journeyLegacy.ts` extracts the legacy conversion and remaining-time expression
from `useJourney.ts`, with clock/UUID calls injected as callbacks.
`ticketInteraction.ts` extracts the numeric expressions from
`TouchableTicket.tsx` and the serial calculation from `TicketCard.tsx`.
These helpers were captured and their declarations emitted before the MoonBit
implementation replaced them. The UI migration additionally freezes six TSX
components and four helper modules from `aaffee3` in `oracle/ui/` and
`oracle/helpers/`; only their relative library imports change. Rendering output
was captured before replacing those components. UI effects, pointer guards,
state, effects and startup now also live in MoonBit.
Existing Playwright tests are the unchanged browser contract.
They run locally or through the manually dispatched `Browser verification`
workflow. Routine push/PR CI verifies the pure core, API contracts and build.

## Scope and boundaries

| Implementation | MoonBit location | Contract retained by TypeScript facade |
| --- | --- | --- |
| Journey and ticket transitions | `domain/journey.mbt`, `domain/tickets.mbt` | `advanceJourney`, `journeyReducer`, `restoreTravel`, `travelReducer` |
| Legacy journey conversion and remaining time | `domain/legacy.mbt` | `migrateLegacyJourney`, `journeyRemaining`; lazy clock/UUID calls, unchanged idle/finished identity |
| Ticket handling and serial numbers | `domain/interaction.mbt` | grip/lift/drag/hover/release, face and shadow calculation, continuous resting angle, `ticketSerial` |
| Demo tickets | `domain/samples.mbt` | `sampleTickets`; exact text, order, IDs and timestamps |
| Persisted data validation | `domain/validation.mbt` | `isPreferences`, `isJourney`, `isTicket`, `isTravelState`, `isView`, `isNote`, `isStoredBoolean` |
| Browser persistence | `browser/platform.mbt` | generic `readStorage`, boolean `writeStorage` |
| WebGL renderer and shaders | `browser/window.mbt`, `browser/shaders.mbt` | `createWindowRenderer` with update/dispose |
| Audio synthesis and scheduling | `browser/sound.mbt`, `domain/ambience.mbt` | `TrainSound` constructor, enable/disable/update/dispose |
| Screens, DOM updates, state and lifecycle | `ui/`, `view/` | original DOM, labels, focus, pointer behavior and browser scenarios |
| Startup and scenery resources | `wasm/`, `ui/startup.mbt` | title loading state, delayed style import, failed download/retry |
| Presentation and initial settings | `domain/presentation.mbt`, `bridge/presentation.mbt` | `formatTime`, `cn`, demo profile, defaults, view metadata |

The pure domain package has no JS imports and runs on both JS and native.
The browser package owns API calls and lifecycle management. The bridge converts
JS values into typed records, enums and opaque handles. The local `interop` and `host_*` packages provide typed conversions, storage, DOM, promises, observers, time and randomness for both JS and Wasm-GC. `webgl` and `webaudio` provide the graphics/audio API subset. Browser import bodies are generated from the same FFI declarations; they contain no game logic.

All application behavior is authored in MoonBit, including DOM reconciliation,
pointer capture, input-field exclusions, subscriptions, reduced-motion handling,
springs, locale formatting, session storage and visual-viewport effects.
`view/` is the app's DOM runtime; native dialog, DOM events and Web Animations
provide browser primitives. React, ReactDOM, Motion, Radix, Lucide React and
`mizchi/npm_typed` are removed from the application dependencies. Lucide SVG
geometry remains with its ISC license. The runtime is scoped to this application;
it does not promise the general APIs of the removed frameworks.
The two TSX entry shims retain CSS loading and Vite's lazy module boundary.
Existing `src/lib/` files preserve typed public APIs by delegating to MoonBit.
CSS, development scripts, Playwright tests and frozen oracles retain their
original languages.
GLSL shader text is stored byte-exact in MoonBit; it still runs as GLSL on the GPU.
The production entry compiles to Wasm-GC. Its binary and generated browser imports are committed with a hash manifest, so Vercel's normal Node/Vite build needs no MoonBit installation. JS ESM is retained for the existing public `src/lib/` API; the application does not load it. UI JS is built only for contract comparison and is not committed.

## Verification

`npm run fixtures:domain` captures results from the frozen TS source and generates
1,045 direct domain tests. Never edit expected fixtures or generated tests by hand.
`npm run check:domain` checks regeneration, oracle drift and public declarations.
`npm run test:moonbit` runs the domain tests plus a fractional audio-sample binding
test and seven view-state/lifecycle regressions; `node scripts/moon-command.mjs test moonbit/domain --target native` tests the
pure core without JS. `npm run test:domain` compares:

- 207 reducer fixtures: timer boundaries, pause/resume, untimed work, missed
  arrivals, duplicates, welcome replay, partial edits, Unicode, null/undefined,
  nonfinite numbers and large timestamps. Values, object identity, property
  presence, ticket order and input immutability must match.
- 435 validator fixtures: note length, stored booleans, malformed persisted fields, missing values, invalid
  metadata, duplicates, pending arrival references and number boundaries.
  Validation accepts plain persisted JSON objects; exotic getters/proxies and
  sparse non-JSON arrays are outside this captured persistence contract.
- 437 interaction/legacy/sample fixtures through the public TS facades: both
  turn directions, exact 30% threshold and its neighbors, cancellation, button
  flips, fractional/zero dimensions, angle boundaries, Unicode serials, sample
  text and timestamps, old save states, optional property presence, input
  immutability and clock/UUID call order. JS callback failures are checked at the
  JS boundary; the other 435 fixtures also generate direct native/JS tests.
- 15 browser traces against the actual TS facades: shader source hashes,
  nullable/failed WebGL resources, context loss, resizing, frame scheduling,
  hidden/reduced-motion states, listener removal, audio graph and envelopes,
  deterministic Float32 samples, promise failures, disposal, corrupt JSON,
  throwing validators and blocked storage. Node-only TS resolution lives in the
  runner. The production app uses normal Vite resolution.

- 21 semantic HTML comparisons against unchanged React SSR fixtures from the frozen TSX: rail mark, route map,
  ticket kinds/sides/editable fields, settings states, SVG landscape and title
  loading/ready/leaving/error states. Dates use UTC for this comparison.
  Comparison ignores only server preload hints, Radix collection markers and
  post-mount radio tab stops, identity transform spelling, and the spring-backed
  card rotation absent from Motion's SSR output. Text, structure, remaining
  attributes, SVG paths and styles are compared. Browser tests check keyboard
  focus, pointer capture, rotation, dialogs and animation completion.
  The optional `oracle/ui/package.json` and lockfile reproduce the legacy source
  with `npm ci --prefix tests/contract/oracle/ui` followed by
  `npm run capture --prefix tests/contract/oracle/ui`. Routine CI reads the
  frozen fixtures and does not install React or start a browser.
- 30 helper results: duration rounding and nonfinite/large inputs, clsx/Tailwind
  merging, URL-encoded and repeated demo parameters, default settings, initial
  journey and view metadata. These also come from frozen TypeScript.

`npm test` and `npm run test:mobile` verify real Chromium/WebKit behavior. Mock
traces complement these tests; they do not emulate a GPU or audio device.
The full CI run at `540e05b` passed 41 desktop scenarios and exceeded the 30-second
test timeout in `the passing landscape moves, holds its position when paused,
and resumes` ([run](https://github.com/Hosi121/syasou/actions/runs/35463902474)).
The same scenario passed locally. Moving E2E to manual execution does not resolve
that timeout; use the desktop suite with trace enabled to investigate it.
For the full UI migration, all 42 desktop scenarios and 8 Android Chromium
scenarios passed locally without changing their assertions. Four existing
scenarios also passed against the production Vite build (journey, demo editing,
audio/window/fullscreen and scenery persistence). Production lazy-download
failure and retry were checked separately. iPhone WebKit was not revalidated
in this migration.
The original commit remains a deployable rollback. Server traffic shadowing
is inapplicable to this static, browser-local application.

## Runtime compatibility

- Epoch milliseconds and durations use `Double`, never 32-bit `Int` or JS bigint.
  `number_compat.mbt` preserves JS NaN propagation and signed zero; untimed
  duration logic preserves JS-falsy NaN. Fixtures cover these differences.
- Strings retain UTF-16 code units. JS `slice` may end on a high surrogate;
  `limit_text` uses `unsafe_substring` with bounded indices to retain that result.
  Title trimming implements ECMAScript whitespace, including U+FEFF and excluding
  U+0085. Remove these helpers only with an intentional text-contract change.
- Ticket serials preserve `Array.from(id)` code-point iteration followed by
  `charCodeAt(0)`: a surrogate pair contributes only its high surrogate, while
  lone surrogates contribute themselves. `UInt` arithmetic preserves each
  `>>> 0` wrap. Keep this behavior while existing tickets retain their printed
  serials; change it only as an intentional serial-format change.
- Pointer coordinates, dimensions and angles use `Double`. Motion clamping uses
  the same NaN/signed-zero compatibility helpers as the journey reducer.
  The frozen fixtures require exact numeric parity, including native tests.
- Boundary conversion retains explicit `null`, optional/missing/undefined fields,
  reducer structural sharing and fallback object identity. Validation converts
  scalar fields to `Field` variants before pure domain decisions.
- Raw compiler declarations expose opaque JS values as `any` internally. The
  nine public TS facade modules retain their captured declarations. Only private
  member names in `TrainSound` are excluded from declaration comparison: its
  private engine replaces private audio nodes; public methods are unchanged.
  Generated declarations are never patched. UI comparison artifacts and declarations remain under `_build/`; production exports only the Wasm startup function.
- Audio and WebGL use typed extern bindings. Fractional samples use `Double` at
  the JS boundary and Float32Array rounding at storage. WebGL nullable handles
  retain JS null. Context options are converted into a plain JS dictionary.
  Missing upstream APIs and a Float32Array typing issue are documented in
  [upstream candidates](../../docs/upstream-bindings.md).

References: [ECMAScript String.slice](https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.slice),
[String.trim](https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.trim),
[Math.min](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.min).

Run `node scripts/benchmark-domain.mjs` for local reducer timings. Boundary
conversion adds work proportional to archived tickets; migration is not a
performance optimization. Browser scheduling retains the original 24 fps cap
and 500 ms journey tick; hidden or stationary scenes stop requesting frames.


## Wasm execution

`npm run test:wasm` runs the same 207 reducer, 435 validation, 437 interaction,
15 browser trace and 21 semantic UI fixtures through a compiled Wasm module.
The helper runner compares duration/profile/default/view outputs through Wasm;
the five `cn` cases continue to exercise the existing JS-only compatibility API.
Fixtures and browser scenario assertions are unchanged. The extra nullable
persistence regression checks that a null fallback never hides a valid save,
and that saving/reading an explicit null retains its meaning.

The production module and the contract module compile the same MoonBit packages.
Only the contract module exports the extra inspection functions; it is not
shipped. Wasm Bool returns are converted to actual JS booleans at the contract
boundary. Browser imports convert Bool arguments from the i32 ABI before calling
host APIs. Array conversion is explicit; unchanged ticket arrays preserve their
original JS identity.

See [Wasm runtime](../../docs/wasm-runtime.md) for the pinned ABI, startup and
browser requirements. `ac87522` is the preceding deployable JS-target version.

Migration browser checks: desktop Chromium 42/42 and Android Chromium 8/8.
After the startup recovery fix, a desktop rerun passed 40 scenarios and timed out
in two ticket scenarios while their DOM was replaced (one recorded a navigation).
Both passed unchanged in an isolated rerun; no timeout or assertion was relaxed.
WebKit passed six scenarios, skipped the Chromium-only touch injection scenario,
and failed the rotation extent assertion (expected right edge >= 844, observed
472.8359375). The exact same failure reproduces against `ac87522`; it is a known
pre-existing WebKit limitation, not a passing result. Production failure injection
also verified recovery from Wasm download/compile, CSS download, initial mount
and world render failures, plus the Wasm response MIME type.
