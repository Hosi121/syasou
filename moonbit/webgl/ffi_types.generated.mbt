// Typed conversions between opaque browser references.

///|
pub impl @js_core.ToJs for Context with fn to_js(self) -> @js_core.Any = "%identity"

///|
pub impl @js_core.FromJs for Context with fn from_js(value : @js_core.Any) -> Context = "%identity"

///|
pub impl @js_core.Same for Context with fn same(a, b) {
  @js_core.same_host(@js_core.any(a), @js_core.any(b))
}

///|
pub impl @js_core.ToJs for Shader with fn to_js(self) -> @js_core.Any = "%identity"

///|
pub impl @js_core.FromJs for Shader with fn from_js(value : @js_core.Any) -> Shader = "%identity"

///|
pub impl @js_core.Same for Shader with fn same(a, b) {
  @js_core.same_host(@js_core.any(a), @js_core.any(b))
}

///|
pub impl @js_core.ToJs for Program with fn to_js(self) -> @js_core.Any = "%identity"

///|
pub impl @js_core.FromJs for Program with fn from_js(value : @js_core.Any) -> Program = "%identity"

///|
pub impl @js_core.Same for Program with fn same(a, b) {
  @js_core.same_host(@js_core.any(a), @js_core.any(b))
}

///|
pub impl @js_core.ToJs for Buffer with fn to_js(self) -> @js_core.Any = "%identity"

///|
pub impl @js_core.FromJs for Buffer with fn from_js(value : @js_core.Any) -> Buffer = "%identity"

///|
pub impl @js_core.Same for Buffer with fn same(a, b) {
  @js_core.same_host(@js_core.any(a), @js_core.any(b))
}

///|
pub impl @js_core.ToJs for Uniform with fn to_js(self) -> @js_core.Any = "%identity"

///|
pub impl @js_core.FromJs for Uniform with fn from_js(value : @js_core.Any) -> Uniform = "%identity"

///|
pub impl @js_core.Same for Uniform with fn same(a, b) {
  @js_core.same_host(@js_core.any(a), @js_core.any(b))
}
