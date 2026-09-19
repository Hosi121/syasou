///|
pub(all) enum Phase {
  Idle
  Focus
  Rest
  Finished
} derive(Eq, Debug)

///|
pub(all) struct Journey {
  phase : Phase
  running : Bool
  deadline : Double?
  remaining : Double?
  focus_minutes : Double
  rest_minutes : Double
  id : String?
  started_at : Double?
  arrived_at : Double?
  speed : String?
  scene : String?
} derive(Eq, Debug)

///|
pub(all) enum JourneyAction {
  Start(Double, Double, Double, String, String, String)
  Tick(Double)
  Toggle(Double)
  Finish(Double)
}

///|
// Changes describe immutable updates so adapters can retain object identity
// and optional property presence without exposing JS objects to the domain.
pub(all) enum JourneyChange {
  Keep
  Replace(Journey)
  Patch(Journey, write_arrival~ : Bool)
}

///|
pub fn JourneyChange::value(
  self : JourneyChange,
  previous : Journey,
) -> Journey {
  match self {
    Keep => previous
    Replace(next) | Patch(next, ..) => next
  }
}

///|
pub fn advance(state : Journey, now : Double) -> JourneyChange {
  guard state.running && state.deadline is Some(deadline) else { Keep }
  if now < deadline {
    return Keep
  }
  if state.phase == Focus {
    let rest_deadline = deadline + state.rest_minutes * 60000.0
    let next = if now < rest_deadline {
      {
        ..state,
        phase: Rest,
        deadline: Some(rest_deadline),
        remaining: None,
        arrived_at: Some(deadline),
      }
    } else {
      {
        ..state,
        phase: Finished,
        running: false,
        deadline: None,
        remaining: None,
        arrived_at: Some(deadline),
      }
    }
    Patch(next, write_arrival=true)
  } else {
    Patch(
      {
        ..state,
        phase: Finished,
        running: false,
        deadline: None,
        remaining: None,
      },
      write_arrival=false,
    )
  }
}

///|
pub fn reduce_journey(state : Journey, action : JourneyAction) -> JourneyChange {
  match action {
    Start(now, focus_minutes, rest_minutes, id, speed, scene) =>
      Replace({
        phase: Focus,
        running: true,
        deadline: if focus_minutes == 0.0 || focus_minutes.is_nan() {
          None
        } else {
          Some(now + focus_minutes * 60000.0)
        },
        remaining: None,
        focus_minutes,
        rest_minutes,
        id: Some(id),
        started_at: Some(now),
        arrived_at: None,
        speed: Some(speed),
        scene: Some(scene),
      })
    Finish(now) => {
      let arrived_at = match state.arrived_at {
        Some(_) => state.arrived_at
        None =>
          if state.phase == Focus {
            Some(number_min(now, state.deadline.unwrap_or(now)))
          } else {
            None
          }
      }
      Patch(
        {
          ..state,
          phase: Finished,
          running: false,
          deadline: None,
          remaining: None,
          arrived_at,
        },
        write_arrival=true,
      )
    }
    Tick(now) => advance(state, now)
    Toggle(now) => {
      let change = advance(state, now)
      let current = change.value(state)
      if current.phase != Focus && current.phase != Rest {
        return change
      }
      let write_arrival = match change {
        Patch(_, write_arrival~) => write_arrival
        _ => false
      }
      let next = if current.running {
        {
          ..current,
          running: false,
          deadline: None,
          remaining: current.deadline.map(d => number_max(0.0, d - now)),
        }
      } else {
        {
          ..current,
          running: true,
          deadline: current.remaining.map(r => now + r),
          remaining: None,
        }
      }
      Patch(next, write_arrival~)
    }
  }
}
