///|
pub fn migrate_legacy_journey(
  legacy : @js.Any,
  preferences : @js.Any,
  create_id : () -> String,
  now : () -> Double,
) -> @js.Any {
  match
    @domain.migrate_legacy_journey(
      read_journey(legacy),
      preferences._get("speed").cast(),
      preferences._get("scene").cast(),
      create_id,
      now,
    ) {
    None => legacy
    Some(next) => {
      let out = @js.object_assign(@js.new_object(), legacy)
      out._set("id", undefined_or(next.id))
      out._set("speed", undefined_or(next.speed))
      out._set("scene", undefined_or(next.scene))
      out._set("startedAt", undefined_or(next.started_at))
      out._set("arrivedAt", undefined_or(next.arrived_at))
      out
    }
  }
}

///|
pub fn journey_remaining(journey : @js.Any, now : Double) -> @js.Any {
  nullable(@domain.journey_remaining(read_journey(journey), now))
}

///|
pub fn sample_tickets(now : Double) -> @js.Any {
  @js.any(@domain.sample_tickets(now).map(write_ticket))
}
