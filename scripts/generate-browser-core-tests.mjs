import { readFileSync, writeFileSync } from 'node:fs'
import { decode } from '../tests/contract/cases.mjs'

const read = name => decode(JSON.parse(readFileSync(new URL(`../tests/contract/${name}-fixtures.json`, import.meta.url), 'utf8')))
const validations = read('validation'), browser = read('browser')
const string = JSON.stringify
const number = n => Number.isNaN(n) ? '(0.0 / 0.0)' : n === Infinity ? '(1.0 / 0.0)' : n === -Infinity ? '(-1.0 / 0.0)' : Object.is(n, -0) ? '-0.0' : Number.isInteger(n) ? `${n}.0` : String(n)
const field = value => value === undefined ? 'Missing' : value === null ? 'Null' : typeof value === 'boolean' ? `Flag(${value})` : typeof value === 'number' ? `Numeric(${number(value)})` : typeof value === 'string' ? `Text(${string(value)})` : 'Other'
const record = value => {
  const object = value !== null && typeof value === 'object'
  return `Record::{ is_object: ${object}, fields: Map([${object ? Object.entries(value).map(([key, value]) => `(${string(key)}, ${field(value)})`).join(', ') : ''}]) }`
}
const names = { isPreferences: 'valid_preferences', isJourney: 'valid_journey', isTicket: 'valid_ticket' }
const tests = validations.map(f => {
  const value = f.args[0]
  const scalars = { isView: 'valid_view', isNote: 'valid_note', isStoredBoolean: 'valid_boolean' }
  const call = names[f.fn] ? `${names[f.fn]}(${record(value)})` : scalars[f.fn] ? `${scalars[f.fn]}(${field(value)})`
    : `valid_travel(${value !== null && typeof value === 'object'}, ${record(value?.journey)}, ${Array.isArray(value?.tickets) ? `Some([${value.tickets.map(record).join(', ')}])` : 'None'}, ${field(value?.pendingArrivalId)})`
  return `///|\ntest ${string(f.name)} {\n  assert_eq(${call}, ${f.result})\n}\n`
})

// Expectations below are read from the frozen TS application's API trace,
// not recomputed using a copy of the migrated volume or noise formulas.
const log = browser['sound/normal'].log
const gains = ['gain-6.gain', 'gain-9.gain', 'gain-12.gain', 'filter-3.frequency'].map(id => log.filter(e => e[0] === id && e[1] === 'target').map(e => e[2]))
for (const [i, speed, moving, open] of [[0, 'local', true, false], [1, 'express', false, true], [2, 'rapid', true, true]]) {
  tests.push(`///|\ntest "sound mix from source trace ${i}" {\n  let mix = sound_mix(${string(speed)}, 45.0, 20.0, 50.0, ${moving}, ${open})\n${['train', 'rain', 'wind', 'cabin'].map((key, j) => `  assert_eq(mix.${key}, ${number(gains[j][i])})`).join('\n')}\n}\n`)
}
let seed = 42
for (const [channel, samples] of browser['sound/normal'].samples[0].entries()) {
  const random = samples.map(() => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 2 ** 32 })
  tests.push(`///|\ntest "noise samples from source Float32Array channel ${channel}" {\n  let random = [${random.map(number).join(', ')}]\n  let expected = [${samples.map(number).join(', ')}]\n  let mut brown = 0.0\n  for i in 0..<random.length() {\n    let (next, sample) = noise_sample(brown, random[i])\n    brown = next\n    assert_eq(Float::from_double(sample).to_double(), expected[i])\n  }\n}\n`)
}
const uniforms = browser['renderer/normal'].log.filter(e => e[0] === 'uniform1f')
const first = key => uniforms.filter(e => e[1] === key)[2][2]
tests.push(`///|\ntest "animation first frame from source uniforms" {\n  assert_eq(animation_delta(42.0, "local"), ${number(first('u_time'))})\n  assert_eq(travel_delta(42.0), ${number(first('u_travel'))})\n}\n`)
const path = new URL('../moonbit/domain/browser_fixtures_wbtest.mbt', import.meta.url)
const output = '// Generated from TypeScript validation and browser oracle fixtures. Run npm run fixtures:domain.\n\n' + tests.join('\n')
if (process.argv.includes('--check')) {
  if (readFileSync(path, 'utf8') !== output) throw new Error('Browser core tests changed; run npm run fixtures:domain')
} else writeFileSync(path, output)
console.log(`${tests.length} browser core tests generated from TypeScript fixtures`)
