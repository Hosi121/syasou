import { readFileSync, writeFileSync } from 'node:fs'
import { decode } from '../tests/contract/cases.mjs'

const fixtures = decode(JSON.parse(readFileSync(new URL('../tests/contract/interaction-fixtures.json', import.meta.url), 'utf8')))
const str = s => s === '\ud83d' ? '"🚃".unsafe_substring(start=0, end=1)' : s === '\ude83' ? '"🚃".unsafe_substring(start=1, end=2)' : JSON.stringify(s)
const num = n => Number.isNaN(n) ? '(0.0 / 0.0)' : n === Infinity ? '(1.0 / 0.0)' : n === -Infinity ? '(-1.0 / 0.0)' : Object.is(n, -0) ? '-0.0' : Number.isInteger(n) ? `${n}.0` : String(n)
const scalar = v => typeof v === 'number' ? num(v) : typeof v === 'string' ? str(v) : String(v)
const opt = v => v == null ? 'None' : `Some(${scalar(v)})`
const snake = s => s.replace(/[A-Z]/g, c => `_${c.toLowerCase()}`)
const grip = g => `TicketGrip::{ ${Object.entries(g).map(([k, v]) => `${k}: ${scalar(v)}`).join(', ')} }`
const journey = j => `Journey::{ phase: ${j.phase[0].toUpperCase() + j.phase.slice(1)}, running: ${j.running}, deadline: ${opt(j.deadline)}, remaining: ${opt(j.remaining)}, focus_minutes: ${num(j.focusMinutes)}, rest_minutes: ${num(j.restMinutes)}, id: ${opt(j.id)}, started_at: ${opt(j.startedAt)}, arrived_at: ${opt(j.arrivedAt)}, speed: ${opt(j.speed)}, scene: ${opt(j.scene)} }`
const checkNumber = (expr, expected) => `  assert_interaction_number(${expr}, ${num(expected)})\n`
const checkScalar = (expr, expected) => typeof expected === 'number' ? checkNumber(expr, expected) : `  assert_eq(${expr}, ${scalar(expected)})\n`
const checkFields = (expr, expected, optional = []) => Object.entries(expected).filter(([key]) => key !== 'extra').map(([key, value]) => {
  const access = `${expr}.${snake(key)}`
  if (key === 'phase') return `  @debug.assert_eq(${access}, ${value[0].toUpperCase() + value.slice(1)})\n`
  if (optional.includes(key)) return value == null ? `  assert_true(${access} is None)\n` : checkScalar(`${access}.unwrap()`, value)
  return checkScalar(access, value)
}).join('')

const tests = fixtures.filter(f => !f.failure).map(f => {
  const a = f.args, expected = f.expected.result
  let body = ''
  if (f.fn === 'migrateLegacyJourney') {
    body += `  let calls : Array[String] = []\n  let result = migrate_legacy_journey(${journey(a[0])}, ${str(a[1].speed)}, ${str(a[1].scene)}, () => { calls.push("id"); ${str(a[2])} }, () => { calls.push("now"); ${num(a[3])} })\n`
    body += `  @debug.assert_eq(calls, [${f.expected.calls.map(str).join(', ')}])\n`
    body += f.expected.same ? '  assert_true(result is None)\n' : '  let actual = result.unwrap()\n' + checkFields('actual', expected, ['deadline', 'remaining', 'id', 'startedAt', 'arrivedAt', 'speed', 'scene'])
  } else if (f.fn === 'journeyRemaining') {
    body += `  let actual = journey_remaining(${journey(a[0])}, ${num(a[1])})\n`
    body += expected === null ? '  assert_true(actual is None)\n' : checkNumber('actual.unwrap()', expected)
  } else {
    const args = a.map(v => typeof v === 'object' && v !== null ? grip(v) : scalar(v)).join(', ')
    body += `  let actual = ${snake(f.fn)}(${args})\n`
    if (Array.isArray(expected)) {
      body += `  assert_eq(actual.length(), ${expected.length})\n`
      for (const [i, ticket] of expected.entries()) body += checkFields(`actual[${i}]`, ticket, ['kind'])
    } else if (expected !== null && typeof expected === 'object') body += checkFields('actual', expected)
    else body += checkScalar('actual', expected)
  }
  return `///|\ntest ${str(f.name)} {\n${body}}\n`
})
const output = '// Generated from the frozen TypeScript interaction oracle. Run npm run fixtures:domain.\n\n' + `///|
fn assert_interaction_number(actual : Double, expected : Double) -> Unit raise {
  if expected.is_nan() {
    assert_true(actual.is_nan())
  } else {
    assert_eq(actual, expected)
    if expected == 0.0 { assert_eq(1.0 / actual, 1.0 / expected) }
  }
}

` + tests.join('\n')
const path = new URL('../moonbit/domain/interaction_fixtures_wbtest.mbt', import.meta.url)
if (process.argv.includes('--check')) {
  if (readFileSync(path, 'utf8') !== output) throw new Error('Interaction core tests drifted; run npm run fixtures:domain')
} else writeFileSync(path, output)
console.log(`${tests.length} interaction core tests generated from TypeScript fixtures; callback exceptions tested at the JS boundary`)
