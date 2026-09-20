// Regression cases captured during migration; maintained as MoonBit tests.
// Provenance: tests/fixtures/README.md (generators archived in b253332).

///|
fn assert_interaction_number(actual : Double, expected : Double) -> Unit raise {
  if expected.is_nan() {
    assert_true(actual.is_nan())
  } else {
    assert_eq(actual, expected)
    if expected == 0.0 { assert_eq(1.0 / actual, 1.0 / expected) }
  }
}

///|
test "0: face/-1080" {
  let actual = ticket_is_back(-1080.0)
  assert_eq(actual, false)
}

///|
test "1: shadow/-1080" {
  let actual = ticket_shadow_width(-1080.0)
  assert_interaction_number(actual, 1.0)
}

///|
test "2: button/-1080/false" {
  let actual = ticket_resting_angle(-1080.0, false)
  assert_interaction_number(actual, -1080.0)
}

///|
test "3: button/-1080/true" {
  let actual = ticket_resting_angle(-1080.0, true)
  assert_interaction_number(actual, -900.0)
}

///|
test "4: face/-540" {
  let actual = ticket_is_back(-540.0)
  assert_eq(actual, true)
}

///|
test "5: shadow/-540" {
  let actual = ticket_shadow_width(-540.0)
  assert_interaction_number(actual, 1.0)
}

///|
test "6: button/-540/false" {
  let actual = ticket_resting_angle(-540.0, false)
  assert_interaction_number(actual, -360.0)
}

///|
test "7: button/-540/true" {
  let actual = ticket_resting_angle(-540.0, true)
  assert_interaction_number(actual, -540.0)
}

///|
test "8: face/-270" {
  let actual = ticket_is_back(-270.0)
  assert_eq(actual, true)
}

///|
test "9: shadow/-270" {
  let actual = ticket_shadow_width(-270.0)
  assert_interaction_number(actual, 0.40000000000000013)
}

///|
test "10: button/-270/false" {
  let actual = ticket_resting_angle(-270.0, false)
  assert_interaction_number(actual, -90.0)
}

///|
test "11: button/-270/true" {
  let actual = ticket_resting_angle(-270.0, true)
  assert_interaction_number(actual, -270.0)
}

///|
test "12: face/-180" {
  let actual = ticket_is_back(-180.0)
  assert_eq(actual, true)
}

///|
test "13: shadow/-180" {
  let actual = ticket_shadow_width(-180.0)
  assert_interaction_number(actual, 1.0)
}

///|
test "14: button/-180/false" {
  let actual = ticket_resting_angle(-180.0, false)
  assert_interaction_number(actual, 0.0)
}

///|
test "15: button/-180/true" {
  let actual = ticket_resting_angle(-180.0, true)
  assert_interaction_number(actual, -180.0)
}

///|
test "16: face/-90" {
  let actual = ticket_is_back(-90.0)
  assert_eq(actual, false)
}

///|
test "17: shadow/-90" {
  let actual = ticket_shadow_width(-90.0)
  assert_interaction_number(actual, 0.4000000000000001)
}

///|
test "18: button/-90/false" {
  let actual = ticket_resting_angle(-90.0, false)
  assert_interaction_number(actual, -90.0)
}

///|
test "19: button/-90/true" {
  let actual = ticket_resting_angle(-90.0, true)
  assert_interaction_number(actual, 90.0)
}

///|
test "20: face/0" {
  let actual = ticket_is_back(-0.0)
  assert_eq(actual, false)
}

///|
test "21: shadow/0" {
  let actual = ticket_shadow_width(-0.0)
  assert_interaction_number(actual, 1.0)
}

///|
test "22: button/0/false" {
  let actual = ticket_resting_angle(-0.0, false)
  assert_interaction_number(actual, -0.0)
}

///|
test "23: button/0/true" {
  let actual = ticket_resting_angle(-0.0, true)
  assert_interaction_number(actual, 180.0)
}

///|
test "24: face/0" {
  let actual = ticket_is_back(0.0)
  assert_eq(actual, false)
}

///|
test "25: shadow/0" {
  let actual = ticket_shadow_width(0.0)
  assert_interaction_number(actual, 1.0)
}

///|
test "26: button/0/false" {
  let actual = ticket_resting_angle(0.0, false)
  assert_interaction_number(actual, 0.0)
}

///|
test "27: button/0/true" {
  let actual = ticket_resting_angle(0.0, true)
  assert_interaction_number(actual, 180.0)
}

///|
test "28: face/89.999999" {
  let actual = ticket_is_back(89.999999)
  assert_eq(actual, false)
}

///|
test "29: shadow/89.999999" {
  let actual = ticket_shadow_width(89.999999)
  assert_interaction_number(actual, 0.4000000104719755)
}

///|
test "30: button/89.999999/false" {
  let actual = ticket_resting_angle(89.999999, false)
  assert_interaction_number(actual, 89.999999)
}

///|
test "31: button/89.999999/true" {
  let actual = ticket_resting_angle(89.999999, true)
  assert_interaction_number(actual, 269.999999)
}

///|
test "32: face/90" {
  let actual = ticket_is_back(90.0)
  assert_eq(actual, false)
}

///|
test "33: shadow/90" {
  let actual = ticket_shadow_width(90.0)
  assert_interaction_number(actual, 0.4000000000000001)
}

///|
test "34: button/90/false" {
  let actual = ticket_resting_angle(90.0, false)
  assert_interaction_number(actual, 90.0)
}

///|
test "35: button/90/true" {
  let actual = ticket_resting_angle(90.0, true)
  assert_interaction_number(actual, 270.0)
}

///|
test "36: face/90.000001" {
  let actual = ticket_is_back(90.000001)
  assert_eq(actual, true)
}

///|
test "37: shadow/90.000001" {
  let actual = ticket_shadow_width(90.000001)
  assert_interaction_number(actual, 0.4000000104719754)
}

///|
test "38: button/90.000001/false" {
  let actual = ticket_resting_angle(90.000001, false)
  assert_interaction_number(actual, 270.000001)
}

///|
test "39: button/90.000001/true" {
  let actual = ticket_resting_angle(90.000001, true)
  assert_interaction_number(actual, 90.000001)
}

///|
test "40: face/180" {
  let actual = ticket_is_back(180.0)
  assert_eq(actual, true)
}

///|
test "41: shadow/180" {
  let actual = ticket_shadow_width(180.0)
  assert_interaction_number(actual, 1.0)
}

///|
test "42: button/180/false" {
  let actual = ticket_resting_angle(180.0, false)
  assert_interaction_number(actual, 360.0)
}

///|
test "43: button/180/true" {
  let actual = ticket_resting_angle(180.0, true)
  assert_interaction_number(actual, 180.0)
}

///|
test "44: face/269.999999" {
  let actual = ticket_is_back(269.999999)
  assert_eq(actual, true)
}

///|
test "45: shadow/269.999999" {
  let actual = ticket_shadow_width(269.999999)
  assert_interaction_number(actual, 0.4000000104719754)
}

///|
test "46: button/269.999999/false" {
  let actual = ticket_resting_angle(269.999999, false)
  assert_interaction_number(actual, 449.999999)
}

///|
test "47: button/269.999999/true" {
  let actual = ticket_resting_angle(269.999999, true)
  assert_interaction_number(actual, 269.999999)
}

///|
test "48: face/270" {
  let actual = ticket_is_back(270.0)
  assert_eq(actual, true)
}

///|
test "49: shadow/270" {
  let actual = ticket_shadow_width(270.0)
  assert_interaction_number(actual, 0.40000000000000013)
}

///|
test "50: button/270/false" {
  let actual = ticket_resting_angle(270.0, false)
  assert_interaction_number(actual, 450.0)
}

///|
test "51: button/270/true" {
  let actual = ticket_resting_angle(270.0, true)
  assert_interaction_number(actual, 270.0)
}

///|
test "52: face/270.000001" {
  let actual = ticket_is_back(270.000001)
  assert_eq(actual, false)
}

///|
test "53: shadow/270.000001" {
  let actual = ticket_shadow_width(270.000001)
  assert_interaction_number(actual, 0.4000000104719752)
}

///|
test "54: button/270.000001/false" {
  let actual = ticket_resting_angle(270.000001, false)
  assert_interaction_number(actual, 270.000001)
}

///|
test "55: button/270.000001/true" {
  let actual = ticket_resting_angle(270.000001, true)
  assert_interaction_number(actual, 450.000001)
}

///|
test "56: face/360" {
  let actual = ticket_is_back(360.0)
  assert_eq(actual, false)
}

///|
test "57: shadow/360" {
  let actual = ticket_shadow_width(360.0)
  assert_interaction_number(actual, 1.0)
}

///|
test "58: button/360/false" {
  let actual = ticket_resting_angle(360.0, false)
  assert_interaction_number(actual, 360.0)
}

///|
test "59: button/360/true" {
  let actual = ticket_resting_angle(360.0, true)
  assert_interaction_number(actual, 540.0)
}

///|
test "60: face/540" {
  let actual = ticket_is_back(540.0)
  assert_eq(actual, true)
}

///|
test "61: shadow/540" {
  let actual = ticket_shadow_width(540.0)
  assert_interaction_number(actual, 1.0)
}

///|
test "62: button/540/false" {
  let actual = ticket_resting_angle(540.0, false)
  assert_interaction_number(actual, 720.0)
}

///|
test "63: button/540/true" {
  let actual = ticket_resting_angle(540.0, true)
  assert_interaction_number(actual, 540.0)
}

///|
test "64: face/1080" {
  let actual = ticket_is_back(1080.0)
  assert_eq(actual, false)
}

///|
test "65: shadow/1080" {
  let actual = ticket_shadow_width(1080.0)
  assert_interaction_number(actual, 1.0)
}

///|
test "66: button/1080/false" {
  let actual = ticket_resting_angle(1080.0, false)
  assert_interaction_number(actual, 1080.0)
}

///|
test "67: button/1080/true" {
  let actual = ticket_resting_angle(1080.0, true)
  assert_interaction_number(actual, 1260.0)
}

///|
test "68: face/1000000000" {
  let actual = ticket_is_back(1000000000.0)
  assert_eq(actual, false)
}

///|
test "69: shadow/1000000000" {
  let actual = ticket_shadow_width(1000000000.0)
  assert_interaction_number(actual, 0.504188907273823)
}

///|
test "70: button/1000000000/false" {
  let actual = ticket_resting_angle(1000000000.0, false)
  assert_interaction_number(actual, 1000000000.0)
}

///|
test "71: button/1000000000/true" {
  let actual = ticket_resting_angle(1000000000.0, true)
  assert_interaction_number(actual, 1000000180.0)
}

///|
test "72: face/NaN" {
  let actual = ticket_is_back((0.0 / 0.0))
  assert_eq(actual, false)
}

///|
test "73: shadow/NaN" {
  let actual = ticket_shadow_width((0.0 / 0.0))
  assert_interaction_number(actual, (0.0 / 0.0))
}

///|
test "74: button/NaN/false" {
  let actual = ticket_resting_angle((0.0 / 0.0), false)
  assert_interaction_number(actual, (0.0 / 0.0))
}

///|
test "75: button/NaN/true" {
  let actual = ticket_resting_angle((0.0 / 0.0), true)
  assert_interaction_number(actual, (0.0 / 0.0))
}

///|
test "76: face/Infinity" {
  let actual = ticket_is_back((1.0 / 0.0))
  assert_eq(actual, false)
}

///|
test "77: shadow/Infinity" {
  let actual = ticket_shadow_width((1.0 / 0.0))
  assert_interaction_number(actual, (0.0 / 0.0))
}

///|
test "78: button/Infinity/false" {
  let actual = ticket_resting_angle((1.0 / 0.0), false)
  assert_interaction_number(actual, (1.0 / 0.0))
}

///|
test "79: button/Infinity/true" {
  let actual = ticket_resting_angle((1.0 / 0.0), true)
  assert_interaction_number(actual, (1.0 / 0.0))
}

///|
test "80: grip/400/false" {
  let actual = begin_ticket_grip(200.0, 80.0, 20.0, 400.0, 240.0, 360.0, false)
  assert_interaction_number(actual.x, 200.0)
  assert_interaction_number(actual.y, 80.0)
  assert_interaction_number(actual.width, 400.0)
  assert_interaction_number(actual.height, 240.0)
  assert_interaction_number(actual.base, 360.0)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.edge, -0.04999999999999999)
}

///|
test "81: lift/400/false" {
  let actual = lift_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: 0.0, edge: -0.04999999999999999 }, 50.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.z, 42.0)
  assert_interaction_number(actual.tilt, 4.5)
  assert_interaction_number(actual.angle, 360.5)
  assert_interaction_number(actual.roll, -0.14999999999999997)
  assert_interaction_number(actual.shine_opacity, 0.48)
  assert_interaction_number(actual.shadow_y, 33.0)
  assert_interaction_number(actual.shadow_opacity, 0.46)
}

///|
test "82: drag/400/false/-3" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: 0.0, edge: -0.04999999999999999 }, -1000.0, -520.0)
  assert_interaction_number(actual.dx, -1200.0)
  assert_interaction_number(actual.x, -65.0)
  assert_interaction_number(actual.y, -83.0)
  assert_interaction_number(actual.angle, 185.3)
  assert_interaction_number(actual.tilt, 22.0)
  assert_interaction_number(actual.roll, -7.0)
  assert_interaction_number(actual.shine_x, -95.0)
}

///|
test "83: release/400/false/-3/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: -1200.0, edge: -0.04999999999999999 }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "84: release/400/false/-3/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: -1200.0, edge: -0.04999999999999999 }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, 180.0)
}

///|
test "85: drag/400/false/-0.56" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: 0.0, edge: -0.04999999999999999 }, -24.00000000000003, -32.000000000000014)
  assert_interaction_number(actual.dx, -224.00000000000003)
  assert_interaction_number(actual.x, -40.32)
  assert_interaction_number(actual.y, -57.2)
  assert_interaction_number(actual.angle, 237.1)
  assert_interaction_number(actual.tilt, 14.000000000000002)
  assert_interaction_number(actual.roll, -3.5100000000000002)
  assert_interaction_number(actual.shine_x, -44.80000000000001)
}

///|
test "86: release/400/false/-0.56/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: -224.00000000000003, edge: -0.04999999999999999 }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "87: release/400/false/-0.56/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: -224.00000000000003, edge: -0.04999999999999999 }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, 180.0)
}

///|
test "88: drag/400/false/-0.30000001" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: 0.0, edge: -0.04999999999999999 }, 79.99999600000001, 19.999998000000005)
  assert_interaction_number(actual.dx, -120.00000399999999)
  assert_interaction_number(actual.x, -21.600000719999997)
  assert_interaction_number(actual.y, -39.0000007)
  assert_interaction_number(actual.angle, 294.2999978)
  assert_interaction_number(actual.tilt, 7.500000249999999)
  assert_interaction_number(actual.roll, -1.9500000599999998)
  assert_interaction_number(actual.shine_x, -24.0000008)
}

///|
test "89: release/400/false/-0.30000001/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: -120.00000399999999, edge: -0.04999999999999999 }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "90: release/400/false/-0.30000001/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: -120.00000399999999, edge: -0.04999999999999999 }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, 180.0)
}

///|
test "91: drag/400/false/-0.3" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: 0.0, edge: -0.04999999999999999 }, 80.0, 20.0)
  assert_interaction_number(actual.dx, -120.0)
  assert_interaction_number(actual.x, -21.599999999999998)
  assert_interaction_number(actual.y, -39.0)
  assert_interaction_number(actual.angle, 294.3)
  assert_interaction_number(actual.tilt, 7.5)
  assert_interaction_number(actual.roll, -1.9499999999999997)
  assert_interaction_number(actual.shine_x, -24.0)
}

///|
test "92: release/400/false/-0.3/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: -120.0, edge: -0.04999999999999999 }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "93: release/400/false/-0.3/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: -120.0, edge: -0.04999999999999999 }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "94: drag/400/false/-0.29999999" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: 0.0, edge: -0.04999999999999999 }, 80.000004, 20.000002000000002)
  assert_interaction_number(actual.dx, -119.999996)
  assert_interaction_number(actual.x, -21.59999928)
  assert_interaction_number(actual.y, -38.9999993)
  assert_interaction_number(actual.angle, 294.3000022)
  assert_interaction_number(actual.tilt, 7.49999975)
  assert_interaction_number(actual.roll, -1.9499999399999999)
  assert_interaction_number(actual.shine_x, -23.9999992)
}

///|
test "95: release/400/false/-0.29999999/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: -119.999996, edge: -0.04999999999999999 }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "96: release/400/false/-0.29999999/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: -119.999996, edge: -0.04999999999999999 }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "97: drag/400/false/0" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: 0.0, edge: -0.04999999999999999 }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, 360.3)
  assert_interaction_number(actual.tilt, -0.0)
  assert_interaction_number(actual.roll, -0.14999999999999997)
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "98: release/400/false/0/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: -0.0, edge: -0.04999999999999999 }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "99: release/400/false/0/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: -0.0, edge: -0.04999999999999999 }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "100: drag/400/false/0" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: 0.0, edge: -0.04999999999999999 }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, 360.3)
  assert_interaction_number(actual.tilt, -0.0)
  assert_interaction_number(actual.roll, -0.14999999999999997)
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "101: release/400/false/0/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: 0.0, edge: -0.04999999999999999 }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "102: release/400/false/0/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: 0.0, edge: -0.04999999999999999 }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "103: drag/400/false/0.29999999" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: 0.0, edge: -0.04999999999999999 }, 319.999996, 139.999998)
  assert_interaction_number(actual.dx, 119.99999600000001)
  assert_interaction_number(actual.x, 21.599999280000002)
  assert_interaction_number(actual.y, 2.999999299999999)
  assert_interaction_number(actual.angle, 426.2999978)
  assert_interaction_number(actual.tilt, -7.499999750000001)
  assert_interaction_number(actual.roll, 1.6499999400000003)
  assert_interaction_number(actual.shine_x, 23.999999200000005)
}

///|
test "104: release/400/false/0.29999999/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: 119.999996, edge: -0.04999999999999999 }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "105: release/400/false/0.29999999/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: 119.999996, edge: -0.04999999999999999 }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "106: drag/400/false/0.3" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: 0.0, edge: -0.04999999999999999 }, 320.0, 140.0)
  assert_interaction_number(actual.dx, 120.0)
  assert_interaction_number(actual.x, 21.599999999999998)
  assert_interaction_number(actual.y, 3.0)
  assert_interaction_number(actual.angle, 426.3)
  assert_interaction_number(actual.tilt, -7.5)
  assert_interaction_number(actual.roll, 1.65)
  assert_interaction_number(actual.shine_x, 24.0)
}

///|
test "107: release/400/false/0.3/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: 120.0, edge: -0.04999999999999999 }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "108: release/400/false/0.3/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: 120.0, edge: -0.04999999999999999 }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "109: drag/400/false/0.30000001" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: 0.0, edge: -0.04999999999999999 }, 320.000004, 140.000002)
  assert_interaction_number(actual.dx, 120.00000399999999)
  assert_interaction_number(actual.x, 21.600000719999997)
  assert_interaction_number(actual.y, 3.0000006999999975)
  assert_interaction_number(actual.angle, 426.3000022)
  assert_interaction_number(actual.tilt, -7.500000249999999)
  assert_interaction_number(actual.roll, 1.65000006)
  assert_interaction_number(actual.shine_x, 24.0000008)
}

///|
test "110: release/400/false/0.30000001/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: 120.00000399999999, edge: -0.04999999999999999 }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "111: release/400/false/0.30000001/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: 120.00000399999999, edge: -0.04999999999999999 }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, 540.0)
}

///|
test "112: drag/400/false/0.56" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: 0.0, edge: -0.04999999999999999 }, 424.0, 192.0)
  assert_interaction_number(actual.dx, 224.0)
  assert_interaction_number(actual.x, 40.32)
  assert_interaction_number(actual.y, 21.199999999999996)
  assert_interaction_number(actual.angle, 483.50000000000006)
  assert_interaction_number(actual.tilt, -14.0)
  assert_interaction_number(actual.roll, 3.2100000000000004)
  assert_interaction_number(actual.shine_x, 44.800000000000004)
}

///|
test "113: release/400/false/0.56/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: 224.00000000000003, edge: -0.04999999999999999 }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "114: release/400/false/0.56/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: 224.00000000000003, edge: -0.04999999999999999 }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, 540.0)
}

///|
test "115: drag/400/false/3" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: 0.0, edge: -0.04999999999999999 }, 1400.0, 680.0)
  assert_interaction_number(actual.dx, 1200.0)
  assert_interaction_number(actual.x, 65.0)
  assert_interaction_number(actual.y, 47.0)
  assert_interaction_number(actual.angle, 535.3)
  assert_interaction_number(actual.tilt, -22.0)
  assert_interaction_number(actual.roll, 7.0)
  assert_interaction_number(actual.shine_x, 95.0)
}

///|
test "116: release/400/false/3/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: 1200.0, edge: -0.04999999999999999 }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "117: release/400/false/3/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: 360.0, back: false, dx: 1200.0, edge: -0.04999999999999999 }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, 540.0)
}

///|
test "118: hover/400/false/20" {
  let actual = hover_ticket(20.0, 50.0, 20.0, 50.0, 400.0, 240.0)
  assert_interaction_number(actual.tilt, 2.5)
  assert_interaction_number(actual.roll, -0.7)
  assert_interaction_number(actual.z, 7.0)
  assert_interaction_number(actual.shine_x, -40.0)
  assert_interaction_number(actual.shine_opacity, 0.26)
}

///|
test "119: hover/400/false/200" {
  let actual = hover_ticket(200.0, 80.0, 20.0, 50.0, 400.0, 240.0)
  assert_interaction_number(actual.tilt, 1.875)
  assert_interaction_number(actual.roll, -0.06999999999999998)
  assert_interaction_number(actual.z, 7.0)
  assert_interaction_number(actual.shine_x, -3.999999999999999)
  assert_interaction_number(actual.shine_opacity, 0.26)
}

///|
test "120: hover/400/false/1000" {
  let actual = hover_ticket(1000.0, -1000.0, 20.0, 50.0, 400.0, 240.0)
  assert_interaction_number(actual.tilt, 24.375)
  assert_interaction_number(actual.roll, 2.73)
  assert_interaction_number(actual.z, 7.0)
  assert_interaction_number(actual.shine_x, 156.0)
  assert_interaction_number(actual.shine_opacity, 0.26)
}

///|
test "121: grip/400/true" {
  let actual = begin_ticket_grip(200.0, 80.0, 20.0, 400.0, 240.0, -180.0, true)
  assert_interaction_number(actual.x, 200.0)
  assert_interaction_number(actual.y, 80.0)
  assert_interaction_number(actual.width, 400.0)
  assert_interaction_number(actual.height, 240.0)
  assert_interaction_number(actual.base, -180.0)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.edge, -0.04999999999999999)
}

///|
test "122: lift/400/true" {
  let actual = lift_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: 0.0, edge: -0.04999999999999999 }, 50.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.z, 42.0)
  assert_interaction_number(actual.tilt, 4.5)
  assert_interaction_number(actual.angle, -179.5)
  assert_interaction_number(actual.roll, -0.14999999999999997)
  assert_interaction_number(actual.shine_opacity, 0.48)
  assert_interaction_number(actual.shadow_y, 33.0)
  assert_interaction_number(actual.shadow_opacity, 0.46)
}

///|
test "123: drag/400/true/-3" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: 0.0, edge: -0.04999999999999999 }, -1000.0, -520.0)
  assert_interaction_number(actual.dx, -1200.0)
  assert_interaction_number(actual.x, -65.0)
  assert_interaction_number(actual.y, -83.0)
  assert_interaction_number(actual.angle, -354.7)
  assert_interaction_number(actual.tilt, 22.0)
  assert_interaction_number(actual.roll, -7.0)
  assert_interaction_number(actual.shine_x, -95.0)
}

///|
test "124: release/400/true/-3/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: -1200.0, edge: -0.04999999999999999 }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "125: release/400/true/-3/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: -1200.0, edge: -0.04999999999999999 }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, -360.0)
}

///|
test "126: drag/400/true/-0.56" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: 0.0, edge: -0.04999999999999999 }, -24.00000000000003, -32.000000000000014)
  assert_interaction_number(actual.dx, -224.00000000000003)
  assert_interaction_number(actual.x, -40.32)
  assert_interaction_number(actual.y, -57.2)
  assert_interaction_number(actual.angle, -302.90000000000003)
  assert_interaction_number(actual.tilt, 14.000000000000002)
  assert_interaction_number(actual.roll, -3.5100000000000002)
  assert_interaction_number(actual.shine_x, -44.80000000000001)
}

///|
test "127: release/400/true/-0.56/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: -224.00000000000003, edge: -0.04999999999999999 }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "128: release/400/true/-0.56/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: -224.00000000000003, edge: -0.04999999999999999 }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, -360.0)
}

///|
test "129: drag/400/true/-0.30000001" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: 0.0, edge: -0.04999999999999999 }, 79.99999600000001, 19.999998000000005)
  assert_interaction_number(actual.dx, -120.00000399999999)
  assert_interaction_number(actual.x, -21.600000719999997)
  assert_interaction_number(actual.y, -39.0000007)
  assert_interaction_number(actual.angle, -245.70000219999997)
  assert_interaction_number(actual.tilt, 7.500000249999999)
  assert_interaction_number(actual.roll, -1.9500000599999998)
  assert_interaction_number(actual.shine_x, -24.0000008)
}

///|
test "130: release/400/true/-0.30000001/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: -120.00000399999999, edge: -0.04999999999999999 }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "131: release/400/true/-0.30000001/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: -120.00000399999999, edge: -0.04999999999999999 }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, -360.0)
}

///|
test "132: drag/400/true/-0.3" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: 0.0, edge: -0.04999999999999999 }, 80.0, 20.0)
  assert_interaction_number(actual.dx, -120.0)
  assert_interaction_number(actual.x, -21.599999999999998)
  assert_interaction_number(actual.y, -39.0)
  assert_interaction_number(actual.angle, -245.7)
  assert_interaction_number(actual.tilt, 7.5)
  assert_interaction_number(actual.roll, -1.9499999999999997)
  assert_interaction_number(actual.shine_x, -24.0)
}

///|
test "133: release/400/true/-0.3/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: -120.0, edge: -0.04999999999999999 }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "134: release/400/true/-0.3/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: -120.0, edge: -0.04999999999999999 }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "135: drag/400/true/-0.29999999" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: 0.0, edge: -0.04999999999999999 }, 80.000004, 20.000002000000002)
  assert_interaction_number(actual.dx, -119.999996)
  assert_interaction_number(actual.x, -21.59999928)
  assert_interaction_number(actual.y, -38.9999993)
  assert_interaction_number(actual.angle, -245.6999978)
  assert_interaction_number(actual.tilt, 7.49999975)
  assert_interaction_number(actual.roll, -1.9499999399999999)
  assert_interaction_number(actual.shine_x, -23.9999992)
}

///|
test "136: release/400/true/-0.29999999/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: -119.999996, edge: -0.04999999999999999 }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "137: release/400/true/-0.29999999/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: -119.999996, edge: -0.04999999999999999 }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "138: drag/400/true/0" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: 0.0, edge: -0.04999999999999999 }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, -179.7)
  assert_interaction_number(actual.tilt, -0.0)
  assert_interaction_number(actual.roll, -0.14999999999999997)
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "139: release/400/true/0/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: -0.0, edge: -0.04999999999999999 }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "140: release/400/true/0/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: -0.0, edge: -0.04999999999999999 }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "141: drag/400/true/0" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: 0.0, edge: -0.04999999999999999 }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, -179.7)
  assert_interaction_number(actual.tilt, -0.0)
  assert_interaction_number(actual.roll, -0.14999999999999997)
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "142: release/400/true/0/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: 0.0, edge: -0.04999999999999999 }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "143: release/400/true/0/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: 0.0, edge: -0.04999999999999999 }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "144: drag/400/true/0.29999999" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: 0.0, edge: -0.04999999999999999 }, 319.999996, 139.999998)
  assert_interaction_number(actual.dx, 119.99999600000001)
  assert_interaction_number(actual.x, 21.599999280000002)
  assert_interaction_number(actual.y, 2.999999299999999)
  assert_interaction_number(actual.angle, -113.70000219999999)
  assert_interaction_number(actual.tilt, -7.499999750000001)
  assert_interaction_number(actual.roll, 1.6499999400000003)
  assert_interaction_number(actual.shine_x, 23.999999200000005)
}

///|
test "145: release/400/true/0.29999999/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: 119.999996, edge: -0.04999999999999999 }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "146: release/400/true/0.29999999/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: 119.999996, edge: -0.04999999999999999 }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "147: drag/400/true/0.3" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: 0.0, edge: -0.04999999999999999 }, 320.0, 140.0)
  assert_interaction_number(actual.dx, 120.0)
  assert_interaction_number(actual.x, 21.599999999999998)
  assert_interaction_number(actual.y, 3.0)
  assert_interaction_number(actual.angle, -113.7)
  assert_interaction_number(actual.tilt, -7.5)
  assert_interaction_number(actual.roll, 1.65)
  assert_interaction_number(actual.shine_x, 24.0)
}

///|
test "148: release/400/true/0.3/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: 120.0, edge: -0.04999999999999999 }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "149: release/400/true/0.3/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: 120.0, edge: -0.04999999999999999 }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "150: drag/400/true/0.30000001" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: 0.0, edge: -0.04999999999999999 }, 320.000004, 140.000002)
  assert_interaction_number(actual.dx, 120.00000399999999)
  assert_interaction_number(actual.x, 21.600000719999997)
  assert_interaction_number(actual.y, 3.0000006999999975)
  assert_interaction_number(actual.angle, -113.6999978)
  assert_interaction_number(actual.tilt, -7.500000249999999)
  assert_interaction_number(actual.roll, 1.65000006)
  assert_interaction_number(actual.shine_x, 24.0000008)
}

///|
test "151: release/400/true/0.30000001/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: 120.00000399999999, edge: -0.04999999999999999 }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "152: release/400/true/0.30000001/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: 120.00000399999999, edge: -0.04999999999999999 }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 0.0)
}

///|
test "153: drag/400/true/0.56" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: 0.0, edge: -0.04999999999999999 }, 424.0, 192.0)
  assert_interaction_number(actual.dx, 224.0)
  assert_interaction_number(actual.x, 40.32)
  assert_interaction_number(actual.y, 21.199999999999996)
  assert_interaction_number(actual.angle, -56.499999999999986)
  assert_interaction_number(actual.tilt, -14.0)
  assert_interaction_number(actual.roll, 3.2100000000000004)
  assert_interaction_number(actual.shine_x, 44.800000000000004)
}

///|
test "154: release/400/true/0.56/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: 224.00000000000003, edge: -0.04999999999999999 }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "155: release/400/true/0.56/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: 224.00000000000003, edge: -0.04999999999999999 }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 0.0)
}

///|
test "156: drag/400/true/3" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: 0.0, edge: -0.04999999999999999 }, 1400.0, 680.0)
  assert_interaction_number(actual.dx, 1200.0)
  assert_interaction_number(actual.x, 65.0)
  assert_interaction_number(actual.y, 47.0)
  assert_interaction_number(actual.angle, -4.7)
  assert_interaction_number(actual.tilt, -22.0)
  assert_interaction_number(actual.roll, 7.0)
  assert_interaction_number(actual.shine_x, 95.0)
}

///|
test "157: release/400/true/3/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: 1200.0, edge: -0.04999999999999999 }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "158: release/400/true/3/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 400.0, height: 240.0, base: -180.0, back: true, dx: 1200.0, edge: -0.04999999999999999 }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 0.0)
}

///|
test "159: hover/400/true/20" {
  let actual = hover_ticket(20.0, 50.0, 20.0, 50.0, 400.0, 240.0)
  assert_interaction_number(actual.tilt, 2.5)
  assert_interaction_number(actual.roll, -0.7)
  assert_interaction_number(actual.z, 7.0)
  assert_interaction_number(actual.shine_x, -40.0)
  assert_interaction_number(actual.shine_opacity, 0.26)
}

///|
test "160: hover/400/true/200" {
  let actual = hover_ticket(200.0, 80.0, 20.0, 50.0, 400.0, 240.0)
  assert_interaction_number(actual.tilt, 1.875)
  assert_interaction_number(actual.roll, -0.06999999999999998)
  assert_interaction_number(actual.z, 7.0)
  assert_interaction_number(actual.shine_x, -3.999999999999999)
  assert_interaction_number(actual.shine_opacity, 0.26)
}

///|
test "161: hover/400/true/1000" {
  let actual = hover_ticket(1000.0, -1000.0, 20.0, 50.0, 400.0, 240.0)
  assert_interaction_number(actual.tilt, 24.375)
  assert_interaction_number(actual.roll, 2.73)
  assert_interaction_number(actual.z, 7.0)
  assert_interaction_number(actual.shine_x, 156.0)
  assert_interaction_number(actual.shine_opacity, 0.26)
}

///|
test "162: grip/237.5/false" {
  let actual = begin_ticket_grip(200.0, 80.0, 20.0, 237.5, 143.25, 360.0, false)
  assert_interaction_number(actual.x, 200.0)
  assert_interaction_number(actual.y, 80.0)
  assert_interaction_number(actual.width, 237.5)
  assert_interaction_number(actual.height, 143.25)
  assert_interaction_number(actual.base, 360.0)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.edge, 0.2578947368421053)
}

///|
test "163: lift/237.5/false" {
  let actual = lift_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: 0.0, edge: 0.2578947368421053 }, 50.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.z, 42.0)
  assert_interaction_number(actual.tilt, 3.486910994764398)
  assert_interaction_number(actual.angle, 357.42105263157896)
  assert_interaction_number(actual.roll, 0.7736842105263159)
  assert_interaction_number(actual.shine_opacity, 0.48)
  assert_interaction_number(actual.shadow_y, 33.0)
  assert_interaction_number(actual.shadow_opacity, 0.46)
}

///|
test "164: drag/237.5/false/-3" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: 0.0, edge: 0.2578947368421053 }, -512.5, -276.25)
  assert_interaction_number(actual.dx, -712.5)
  assert_interaction_number(actual.x, -65.0)
  assert_interaction_number(actual.y, -83.0)
  assert_interaction_number(actual.angle, 183.45263157894738)
  assert_interaction_number(actual.tilt, 22.0)
  assert_interaction_number(actual.roll, -7.0)
  assert_interaction_number(actual.shine_x, -95.0)
}

///|
test "165: release/237.5/false/-3/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: -712.5, edge: 0.2578947368421053 }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "166: release/237.5/false/-3/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: -712.5, edge: 0.2578947368421053 }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, 180.0)
}

///|
test "167: drag/237.5/false/-0.56" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: 0.0, edge: 0.2578947368421053 }, 67.0, 13.5)
  assert_interaction_number(actual.dx, -133.0)
  assert_interaction_number(actual.x, -23.939999999999998)
  assert_interaction_number(actual.y, -41.275)
  assert_interaction_number(actual.angle, 235.25263157894736)
  assert_interaction_number(actual.tilt, 13.926701570680628)
  assert_interaction_number(actual.roll, -2.5863157894736846)
  assert_interaction_number(actual.shine_x, -26.6)
}

///|
test "168: release/237.5/false/-0.56/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: -133.0, edge: 0.2578947368421053 }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "169: release/237.5/false/-0.56/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: -133.0, edge: 0.2578947368421053 }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, 180.0)
}

///|
test "170: drag/237.5/false/-0.30000001" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: 0.0, edge: 0.2578947368421053 }, 128.749997625, 44.3749988125)
  assert_interaction_number(actual.dx, -71.25000237500001)
  assert_interaction_number(actual.x, -12.825000427500001)
  assert_interaction_number(actual.y, -30.468750415624996)
  assert_interaction_number(actual.angle, 292.45262937894734)
  assert_interaction_number(actual.tilt, 7.460733232984293)
  assert_interaction_number(actual.roll, -1.0263158494736846)
  assert_interaction_number(actual.shine_x, -14.250000475000002)
}

///|
test "171: release/237.5/false/-0.30000001/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: -71.250002375, edge: 0.2578947368421053 }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "172: release/237.5/false/-0.30000001/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: -71.250002375, edge: 0.2578947368421053 }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, 180.0)
}

///|
test "173: drag/237.5/false/-0.3" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: 0.0, edge: 0.2578947368421053 }, 128.75, 44.375)
  assert_interaction_number(actual.dx, -71.25)
  assert_interaction_number(actual.x, -12.825)
  assert_interaction_number(actual.y, -30.46875)
  assert_interaction_number(actual.angle, 292.4526315789474)
  assert_interaction_number(actual.tilt, 7.460732984293194)
  assert_interaction_number(actual.roll, -1.026315789473684)
  assert_interaction_number(actual.shine_x, -14.25)
}

///|
test "174: release/237.5/false/-0.3/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: -71.25, edge: 0.2578947368421053 }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "175: release/237.5/false/-0.3/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: -71.25, edge: 0.2578947368421053 }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "176: drag/237.5/false/-0.29999999" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: 0.0, edge: 0.2578947368421053 }, 128.750002375, 44.375001187500004)
  assert_interaction_number(actual.dx, -71.24999762499999)
  assert_interaction_number(actual.x, -12.824999572499998)
  assert_interaction_number(actual.y, -30.468749584374997)
  assert_interaction_number(actual.angle, 292.4526337789474)
  assert_interaction_number(actual.tilt, 7.460732735602093)
  assert_interaction_number(actual.roll, -1.026315729473684)
  assert_interaction_number(actual.shine_x, -14.249999525)
}

///|
test "177: release/237.5/false/-0.29999999/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: -71.24999762499999, edge: 0.2578947368421053 }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "178: release/237.5/false/-0.29999999/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: -71.24999762499999, edge: 0.2578947368421053 }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "179: drag/237.5/false/0" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: 0.0, edge: 0.2578947368421053 }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, 358.4526315789474)
  assert_interaction_number(actual.tilt, -0.0)
  assert_interaction_number(actual.roll, 0.7736842105263159)
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "180: release/237.5/false/0/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: -0.0, edge: 0.2578947368421053 }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "181: release/237.5/false/0/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: -0.0, edge: 0.2578947368421053 }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "182: drag/237.5/false/0" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: 0.0, edge: 0.2578947368421053 }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, 358.4526315789474)
  assert_interaction_number(actual.tilt, -0.0)
  assert_interaction_number(actual.roll, 0.7736842105263159)
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "183: release/237.5/false/0/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: 0.0, edge: 0.2578947368421053 }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "184: release/237.5/false/0/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: 0.0, edge: 0.2578947368421053 }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "185: drag/237.5/false/0.29999999" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: 0.0, edge: 0.2578947368421053 }, 271.249997625, 115.6249988125)
  assert_interaction_number(actual.dx, 71.24999762499999)
  assert_interaction_number(actual.x, 12.824999572499998)
  assert_interaction_number(actual.y, -5.531250415625003)
  assert_interaction_number(actual.angle, 424.45262937894734)
  assert_interaction_number(actual.tilt, -7.460732735602093)
  assert_interaction_number(actual.roll, 2.5736841505263155)
  assert_interaction_number(actual.shine_x, 14.249999525)
}

///|
test "186: release/237.5/false/0.29999999/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: 71.24999762499999, edge: 0.2578947368421053 }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "187: release/237.5/false/0.29999999/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: 71.24999762499999, edge: 0.2578947368421053 }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "188: drag/237.5/false/0.3" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: 0.0, edge: 0.2578947368421053 }, 271.25, 115.625)
  assert_interaction_number(actual.dx, 71.25)
  assert_interaction_number(actual.x, 12.825)
  assert_interaction_number(actual.y, -5.53125)
  assert_interaction_number(actual.angle, 424.4526315789474)
  assert_interaction_number(actual.tilt, -7.460732984293194)
  assert_interaction_number(actual.roll, 2.5736842105263156)
  assert_interaction_number(actual.shine_x, 14.25)
}

///|
test "189: release/237.5/false/0.3/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: 71.25, edge: 0.2578947368421053 }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "190: release/237.5/false/0.3/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: 71.25, edge: 0.2578947368421053 }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "191: drag/237.5/false/0.30000001" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: 0.0, edge: 0.2578947368421053 }, 271.250002375, 115.6250011875)
  assert_interaction_number(actual.dx, 71.25000237500001)
  assert_interaction_number(actual.x, 12.825000427500001)
  assert_interaction_number(actual.y, -5.531249584374999)
  assert_interaction_number(actual.angle, 424.4526337789474)
  assert_interaction_number(actual.tilt, -7.460733232984294)
  assert_interaction_number(actual.roll, 2.573684270526316)
  assert_interaction_number(actual.shine_x, 14.250000475000002)
}

///|
test "192: release/237.5/false/0.30000001/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: 71.250002375, edge: 0.2578947368421053 }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "193: release/237.5/false/0.30000001/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: 71.250002375, edge: 0.2578947368421053 }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, 540.0)
}

///|
test "194: drag/237.5/false/0.56" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: 0.0, edge: 0.2578947368421053 }, 333.0, 146.5)
  assert_interaction_number(actual.dx, 133.0)
  assert_interaction_number(actual.x, 23.939999999999998)
  assert_interaction_number(actual.y, 5.274999999999999)
  assert_interaction_number(actual.angle, 481.6526315789474)
  assert_interaction_number(actual.tilt, -13.926701570680628)
  assert_interaction_number(actual.roll, 4.133684210526316)
  assert_interaction_number(actual.shine_x, 26.6)
}

///|
test "195: release/237.5/false/0.56/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: 133.0, edge: 0.2578947368421053 }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "196: release/237.5/false/0.56/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: 133.0, edge: 0.2578947368421053 }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, 540.0)
}

///|
test "197: drag/237.5/false/3" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: 0.0, edge: 0.2578947368421053 }, 912.5, 436.25)
  assert_interaction_number(actual.dx, 712.5)
  assert_interaction_number(actual.x, 65.0)
  assert_interaction_number(actual.y, 47.0)
  assert_interaction_number(actual.angle, 533.4526315789474)
  assert_interaction_number(actual.tilt, -22.0)
  assert_interaction_number(actual.roll, 7.0)
  assert_interaction_number(actual.shine_x, 95.0)
}

///|
test "198: release/237.5/false/3/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: 712.5, edge: 0.2578947368421053 }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "199: release/237.5/false/3/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: 360.0, back: false, dx: 712.5, edge: 0.2578947368421053 }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, 540.0)
}

///|
test "200: hover/237.5/false/20" {
  let actual = hover_ticket(20.0, 50.0, 20.0, 50.0, 237.5, 143.25)
  assert_interaction_number(actual.tilt, 2.5)
  assert_interaction_number(actual.roll, -0.7)
  assert_interaction_number(actual.z, 7.0)
  assert_interaction_number(actual.shine_x, -40.0)
  assert_interaction_number(actual.shine_opacity, 0.26)
}

///|
test "201: hover/237.5/false/200" {
  let actual = hover_ticket(200.0, 80.0, 20.0, 50.0, 237.5, 143.25)
  assert_interaction_number(actual.tilt, 1.4528795811518325)
  assert_interaction_number(actual.roll, 0.3610526315789474)
  assert_interaction_number(actual.z, 7.0)
  assert_interaction_number(actual.shine_x, 20.631578947368425)
  assert_interaction_number(actual.shine_opacity, 0.26)
}

///|
test "202: hover/237.5/false/1000" {
  let actual = hover_ticket(1000.0, -1000.0, 20.0, 50.0, 237.5, 143.25)
  assert_interaction_number(actual.tilt, 39.14921465968587)
  assert_interaction_number(actual.roll, 5.076842105263158)
  assert_interaction_number(actual.z, 7.0)
  assert_interaction_number(actual.shine_x, 290.1052631578948)
  assert_interaction_number(actual.shine_opacity, 0.26)
}

///|
test "203: grip/237.5/true" {
  let actual = begin_ticket_grip(200.0, 80.0, 20.0, 237.5, 143.25, -180.0, true)
  assert_interaction_number(actual.x, 200.0)
  assert_interaction_number(actual.y, 80.0)
  assert_interaction_number(actual.width, 237.5)
  assert_interaction_number(actual.height, 143.25)
  assert_interaction_number(actual.base, -180.0)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.edge, 0.2578947368421053)
}

///|
test "204: lift/237.5/true" {
  let actual = lift_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: 0.0, edge: 0.2578947368421053 }, 50.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.z, 42.0)
  assert_interaction_number(actual.tilt, 3.486910994764398)
  assert_interaction_number(actual.angle, -182.57894736842104)
  assert_interaction_number(actual.roll, 0.7736842105263159)
  assert_interaction_number(actual.shine_opacity, 0.48)
  assert_interaction_number(actual.shadow_y, 33.0)
  assert_interaction_number(actual.shadow_opacity, 0.46)
}

///|
test "205: drag/237.5/true/-3" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: 0.0, edge: 0.2578947368421053 }, -512.5, -276.25)
  assert_interaction_number(actual.dx, -712.5)
  assert_interaction_number(actual.x, -65.0)
  assert_interaction_number(actual.y, -83.0)
  assert_interaction_number(actual.angle, -356.5473684210526)
  assert_interaction_number(actual.tilt, 22.0)
  assert_interaction_number(actual.roll, -7.0)
  assert_interaction_number(actual.shine_x, -95.0)
}

///|
test "206: release/237.5/true/-3/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: -712.5, edge: 0.2578947368421053 }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "207: release/237.5/true/-3/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: -712.5, edge: 0.2578947368421053 }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, -360.0)
}

///|
test "208: drag/237.5/true/-0.56" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: 0.0, edge: 0.2578947368421053 }, 67.0, 13.5)
  assert_interaction_number(actual.dx, -133.0)
  assert_interaction_number(actual.x, -23.939999999999998)
  assert_interaction_number(actual.y, -41.275)
  assert_interaction_number(actual.angle, -304.74736842105267)
  assert_interaction_number(actual.tilt, 13.926701570680628)
  assert_interaction_number(actual.roll, -2.5863157894736846)
  assert_interaction_number(actual.shine_x, -26.6)
}

///|
test "209: release/237.5/true/-0.56/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: -133.0, edge: 0.2578947368421053 }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "210: release/237.5/true/-0.56/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: -133.0, edge: 0.2578947368421053 }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, -360.0)
}

///|
test "211: drag/237.5/true/-0.30000001" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: 0.0, edge: 0.2578947368421053 }, 128.749997625, 44.3749988125)
  assert_interaction_number(actual.dx, -71.25000237500001)
  assert_interaction_number(actual.x, -12.825000427500001)
  assert_interaction_number(actual.y, -30.468750415624996)
  assert_interaction_number(actual.angle, -247.54737062105264)
  assert_interaction_number(actual.tilt, 7.460733232984293)
  assert_interaction_number(actual.roll, -1.0263158494736846)
  assert_interaction_number(actual.shine_x, -14.250000475000002)
}

///|
test "212: release/237.5/true/-0.30000001/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: -71.250002375, edge: 0.2578947368421053 }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "213: release/237.5/true/-0.30000001/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: -71.250002375, edge: 0.2578947368421053 }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, -360.0)
}

///|
test "214: drag/237.5/true/-0.3" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: 0.0, edge: 0.2578947368421053 }, 128.75, 44.375)
  assert_interaction_number(actual.dx, -71.25)
  assert_interaction_number(actual.x, -12.825)
  assert_interaction_number(actual.y, -30.46875)
  assert_interaction_number(actual.angle, -247.54736842105262)
  assert_interaction_number(actual.tilt, 7.460732984293194)
  assert_interaction_number(actual.roll, -1.026315789473684)
  assert_interaction_number(actual.shine_x, -14.25)
}

///|
test "215: release/237.5/true/-0.3/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: -71.25, edge: 0.2578947368421053 }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "216: release/237.5/true/-0.3/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: -71.25, edge: 0.2578947368421053 }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "217: drag/237.5/true/-0.29999999" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: 0.0, edge: 0.2578947368421053 }, 128.750002375, 44.375001187500004)
  assert_interaction_number(actual.dx, -71.24999762499999)
  assert_interaction_number(actual.x, -12.824999572499998)
  assert_interaction_number(actual.y, -30.468749584374997)
  assert_interaction_number(actual.angle, -247.5473662210526)
  assert_interaction_number(actual.tilt, 7.460732735602093)
  assert_interaction_number(actual.roll, -1.026315729473684)
  assert_interaction_number(actual.shine_x, -14.249999525)
}

///|
test "218: release/237.5/true/-0.29999999/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: -71.24999762499999, edge: 0.2578947368421053 }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "219: release/237.5/true/-0.29999999/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: -71.24999762499999, edge: 0.2578947368421053 }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "220: drag/237.5/true/0" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: 0.0, edge: 0.2578947368421053 }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, -181.54736842105262)
  assert_interaction_number(actual.tilt, -0.0)
  assert_interaction_number(actual.roll, 0.7736842105263159)
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "221: release/237.5/true/0/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: -0.0, edge: 0.2578947368421053 }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "222: release/237.5/true/0/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: -0.0, edge: 0.2578947368421053 }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "223: drag/237.5/true/0" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: 0.0, edge: 0.2578947368421053 }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, -181.54736842105262)
  assert_interaction_number(actual.tilt, -0.0)
  assert_interaction_number(actual.roll, 0.7736842105263159)
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "224: release/237.5/true/0/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: 0.0, edge: 0.2578947368421053 }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "225: release/237.5/true/0/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: 0.0, edge: 0.2578947368421053 }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "226: drag/237.5/true/0.29999999" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: 0.0, edge: 0.2578947368421053 }, 271.249997625, 115.6249988125)
  assert_interaction_number(actual.dx, 71.24999762499999)
  assert_interaction_number(actual.x, 12.824999572499998)
  assert_interaction_number(actual.y, -5.531250415625003)
  assert_interaction_number(actual.angle, -115.54737062105265)
  assert_interaction_number(actual.tilt, -7.460732735602093)
  assert_interaction_number(actual.roll, 2.5736841505263155)
  assert_interaction_number(actual.shine_x, 14.249999525)
}

///|
test "227: release/237.5/true/0.29999999/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: 71.24999762499999, edge: 0.2578947368421053 }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "228: release/237.5/true/0.29999999/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: 71.24999762499999, edge: 0.2578947368421053 }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "229: drag/237.5/true/0.3" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: 0.0, edge: 0.2578947368421053 }, 271.25, 115.625)
  assert_interaction_number(actual.dx, 71.25)
  assert_interaction_number(actual.x, 12.825)
  assert_interaction_number(actual.y, -5.53125)
  assert_interaction_number(actual.angle, -115.54736842105264)
  assert_interaction_number(actual.tilt, -7.460732984293194)
  assert_interaction_number(actual.roll, 2.5736842105263156)
  assert_interaction_number(actual.shine_x, 14.25)
}

///|
test "230: release/237.5/true/0.3/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: 71.25, edge: 0.2578947368421053 }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "231: release/237.5/true/0.3/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: 71.25, edge: 0.2578947368421053 }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "232: drag/237.5/true/0.30000001" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: 0.0, edge: 0.2578947368421053 }, 271.250002375, 115.6250011875)
  assert_interaction_number(actual.dx, 71.25000237500001)
  assert_interaction_number(actual.x, 12.825000427500001)
  assert_interaction_number(actual.y, -5.531249584374999)
  assert_interaction_number(actual.angle, -115.54736622105263)
  assert_interaction_number(actual.tilt, -7.460733232984294)
  assert_interaction_number(actual.roll, 2.573684270526316)
  assert_interaction_number(actual.shine_x, 14.250000475000002)
}

///|
test "233: release/237.5/true/0.30000001/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: 71.250002375, edge: 0.2578947368421053 }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "234: release/237.5/true/0.30000001/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: 71.250002375, edge: 0.2578947368421053 }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 0.0)
}

///|
test "235: drag/237.5/true/0.56" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: 0.0, edge: 0.2578947368421053 }, 333.0, 146.5)
  assert_interaction_number(actual.dx, 133.0)
  assert_interaction_number(actual.x, 23.939999999999998)
  assert_interaction_number(actual.y, 5.274999999999999)
  assert_interaction_number(actual.angle, -58.347368421052614)
  assert_interaction_number(actual.tilt, -13.926701570680628)
  assert_interaction_number(actual.roll, 4.133684210526316)
  assert_interaction_number(actual.shine_x, 26.6)
}

///|
test "236: release/237.5/true/0.56/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: 133.0, edge: 0.2578947368421053 }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "237: release/237.5/true/0.56/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: 133.0, edge: 0.2578947368421053 }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 0.0)
}

///|
test "238: drag/237.5/true/3" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: 0.0, edge: 0.2578947368421053 }, 912.5, 436.25)
  assert_interaction_number(actual.dx, 712.5)
  assert_interaction_number(actual.x, 65.0)
  assert_interaction_number(actual.y, 47.0)
  assert_interaction_number(actual.angle, -6.5473684210526315)
  assert_interaction_number(actual.tilt, -22.0)
  assert_interaction_number(actual.roll, 7.0)
  assert_interaction_number(actual.shine_x, 95.0)
}

///|
test "239: release/237.5/true/3/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: 712.5, edge: 0.2578947368421053 }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "240: release/237.5/true/3/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 237.5, height: 143.25, base: -180.0, back: true, dx: 712.5, edge: 0.2578947368421053 }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 0.0)
}

///|
test "241: hover/237.5/true/20" {
  let actual = hover_ticket(20.0, 50.0, 20.0, 50.0, 237.5, 143.25)
  assert_interaction_number(actual.tilt, 2.5)
  assert_interaction_number(actual.roll, -0.7)
  assert_interaction_number(actual.z, 7.0)
  assert_interaction_number(actual.shine_x, -40.0)
  assert_interaction_number(actual.shine_opacity, 0.26)
}

///|
test "242: hover/237.5/true/200" {
  let actual = hover_ticket(200.0, 80.0, 20.0, 50.0, 237.5, 143.25)
  assert_interaction_number(actual.tilt, 1.4528795811518325)
  assert_interaction_number(actual.roll, 0.3610526315789474)
  assert_interaction_number(actual.z, 7.0)
  assert_interaction_number(actual.shine_x, 20.631578947368425)
  assert_interaction_number(actual.shine_opacity, 0.26)
}

///|
test "243: hover/237.5/true/1000" {
  let actual = hover_ticket(1000.0, -1000.0, 20.0, 50.0, 237.5, 143.25)
  assert_interaction_number(actual.tilt, 39.14921465968587)
  assert_interaction_number(actual.roll, 5.076842105263158)
  assert_interaction_number(actual.z, 7.0)
  assert_interaction_number(actual.shine_x, 290.1052631578948)
  assert_interaction_number(actual.shine_opacity, 0.26)
}

///|
test "244: grip/0/false" {
  let actual = begin_ticket_grip(200.0, 80.0, 20.0, 0.0, 0.0, 360.0, false)
  assert_interaction_number(actual.x, 200.0)
  assert_interaction_number(actual.y, 80.0)
  assert_interaction_number(actual.width, 0.0)
  assert_interaction_number(actual.height, 0.0)
  assert_interaction_number(actual.base, 360.0)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.edge, (1.0 / 0.0))
}

///|
test "245: lift/0/false" {
  let actual = lift_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: 0.0, edge: (1.0 / 0.0) }, 50.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.z, 42.0)
  assert_interaction_number(actual.tilt, (-1.0 / 0.0))
  assert_interaction_number(actual.angle, (-1.0 / 0.0))
  assert_interaction_number(actual.roll, (1.0 / 0.0))
  assert_interaction_number(actual.shine_opacity, 0.48)
  assert_interaction_number(actual.shadow_y, 33.0)
  assert_interaction_number(actual.shadow_opacity, 0.46)
}

///|
test "246: drag/0/false/-3" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: 0.0, edge: (1.0 / 0.0) }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, (0.0 / 0.0))
  assert_interaction_number(actual.tilt, (0.0 / 0.0))
  assert_interaction_number(actual.roll, (0.0 / 0.0))
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "247: release/0/false/-3/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: -0.0, edge: (1.0 / 0.0) }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "248: release/0/false/-3/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: -0.0, edge: (1.0 / 0.0) }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "249: drag/0/false/-0.56" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: 0.0, edge: (1.0 / 0.0) }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, (0.0 / 0.0))
  assert_interaction_number(actual.tilt, (0.0 / 0.0))
  assert_interaction_number(actual.roll, (0.0 / 0.0))
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "250: release/0/false/-0.56/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: -0.0, edge: (1.0 / 0.0) }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "251: release/0/false/-0.56/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: -0.0, edge: (1.0 / 0.0) }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "252: drag/0/false/-0.30000001" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: 0.0, edge: (1.0 / 0.0) }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, (0.0 / 0.0))
  assert_interaction_number(actual.tilt, (0.0 / 0.0))
  assert_interaction_number(actual.roll, (0.0 / 0.0))
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "253: release/0/false/-0.30000001/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: -0.0, edge: (1.0 / 0.0) }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "254: release/0/false/-0.30000001/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: -0.0, edge: (1.0 / 0.0) }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "255: drag/0/false/-0.3" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: 0.0, edge: (1.0 / 0.0) }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, (0.0 / 0.0))
  assert_interaction_number(actual.tilt, (0.0 / 0.0))
  assert_interaction_number(actual.roll, (0.0 / 0.0))
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "256: release/0/false/-0.3/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: -0.0, edge: (1.0 / 0.0) }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "257: release/0/false/-0.3/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: -0.0, edge: (1.0 / 0.0) }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "258: drag/0/false/-0.29999999" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: 0.0, edge: (1.0 / 0.0) }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, (0.0 / 0.0))
  assert_interaction_number(actual.tilt, (0.0 / 0.0))
  assert_interaction_number(actual.roll, (0.0 / 0.0))
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "259: release/0/false/-0.29999999/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: -0.0, edge: (1.0 / 0.0) }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "260: release/0/false/-0.29999999/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: -0.0, edge: (1.0 / 0.0) }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "261: drag/0/false/0" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: 0.0, edge: (1.0 / 0.0) }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, (0.0 / 0.0))
  assert_interaction_number(actual.tilt, (0.0 / 0.0))
  assert_interaction_number(actual.roll, (0.0 / 0.0))
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "262: release/0/false/0/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: -0.0, edge: (1.0 / 0.0) }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "263: release/0/false/0/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: -0.0, edge: (1.0 / 0.0) }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "264: drag/0/false/0" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: 0.0, edge: (1.0 / 0.0) }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, (0.0 / 0.0))
  assert_interaction_number(actual.tilt, (0.0 / 0.0))
  assert_interaction_number(actual.roll, (0.0 / 0.0))
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "265: release/0/false/0/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: 0.0, edge: (1.0 / 0.0) }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "266: release/0/false/0/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: 0.0, edge: (1.0 / 0.0) }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "267: drag/0/false/0.29999999" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: 0.0, edge: (1.0 / 0.0) }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, (0.0 / 0.0))
  assert_interaction_number(actual.tilt, (0.0 / 0.0))
  assert_interaction_number(actual.roll, (0.0 / 0.0))
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "268: release/0/false/0.29999999/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: 0.0, edge: (1.0 / 0.0) }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "269: release/0/false/0.29999999/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: 0.0, edge: (1.0 / 0.0) }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "270: drag/0/false/0.3" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: 0.0, edge: (1.0 / 0.0) }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, (0.0 / 0.0))
  assert_interaction_number(actual.tilt, (0.0 / 0.0))
  assert_interaction_number(actual.roll, (0.0 / 0.0))
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "271: release/0/false/0.3/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: 0.0, edge: (1.0 / 0.0) }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "272: release/0/false/0.3/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: 0.0, edge: (1.0 / 0.0) }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "273: drag/0/false/0.30000001" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: 0.0, edge: (1.0 / 0.0) }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, (0.0 / 0.0))
  assert_interaction_number(actual.tilt, (0.0 / 0.0))
  assert_interaction_number(actual.roll, (0.0 / 0.0))
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "274: release/0/false/0.30000001/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: 0.0, edge: (1.0 / 0.0) }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "275: release/0/false/0.30000001/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: 0.0, edge: (1.0 / 0.0) }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "276: drag/0/false/0.56" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: 0.0, edge: (1.0 / 0.0) }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, (0.0 / 0.0))
  assert_interaction_number(actual.tilt, (0.0 / 0.0))
  assert_interaction_number(actual.roll, (0.0 / 0.0))
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "277: release/0/false/0.56/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: 0.0, edge: (1.0 / 0.0) }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "278: release/0/false/0.56/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: 0.0, edge: (1.0 / 0.0) }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "279: drag/0/false/3" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: 0.0, edge: (1.0 / 0.0) }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, (0.0 / 0.0))
  assert_interaction_number(actual.tilt, (0.0 / 0.0))
  assert_interaction_number(actual.roll, (0.0 / 0.0))
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "280: release/0/false/3/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: 0.0, edge: (1.0 / 0.0) }, false)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "281: release/0/false/3/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: 360.0, back: false, dx: 0.0, edge: (1.0 / 0.0) }, true)
  assert_eq(actual.back, false)
  assert_interaction_number(actual.angle, 360.0)
}

///|
test "282: hover/0/false/20" {
  let actual = hover_ticket(20.0, 50.0, 20.0, 50.0, 0.0, 0.0)
  assert_interaction_number(actual.tilt, (0.0 / 0.0))
  assert_interaction_number(actual.roll, (0.0 / 0.0))
  assert_interaction_number(actual.z, 7.0)
  assert_interaction_number(actual.shine_x, (0.0 / 0.0))
  assert_interaction_number(actual.shine_opacity, 0.26)
}

///|
test "283: hover/0/false/200" {
  let actual = hover_ticket(200.0, 80.0, 20.0, 50.0, 0.0, 0.0)
  assert_interaction_number(actual.tilt, (-1.0 / 0.0))
  assert_interaction_number(actual.roll, (1.0 / 0.0))
  assert_interaction_number(actual.z, 7.0)
  assert_interaction_number(actual.shine_x, (1.0 / 0.0))
  assert_interaction_number(actual.shine_opacity, 0.26)
}

///|
test "284: hover/0/false/1000" {
  let actual = hover_ticket(1000.0, -1000.0, 20.0, 50.0, 0.0, 0.0)
  assert_interaction_number(actual.tilt, (1.0 / 0.0))
  assert_interaction_number(actual.roll, (1.0 / 0.0))
  assert_interaction_number(actual.z, 7.0)
  assert_interaction_number(actual.shine_x, (1.0 / 0.0))
  assert_interaction_number(actual.shine_opacity, 0.26)
}

///|
test "285: grip/0/true" {
  let actual = begin_ticket_grip(200.0, 80.0, 20.0, 0.0, 0.0, -180.0, true)
  assert_interaction_number(actual.x, 200.0)
  assert_interaction_number(actual.y, 80.0)
  assert_interaction_number(actual.width, 0.0)
  assert_interaction_number(actual.height, 0.0)
  assert_interaction_number(actual.base, -180.0)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.edge, (1.0 / 0.0))
}

///|
test "286: lift/0/true" {
  let actual = lift_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: 0.0, edge: (1.0 / 0.0) }, 50.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.z, 42.0)
  assert_interaction_number(actual.tilt, (-1.0 / 0.0))
  assert_interaction_number(actual.angle, (-1.0 / 0.0))
  assert_interaction_number(actual.roll, (1.0 / 0.0))
  assert_interaction_number(actual.shine_opacity, 0.48)
  assert_interaction_number(actual.shadow_y, 33.0)
  assert_interaction_number(actual.shadow_opacity, 0.46)
}

///|
test "287: drag/0/true/-3" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: 0.0, edge: (1.0 / 0.0) }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, (0.0 / 0.0))
  assert_interaction_number(actual.tilt, (0.0 / 0.0))
  assert_interaction_number(actual.roll, (0.0 / 0.0))
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "288: release/0/true/-3/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: -0.0, edge: (1.0 / 0.0) }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "289: release/0/true/-3/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: -0.0, edge: (1.0 / 0.0) }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "290: drag/0/true/-0.56" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: 0.0, edge: (1.0 / 0.0) }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, (0.0 / 0.0))
  assert_interaction_number(actual.tilt, (0.0 / 0.0))
  assert_interaction_number(actual.roll, (0.0 / 0.0))
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "291: release/0/true/-0.56/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: -0.0, edge: (1.0 / 0.0) }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "292: release/0/true/-0.56/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: -0.0, edge: (1.0 / 0.0) }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "293: drag/0/true/-0.30000001" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: 0.0, edge: (1.0 / 0.0) }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, (0.0 / 0.0))
  assert_interaction_number(actual.tilt, (0.0 / 0.0))
  assert_interaction_number(actual.roll, (0.0 / 0.0))
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "294: release/0/true/-0.30000001/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: -0.0, edge: (1.0 / 0.0) }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "295: release/0/true/-0.30000001/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: -0.0, edge: (1.0 / 0.0) }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "296: drag/0/true/-0.3" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: 0.0, edge: (1.0 / 0.0) }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, (0.0 / 0.0))
  assert_interaction_number(actual.tilt, (0.0 / 0.0))
  assert_interaction_number(actual.roll, (0.0 / 0.0))
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "297: release/0/true/-0.3/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: -0.0, edge: (1.0 / 0.0) }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "298: release/0/true/-0.3/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: -0.0, edge: (1.0 / 0.0) }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "299: drag/0/true/-0.29999999" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: 0.0, edge: (1.0 / 0.0) }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, (0.0 / 0.0))
  assert_interaction_number(actual.tilt, (0.0 / 0.0))
  assert_interaction_number(actual.roll, (0.0 / 0.0))
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "300: release/0/true/-0.29999999/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: -0.0, edge: (1.0 / 0.0) }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "301: release/0/true/-0.29999999/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: -0.0, edge: (1.0 / 0.0) }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "302: drag/0/true/0" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: 0.0, edge: (1.0 / 0.0) }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, (0.0 / 0.0))
  assert_interaction_number(actual.tilt, (0.0 / 0.0))
  assert_interaction_number(actual.roll, (0.0 / 0.0))
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "303: release/0/true/0/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: -0.0, edge: (1.0 / 0.0) }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "304: release/0/true/0/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: -0.0, edge: (1.0 / 0.0) }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "305: drag/0/true/0" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: 0.0, edge: (1.0 / 0.0) }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, (0.0 / 0.0))
  assert_interaction_number(actual.tilt, (0.0 / 0.0))
  assert_interaction_number(actual.roll, (0.0 / 0.0))
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "306: release/0/true/0/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: 0.0, edge: (1.0 / 0.0) }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "307: release/0/true/0/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: 0.0, edge: (1.0 / 0.0) }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "308: drag/0/true/0.29999999" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: 0.0, edge: (1.0 / 0.0) }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, (0.0 / 0.0))
  assert_interaction_number(actual.tilt, (0.0 / 0.0))
  assert_interaction_number(actual.roll, (0.0 / 0.0))
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "309: release/0/true/0.29999999/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: 0.0, edge: (1.0 / 0.0) }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "310: release/0/true/0.29999999/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: 0.0, edge: (1.0 / 0.0) }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "311: drag/0/true/0.3" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: 0.0, edge: (1.0 / 0.0) }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, (0.0 / 0.0))
  assert_interaction_number(actual.tilt, (0.0 / 0.0))
  assert_interaction_number(actual.roll, (0.0 / 0.0))
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "312: release/0/true/0.3/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: 0.0, edge: (1.0 / 0.0) }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "313: release/0/true/0.3/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: 0.0, edge: (1.0 / 0.0) }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "314: drag/0/true/0.30000001" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: 0.0, edge: (1.0 / 0.0) }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, (0.0 / 0.0))
  assert_interaction_number(actual.tilt, (0.0 / 0.0))
  assert_interaction_number(actual.roll, (0.0 / 0.0))
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "315: release/0/true/0.30000001/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: 0.0, edge: (1.0 / 0.0) }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "316: release/0/true/0.30000001/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: 0.0, edge: (1.0 / 0.0) }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "317: drag/0/true/0.56" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: 0.0, edge: (1.0 / 0.0) }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, (0.0 / 0.0))
  assert_interaction_number(actual.tilt, (0.0 / 0.0))
  assert_interaction_number(actual.roll, (0.0 / 0.0))
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "318: release/0/true/0.56/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: 0.0, edge: (1.0 / 0.0) }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "319: release/0/true/0.56/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: 0.0, edge: (1.0 / 0.0) }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "320: drag/0/true/3" {
  let actual = drag_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: 0.0, edge: (1.0 / 0.0) }, 200.0, 80.0)
  assert_interaction_number(actual.dx, 0.0)
  assert_interaction_number(actual.x, 0.0)
  assert_interaction_number(actual.y, -18.0)
  assert_interaction_number(actual.angle, (0.0 / 0.0))
  assert_interaction_number(actual.tilt, (0.0 / 0.0))
  assert_interaction_number(actual.roll, (0.0 / 0.0))
  assert_interaction_number(actual.shine_x, 0.0)
}

///|
test "321: release/0/true/3/false" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: 0.0, edge: (1.0 / 0.0) }, false)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "322: release/0/true/3/true" {
  let actual = release_ticket(TicketGrip::{ x: 200.0, y: 80.0, width: 0.0, height: 0.0, base: -180.0, back: true, dx: 0.0, edge: (1.0 / 0.0) }, true)
  assert_eq(actual.back, true)
  assert_interaction_number(actual.angle, -180.0)
}

///|
test "323: hover/0/true/20" {
  let actual = hover_ticket(20.0, 50.0, 20.0, 50.0, 0.0, 0.0)
  assert_interaction_number(actual.tilt, (0.0 / 0.0))
  assert_interaction_number(actual.roll, (0.0 / 0.0))
  assert_interaction_number(actual.z, 7.0)
  assert_interaction_number(actual.shine_x, (0.0 / 0.0))
  assert_interaction_number(actual.shine_opacity, 0.26)
}

///|
test "324: hover/0/true/200" {
  let actual = hover_ticket(200.0, 80.0, 20.0, 50.0, 0.0, 0.0)
  assert_interaction_number(actual.tilt, (-1.0 / 0.0))
  assert_interaction_number(actual.roll, (1.0 / 0.0))
  assert_interaction_number(actual.z, 7.0)
  assert_interaction_number(actual.shine_x, (1.0 / 0.0))
  assert_interaction_number(actual.shine_opacity, 0.26)
}

///|
test "325: hover/0/true/1000" {
  let actual = hover_ticket(1000.0, -1000.0, 20.0, 50.0, 0.0, 0.0)
  assert_interaction_number(actual.tilt, (1.0 / 0.0))
  assert_interaction_number(actual.roll, (1.0 / 0.0))
  assert_interaction_number(actual.z, 7.0)
  assert_interaction_number(actual.shine_x, (1.0 / 0.0))
  assert_interaction_number(actual.shine_opacity, 0.26)
}

///|
test "326: serial/326" {
  let actual = ticket_serial("")
  assert_eq(actual, "00000007")
}

///|
test "327: serial/327" {
  let actual = ticket_serial("welcome-v1")
  assert_eq(actual, "21726477")
}

///|
test "328: serial/328" {
  let actual = ticket_serial("sample-v1-1")
  assert_eq(actual, "10666811")
}

///|
test "329: serial/329" {
  let actual = ticket_serial("trip-1")
  assert_eq(actual, "52091216")
}

///|
test "330: serial/330" {
  let actual = ticket_serial("車窓")
  assert_eq(actual, "01171280")
}

///|
test "331: serial/331" {
  let actual = ticket_serial("🚃")
  assert_eq(actual, "00055574")
}

///|
test "332: serial/332" {
  let actual = ticket_serial("a🚃b")
  assert_eq(actual, "02017919")
}

///|
test "333: serial/333" {
  let actual = ticket_serial("🚃".unsafe_substring(start=0, end=1))
  assert_eq(actual, "00055574")
}

///|
test "334: serial/334" {
  let actual = ticket_serial("🚃".unsafe_substring(start=1, end=2))
  assert_eq(actual, "00057180")
}

///|
test "335: serial/335" {
  let actual = ticket_serial("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
  assert_eq(actual, "72534791")
}

///|
test "336: samples/0" {
  let actual = sample_tickets(0.0)
  assert_eq(actual.length(), 3)
  assert_eq(actual[0].id, "sample-v1-1")
  assert_eq(actual[0].kind.unwrap(), "sample")
  assert_eq(actual[0].title, "読みかけの本を、ひと章")
  assert_eq(actual[0].note, "気になっていた本の続きを読んだ。\n次は、折り目をつけたページから。")
  assert_eq(actual[0].speed, "local")
  assert_eq(actual[0].scene, "mist")
  assert_interaction_number(actual[0].arrived_at, -86400000.0)
  assert_interaction_number(actual[0].started_at, -87900000.0)
  assert_eq(actual[1].id, "sample-v1-2")
  assert_eq(actual[1].kind.unwrap(), "sample")
  assert_eq(actual[1].title, "企画のラフを描く")
  assert_eq(actual[1].note, "浮かんだアイデアを三つ、紙に描いた。\nまだ途中だけれど、形が見えてきた。")
  assert_eq(actual[1].speed, "express")
  assert_eq(actual[1].scene, "dawn")
  assert_interaction_number(actual[1].arrived_at, -172800000.0)
  assert_interaction_number(actual[1].started_at, -175500000.0)
  assert_eq(actual[2].id, "sample-v1-3")
  assert_eq(actual[2].kind.unwrap(), "sample")
  assert_eq(actual[2].title, "明日のことを手帳に")
  assert_eq(actual[2].note, "気にかかっていたことを、ひとつずつ書き出した。\n明日は、自分のペースで。")
  assert_eq(actual[2].speed, "rapid")
  assert_eq(actual[2].scene, "night")
  assert_interaction_number(actual[2].arrived_at, -259200000.0)
  assert_interaction_number(actual[2].started_at, -260100000.0)
}

///|
test "337: samples/0" {
  let actual = sample_tickets(-0.0)
  assert_eq(actual.length(), 3)
  assert_eq(actual[0].id, "sample-v1-1")
  assert_eq(actual[0].kind.unwrap(), "sample")
  assert_eq(actual[0].title, "読みかけの本を、ひと章")
  assert_eq(actual[0].note, "気になっていた本の続きを読んだ。\n次は、折り目をつけたページから。")
  assert_eq(actual[0].speed, "local")
  assert_eq(actual[0].scene, "mist")
  assert_interaction_number(actual[0].arrived_at, -86400000.0)
  assert_interaction_number(actual[0].started_at, -87900000.0)
  assert_eq(actual[1].id, "sample-v1-2")
  assert_eq(actual[1].kind.unwrap(), "sample")
  assert_eq(actual[1].title, "企画のラフを描く")
  assert_eq(actual[1].note, "浮かんだアイデアを三つ、紙に描いた。\nまだ途中だけれど、形が見えてきた。")
  assert_eq(actual[1].speed, "express")
  assert_eq(actual[1].scene, "dawn")
  assert_interaction_number(actual[1].arrived_at, -172800000.0)
  assert_interaction_number(actual[1].started_at, -175500000.0)
  assert_eq(actual[2].id, "sample-v1-3")
  assert_eq(actual[2].kind.unwrap(), "sample")
  assert_eq(actual[2].title, "明日のことを手帳に")
  assert_eq(actual[2].note, "気にかかっていたことを、ひとつずつ書き出した。\n明日は、自分のペースで。")
  assert_eq(actual[2].speed, "rapid")
  assert_eq(actual[2].scene, "night")
  assert_interaction_number(actual[2].arrived_at, -259200000.0)
  assert_interaction_number(actual[2].started_at, -260100000.0)
}

///|
test "338: samples/123.5" {
  let actual = sample_tickets(123.5)
  assert_eq(actual.length(), 3)
  assert_eq(actual[0].id, "sample-v1-1")
  assert_eq(actual[0].kind.unwrap(), "sample")
  assert_eq(actual[0].title, "読みかけの本を、ひと章")
  assert_eq(actual[0].note, "気になっていた本の続きを読んだ。\n次は、折り目をつけたページから。")
  assert_eq(actual[0].speed, "local")
  assert_eq(actual[0].scene, "mist")
  assert_interaction_number(actual[0].arrived_at, -86399876.5)
  assert_interaction_number(actual[0].started_at, -87899876.5)
  assert_eq(actual[1].id, "sample-v1-2")
  assert_eq(actual[1].kind.unwrap(), "sample")
  assert_eq(actual[1].title, "企画のラフを描く")
  assert_eq(actual[1].note, "浮かんだアイデアを三つ、紙に描いた。\nまだ途中だけれど、形が見えてきた。")
  assert_eq(actual[1].speed, "express")
  assert_eq(actual[1].scene, "dawn")
  assert_interaction_number(actual[1].arrived_at, -172799876.5)
  assert_interaction_number(actual[1].started_at, -175499876.5)
  assert_eq(actual[2].id, "sample-v1-3")
  assert_eq(actual[2].kind.unwrap(), "sample")
  assert_eq(actual[2].title, "明日のことを手帳に")
  assert_eq(actual[2].note, "気にかかっていたことを、ひとつずつ書き出した。\n明日は、自分のペースで。")
  assert_eq(actual[2].speed, "rapid")
  assert_eq(actual[2].scene, "night")
  assert_interaction_number(actual[2].arrived_at, -259199876.5)
  assert_interaction_number(actual[2].started_at, -260099876.5)
}

///|
test "339: samples/1800000000123" {
  let actual = sample_tickets(1800000000123.0)
  assert_eq(actual.length(), 3)
  assert_eq(actual[0].id, "sample-v1-1")
  assert_eq(actual[0].kind.unwrap(), "sample")
  assert_eq(actual[0].title, "読みかけの本を、ひと章")
  assert_eq(actual[0].note, "気になっていた本の続きを読んだ。\n次は、折り目をつけたページから。")
  assert_eq(actual[0].speed, "local")
  assert_eq(actual[0].scene, "mist")
  assert_interaction_number(actual[0].arrived_at, 1799913600123.0)
  assert_interaction_number(actual[0].started_at, 1799912100123.0)
  assert_eq(actual[1].id, "sample-v1-2")
  assert_eq(actual[1].kind.unwrap(), "sample")
  assert_eq(actual[1].title, "企画のラフを描く")
  assert_eq(actual[1].note, "浮かんだアイデアを三つ、紙に描いた。\nまだ途中だけれど、形が見えてきた。")
  assert_eq(actual[1].speed, "express")
  assert_eq(actual[1].scene, "dawn")
  assert_interaction_number(actual[1].arrived_at, 1799827200123.0)
  assert_interaction_number(actual[1].started_at, 1799824500123.0)
  assert_eq(actual[2].id, "sample-v1-3")
  assert_eq(actual[2].kind.unwrap(), "sample")
  assert_eq(actual[2].title, "明日のことを手帳に")
  assert_eq(actual[2].note, "気にかかっていたことを、ひとつずつ書き出した。\n明日は、自分のペースで。")
  assert_eq(actual[2].speed, "rapid")
  assert_eq(actual[2].scene, "night")
  assert_interaction_number(actual[2].arrived_at, 1799740800123.0)
  assert_interaction_number(actual[2].started_at, 1799739900123.0)
}

///|
test "340: samples/9007199254740991" {
  let actual = sample_tickets(9007199254740991.0)
  assert_eq(actual.length(), 3)
  assert_eq(actual[0].id, "sample-v1-1")
  assert_eq(actual[0].kind.unwrap(), "sample")
  assert_eq(actual[0].title, "読みかけの本を、ひと章")
  assert_eq(actual[0].note, "気になっていた本の続きを読んだ。\n次は、折り目をつけたページから。")
  assert_eq(actual[0].speed, "local")
  assert_eq(actual[0].scene, "mist")
  assert_interaction_number(actual[0].arrived_at, 9007199168340991.0)
  assert_interaction_number(actual[0].started_at, 9007199166840991.0)
  assert_eq(actual[1].id, "sample-v1-2")
  assert_eq(actual[1].kind.unwrap(), "sample")
  assert_eq(actual[1].title, "企画のラフを描く")
  assert_eq(actual[1].note, "浮かんだアイデアを三つ、紙に描いた。\nまだ途中だけれど、形が見えてきた。")
  assert_eq(actual[1].speed, "express")
  assert_eq(actual[1].scene, "dawn")
  assert_interaction_number(actual[1].arrived_at, 9007199081940991.0)
  assert_interaction_number(actual[1].started_at, 9007199079240991.0)
  assert_eq(actual[2].id, "sample-v1-3")
  assert_eq(actual[2].kind.unwrap(), "sample")
  assert_eq(actual[2].title, "明日のことを手帳に")
  assert_eq(actual[2].note, "気にかかっていたことを、ひとつずつ書き出した。\n明日は、自分のペースで。")
  assert_eq(actual[2].speed, "rapid")
  assert_eq(actual[2].scene, "night")
  assert_interaction_number(actual[2].arrived_at, 9007198995540991.0)
  assert_interaction_number(actual[2].started_at, 9007198994640991.0)
}

///|
test "341: samples/9007199254740992" {
  let actual = sample_tickets(9007199254740992.0)
  assert_eq(actual.length(), 3)
  assert_eq(actual[0].id, "sample-v1-1")
  assert_eq(actual[0].kind.unwrap(), "sample")
  assert_eq(actual[0].title, "読みかけの本を、ひと章")
  assert_eq(actual[0].note, "気になっていた本の続きを読んだ。\n次は、折り目をつけたページから。")
  assert_eq(actual[0].speed, "local")
  assert_eq(actual[0].scene, "mist")
  assert_interaction_number(actual[0].arrived_at, 9007199168340992.0)
  assert_interaction_number(actual[0].started_at, 9007199166840992.0)
  assert_eq(actual[1].id, "sample-v1-2")
  assert_eq(actual[1].kind.unwrap(), "sample")
  assert_eq(actual[1].title, "企画のラフを描く")
  assert_eq(actual[1].note, "浮かんだアイデアを三つ、紙に描いた。\nまだ途中だけれど、形が見えてきた。")
  assert_eq(actual[1].speed, "express")
  assert_eq(actual[1].scene, "dawn")
  assert_interaction_number(actual[1].arrived_at, 9007199081940992.0)
  assert_interaction_number(actual[1].started_at, 9007199079240992.0)
  assert_eq(actual[2].id, "sample-v1-3")
  assert_eq(actual[2].kind.unwrap(), "sample")
  assert_eq(actual[2].title, "明日のことを手帳に")
  assert_eq(actual[2].note, "気にかかっていたことを、ひとつずつ書き出した。\n明日は、自分のペースで。")
  assert_eq(actual[2].speed, "rapid")
  assert_eq(actual[2].scene, "night")
  assert_interaction_number(actual[2].arrived_at, 9007198995540992.0)
  assert_interaction_number(actual[2].started_at, 9007198994640992.0)
}

///|
test "342: samples/NaN" {
  let actual = sample_tickets((0.0 / 0.0))
  assert_eq(actual.length(), 3)
  assert_eq(actual[0].id, "sample-v1-1")
  assert_eq(actual[0].kind.unwrap(), "sample")
  assert_eq(actual[0].title, "読みかけの本を、ひと章")
  assert_eq(actual[0].note, "気になっていた本の続きを読んだ。\n次は、折り目をつけたページから。")
  assert_eq(actual[0].speed, "local")
  assert_eq(actual[0].scene, "mist")
  assert_interaction_number(actual[0].arrived_at, (0.0 / 0.0))
  assert_interaction_number(actual[0].started_at, (0.0 / 0.0))
  assert_eq(actual[1].id, "sample-v1-2")
  assert_eq(actual[1].kind.unwrap(), "sample")
  assert_eq(actual[1].title, "企画のラフを描く")
  assert_eq(actual[1].note, "浮かんだアイデアを三つ、紙に描いた。\nまだ途中だけれど、形が見えてきた。")
  assert_eq(actual[1].speed, "express")
  assert_eq(actual[1].scene, "dawn")
  assert_interaction_number(actual[1].arrived_at, (0.0 / 0.0))
  assert_interaction_number(actual[1].started_at, (0.0 / 0.0))
  assert_eq(actual[2].id, "sample-v1-3")
  assert_eq(actual[2].kind.unwrap(), "sample")
  assert_eq(actual[2].title, "明日のことを手帳に")
  assert_eq(actual[2].note, "気にかかっていたことを、ひとつずつ書き出した。\n明日は、自分のペースで。")
  assert_eq(actual[2].speed, "rapid")
  assert_eq(actual[2].scene, "night")
  assert_interaction_number(actual[2].arrived_at, (0.0 / 0.0))
  assert_interaction_number(actual[2].started_at, (0.0 / 0.0))
}

///|
test "343: samples/Infinity" {
  let actual = sample_tickets((1.0 / 0.0))
  assert_eq(actual.length(), 3)
  assert_eq(actual[0].id, "sample-v1-1")
  assert_eq(actual[0].kind.unwrap(), "sample")
  assert_eq(actual[0].title, "読みかけの本を、ひと章")
  assert_eq(actual[0].note, "気になっていた本の続きを読んだ。\n次は、折り目をつけたページから。")
  assert_eq(actual[0].speed, "local")
  assert_eq(actual[0].scene, "mist")
  assert_interaction_number(actual[0].arrived_at, (1.0 / 0.0))
  assert_interaction_number(actual[0].started_at, (1.0 / 0.0))
  assert_eq(actual[1].id, "sample-v1-2")
  assert_eq(actual[1].kind.unwrap(), "sample")
  assert_eq(actual[1].title, "企画のラフを描く")
  assert_eq(actual[1].note, "浮かんだアイデアを三つ、紙に描いた。\nまだ途中だけれど、形が見えてきた。")
  assert_eq(actual[1].speed, "express")
  assert_eq(actual[1].scene, "dawn")
  assert_interaction_number(actual[1].arrived_at, (1.0 / 0.0))
  assert_interaction_number(actual[1].started_at, (1.0 / 0.0))
  assert_eq(actual[2].id, "sample-v1-3")
  assert_eq(actual[2].kind.unwrap(), "sample")
  assert_eq(actual[2].title, "明日のことを手帳に")
  assert_eq(actual[2].note, "気にかかっていたことを、ひとつずつ書き出した。\n明日は、自分のペースで。")
  assert_eq(actual[2].speed, "rapid")
  assert_eq(actual[2].scene, "night")
  assert_interaction_number(actual[2].arrived_at, (1.0 / 0.0))
  assert_interaction_number(actual[2].started_at, (1.0 / 0.0))
}

///|
test "344: samples/-Infinity" {
  let actual = sample_tickets((-1.0 / 0.0))
  assert_eq(actual.length(), 3)
  assert_eq(actual[0].id, "sample-v1-1")
  assert_eq(actual[0].kind.unwrap(), "sample")
  assert_eq(actual[0].title, "読みかけの本を、ひと章")
  assert_eq(actual[0].note, "気になっていた本の続きを読んだ。\n次は、折り目をつけたページから。")
  assert_eq(actual[0].speed, "local")
  assert_eq(actual[0].scene, "mist")
  assert_interaction_number(actual[0].arrived_at, (-1.0 / 0.0))
  assert_interaction_number(actual[0].started_at, (-1.0 / 0.0))
  assert_eq(actual[1].id, "sample-v1-2")
  assert_eq(actual[1].kind.unwrap(), "sample")
  assert_eq(actual[1].title, "企画のラフを描く")
  assert_eq(actual[1].note, "浮かんだアイデアを三つ、紙に描いた。\nまだ途中だけれど、形が見えてきた。")
  assert_eq(actual[1].speed, "express")
  assert_eq(actual[1].scene, "dawn")
  assert_interaction_number(actual[1].arrived_at, (-1.0 / 0.0))
  assert_interaction_number(actual[1].started_at, (-1.0 / 0.0))
  assert_eq(actual[2].id, "sample-v1-3")
  assert_eq(actual[2].kind.unwrap(), "sample")
  assert_eq(actual[2].title, "明日のことを手帳に")
  assert_eq(actual[2].note, "気にかかっていたことを、ひとつずつ書き出した。\n明日は、自分のペースで。")
  assert_eq(actual[2].speed, "rapid")
  assert_eq(actual[2].scene, "night")
  assert_interaction_number(actual[2].arrived_at, (-1.0 / 0.0))
  assert_interaction_number(actual[2].started_at, (-1.0 / 0.0))
}

///|
test "345: legacy/idle/null/false" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Idle, running: false, deadline: None, remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, [])
  assert_true(result is None)
}

///|
test "346: remaining/idle/null/false" {
  let actual = journey_remaining(Journey::{ phase: Idle, running: false, deadline: None, remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 123.5)
}

///|
test "347: legacy/idle/null/true" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Idle, running: true, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, [])
  assert_true(result is None)
}

///|
test "348: remaining/idle/null/true" {
  let actual = journey_remaining(Journey::{ phase: Idle, running: true, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_true(actual is None)
}

///|
test "349: legacy/idle/0/false" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Idle, running: false, deadline: Some(0.0), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, [])
  assert_true(result is None)
}

///|
test "350: remaining/idle/0/false" {
  let actual = journey_remaining(Journey::{ phase: Idle, running: false, deadline: Some(0.0), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 123.5)
}

///|
test "351: legacy/idle/0/true" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Idle, running: true, deadline: Some(0.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, [])
  assert_true(result is None)
}

///|
test "352: remaining/idle/0/true" {
  let actual = journey_remaining(Journey::{ phase: Idle, running: true, deadline: Some(0.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 0.0)
}

///|
test "353: legacy/idle/0/false" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Idle, running: false, deadline: Some(-0.0), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, [])
  assert_true(result is None)
}

///|
test "354: remaining/idle/0/false" {
  let actual = journey_remaining(Journey::{ phase: Idle, running: false, deadline: Some(-0.0), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 123.5)
}

///|
test "355: legacy/idle/0/true" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Idle, running: true, deadline: Some(-0.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, [])
  assert_true(result is None)
}

///|
test "356: remaining/idle/0/true" {
  let actual = journey_remaining(Journey::{ phase: Idle, running: true, deadline: Some(-0.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 0.0)
}

///|
test "357: legacy/idle/123.5/false" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Idle, running: false, deadline: Some(123.5), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, [])
  assert_true(result is None)
}

///|
test "358: remaining/idle/123.5/false" {
  let actual = journey_remaining(Journey::{ phase: Idle, running: false, deadline: Some(123.5), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 123.5)
}

///|
test "359: legacy/idle/123.5/true" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Idle, running: true, deadline: Some(123.5), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, [])
  assert_true(result is None)
}

///|
test "360: remaining/idle/123.5/true" {
  let actual = journey_remaining(Journey::{ phase: Idle, running: true, deadline: Some(123.5), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 0.0)
}

///|
test "361: legacy/idle/1800000060000/false" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Idle, running: false, deadline: Some(1800000060000.0), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, [])
  assert_true(result is None)
}

///|
test "362: remaining/idle/1800000060000/false" {
  let actual = journey_remaining(Journey::{ phase: Idle, running: false, deadline: Some(1800000060000.0), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 123.5)
}

///|
test "363: legacy/idle/1800000060000/true" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Idle, running: true, deadline: Some(1800000060000.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, [])
  assert_true(result is None)
}

///|
test "364: remaining/idle/1800000060000/true" {
  let actual = journey_remaining(Journey::{ phase: Idle, running: true, deadline: Some(1800000060000.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 59877.0)
}

///|
test "365: legacy/focus/null/false" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Focus, running: false, deadline: None, remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, ["id", "now"])
  let actual = result.unwrap()
  @debug.assert_eq(actual.phase, Focus)
  assert_eq(actual.running, false)
  assert_true(actual.deadline is None)
  assert_interaction_number(actual.remaining.unwrap(), 123.5)
  assert_interaction_number(actual.focus_minutes, 25.0)
  assert_interaction_number(actual.rest_minutes, 5.0)
  assert_eq(actual.id.unwrap(), "legacy-id")
  assert_eq(actual.speed.unwrap(), "express")
  assert_eq(actual.scene.unwrap(), "night")
  assert_interaction_number(actual.started_at.unwrap(), 1799998500123.0)
  assert_true(actual.arrived_at is None)
}

///|
test "366: remaining/focus/null/false" {
  let actual = journey_remaining(Journey::{ phase: Focus, running: false, deadline: None, remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 123.5)
}

///|
test "367: legacy/focus/null/true" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, ["id", "now"])
  let actual = result.unwrap()
  @debug.assert_eq(actual.phase, Focus)
  assert_eq(actual.running, true)
  assert_true(actual.deadline is None)
  assert_true(actual.remaining is None)
  assert_interaction_number(actual.focus_minutes, 25.0)
  assert_interaction_number(actual.rest_minutes, 5.0)
  assert_eq(actual.id.unwrap(), "legacy-id")
  assert_eq(actual.speed.unwrap(), "express")
  assert_eq(actual.scene.unwrap(), "night")
  assert_interaction_number(actual.started_at.unwrap(), 1799998500123.0)
  assert_true(actual.arrived_at is None)
}

///|
test "368: remaining/focus/null/true" {
  let actual = journey_remaining(Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_true(actual is None)
}

///|
test "369: legacy/focus/0/false" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Focus, running: false, deadline: Some(0.0), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, ["id"])
  let actual = result.unwrap()
  @debug.assert_eq(actual.phase, Focus)
  assert_eq(actual.running, false)
  assert_interaction_number(actual.deadline.unwrap(), 0.0)
  assert_interaction_number(actual.remaining.unwrap(), 123.5)
  assert_interaction_number(actual.focus_minutes, 25.0)
  assert_interaction_number(actual.rest_minutes, 5.0)
  assert_eq(actual.id.unwrap(), "legacy-id")
  assert_eq(actual.speed.unwrap(), "express")
  assert_eq(actual.scene.unwrap(), "night")
  assert_interaction_number(actual.started_at.unwrap(), 0.0)
  assert_true(actual.arrived_at is None)
}

///|
test "370: remaining/focus/0/false" {
  let actual = journey_remaining(Journey::{ phase: Focus, running: false, deadline: Some(0.0), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 123.5)
}

///|
test "371: legacy/focus/0/true" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Focus, running: true, deadline: Some(0.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, ["id"])
  let actual = result.unwrap()
  @debug.assert_eq(actual.phase, Focus)
  assert_eq(actual.running, true)
  assert_interaction_number(actual.deadline.unwrap(), 0.0)
  assert_true(actual.remaining is None)
  assert_interaction_number(actual.focus_minutes, 25.0)
  assert_interaction_number(actual.rest_minutes, 5.0)
  assert_eq(actual.id.unwrap(), "legacy-id")
  assert_eq(actual.speed.unwrap(), "express")
  assert_eq(actual.scene.unwrap(), "night")
  assert_interaction_number(actual.started_at.unwrap(), 0.0)
  assert_true(actual.arrived_at is None)
}

///|
test "372: remaining/focus/0/true" {
  let actual = journey_remaining(Journey::{ phase: Focus, running: true, deadline: Some(0.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 0.0)
}

///|
test "373: legacy/focus/0/false" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Focus, running: false, deadline: Some(-0.0), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, ["id"])
  let actual = result.unwrap()
  @debug.assert_eq(actual.phase, Focus)
  assert_eq(actual.running, false)
  assert_interaction_number(actual.deadline.unwrap(), -0.0)
  assert_interaction_number(actual.remaining.unwrap(), 123.5)
  assert_interaction_number(actual.focus_minutes, 25.0)
  assert_interaction_number(actual.rest_minutes, 5.0)
  assert_eq(actual.id.unwrap(), "legacy-id")
  assert_eq(actual.speed.unwrap(), "express")
  assert_eq(actual.scene.unwrap(), "night")
  assert_interaction_number(actual.started_at.unwrap(), 0.0)
  assert_true(actual.arrived_at is None)
}

///|
test "374: remaining/focus/0/false" {
  let actual = journey_remaining(Journey::{ phase: Focus, running: false, deadline: Some(-0.0), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 123.5)
}

///|
test "375: legacy/focus/0/true" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Focus, running: true, deadline: Some(-0.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, ["id"])
  let actual = result.unwrap()
  @debug.assert_eq(actual.phase, Focus)
  assert_eq(actual.running, true)
  assert_interaction_number(actual.deadline.unwrap(), -0.0)
  assert_true(actual.remaining is None)
  assert_interaction_number(actual.focus_minutes, 25.0)
  assert_interaction_number(actual.rest_minutes, 5.0)
  assert_eq(actual.id.unwrap(), "legacy-id")
  assert_eq(actual.speed.unwrap(), "express")
  assert_eq(actual.scene.unwrap(), "night")
  assert_interaction_number(actual.started_at.unwrap(), 0.0)
  assert_true(actual.arrived_at is None)
}

///|
test "376: remaining/focus/0/true" {
  let actual = journey_remaining(Journey::{ phase: Focus, running: true, deadline: Some(-0.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 0.0)
}

///|
test "377: legacy/focus/123.5/false" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Focus, running: false, deadline: Some(123.5), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, ["id"])
  let actual = result.unwrap()
  @debug.assert_eq(actual.phase, Focus)
  assert_eq(actual.running, false)
  assert_interaction_number(actual.deadline.unwrap(), 123.5)
  assert_interaction_number(actual.remaining.unwrap(), 123.5)
  assert_interaction_number(actual.focus_minutes, 25.0)
  assert_interaction_number(actual.rest_minutes, 5.0)
  assert_eq(actual.id.unwrap(), "legacy-id")
  assert_eq(actual.speed.unwrap(), "express")
  assert_eq(actual.scene.unwrap(), "night")
  assert_interaction_number(actual.started_at.unwrap(), 0.0)
  assert_true(actual.arrived_at is None)
}

///|
test "378: remaining/focus/123.5/false" {
  let actual = journey_remaining(Journey::{ phase: Focus, running: false, deadline: Some(123.5), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 123.5)
}

///|
test "379: legacy/focus/123.5/true" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Focus, running: true, deadline: Some(123.5), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, ["id"])
  let actual = result.unwrap()
  @debug.assert_eq(actual.phase, Focus)
  assert_eq(actual.running, true)
  assert_interaction_number(actual.deadline.unwrap(), 123.5)
  assert_true(actual.remaining is None)
  assert_interaction_number(actual.focus_minutes, 25.0)
  assert_interaction_number(actual.rest_minutes, 5.0)
  assert_eq(actual.id.unwrap(), "legacy-id")
  assert_eq(actual.speed.unwrap(), "express")
  assert_eq(actual.scene.unwrap(), "night")
  assert_interaction_number(actual.started_at.unwrap(), 0.0)
  assert_true(actual.arrived_at is None)
}

///|
test "380: remaining/focus/123.5/true" {
  let actual = journey_remaining(Journey::{ phase: Focus, running: true, deadline: Some(123.5), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 0.0)
}

///|
test "381: legacy/focus/1800000060000/false" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Focus, running: false, deadline: Some(1800000060000.0), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, ["id"])
  let actual = result.unwrap()
  @debug.assert_eq(actual.phase, Focus)
  assert_eq(actual.running, false)
  assert_interaction_number(actual.deadline.unwrap(), 1800000060000.0)
  assert_interaction_number(actual.remaining.unwrap(), 123.5)
  assert_interaction_number(actual.focus_minutes, 25.0)
  assert_interaction_number(actual.rest_minutes, 5.0)
  assert_eq(actual.id.unwrap(), "legacy-id")
  assert_eq(actual.speed.unwrap(), "express")
  assert_eq(actual.scene.unwrap(), "night")
  assert_interaction_number(actual.started_at.unwrap(), 1799998560000.0)
  assert_true(actual.arrived_at is None)
}

///|
test "382: remaining/focus/1800000060000/false" {
  let actual = journey_remaining(Journey::{ phase: Focus, running: false, deadline: Some(1800000060000.0), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 123.5)
}

///|
test "383: legacy/focus/1800000060000/true" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Focus, running: true, deadline: Some(1800000060000.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, ["id"])
  let actual = result.unwrap()
  @debug.assert_eq(actual.phase, Focus)
  assert_eq(actual.running, true)
  assert_interaction_number(actual.deadline.unwrap(), 1800000060000.0)
  assert_true(actual.remaining is None)
  assert_interaction_number(actual.focus_minutes, 25.0)
  assert_interaction_number(actual.rest_minutes, 5.0)
  assert_eq(actual.id.unwrap(), "legacy-id")
  assert_eq(actual.speed.unwrap(), "express")
  assert_eq(actual.scene.unwrap(), "night")
  assert_interaction_number(actual.started_at.unwrap(), 1799998560000.0)
  assert_true(actual.arrived_at is None)
}

///|
test "384: remaining/focus/1800000060000/true" {
  let actual = journey_remaining(Journey::{ phase: Focus, running: true, deadline: Some(1800000060000.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 59877.0)
}

///|
test "385: legacy/rest/null/false" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Rest, running: false, deadline: None, remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, ["id", "now"])
  let actual = result.unwrap()
  @debug.assert_eq(actual.phase, Rest)
  assert_eq(actual.running, false)
  assert_true(actual.deadline is None)
  assert_interaction_number(actual.remaining.unwrap(), 123.5)
  assert_interaction_number(actual.focus_minutes, 25.0)
  assert_interaction_number(actual.rest_minutes, 5.0)
  assert_eq(actual.id.unwrap(), "legacy-id")
  assert_eq(actual.speed.unwrap(), "express")
  assert_eq(actual.scene.unwrap(), "night")
  assert_interaction_number(actual.started_at.unwrap(), 1799998500123.0)
  assert_true(actual.arrived_at is None)
}

///|
test "386: remaining/rest/null/false" {
  let actual = journey_remaining(Journey::{ phase: Rest, running: false, deadline: None, remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 123.5)
}

///|
test "387: legacy/rest/null/true" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Rest, running: true, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, ["id", "now"])
  let actual = result.unwrap()
  @debug.assert_eq(actual.phase, Rest)
  assert_eq(actual.running, true)
  assert_true(actual.deadline is None)
  assert_true(actual.remaining is None)
  assert_interaction_number(actual.focus_minutes, 25.0)
  assert_interaction_number(actual.rest_minutes, 5.0)
  assert_eq(actual.id.unwrap(), "legacy-id")
  assert_eq(actual.speed.unwrap(), "express")
  assert_eq(actual.scene.unwrap(), "night")
  assert_interaction_number(actual.started_at.unwrap(), 1799998500123.0)
  assert_true(actual.arrived_at is None)
}

///|
test "388: remaining/rest/null/true" {
  let actual = journey_remaining(Journey::{ phase: Rest, running: true, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_true(actual is None)
}

///|
test "389: legacy/rest/0/false" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Rest, running: false, deadline: Some(0.0), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, ["id"])
  let actual = result.unwrap()
  @debug.assert_eq(actual.phase, Rest)
  assert_eq(actual.running, false)
  assert_interaction_number(actual.deadline.unwrap(), 0.0)
  assert_interaction_number(actual.remaining.unwrap(), 123.5)
  assert_interaction_number(actual.focus_minutes, 25.0)
  assert_interaction_number(actual.rest_minutes, 5.0)
  assert_eq(actual.id.unwrap(), "legacy-id")
  assert_eq(actual.speed.unwrap(), "express")
  assert_eq(actual.scene.unwrap(), "night")
  assert_interaction_number(actual.started_at.unwrap(), 0.0)
  assert_interaction_number(actual.arrived_at.unwrap(), -300000.0)
}

///|
test "390: remaining/rest/0/false" {
  let actual = journey_remaining(Journey::{ phase: Rest, running: false, deadline: Some(0.0), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 123.5)
}

///|
test "391: legacy/rest/0/true" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Rest, running: true, deadline: Some(0.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, ["id"])
  let actual = result.unwrap()
  @debug.assert_eq(actual.phase, Rest)
  assert_eq(actual.running, true)
  assert_interaction_number(actual.deadline.unwrap(), 0.0)
  assert_true(actual.remaining is None)
  assert_interaction_number(actual.focus_minutes, 25.0)
  assert_interaction_number(actual.rest_minutes, 5.0)
  assert_eq(actual.id.unwrap(), "legacy-id")
  assert_eq(actual.speed.unwrap(), "express")
  assert_eq(actual.scene.unwrap(), "night")
  assert_interaction_number(actual.started_at.unwrap(), 0.0)
  assert_interaction_number(actual.arrived_at.unwrap(), -300000.0)
}

///|
test "392: remaining/rest/0/true" {
  let actual = journey_remaining(Journey::{ phase: Rest, running: true, deadline: Some(0.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 0.0)
}

///|
test "393: legacy/rest/0/false" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Rest, running: false, deadline: Some(-0.0), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, ["id"])
  let actual = result.unwrap()
  @debug.assert_eq(actual.phase, Rest)
  assert_eq(actual.running, false)
  assert_interaction_number(actual.deadline.unwrap(), -0.0)
  assert_interaction_number(actual.remaining.unwrap(), 123.5)
  assert_interaction_number(actual.focus_minutes, 25.0)
  assert_interaction_number(actual.rest_minutes, 5.0)
  assert_eq(actual.id.unwrap(), "legacy-id")
  assert_eq(actual.speed.unwrap(), "express")
  assert_eq(actual.scene.unwrap(), "night")
  assert_interaction_number(actual.started_at.unwrap(), 0.0)
  assert_interaction_number(actual.arrived_at.unwrap(), -300000.0)
}

///|
test "394: remaining/rest/0/false" {
  let actual = journey_remaining(Journey::{ phase: Rest, running: false, deadline: Some(-0.0), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 123.5)
}

///|
test "395: legacy/rest/0/true" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Rest, running: true, deadline: Some(-0.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, ["id"])
  let actual = result.unwrap()
  @debug.assert_eq(actual.phase, Rest)
  assert_eq(actual.running, true)
  assert_interaction_number(actual.deadline.unwrap(), -0.0)
  assert_true(actual.remaining is None)
  assert_interaction_number(actual.focus_minutes, 25.0)
  assert_interaction_number(actual.rest_minutes, 5.0)
  assert_eq(actual.id.unwrap(), "legacy-id")
  assert_eq(actual.speed.unwrap(), "express")
  assert_eq(actual.scene.unwrap(), "night")
  assert_interaction_number(actual.started_at.unwrap(), 0.0)
  assert_interaction_number(actual.arrived_at.unwrap(), -300000.0)
}

///|
test "396: remaining/rest/0/true" {
  let actual = journey_remaining(Journey::{ phase: Rest, running: true, deadline: Some(-0.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 0.0)
}

///|
test "397: legacy/rest/123.5/false" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Rest, running: false, deadline: Some(123.5), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, ["id"])
  let actual = result.unwrap()
  @debug.assert_eq(actual.phase, Rest)
  assert_eq(actual.running, false)
  assert_interaction_number(actual.deadline.unwrap(), 123.5)
  assert_interaction_number(actual.remaining.unwrap(), 123.5)
  assert_interaction_number(actual.focus_minutes, 25.0)
  assert_interaction_number(actual.rest_minutes, 5.0)
  assert_eq(actual.id.unwrap(), "legacy-id")
  assert_eq(actual.speed.unwrap(), "express")
  assert_eq(actual.scene.unwrap(), "night")
  assert_interaction_number(actual.started_at.unwrap(), 0.0)
  assert_interaction_number(actual.arrived_at.unwrap(), -299876.5)
}

///|
test "398: remaining/rest/123.5/false" {
  let actual = journey_remaining(Journey::{ phase: Rest, running: false, deadline: Some(123.5), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 123.5)
}

///|
test "399: legacy/rest/123.5/true" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Rest, running: true, deadline: Some(123.5), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, ["id"])
  let actual = result.unwrap()
  @debug.assert_eq(actual.phase, Rest)
  assert_eq(actual.running, true)
  assert_interaction_number(actual.deadline.unwrap(), 123.5)
  assert_true(actual.remaining is None)
  assert_interaction_number(actual.focus_minutes, 25.0)
  assert_interaction_number(actual.rest_minutes, 5.0)
  assert_eq(actual.id.unwrap(), "legacy-id")
  assert_eq(actual.speed.unwrap(), "express")
  assert_eq(actual.scene.unwrap(), "night")
  assert_interaction_number(actual.started_at.unwrap(), 0.0)
  assert_interaction_number(actual.arrived_at.unwrap(), -299876.5)
}

///|
test "400: remaining/rest/123.5/true" {
  let actual = journey_remaining(Journey::{ phase: Rest, running: true, deadline: Some(123.5), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 0.0)
}

///|
test "401: legacy/rest/1800000060000/false" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Rest, running: false, deadline: Some(1800000060000.0), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, ["id"])
  let actual = result.unwrap()
  @debug.assert_eq(actual.phase, Rest)
  assert_eq(actual.running, false)
  assert_interaction_number(actual.deadline.unwrap(), 1800000060000.0)
  assert_interaction_number(actual.remaining.unwrap(), 123.5)
  assert_interaction_number(actual.focus_minutes, 25.0)
  assert_interaction_number(actual.rest_minutes, 5.0)
  assert_eq(actual.id.unwrap(), "legacy-id")
  assert_eq(actual.speed.unwrap(), "express")
  assert_eq(actual.scene.unwrap(), "night")
  assert_interaction_number(actual.started_at.unwrap(), 1799998260000.0)
  assert_interaction_number(actual.arrived_at.unwrap(), 1799999760000.0)
}

///|
test "402: remaining/rest/1800000060000/false" {
  let actual = journey_remaining(Journey::{ phase: Rest, running: false, deadline: Some(1800000060000.0), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 123.5)
}

///|
test "403: legacy/rest/1800000060000/true" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Rest, running: true, deadline: Some(1800000060000.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, ["id"])
  let actual = result.unwrap()
  @debug.assert_eq(actual.phase, Rest)
  assert_eq(actual.running, true)
  assert_interaction_number(actual.deadline.unwrap(), 1800000060000.0)
  assert_true(actual.remaining is None)
  assert_interaction_number(actual.focus_minutes, 25.0)
  assert_interaction_number(actual.rest_minutes, 5.0)
  assert_eq(actual.id.unwrap(), "legacy-id")
  assert_eq(actual.speed.unwrap(), "express")
  assert_eq(actual.scene.unwrap(), "night")
  assert_interaction_number(actual.started_at.unwrap(), 1799998260000.0)
  assert_interaction_number(actual.arrived_at.unwrap(), 1799999760000.0)
}

///|
test "404: remaining/rest/1800000060000/true" {
  let actual = journey_remaining(Journey::{ phase: Rest, running: true, deadline: Some(1800000060000.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 59877.0)
}

///|
test "405: legacy/finished/null/false" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Finished, running: false, deadline: None, remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, [])
  assert_true(result is None)
}

///|
test "406: remaining/finished/null/false" {
  let actual = journey_remaining(Journey::{ phase: Finished, running: false, deadline: None, remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 123.5)
}

///|
test "407: legacy/finished/null/true" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Finished, running: true, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, [])
  assert_true(result is None)
}

///|
test "408: remaining/finished/null/true" {
  let actual = journey_remaining(Journey::{ phase: Finished, running: true, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_true(actual is None)
}

///|
test "409: legacy/finished/0/false" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Finished, running: false, deadline: Some(0.0), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, [])
  assert_true(result is None)
}

///|
test "410: remaining/finished/0/false" {
  let actual = journey_remaining(Journey::{ phase: Finished, running: false, deadline: Some(0.0), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 123.5)
}

///|
test "411: legacy/finished/0/true" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Finished, running: true, deadline: Some(0.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, [])
  assert_true(result is None)
}

///|
test "412: remaining/finished/0/true" {
  let actual = journey_remaining(Journey::{ phase: Finished, running: true, deadline: Some(0.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 0.0)
}

///|
test "413: legacy/finished/0/false" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Finished, running: false, deadline: Some(-0.0), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, [])
  assert_true(result is None)
}

///|
test "414: remaining/finished/0/false" {
  let actual = journey_remaining(Journey::{ phase: Finished, running: false, deadline: Some(-0.0), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 123.5)
}

///|
test "415: legacy/finished/0/true" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Finished, running: true, deadline: Some(-0.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, [])
  assert_true(result is None)
}

///|
test "416: remaining/finished/0/true" {
  let actual = journey_remaining(Journey::{ phase: Finished, running: true, deadline: Some(-0.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 0.0)
}

///|
test "417: legacy/finished/123.5/false" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Finished, running: false, deadline: Some(123.5), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, [])
  assert_true(result is None)
}

///|
test "418: remaining/finished/123.5/false" {
  let actual = journey_remaining(Journey::{ phase: Finished, running: false, deadline: Some(123.5), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 123.5)
}

///|
test "419: legacy/finished/123.5/true" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Finished, running: true, deadline: Some(123.5), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, [])
  assert_true(result is None)
}

///|
test "420: remaining/finished/123.5/true" {
  let actual = journey_remaining(Journey::{ phase: Finished, running: true, deadline: Some(123.5), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 0.0)
}

///|
test "421: legacy/finished/1800000060000/false" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Finished, running: false, deadline: Some(1800000060000.0), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, [])
  assert_true(result is None)
}

///|
test "422: remaining/finished/1800000060000/false" {
  let actual = journey_remaining(Journey::{ phase: Finished, running: false, deadline: Some(1800000060000.0), remaining: Some(123.5), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 123.5)
}

///|
test "423: legacy/finished/1800000060000/true" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Finished, running: true, deadline: Some(1800000060000.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "express", "night", () => { calls.push("id"); "legacy-id" }, () => { calls.push("now"); 1800000000123.0 })
  @debug.assert_eq(calls, [])
  assert_true(result is None)
}

///|
test "424: remaining/finished/1800000060000/true" {
  let actual = journey_remaining(Journey::{ phase: Finished, running: true, deadline: Some(1800000060000.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 1800000000123.0)
  assert_interaction_number(actual.unwrap(), 59877.0)
}

///|
test "425: legacy/metadata/425" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Rest, running: false, deadline: Some(5000.0), remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "local", "mist", () => { calls.push("id"); "new-id" }, () => { calls.push("now"); 10000.0 })
  @debug.assert_eq(calls, ["id"])
  let actual = result.unwrap()
  @debug.assert_eq(actual.phase, Rest)
  assert_eq(actual.running, false)
  assert_interaction_number(actual.deadline.unwrap(), 5000.0)
  assert_true(actual.remaining is None)
  assert_interaction_number(actual.focus_minutes, 0.0)
  assert_interaction_number(actual.rest_minutes, 5.0)
  assert_eq(actual.id.unwrap(), "new-id")
  assert_eq(actual.speed.unwrap(), "local")
  assert_eq(actual.scene.unwrap(), "mist")
  assert_interaction_number(actual.started_at.unwrap(), 0.0)
  assert_interaction_number(actual.arrived_at.unwrap(), -295000.0)
}

///|
test "426: legacy/metadata/426" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Rest, running: false, deadline: Some(5000.0), remaining: None, focus_minutes: 25.0, rest_minutes: 0.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "local", "mist", () => { calls.push("id"); "new-id" }, () => { calls.push("now"); 10000.0 })
  @debug.assert_eq(calls, ["id"])
  let actual = result.unwrap()
  @debug.assert_eq(actual.phase, Rest)
  assert_eq(actual.running, false)
  assert_interaction_number(actual.deadline.unwrap(), 5000.0)
  assert_true(actual.remaining is None)
  assert_interaction_number(actual.focus_minutes, 25.0)
  assert_interaction_number(actual.rest_minutes, 0.0)
  assert_eq(actual.id.unwrap(), "new-id")
  assert_eq(actual.speed.unwrap(), "local")
  assert_eq(actual.scene.unwrap(), "mist")
  assert_interaction_number(actual.started_at.unwrap(), 0.0)
  assert_interaction_number(actual.arrived_at.unwrap(), 5000.0)
}

///|
test "427: legacy/metadata/427" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Rest, running: false, deadline: Some(5000.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("old-id"), started_at: Some(123.0), arrived_at: Some(456.0), speed: Some("rapid"), scene: Some("dawn") }, "local", "mist", () => { calls.push("id"); "new-id" }, () => { calls.push("now"); 10000.0 })
  @debug.assert_eq(calls, ["id"])
  let actual = result.unwrap()
  @debug.assert_eq(actual.phase, Rest)
  assert_eq(actual.running, false)
  assert_interaction_number(actual.deadline.unwrap(), 5000.0)
  assert_true(actual.remaining is None)
  assert_interaction_number(actual.focus_minutes, 25.0)
  assert_interaction_number(actual.rest_minutes, 5.0)
  assert_eq(actual.id.unwrap(), "new-id")
  assert_interaction_number(actual.started_at.unwrap(), 0.0)
  assert_interaction_number(actual.arrived_at.unwrap(), -295000.0)
  assert_eq(actual.speed.unwrap(), "local")
  assert_eq(actual.scene.unwrap(), "mist")
}

///|
test "428: legacy/metadata/428" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Rest, running: false, deadline: Some(5000.0), remaining: None, focus_minutes: (0.0 / 0.0), rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "local", "mist", () => { calls.push("id"); "new-id" }, () => { calls.push("now"); 10000.0 })
  @debug.assert_eq(calls, ["id"])
  let actual = result.unwrap()
  @debug.assert_eq(actual.phase, Rest)
  assert_eq(actual.running, false)
  assert_interaction_number(actual.deadline.unwrap(), 5000.0)
  assert_true(actual.remaining is None)
  assert_interaction_number(actual.focus_minutes, (0.0 / 0.0))
  assert_interaction_number(actual.rest_minutes, 5.0)
  assert_eq(actual.id.unwrap(), "new-id")
  assert_eq(actual.speed.unwrap(), "local")
  assert_eq(actual.scene.unwrap(), "mist")
  assert_interaction_number(actual.started_at.unwrap(), (0.0 / 0.0))
  assert_interaction_number(actual.arrived_at.unwrap(), -295000.0)
}

///|
test "429: legacy/metadata/429" {
  let calls : Array[String] = []
  let result = migrate_legacy_journey(Journey::{ phase: Rest, running: false, deadline: Some((1.0 / 0.0)), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, "local", "mist", () => { calls.push("id"); "new-id" }, () => { calls.push("now"); 10000.0 })
  @debug.assert_eq(calls, ["id"])
  let actual = result.unwrap()
  @debug.assert_eq(actual.phase, Rest)
  assert_eq(actual.running, false)
  assert_interaction_number(actual.deadline.unwrap(), (1.0 / 0.0))
  assert_true(actual.remaining is None)
  assert_interaction_number(actual.focus_minutes, 25.0)
  assert_interaction_number(actual.rest_minutes, 5.0)
  assert_eq(actual.id.unwrap(), "new-id")
  assert_eq(actual.speed.unwrap(), "local")
  assert_eq(actual.scene.unwrap(), "mist")
  assert_interaction_number(actual.started_at.unwrap(), (1.0 / 0.0))
  assert_interaction_number(actual.arrived_at.unwrap(), (1.0 / 0.0))
}

///|
test "432: remaining/paused/null" {
  let actual = journey_remaining(Journey::{ phase: Idle, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 0.0)
  assert_true(actual is None)
}

///|
test "433: remaining/paused/0" {
  let actual = journey_remaining(Journey::{ phase: Idle, running: false, deadline: None, remaining: Some(0.0), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 0.0)
  assert_interaction_number(actual.unwrap(), 0.0)
}

///|
test "434: remaining/paused/0" {
  let actual = journey_remaining(Journey::{ phase: Idle, running: false, deadline: None, remaining: Some(-0.0), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 0.0)
  assert_interaction_number(actual.unwrap(), -0.0)
}

///|
test "435: remaining/paused/NaN" {
  let actual = journey_remaining(Journey::{ phase: Idle, running: false, deadline: None, remaining: Some((0.0 / 0.0)), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 0.0)
  assert_interaction_number(actual.unwrap(), (0.0 / 0.0))
}

///|
test "436: remaining/paused/Infinity" {
  let actual = journey_remaining(Journey::{ phase: Idle, running: false, deadline: None, remaining: Some((1.0 / 0.0)), focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }, 0.0)
  assert_interaction_number(actual.unwrap(), (1.0 / 0.0))
}
