import assert from 'node:assert/strict'
import { fixtures as readFixtures } from './fixtures.mjs'
import { loadWasmContract } from './load.mjs'

function run(api, fixture) {
  const args = structuredClone(fixture.args), before = structuredClone(args), calls = []
  let result, error
  try {
    result = fixture.fn === 'migrateLegacyJourney'
      ? api[fixture.fn](args[0], args[1], () => { calls.push('id'); if (fixture.failure === 'id') throw new Error('id unavailable'); return args[2] }, () => { calls.push('now'); if (fixture.failure === 'now') throw new Error('clock unavailable'); return args[3] })
      : api[fixture.fn](...args)
  } catch (e) { error = { name: e.name, message: e.message } }
  assert.deepStrictEqual(args, before, `${fixture.name}: input mutation`)
  return { result, error, calls, same: result === args[0] }
}

const api = await loadWasmContract()
const fixtures = readFixtures('interaction-fixtures')
for (const fixture of fixtures) assert.deepStrictEqual(run(api, fixture), fixture.expected, fixture.name)
console.log(`${fixtures.length} interaction, saved journey migration and sample regressions passed`)
