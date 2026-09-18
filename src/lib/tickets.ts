import { advanceJourney, isJourney, journeyReducer } from './journey'
import type { Journey, JourneyAction, Scene, Speed } from './journey'

export interface Ticket {
  id: string
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

const timestamp = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value) && value >= 0

export function isTicket(value: unknown): value is Ticket {
  if (!value || typeof value !== 'object') return false
  const t = value as Ticket
  return typeof t.id === 'string' && t.id.length > 0 && t.id.length <= 100
    && timestamp(t.startedAt) && timestamp(t.arrivedAt) && t.arrivedAt >= t.startedAt
    && ['local', 'rapid', 'express'].includes(t.speed) && ['mist', 'dawn', 'night'].includes(t.scene)
    && typeof t.title === 'string' && t.title.length <= 80 && typeof t.note === 'string' && t.note.length <= 300
}

export function isTravelState(value: unknown): value is TravelState {
  if (!value || typeof value !== 'object') return false
  const s = value as TravelState
  return isJourney(s.journey)
    && (s.journey.id === undefined || (typeof s.journey.id === 'string' && s.journey.id.length > 0))
    && (s.journey.startedAt === undefined || timestamp(s.journey.startedAt))
    && (s.journey.arrivedAt === undefined || timestamp(s.journey.arrivedAt))
    && (s.journey.speed === undefined || ['local', 'rapid', 'express'].includes(s.journey.speed))
    && (s.journey.scene === undefined || ['mist', 'dawn', 'night'].includes(s.journey.scene))
    && Array.isArray(s.tickets) && s.tickets.every(isTicket)
    && new Set(s.tickets.map(t => t.id)).size === s.tickets.length
    && (s.pendingArrivalId === null || s.tickets.some(t => t.id === s.pendingArrivalId))
}

function collectArrival(state: TravelState, note: string): TravelState {
  const j = state.journey
  if (!j.id || j.startedAt === undefined || j.arrivedAt === undefined || state.tickets.some(t => t.id === j.id)) return state
  const ticket: Ticket = {
    id: j.id, startedAt: j.startedAt, arrivedAt: Math.max(j.startedAt, j.arrivedAt),
    speed: j.speed ?? 'local', scene: j.scene ?? 'mist',
    title: note.trim().split('\n')[0].slice(0, 80), note: note.slice(0, 300),
  }
  return { ...state, tickets: [ticket, ...state.tickets], pendingArrivalId: ticket.id }
}

export function restoreTravel(state: TravelState, now: number, note: string): TravelState {
  return collectArrival({ ...state, journey: advanceJourney(state.journey, now) }, note)
}

export type TravelAction =
  | { type: 'journey'; action: JourneyAction; note: string }
  | { type: 'acknowledge-arrival' }
  | { type: 'edit-ticket'; id: string; changes: Partial<Pick<Ticket, 'title' | 'note'>> }

export function travelReducer(state: TravelState, action: TravelAction): TravelState {
  if (action.type === 'acknowledge-arrival') return { ...state, pendingArrivalId: null }
  if (action.type === 'edit-ticket') return {
    ...state,
    tickets: state.tickets.map(ticket => ticket.id !== action.id ? ticket : {
      ...ticket,
      title: (action.changes.title ?? ticket.title).slice(0, 80),
      note: (action.changes.note ?? ticket.note).slice(0, 300),
    }),
  }
  const journey = journeyReducer(state.journey, action.action)
  return collectArrival(journey === state.journey ? state : { ...state, journey }, action.note)
}
