import type { Journey, Preferences } from './journey';
export declare function migrateLegacyJourney(legacy: Journey, preferences: Preferences, createId: () => string, now: () => number): Journey;
export declare function journeyRemaining(journey: Journey, now: number): number | null;
