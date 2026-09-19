// Minimal Web Audio bindings. Numeric sample access uses Double, not Int.

///|
#external
pub type AudioContext

///|
#external
pub type AudioNode

///|
#external
pub type AudioParam

///|
#external
pub type GainNode

///|
#external
pub type BiquadFilterNode

///|
#external
pub type DynamicsCompressorNode

///|
#external
pub type AudioBuffer

///|
#external
pub type AudioBufferSourceNode

///|
#external
pub type OscillatorNode

///|
#external
pub type Samples

///|
pub extern "js" fn AudioContext::AudioContext() -> AudioContext =
  #| () => new AudioContext()

///|
pub extern "js" fn AudioContext::sample_rate(self : AudioContext) -> Double =
  #| ctx => ctx.sampleRate

///|
pub extern "js" fn AudioContext::current_time(self : AudioContext) -> Double =
  #| ctx => ctx.currentTime

///|
pub extern "js" fn AudioContext::state(self : AudioContext) -> String =
  #| ctx => ctx.state

///|
pub extern "js" fn AudioContext::destination(self : AudioContext) -> AudioNode =
  #| ctx => ctx.destination

///|
pub extern "js" fn AudioContext::create_gain(self : AudioContext) -> GainNode =
  #| ctx => ctx.createGain()

///|
pub extern "js" fn AudioContext::create_filter(
  self : AudioContext,
) -> BiquadFilterNode =
  #| ctx => ctx.createBiquadFilter()

///|
pub extern "js" fn AudioContext::create_compressor(
  self : AudioContext,
) -> DynamicsCompressorNode =
  #| ctx => ctx.createDynamicsCompressor()

///|
pub extern "js" fn AudioContext::create_buffer(
  self : AudioContext,
  channels : Int,
  length : Int,
  rate : Double,
) -> AudioBuffer =
  #| (ctx, channels, length, rate) => ctx.createBuffer(channels, length, rate)

///|
pub extern "js" fn AudioContext::create_source(
  self : AudioContext,
) -> AudioBufferSourceNode =
  #| ctx => ctx.createBufferSource()

///|
pub extern "js" fn AudioContext::create_oscillator(
  self : AudioContext,
) -> OscillatorNode =
  #| ctx => ctx.createOscillator()

///|
pub extern "js" fn AudioNode::connect(
  self : AudioNode,
  destination : AudioNode,
) -> AudioNode =
  #| (node, destination) => node.connect(destination)

///|
pub extern "js" fn AudioNode::disconnect(self : AudioNode) -> Unit =
  #| node => node.disconnect()

///|
pub extern "js" fn AudioParam::set_value(
  self : AudioParam,
  value : Double,
) -> Unit =
  #| (param, value) => { param.value = value }

///|
pub extern "js" fn AudioParam::target(
  self : AudioParam,
  value : Double,
  time : Double,
  constant : Double,
) -> Unit =
  #| (param, value, time, constant) => param.setTargetAtTime(value, time, constant)

///|
pub extern "js" fn AudioParam::at_time(
  self : AudioParam,
  value : Double,
  time : Double,
) -> Unit =
  #| (param, value, time) => param.setValueAtTime(value, time)

///|
pub extern "js" fn AudioParam::exponential_ramp(
  self : AudioParam,
  value : Double,
  time : Double,
) -> Unit =
  #| (param, value, time) => param.exponentialRampToValueAtTime(value, time)

///|
pub extern "js" fn GainNode::gain(self : GainNode) -> AudioParam =
  #| node => node.gain

///|
pub extern "js" fn BiquadFilterNode::set_type(
  self : BiquadFilterNode,
  kind : String,
) -> Unit =
  #| (node, kind) => { node.type = kind }

///|
pub extern "js" fn BiquadFilterNode::frequency(
  self : BiquadFilterNode,
) -> AudioParam =
  #| node => node.frequency

///|
pub extern "js" fn BiquadFilterNode::q(self : BiquadFilterNode) -> AudioParam =
  #| node => node.Q

///|
pub extern "js" fn DynamicsCompressorNode::threshold(
  self : DynamicsCompressorNode,
) -> AudioParam =
  #| node => node.threshold

///|
pub extern "js" fn DynamicsCompressorNode::ratio(
  self : DynamicsCompressorNode,
) -> AudioParam =
  #| node => node.ratio

///|
pub extern "js" fn AudioBuffer::channel(
  self : AudioBuffer,
  channel : Int,
) -> Samples =
  #| (buffer, channel) => buffer.getChannelData(channel)

///|
pub extern "js" fn Samples::length(self : Samples) -> Int =
  #| samples => samples.length

///|
pub extern "js" fn Samples::get(self : Samples, index : Int) -> Double =
  #| (samples, index) => samples[index]

///|
pub extern "js" fn Samples::set(
  self : Samples,
  index : Int,
  value : Double,
) -> Unit =
  #| (samples, index, value) => { samples[index] = value }

///|
pub extern "js" fn AudioBufferSourceNode::set_buffer(
  self : AudioBufferSourceNode,
  buffer : AudioBuffer,
) -> Unit =
  #| (node, buffer) => { node.buffer = buffer }

///|
pub extern "js" fn AudioBufferSourceNode::set_loop(
  self : AudioBufferSourceNode,
  value : Bool,
) -> Unit =
  #| (node, value) => { node.loop = value }

///|
pub extern "js" fn AudioBufferSourceNode::start(
  self : AudioBufferSourceNode,
  time : Double,
  offset : Double,
) -> Unit =
  #| (node, time, offset) => node.start(time, offset)

///|
pub extern "js" fn AudioBufferSourceNode::stop(
  self : AudioBufferSourceNode,
  time : Double,
) -> Unit =
  #| (node, time) => node.stop(time)

///|
pub extern "js" fn AudioBufferSourceNode::stop_now(
  self : AudioBufferSourceNode,
) -> Unit =
  #| node => node.stop()

///|
pub extern "js" fn AudioBufferSourceNode::on_ended(
  self : AudioBufferSourceNode,
  callback : () -> Unit,
) -> Unit =
  #| (node, callback) => { node.onended = callback }

///|
pub extern "js" fn OscillatorNode::frequency(
  self : OscillatorNode,
) -> AudioParam =
  #| node => node.frequency

///|
pub extern "js" fn OscillatorNode::start(self : OscillatorNode) -> Unit =
  #| node => node.start()

///|
pub extern "js" fn OscillatorNode::stop(self : OscillatorNode) -> Unit =
  #| node => node.stop()

///|
pub extern "js" fn AudioContext::resume_(
  self : AudioContext,
) -> @js_core.Promise[Unit] =
  #| ctx => ctx.resume()

///|
pub extern "js" fn AudioContext::suspend(
  self : AudioContext,
) -> @js_core.Promise[Unit] =
  #| ctx => ctx.suspend()

///|
pub extern "js" fn AudioContext::close(
  self : AudioContext,
) -> @js_core.Promise[Unit] =
  #| ctx => ctx.close()

///|
pub fn GainNode::as_node(self : GainNode) -> AudioNode = "%identity"

///|
pub fn BiquadFilterNode::as_node(self : BiquadFilterNode) -> AudioNode = "%identity"

///|
pub fn DynamicsCompressorNode::as_node(
  self : DynamicsCompressorNode,
) -> AudioNode = "%identity"

///|
pub fn AudioBufferSourceNode::as_node(
  self : AudioBufferSourceNode,
) -> AudioNode = "%identity"

///|
pub fn OscillatorNode::as_node(self : OscillatorNode) -> AudioNode = "%identity"
