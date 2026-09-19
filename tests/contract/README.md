# MoonBit migration contract

Source: `a79a3f5`, Node.js `v24.13.0`, locked npm dependencies.
The original TypeScript modules are frozen in `oracle/` (only the import suffix
changes for Node). `signatures/` contains their emitted public declarations.
Existing Playwright tests are the unchanged browser contract.

Scope: `advanceJourney`, `journeyReducer`, `restoreTravel`, `travelReducer`.
All are synchronous ESM functions with structural equality, byte-exact text,
and unchanged object identity when the original reducer returns its input.
Browser storage validation, React, rendering, sound, clocks, and UUID generation
remain TypeScript. This is a domain-logic migration; there is no server or async
I/O/npm binding to port.

`node scripts/generate-domain-fixtures.mjs` generates expected results from the
source implementation; `--check` detects oracle drift. Fixtures include timer
boundaries, pause/resume, untimed work, missed arrivals, duplicate tickets,
welcome replay, partial edits, Unicode, null/undefined, and large timestamps.

Type mapping: epoch milliseconds, durations and arithmetic use MoonBit `Double`
to retain JavaScript `number` behavior (never 32-bit `Int` or JS `bigint`).
Booleans use `Bool`, text uses UTF-16 `String`, actions and phases use enums,
and missing values use `Option` internally. At the JS boundary, nullable timer
fields become explicit `null`; optional metadata and explicit `undefined`
properties retain the original object shape. Ticket order and structural sharing
are part of the contract. Public TypeScript facades retain the captured types;
the compiler's raw JS boundary declarations stay internal.

The original commit remains deployable as the rollback version. Browser E2E
tests replay actual app operations; server traffic shadowing is inapplicable to
this static browser application.

## Runtime compatibility

- UTF-16: JS `slice(0, limit)` can retain a lone high surrogate at a text limit.
  MoonBit StringView slicing rounds to a Unicode boundary. `limit_text` uses
  `unsafe_substring` with bounds proven by `min(length, limit)` to retain the
  original code units. Fixture `edit UTF16 limits` and generated core tests
  cover this. Keep the helper until the public text-length contract changes.
- Whitespace: title extraction preserves the ECMAScript `trim` character set,
  including U+FEFF and excluding U+0085. The pure `js_whitespace` compatibility
  helper can disappear only with an intentional title-format migration.
- Numbers: MoonBit `Double::min/max` do not propagate NaN like JS `Math.min/max`.
  `number_compat.mbt` also retains signed zero. Nonfinite and negative-zero
  oracle cases cover these differences. Durations treat NaN as JS-falsy on start.
  Retire these helpers only if a future public API rejects nonfinite numbers.
- Boundary: `mizchi/js` 0.13 split the base bindings into `mizchi/js_core`.
  Only the bridge imports that package. Its compiler-generated `.d.ts` exposes
  opaque JS values as `any`; the original typed TS facades prevent that type from
  reaching React callers. `check-domain-types.mjs` emits and compares both public
  module declarations byte for byte. No compiler-generated declaration is patched.

References: [ECMAScript String.slice](https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.slice),
[String.trim](https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.trim),
[Math.min](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.min).

Local benchmark (`node scripts/benchmark-domain.mjs`, Node 24.13.0, 1,000
archived tickets): a no-op tick measured ~0.047 ms in MoonBit versus ~0.0002 ms
in TS; arrival measured ~0.059 ms versus ~0.009 ms. Boundary conversion costs
more, but remains below 0.1 ms per action at a 500 ms tick interval. This is
not a performance optimization. The production app chunk grew by ~2.7 kB gzip.
