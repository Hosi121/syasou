///|
fn[T] optional(value : @js.Any) -> T? {
  if @js.is_nullish(value) {
    None
  } else {
    Some(value.cast())
  }
}

///|
fn[T] nullable(value : T?) -> @js.Any {
  match value {
    Some(value) => @js.any(value)
    None => @js.null()
  }
}

///|
fn[T] undefined_or(value : T?) -> @js.Any {
  match value {
    Some(value) => @js.any(value)
    None => @js.undefined()
  }
}

///|
fn read_journey(value : @js.Any) -> @domain.Journey {
  let phase = match (value._get("phase").cast() : String) {
    "focus" => @domain.Focus
    "rest" => @domain.Rest
    "finished" => @domain.Finished
    _ => @domain.Idle
  }
  {
    phase,
    running: value._get("running").cast(),
    deadline: optional(value._get("deadline")),
    remaining: optional(value._get("remaining")),
    focus_minutes: value._get("focusMinutes").cast(),
    rest_minutes: value._get("restMinutes").cast(),
    id: optional(value._get("id")),
    started_at: optional(value._get("startedAt")),
    arrived_at: optional(value._get("arrivedAt")),
    speed: optional(value._get("speed")),
    scene: optional(value._get("scene")),
  }
}

///|
fn read_action(value : @js.Any) -> @domain.JourneyAction {
  let now : Double = value._get("now").cast()
  match (value._get("type").cast() : String) {
    "start" =>
      @domain.Start(
        now,
        value._get("focusMinutes").cast(),
        value._get("restMinutes").cast(),
        value._get("id").cast(),
        value._get("speed").cast(),
        value._get("scene").cast(),
      )
    "finish" => @domain.Finish(now)
    "tick" => @domain.Tick(now)
    _ => @domain.Toggle(now)
  }
}

///|
fn write_journey(source : @js.Any, change : @domain.JourneyChange) -> @js.Any {
  let (next, out, write_arrival) = match change {
    @domain.Keep => return source
    @domain.Replace(next) => {
      let out = @js.new_object()
      out._set("focusMinutes", @js.any(next.focus_minutes))
      out._set("restMinutes", @js.any(next.rest_minutes))
      out._set("id", undefined_or(next.id))
      out._set("startedAt", undefined_or(next.started_at))
      out._set("speed", undefined_or(next.speed))
      out._set("scene", undefined_or(next.scene))
      (next, out, false)
    }
    @domain.Patch(next, write_arrival~) =>
      (next, @js.object_assign(@js.new_object(), source), write_arrival)
  }
  let phase = match next.phase {
    @domain.Idle => "idle"
    @domain.Focus => "focus"
    @domain.Rest => "rest"
    @domain.Finished => "finished"
  }
  out._set("phase", @js.any(phase))
  out._set("running", @js.any(next.running))
  out._set("deadline", nullable(next.deadline))
  out._set("remaining", nullable(next.remaining))
  if write_arrival {
    out._set("arrivedAt", undefined_or(next.arrived_at))
  }
  out
}

///|
pub fn advance_journey(state : @js.Any, now : Double) -> @js.Any {
  write_journey(state, @domain.advance(read_journey(state), now))
}

///|
pub fn journey_reducer(state : @js.Any, action : @js.Any) -> @js.Any {
  write_journey(
    state,
    @domain.reduce_journey(read_journey(state), read_action(action)),
  )
}
