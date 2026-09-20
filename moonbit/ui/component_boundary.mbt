///|
fn[T : @js.FromJs] prop_option(props : @js.Any, key : String) -> T? {
  let value = props._get(key)
  if @js.is_nullish(value) {
    None
  } else {
    Some(value.cast())
  }
}

///|
pub fn contract_rail(props : @js.Any) -> @view.Element {
  rail_mark(stroke_width=prop_option(props, "strokeWidth").unwrap_or(1.4))
}

///|
pub fn contract_route(_props : @js.Any) -> @view.Element {
  route_map()
}

///|
pub fn contract_card(props : @js.Any) -> @view.Element {
  render_card({
    ticket: @bridge.read_ticket(props._get("ticket")),
    back: prop_option(props, "back").unwrap_or(false),
    rotation: prop_option(props, "rotation"),
    shine_x: prop_option(props, "shineX"),
    shine_opacity: prop_option(props, "shineOpacity"),
    on_title: optional_callback(props, "onTitleChange"),
    on_note: optional_callback(props, "onNoteChange"),
  })
}

///|
pub fn contract_settings(props : @js.Any) -> @view.Element {
  render_settings({
    preferences: props._get("preferences").cast(),
    on_change: @js.to_fn1(props._get("onChange")),
    active: props._get("active").cast(),
  })
}

///|
pub fn contract_landscape(props : @js.Any) -> @view.Element {
  render_landscape(props.cast())
}

///|
pub fn contract_opening(props : @js.Any) -> @view.Element {
  render_opening({
    ready: props._get("ready").cast(),
    leaving: props._get("leaving").cast(),
    failed: props._get("failed").cast(),
    on_enter: @js.to_fn0(props._get("onEnter")),
    on_guide: @js.to_fn0(props._get("onGuide")),
    on_complete: @js.to_fn0(props._get("onComplete")),
  })
}

///|
pub fn render_contract(name : String, props : @js.Any) -> String {
  let element = match name {
    "RailMark" => component("contract_rail", contract_rail, props)
    "RouteMap" => component("contract_route", contract_route, props)
    "TicketCard" => component("contract_card", contract_card, props)
    "Settings" => component("contract_settings", contract_settings, props)
    "Landscape" => component("contract_landscape", contract_landscape, props)
    "Opening" => component("contract_opening", contract_opening, props)
    _ => empty()
  }
  @view.render_static(element)
}

///|
fn optional_callback(props : @js.Any, key : String) -> ((String) -> Unit)? {
  let value = props._get(key)
  if @js.is_nullish(value) {
    None
  } else {
    Some(@js.to_fn1(value))
  }
}
