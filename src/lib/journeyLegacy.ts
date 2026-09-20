import * as moon from '../generated/moonbit/bridge.js'
import type { Journey, Preferences } from './journey'

export function migrateLegacyJourney(legacy: Journey, preferences: Preferences, createId: () => string, now: () => number): Journey {
  return moon.migrateLegacyJourney(legacy, preferences, createId, now)
}

export function journeyRemaining(journey: Journey, now: number): number | null {
  return moon.journeyRemaining(journey, now)
}
