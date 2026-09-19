///|
fn read_field(value : @js.Any) -> @domain.Field {
  if @js.is_undefined(value) {
    return @domain.Missing
  }
  if @js.is_null(value) {
    return @domain.Null
  }
  match @js.typeof_(value) {
    "boolean" => @domain.Flag(value.cast())
    "number" => @domain.Numeric(value.cast())
    "string" => @domain.Text(value.cast())
    _ => @domain.Other
  }
}

///|
fn read_record(value : @js.Any, names : Array[String]) -> @domain.Record {
  let is_object = !@js.is_null(value) && @js.typeof_(value) == "object"
  let fields : Map[String, @domain.Field] = Map([])
  if is_object {
    for name in names {
      fields[name] = read_field(value._get(name))
    }
  }
  { is_object, fields, }
}

///|
let journey_fields : Array[String] = [
  "phase", "running", "deadline", "remaining", "focusMinutes", "restMinutes", "id",
  "startedAt", "arrivedAt", "speed", "scene",
]

///|
let ticket_fields : Array[String] = [
  "id", "kind", "startedAt", "arrivedAt", "speed", "scene", "title", "note",
]

///|
pub fn is_preferences(value : @js.Any) -> Bool {
  @domain.valid_preferences(
    read_record(value, [
      "focusMinutes", "restMinutes", "speed", "scene", "showTime", "trainVolume",
      "rainVolume", "windVolume",
    ]),
  )
}

///|
pub fn is_journey(value : @js.Any) -> Bool {
  @domain.valid_journey(read_record(value, journey_fields))
}

///|
pub fn is_ticket(value : @js.Any) -> Bool {
  @domain.valid_ticket(read_record(value, ticket_fields))
}

///|
pub fn is_travel_state(value : @js.Any) -> Bool {
  let object = !@js.is_null(value) && @js.typeof_(value) == "object"
  let j = if object { value._get("journey") } else { @js.undefined() }
  let items = if object { value._get("tickets") } else { @js.undefined() }
  let tickets = if @js.is_array(items) {
    let array : Array[@js.Any] = items.cast()
    Some(array.map(t => read_record(t, ticket_fields)))
  } else {
    None
  }
  let pending = if object {
    value._get("pendingArrivalId")
  } else {
    @js.undefined()
  }
  @domain.valid_travel(
    object,
    read_record(j, journey_fields),
    tickets,
    read_field(pending),
  )
}

///|
pub fn is_view(value : @js.Any) -> Bool {
  @domain.valid_view(read_field(value))
}
