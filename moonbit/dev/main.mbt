///|
fn main {
  let args = @env.args()
  // The same generated module also exports the artifact check for Wasm tests.
  if args.length() >= 2 && file_url(args[1]).href() == module_url() {
    match args.get(2).unwrap_or("help") {
      "moon" => {
        check_compiler()
        moon(args[3:].to_owned())
      }
      "check" => {
        check_artifacts()
        println(
          "MoonBit source and committed artifacts match (no compiler required)",
        )
      }
      "build" | "check-generated" as command => {
        check_compiler()
        moon(["build", "moonbit/dev", "--target", "js", "--release"])
        // Run the newly compiled CLI so edits to the generator take effect in
        // this invocation. Verification never overwrites the committed CLI.
        subprocess(node_executable(), [
          cli_build,
          if command == "build" {
            "generate"
          } else {
            "verify"
          },
        ])
      }
      "generate" => build(false)
      "verify" => build(true)
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
          "MoonBit development CLI: moon <args> | build | check | check-generated | fonts | icons | grain",
        )
      other => fail("Unknown command: " + other)
    }
  }
}
