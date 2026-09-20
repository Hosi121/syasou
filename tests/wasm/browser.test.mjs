import assert from 'node:assert/strict'
import { rendererTrace, soundTrace, storageTrace } from './browser-harness.mjs'
import { fixtures } from './fixtures.mjs'
import { loadWasmContract } from './load.mjs'

const api = await loadWasmContract()
const construct = () => {
  const engine = api.createSound()
  return {
    enable: () => api.enableSound(engine),
    disable: () => api.disableSound(engine),
    update: (preferences, moving, open) => api.updateSound(engine, preferences, moving, open),
    dispose: () => api.disposeSound(engine),
  }
}
const results = {}
for (const failure of ['', 'reduced', 'no-webgl', 'shader-null', 'shader-compile', 'shader-throw', 'program-null', 'program-link', 'buffer-null', 'uniform-null']) {
  results[`renderer/${failure || 'normal'}`] = rendererTrace(api.createWindowRenderer, failure)
}
for (const mode of ['', 'unavailable', 'resume-reject', 'close-reject']) {
  results[`sound/${mode || 'normal'}`] = await soundTrace(construct, mode)
}
results.storage = storageTrace(api.readStorage, api.writeStorage)
const expected = fixtures('browser-fixtures')
assert.deepStrictEqual(Object.keys(results), Object.keys(expected))
for (const [name, result] of Object.entries(results)) assert.deepStrictEqual(result, expected[name], name)
console.log(`${Object.keys(results).length} browser API traces passed`)
