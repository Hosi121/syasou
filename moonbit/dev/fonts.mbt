///|
fn source_text(directory : String) -> String {
  walk(directory)
  .filter(path => path.has_suffix(".mbt") || path.has_suffix(".html"))
  .map(read)
  .join("\n")
}

///|
fn fonts() -> Unit {
  let directory = temporary_directory(tmpdir() + "/syasou-fonts-")
  let destination = "public/fonts"
  mkdir(destination)
  // Capture host exceptions so cleanup also runs when pyftsubset fails.
  let result = @js.ffi_try(() => {
    let text_file = directory + "/characters.txt"
    write_text(text_file, source_text("src") + "\n" + source_text("moonbit"))
    for weight in [400, 500] {
      subprocess("pyftsubset", [
        "node_modules/@fontsource/shippori-mincho/files/shippori-mincho-japanese-\{weight}-normal.woff2",
        "--text-file=" + text_file,
        "--output-file=\{destination}/shippori-mincho-\{weight}.woff2",
        "--flavor=woff2",
        "--layout-features=*",
        "--name-IDs=*",
        "--name-legacy",
        "--name-languages=*",
      ])
    }
    subprocess("pyftsubset", [
      "node_modules/@fontsource/shippori-mincho/files/shippori-mincho-japanese-500-normal.woff2",
      "--text=車窓",
      "--output-file=" + destination + "/syasou-title.woff2",
      "--flavor=woff2",
      "--layout-features=*",
    ])
    copy_file(
      "node_modules/@fontsource/shippori-mincho/LICENSE",
      destination + "/Shippori-Mincho-LICENSE.txt",
    )
    @js.null()
  })
  remove(directory)
  if !result._get("ok").cast() {
    fail(result._get("value").to_string())
  }
  println("Prepared local Japanese UI fonts")
}
