import { readFileSync, writeFileSync } from 'node:fs'
import assert from 'node:assert/strict'
import { rendererTrace, soundTrace, storageTrace } from '../tests/contract/browser-harness.mjs'
import { encode, decode } from '../tests/contract/cases.mjs'
import { registerHooks } from 'node:module'

// Node's TS erasure does not resolve Vite's extensionless TS imports.
// This resolver is confined to the contract runner, never the shipped app.
registerHooks({ resolve(specifier, context, nextResolve) {
  try { return nextResolve(specifier, context) } catch (error) {
    if (error.code === 'ERR_MODULE_NOT_FOUND' && specifier.startsWith('.') && context.parentURL?.endsWith('.ts') && !/\.[a-z]+$/i.test(specifier)) {
      return nextResolve(`${specifier}.ts`, context)
    }
    throw error
  }
} })

const source = process.argv.includes('--generate') || process.argv.includes('--check-oracle')
const check = process.argv.includes('--check-oracle')
globalThis.window = { location: { search: '' } }
const originalSound = await import('../tests/contract/oracle/sound.ts')
const originalWindow = await import('../tests/contract/oracle/windowRenderer.ts')
const originalStorage = await import('../tests/contract/oracle/utils.ts')
const actualSound = source ? originalSound : await import('../src/lib/sound.ts')
const actualWindow = source ? originalWindow : await import('../src/lib/windowRenderer.ts')
const actualStorage = source ? originalStorage : await import('../src/lib/utils.ts')
const construct = () => new actualSound.TrainSound()
const results = {}
for (const failure of ['', 'reduced', 'no-webgl', 'shader-null', 'shader-compile', 'shader-throw', 'program-null', 'program-link', 'buffer-null', 'uniform-null']) results[`renderer/${failure || 'normal'}`] = rendererTrace(actualWindow.createWindowRenderer, failure)
for (const mode of ['', 'unavailable', 'resume-reject', 'close-reject']) results[`sound/${mode || 'normal'}`] = await soundTrace(construct, mode)
results.storage = storageTrace(actualStorage.readStorage, actualStorage.writeStorage)
const path = new URL('../tests/contract/browser-fixtures.json', import.meta.url)
if (source && !check) writeFileSync(path, JSON.stringify(encode(results), null, 2) + '\n')
else {
  const expected = decode(JSON.parse(readFileSync(path, 'utf8')))
  for (const [name, result] of Object.entries(results)) assert.deepStrictEqual(result, expected[name], name)
}
console.log(`${Object.keys(results).length} ${source ? 'source' : 'MoonBit'} browser API traces ${source && !check ? 'captured' : 'matched'}`)
