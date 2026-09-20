import wasmUrl from './generated/moonbit/app.wasm?url'
import { imports } from './generated/moonbit/browser-host.js'

type Application = WebAssembly.Exports & { start(): Promise<void> }

export async function start() {
  // Keep listener identities stable across add/remove calls. Weak keys let the
  // browser collect a callback and its MoonBit captures together.
  const closures = new WeakMap<Function, WeakMap<object, Function>>()
  const host = {
    syasou: imports,
    'moonbit:ffi': {
      make_closure(fn: Function, capture: object) {
        let captures = closures.get(fn)
        if (!captures) closures.set(fn, captures = new WeakMap())
        let callback = captures.get(capture)
        if (!callback) captures.set(capture, callback = fn.bind(null, capture))
        return callback
      },
    },
  }
  const options = { builtins: ['js-string'], importedStringConstants: '_' }
  const response = await fetch(wasmUrl)
  if (!response.ok) throw new Error(`Wasm download failed: ${response.status}`)
  const { instance } = await WebAssembly.instantiateStreaming(response, host, options)
  await (instance.exports as Application).start()
}
