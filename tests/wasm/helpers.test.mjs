import assert from 'node:assert/strict'
import { fixtures } from './fixtures.mjs'
import { loadWasmContract } from './load.mjs'

const api = await loadWasmContract()
const expected = fixtures('ui-helpers-fixtures')
const times = [-Infinity, -60001, -1, -0, 0, .1, 999, 1000, 59999, 60000, 3600000, 9007199254740991, 1e25, Infinity, NaN]
const searches = ['', '?demo=1', '?demo=0', '?demo=01', '?demo=1&demo=0', '?demo=0&demo=1', '?%64emo=%31']
assert.deepStrictEqual(times.map(api.formatTime), expected.times)
assert.deepStrictEqual(searches.map(search => {
  const demo = api.isDemoSearch(search)
  return [demo, api.profileStorageKey('syasou.note.v1', demo)]
}), expected.profiles)
assert.deepStrictEqual(api.defaultPreferences(), expected.defaults)
assert.deepStrictEqual(api.emptyJourney(), expected.emptyJourney)
assert.deepStrictEqual(api.views(), expected.views)
console.log('25 duration, profile and initial-state regressions passed')
