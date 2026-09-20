import { readFileSync } from 'node:fs'
export async function loadWasmContract() {
  globalThis.window ??= { location: { search: '' } }
  const { imports } = await import('../_build/wasm-gc/release/build/wasm_contract/browser-host.mjs')
  const closures = new WeakMap()
  const { instance } = await WebAssembly.instantiate(readFileSync('_build/wasm-gc/release/build/wasm_contract/wasm_contract.wasm'), {
    syasou: imports,
    'moonbit:ffi': { make_closure(fn, capture) {
      let values = closures.get(fn)
      if (!values) closures.set(fn, values = new WeakMap())
      let callback = values.get(capture)
      if (!callback) values.set(capture, callback = fn.bind(null, capture))
      return callback
    } },
  }, { builtins: ['js-string'], importedStringConstants: '_' })
  return instance.exports
}
