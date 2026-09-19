// Generated from TypeScript oracle fixtures. Run npm run fixtures:domain.

///|
test "start 0" {
  let state = Journey::{ phase: Idle, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }
  let result = reduce_journey(state, Start(1800000000123.0, 0.0, 5.0, "trip-1", "express", "night"))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "tick 0/0" {
  let state = Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800000000123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, true)
}

///|
test "toggle 0/0" {
  let state = Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800000000123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: false, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 0/0" {
  let state = Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800000000123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800000000123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 0/0" {
  let state = Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800000000123.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, true)
}

///|
test "tick 0/-1" {
  let state = Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800000000122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, true)
}

///|
test "toggle 0/-1" {
  let state = Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800000000122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: false, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 0/-1" {
  let state = Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800000000122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800000000122.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 0/-1" {
  let state = Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800000000122.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, true)
}

///|
test "tick 0/299999" {
  let state = Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800000300122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, true)
}

///|
test "toggle 0/299999" {
  let state = Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800000300122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: false, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 0/299999" {
  let state = Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800000300122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800000300122.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 0/299999" {
  let state = Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800000300122.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, true)
}

///|
test "tick 0/300000" {
  let state = Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800000300123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, true)
}

///|
test "toggle 0/300000" {
  let state = Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800000300123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: false, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 0/300000" {
  let state = Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800000300123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800000300123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 0/300000" {
  let state = Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800000300123.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, true)
}

///|
test "tick 0/86400000" {
  let state = Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800086400123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, true)
}

///|
test "toggle 0/86400000" {
  let state = Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800086400123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: false, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 0/86400000" {
  let state = Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800086400123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800086400123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 0/86400000" {
  let state = Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800086400123.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, true)
}

///|
test "resume 0" {
  let state = Journey::{ phase: Focus, running: false, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800000200123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: None, remaining: None, focus_minutes: 0.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "start 15" {
  let state = Journey::{ phase: Idle, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }
  let result = reduce_journey(state, Start(1800000000123.0, 15.0, 5.0, "trip-1", "express", "night"))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1800000900123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "tick 15/0" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800000900123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800000000123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1800000900123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, true)
}

///|
test "toggle 15/0" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800000900123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800000000123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: false, deadline: None, remaining: Some(900000.0), focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 15/0" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800000900123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800000000123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800000000123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 15/0" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800000900123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800000000123.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1800000900123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, true)
}

///|
test "tick 15/899999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800000900123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800000900122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1800000900123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, true)
}

///|
test "toggle 15/899999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800000900123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800000900122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: false, deadline: None, remaining: Some(1.0), focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 15/899999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800000900123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800000900122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800000900122.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 15/899999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800000900123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800000900122.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1800000900123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, true)
}

///|
test "tick 15/900000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800000900123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800000900123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Rest, running: true, deadline: Some(1800001200123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800000900123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "toggle 15/900000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800000900123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800000900123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Rest, running: false, deadline: None, remaining: Some(300000.0), focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800000900123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 15/900000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800000900123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800000900123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800000900123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 15/900000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800000900123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800000900123.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Rest, running: true, deadline: Some(1800001200123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800000900123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "tick 15/1199999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800000900123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800001200122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Rest, running: true, deadline: Some(1800001200123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800000900123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "toggle 15/1199999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800000900123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800001200122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Rest, running: false, deadline: None, remaining: Some(1.0), focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800000900123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 15/1199999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800000900123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800001200122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800000900123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 15/1199999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800000900123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800001200122.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Rest, running: true, deadline: Some(1800001200123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800000900123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "tick 15/1200000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800000900123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800001200123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800000900123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "toggle 15/1200000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800000900123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800001200123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800000900123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 15/1200000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800000900123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800001200123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800000900123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 15/1200000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800000900123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800001200123.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800000900123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "tick 15/86400000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800000900123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800086400123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800000900123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "toggle 15/86400000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800000900123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800086400123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800000900123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 15/86400000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800000900123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800086400123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800000900123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 15/86400000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800000900123.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800086400123.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800000900123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "resume 15" {
  let state = Journey::{ phase: Focus, running: false, deadline: None, remaining: Some(899950.0), focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800000200123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1800001100073.0), remaining: None, focus_minutes: 15.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "start 25" {
  let state = Journey::{ phase: Idle, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }
  let result = reduce_journey(state, Start(1800000000123.0, 25.0, 5.0, "trip-1", "express", "night"))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1800001500123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "tick 25/0" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800001500123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800000000123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1800001500123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, true)
}

///|
test "toggle 25/0" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800001500123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800000000123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: false, deadline: None, remaining: Some(1500000.0), focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 25/0" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800001500123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800000000123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800000000123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 25/0" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800001500123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800000000123.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1800001500123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, true)
}

///|
test "tick 25/1499999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800001500123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800001500122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1800001500123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, true)
}

///|
test "toggle 25/1499999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800001500123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800001500122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: false, deadline: None, remaining: Some(1.0), focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 25/1499999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800001500123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800001500122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800001500122.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 25/1499999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800001500123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800001500122.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1800001500123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, true)
}

///|
test "tick 25/1500000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800001500123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800001500123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Rest, running: true, deadline: Some(1800001800123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800001500123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "toggle 25/1500000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800001500123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800001500123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Rest, running: false, deadline: None, remaining: Some(300000.0), focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800001500123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 25/1500000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800001500123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800001500123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800001500123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 25/1500000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800001500123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800001500123.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Rest, running: true, deadline: Some(1800001800123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800001500123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "tick 25/1799999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800001500123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800001800122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Rest, running: true, deadline: Some(1800001800123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800001500123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "toggle 25/1799999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800001500123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800001800122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Rest, running: false, deadline: None, remaining: Some(1.0), focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800001500123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 25/1799999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800001500123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800001800122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800001500123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 25/1799999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800001500123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800001800122.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Rest, running: true, deadline: Some(1800001800123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800001500123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "tick 25/1800000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800001500123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800001800123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800001500123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "toggle 25/1800000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800001500123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800001800123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800001500123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 25/1800000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800001500123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800001800123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800001500123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 25/1800000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800001500123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800001800123.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800001500123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "tick 25/86400000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800001500123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800086400123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800001500123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "toggle 25/86400000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800001500123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800086400123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800001500123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 25/86400000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800001500123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800086400123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800001500123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 25/86400000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800001500123.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800086400123.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800001500123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "resume 25" {
  let state = Journey::{ phase: Focus, running: false, deadline: None, remaining: Some(1499950.0), focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800000200123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1800001700073.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "start 45" {
  let state = Journey::{ phase: Idle, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }
  let result = reduce_journey(state, Start(1800000000123.0, 45.0, 5.0, "trip-1", "express", "night"))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1800002700123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "tick 45/0" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800002700123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800000000123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1800002700123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, true)
}

///|
test "toggle 45/0" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800002700123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800000000123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: false, deadline: None, remaining: Some(2700000.0), focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 45/0" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800002700123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800000000123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800000000123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 45/0" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800002700123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800000000123.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1800002700123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, true)
}

///|
test "tick 45/2699999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800002700123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800002700122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1800002700123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, true)
}

///|
test "toggle 45/2699999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800002700123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800002700122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: false, deadline: None, remaining: Some(1.0), focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 45/2699999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800002700123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800002700122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800002700122.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 45/2699999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800002700123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800002700122.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1800002700123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, true)
}

///|
test "tick 45/2700000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800002700123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800002700123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Rest, running: true, deadline: Some(1800003000123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800002700123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "toggle 45/2700000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800002700123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800002700123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Rest, running: false, deadline: None, remaining: Some(300000.0), focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800002700123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 45/2700000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800002700123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800002700123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800002700123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 45/2700000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800002700123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800002700123.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Rest, running: true, deadline: Some(1800003000123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800002700123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "tick 45/2999999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800002700123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800003000122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Rest, running: true, deadline: Some(1800003000123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800002700123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "toggle 45/2999999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800002700123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800003000122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Rest, running: false, deadline: None, remaining: Some(1.0), focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800002700123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 45/2999999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800002700123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800003000122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800002700123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 45/2999999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800002700123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800003000122.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Rest, running: true, deadline: Some(1800003000123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800002700123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "tick 45/3000000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800002700123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800003000123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800002700123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "toggle 45/3000000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800002700123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800003000123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800002700123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 45/3000000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800002700123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800003000123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800002700123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 45/3000000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800002700123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800003000123.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800002700123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "tick 45/86400000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800002700123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800086400123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800002700123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "toggle 45/86400000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800002700123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800086400123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800002700123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 45/86400000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800002700123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800086400123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800002700123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 45/86400000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800002700123.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800086400123.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800002700123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "resume 45" {
  let state = Journey::{ phase: Focus, running: false, deadline: None, remaining: Some(2699950.0), focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800000200123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1800002900073.0), remaining: None, focus_minutes: 45.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "start 60" {
  let state = Journey::{ phase: Idle, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }
  let result = reduce_journey(state, Start(1800000000123.0, 60.0, 5.0, "trip-1", "express", "night"))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1800003600123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "tick 60/0" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800003600123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800000000123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1800003600123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, true)
}

///|
test "toggle 60/0" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800003600123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800000000123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: false, deadline: None, remaining: Some(3600000.0), focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 60/0" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800003600123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800000000123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800000000123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 60/0" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800003600123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800000000123.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1800003600123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, true)
}

///|
test "tick 60/3599999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800003600123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800003600122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1800003600123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, true)
}

///|
test "toggle 60/3599999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800003600123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800003600122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: false, deadline: None, remaining: Some(1.0), focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 60/3599999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800003600123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800003600122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800003600122.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 60/3599999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800003600123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800003600122.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1800003600123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, true)
}

///|
test "tick 60/3600000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800003600123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800003600123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Rest, running: true, deadline: Some(1800003900123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800003600123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "toggle 60/3600000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800003600123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800003600123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Rest, running: false, deadline: None, remaining: Some(300000.0), focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800003600123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 60/3600000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800003600123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800003600123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800003600123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 60/3600000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800003600123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800003600123.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Rest, running: true, deadline: Some(1800003900123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800003600123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "tick 60/3899999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800003600123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800003900122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Rest, running: true, deadline: Some(1800003900123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800003600123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "toggle 60/3899999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800003600123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800003900122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Rest, running: false, deadline: None, remaining: Some(1.0), focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800003600123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 60/3899999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800003600123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800003900122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800003600123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 60/3899999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800003600123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800003900122.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Rest, running: true, deadline: Some(1800003900123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800003600123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "tick 60/3900000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800003600123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800003900123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800003600123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "toggle 60/3900000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800003600123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800003900123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800003600123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 60/3900000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800003600123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800003900123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800003600123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 60/3900000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800003600123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800003900123.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800003600123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "tick 60/86400000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800003600123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800086400123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800003600123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "toggle 60/86400000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800003600123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800086400123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800003600123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 60/86400000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800003600123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800086400123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800003600123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 60/86400000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800003600123.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800086400123.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800003600123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "resume 60" {
  let state = Journey::{ phase: Focus, running: false, deadline: None, remaining: Some(3599950.0), focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800000200123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1800003800073.0), remaining: None, focus_minutes: 60.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "start 90" {
  let state = Journey::{ phase: Idle, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }
  let result = reduce_journey(state, Start(1800000000123.0, 90.0, 5.0, "trip-1", "express", "night"))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1800005400123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "tick 90/0" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800005400123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800000000123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1800005400123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, true)
}

///|
test "toggle 90/0" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800005400123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800000000123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: false, deadline: None, remaining: Some(5400000.0), focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 90/0" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800005400123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800000000123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800000000123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 90/0" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800005400123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800000000123.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1800005400123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, true)
}

///|
test "tick 90/5399999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800005400123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800005400122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1800005400123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, true)
}

///|
test "toggle 90/5399999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800005400123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800005400122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: false, deadline: None, remaining: Some(1.0), focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 90/5399999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800005400123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800005400122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800005400122.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 90/5399999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800005400123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800005400122.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1800005400123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, true)
}

///|
test "tick 90/5400000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800005400123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800005400123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Rest, running: true, deadline: Some(1800005700123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800005400123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "toggle 90/5400000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800005400123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800005400123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Rest, running: false, deadline: None, remaining: Some(300000.0), focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800005400123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 90/5400000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800005400123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800005400123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800005400123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 90/5400000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800005400123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800005400123.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Rest, running: true, deadline: Some(1800005700123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800005400123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "tick 90/5699999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800005400123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800005700122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Rest, running: true, deadline: Some(1800005700123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800005400123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "toggle 90/5699999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800005400123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800005700122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Rest, running: false, deadline: None, remaining: Some(1.0), focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800005400123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 90/5699999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800005400123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800005700122.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800005400123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 90/5699999" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800005400123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800005700122.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Rest, running: true, deadline: Some(1800005700123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800005400123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "tick 90/5700000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800005400123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800005700123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800005400123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "toggle 90/5700000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800005400123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800005700123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800005400123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 90/5700000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800005400123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800005700123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800005400123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 90/5700000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800005400123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800005700123.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800005400123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "tick 90/86400000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800005400123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Tick(1800086400123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800005400123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "toggle 90/86400000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800005400123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800086400123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800005400123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "finish 90/86400000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800005400123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(1800086400123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800005400123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "advance 90/86400000" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(1800005400123.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = advance(state, 1800086400123.0)
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: Some(1800005400123.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "resume 90" {
  let state = Journey::{ phase: Focus, running: false, deadline: None, remaining: Some(5399950.0), focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Toggle(1800000200123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1800005600073.0), remaining: None, focus_minutes: 90.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(1800000000123.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "idle/tick" {
  let state = Journey::{ phase: Idle, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }
  let result = reduce_journey(state, Tick(1800000000123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Idle, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None })
  assert_eq(result is Keep, true)
}

///|
test "idle/toggle" {
  let state = Journey::{ phase: Idle, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }
  let result = reduce_journey(state, Toggle(1800000000123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Idle, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None })
  assert_eq(result is Keep, true)
}

///|
test "idle/finish" {
  let state = Journey::{ phase: Idle, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }
  let result = reduce_journey(state, Finish(1800000000123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None })
  assert_eq(result is Keep, false)
}

///|
test "finished/tick" {
  let state = Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }
  let result = reduce_journey(state, Tick(1800000000123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None })
  assert_eq(result is Keep, true)
}

///|
test "finished/toggle" {
  let state = Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }
  let result = reduce_journey(state, Toggle(1800000000123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None })
  assert_eq(result is Keep, true)
}

///|
test "finished/finish" {
  let state = Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }
  let result = reduce_journey(state, Finish(1800000000123.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None })
  assert_eq(result is Keep, false)
}

///|
test "timestamp 0" {
  let state = Journey::{ phase: Idle, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }
  let result = reduce_journey(state, Start(0.0, 25.0, 5.0, "trip-1", "express", "night"))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1500000.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(0.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "timestamp 2147483648" {
  let state = Journey::{ phase: Idle, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }
  let result = reduce_journey(state, Start(2147483648.0, 25.0, 5.0, "trip-1", "express", "night"))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(2148983648.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(2147483648.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "timestamp 4294967296" {
  let state = Journey::{ phase: Idle, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }
  let result = reduce_journey(state, Start(4294967296.0, 25.0, 5.0, "trip-1", "express", "night"))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(4296467296.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(4294967296.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "timestamp 9007199244740991" {
  let state = Journey::{ phase: Idle, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }
  let result = reduce_journey(state, Start(9007199244740991.0, 25.0, 5.0, "trip-1", "express", "night"))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(9007199246240991.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(9007199244740991.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "timestamp 9007199254740991" {
  let state = Journey::{ phase: Idle, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }
  let result = reduce_journey(state, Start(9007199254740991.0, 25.0, 5.0, "trip-1", "express", "night"))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(9007199256240992.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(9007199254740991.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "timestamp 9007199254740992" {
  let state = Journey::{ phase: Idle, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }
  let result = reduce_journey(state, Start(9007199254740992.0, 25.0, 5.0, "trip-1", "express", "night"))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(9007199256240992.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(9007199254740992.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "timestamp 123.5" {
  let state = Journey::{ phase: Idle, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }
  let result = reduce_journey(state, Start(123.5, 25.0, 5.0, "trip-1", "express", "night"))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1500123.5), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(123.5), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "negative zero start" {
  let state = Journey::{ phase: Idle, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: None, started_at: None, arrived_at: None, speed: None, scene: None }
  let result = reduce_journey(state, Start(-0.0, 25.0, 5.0, "trip-1", "express", "night"))
  @debug.assert_eq(result.value(state), Journey::{ phase: Focus, running: true, deadline: Some(1500000.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(-0.0), arrived_at: None, speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "negative zero finish" {
  let state = Journey::{ phase: Focus, running: true, deadline: Some(0.0), remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(-0.0), arrived_at: None, speed: Some("express"), scene: Some("night") }
  let result = reduce_journey(state, Finish(-0.0))
  @debug.assert_eq(result.value(state), Journey::{ phase: Finished, running: false, deadline: None, remaining: None, focus_minutes: 25.0, rest_minutes: 5.0, id: Some("trip-1"), started_at: Some(-0.0), arrived_at: Some(-0.0), speed: Some("express"), scene: Some("night") })
  assert_eq(result is Keep, false)
}

///|
test "UTF16 slice 80" {
  let actual = limit_text("a🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃", 80)
  assert_eq(actual.length(), 80)
  assert_eq(actual[79].to_int(), 55357)
}

///|
test "UTF16 slice 300" {
  let actual = limit_text("b🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃", 300)
  assert_eq(actual.length(), 300)
  assert_eq(actual[299].to_int(), 55357)
}
