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
implementation replaced them. UI effects and event guards remain in React.
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

The pure domain package has no JS imports and runs on both JS and native.
The browser package owns API calls and lifecycle management. The bridge converts
JS values into typed records, enums and opaque handles. Existing `mizchi/js_core`,
`js_browser`, `js_builtin` and `js_web` bindings provide storage, DOM, promises,
observers, time and randomness. Local `webgl` and `webaudio` packages supply the
missing typed API subset; they contain no application logic.

React components, hooks, locale-dependent date/time formatting, demo storage-key selection,
clock/UUID inputs, startup sessionStorage flags, CSS scenery and the SVG fallback
remain TypeScript/React.
React still owns pointer capture, input-field exclusions, event subscriptions,
reduced-motion handling and applying the calculated poses to Motion springs.
GLSL shader text is stored byte-exact in MoonBit; it still runs as GLSL on the GPU.
The compiler emits ESM committed with generated declarations and a hash manifest,
so Vercel's normal Node/Vite build needs no MoonBit installation.

## Verification

`npm run fixtures:domain` captures results from the frozen TS source and generates
1,045 direct domain tests. Never edit expected fixtures or generated tests by hand.
`npm run check:domain` checks regeneration, oracle drift and public declarations.
`npm run test:moonbit` runs the domain tests plus a fractional audio-sample binding
test; `node scripts/moon-command.mjs test moonbit/domain --target native` tests the
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

`npm test` and `npm run test:mobile` verify real Chromium/WebKit behavior. Mock
traces complement these tests; they do not emulate a GPU or audio device.
The full CI run at `540e05b` passed 41 desktop scenarios and exceeded the 30-second
test timeout in `the passing landscape moves, holds its position when paused,
and resumes` ([run](https://github.com/Hosi121/syasou/actions/runs/35463902474)).
The same scenario passed locally. Moving E2E to manual execution does not resolve
that timeout; use the desktop suite with trace enabled to investigate it.
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
  Generated declarations are never patched.
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
