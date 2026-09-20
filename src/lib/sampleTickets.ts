import * as moon from '../generated/moonbit/bridge.js'
import type { Ticket } from './tickets'

export function sampleTickets(now: number): Ticket[] {
  return moon.sampleTickets(now)
}
