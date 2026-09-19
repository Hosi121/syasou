///|
pub(all) enum Field {
  Missing
  Null
  Flag(Bool)
  Numeric(Double)
  Text(String)
  Other
} derive(Eq, Debug)

///|
pub(all) struct Record {
  is_object : Bool
  fields : Map[String, Field]
}

///|
pub fn Record::get(self : Record, name : String) -> Field {
  self.fields.get(name).unwrap_or(Missing)
}

///|
fn is_number_in(value : Field, choices : Array[Double]) -> Bool {
  match value {
    Numeric(n) => choices.contains(n)
    _ => false
  }
}

///|
fn is_text_in(value : Field, choices : Array[String]) -> Bool {
  match value {
    Text(s) => choices.contains(s)
    _ => false
  }
}

///|
fn is_speed(value : Field) -> Bool {
  is_text_in(value, ["local", "rapid", "express"])
}

///|
fn is_scene(value : Field) -> Bool {
  is_text_in(value, ["mist", "dawn", "night"])
}

///|
fn is_timestamp(value : Field) -> Bool {
  match value {
    Numeric(n) => (n > -1.0 / 0.0 && n < 1.0 / 0.0) && n >= 0.0
    _ => false
  }
}

///|
fn is_length(value : Field, minimum : Int, maximum : Int) -> Bool {
  match value {
    Text(s) => s.length() >= minimum && s.length() <= maximum
    _ => false
  }
}

///|
pub fn valid_preferences(p : Record) -> Bool {
  p.is_object &&
  is_number_in(p.get("focusMinutes"), [0.0, 15.0, 25.0, 45.0, 60.0, 90.0]) &&
  is_number_in(p.get("restMinutes"), [3.0, 5.0, 10.0, 15.0]) &&
  is_speed(p.get("speed")) &&
  is_scene(p.get("scene")) &&
  p.get("showTime") is Flag(_) &&
  ["trainVolume", "rainVolume", "windVolume"].all(key => {
    match p.get(key) {
      Numeric(n) => n >= 0.0 && n <= 100.0
      _ => false
    }
  })
}

///|
pub fn valid_journey(j : Record) -> Bool {
  guard j.is_object && j.get("running") is Flag(running) else { false }
  let phase = j.get("phase")
  is_text_in(phase, ["idle", "focus", "rest", "finished"]) &&
  (match j.get("deadline") {
    Null => true
    Numeric(n) => n > -1.0 / 0.0 && n < 1.0 / 0.0
    _ => false
  }) &&
  (j.get("remaining") == Null || is_timestamp(j.get("remaining"))) &&
  is_number_in(j.get("focusMinutes"), [0.0, 15.0, 25.0, 45.0, 60.0, 90.0]) &&
  is_number_in(j.get("restMinutes"), [3.0, 5.0, 10.0, 15.0]) &&
  (!running || phase == Text("focus") || phase == Text("rest")) &&
  (
    !(running && j.get("deadline") == Null) ||
    (phase == Text("focus") && j.get("focusMinutes") == Numeric(0.0))
  )
}

///|
pub fn valid_ticket(t : Record) -> Bool {
  guard t.is_object &&
    t.get("startedAt") is Numeric(started) &&
    t.get("arrivedAt") is Numeric(arrived) else {
    false
  }
  is_length(t.get("id"), 1, 100) &&
  (t.get("kind") == Missing || is_text_in(t.get("kind"), ["sample", "welcome"])) &&
  is_timestamp(t.get("startedAt")) &&
  is_timestamp(t.get("arrivedAt")) &&
  arrived >= started &&
  is_speed(t.get("speed")) &&
  is_scene(t.get("scene")) &&
  is_length(t.get("title"), 0, 80) &&
  is_length(t.get("note"), 0, 300)
}

///|
pub fn valid_travel(
  is_object : Bool,
  journey : Record,
  tickets : Array[Record]?,
  pending : Field,
) -> Bool {
  guard is_object && valid_journey(journey) && tickets is Some(tickets) else {
    false
  }
  let id = journey.get("id")
  if !(id == Missing || (id is Text(text) && text.length() > 0)) {
    return false
  }
  for key in ["startedAt", "arrivedAt"] {
    if journey.get(key) != Missing && !is_timestamp(journey.get(key)) {
      return false
    }
  }
  if journey.get("speed") != Missing && !is_speed(journey.get("speed")) {
    return false
  }
  if journey.get("scene") != Missing && !is_scene(journey.get("scene")) {
    return false
  }
  let ids : Map[String, Bool] = Map([])
  for ticket in tickets {
    guard valid_ticket(ticket) && ticket.get("id") is Text(id) else {
      return false
    }
    if ids.contains(id) {
      return false
    }
    ids[id] = true
  }
  match pending {
    Null => true
    Text(id) => ids.contains(id)
    _ => false
  }
}

///|
pub fn valid_view(value : Field) -> Bool {
  is_text_in(value, ["forest", "snow", "train"])
}

///|
pub fn valid_note(value : Field) -> Bool {
  is_length(value, 0, 300)
}

///|
pub fn valid_boolean(value : Field) -> Bool {
  value is Flag(_)
}
