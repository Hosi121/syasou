///|
priv struct SoundView {
  enabled : Bool
  busy : Bool
  error : String
  toggle : () -> Unit
}

///|
fn use_sound(
  preferences : Preferences,
  moving : Bool,
  window_open : Bool,
) -> SoundView {
  let engine : @view.ViewRef[SoundEngine] = @view.use_ref(None)
  let busy_ref = @view.use_ref(Some(false))
  let (enabled, set_enabled) = @view.use_state(false)
  let (busy, set_busy) = @view.use_state(false)
  let (error, set_error) = @view.use_state("")
  observe(
    () => {
      if engine.get_current() is Some(sound) {
        sound.update(preferences, moving, window_open)
      }
    },
    [d(preferences), d(moving), d(window_open)],
  )
  effect(
    () => {
      () => {
        if engine.get_current() is Some(sound) {
          sound.dispose()
        }
        engine.set_current(None)
      }
    },
    [],
  )
  let toggle = () => {
    if busy_ref.get_current().unwrap_or(false) {
      return
    }
    busy_ref.set_current(Some(true))
    set_busy(true)
    set_error("")
    launch(async fn() noraise {
      defer {
        busy_ref.set_current(Some(false))
        set_busy(false)
      }
      try {
        let sound = match engine.get_current() {
          Some(sound) => sound
          None => {
            let sound = create_sound()
            engine.set_current(Some(sound))
            sound
          }
        }
        sound.update_checked(preferences, moving, window_open)
        if enabled {
          sound.disable().wait()
        } else {
          sound.enable().wait()
        }
        set_enabled(!enabled)
      } catch {
        _ => {
          set_error(
            "音を再生できませんでした。もう一度お試しください。",
          )
          if engine.get_current() is Some(sound) {
            sound.dispose()
          }
          engine.set_current(None)
          set_enabled(false)
        }
      }
    })
  }
  { enabled, busy, error, toggle, }
}
