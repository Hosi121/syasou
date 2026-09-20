import assert from 'node:assert/strict'
import { loadWasmContract } from './load.mjs'
import { fixtures as readFixtures, sharing } from './fixtures.mjs'

const domain = await loadWasmContract()
const fixtures = readFixtures('fixtures')
assert.ok(fixtures.length > 0)
for (const fixture of fixtures) {
  const before = structuredClone(fixture.args)
  const result = domain[fixture.fn](...fixture.args)
  assert.deepStrictEqual(result, fixture.result, fixture.name)
  assert.deepStrictEqual(sharing(result, fixture.args[0]), fixture.sharing, `${fixture.name}: object identity`)
  assert.deepStrictEqual(fixture.args, before, `${fixture.name}: input mutation`)
}
console.log(`${fixtures.length} domain fixtures passed, including object identity and immutability`)

const validators = readFixtures('validation-fixtures')
for (const fixture of validators) {
  const before = structuredClone(fixture.args)
  assert.equal(domain[fixture.fn](...fixture.args), fixture.result, fixture.name)
  assert.deepStrictEqual(fixture.args, before, `${fixture.name}: input mutation`)
}
console.log(`${validators.length} storage validation fixtures passed`)
