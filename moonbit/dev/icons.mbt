///|
extern "js" fn playwright() -> @js.Promise[@js.Any] =
  #| () => import('@playwright/test')

///|
#external
type Browser

///|
impl @js.FromJs for Browser with fn from_js(value) = "%identity"

///|
#external
type Page

///|
impl @js.FromJs for Page with fn from_js(value) = "%identity"

///|
extern "js" fn launch_browser(
  playwright_module : @js.Any,
  options : @js.Any,
) -> @js.Promise[Browser] =
  #| (module, options) => module.chromium.launch(options)

///|
extern "js" fn Browser::new_page(self : Browser) -> @js.Promise[Page] =
  #| browser => browser.newPage({deviceScaleFactor:1})

///|
extern "js" fn Browser::close(self : Browser) -> @js.Promise[Unit] =
  #| browser => browser.close()

///|
extern "js" fn Page::viewport(self : Page, size : Int) -> @js.Promise[Unit] =
  #| (page, size) => page.setViewportSize({width:size, height:size})

///|
extern "js" fn Page::content(self : Page, html : String) -> @js.Promise[Unit] =
  #| (page, html) => page.setContent(html)

///|
extern "js" fn Page::screenshot(
  self : Page,
  path : String,
) -> @js.Promise[Unit] =
  #| (page, path) => page.screenshot({path})

///|
async fn icons() -> Unit {
  let source = read("public/favicon.svg")
  let mark = source.replace(
    old="<svg ",
    new="<svg x=\"8\" y=\"8\" width=\"48\" height=\"48\" ",
  )
  let svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\"><rect width=\"64\" height=\"64\" fill=\"#e5e5e5\"/>" +
    mark +
    "</svg>"
  mkdir("public/icons")
  let options = @js.new_object()
  if @env.get_env_var("CHROMIUM_PATH") is Some(path) {
    options._set("executablePath", @js.any(path))
  }
  let browser = launch_browser(playwright().wait(), options).wait()
  errdefer browser.close().wait()
  {
    let page = browser.new_page().wait()
    for
      (size, filename) in [
        (192, "app-192.png"),
        (512, "app-512.png"),
        (180, "apple-touch-icon.png"),
      ] {
      page.viewport(size).wait()
      page
      .content(
        "<html><head><style>html,body{margin:0;width:100%;height:100%;background:#e5e5e5}svg{display:block;width:100%;height:100%}svg svg{width:48px;height:48px}</style></head><body>" +
        svg +
        "</body></html>",
      )
      .wait()
      page.screenshot("public/icons/" + filename).wait()
    }
  }
  browser.close().wait()
  println("Rendered app icons from the existing train mark")
}
