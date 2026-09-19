import { performance } from 'node:perf_hooks'
import { emptyJourney, journeyReducer } from '../tests/contract/oracle/journey.ts'
import { travelReducer } from '../tests/contract/oracle/tickets.ts'
import * as moon from '../src/generated/moonbit/bridge.js'

const now = 1_800_000_000_000
const journey = journeyReducer(emptyJourney, { type: 'start', now, focusMinutes: 25, restMinutes: 5, id: 'current', speed: 'local', scene: 'mist' })
const ticket = { id: 'old', startedAt: now - 1000, arrivedAt: now, speed: 'local', scene: 'mist', title: '読書', note: 'つづき' }
const state = { journey, tickets: Array.from({ length: 1000 }, (_, i) => ({ ...ticket, id: `old-${i}` })), pendingArrivalId: null }
for (const [name, action] of [
  ['tick with 1,000 archived tickets', { type: 'journey', action: { type: 'tick', now: now + 1 }, note: '読書' }],
  ['arrival with 1,000 archived tickets', { type: 'journey', action: { type: 'finish', now: now + 1 }, note: '読書' }],
]) {
  const result = {}
  for (const [label, fn] of [['TypeScript', travelReducer], ['MoonBit', moon.travelReducer]]) {
    for (let i = 0; i < 1000; i++) fn(state, action)
    const start = performance.now()
    for (let i = 0; i < 10_000; i++) fn(state, action)
    result[label] = `${((performance.now() - start) / 10_000).toFixed(4)} ms/op`
  }
  console.log(name, result)
}
