///|
fn main {
  let args = @env.args()
  // The same generated module also exports the artifact check for Wasm tests.
  if args.length() >= 2 && file_url(args[1]).href() == module_url() {
    match args.get(2).unwrap_or("help") {
      "check" => {
        check_artifacts()
        println("MoonBit source and local artifacts match")
      }
      "build" => build()
      "grain" => {
        write_bytes("public/paper-grain.png", grain_png())
        println("Generated paper grain")
      }
      "fonts" => fonts()
      "icons" =>
        @js.run_async(async fn() noraise {
          icons() catch {
            error => fail(error.to_string())
          }
        })
      "help" =>
        println(
          "MoonBit development CLI: build | check | fonts | icons | grain",
        )
      other => fail("Unknown command: " + other)
    }
  }
}
