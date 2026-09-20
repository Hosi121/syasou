// Typed conversions between opaque browser references.

///|
pub impl @js.ToJs for ResizeObserver with fn to_js(self) -> @js.Any = "%identity"

///|
pub impl @js.FromJs for ResizeObserver with fn from_js(value : @js.Any) -> ResizeObserver = "%identity"

///|
pub impl @js.Same for ResizeObserver with fn same(a, b) {
  @js.same_host(@js.any(a), @js.any(b))
}
