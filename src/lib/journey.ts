export type Phase = 'idle' | 'focus' | 'rest' | 'finished'
export type Speed = 'local' | 'rapid' | 'express'
export type Scene = 'mist' | 'dawn' | 'night'

export interface Preferences {
  focusMinutes: number
  restMinutes: number
  speed: Speed
  scene: Scene
  showTime: boolean
  trainVolume: number
  rainVolume: number
  windVolume: number
}

export const defaults: Preferences = {
  focusMinutes: 25, restMinutes: 5, speed: 'local', scene: 'mist', showTime: true,
  trainVolume: 45, rainVolume: 0, windVolume: 20,
}

export function isPreferences(value: unknown): value is Preferences {
  if (!value || typeof value !== 'object') return false
  const p = value as Preferences
  return [0, 15, 25, 45, 60, 90].includes(p.focusMinutes) && [3, 5, 10, 15].includes(p.restMinutes)
    && ['local', 'rapid', 'express'].includes(p.speed) && ['mist', 'dawn', 'night'].includes(p.scene)
    && typeof p.showTime === 'boolean'
    && [p.trainVolume, p.rainVolume, p.windVolume].every(n => typeof n === 'number' && n >= 0 && n <= 100)
}

export interface Journey {
  phase: Phase
  running: boolean
  deadline: number | null
  remaining: number | null
  focusMinutes: number
  restMinutes: number
  id?: string
  startedAt?: number
  arrivedAt?: number
  speed?: Speed
  scene?: Scene
}

export const emptyJourney: Journey = {
  phase: 'idle', running: false, deadline: null, remaining: null, focusMinutes: 25, restMinutes: 5,
}

export function isJourney(value: unknown): value is Journey {
  if (!value || typeof value !== 'object') return false
  const j = value as Journey
  return ['idle', 'focus', 'rest', 'finished'].includes(j.phase)
    && typeof j.running === 'boolean'
    && (j.deadline === null || (typeof j.deadline === 'number' && Number.isFinite(j.deadline)))
    && (j.remaining === null || (typeof j.remaining === 'number' && Number.isFinite(j.remaining) && j.remaining >= 0))
    && [0, 15, 25, 45, 60, 90].includes(j.focusMinutes) && [3, 5, 10, 15].includes(j.restMinutes)
    && (!j.running || j.phase === 'focus' || j.phase === 'rest')
    && (!(j.running && j.deadline === null) || (j.phase === 'focus' && j.focusMinutes === 0))
}

export type JourneyAction =
  | { type: 'start'; now: number; focusMinutes: number; restMinutes: number; id: string; speed: Speed; scene: Scene }
  | { type: 'toggle'; now: number }
  | { type: 'tick'; now: number }
  | { type: 'finish'; now: number }

export function advanceJourney(state: Journey, now: number): Journey {
  if (!state.running || state.deadline === null || now < state.deadline) return state
  if (state.phase === 'focus') {
    const restDeadline = state.deadline + state.restMinutes * 60_000
    if (now < restDeadline) return { ...state, phase: 'rest', deadline: restDeadline, remaining: null, arrivedAt: state.deadline }
    return { ...state, phase: 'finished', running: false, deadline: null, remaining: null, arrivedAt: state.deadline }
  }
  return { ...state, phase: 'finished', running: false, deadline: null, remaining: null }
}

export function journeyReducer(state: Journey, action: JourneyAction): Journey {
  if (action.type === 'start') return {
    phase: 'focus', running: true, focusMinutes: action.focusMinutes, restMinutes: action.restMinutes,
    deadline: action.focusMinutes ? action.now + action.focusMinutes * 60_000 : null, remaining: null,
    id: action.id, startedAt: action.now, speed: action.speed, scene: action.scene,
  }
  if (action.type === 'finish') return {
    ...state, phase: 'finished', running: false, deadline: null, remaining: null,
    arrivedAt: state.arrivedAt ?? (state.phase === 'focus' ? Math.min(action.now, state.deadline ?? action.now) : undefined),
  }
  if (action.type === 'tick') return advanceJourney(state, action.now)
  const current = advanceJourney(state, action.now)
  if (current.phase !== 'focus' && current.phase !== 'rest') return current
  if (current.running) return {
    ...current, running: false, deadline: null,
    remaining: current.deadline === null ? null : Math.max(0, current.deadline - action.now),
  }
  return { ...current, running: true, deadline: current.remaining === null ? null : action.now + current.remaining, remaining: null }
}
