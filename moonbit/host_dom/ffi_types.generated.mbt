// Typed conversions between opaque browser references.

///|
pub impl @js.ToJs for Node with fn to_js(self) -> @js.Any = "%identity"

///|
pub impl @js.FromJs for Node with fn from_js(value : @js.Any) -> Node = "%identity"

///|
pub impl @js.Same for Node with fn same(a, b) {
  @js.same_host(@js.any(a), @js.any(b))
}

///|
pub impl @js.ToJs for Element with fn to_js(self) -> @js.Any = "%identity"

///|
pub impl @js.FromJs for Element with fn from_js(value : @js.Any) -> Element = "%identity"

///|
pub impl @js.Same for Element with fn same(a, b) {
  @js.same_host(@js.any(a), @js.any(b))
}

///|
pub impl @js.ToJs for Document with fn to_js(self) -> @js.Any = "%identity"

///|
pub impl @js.FromJs for Document with fn from_js(value : @js.Any) -> Document = "%identity"

///|
pub impl @js.Same for Document with fn same(a, b) {
  @js.same_host(@js.any(a), @js.any(b))
}

///|
pub impl @js.ToJs for Window with fn to_js(self) -> @js.Any = "%identity"

///|
pub impl @js.FromJs for Window with fn from_js(value : @js.Any) -> Window = "%identity"

///|
pub impl @js.Same for Window with fn same(a, b) {
  @js.same_host(@js.any(a), @js.any(b))
}

///|
pub impl @js.ToJs for HTMLCanvasElement with fn to_js(self) -> @js.Any = "%identity"

///|
pub impl @js.FromJs for HTMLCanvasElement with fn from_js(value : @js.Any) -> HTMLCanvasElement = "%identity"

///|
pub impl @js.Same for HTMLCanvasElement with fn same(a, b) {
  @js.same_host(@js.any(a), @js.any(b))
}

///|
pub impl @js.ToJs for MediaQueryList with fn to_js(self) -> @js.Any = "%identity"

///|
pub impl @js.FromJs for MediaQueryList with fn from_js(value : @js.Any) -> MediaQueryList = "%identity"

///|
pub impl @js.Same for MediaQueryList with fn same(a, b) {
  @js.same_host(@js.any(a), @js.any(b))
}

///|
pub impl @js.ToJs for Event with fn to_js(self) -> @js.Any = "%identity"

///|
pub impl @js.FromJs for Event with fn from_js(value : @js.Any) -> Event = "%identity"

///|
pub impl @js.Same for Event with fn same(a, b) {
  @js.same_host(@js.any(a), @js.any(b))
}

///|
pub impl @js.ToJs for TouchEvent with fn to_js(self) -> @js.Any = "%identity"

///|
pub impl @js.FromJs for TouchEvent with fn from_js(value : @js.Any) -> TouchEvent = "%identity"

///|
pub impl @js.Same for TouchEvent with fn same(a, b) {
  @js.same_host(@js.any(a), @js.any(b))
}

///|
pub impl @js.ToJs for Touch with fn to_js(self) -> @js.Any = "%identity"

///|
pub impl @js.FromJs for Touch with fn from_js(value : @js.Any) -> Touch = "%identity"

///|
pub impl @js.Same for Touch with fn same(a, b) {
  @js.same_host(@js.any(a), @js.any(b))
}

///|
pub impl @js.ToJs for DOMRect with fn to_js(self) -> @js.Any = "%identity"

///|
pub impl @js.FromJs for DOMRect with fn from_js(value : @js.Any) -> DOMRect = "%identity"

///|
pub impl @js.Same for DOMRect with fn same(a, b) {
  @js.same_host(@js.any(a), @js.any(b))
}
