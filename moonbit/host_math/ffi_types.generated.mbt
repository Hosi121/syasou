// Typed conversions between opaque browser references.

///|
pub impl @js.ToJs for Math with fn to_js(self) -> @js.Any = "%identity"

///|
pub impl @js.FromJs for Math with fn from_js(value : @js.Any) -> Math = "%identity"

///|
pub impl @js.Same for Math with fn same(a, b) {
  @js.same_host(@js.any(a), @js.any(b))
}
