///|
fn read_grip(value : @js.Any) -> @domain.TicketGrip {
  {
    x: value._get("x").cast(),
    y: value._get("y").cast(),
    width: value._get("width").cast(),
    height: value._get("height").cast(),
    base: value._get("base").cast(),
    back: value._get("back").cast(),
    dx: value._get("dx").cast(),
    edge: value._get("edge").cast(),
  }
}

///|
pub fn ticket_is_back(angle : Double) -> Bool {
  @domain.ticket_is_back(angle)
}

///|
pub fn ticket_shadow_width(angle : Double) -> Double {
  @domain.ticket_shadow_width(angle)
}

///|
pub fn ticket_resting_angle(angle : Double, back : Bool) -> Double {
  @domain.ticket_resting_angle(angle, back)
}

///|
pub fn ticket_serial(id : String) -> String {
  @domain.ticket_serial(id)
}

///|
pub fn begin_ticket_grip(
  x : Double,
  y : Double,
  left : Double,
  width : Double,
  height : Double,
  base : Double,
  back : Bool,
) -> @js.Any {
  let grip = @domain.begin_ticket_grip(x, y, left, width, height, base, back)
  let out = @js.new_object()
  out._set("x", @js.any(grip.x))
  out._set("y", @js.any(grip.y))
  out._set("width", @js.any(grip.width))
  out._set("height", @js.any(grip.height))
  out._set("base", @js.any(grip.base))
  out._set("back", @js.any(grip.back))
  out._set("dx", @js.any(grip.dx))
  out._set("edge", @js.any(grip.edge))
  out
}

///|
pub fn lift_ticket(grip : @js.Any, top : Double) -> @js.Any {
  let lift = @domain.lift_ticket(read_grip(grip), top)
  let out = @js.new_object()
  out._set("y", @js.any(lift.y))
  out._set("z", @js.any(lift.z))
  out._set("tilt", @js.any(lift.tilt))
  out._set("angle", @js.any(lift.angle))
  out._set("roll", @js.any(lift.roll))
  out._set("shineOpacity", @js.any(lift.shine_opacity))
  out._set("shadowY", @js.any(lift.shadow_y))
  out._set("shadowOpacity", @js.any(lift.shadow_opacity))
  out
}

///|
pub fn drag_ticket(grip : @js.Any, x : Double, y : Double) -> @js.Any {
  let drag = @domain.drag_ticket(read_grip(grip), x, y)
  let out = @js.new_object()
  out._set("dx", @js.any(drag.dx))
  out._set("x", @js.any(drag.x))
  out._set("y", @js.any(drag.y))
  out._set("angle", @js.any(drag.angle))
  out._set("tilt", @js.any(drag.tilt))
  out._set("roll", @js.any(drag.roll))
  out._set("shineX", @js.any(drag.shine_x))
  out
}

///|
pub fn hover_ticket(
  x : Double,
  y : Double,
  left : Double,
  top : Double,
  width : Double,
  height : Double,
) -> @js.Any {
  let hover = @domain.hover_ticket(x, y, left, top, width, height)
  let out = @js.new_object()
  out._set("tilt", @js.any(hover.tilt))
  out._set("roll", @js.any(hover.roll))
  out._set("z", @js.any(hover.z))
  out._set("shineX", @js.any(hover.shine_x))
  out._set("shineOpacity", @js.any(hover.shine_opacity))
  out
}

///|
pub fn release_ticket(grip : @js.Any, complete : Bool) -> @js.Any {
  let released = @domain.release_ticket(read_grip(grip), complete)
  let out = @js.new_object()
  out._set("back", @js.any(released.back))
  out._set("angle", @js.any(released.angle))
  out
}
