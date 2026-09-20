import { readFileSync, writeFileSync } from 'node:fs'
import { generateBrowserFFI } from './generate-browser-ffi.mjs'
import { moon } from './moon.mjs'

export function buildWasm() {
  const operations = generateBrowserFFI()
  moon(['fmt'])
  moon(['build', '--target', 'wasm-gc', '--release'])
  const wasm = readFileSync('_build/wasm-gc/release/build/wasm/wasm.wasm')
  const module = new WebAssembly.Module(wasm, { builtins: ['js-string'], importedStringConstants: '_' })
  const imports = WebAssembly.Module.imports(module).filter(item => item.module === 'syasou')
  const entries = imports.map(({ name }) => {
    if (!operations[name]) throw new Error(`Missing browser operation ${name}`)
    return `  ${JSON.stringify(name)}: (${operations[name]}),`
  })
  const host = `// Generated browser API imports; game and rendering logic execute in Wasm.\nexport const imports = {\n${entries.join('\n')}\n}\nexport function getImports() { return imports }\n`
  const contractPath = '_build/wasm-gc/release/build/wasm_contract/'
  const contractModule = new WebAssembly.Module(readFileSync(contractPath + 'wasm_contract.wasm'), { builtins: ['js-string'], importedStringConstants: '_' })
  const contractEntries = WebAssembly.Module.imports(contractModule).filter(i => i.module === 'syasou').map(({name}) => `  ${JSON.stringify(name)}: (${operations[name]}),`)
  writeFileSync(contractPath + 'browser-host.mjs', `export const imports = {\n${contractEntries.join('\n')}\n}\n`)
  return { 'app.wasm': wasm, 'browser-host.js': Buffer.from(host) }
}
