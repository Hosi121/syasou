///|
// Vite passes its resolved production graph. Host-generated virtual modules
// and non-code assets are allowed; authored JS/TS and npm runtimes are not.
pub fn unsupported_modules(
  root : String,
  modules : Array[String],
) -> Array[String] {
  let root = root.replace_all(old="\\", new="/")
  let generated = root + "/src/generated/moonbit/"
  modules.filter(id => {
    let normalized = id.replace_all(old="\\", new="/")
    let file = match normalized.split_once("?") {
      Some((file, _)) => file.to_owned()
      None => normalized
    }
    if file.has_prefix("\u0000") {
      false
    } else if file == generated + "bootstrap.js" ||
      file == generated + "browser-host.js" {
      false
    } else {
      [".js", ".mjs", ".cjs", ".ts", ".mts", ".cts", ".tsx", ".jsx"].any(suffix => {
        file.has_suffix(suffix)
      })
    }
  })
}
