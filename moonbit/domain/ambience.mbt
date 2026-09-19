///|
pub(all) struct SoundMix {
  period : Double
  train : Double
  rain : Double
  wind : Double
  cabin : Double
}

///|
pub fn sound_mix(
  speed : String,
  train : Double,
  rain : Double,
  wind : Double,
  moving : Bool,
  open : Bool,
) -> SoundMix {
  {
    period: match speed {
      "rapid" => 1.4
      "express" => 1.05
      _ => 1.9
    },
    train: train / 100.0 * (if moving { 0.65 } else { 0.07 }),
    rain: rain / 100.0 * (if open { 0.32 } else { 0.16 }),
    wind: wind /
    100.0 *
    (if open { 0.55 } else { 0.12 }) *
    (if moving { 1.0 } else { 0.3 }),
    cabin: if open {
      2600.0
    } else {
      850.0
    },
  }
}

///|
pub fn noise_sample(previous : Double, random : Double) -> (Double, Double) {
  let white = random * 2.0 - 1.0
  let brown = (previous + 0.025 * white) / 1.025
  (brown, white * 0.35 + brown * 1.8)
}

///|
pub fn beat_step(period : Double, beat : Int) -> (Double, Double) {
  let strength = if beat % 2 == 0 { 0.32 } else { 0.22 }
  let spacing = [0.16, 0.34, 0.16, 0.34][beat % 4]
  (strength, period * spacing)
}

///|
pub(all) struct Landscape {
  scene : String
  speed : String
  moving : Bool
  travelling : Bool
}

///|
pub fn animation_delta(elapsed : Double, speed : String) -> Double {
  number_min(elapsed / 1000.0, 0.12) *
  (match speed {
    "rapid" => 1.2
    "express" => 2.1
    _ => 0.65
  })
}

///|
pub fn travel_delta(elapsed : Double) -> Double {
  number_min(elapsed / 1000.0, 0.12)
}

///|
pub fn scene_index(scene : String) -> Double {
  match scene {
    "dawn" => 1.0
    "night" => 2.0
    _ => 0.0
  }
}
