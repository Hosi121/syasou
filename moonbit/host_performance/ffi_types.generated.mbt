// Typed conversions between opaque browser references.

///|
pub impl @js.ToJs for Performance with fn to_js(self) -> @js.Any = "%identity"

///|
pub impl @js.FromJs for Performance with fn from_js(value : @js.Any) -> Performance = "%identity"

///|
pub impl @js.Same for Performance with fn same(a, b) {
  @js.same_host(@js.any(a), @js.any(b))
}
