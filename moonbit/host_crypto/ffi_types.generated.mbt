// Typed conversions between opaque browser references.

///|
pub impl @js.ToJs for Crypto with fn to_js(self) -> @js.Any = "%identity"

///|
pub impl @js.FromJs for Crypto with fn from_js(value : @js.Any) -> Crypto = "%identity"

///|
pub impl @js.Same for Crypto with fn same(a, b) {
  @js.same_host(@js.any(a), @js.any(b))
}
