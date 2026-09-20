///|
// Existing date bindings use Int for Date.now; preserve epoch milliseconds as
// Double at this boundary. DOM overloads below retain options missing upstream.
extern "js" fn now() -> Double = "Date" "now"

///|
fn uuid() -> String {
  @crypto.Crypto::get().randomUUID()
}

///|
extern "js" fn hidden() -> Bool =
  #| () => document.hidden

///|
extern "js" fn focus(node : @dom.Element) -> Unit =
  #| node => node.focus({preventScroll:true})

///|
fn focus_selector(selector : String) -> Unit {
  if @dom.document().querySelector(selector) is Some(node) {
    focus(node)
  }
}

///|
fn set_timeout(callback : () -> Unit, delay : Int) -> Int {
  @dom.window().setTimeout(callback, delay)
}

///|
fn clear_timeout(timer : Int) -> Unit {
  @dom.window().clearTimeout(timer)
}

///|
fn set_interval(callback : () -> Unit, delay : Int) -> Int {
  @dom.window().setInterval(callback, delay)
}

///|
fn clear_interval(timer : Int) -> Unit {
  @dom.window().clearInterval(timer)
}

///|
fn frame(callback : () -> Unit) -> Unit {
  @dom.window().requestAnimationFrame(_ => callback()) |> ignore
}

///|
extern "js" fn microtask(callback : () -> Unit) -> Unit =
  #| callback => queueMicrotask(callback)

///|
fn on_document(name : String, callback : () -> Unit) -> () -> Unit {
  let listener = (_event : @js.Any) => callback()
  @dom.document().addEventListener(name, listener)
  () => @dom.document().removeEventListener(name, listener)
}

///|
extern "js" fn on_window(name : String, callback : () -> Unit) -> () -> Unit =
  #| (name, callback) => { window.addEventListener(name, callback); return () => window.removeEventListener(name, callback); }

///|
extern "js" fn reload() -> Unit =
  #| () => location.reload()

///|
extern "js" fn formatted_ticket_date(time : Double) -> String =
  #| time => new Intl.DateTimeFormat('en-GB', {day:'2-digit',month:'short',year:'2-digit'}).format(time)

///|
extern "js" fn ticket_time(time : Double) -> String =
  #| time => new Intl.DateTimeFormat('en-GB', {hour:'2-digit',minute:'2-digit',hour12:false}).format(time)

///|
fn printed_date() -> String {
  let date = @date.Date::new()
  let year = date.get_full_year().to_string()
  "'" +
  year.unsafe_substring(start=year.length() - 2, end=year.length()) +
  " \{date.get_month() + 1}/\{date.get_date()}"
}

///|
fn format_time(milliseconds : Double) -> String {
  @domain.format_time(milliseconds)
}

///|
#external
pub type UiEvent

///|
extern "js" fn UiEvent::prevent(self : UiEvent) -> Unit =
  #| event => event.preventDefault()

///|
extern "js" fn UiEvent::stop(self : UiEvent) -> Unit =
  #| event => event.stopPropagation()

///|
extern "js" fn UiEvent::value(self : UiEvent) -> String =
  #| event => event.target.value

///|
extern "js" fn UiEvent::number(self : UiEvent) -> Double =
  #| event => Number(event.target.value)

///|
extern "js" fn number_value(value : String) -> Double =
  #| value => Number(value)

///|
fn ticket_date(time : Double) -> String {
  formatted_ticket_date(time).to_upper()
}
