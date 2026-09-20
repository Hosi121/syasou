///|
priv struct JourneyView {
  journey : @domain.Journey
  preferences : Preferences
  set_preferences : (Preferences) -> Unit
  remaining : Double?
  tickets : Array[@domain.Ticket]
  pending : String?
  save_error : Bool
  start : () -> Unit
  toggle : () -> Unit
  finish : () -> Unit
  acknowledge : () -> Unit
  welcome : () -> Unit
  edit : (String, String?, String?) -> Unit
}

///|
fn use_journey(note : String) -> JourneyView {
  let (preferences, set_preferences) = @react.use_state_lazy(read_preferences)
  let (travel, dispatch) = use_travel_reducer(() => {
    load_travel(preferences, note)
  })
  let journey = travel.journey()
  let (time, set_time) = @react.use_state_lazy(now)
  let (save_error, set_save_error) = @react.use_state(false)
  let note_ref = @react.use_ref(Some(note))
  observe(() => note_ref.set_current(Some(note)), [d(note)])
  observe(() => save_preferences(preferences), [d(preferences)])
  observe(() => set_save_error(!save_travel(travel)), [d(travel)])
  effect(
    () => {
      if !journey.running {
        return () => ()
      }
      let tick = () => {
        let time = now()
        set_time(time)
        dispatch(
          journey_event("tick", time, note_ref.get_current().unwrap_or("")),
        )
      }
      let timer = set_interval(tick, 500)
      let unsubscribe = on_document("visibilitychange", tick)
      () => {
        clear_interval(timer)
        unsubscribe()
      }
    },
    [d(journey.running)],
  )
  let start = () => {
    let time = now()
    set_time(time)
    dispatch(
      journey_event("start", time, note, attrs=[
        p("focusMinutes", preferences.focusMinutes()),
        p("restMinutes", preferences.restMinutes()),
        p("id", uuid()),
        p("speed", preferences.speed()),
        p("scene", preferences.scene()),
      ]),
    )
  }
  let toggle = () => {
    let time = now()
    set_time(time)
    dispatch(journey_event("toggle", time, note))
  }
  {
    journey,
    preferences,
    set_preferences,
    remaining: @domain.journey_remaining(journey, time),
    tickets: travel.tickets(),
    pending: travel.pending(),
    save_error,
    start,
    toggle,
    finish: () => dispatch(journey_event("finish", now(), note)),
    acknowledge: () => dispatch(travel_event("acknowledge-arrival", [])),
    welcome: () => dispatch(travel_event("welcome-ticket", [p("now", now())])),
    edit: (id, title, note) => dispatch(edit_event(id, title, note)),
  }
}
