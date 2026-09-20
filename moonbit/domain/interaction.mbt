///|
pub(all) struct TicketGrip {
  x : Double
  y : Double
  width : Double
  height : Double
  base : Double
  back : Bool
  dx : Double
  edge : Double
} derive(Eq, Debug)

///|
pub(all) struct TicketLift {
  y : Double
  z : Double
  tilt : Double
  angle : Double
  roll : Double
  shine_opacity : Double
  shadow_y : Double
  shadow_opacity : Double
} derive(Eq, Debug)

///|
pub(all) struct TicketDrag {
  dx : Double
  x : Double
  y : Double
  angle : Double
  tilt : Double
  roll : Double
  shine_x : Double
} derive(Eq, Debug)

///|
pub(all) struct TicketHover {
  tilt : Double
  roll : Double
  z : Double
  shine_x : Double
  shine_opacity : Double
} derive(Eq, Debug)

///|
pub(all) struct TicketRelease {
  back : Bool
  angle : Double
} derive(Eq, Debug)

///|
fn clamp_motion(value : Double, limit : Double) -> Double {
  number_max(-limit, number_min(limit, value))
}

///|
pub fn ticket_is_back(angle : Double) -> Bool {
  @math.cos(angle * @math.PI / 180.0) < 0.0
}

///|
pub fn ticket_shadow_width(angle : Double) -> Double {
  0.4 + @math.cos(angle * @math.PI / 180.0).abs() * 0.6
}

///|
pub fn ticket_resting_angle(angle : Double, back : Bool) -> Double {
  if ticket_is_back(angle) != back {
    angle + 180.0
  } else {
    angle
  }
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
) -> TicketGrip {
  { x, y, width, height, base, back, dx: 0.0, edge: (x - left) / width - 0.5, }
}

///|
pub fn lift_ticket(grip : TicketGrip, top : Double) -> TicketLift {
  {
    y: -18.0,
    z: 42.0,
    tilt: ((grip.y - top) / grip.height - 0.5) * -12.0,
    angle: grip.base - grip.edge * 10.0,
    roll: grip.edge * 3.0,
    shine_opacity: 0.48,
    shadow_y: 33.0,
    shadow_opacity: 0.46,
  }
}

///|
pub fn drag_ticket(grip : TicketGrip, x : Double, y : Double) -> TicketDrag {
  let dx = x - grip.x
  let dy = y - grip.y
  {
    dx,
    x: clamp_motion(dx * 0.18, 65.0),
    y: -18.0 + clamp_motion(dy * 0.35, 65.0),
    angle: grip.base +
    clamp_motion(dx / grip.width * 220.0, 175.0) -
    grip.edge * 6.0,
    tilt: clamp_motion(-dy / grip.height * 30.0, 22.0),
    roll: clamp_motion(dx / grip.width * 6.0 + grip.edge * 3.0, 7.0),
    shine_x: clamp_motion(dx * 0.2, 95.0),
  }
}

///|
pub fn hover_ticket(
  x : Double,
  y : Double,
  left : Double,
  top : Double,
  width : Double,
  height : Double,
) -> TicketHover {
  let nx = (x - left) / width - 0.5
  let ny = (y - top) / height - 0.5
  {
    tilt: -ny * 5.0,
    roll: nx * 1.4,
    z: 7.0,
    shine_x: nx * 80.0,
    shine_opacity: 0.26,
  }
}

///|
pub fn release_ticket(grip : TicketGrip, complete : Bool) -> TicketRelease {
  let turn = complete && grip.dx.abs() > grip.width * 0.3
  // A turn implies a nonzero finite-direction displacement for DOM widths.
  let direction = if grip.dx > 0.0 {
    1.0
  } else if grip.dx < 0.0 {
    -1.0
  } else {
    grip.dx
  }
  {
    back: if turn {
      !grip.back
    } else {
      grip.back
    },
    angle: grip.base + (if turn { direction * 180.0 } else { 0.0 }),
  }
}

///|
// The source iterates code points but hashes only their first UTF-16 unit.
// UInt arithmetic reproduces the source's >>> 0 wrap after each character.
pub fn ticket_serial(id : String) -> String {
  let mut value : UInt = 7U
  let mut i = 0
  while i < id.length() {
    let code = id[i].to_uint()
    value = value * 31U + code
    i += 1
    if code >= 0xD800U && code <= 0xDBFFU && i < id.length() {
      let next = id[i].to_uint()
      if next >= 0xDC00U && next <= 0xDFFFU {
        i += 1
      }
    }
  }
  let digits = value.to_string()
  if digits.length() < 8 {
    "0".repeat(8 - digits.length()) + digits
  } else {
    digits.unsafe_substring(start=digits.length() - 8, end=digits.length())
  }
}
