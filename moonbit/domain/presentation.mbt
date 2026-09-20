///|
pub fn format_time(milliseconds : Double) -> String {
  let rounded = @math.ceil(milliseconds / 1000.0)
  let total = if rounded.is_nan() { rounded } else { rounded.max(0.0) }
  let minutes = @math.floor(total / 60.0).to_string()
  let seconds = (total % 60.0).to_string()
  (if minutes.length() < 2 { "0" + minutes } else { minutes }) +
  ":" +
  (if seconds.length() < 2 { "0" + seconds } else { seconds })
}

///|
pub fn profile_storage_key(key : String, demo : Bool) -> String {
  if demo {
    key + ".demo"
  } else {
    key
  }
}

///|
pub let view_options : ReadOnlyArray[(String, String)] = [
  ("forest", "山あいの窓"),
  ("snow", "雪原の窓"),
  ("train", "遠くの列車"),
]
