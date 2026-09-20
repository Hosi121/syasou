///|
#cfg(target="js")
extern "js" fn image_decode(source : String) -> @js.Promise[Unit] =
  #| source => { const image = new Image(); image.src = source; return image.decode(); }

///|
#cfg(target="js")
extern "js" fn font_load(font : String, sample : String) -> @js.Promise[Unit] =
  #| (font, sample) => document.fonts.load(font, sample).then(() => {})

///|
async fn all_resources(resources : Array[@js.Promise[Unit]]) -> Unit {
  @js.Promise::all(resources).wait() |> ignore
}

///|
async fn settle_resources(resources : Array[@js.Promise[Unit]]) -> Unit {
  @js.Promise::allSettled(resources).wait() |> ignore
}

///|
fn launch(task : async () -> Unit noraise) -> Unit {
  @js.promisify0(async fn() { task() })() |> ignore
}
