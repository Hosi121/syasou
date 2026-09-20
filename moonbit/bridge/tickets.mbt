///|
pub fn read_ticket(value : @js.Any) -> @domain.Ticket {
  {
    id: value._get("id").cast(),
    kind: optional(value._get("kind")),
    started_at: value._get("startedAt").cast(),
    arrived_at: value._get("arrivedAt").cast(),
    speed: value._get("speed").cast(),
    scene: value._get("scene").cast(),
    title: value._get("title").cast(),
    note: value._get("note").cast(),
  }
}

///|
fn read_travel(value : @js.Any) -> @domain.Travel {
  let tickets : Array[@js.Any] = value._get("tickets").cast()
  {
    journey: read_journey(value._get("journey")),
    tickets: tickets.map(read_ticket),
    pending_arrival_id: optional(value._get("pendingArrivalId")),
  }
}

///|
fn write_ticket(ticket : @domain.Ticket) -> @js.Any {
  let out = @js.new_object()
  out._set("id", @js.any(ticket.id))
  if ticket.kind is Some(kind) {
    out._set("kind", @js.any(kind))
  }
  out._set("startedAt", @js.any(ticket.started_at))
  out._set("arrivedAt", @js.any(ticket.arrived_at))
  out._set("speed", @js.any(ticket.speed))
  out._set("scene", @js.any(ticket.scene))
  out._set("title", @js.any(ticket.title))
  out._set("note", @js.any(ticket.note))
  out
}

///|
fn write_travel(source : @js.Any, change : @domain.TravelChange) -> @js.Any {
  guard change is @domain.Update(journey, tickets, pending) else { source }
  let out = @js.object_assign(@js.new_object(), source)
  out._set("journey", write_journey(source._get("journey"), journey))
  let originals : Array[@js.Any] = source._get("tickets").cast()
  let items = match tickets {
    @domain.KeepTickets => originals
    @domain.Prepend(ticket) => [write_ticket(ticket), ..originals]
    @domain.EditTickets(edits) =>
      edits.mapi((i, edit) => {
        match edit {
          None => originals[i]
          Some((title, note)) => {
            let item = @js.object_assign(@js.new_object(), originals[i])
            item._set("title", @js.any(title))
            item._set("note", @js.any(note))
            item
          }
        }
      })
  }
  out._set("tickets", @js.any(items))
  out._set("pendingArrivalId", nullable(pending))
  out
}

///|
pub fn restore_travel(state : @js.Any, now : Double, note : String) -> @js.Any {
  write_travel(state, @domain.restore(read_travel(state), now, note))
}

///|
pub fn travel_reducer(state : @js.Any, action : @js.Any) -> @js.Any {
  let event = match (action._get("type").cast() : String) {
    "welcome-ticket" => @domain.Welcome(action._get("now").cast())
    "acknowledge-arrival" => @domain.Acknowledge
    "edit-ticket" => {
      let changes = action._get("changes")
      @domain.Edit(
        action._get("id").cast(),
        optional(changes._get("title")),
        optional(changes._get("note")),
      )
    }
    _ =>
      @domain.JourneyEvent(
        read_action(action._get("action")),
        action._get("note").cast(),
      )
  }
  write_travel(state, @domain.reduce_travel(read_travel(state), event))
}
