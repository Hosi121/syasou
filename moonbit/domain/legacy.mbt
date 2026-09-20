///|
pub fn migrate_legacy_journey(
  legacy : Journey,
  speed : String,
  scene : String,
  create_id : () -> String,
  now : () -> Double,
) -> Journey? {
  if legacy.phase != Focus && legacy.phase != Rest {
    return None
  }
  let arrival = if legacy.phase == Rest {
    legacy.deadline.map(d => d - legacy.rest_minutes * 60000.0)
  } else {
    None
  }
  let id = create_id()
  let anchor = match arrival {
    Some(value) => value
    None =>
      match legacy.deadline {
        Some(value) => value
        None => now()
      }
  }
  Some({
    ..legacy,
    id: Some(id),
    speed: Some(speed),
    scene: Some(scene),
    started_at: Some(number_max(0.0, anchor - legacy.focus_minutes * 60000.0)),
    arrived_at: arrival,
  })
}

///|
pub fn journey_remaining(journey : Journey, now : Double) -> Double? {
  if journey.running && journey.deadline is Some(deadline) {
    Some(number_max(0.0, deadline - now))
  } else {
    journey.remaining
  }
}
