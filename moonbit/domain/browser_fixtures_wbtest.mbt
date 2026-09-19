// Generated from TypeScript validation and browser oracle fixtures. Run npm run fixtures:domain.

///|
test "isPreferences: primitive 0" {
  assert_eq(valid_preferences(Record::{ is_object: false, fields: Map([]) }), false)
}

///|
test "isPreferences: primitive 1" {
  assert_eq(valid_preferences(Record::{ is_object: false, fields: Map([]) }), false)
}

///|
test "isPreferences: primitive 2" {
  assert_eq(valid_preferences(Record::{ is_object: false, fields: Map([]) }), false)
}

///|
test "isPreferences: primitive 3" {
  assert_eq(valid_preferences(Record::{ is_object: false, fields: Map([]) }), false)
}

///|
test "isPreferences: primitive 4" {
  assert_eq(valid_preferences(Record::{ is_object: false, fields: Map([]) }), false)
}

///|
test "isPreferences: primitive 5" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([]) }), false)
}

///|
test "isPreferences: primitive 6" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([]) }), false)
}

///|
test "isPreferences: primitive 7" {
  assert_eq(valid_preferences(Record::{ is_object: false, fields: Map([]) }), false)
}

///|
test "isPreferences: primitive 8" {
  assert_eq(valid_preferences(Record::{ is_object: false, fields: Map([]) }), false)
}

///|
test "isPreferences: primitive 9" {
  assert_eq(valid_preferences(Record::{ is_object: false, fields: Map([]) }), false)
}

///|
test "isJourney: primitive 0" {
  assert_eq(valid_journey(Record::{ is_object: false, fields: Map([]) }), false)
}

///|
test "isJourney: primitive 1" {
  assert_eq(valid_journey(Record::{ is_object: false, fields: Map([]) }), false)
}

///|
test "isJourney: primitive 2" {
  assert_eq(valid_journey(Record::{ is_object: false, fields: Map([]) }), false)
}

///|
test "isJourney: primitive 3" {
  assert_eq(valid_journey(Record::{ is_object: false, fields: Map([]) }), false)
}

///|
test "isJourney: primitive 4" {
  assert_eq(valid_journey(Record::{ is_object: false, fields: Map([]) }), false)
}

///|
test "isJourney: primitive 5" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([]) }), false)
}

///|
test "isJourney: primitive 6" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([]) }), false)
}

///|
test "isJourney: primitive 7" {
  assert_eq(valid_journey(Record::{ is_object: false, fields: Map([]) }), false)
}

///|
test "isJourney: primitive 8" {
  assert_eq(valid_journey(Record::{ is_object: false, fields: Map([]) }), false)
}

///|
test "isJourney: primitive 9" {
  assert_eq(valid_journey(Record::{ is_object: false, fields: Map([]) }), false)
}

///|
test "isTicket: primitive 0" {
  assert_eq(valid_ticket(Record::{ is_object: false, fields: Map([]) }), false)
}

///|
test "isTicket: primitive 1" {
  assert_eq(valid_ticket(Record::{ is_object: false, fields: Map([]) }), false)
}

///|
test "isTicket: primitive 2" {
  assert_eq(valid_ticket(Record::{ is_object: false, fields: Map([]) }), false)
}

///|
test "isTicket: primitive 3" {
  assert_eq(valid_ticket(Record::{ is_object: false, fields: Map([]) }), false)
}

///|
test "isTicket: primitive 4" {
  assert_eq(valid_ticket(Record::{ is_object: false, fields: Map([]) }), false)
}

///|
test "isTicket: primitive 5" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([]) }), false)
}

///|
test "isTicket: primitive 6" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([]) }), false)
}

///|
test "isTicket: primitive 7" {
  assert_eq(valid_ticket(Record::{ is_object: false, fields: Map([]) }), false)
}

///|
test "isTicket: primitive 8" {
  assert_eq(valid_ticket(Record::{ is_object: false, fields: Map([]) }), false)
}

///|
test "isTicket: primitive 9" {
  assert_eq(valid_ticket(Record::{ is_object: false, fields: Map([]) }), false)
}

///|
test "isTravelState: primitive 0" {
  assert_eq(valid_travel(false, Record::{ is_object: false, fields: Map([]) }, None, Missing), false)
}

///|
test "isTravelState: primitive 1" {
  assert_eq(valid_travel(false, Record::{ is_object: false, fields: Map([]) }, None, Missing), false)
}

///|
test "isTravelState: primitive 2" {
  assert_eq(valid_travel(false, Record::{ is_object: false, fields: Map([]) }, None, Missing), false)
}

///|
test "isTravelState: primitive 3" {
  assert_eq(valid_travel(false, Record::{ is_object: false, fields: Map([]) }, None, Missing), false)
}

///|
test "isTravelState: primitive 4" {
  assert_eq(valid_travel(false, Record::{ is_object: false, fields: Map([]) }, None, Missing), false)
}

///|
test "isTravelState: primitive 5" {
  assert_eq(valid_travel(true, Record::{ is_object: false, fields: Map([]) }, None, Missing), false)
}

///|
test "isTravelState: primitive 6" {
  assert_eq(valid_travel(true, Record::{ is_object: false, fields: Map([]) }, None, Missing), false)
}

///|
test "isTravelState: primitive 7" {
  assert_eq(valid_travel(false, Record::{ is_object: false, fields: Map([]) }, None, Missing), false)
}

///|
test "isTravelState: primitive 8" {
  assert_eq(valid_travel(false, Record::{ is_object: false, fields: Map([]) }, None, Missing), false)
}

///|
test "isTravelState: primitive 9" {
  assert_eq(valid_travel(false, Record::{ is_object: false, fields: Map([]) }, None, Missing), false)
}

///|
test "isView: primitive 0" {
  assert_eq(valid_view(Null), false)
}

///|
test "isView: primitive 1" {
  assert_eq(valid_view(Missing), false)
}

///|
test "isView: primitive 2" {
  assert_eq(valid_view(Flag(false)), false)
}

///|
test "isView: primitive 3" {
  assert_eq(valid_view(Numeric(0.0)), false)
}

///|
test "isView: primitive 4" {
  assert_eq(valid_view(Text("")), false)
}

///|
test "isView: primitive 5" {
  assert_eq(valid_view(Other), false)
}

///|
test "isView: primitive 6" {
  assert_eq(valid_view(Other), false)
}

///|
test "isView: primitive 7" {
  assert_eq(valid_view(Text("forest")), true)
}

///|
test "isView: primitive 8" {
  assert_eq(valid_view(Text("snow")), true)
}

///|
test "isView: primitive 9" {
  assert_eq(valid_view(Text("train")), true)
}

///|
test "isNote: primitive 0" {
  assert_eq(valid_note(Null), false)
}

///|
test "isNote: primitive 1" {
  assert_eq(valid_note(Missing), false)
}

///|
test "isNote: primitive 2" {
  assert_eq(valid_note(Flag(false)), false)
}

///|
test "isNote: primitive 3" {
  assert_eq(valid_note(Numeric(0.0)), false)
}

///|
test "isNote: primitive 4" {
  assert_eq(valid_note(Text("")), true)
}

///|
test "isNote: primitive 5" {
  assert_eq(valid_note(Other), false)
}

///|
test "isNote: primitive 6" {
  assert_eq(valid_note(Other), false)
}

///|
test "isNote: primitive 7" {
  assert_eq(valid_note(Text("forest")), true)
}

///|
test "isNote: primitive 8" {
  assert_eq(valid_note(Text("snow")), true)
}

///|
test "isNote: primitive 9" {
  assert_eq(valid_note(Text("train")), true)
}

///|
test "isStoredBoolean: primitive 0" {
  assert_eq(valid_boolean(Null), false)
}

///|
test "isStoredBoolean: primitive 1" {
  assert_eq(valid_boolean(Missing), false)
}

///|
test "isStoredBoolean: primitive 2" {
  assert_eq(valid_boolean(Flag(false)), true)
}

///|
test "isStoredBoolean: primitive 3" {
  assert_eq(valid_boolean(Numeric(0.0)), false)
}

///|
test "isStoredBoolean: primitive 4" {
  assert_eq(valid_boolean(Text("")), false)
}

///|
test "isStoredBoolean: primitive 5" {
  assert_eq(valid_boolean(Other), false)
}

///|
test "isStoredBoolean: primitive 6" {
  assert_eq(valid_boolean(Other), false)
}

///|
test "isStoredBoolean: primitive 7" {
  assert_eq(valid_boolean(Text("forest")), false)
}

///|
test "isStoredBoolean: primitive 8" {
  assert_eq(valid_boolean(Text("snow")), false)
}

///|
test "isStoredBoolean: primitive 9" {
  assert_eq(valid_boolean(Text("train")), false)
}

///|
test "isNote: note boundary 0" {
  assert_eq(valid_note(Flag(true)), false)
}

///|
test "isNote: note boundary 1" {
  assert_eq(valid_note(Text("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")), true)
}

///|
test "isNote: note boundary 2" {
  assert_eq(valid_note(Text("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")), true)
}

///|
test "isNote: note boundary 3" {
  assert_eq(valid_note(Text("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")), false)
}

///|
test "isNote: note boundary 4" {
  assert_eq(valid_note(Text("🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃")), true)
}

///|
test "isNote: note boundary 5" {
  assert_eq(valid_note(Text("a🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃")), false)
}

///|
test "isStoredBoolean: note boundary 0" {
  assert_eq(valid_boolean(Flag(true)), true)
}

///|
test "isStoredBoolean: note boundary 1" {
  assert_eq(valid_boolean(Text("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")), false)
}

///|
test "isStoredBoolean: note boundary 2" {
  assert_eq(valid_boolean(Text("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")), false)
}

///|
test "isStoredBoolean: note boundary 3" {
  assert_eq(valid_boolean(Text("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")), false)
}

///|
test "isStoredBoolean: note boundary 4" {
  assert_eq(valid_boolean(Text("🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃")), false)
}

///|
test "isStoredBoolean: note boundary 5" {
  assert_eq(valid_boolean(Text("a🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃")), false)
}

///|
test "isPreferences: valid" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), true)
}

///|
test "isPreferences: missing focusMinutes" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: focusMinutes/0" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Missing), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: focusMinutes/1" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Null), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: focusMinutes/2" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Flag(false)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: focusMinutes/3" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Text("")), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: focusMinutes/4" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(-1.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: focusMinutes/5" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric((0.0 / 0.0))), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: focusMinutes/6" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric((1.0 / 0.0))), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: focusMinutes/7" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(0.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), true)
}

///|
test "isPreferences: focusMinutes/8" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(100.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: focusMinutes/9" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Text("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: missing restMinutes" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: restMinutes/0" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Missing), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: restMinutes/1" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Null), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: restMinutes/2" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Flag(false)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: restMinutes/3" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Text("")), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: restMinutes/4" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(-1.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: restMinutes/5" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric((0.0 / 0.0))), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: restMinutes/6" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric((1.0 / 0.0))), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: restMinutes/7" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(0.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: restMinutes/8" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(100.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: restMinutes/9" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Text("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: missing speed" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: speed/0" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Missing), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: speed/1" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Null), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: speed/2" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Flag(false)), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: speed/3" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: speed/4" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Numeric(-1.0)), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: speed/5" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Numeric((0.0 / 0.0))), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: speed/6" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Numeric((1.0 / 0.0))), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: speed/7" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Numeric(0.0)), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: speed/8" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Numeric(100.0)), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: speed/9" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: missing scene" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: scene/0" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Missing), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: scene/1" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Null), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: scene/2" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Flag(false)), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: scene/3" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: scene/4" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Numeric(-1.0)), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: scene/5" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Numeric((0.0 / 0.0))), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: scene/6" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Numeric((1.0 / 0.0))), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: scene/7" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Numeric(0.0)), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: scene/8" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Numeric(100.0)), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: scene/9" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: missing showTime" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: showTime/0" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Missing), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: showTime/1" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Null), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: showTime/2" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(false)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), true)
}

///|
test "isPreferences: showTime/3" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Text("")), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: showTime/4" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Numeric(-1.0)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: showTime/5" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Numeric((0.0 / 0.0))), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: showTime/6" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Numeric((1.0 / 0.0))), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: showTime/7" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Numeric(0.0)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: showTime/8" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Numeric(100.0)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: showTime/9" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Text("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: missing trainVolume" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: trainVolume/0" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Missing), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: trainVolume/1" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Null), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: trainVolume/2" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Flag(false)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: trainVolume/3" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Text("")), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: trainVolume/4" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(-1.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: trainVolume/5" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric((0.0 / 0.0))), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: trainVolume/6" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric((1.0 / 0.0))), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: trainVolume/7" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(0.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), true)
}

///|
test "isPreferences: trainVolume/8" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(100.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), true)
}

///|
test "isPreferences: trainVolume/9" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Text("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: missing rainVolume" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: rainVolume/0" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Missing), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: rainVolume/1" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Null), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: rainVolume/2" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Flag(false)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: rainVolume/3" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Text("")), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: rainVolume/4" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(-1.0)), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: rainVolume/5" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric((0.0 / 0.0))), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: rainVolume/6" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric((1.0 / 0.0))), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: rainVolume/7" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(20.0))]) }), true)
}

///|
test "isPreferences: rainVolume/8" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(100.0)), ("windVolume", Numeric(20.0))]) }), true)
}

///|
test "isPreferences: rainVolume/9" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Text("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")), ("windVolume", Numeric(20.0))]) }), false)
}

///|
test "isPreferences: missing windVolume" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0))]) }), false)
}

///|
test "isPreferences: windVolume/0" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Missing)]) }), false)
}

///|
test "isPreferences: windVolume/1" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Null)]) }), false)
}

///|
test "isPreferences: windVolume/2" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Flag(false))]) }), false)
}

///|
test "isPreferences: windVolume/3" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Text(""))]) }), false)
}

///|
test "isPreferences: windVolume/4" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(-1.0))]) }), false)
}

///|
test "isPreferences: windVolume/5" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric((0.0 / 0.0)))]) }), false)
}

///|
test "isPreferences: windVolume/6" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric((1.0 / 0.0)))]) }), false)
}

///|
test "isPreferences: windVolume/7" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(0.0))]) }), true)
}

///|
test "isPreferences: windVolume/8" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Numeric(100.0))]) }), true)
}

///|
test "isPreferences: windVolume/9" {
  assert_eq(valid_preferences(Record::{ is_object: true, fields: Map([("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local")), ("scene", Text("mist")), ("showTime", Flag(true)), ("trainVolume", Numeric(45.0)), ("rainVolume", Numeric(0.0)), ("windVolume", Text("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"))]) }), false)
}

///|
test "isJourney: valid" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), true)
}

///|
test "isJourney: missing phase" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: phase/0" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Missing), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: phase/1" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Null), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: phase/2" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Flag(false)), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: phase/3" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: phase/4" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Numeric(-1.0)), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: phase/5" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Numeric((0.0 / 0.0))), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: phase/6" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Numeric((1.0 / 0.0))), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: phase/7" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Numeric(0.0)), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: phase/8" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Numeric(100.0)), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: phase/9" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: missing running" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running/0" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Missing), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running/1" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Null), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running/2" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), true)
}

///|
test "isJourney: running/3" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Text("")), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running/4" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Numeric(-1.0)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running/5" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Numeric((0.0 / 0.0))), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running/6" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Numeric((1.0 / 0.0))), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running/7" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Numeric(0.0)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running/8" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Numeric(100.0)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running/9" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Text("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: missing deadline" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: deadline/0" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Missing), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: deadline/1" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), true)
}

///|
test "isJourney: deadline/2" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Flag(false)), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: deadline/3" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Text("")), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: deadline/4" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Numeric(-1.0)), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), true)
}

///|
test "isJourney: deadline/5" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Numeric((0.0 / 0.0))), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: deadline/6" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Numeric((1.0 / 0.0))), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: deadline/7" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Numeric(0.0)), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), true)
}

///|
test "isJourney: deadline/8" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Numeric(100.0)), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), true)
}

///|
test "isJourney: deadline/9" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Text("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: missing remaining" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: remaining/0" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Missing), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: remaining/1" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), true)
}

///|
test "isJourney: remaining/2" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Flag(false)), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: remaining/3" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Text("")), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: remaining/4" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Numeric(-1.0)), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: remaining/5" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Numeric((0.0 / 0.0))), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: remaining/6" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Numeric((1.0 / 0.0))), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: remaining/7" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Numeric(0.0)), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), true)
}

///|
test "isJourney: remaining/8" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Numeric(100.0)), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), true)
}

///|
test "isJourney: remaining/9" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Text("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: missing focusMinutes" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: focusMinutes/0" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Missing), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: focusMinutes/1" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Null), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: focusMinutes/2" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Flag(false)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: focusMinutes/3" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Text("")), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: focusMinutes/4" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(-1.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: focusMinutes/5" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric((0.0 / 0.0))), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: focusMinutes/6" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric((1.0 / 0.0))), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: focusMinutes/7" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(0.0)), ("restMinutes", Numeric(5.0))]) }), true)
}

///|
test "isJourney: focusMinutes/8" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(100.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: focusMinutes/9" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Text("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: missing restMinutes" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0))]) }), false)
}

///|
test "isJourney: restMinutes/0" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Missing)]) }), false)
}

///|
test "isJourney: restMinutes/1" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Null)]) }), false)
}

///|
test "isJourney: restMinutes/2" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Flag(false))]) }), false)
}

///|
test "isJourney: restMinutes/3" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Text(""))]) }), false)
}

///|
test "isJourney: restMinutes/4" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(-1.0))]) }), false)
}

///|
test "isJourney: restMinutes/5" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric((0.0 / 0.0)))]) }), false)
}

///|
test "isJourney: restMinutes/6" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric((1.0 / 0.0)))]) }), false)
}

///|
test "isJourney: restMinutes/7" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(0.0))]) }), false)
}

///|
test "isJourney: restMinutes/8" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(100.0))]) }), false)
}

///|
test "isJourney: restMinutes/9" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Text("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"))]) }), false)
}

///|
test "isTicket: valid" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), true)
}

///|
test "isTicket: missing id" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: id/0" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Missing), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: id/1" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Null), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: id/2" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Flag(false)), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: id/3" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: id/4" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Numeric(-1.0)), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: id/5" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Numeric((0.0 / 0.0))), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: id/6" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Numeric((1.0 / 0.0))), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: id/7" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Numeric(0.0)), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: id/8" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Numeric(100.0)), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: id/9" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: missing startedAt" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: startedAt/0" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Missing), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: startedAt/1" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Null), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: startedAt/2" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Flag(false)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: startedAt/3" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Text("")), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: startedAt/4" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(-1.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: startedAt/5" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric((0.0 / 0.0))), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: startedAt/6" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric((1.0 / 0.0))), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: startedAt/7" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(0.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), true)
}

///|
test "isTicket: startedAt/8" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(100.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: startedAt/9" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Text("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: missing arrivedAt" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: arrivedAt/0" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Missing), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: arrivedAt/1" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Null), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: arrivedAt/2" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Flag(false)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: arrivedAt/3" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Text("")), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: arrivedAt/4" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(-1.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: arrivedAt/5" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric((0.0 / 0.0))), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: arrivedAt/6" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric((1.0 / 0.0))), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: arrivedAt/7" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(0.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: arrivedAt/8" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(100.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), true)
}

///|
test "isTicket: arrivedAt/9" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Text("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: missing speed" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: speed/0" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Missing), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: speed/1" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Null), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: speed/2" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Flag(false)), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: speed/3" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: speed/4" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Numeric(-1.0)), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: speed/5" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Numeric((0.0 / 0.0))), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: speed/6" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Numeric((1.0 / 0.0))), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: speed/7" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Numeric(0.0)), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: speed/8" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Numeric(100.0)), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: speed/9" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: missing scene" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: scene/0" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Missing), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: scene/1" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Null), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: scene/2" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Flag(false)), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: scene/3" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: scene/4" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Numeric(-1.0)), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: scene/5" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Numeric((0.0 / 0.0))), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: scene/6" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Numeric((1.0 / 0.0))), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: scene/7" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Numeric(0.0)), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: scene/8" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Numeric(100.0)), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: scene/9" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")), ("title", Text("読書")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: missing title" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: title/0" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Missing), ("note", Text(""))]) }), false)
}

///|
test "isTicket: title/1" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Null), ("note", Text(""))]) }), false)
}

///|
test "isTicket: title/2" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Flag(false)), ("note", Text(""))]) }), false)
}

///|
test "isTicket: title/3" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("")), ("note", Text(""))]) }), true)
}

///|
test "isTicket: title/4" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Numeric(-1.0)), ("note", Text(""))]) }), false)
}

///|
test "isTicket: title/5" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Numeric((0.0 / 0.0))), ("note", Text(""))]) }), false)
}

///|
test "isTicket: title/6" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Numeric((1.0 / 0.0))), ("note", Text(""))]) }), false)
}

///|
test "isTicket: title/7" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Numeric(0.0)), ("note", Text(""))]) }), false)
}

///|
test "isTicket: title/8" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Numeric(100.0)), ("note", Text(""))]) }), false)
}

///|
test "isTicket: title/9" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")), ("note", Text(""))]) }), false)
}

///|
test "isTicket: missing note" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書"))]) }), false)
}

///|
test "isTicket: note/0" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Missing)]) }), false)
}

///|
test "isTicket: note/1" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Null)]) }), false)
}

///|
test "isTicket: note/2" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Flag(false))]) }), false)
}

///|
test "isTicket: note/3" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }), true)
}

///|
test "isTicket: note/4" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Numeric(-1.0))]) }), false)
}

///|
test "isTicket: note/5" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Numeric((0.0 / 0.0)))]) }), false)
}

///|
test "isTicket: note/6" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Numeric((1.0 / 0.0)))]) }), false)
}

///|
test "isTicket: note/7" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Numeric(0.0))]) }), false)
}

///|
test "isTicket: note/8" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Numeric(100.0))]) }), false)
}

///|
test "isTicket: note/9" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"))]) }), false)
}

///|
test "isTravelState: valid" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), true)
}

///|
test "isTravelState: missing journey" {
  assert_eq(valid_travel(true, Record::{ is_object: false, fields: Map([]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: journey/0" {
  assert_eq(valid_travel(true, Record::{ is_object: false, fields: Map([]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: journey/1" {
  assert_eq(valid_travel(true, Record::{ is_object: false, fields: Map([]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: journey/2" {
  assert_eq(valid_travel(true, Record::{ is_object: false, fields: Map([]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: journey/3" {
  assert_eq(valid_travel(true, Record::{ is_object: false, fields: Map([]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: journey/4" {
  assert_eq(valid_travel(true, Record::{ is_object: false, fields: Map([]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: journey/5" {
  assert_eq(valid_travel(true, Record::{ is_object: false, fields: Map([]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: journey/6" {
  assert_eq(valid_travel(true, Record::{ is_object: false, fields: Map([]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: journey/7" {
  assert_eq(valid_travel(true, Record::{ is_object: false, fields: Map([]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: journey/8" {
  assert_eq(valid_travel(true, Record::{ is_object: false, fields: Map([]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: journey/9" {
  assert_eq(valid_travel(true, Record::{ is_object: false, fields: Map([]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: missing tickets" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }, None, Null), false)
}

///|
test "isTravelState: tickets/0" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }, None, Null), false)
}

///|
test "isTravelState: tickets/1" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }, None, Null), false)
}

///|
test "isTravelState: tickets/2" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }, None, Null), false)
}

///|
test "isTravelState: tickets/3" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }, None, Null), false)
}

///|
test "isTravelState: tickets/4" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }, None, Null), false)
}

///|
test "isTravelState: tickets/5" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }, None, Null), false)
}

///|
test "isTravelState: tickets/6" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }, None, Null), false)
}

///|
test "isTravelState: tickets/7" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }, None, Null), false)
}

///|
test "isTravelState: tickets/8" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }, None, Null), false)
}

///|
test "isTravelState: tickets/9" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }, None, Null), false)
}

///|
test "isTravelState: missing pendingArrivalId" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Missing), false)
}

///|
test "isTravelState: pendingArrivalId/0" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Missing), false)
}

///|
test "isTravelState: pendingArrivalId/1" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), true)
}

///|
test "isTravelState: pendingArrivalId/2" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Flag(false)), false)
}

///|
test "isTravelState: pendingArrivalId/3" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Text("")), false)
}

///|
test "isTravelState: pendingArrivalId/4" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Numeric(-1.0)), false)
}

///|
test "isTravelState: pendingArrivalId/5" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Numeric((0.0 / 0.0))), false)
}

///|
test "isTravelState: pendingArrivalId/6" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Numeric((1.0 / 0.0))), false)
}

///|
test "isTravelState: pendingArrivalId/7" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Numeric(0.0)), false)
}

///|
test "isTravelState: pendingArrivalId/8" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Numeric(100.0)), false)
}

///|
test "isTravelState: pendingArrivalId/9" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Text("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")), false)
}

///|
test "isJourney: running idle/0" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(true)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(0.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running idle/15" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(true)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(15.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running idle/25" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(true)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running idle/45" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(true)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(45.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running idle/60" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(true)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(60.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running idle/90" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(true)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(90.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running focus/0" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("focus")), ("running", Flag(true)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(0.0)), ("restMinutes", Numeric(5.0))]) }), true)
}

///|
test "isJourney: running focus/15" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("focus")), ("running", Flag(true)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(15.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running focus/25" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("focus")), ("running", Flag(true)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running focus/45" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("focus")), ("running", Flag(true)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(45.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running focus/60" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("focus")), ("running", Flag(true)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(60.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running focus/90" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("focus")), ("running", Flag(true)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(90.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running rest/0" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("rest")), ("running", Flag(true)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(0.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running rest/15" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("rest")), ("running", Flag(true)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(15.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running rest/25" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("rest")), ("running", Flag(true)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running rest/45" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("rest")), ("running", Flag(true)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(45.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running rest/60" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("rest")), ("running", Flag(true)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(60.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running rest/90" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("rest")), ("running", Flag(true)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(90.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running finished/0" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("finished")), ("running", Flag(true)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(0.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running finished/15" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("finished")), ("running", Flag(true)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(15.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running finished/25" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("finished")), ("running", Flag(true)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running finished/45" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("finished")), ("running", Flag(true)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(45.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running finished/60" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("finished")), ("running", Flag(true)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(60.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isJourney: running finished/90" {
  assert_eq(valid_journey(Record::{ is_object: true, fields: Map([("phase", Text("finished")), ("running", Flag(true)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(90.0)), ("restMinutes", Numeric(5.0))]) }), false)
}

///|
test "isTicket: kind undefined" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text("")), ("kind", Missing)]) }), true)
}

///|
test "isTicket: kind sample" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text("")), ("kind", Text("sample"))]) }), true)
}

///|
test "isTicket: kind welcome" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text("")), ("kind", Text("welcome"))]) }), true)
}

///|
test "isTicket: kind other" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text("")), ("kind", Text("other"))]) }), false)
}

///|
test "isTicket: kind null" {
  assert_eq(valid_ticket(Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text("")), ("kind", Null)]) }), false)
}

///|
test "isTravelState: duplicate" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }, Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: invalid" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }, Some([Record::{ is_object: true, fields: Map([]) }]), Null), false)
}

///|
test "isTravelState: none" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }, Some([]), Null), true)
}

///|
test "isTravelState: pending one" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Text("one")), true)
}

///|
test "isTravelState: pending missing" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Text("missing")), false)
}

///|
test "isTravelState: pending null" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), true)
}

///|
test "isTravelState: metadata id/undefined" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("id", Missing)]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), true)
}

///|
test "isTravelState: metadata id/null" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("id", Null)]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata id/" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("id", Text(""))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata id/-1" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("id", Numeric(-1.0))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata id/NaN" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("id", Numeric((0.0 / 0.0)))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata id/Infinity" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("id", Numeric((1.0 / 0.0)))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata id/0" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("id", Numeric(0.0))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata id/local" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("id", Text("local"))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), true)
}

///|
test "isTravelState: metadata id/mist" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("id", Text("mist"))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), true)
}

///|
test "isTravelState: metadata id/trip" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("id", Text("trip"))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), true)
}

///|
test "isTravelState: metadata startedAt/undefined" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("startedAt", Missing)]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), true)
}

///|
test "isTravelState: metadata startedAt/null" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("startedAt", Null)]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata startedAt/" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("startedAt", Text(""))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata startedAt/-1" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("startedAt", Numeric(-1.0))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata startedAt/NaN" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("startedAt", Numeric((0.0 / 0.0)))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata startedAt/Infinity" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("startedAt", Numeric((1.0 / 0.0)))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata startedAt/0" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("startedAt", Numeric(0.0))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), true)
}

///|
test "isTravelState: metadata startedAt/local" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("startedAt", Text("local"))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata startedAt/mist" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("startedAt", Text("mist"))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata startedAt/trip" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("startedAt", Text("trip"))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata arrivedAt/undefined" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("arrivedAt", Missing)]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), true)
}

///|
test "isTravelState: metadata arrivedAt/null" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("arrivedAt", Null)]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata arrivedAt/" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("arrivedAt", Text(""))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata arrivedAt/-1" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("arrivedAt", Numeric(-1.0))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata arrivedAt/NaN" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("arrivedAt", Numeric((0.0 / 0.0)))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata arrivedAt/Infinity" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("arrivedAt", Numeric((1.0 / 0.0)))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata arrivedAt/0" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("arrivedAt", Numeric(0.0))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), true)
}

///|
test "isTravelState: metadata arrivedAt/local" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("arrivedAt", Text("local"))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata arrivedAt/mist" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("arrivedAt", Text("mist"))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata arrivedAt/trip" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("arrivedAt", Text("trip"))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata speed/undefined" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Missing)]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), true)
}

///|
test "isTravelState: metadata speed/null" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Null)]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata speed/" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text(""))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata speed/-1" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Numeric(-1.0))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata speed/NaN" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Numeric((0.0 / 0.0)))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata speed/Infinity" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Numeric((1.0 / 0.0)))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata speed/0" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Numeric(0.0))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata speed/local" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("local"))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), true)
}

///|
test "isTravelState: metadata speed/mist" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("mist"))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata speed/trip" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("speed", Text("trip"))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata scene/undefined" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("scene", Missing)]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), true)
}

///|
test "isTravelState: metadata scene/null" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("scene", Null)]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata scene/" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("scene", Text(""))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata scene/-1" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("scene", Numeric(-1.0))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata scene/NaN" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("scene", Numeric((0.0 / 0.0)))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata scene/Infinity" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("scene", Numeric((1.0 / 0.0)))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata scene/0" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("scene", Numeric(0.0))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata scene/local" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("scene", Text("local"))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "isTravelState: metadata scene/mist" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("scene", Text("mist"))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), true)
}

///|
test "isTravelState: metadata scene/trip" {
  assert_eq(valid_travel(true, Record::{ is_object: true, fields: Map([("phase", Text("idle")), ("running", Flag(false)), ("deadline", Null), ("remaining", Null), ("focusMinutes", Numeric(25.0)), ("restMinutes", Numeric(5.0)), ("scene", Text("trip"))]) }, Some([Record::{ is_object: true, fields: Map([("id", Text("one")), ("startedAt", Numeric(10.0)), ("arrivedAt", Numeric(20.0)), ("speed", Text("local")), ("scene", Text("mist")), ("title", Text("読書")), ("note", Text(""))]) }]), Null), false)
}

///|
test "sound mix from source trace 0" {
  let mix = sound_mix("local", 45.0, 20.0, 50.0, true, false)
  assert_eq(mix.train, 0.29250000000000004)
  assert_eq(mix.rain, 0.032)
  assert_eq(mix.wind, 0.06)
  assert_eq(mix.cabin, 850.0)
}

///|
test "sound mix from source trace 1" {
  let mix = sound_mix("express", 45.0, 20.0, 50.0, false, true)
  assert_eq(mix.train, 0.03150000000000001)
  assert_eq(mix.rain, 0.064)
  assert_eq(mix.wind, 0.0825)
  assert_eq(mix.cabin, 2600.0)
}

///|
test "sound mix from source trace 2" {
  let mix = sound_mix("rapid", 45.0, 20.0, 50.0, true, true)
  assert_eq(mix.train, 0.29250000000000004)
  assert_eq(mix.rain, 0.064)
  assert_eq(mix.wind, 0.275)
  assert_eq(mix.cabin, 2600.0)
}

///|
test "noise samples from source Float32Array channel 0" {
  let random = [0.2523451747838408, 0.08812504541128874, 0.5772811982315034, 0.22255426598712802, 0.37566019711084664, 0.02566390484571457, 0.4472812858875841, 0.1184600037522614, 0.8738137057516724, 0.9946342753246427, 0.8532027236651629, 0.49967672815546393, 0.6420009464491159, 0.8614561874419451, 0.5964697764720768, 0.0907501564361155, 0.14020979800261557, 0.950088276527822, 0.9245554457884282, 0.8894689562730491, 0.5505083699245006, 0.1805165521800518, 0.5500854735728353, 0.2589667965658009, 0.9431216625962406, 0.8215009802952409, 0.15529390866868198, 0.8293947107158601, 0.4669222899246961, 0.060704877600073814, 0.02245523571036756, 0.5372887724079192, 0.8299602644983679, 0.8453321186825633, 0.6809180665295571, 0.38075808389112353, 0.5856568452436477, 0.6963971555233002, 0.7113653940614313, 0.7186180767603219]
  let expected = [-0.19510367512702942, -0.3456920385360718, 0.004902447573840618, -0.2665676176548004, -0.16854634881019592, -0.4532047510147095, -0.1597461998462677, -0.42042601108551025, 0.14488445222377777, 0.27573856711387634, 0.2094690501689911, -0.037106242030858994, 0.07588859647512436, 0.2618183493614197, 0.08458376675844193, -0.30577006936073303, -0.3022690415382385, 0.3053954839706421, 0.32503631711006165, 0.3339938521385193, 0.09965958446264267, -0.18895527720451355, 0.07329478859901428, -0.1525847315788269, 0.36483830213546753, 0.3066001534461975, -0.19200067222118378, 0.3075900673866272, 0.04907660558819771, -0.2756095826625824, -0.3450930416584015, 0.01882825791835785, 0.252847820520401, 0.2933964133262634, 0.19293197989463806, -0.0292668417096138, 0.12036136537790298, 0.21365100145339966, 0.24082981050014496, 0.2628372013568878]
  let mut brown = 0.0
  for i in 0..<random.length() {
    let (next, sample) = noise_sample(brown, random[i])
    brown = next
    assert_eq(Float::from_double(sample).to_double(), expected[i])
  }
}

///|
test "noise samples from source Float32Array channel 1" {
  let random = [0.9902874475810677, 0.44975284952670336, 0.09792640875093639, 0.1915941252373159, 0.4473786160815507, 0.12700111605226994, 0.7687648774590343, 0.5937204719521105, 0.8046440596226603, 0.3894113814458251, 0.21576908486895263, 0.27205946622416377, 0.01908474904485047, 0.27797185257077217, 0.3339683373924345, 0.8828661148436368, 0.955878077307716, 0.1926985988393426, 0.8713010295759887, 0.5823229453526437, 0.33668108214624226, 0.31432744674384594, 0.12935927300713956, 0.9799701818265021, 0.10297273122705519, 0.9215136868879199, 0.8057350877206773, 0.43295623315498233, 0.7100602698046714, 0.3066645935177803, 0.1185931561049074, 0.5092334938235581, 0.11737463087774813, 0.2435297565534711, 0.6040951393079013, 0.6978244571946561, 0.4906799078453332, 0.20967422612011433, 0.22730055614374578, 0.6942831412889063]
  let expected = [0.3862508535385132, 0.0024146882351487875, -0.28008460998535156, -0.24163009226322174, -0.06657341122627258, -0.32286345958709717, 0.15147648751735687, 0.03806863725185394, 0.2131359875202179, -0.08723430335521698, -0.23350121080875397, -0.21326979994773865, -0.4312687814235687, -0.2672349512577057, -0.23988860845565796, 0.1809736043214798, 0.27423304319381714, -0.2858804762363434, 0.2234693467617035, 0.02930186502635479, -0.15629680454730988, -0.18722355365753174, -0.34784892201423645, 0.29187852144241333, -0.355804979801178, 0.25608429312705994, 0.20283491909503937, -0.06372436881065369, 0.1491023749113083, -0.15030063688755035, -0.31507501006126404, -0.03964309021830559, -0.3464161157608032, -0.27871033549308777, -0.014755443669855595, 0.0703621506690979, -0.07379604130983353, -0.2943512499332428, -0.3037346601486206, 0.04296448454260826]
  let mut brown = 0.0
  for i in 0..<random.length() {
    let (next, sample) = noise_sample(brown, random[i])
    brown = next
    assert_eq(Float::from_double(sample).to_double(), expected[i])
  }
}

///|
test "animation first frame from source uniforms" {
  assert_eq(animation_delta(42.0, "local"), 0.0273)
  assert_eq(travel_delta(42.0), 0.042)
}
