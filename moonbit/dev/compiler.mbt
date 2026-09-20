///|
let compiler_version : String = "v" + read(".moon-version").trim().to_owned()

///|
fn compiler() -> String {
  match @env.get_env_var("MOON_BIN") {
    Some(value) if value != "" => value
    _ => "moon"
  }
}

///|
fn process_options(command : String, capture : Bool) -> @js.Any {
  let options = @js.new_object()
  let env = @js.new_object()
  for key, value in @env.get_env_vars() {
    env._set(key, @js.any(value))
  }
  if command != "moon" {
    env._set("MOON_HOME", @js.any(absolute(dirname(command) + "/..")))
    let separator = if platform() == "win32" { ";" } else { ":" }
    env._set(
      "PATH",
      @js.any(
        dirname(command) + separator + @env.get_env_var("PATH").unwrap_or(""),
      ),
    )
  }
  options._set("env", env)
  options._set("encoding", @js.any("utf8"))
  options._set("stdio", @js.any(if capture { "pipe" } else { "inherit" }))
  options
}

///|
fn run(command : String, args : Array[String], options : @js.Any) -> String {
  let result = spawn(
    command,
    FixedArray::makei(args.length(), i => args[i]),
    options,
  )
  let error = result._get("error")
  if !@js.is_nullish(error) {
    fail(command + ": " + error.to_string())
  }
  let status = result._get("status")
  if @js.is_nullish(status) || status.cast() != 0 {
    let stderr = result._get("stderr")
    fail(
      command +
      " " +
      args.join(" ") +
      " failed\n" +
      (if @js.is_nullish(stderr) { "" } else { stderr.to_string() }),
    )
  }
  let stdout = result._get("stdout")
  if @js.is_nullish(stdout) {
    ""
  } else {
    stdout.cast()
  }
}

///|
fn moon(args : Array[String]) -> Unit {
  let command = compiler()
  run(command, args, process_options(command, false)) |> ignore
}

///|
fn check_compiler() -> Unit {
  let command = compiler()
  let moonc = if command == "moon" {
    "moonc"
  } else {
    dirname(command) + "/moonc"
  }
  let version = run(moonc, ["-v"], process_options(command, true))
  if !version.contains(compiler_version) {
    fail("Expected MoonBit " + compiler_version + "; got " + version)
  }
}

///|
fn subprocess(command : String, args : Array[String]) -> Unit {
  // Ordinary tools inherit the environment; MOON_HOME applies only to moon.
  let options = @js.new_object()
  options._set("stdio", @js.any("inherit"))
  run(command, args, options) |> ignore
}
