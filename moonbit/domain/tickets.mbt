///|
pub(all) struct Ticket {
  id : String
  kind : String?
  started_at : Double
  arrived_at : Double
  speed : String
  scene : String
  title : String
  note : String
} derive(Eq, Debug)

///|
pub(all) struct Travel {
  journey : Journey
  tickets : Array[Ticket]
  pending_arrival_id : String?
}

///|
pub(all) enum TravelAction {
  JourneyEvent(JourneyAction, String)
  Welcome(Double)
  Acknowledge
  Edit(String, String?, String?)
}

///|
pub(all) enum TicketChange {
  KeepTickets
  Prepend(Ticket)
  EditTickets(Array[(String, String)?])
}

///|
pub(all) enum TravelChange {
  KeepTravel
  Update(JourneyChange, TicketChange, String?)
}

///|
// JavaScript slices by UTF-16 code unit, including at a surrogate boundary.
pub fn limit_text(text : String, limit : Int) -> String {
  text.unsafe_substring(start=0, end=text.length().min(limit))
}

///|
// ECMA-262 WhiteSpace + LineTerminator. MoonBit's Unicode trim also recognizes
// characters such as U+0085, which the existing JavaScript title does not trim.
fn js_whitespace(code : UInt16) -> Bool {
  match code.to_int() {
    0x09
    | 0x0A
    | 0x0B
    | 0x0C
    | 0x0D
    | 0x20
    | 0xA0
    | 0x1680
    | 0x2000
    | 0x2001
    | 0x2002
    | 0x2003
    | 0x2004
    | 0x2005
    | 0x2006
    | 0x2007
    | 0x2008
    | 0x2009
    | 0x200A
    | 0x2028
    | 0x2029
    | 0x202F
    | 0x205F
    | 0x3000
    | 0xFEFF => true
    _ => false
  }
}

///|
fn title_from_note(note : String) -> String {
  let mut start = 0
  let mut end = note.length()
  while start < end && js_whitespace(note[start]) {
    start += 1
  }
  while end > start && js_whitespace(note[end - 1]) {
    end -= 1
  }
  let mut line_end = start
  while line_end < end && note[line_end].to_int() != 10 {
    line_end += 1
  }
  limit_text(note.unsafe_substring(start~, end=line_end), 80)
}

///|
fn collect_arrival(
  journey : Journey,
  tickets : Array[Ticket],
  note : String,
) -> Ticket? {
  guard journey.id is Some(id) && id != "" else { None }
  guard journey.started_at is Some(started_at) else { None }
  guard journey.arrived_at is Some(arrived_at) else { None }
  if tickets.any(t => t.id == id) {
    return None
  }
  Some({
    id,
    kind: None,
    started_at,
    arrived_at: number_max(started_at, arrived_at),
    speed: journey.speed.unwrap_or("local"),
    scene: journey.scene.unwrap_or("mist"),
    title: title_from_note(note),
    note: limit_text(note, 300),
  })
}

///|
fn arrival_change(
  state : Travel,
  change : JourneyChange,
  note : String,
  force~ : Bool,
) -> TravelChange {
  match collect_arrival(change.value(state.journey), state.tickets, note) {
    Some(ticket) => Update(change, Prepend(ticket), Some(ticket.id))
    None =>
      match change {
        Keep =>
          if force {
            Update(Keep, KeepTickets, state.pending_arrival_id)
          } else {
            KeepTravel
          }
        _ => Update(change, KeepTickets, state.pending_arrival_id)
      }
  }
}

///|
pub fn restore(state : Travel, now : Double, note : String) -> TravelChange {
  arrival_change(state, advance(state.journey, now), note, force=true)
}

///|
pub fn reduce_travel(state : Travel, action : TravelAction) -> TravelChange {
  match action {
    JourneyEvent(action, note) =>
      arrival_change(
        state,
        reduce_journey(state.journey, action),
        note,
        force=false,
      )
    Acknowledge => Update(Keep, KeepTickets, None)
    Edit(id, title, note) => {
      let edits = state.tickets.map(t => {
        if t.id == id {
          Some(
            (
              limit_text(title.unwrap_or(t.title), 80),
              limit_text(note.unwrap_or(t.note), 300),
            ),
          )
        } else {
          None
        }
      })
      Update(Keep, EditTickets(edits), state.pending_arrival_id)
    }
    Welcome(now) => {
      if state.pending_arrival_id is Some(id) && id != "" {
        return KeepTravel
      }
      for ticket in state.tickets {
        if ticket.kind == Some("welcome") {
          return Update(Keep, KeepTickets, Some(ticket.id))
        }
      }
      let ticket : Ticket = {
        id: "welcome-v1",
        kind: Some("welcome"),
        started_at: now,
        arrived_at: now,
        speed: "local",
        scene: "mist",
        title: "はじめての窓辺",
        note: "車窓へ、ようこそ。\nこれは、旅のしおりをめくった記念の一枚。\n\n次の切符には、あなたが進めたことを。\nどうぞ、自分のペースで。",
      }
      Update(Keep, Prepend(ticket), Some(ticket.id))
    }
  }
}
