// Minimal WebGL 1 bindings, independent of the application.

///|
#external
pub type Context

///|
#external
pub type Shader

///|
#external
pub type Program

///|
#external
pub type Buffer

///|
#external
pub type Uniform

///|
pub extern "js" fn context(
  canvas : @dom.HTMLCanvasElement,
  options : ContextOptions,
) -> @js_core.Nullable[Context] =
  #| (canvas, options) => canvas.getContext("webgl", {
  #|   alpha: options.alpha, antialias: options.antialias, depth: options.depth,
  #|   preserveDrawingBuffer: options.preserveDrawingBuffer
  #| })

///|
pub(all) struct ContextOptions {
  alpha : Bool
  antialias : Bool
  depth : Bool
  preserveDrawingBuffer : Bool
}

///|
pub extern "js" fn Context::create_shader(
  self : Context,
  kind : Int,
) -> @js_core.Nullable[Shader] =
  #| (gl, kind) => gl.createShader(kind)

///|
pub extern "js" fn Context::shader_source(
  self : Context,
  shader : Shader,
  source : String,
) -> Unit =
  #| (gl, shader, source) => gl.shaderSource(shader, source)

///|
pub extern "js" fn Context::compile_shader(
  self : Context,
  shader : Shader,
) -> Unit =
  #| (gl, shader) => gl.compileShader(shader)

///|
pub extern "js" fn Context::shader_compiled(
  self : Context,
  shader : Shader,
) -> Bool =
  #| (gl, shader) => gl.getShaderParameter(shader, gl.COMPILE_STATUS)

///|
pub extern "js" fn Context::create_program(
  self : Context,
) -> @js_core.Nullable[Program] =
  #| (gl) => gl.createProgram()

///|
pub extern "js" fn Context::attach_shader(
  self : Context,
  program : Program,
  shader : Shader,
) -> Unit =
  #| (gl, program, shader) => gl.attachShader(program, shader)

///|
pub extern "js" fn Context::link_program(
  self : Context,
  program : Program,
) -> Unit =
  #| (gl, program) => gl.linkProgram(program)

///|
pub extern "js" fn Context::program_linked(
  self : Context,
  program : Program,
) -> Bool =
  #| (gl, program) => gl.getProgramParameter(program, gl.LINK_STATUS)

///|
pub extern "js" fn Context::create_buffer(
  self : Context,
) -> @js_core.Nullable[Buffer] =
  #| (gl) => gl.createBuffer()

///|
pub extern "js" fn Context::bind_buffer(
  self : Context,
  target : Int,
  buffer : @js_core.Nullable[Buffer],
) -> Unit =
  #| (gl, target, buffer) => gl.bindBuffer(target, buffer)

///|
pub extern "js" fn Context::buffer_data_f32(
  self : Context,
  target : Int,
  values : FixedArray[Double],
  usage : Int,
) -> Unit =
  #| (gl, target, values, usage) => gl.bufferData(target, new Float32Array(values), usage)

///|
pub extern "js" fn Context::use_program(
  self : Context,
  program : Program,
) -> Unit =
  #| (gl, program) => gl.useProgram(program)

///|
pub extern "js" fn Context::attribute_location(
  self : Context,
  program : Program,
  name : String,
) -> Int =
  #| (gl, program, name) => gl.getAttribLocation(program, name)

///|
pub extern "js" fn Context::enable_attribute(
  self : Context,
  location : Int,
) -> Unit =
  #| (gl, location) => gl.enableVertexAttribArray(location)

///|
pub extern "js" fn Context::attribute_pointer(
  self : Context,
  location : Int,
  size : Int,
  kind : Int,
  normalized : Bool,
  stride : Int,
  offset : Int,
) -> Unit =
  #| (gl, location, size, kind, normalized, stride, offset) => gl.vertexAttribPointer(location, size, kind, normalized, stride, offset)

///|
pub extern "js" fn Context::uniform_location(
  self : Context,
  program : Program,
  name : String,
) -> @js_core.Nullable[Uniform] =
  #| (gl, program, name) => gl.getUniformLocation(program, name)

///|
pub extern "js" fn Context::viewport(
  self : Context,
  x : Int,
  y : Int,
  width : Int,
  height : Int,
) -> Unit =
  #| (gl, x, y, width, height) => gl.viewport(x, y, width, height)

///|
pub extern "js" fn Context::uniform1f(
  self : Context,
  location : @js_core.Nullable[Uniform],
  value : Double,
) -> Unit =
  #| (gl, location, value) => gl.uniform1f(location, value)

///|
pub extern "js" fn Context::uniform2f(
  self : Context,
  location : @js_core.Nullable[Uniform],
  x : Double,
  y : Double,
) -> Unit =
  #| (gl, location, x, y) => gl.uniform2f(location, x, y)

///|
pub extern "js" fn Context::draw_arrays(
  self : Context,
  mode : Int,
  first : Int,
  count : Int,
) -> Unit =
  #| (gl, mode, first, count) => gl.drawArrays(mode, first, count)

///|
pub extern "js" fn Context::delete_buffer(
  self : Context,
  buffer : @js_core.Nullable[Buffer],
) -> Unit =
  #| (gl, buffer) => gl.deleteBuffer(buffer)

///|
pub extern "js" fn Context::delete_shader(
  self : Context,
  shader : Shader,
) -> Unit =
  #| (gl, shader) => gl.deleteShader(shader)

///|
pub extern "js" fn Context::delete_program(
  self : Context,
  program : Program,
) -> Unit =
  #| (gl, program) => gl.deleteProgram(program)
