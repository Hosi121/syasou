import type { Preferences } from './journey';
/** Locally synthesized ambience: no recordings, streaming, or external requests. */
export declare class TrainSound {
    private context;
    private master;
    private train;
    private rain;
    private wind;
    private cabin;
    private noise;
    private sources;
    private scheduler;
    private nextBeat;
    private beat;
    private moving;
    private period;
    constructor();
    private noiseLayer;
    enable(): Promise<void>;
    disable(): Promise<void>;
    update(preferences: Preferences, moving: boolean, windowOpen: boolean): void;
    private schedule;
    private clack;
    dispose(): void;
}
