import { defaults, emptyJourney } from './oracle/journey.ts'

const ticket = { id: 'one', startedAt: 10, arrivedAt: 20, speed: 'local', scene: 'mist', title: '読書', note: '' }
const state = { journey: emptyJourney, tickets: [ticket], pendingArrivalId: null }
export const validationCases = []
const add = (fn, value, name) => validationCases.push({ fn, args: [value], name: `${fn}: ${name}` })
for (const fn of ['isPreferences', 'isJourney', 'isTicket', 'isTravelState', 'isView', 'isNote', 'isStoredBoolean']) {
  for (const [i, value] of [null, undefined, false, 0, '', [], {}, 'forest', 'snow', 'train'].entries()) add(fn, value, `primitive ${i}`)
}
for (const fn of ['isNote', 'isStoredBoolean']) {
  for (const [i, value] of [true, 'a'.repeat(299), 'a'.repeat(300), 'a'.repeat(301), '🚃'.repeat(150), 'a' + '🚃'.repeat(150)].entries()) add(fn, value, `note boundary ${i}`)
}
for (const [fn, valid] of [['isPreferences', defaults], ['isJourney', emptyJourney], ['isTicket', ticket], ['isTravelState', state]]) {
  add(fn, valid, 'valid')
  for (const key of Object.keys(valid)) {
    const missing = { ...valid }; delete missing[key]
    add(fn, missing, `missing ${key}`)
    for (const [i, value] of [undefined, null, false, '', -1, NaN, Infinity, 0, 100, 'x'.repeat(301)].entries()) add(fn, { ...valid, [key]: value }, `${key}/${i}`)
  }
}
for (const phase of ['idle', 'focus', 'rest', 'finished']) {
  for (const focusMinutes of [0, 15, 25, 45, 60, 90]) add('isJourney', { ...emptyJourney, phase, focusMinutes, running: true }, `running ${phase}/${focusMinutes}`)
}
for (const kind of [undefined, 'sample', 'welcome', 'other', null]) add('isTicket', { ...ticket, kind }, `kind ${kind}`)
for (const [name, tickets] of [['duplicate', [ticket, ticket]], ['invalid', [{}]], ['none', []]]) add('isTravelState', { ...state, tickets }, name)
for (const id of ['one', 'missing', null]) add('isTravelState', { ...state, pendingArrivalId: id }, `pending ${id}`)
for (const key of ['id', 'startedAt', 'arrivedAt', 'speed', 'scene']) {
  for (const value of [undefined, null, '', -1, NaN, Infinity, 0, 'local', 'mist', 'trip']) add('isTravelState', { ...state, journey: { ...emptyJourney, [key]: value } }, `metadata ${key}/${value}`)
}
