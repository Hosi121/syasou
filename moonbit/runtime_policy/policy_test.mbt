///|
test "production rejects handwritten code, compatibility APIs and npm runtimes" {
  let rejected = @runtime_policy.unsupported_modules("/project", [
    "/project/src/generated/moonbit/bootstrap.js", "/project/src/generated/moonbit/browser-host.js",
    "/project/src/generated/moonbit/bridge.js", "/project/src/lib/journey.ts", "/project/src/screen.jsx",
    "/project/node_modules/react/index.js", "/project/src/entry.mts",
  ])
  assert_eq(rejected, [
    "/project/src/generated/moonbit/bridge.js", "/project/src/lib/journey.ts", "/project/src/screen.jsx",
    "/project/node_modules/react/index.js", "/project/src/entry.mts",
  ])
}

///|
test "asset queries and Vite virtual helpers are not application code" {
  assert_eq(
    @runtime_policy.unsupported_modules("/project", [
      "/project/src/generated/moonbit/bootstrap.js?v=abc", "/project/src/generated/moonbit/app.wasm?url",
      "/project/src/world.css", "/project/index.html", "\u0000vite/preload-helper.js",
      "/project/src/hidden.ts?raw=false",
    ]),
    ["/project/src/hidden.ts?raw=false"],
  )
}

///|
test "Windows module paths have the same policy" {
  assert_eq(
    @runtime_policy.unsupported_modules("C:\\project", [
      "C:\\project\\src\\generated\\moonbit\\bootstrap.js", "C:\\project\\src\\main.ts",
    ]),
    ["C:\\project\\src\\main.ts"],
  )
}
