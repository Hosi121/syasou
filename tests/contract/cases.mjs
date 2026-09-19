import { emptyJourney, journeyReducer } from './oracle/journey.ts'
import { travelReducer } from './oracle/tickets.ts'

const now = 1_800_000_000_123
const start = (focusMinutes = 25) => ({ type: 'start', now, focusMinutes, restMinutes: 5, id: 'trip-1', speed: 'express', scene: 'night' })
const focused = journeyReducer(emptyJourney, start())
const travel = { journey: focused, tickets: [], pendingArrivalId: null }
const welcome = travelReducer(travel, { type: 'welcome-ticket', now })
const arrived = travelReducer(travel, { type: 'journey', action: { type: 'finish', now: now + 500 }, note: '  読書 🚃\nつづき' })

export const cases = []
const add = (name, fn, ...args) => cases.push({ name, fn, args })
for (const minutes of [0, 15, 25, 45, 60, 90]) {
  const journey = journeyReducer(emptyJourney, start(minutes))
  add(`start ${minutes}`, 'journeyReducer', emptyJourney, start(minutes))
  for (const offset of new Set([0, minutes * 60_000 - 1, minutes * 60_000, (minutes + 5) * 60_000 - 1, (minutes + 5) * 60_000, 86_400_000])) {
    for (const type of ['tick', 'toggle', 'finish']) add(`${type} ${minutes}/${offset}`, 'journeyReducer', journey, { type, now: now + offset })
    add(`advance ${minutes}/${offset}`, 'advanceJourney', journey, now + offset)
  }
  const paused = journeyReducer(journey, { type: 'toggle', now: now + 50 })
  add(`resume ${minutes}`, 'journeyReducer', paused, { type: 'toggle', now: now + 200_000 })
}
for (const phase of ['idle', 'finished']) {
  for (const type of ['tick', 'toggle', 'finish']) add(`${phase}/${type}`, 'journeyReducer', { ...emptyJourney, phase }, { type, now })
}
for (const note of ['', '  読書 🚃\nつづき', '🚃'.repeat(160), '\uFEFF\u00a0タイトル\u2028\n本文', '\u0085x\u0085', 'a'.repeat(81) + '\n' + 'b'.repeat(301)]) {
  add(`arrival ${cases.length}`, 'restoreTravel', travel, now + 86_400_000, note)
  add(`finish ${cases.length}`, 'travelReducer', travel, { type: 'journey', action: { type: 'finish', now: now - 50 }, note })
}
add('no-op travel tick', 'travelReducer', travel, { type: 'journey', action: { type: 'tick', now }, note: '' })
add('restore no-op still clones travel', 'restoreTravel', travel, now, '')
add('arrival duplicate', 'restoreTravel', arrived, now + 86_400_000, 'changed')
add('legacy missing metadata', 'restoreTravel', { journey: { ...focused, id: undefined, startedAt: undefined }, tickets: [], pendingArrivalId: null }, now + 86_400_000, 'legacy')
add('welcome during journey', 'travelReducer', travel, { type: 'welcome-ticket', now })
add('pending real arrival blocks welcome', 'travelReducer', arrived, { type: 'welcome-ticket', now })
add('acknowledge', 'travelReducer', arrived, { type: 'acknowledge-arrival' })
add('edit empty fields', 'travelReducer', arrived, { type: 'edit-ticket', id: 'trip-1', changes: { title: '', note: '' } })
add('edit omitted fields', 'travelReducer', arrived, { type: 'edit-ticket', id: 'trip-1', changes: {} })
add('edit nullish fields', 'travelReducer', arrived, { type: 'edit-ticket', id: 'trip-1', changes: { title: null, note: undefined } })
add('edit UTF16 limits', 'travelReducer', arrived, { type: 'edit-ticket', id: 'trip-1', changes: { title: 'a' + '🚃'.repeat(80), note: 'b' + '🚃'.repeat(300) } })
add('edit unknown id', 'travelReducer', arrived, { type: 'edit-ticket', id: 'missing', changes: { title: 'x' } })
add('replay welcome', 'travelReducer', { ...welcome, pendingArrivalId: null }, { type: 'welcome-ticket', now: now + 1 })
const editedWelcome = travelReducer(welcome, { type: 'edit-ticket', id: 'welcome-v1', changes: { note: '記念', title: '編集済み' } })
add('replay edited welcome', 'travelReducer', { ...editedWelcome, pendingArrivalId: null }, { type: 'welcome-ticket', now: now + 2 })
for (const timestamp of [0, 2 ** 31, 2 ** 32, Number.MAX_SAFE_INTEGER - 10_000_000, Number.MAX_SAFE_INTEGER, 2 ** 53, 123.5]) {
  add(`timestamp ${timestamp}`, 'journeyReducer', emptyJourney, { ...start(), now: timestamp })
}
for (const timestamp of [NaN, Infinity, -Infinity]) {
  for (const type of ['start', 'tick', 'toggle', 'finish']) {
    add(`nonfinite ${type}/${timestamp}`, 'journeyReducer', focused, type === 'start' ? { ...start(), now: timestamp } : { type, now: timestamp })
  }
}
add('NaN focus duration', 'journeyReducer', emptyJourney, start(NaN))
add('negative zero start', 'journeyReducer', emptyJourney, { ...start(), now: -0 })
add('negative zero finish', 'journeyReducer', { ...focused, deadline: 0, startedAt: -0 }, { type: 'finish', now: -0 })
add('negative zero arrival', 'restoreTravel', { journey: { ...focused, running: false, startedAt: -0, arrivedAt: -0 }, tickets: [], pendingArrivalId: null }, 0, '')

// JSON-safe, lossless fixtures: optional properties and nonfinite numbers must
// survive serialization so deep equality can detect boundary regressions.
export function encode(value) {
  if (value === undefined) return { $value: 'undefined' }
  if (Object.is(value, -0)) return { $value: '-0' }
  if (typeof value === 'number' && !Number.isFinite(value)) return { $value: String(value) }
  if (Array.isArray(value)) return value.map(encode)
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, encode(item)]))
  return value
}
export function decode(value) {
  if (value?.$value) return { undefined, NaN, Infinity, '-Infinity': -Infinity, '-0': -0 }[value.$value]
  if (Array.isArray(value)) return value.map(decode)
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, decode(item)]))
  return value
}

export function sharing(result, input) {
  return {
    state: result === input,
    journey: result?.journey === input?.journey,
    tickets: result?.tickets === input?.tickets,
    items: result?.tickets?.map(ticket => input.tickets.indexOf(ticket)),
  }
}
