///|
impl @js.ToJs for SavedTravel with fn to_js(self) -> @js.Any = "%identity"

///|
impl @js.FromJs for SavedTravel with fn from_js(value : @js.Any) -> SavedTravel = "%identity"

///|
impl @js.Same for SavedTravel with fn same(a, b) {
  @js.same_host(@js.any(a), @js.any(b))
}

///|
impl @js.ToJs for TravelEvent with fn to_js(self) -> @js.Any = "%identity"

///|
impl @js.FromJs for TravelEvent with fn from_js(value : @js.Any) -> TravelEvent = "%identity"

///|
impl @js.ToJs for WindowRenderer with fn to_js(self) -> @js.Any = "%identity"

///|
impl @js.FromJs for WindowRenderer with fn from_js(value : @js.Any) -> WindowRenderer = "%identity"

///|
impl @js.ToJs for SoundEngine with fn to_js(self) -> @js.Any = "%identity"

///|
impl @js.FromJs for SoundEngine with fn from_js(value : @js.Any) -> SoundEngine = "%identity"

///|
impl @js.FromJs for VisualViewport with fn from_js(value : @js.Any) -> VisualViewport = "%identity"
