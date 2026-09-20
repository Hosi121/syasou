import * as moon from '../generated/moonbit/bridge.js'

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

export const defaults: Preferences = moon.defaultPreferences()

export function isPreferences(value: unknown): value is Preferences {
  return moon.isPreferences(value)
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

export const emptyJourney: Journey = moon.emptyJourney()

export function isJourney(value: unknown): value is Journey {
  return moon.isJourney(value)
}

export type JourneyAction =
  | { type: 'start'; now: number; focusMinutes: number; restMinutes: number; id: string; speed: Speed; scene: Scene }
  | { type: 'toggle'; now: number }
  | { type: 'tick'; now: number }
  | { type: 'finish'; now: number }

// Keep the original typed API at the JS boundary; the reducer lives in MoonBit.
export function advanceJourney(state: Journey, now: number): Journey {
  return moon.advanceJourney(state, now)
}

export function journeyReducer(state: Journey, action: JourneyAction): Journey {
  return moon.journeyReducer(state, action)
}
