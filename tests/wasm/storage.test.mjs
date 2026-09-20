import assert from 'node:assert/strict'
import { loadWasmContract } from './load.mjs'

const api = await loadWasmContract()
const saved = new Map([['travel', JSON.stringify({ journey: api.emptyJourney(), tickets: [], pendingArrivalId: null })]])
globalThis.localStorage = {
  getItem: key => saved.get(key) ?? null,
  setItem: (key, value) => saved.set(key, value),
}
// A nullable fallback must not prevent a valid save from being read. This is a
// regression for the pinned compiler's captured, nullable externref behavior.
const restored = api.readStorage('travel', null, api.isTravelState)
assert.deepEqual(restored, { journey: api.emptyJourney(), tickets: [], pendingArrivalId: null })
assert.equal(api.readStorage('missing', null, api.isTravelState), null)
assert.equal(api.writeStorage('null', null), true)
assert.equal(saved.get('null'), 'null')
assert.equal(api.readStorage('null', 'fallback', value => value === null), null)
console.log('Wasm nullable persistence boundary passed')
