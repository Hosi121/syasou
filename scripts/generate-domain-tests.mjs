import { readFileSync, writeFileSync } from 'node:fs'
import { decode } from '../tests/contract/cases.mjs'

const fixtures = JSON.parse(readFileSync(new URL('../tests/contract/fixtures.json', import.meta.url), 'utf8')).map(decode)
const string = value => JSON.stringify(value)
const number = value => Object.is(value, -0) ? '-0.0' : String(value).includes('.') ? String(value) : `${value}.0`
const option = value => value == null ? 'None' : `Some(${typeof value === 'string' ? string(value) : number(value)})`
const journey = j => `Journey::{ phase: ${j.phase[0].toUpperCase() + j.phase.slice(1)}, running: ${j.running}, deadline: ${option(j.deadline)}, remaining: ${option(j.remaining)}, focus_minutes: ${number(j.focusMinutes)}, rest_minutes: ${number(j.restMinutes)}, id: ${option(j.id)}, started_at: ${option(j.startedAt)}, arrived_at: ${option(j.arrivedAt)}, speed: ${option(j.speed)}, scene: ${option(j.scene)} }`
const action = a => a.type === 'start'
  ? `Start(${number(a.now)}, ${number(a.focusMinutes)}, ${number(a.restMinutes)}, ${string(a.id)}, ${string(a.speed)}, ${string(a.scene)})`
  : `${a.type[0].toUpperCase() + a.type.slice(1)}(${number(a.now)})`

const finiteNumbers = value => typeof value === 'number' ? Number.isFinite(value) : value && typeof value === 'object' ? Object.values(value).every(finiteNumbers) : true
const tests = fixtures.filter(f => (f.fn === 'journeyReducer' || f.fn === 'advanceJourney') && finiteNumbers(f)).map(f => `///|
test ${string(f.name)} {
  let state = ${journey(f.args[0])}
  let result = ${f.fn === 'journeyReducer' ? `reduce_journey(state, ${action(f.args[1])})` : `advance(state, ${number(f.args[1])})`}
  @debug.assert_eq(result.value(state), ${journey(f.result)})
  assert_eq(result is Keep, ${f.sharing.state})
}
`)
// Expected UTF-16 code units come from JS, not from the migrated implementation.
for (const [value, limit] of [['a' + '🚃'.repeat(80), 80], ['b' + '🚃'.repeat(300), 300]]) {
  const expected = value.slice(0, limit)
  tests.push(`///|
test "UTF16 slice ${limit}" {
  let actual = limit_text(${string(value)}, ${limit})
  assert_eq(actual.length(), ${expected.length})
  assert_eq(actual[${expected.length - 1}].to_int(), ${expected.charCodeAt(expected.length - 1)})
}
`)
}
const path = new URL('../moonbit/domain/fixtures_wbtest.mbt', import.meta.url)
const output = '// Generated from TypeScript oracle fixtures. Run npm run fixtures:domain.\n\n' + tests.join('\n')
if (process.argv.includes('--check')) {
  if (readFileSync(path, 'utf8') !== output) throw new Error('Generated MoonBit tests changed; run npm run fixtures:domain')
} else writeFileSync(path, output)
console.log(`${tests.length} MoonBit core tests generated from the source oracle`)
