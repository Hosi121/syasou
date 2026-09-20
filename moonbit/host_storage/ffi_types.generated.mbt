// Typed conversions between opaque browser references.

///|
pub impl @js.ToJs for Storage with fn to_js(self) -> @js.Any = "%identity"

///|
pub impl @js.FromJs for Storage with fn from_js(value : @js.Any) -> Storage = "%identity"

///|
pub impl @js.Same for Storage with fn same(a, b) {
  @js.same_host(@js.any(a), @js.any(b))
}
