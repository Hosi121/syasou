import { performance } from 'node:perf_hooks'
import { emptyJourney, journeyReducer } from '../tests/contract/oracle/journey.ts'
import { travelReducer } from '../tests/contract/oracle/tickets.ts'
import * as moon from '../src/generated/moonbit/bridge.js'
import * as interaction from '../tests/contract/oracle/ticketInteraction.ts'

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

// Exercise the pointer-move path at varied positions and consume each result.
const grip = interaction.beginTicketGrip(340, 80, 0, 400, 240, 0, false)
for (const [label, fn] of [['TypeScript', interaction.dragTicket], ['MoonBit', moon.dragTicket]]) {
  let checksum = 0
  for (let i = 0; i < 10_000; i++) checksum += fn(grip, i % 800, i % 480).angle
  const start = performance.now()
  for (let i = 0; i < 100_000; i++) checksum += fn(grip, i % 800, i % 480).angle
  console.log(`ticket drag / ${label}`, `${((performance.now() - start) / 100_000).toFixed(6)} ms/op`, { checksum })
}
