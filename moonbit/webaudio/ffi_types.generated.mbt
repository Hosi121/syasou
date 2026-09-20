// Typed conversions between opaque browser references.

///|
pub impl @js_core.ToJs for AudioContext with fn to_js(self) -> @js_core.Any = "%identity"

///|
pub impl @js_core.FromJs for AudioContext with fn from_js(value : @js_core.Any) -> AudioContext = "%identity"

///|
pub impl @js_core.Same for AudioContext with fn same(a, b) {
  @js_core.same_host(@js_core.any(a), @js_core.any(b))
}

///|
pub impl @js_core.ToJs for AudioNode with fn to_js(self) -> @js_core.Any = "%identity"

///|
pub impl @js_core.FromJs for AudioNode with fn from_js(value : @js_core.Any) -> AudioNode = "%identity"

///|
pub impl @js_core.Same for AudioNode with fn same(a, b) {
  @js_core.same_host(@js_core.any(a), @js_core.any(b))
}

///|
pub impl @js_core.ToJs for AudioParam with fn to_js(self) -> @js_core.Any = "%identity"

///|
pub impl @js_core.FromJs for AudioParam with fn from_js(value : @js_core.Any) -> AudioParam = "%identity"

///|
pub impl @js_core.Same for AudioParam with fn same(a, b) {
  @js_core.same_host(@js_core.any(a), @js_core.any(b))
}

///|
pub impl @js_core.ToJs for GainNode with fn to_js(self) -> @js_core.Any = "%identity"

///|
pub impl @js_core.FromJs for GainNode with fn from_js(value : @js_core.Any) -> GainNode = "%identity"

///|
pub impl @js_core.Same for GainNode with fn same(a, b) {
  @js_core.same_host(@js_core.any(a), @js_core.any(b))
}

///|
pub impl @js_core.ToJs for BiquadFilterNode with fn to_js(self) -> @js_core.Any = "%identity"

///|
pub impl @js_core.FromJs for BiquadFilterNode with fn from_js(
  value : @js_core.Any,
) -> BiquadFilterNode = "%identity"

///|
pub impl @js_core.Same for BiquadFilterNode with fn same(a, b) {
  @js_core.same_host(@js_core.any(a), @js_core.any(b))
}

///|
pub impl @js_core.ToJs for DynamicsCompressorNode with fn to_js(self) -> @js_core.Any = "%identity"

///|
pub impl @js_core.FromJs for DynamicsCompressorNode with fn from_js(
  value : @js_core.Any,
) -> DynamicsCompressorNode = "%identity"

///|
pub impl @js_core.Same for DynamicsCompressorNode with fn same(a, b) {
  @js_core.same_host(@js_core.any(a), @js_core.any(b))
}

///|
pub impl @js_core.ToJs for AudioBuffer with fn to_js(self) -> @js_core.Any = "%identity"

///|
pub impl @js_core.FromJs for AudioBuffer with fn from_js(value : @js_core.Any) -> AudioBuffer = "%identity"

///|
pub impl @js_core.Same for AudioBuffer with fn same(a, b) {
  @js_core.same_host(@js_core.any(a), @js_core.any(b))
}

///|
pub impl @js_core.ToJs for AudioBufferSourceNode with fn to_js(self) -> @js_core.Any = "%identity"

///|
pub impl @js_core.FromJs for AudioBufferSourceNode with fn from_js(
  value : @js_core.Any,
) -> AudioBufferSourceNode = "%identity"

///|
pub impl @js_core.Same for AudioBufferSourceNode with fn same(a, b) {
  @js_core.same_host(@js_core.any(a), @js_core.any(b))
}

///|
pub impl @js_core.ToJs for OscillatorNode with fn to_js(self) -> @js_core.Any = "%identity"

///|
pub impl @js_core.FromJs for OscillatorNode with fn from_js(
  value : @js_core.Any,
) -> OscillatorNode = "%identity"

///|
pub impl @js_core.Same for OscillatorNode with fn same(a, b) {
  @js_core.same_host(@js_core.any(a), @js_core.any(b))
}

///|
pub impl @js_core.ToJs for Samples with fn to_js(self) -> @js_core.Any = "%identity"

///|
pub impl @js_core.FromJs for Samples with fn from_js(value : @js_core.Any) -> Samples = "%identity"

///|
pub impl @js_core.Same for Samples with fn same(a, b) {
  @js_core.same_host(@js_core.any(a), @js_core.any(b))
}
