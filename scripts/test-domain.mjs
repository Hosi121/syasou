import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { loadWasmContract } from './load-wasm-contract.mjs'
const domain = process.argv.includes('--wasm') ? await loadWasmContract() : await import('../src/generated/moonbit/bridge.js')
import { decode, sharing } from '../tests/contract/cases.mjs'
import { checkArtifacts } from './domain-artifacts.mjs'

checkArtifacts()
const fixtures = JSON.parse(readFileSync(new URL('../tests/contract/fixtures.json', import.meta.url), 'utf8'))
assert.ok(fixtures.length > 0)
for (const encoded of fixtures) {
  const fixture = decode(encoded)
  const before = structuredClone(fixture.args)
  const result = domain[fixture.fn](...fixture.args)
  assert.deepStrictEqual(result, fixture.result, fixture.name)
  assert.deepStrictEqual(sharing(result, fixture.args[0]), fixture.sharing, `${fixture.name}: object identity`)
  assert.deepStrictEqual(fixture.args, before, `${fixture.name}: input mutation`)
}
console.log(`${fixtures.length} domain fixtures passed, including object identity and immutability`)

const validators = JSON.parse(readFileSync(new URL('../tests/contract/validation-fixtures.json', import.meta.url), 'utf8')).map(decode)
for (const fixture of validators) {
  const before = structuredClone(fixture.args)
  assert.equal(domain[fixture.fn](...fixture.args), fixture.result, fixture.name)
  assert.deepStrictEqual(fixture.args, before, `${fixture.name}: input mutation`)
}
console.log(`${validators.length} storage validation fixtures passed`)
