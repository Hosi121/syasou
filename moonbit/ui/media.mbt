///|
fn use_media(query : String) -> Bool {
  let subscribe = @view.use_callback(
    (listener : () -> Unit) => subscribe_media(query, listener),
    [d(query)],
  )
  @view.use_sync_external_store(subscribe, () => @dom.matchMedia(query).matches)
}

///|
fn subscribe_media(query : String, listener : () -> Unit) -> () -> Unit {
  let media = @dom.matchMedia(query)
  let callback = (_ : @dom.Event) => listener()
  media.addChangeListener(callback)
  () => media.removeChangeListener(callback)
}

///|
fn subscribe_visibility(listener : () -> Unit) -> () -> Unit {
  on_document("visibilitychange", listener)
}

///|
fn visible() -> Bool {
  !hidden()
}

///|
let compact_layout = "(max-width: 760px), (max-height: 520px) and (pointer: coarse)"
