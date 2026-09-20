///|
test "only top-level Bool arguments need Wasm conversion" {
  assert_eq(
    boolean_parameters(
      "fn f(callback : (Bool, Array[Bool]) -> Bool, enabled : Bool, dimensions : (Int, Int), done : Bool) -> Bool =",
    ),
    [1, 3],
  )
  assert_eq(boolean_parameters("fn f() -> Bool ="), [])
}

///|
test "FFI conversion preserves source around multiple declarations" {
  let source =
    #|// 🚃 keep the UTF-16 offsets
    #|extern "js" fn Window::set(open : Bool) -> Unit =
    #|  #| open => {
    #|  #|   window.open = open
    #|  #| }
    #|
    #|#cfg(target="js")
    #|extern "js" fn now() -> Double = "Date" "now"
  let operations : Map[String, String] = Map([])
  let declarations = []
  let converted = convert_ffi(source, "host", operations, declarations)
  assert_true(
    converted.has_prefix(
      "// 🚃 keep the UTF-16 offsets\n#cfg(target=\"js\")\nextern",
    ),
  )
  assert_eq(operations["host_now"], "Date.now")
  assert_eq(
    operations["host_Window_set"],
    "(...args) => {args[0]=Boolean(args[0]);return (open => {\n  window.open = open\n})(...args)}",
  )
  assert_eq(declarations.length(), 2)
  assert_true(declarations[0].contains("extern \"wasm\" fn Window::set"))
  assert_true(declarations[0].has_suffix("\"syasou\" \"host_Window_set\""))
  let second : Map[String, String] = Map([])
  assert_eq(convert_ffi(converted, "host", second, []), converted)
  assert_eq(second, operations)
}

///|
test "PNG uses the standard CRC32 and big-endian chunk length" {
  assert_eq(crc32(b"123456789"), 0xcbf43926U)
  assert_eq(big_endian(0x12345678U), b"\x12\x34\x56\x78")
  assert_eq(png_chunk("IEND", b""), b"\x00\x00\x00\x00IEND\xae\x42\x60\x82")
}
