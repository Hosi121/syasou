///|
// Preserve ECMAScript Math.min/Math.max for NaN and signed zero. Keep this
// compatibility layer while the JS number API remains the public contract.
fn number_min(a : Double, b : Double) -> Double {
  if a.is_nan() {
    a
  } else if b.is_nan() {
    b
  } else if a == 0.0 && b == 0.0 {
    if 1.0 / a < 0.0 || 1.0 / b < 0.0 {
      -0.0
    } else {
      0.0
    }
  } else {
    a.min(b)
  }
}

///|
fn number_max(a : Double, b : Double) -> Double {
  if a.is_nan() {
    a
  } else if b.is_nan() {
    b
  } else if a == 0.0 && b == 0.0 {
    if 1.0 / a > 0.0 || 1.0 / b > 0.0 {
      0.0
    } else {
      -0.0
    }
  } else {
    a.max(b)
  }
}
