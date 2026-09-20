///|
#external
pub type Preferences

///|
#external
priv type SavedTravel

///|
extern "js" fn location_search() -> String =
  #| () => window.location.search

///|
let demo : Bool = @bridge.is_demo_search(location_search())

///|
fn demo_mode() -> Bool {
  demo
}

///|
fn storage_key(key : String) -> String {
  @domain.profile_storage_key(key, demo_mode())
}

///|
fn read_preferences() -> Preferences {
  let defaults = @bridge.default_preferences()
  @bridge.read_storage(
    storage_key("syasou.preferences.v1"),
    defaults,
    @bridge.is_preferences,
  ).cast()
}

///|
fn[T] Preferences::with_value(
  self : Preferences,
  key : String,
  value : T,
) -> Preferences {
  let copy = @js.object_assign(@js.new_object(), @js.any(self))
  copy._set(key, @js.any(value))
  copy.cast()
}

///|
fn save_preferences(preferences : Preferences) -> Unit {
  @bridge.write_storage(
    storage_key("syasou.preferences.v1"),
    @js.any(preferences),
  )
  |> ignore
}

///|
fn load_travel(preferences : Preferences, note : String) -> SavedTravel {
  let stored = @bridge.read_storage(
    storage_key("syasou.travel.v2"),
    @js.null(),
    @bridge.is_travel_state,
  )
  if !@js.is_null(stored) {
    return @bridge.restore_travel(stored, now(), note).cast()
  }
  let empty_journey = @bridge.empty_journey()
  let initial = @js.new_object()
  initial._set("pendingArrivalId", @js.null())
  if demo_mode() {
    initial._set("journey", empty_journey)
    initial._set("tickets", @bridge.sample_tickets(now()))
    return initial.cast()
  }
  let legacy = @bridge.read_storage(
    storage_key("syasou.journey.v1"),
    empty_journey,
    @bridge.is_journey,
  )
  let journey = @bridge.migrate_legacy_journey(
    legacy,
    @js.any(preferences),
    uuid,
    now,
  )
  initial._set("journey", journey)
  initial._set("tickets", @js.any(([] : Array[@js.Any])))
  @bridge.restore_travel(initial, now(), note).cast()
}

///|
fn SavedTravel::journey(self : SavedTravel) -> @domain.Journey {
  @bridge.read_journey(@js.any(self)._get("journey"))
}

///|
fn SavedTravel::tickets(self : SavedTravel) -> Array[@domain.Ticket] {
  let items : Array[@js.Any] = @js.any(self)._get("tickets").cast()
  items.map(@bridge.read_ticket)
}

///|
fn SavedTravel::pending(self : SavedTravel) -> String? {
  let value = @js.any(self)._get("pendingArrivalId")
  if @js.is_nullish(value) {
    None
  } else {
    Some(value.cast())
  }
}

///|
fn save_travel(travel : SavedTravel) -> Bool {
  @bridge.write_storage(storage_key("syasou.travel.v2"), @js.any(travel))
}

///|
#external
priv type TravelEvent

///|
fn travel_event(
  kind : String,
  attrs : Array[(String, PropertyValue)],
) -> TravelEvent {
  properties([p("type", kind), ..attrs]).cast()
}

///|
fn journey_event(
  kind : String,
  time : Double,
  note : String,
  attrs? : Array[(String, PropertyValue)] = [],
) -> TravelEvent {
  travel_event("journey", [
    p("note", note),
    p("action", properties([p("type", kind), p("now", time), ..attrs])),
  ])
}

///|
fn reduce_travel(travel : SavedTravel, event : TravelEvent) -> SavedTravel {
  @bridge.travel_reducer(@js.any(travel), @js.any(event)).cast()
}

///|
fn use_travel_reducer(
  initialize : () -> SavedTravel,
) -> (SavedTravel, (TravelEvent) -> Unit) {
  let (travel, set_travel) = @view.use_state_lazy(initialize)
  let dispatch = @view.use_callback(
    (event : TravelEvent) => {
      @view.update(set_travel, current => reduce_travel(current, event))
    },
    [],
  )
  (travel, dispatch)
}

///|
fn edit_event(id : String, title : String?, note : String?) -> TravelEvent {
  let changes = @js.new_object()
  if title is Some(value) {
    changes._set("title", @js.any(value))
  }
  if note is Some(value) {
    changes._set("note", @js.any(value))
  }
  travel_event("edit-ticket", [p("id", id), p("changes", changes)])
}

///|
fn read_note() -> String {
  @bridge.read_storage(
    storage_key("syasou.note.v1"),
    @js.any(""),
    @bridge.is_note,
  ).cast()
}

///|
fn save_note(note : String) -> Unit {
  @bridge.write_storage(storage_key("syasou.note.v1"), @js.any(note)) |> ignore
}

///|
fn read_guide_done() -> Bool {
  @bridge.read_storage(
    storage_key("syasou.onboarding.v1"),
    @js.any(false),
    @bridge.is_stored_boolean,
  ).cast()
}

///|
fn save_guide_done() -> Unit {
  @bridge.write_storage(storage_key("syasou.onboarding.v1"), @js.any(true))
  |> ignore
}

///|
fn read_view() -> String {
  @bridge.read_storage(
    storage_key("syasou.view.v1"),
    @js.any("forest"),
    @bridge.is_view,
  ).cast()
}

///|
fn save_view(view : String) -> Unit {
  @bridge.write_storage(storage_key("syasou.view.v1"), @js.any(view)) |> ignore
}

///|
fn has_entered() -> Bool {
  @js.try_sync(fn() {
    @js.any(
      @storage.sessionStorage().getItem(storage_key("syasou.entered.v1")) ==
      Some("1"),
    )
  }).cast() catch {
    _ => false
  }
}

///|
fn save_entered() -> Unit {
  try
    @js.try_sync(fn() {
      @storage.sessionStorage().setItem(storage_key("syasou.entered.v1"), "1")
      @js.undefined()
    })
    |> ignore
  catch {
    _ => ()
  }
}

///|
fn classes(base : String, flags? : Array[(String, Bool)] = []) -> String {
  let items = if base == "" { [] } else { [base] }
  for (name, enabled) in flags {
    if enabled {
      items.push(name)
    }
  }
  items.join(" ")
}

///|
fn Preferences::focusMinutes(self : Preferences) -> Double {
  @js.any(self)._get("focusMinutes").cast()
}

///|
fn Preferences::restMinutes(self : Preferences) -> Double {
  @js.any(self)._get("restMinutes").cast()
}

///|
fn Preferences::speed(self : Preferences) -> String {
  @js.any(self)._get("speed").cast()
}

///|
fn Preferences::scene(self : Preferences) -> String {
  @js.any(self)._get("scene").cast()
}

///|
fn Preferences::showTime(self : Preferences) -> Bool {
  @js.any(self)._get("showTime").cast()
}

///|
fn Preferences::trainVolume(self : Preferences) -> Double {
  @js.any(self)._get("trainVolume").cast()
}

///|
fn Preferences::rainVolume(self : Preferences) -> Double {
  @js.any(self)._get("rainVolume").cast()
}

///|
fn Preferences::windVolume(self : Preferences) -> Double {
  @js.any(self)._get("windVolume").cast()
}
