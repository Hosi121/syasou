///|
let output_dir : String = "src/generated/moonbit/"

///|
let js_artifacts : Array[(String, String)] = [
  (output_dir + "bootstrap.js", "bootstrap/bootstrap.js"),
  (output_dir + "boot-guard.js", "boot_guard/boot_guard.js"),
  (output_dir + "runtime-policy.js", "runtime_policy/runtime_policy.js"),
]

///|
fn artifact_names() -> Array[String] {
  let names = js_artifacts.map(pair => pair.0)
  names.push(output_dir + "app.wasm")
  names.push(output_dir + "browser-host.js")
  names
}

///|
fn source_digest() -> String {
  let files = walk("moonbit").filter(path => {
    path.has_suffix(".mbt") || path.has_suffix("/moon.pkg")
  })
  files.push("moon.mod")
  files.push(".moon-version")
  files.sort()
  text_hash(
    files.map(path => path + "\u0000" + hash(read_bytes(path)) + "\n").join(""),
  )
}

///|
pub fn check_artifacts() -> Unit {
  let manifest = @js.json_parse(read(output_dir + "build.json"))
  if manifest._get("source").to_string() != source_digest() {
    fail("MoonBit source changed. Run npm run build:moonbit.")
  }
  for path in artifact_names() {
    if manifest._get("artifacts")._get(path).to_string() !=
      hash(read_bytes(path)) {
      fail("Generated " + path + " changed. Run npm run build:moonbit.")
    }
  }
}

///|
fn output(path : String, bytes : Bytes) -> Unit {
  if !exists(path) || read_bytes(path) != bytes {
    mkdir(dirname(path))
    write_bytes(path, bytes)
  }
}

///|
fn generated_host(bytes : Bytes, operations : Map[String, String]) -> String {
  let lines = []
  for item in wasm_imports(bytes) {
    if item._get("module").to_string() != "syasou" {
      continue
    }
    let name = item._get("name").to_string()
    let body = match operations.get(name) {
      Some(body) => body
      None => {
        fail("Missing browser operation " + name)
        ""
      }
    }
    lines.push("  " + @js.json_stringify(@js.any(name)) + ": (" + body + "),")
  }
  "export const imports = {\n" + lines.join("\n") + "\n}\n"
}

///|
fn build() -> Unit {
  check_compiler()
  let operations = generate_ffi()
  moon(["fmt"])
  moon(["build", "--target", "wasm-gc", "--release"])
  moon(["build", "--target", "js", "--release"])
  let outputs : Array[(String, Bytes)] = js_artifacts.map(pair => {
    (pair.0, read_bytes("_build/js/release/build/" + pair.1))
  })
  let wasm = read_bytes("_build/wasm-gc/release/build/wasm/wasm.wasm")
  let host = "// Generated browser API imports; game and rendering logic execute in Wasm.\n" +
    generated_host(wasm, operations) +
    "export function getImports() { return imports }\n"
  outputs.push((output_dir + "app.wasm", wasm))
  outputs.push((output_dir + "browser-host.js", @utf8.encode(host)))
  let test_dir = "_build/wasm-gc/release/build/wasm_contract/"
  write_text(
    test_dir + "browser-host.mjs",
    generated_host(read_bytes(test_dir + "wasm_contract.wasm"), operations),
  )
  let hashes = @js.new_object()
  for (path, bytes) in outputs {
    hashes._set(path, @js.any(hash(bytes)))
    output(path, bytes)
  }
  let manifest = @js.new_object()
  manifest._set("compiler", @js.any(compiler_version))
  manifest._set("source", @js.any(source_digest()))
  manifest._set("artifacts", hashes)
  output(output_dir + "build.json", @utf8.encode(json_pretty(manifest) + "\n"))
  println("Generated MoonBit application and browser bindings")
}
