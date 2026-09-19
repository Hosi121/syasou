import * as moon from '../generated/moonbit/bridge.js'
import type { Journey, JourneyAction, Scene, Speed } from './journey'

export interface Ticket {
  id: string
  kind?: 'sample' | 'welcome'
  startedAt: number
  arrivedAt: number
  speed: Speed
  scene: Scene
  title: string
  note: string
}

export interface TravelState {
  journey: Journey
  tickets: Ticket[]
  pendingArrivalId: string | null
}

export function isTicket(value: unknown): value is Ticket {
  return moon.isTicket(value)
}

export function isTravelState(value: unknown): value is TravelState {
  return moon.isTravelState(value)
}

export function restoreTravel(state: TravelState, now: number, note: string): TravelState {
  return moon.restoreTravel(state, now, note)
}

export type TravelAction =
  | { type: 'journey'; action: JourneyAction; note: string }
  | { type: 'welcome-ticket'; now: number }
  | { type: 'acknowledge-arrival' }
  | { type: 'edit-ticket'; id: string; changes: Partial<Pick<Ticket, 'title' | 'note'>> }

export function travelReducer(state: TravelState, action: TravelAction): TravelState {
  return moon.travelReducer(state, action)
}
