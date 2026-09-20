import assert from 'node:assert/strict'
import { readFileSync, writeFileSync } from 'node:fs'
import { encode, decode } from '../tests/contract/cases.mjs'
import { emptyJourney, defaults } from '../tests/contract/oracle/journey.ts'
import * as interaction from '../tests/contract/oracle/ticketInteraction.ts'
import * as legacy from '../tests/contract/oracle/journeyLegacy.ts'
import * as samples from '../tests/contract/oracle/sampleTickets.ts'

const oracle = { ...interaction, ...legacy, ...samples }
const cases = []
const add = (name, fn, ...args) => cases.push({ name: `${cases.length}: ${name}`, fn, args })
for (const angle of [-1080, -540, -270, -180, -90, -0, 0, 89.999999, 90, 90.000001, 180, 269.999999, 270, 270.000001, 360, 540, 1080, 1e9, NaN, Infinity]) {
  add(`face/${angle}`, 'ticketIsBack', angle)
  add(`shadow/${angle}`, 'ticketShadowWidth', angle)
  for (const back of [false, true]) add(`button/${angle}/${back}`, 'ticketRestingAngle', angle, back)
}
for (const [width, height] of [[400, 240], [237.5, 143.25], [0, 0]]) {
  for (const back of [false, true]) {
    const base = back ? -180 : 360
    const grip = interaction.beginTicketGrip(200, 80, 20, width, height, base, back)
    add(`grip/${width}/${back}`, 'beginTicketGrip', 200, 80, 20, width, height, base, back)
    add(`lift/${width}/${back}`, 'liftTicket', grip, 50)
    for (const fraction of [-3, -.56, -.30000001, -.3, -.29999999, -0, 0, .29999999, .3, .30000001, .56, 3]) {
      const dx = width * fraction
      add(`drag/${width}/${back}/${fraction}`, 'dragTicket', grip, grip.x + dx, grip.y + dx * .5)
      for (const complete of [false, true]) add(`release/${width}/${back}/${fraction}/${complete}`, 'releaseTicket', { ...grip, dx }, complete)
    }
    for (const [x, y] of [[20, 50], [200, 80], [1000, -1000]]) add(`hover/${width}/${back}/${x}`, 'hoverTicket', x, y, 20, 50, width, height)
  }
}
for (const id of ['', 'welcome-v1', 'sample-v1-1', 'trip-1', '車窓', '🚃', 'a🚃b', '\ud83d', '\ude83', 'x'.repeat(1000)]) add(`serial/${cases.length}`, 'ticketSerial', id)
for (const now of [0, -0, 123.5, 1_800_000_000_123, Number.MAX_SAFE_INTEGER, 2 ** 53, NaN, Infinity, -Infinity]) add(`samples/${now}`, 'sampleTickets', now)
for (const phase of ['idle', 'focus', 'rest', 'finished']) {
  for (const deadline of [null, 0, -0, 123.5, 1_800_000_060_000]) {
    for (const running of [false, true]) {
      const journey = { ...emptyJourney, phase, running, deadline, remaining: running ? null : 123.5, extra: 'retain me' }
      add(`legacy/${phase}/${deadline}/${running}`, 'migrateLegacyJourney', journey, { ...defaults, speed: 'express', scene: 'night' }, 'legacy-id', 1_800_000_000_123)
      add(`remaining/${phase}/${deadline}/${running}`, 'journeyRemaining', journey, 1_800_000_000_123)
    }
  }
}
for (const overrides of [{ focusMinutes: 0 }, { restMinutes: 0 }, { id: 'old-id', startedAt: 123, arrivedAt: 456, speed: 'rapid', scene: 'dawn' }, { focusMinutes: NaN }, { deadline: Infinity }]) {
  add(`legacy/metadata/${cases.length}`, 'migrateLegacyJourney', { ...emptyJourney, phase: 'rest', deadline: 5000, ...overrides }, defaults, 'new-id', 10000)
}
for (const failure of ['id', 'now']) {
  cases.push({ name: `legacy/throws/${failure}`, fn: 'migrateLegacyJourney', args: [{ ...emptyJourney, phase: 'focus' }, defaults, 'id', 10000], failure })
}
for (const remaining of [null, 0, -0, NaN, Infinity]) add(`remaining/paused/${remaining}`, 'journeyRemaining', { ...emptyJourney, remaining }, 0)

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

const path = new URL('../tests/contract/interaction-fixtures.json', import.meta.url)
const captured = cases.map(f => ({ ...f, expected: run(oracle, f) }))
if (process.argv.includes('--generate')) {
  writeFileSync(path, JSON.stringify(encode(captured), null, 2) + '\n')
} else {
  const fixtures = decode(JSON.parse(readFileSync(path, 'utf8')))
  assert.deepStrictEqual(captured, fixtures, 'Interaction oracle fixtures drifted')
  if (!process.argv.includes('--check')) {
    const modules = await Promise.all(['ticketInteraction', 'journeyLegacy', 'sampleTickets'].map(name => import(`../src/lib/${name}.ts`)))
    const api = Object.assign({}, ...modules)
    for (const fixture of fixtures) assert.deepStrictEqual(run(api, fixture), fixture.expected, fixture.name)
  }
}
console.log(`${captured.length} interaction, legacy and sample contracts ${process.argv.includes('--generate') ? 'captured' : process.argv.includes('--check') ? 'reproduced' : 'passed'}`)
