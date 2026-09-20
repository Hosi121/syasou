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

///|
pub fn embed_boot_guard(html : String, boot_code : String) -> String {
  let start_marker = "<!-- moonbit:boot-guard:start -->"
  let end_marker = "<!-- moonbit:boot-guard:end -->"
  let start = html.find(start_marker).unwrap()
  let end = html.find(end_marker).unwrap() + end_marker.length()
  html.unsafe_substring(start=0, end=start) +
  start_marker +
  "\n    <script>" +
  boot_code +
  "</script>\n    " +
  end_marker +
  html.unsafe_substring(start=end, end=html.length())
}
