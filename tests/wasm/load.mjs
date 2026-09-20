import { existsSync, readFileSync } from 'node:fs'
import { checkArtifacts } from '../../scripts/generated/dev.js'

export async function loadWasmContract() {
  checkArtifacts()
  const directory = new URL('../../_build/wasm-gc/release/build/wasm_contract/', import.meta.url)
  const binary = new URL('wasm_contract.wasm', directory)
  const host = new URL('browser-host.mjs', directory)
  if (!existsSync(binary) || !existsSync(host)) throw new Error('Wasm tests require a local build. Run npm run build:moonbit first.')
  globalThis.window ??= { location: { search: '' } }
  const { imports } = await import(host.href)
  const closures = new WeakMap()
  const { instance } = await WebAssembly.instantiate(readFileSync(binary), {
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
