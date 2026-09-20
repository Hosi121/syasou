///|
pub struct Renderer {
  canvas : @dom.HTMLCanvasElement
  gl : @gl.Context
  shaders : Array[@gl.Shader]
  program : @gl.Program
  buffer : @js.Nullable[@gl.Buffer]
  resolution : @js.Nullable[@gl.Uniform]
  time : @js.Nullable[@gl.Uniform]
  travel : @js.Nullable[@gl.Uniform]
  scene : @js.Nullable[@gl.Uniform]
  reduced_motion : @dom.MediaQueryList
  mut params : @domain.Landscape
  mut animation_time : Double
  mut travel_time : Double
  mut last_frame : Double
  mut frame : Int
  mut disposed : Bool
  mut lost : Bool
  mut observer : @observer.ResizeObserver?
  mut visibility_callback : ((@js.Any) -> Unit)?
  mut motion_callback : ((@dom.Event) -> Unit)?
  mut lost_callback : ((@js.Any) -> Unit)?
}

///|
fn compile(
  gl : @gl.Context,
  shaders : Array[@gl.Shader],
  program : @gl.Program,
  kind : Int,
  source : String,
) -> Bool {
  guard gl.create_shader(kind).to_option() is Some(shader) else { false }
  shaders.push(shader)
  gl.shader_source(shader, source)
  gl.compile_shader(shader)
  if !gl.shader_compiled(shader) {
    return false
  }
  gl.attach_shader(program, shader)
  true
}

///|
pub fn create_renderer(
  canvas : @dom.HTMLCanvasElement,
  on_unavailable : () -> Unit,
) -> Renderer? {
  guard @gl.context(canvas, {
      alpha: false,
      antialias: false,
      depth: false,
      preserveDrawingBuffer: true,
    }).to_option()
    is Some(gl) else {
    None
  }
  let shaders = []
  guard gl.create_program().to_option() is Some(program) else { None }
  let linked = catch_js(fn() {
    if !compile(gl, shaders, program, 0x8B31, vertex_source) {
      return false
    }
    if !compile(gl, shaders, program, 0x8B30, fragment_source) {
      return false
    }
    gl.link_program(program)
    gl.program_linked(program)
  }).unwrap_or(false)
  if !linked {
    for shader in shaders {
      gl.delete_shader(shader)
    }
    gl.delete_program(program)
    return None
  }
  let buffer = gl.create_buffer()
  gl.bind_buffer(0x8892, buffer)
  gl.buffer_data_f32(
    0x8892,
    [-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0],
    0x88E4,
  )
  gl.use_program(program)
  let position = gl.attribute_location(program, "a_position")
  gl.enable_attribute(position)
  gl.attribute_pointer(position, 2, 0x1406, false, 0, 0)
  let resolution = gl.uniform_location(program, "u_resolution")
  let time = gl.uniform_location(program, "u_time")
  let travel = gl.uniform_location(program, "u_travel")
  let scene = gl.uniform_location(program, "u_scene")
  let reduced_motion = @dom.matchMedia("(prefers-reduced-motion: reduce)")
  let renderer : Renderer = {
    canvas,
    gl,
    shaders,
    program,
    buffer,
    resolution,
    time,
    travel,
    scene,
    reduced_motion,
    params: { scene: "mist", speed: "local", moving: true, travelling: false, },
    animation_time: 0.0,
    travel_time: 0.0,
    last_frame: @performance.performance().now(),
    frame: 0,
    disposed: false,
    lost: false,
    observer: None,
    visibility_callback: None,
    motion_callback: None,
    lost_callback: None,
  }
  let resize_observer = @observer.ResizeObserver::new(fn(_, _) {
    renderer.resize()
  })
  renderer.observer = Some(resize_observer)
  resize_observer.observe(canvas.as_element())
  let visibility = fn(_) { renderer.refresh() }
  let motion = fn(_) { renderer.refresh() }
  let lost = fn(event : @js.Any) {
    let event : @dom.Event = event.cast()
    event.preventDefault()
    renderer.lost = true
    @dom.window().cancelAnimationFrame(renderer.frame)
    set_opacity(canvas, "0")
    on_unavailable()
  }
  renderer.visibility_callback = Some(visibility)
  renderer.motion_callback = Some(motion)
  renderer.lost_callback = Some(lost)
  @dom.document().addEventListener("visibilitychange", visibility)
  reduced_motion.addChangeListener(motion)
  canvas.addEventListener("webglcontextlost", lost)
  renderer.resize()
  Some(renderer)
}

///|
fn Renderer::draw(self : Renderer) -> Unit {
  if self.disposed || self.lost || hidden() {
    return
  }
  self.gl.viewport(0, 0, self.canvas.width(), self.canvas.height())
  self.gl.uniform2f(
    self.resolution,
    self.canvas.width().to_double(),
    self.canvas.height().to_double(),
  )
  self.gl.uniform1f(self.time, self.animation_time)
  self.gl.uniform1f(
    self.travel,
    if self.reduced_motion.matches() {
      0.0
    } else {
      self.travel_time
    },
  )
  self.gl.uniform1f(self.scene, @domain.scene_index(self.params.scene))
  self.gl.draw_arrays(0x0004, 0, 6)
}

///|
fn Renderer::animate(self : Renderer, now : Double) -> Unit {
  self.frame = 0
  if self.disposed ||
    self.lost ||
    hidden() ||
    self.reduced_motion.matches() ||
    !self.params.moving {
    return
  }
  let elapsed = now - self.last_frame
  if elapsed >= 1000.0 / 24.0 {
    self.animation_time += @domain.animation_delta(elapsed, self.params.speed)
    if self.params.travelling {
      self.travel_time += @domain.travel_delta(elapsed)
    }
    self.last_frame = now
    self.draw()
  }
  self.frame = @dom.window().requestAnimationFrame(fn(now) { self.animate(now) })
}

///|
fn Renderer::refresh(self : Renderer) -> Unit {
  @dom.window().cancelAnimationFrame(self.frame)
  self.frame = 0
  self.last_frame = @performance.performance().now()
  self.draw()
  if !self.disposed &&
    !self.lost &&
    !hidden() &&
    !self.reduced_motion.matches() &&
    self.params.moving {
    self.frame = @dom.window().requestAnimationFrame(fn(now) {
      self.animate(now)
    })
  }
}

///|
fn Renderer::resize(self : Renderer) -> Unit {
  let rect = bounds(self.canvas)
  self.canvas.set_width(@math.Math::round(rect.width()).max(1))
  self.canvas.set_height(@math.Math::round(rect.height()).max(1))
  self.refresh()
}

///|
pub fn Renderer::update(self : Renderer, params : @domain.Landscape) -> Unit {
  if !params.travelling {
    self.travel_time = 0.0
  }
  self.params = params
  self.refresh()
}

///|
pub fn Renderer::dispose(self : Renderer) -> Unit {
  self.disposed = true
  @dom.window().cancelAnimationFrame(self.frame)
  if self.observer is Some(observer) {
    observer.disconnect()
  }
  if self.visibility_callback is Some(callback) {
    @dom.document().removeEventListener("visibilitychange", callback)
  }
  if self.motion_callback is Some(callback) {
    self.reduced_motion.removeChangeListener(callback)
  }
  if self.lost_callback is Some(callback) {
    self.canvas.removeEventListener("webglcontextlost", callback)
  }
  self.gl.delete_buffer(self.buffer)
  for shader in self.shaders {
    self.gl.delete_shader(shader)
  }
  self.gl.delete_program(self.program)
}
