// Typed conversions between opaque browser references.

///|
pub impl @js.ToJs for URLSearchParams with fn to_js(self) -> @js.Any = "%identity"

///|
pub impl @js.FromJs for URLSearchParams with fn from_js(value : @js.Any) -> URLSearchParams = "%identity"

///|
pub impl @js.Same for URLSearchParams with fn same(a, b) {
  @js.same_host(@js.any(a), @js.any(b))
}
