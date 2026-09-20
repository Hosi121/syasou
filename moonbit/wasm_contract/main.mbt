///|
pub fn advance_journey(p0 : @js.Any, p1 : Double) -> @js.Any {
  @bridge.advance_journey(p0, p1)
}

///|
pub fn begin_ticket_grip(
  p0 : Double,
  p1 : Double,
  p2 : Double,
  p3 : Double,
  p4 : Double,
  p5 : Double,
  p6 : Bool,
) -> @js.Any {
  @bridge.begin_ticket_grip(p0, p1, p2, p3, p4, p5, p6)
}

///|
pub fn create_sound() -> @js.Any {
  @bridge.create_sound()
}

///|
pub fn create_window_renderer(p0 : @js.Any, p1 : @js.Any) -> @js.Any {
  @bridge.create_window_renderer(p0, p1)
}

///|
pub fn default_preferences() -> @js.Any {
  @bridge.default_preferences()
}

///|
pub fn disable_sound(p0 : @js.Any) -> @js.Promise[Unit] {
  @bridge.disable_sound(p0)
}

///|
pub fn dispose_sound(p0 : @js.Any) -> Unit {
  @bridge.dispose_sound(p0)
}

///|
pub fn drag_ticket(p0 : @js.Any, p1 : Double, p2 : Double) -> @js.Any {
  @bridge.drag_ticket(p0, p1, p2)
}

///|
pub fn empty_journey() -> @js.Any {
  @bridge.empty_journey()
}

///|
pub fn enable_sound(p0 : @js.Any) -> @js.Promise[Unit] {
  @bridge.enable_sound(p0)
}

///|
pub fn format_time(p0 : Double) -> String {
  @bridge.format_time(p0)
}

///|
pub fn hover_ticket(
  p0 : Double,
  p1 : Double,
  p2 : Double,
  p3 : Double,
  p4 : Double,
  p5 : Double,
) -> @js.Any {
  @bridge.hover_ticket(p0, p1, p2, p3, p4, p5)
}

///|
pub fn is_demo_search(p0 : String) -> @js.Any {
  @js.any(@bridge.is_demo_search(p0))
}

///|
pub fn is_journey(p0 : @js.Any) -> @js.Any {
  @js.any(@bridge.is_journey(p0))
}

///|
pub fn is_note(p0 : @js.Any) -> @js.Any {
  @js.any(@bridge.is_note(p0))
}

///|
pub fn is_preferences(p0 : @js.Any) -> @js.Any {
  @js.any(@bridge.is_preferences(p0))
}

///|
pub fn is_stored_boolean(p0 : @js.Any) -> @js.Any {
  @js.any(@bridge.is_stored_boolean(p0))
}

///|
pub fn is_ticket(p0 : @js.Any) -> @js.Any {
  @js.any(@bridge.is_ticket(p0))
}

///|
pub fn is_travel_state(p0 : @js.Any) -> @js.Any {
  @js.any(@bridge.is_travel_state(p0))
}

///|
pub fn is_view(p0 : @js.Any) -> @js.Any {
  @js.any(@bridge.is_view(p0))
}

///|
pub fn journey_reducer(p0 : @js.Any, p1 : @js.Any) -> @js.Any {
  @bridge.journey_reducer(p0, p1)
}

///|
pub fn journey_remaining(p0 : @js.Any, p1 : Double) -> @js.Any {
  @bridge.journey_remaining(p0, p1)
}

///|
pub fn lift_ticket(p0 : @js.Any, p1 : Double) -> @js.Any {
  @bridge.lift_ticket(p0, p1)
}

///|
pub fn migrate_legacy_journey(
  p0 : @js.Any,
  p1 : @js.Any,
  p2 : @js.Any,
  p3 : @js.Any,
) -> @js.Any {
  @bridge.migrate_legacy_journey(p0, p1, @js.to_fn0(p2), @js.to_fn0(p3))
}

///|
pub fn profile_storage_key(p0 : String, p1 : Bool) -> String {
  @bridge.profile_storage_key(p0, p1)
}

///|
pub fn read_storage(p0 : String, p1 : @js.Any, p2 : @js.Any) -> @js.Any {
  @bridge.read_storage(p0, p1, @js.to_fn1(p2))
}

///|
pub fn release_ticket(p0 : @js.Any, p1 : Bool) -> @js.Any {
  @bridge.release_ticket(p0, p1)
}

///|
pub fn restore_travel(p0 : @js.Any, p1 : Double, p2 : String) -> @js.Any {
  @bridge.restore_travel(p0, p1, p2)
}

///|
pub fn sample_tickets(p0 : Double) -> @js.Any {
  @bridge.sample_tickets(p0)
}

///|
pub fn ticket_is_back(p0 : Double) -> @js.Any {
  @js.any(@bridge.ticket_is_back(p0))
}

///|
pub fn ticket_resting_angle(p0 : Double, p1 : Bool) -> Double {
  @bridge.ticket_resting_angle(p0, p1)
}

///|
pub fn ticket_serial(p0 : String) -> String {
  @bridge.ticket_serial(p0)
}

///|
pub fn ticket_shadow_width(p0 : Double) -> Double {
  @bridge.ticket_shadow_width(p0)
}

///|
pub fn travel_reducer(p0 : @js.Any, p1 : @js.Any) -> @js.Any {
  @bridge.travel_reducer(p0, p1)
}

///|
pub fn update_sound(p0 : @js.Any, p1 : @js.Any, p2 : Bool, p3 : Bool) -> Unit {
  @bridge.update_sound(p0, p1, p2, p3)
}

///|
pub fn views() -> @js.Any {
  @bridge.views()
}

///|
pub fn write_storage(p0 : String, p1 : @js.Any) -> @js.Any {
  @js.any(@bridge.write_storage(p0, p1))
}

///|
pub fn render_contract(name : String, props : @js.Any) -> String {
  @ui.render_contract(name, props)
}
