// Typed conversions between opaque browser references.

///|
pub impl @js.ToJs for Date with fn to_js(self) -> @js.Any = "%identity"

///|
pub impl @js.FromJs for Date with fn from_js(value : @js.Any) -> Date = "%identity"

///|
pub impl @js.Same for Date with fn same(a, b) {
  @js.same_host(@js.any(a), @js.any(b))
}
