import type { Journey, Preferences } from './journey'

export function migrateLegacyJourney(legacy: Journey, preferences: Preferences, createId: () => string, now: () => number): Journey {
  const active = legacy.phase === 'focus' || legacy.phase === 'rest'
  const legacyArrival = legacy.phase === 'rest' && legacy.deadline !== null ? legacy.deadline - legacy.restMinutes * 60_000 : undefined
  return active ? {
    ...legacy, id: createId(), speed: preferences.speed, scene: preferences.scene,
    startedAt: Math.max(0, (legacyArrival ?? legacy.deadline ?? now()) - legacy.focusMinutes * 60_000),
    arrivedAt: legacyArrival,
  } : legacy
}

export function journeyRemaining(journey: Journey, now: number): number | null {
  return journey.running && journey.deadline !== null
    ? Math.max(0, journey.deadline - now) : journey.remaining
}
