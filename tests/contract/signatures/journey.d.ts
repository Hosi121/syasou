export type Phase = 'idle' | 'focus' | 'rest' | 'finished';
export type Speed = 'local' | 'rapid' | 'express';
export type Scene = 'mist' | 'dawn' | 'night';
export interface Preferences {
    focusMinutes: number;
    restMinutes: number;
    speed: Speed;
    scene: Scene;
    showTime: boolean;
    trainVolume: number;
    rainVolume: number;
    windVolume: number;
}
export declare const defaults: Preferences;
export declare function isPreferences(value: unknown): value is Preferences;
export interface Journey {
    phase: Phase;
    running: boolean;
    deadline: number | null;
    remaining: number | null;
    focusMinutes: number;
    restMinutes: number;
    id?: string;
    startedAt?: number;
    arrivedAt?: number;
    speed?: Speed;
    scene?: Scene;
}
export declare const emptyJourney: Journey;
export declare function isJourney(value: unknown): value is Journey;
export type JourneyAction = {
    type: 'start';
    now: number;
    focusMinutes: number;
    restMinutes: number;
    id: string;
    speed: Speed;
    scene: Scene;
} | {
    type: 'toggle';
    now: number;
} | {
    type: 'tick';
    now: number;
} | {
    type: 'finish';
    now: number;
};
export declare function advanceJourney(state: Journey, now: number): Journey;
export declare function journeyReducer(state: Journey, action: JourneyAction): Journey;
