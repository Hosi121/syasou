// Node operations only. Traversal, generation, validation and command policy
// are implemented by MoonBit in the other files of this package.

///|
#module("node:fs")
extern "js" fn read_text(path : String, encoding : String) -> String = "readFileSync"

///|
#module("node:fs")
extern "js" fn read_bytes(path : String) -> Bytes = "readFileSync"

///|
#module("node:fs")
extern "js" fn write_text(path : String, text : String) -> Unit = "writeFileSync"

///|
#module("node:fs")
extern "js" fn write_bytes(path : String, bytes : Bytes) -> Unit = "writeFileSync"

///|
#module("node:fs")
extern "js" fn entries(path : String) -> FixedArray[String] = "readdirSync"

///|
#module("node:fs")
extern "js" fn exists(path : String) -> Bool = "existsSync"

///|
#external
type Stat

///|
#module("node:fs")
extern "js" fn stat(path : String) -> Stat = "statSync"

///|
extern "js" fn Stat::is_directory(self : Stat) -> Bool =
  #| s => s.isDirectory()

///|
#module("node:fs")
extern "js" fn mkdir_options(path : String, options : @js.Any) -> Unit = "mkdirSync"

///|
#module("node:fs")
extern "js" fn copy_file(source : String, target : String) -> Unit = "copyFileSync"

///|
#module("node:fs")
extern "js" fn temporary_directory(prefix : String) -> String = "mkdtempSync"

///|
#module("node:fs")
extern "js" fn remove_options(path : String, options : @js.Any) -> Unit = "rmSync"

///|
#module("node:os")
extern "js" fn tmpdir() -> String = "tmpdir"

///|
#module("node:path")
extern "js" fn absolute(path : String) -> String = "resolve"

///|
#module("node:path")
extern "js" fn dirname(path : String) -> String = "dirname"

///|
#module("node:child_process")
extern "js" fn spawn(
  command : String,
  args : FixedArray[String],
  options : @js.Any,
) -> @js.Any = "spawnSync"

///|
extern "js" fn platform() -> String =
  #| () => process.platform

///|
extern "js" fn module_url() -> String =
  #| () => import.meta.url

///|
#external
type FileUrl

///|
#module("node:url")
extern "js" fn file_url(path : String) -> FileUrl = "pathToFileURL"

///|
extern "js" fn FileUrl::href(self : FileUrl) -> String =
  #| url => url.href

///|
#external
type Hash

///|
#module("node:crypto")
extern "js" fn create_hash(algorithm : String) -> Hash = "createHash"

///|
extern "js" fn Hash::update(self : Hash, bytes : Bytes) -> Hash =
  #| (hash, bytes) => hash.update(bytes)

///|
extern "js" fn Hash::digest(self : Hash, encoding : String) -> String =
  #| (hash, encoding) => hash.digest(encoding)

///|
#module("node:zlib")
extern "js" fn deflate(bytes : Bytes) -> Bytes = "deflateSync"

///|
#external
type Regex

///|
extern "js" fn regex(pattern : String, flags : String) -> Regex =
  #| (pattern, flags) => new RegExp(pattern, flags)

///|
extern "js" fn Regex::exec(self : Regex, input : String) -> @js.Any =
  #| (re, input) => re.exec(input)

///|
extern "js" fn json_pretty(value : @js.Any) -> String =
  #| value => JSON.stringify(value, null, 2)

///|
extern "js" fn wasm_imports(bytes : Bytes) -> FixedArray[@js.Any] =
  #| bytes => WebAssembly.Module.imports(new WebAssembly.Module(bytes, {builtins:['js-string'], importedStringConstants:'_'}))

///|
fn read(path : String) -> String {
  read_text(path, "utf8")
}

///|
fn hash(bytes : Bytes) -> String {
  create_hash("sha256").update(bytes).digest("hex")
}

///|
fn text_hash(text : String) -> String {
  hash(@utf8.encode(text))
}

///|
fn mkdir(path : String) -> Unit {
  let options = @js.new_object()
  options._set("recursive", @js.any(true))
  mkdir_options(path, options)
}

///|
fn remove(path : String) -> Unit {
  let options = @js.new_object()
  options._set("recursive", @js.any(true))
  options._set("force", @js.any(true))
  remove_options(path, options)
}

///|
fn fail(message : String) -> Unit {
  @js.throw_error(message)
}

///|
fn walk(path : String) -> Array[String] {
  let files = []
  for name in entries(path) {
    let child = path + "/" + name
    if stat(child).is_directory() {
      files.append(walk(child))
    } else {
      files.push(child)
    }
  }
  files
}

///|
fn matches(pattern : String, input : String) -> Bool {
  !@js.is_null(regex(pattern, "").exec(input))
}

///|
fn captures(pattern : String, input : String) -> Array[@js.Any] {
  let re = regex(pattern, "g")
  let result = []
  while true {
    let found = re.exec(input)
    if @js.is_null(found) {
      break
    }
    result.push(found)
  }
  result
}
