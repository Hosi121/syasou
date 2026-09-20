// Typed conversions between opaque browser references.

///|
pub impl @js.ToJs for Preferences with fn to_js(self) -> @js.Any = "%identity"

///|
pub impl @js.FromJs for Preferences with fn from_js(value : @js.Any) -> Preferences = "%identity"

///|
pub impl @js.Same for Preferences with fn same(a, b) {
  @js.same_host(@js.any(a), @js.any(b))
}

///|
pub impl @js.ToJs for UiEvent with fn to_js(self) -> @js.Any = "%identity"

///|
pub impl @js.FromJs for UiEvent with fn from_js(value : @js.Any) -> UiEvent = "%identity"

///|
pub impl @js.Same for UiEvent with fn same(a, b) {
  @js.same_host(@js.any(a), @js.any(b))
}

///|
pub impl @js.ToJs for PropertyValue with fn to_js(self) -> @js.Any = "%identity"

///|
pub impl @js.FromJs for PropertyValue with fn from_js(value : @js.Any) -> PropertyValue = "%identity"

///|
pub impl @js.Same for PropertyValue with fn same(a, b) {
  @js.same_host(@js.any(a), @js.any(b))
}
