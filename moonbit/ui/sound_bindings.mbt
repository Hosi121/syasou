///|
#external
priv type SoundEngine

///|
fn create_sound() -> SoundEngine raise {
  @js.try_sync(() => @bridge.create_sound()).cast()
}

///|
fn SoundEngine::update(
  self : SoundEngine,
  preferences : Preferences,
  moving : Bool,
  open : Bool,
) -> Unit {
  @bridge.update_sound(@js.any(self), @js.any(preferences), moving, open)
}

///|
fn SoundEngine::update_checked(
  self : SoundEngine,
  preferences : Preferences,
  moving : Bool,
  open : Bool,
) -> Unit raise {
  @js.try_sync(() => {
    self.update(preferences, moving, open)
    @js.undefined()
  })
  |> ignore
}

///|
fn SoundEngine::enable(self : SoundEngine) -> @js.Promise[Unit] {
  @bridge.enable_sound(@js.any(self))
}

///|
fn SoundEngine::disable(self : SoundEngine) -> @js.Promise[Unit] {
  @bridge.disable_sound(@js.any(self))
}

///|
fn SoundEngine::dispose(self : SoundEngine) -> Unit {
  @bridge.dispose_sound(@js.any(self))
}
