import type * as MoonBit from "./moonbit.d.ts";

export function createWindowRenderer(canvas: any,
                                     on_unavailable: any): any;

export function disposeSound(value: any): MoonBit.Unit;

export function updateSound(value: any,
                            preferences: any,
                            moving: MoonBit.Bool,
                            open: MoonBit.Bool): MoonBit.Unit;

export function disableSound(value: any): any;

export function enableSound(value: any): any;

export function createSound(): any;

export function writeStorage(key: MoonBit.String,
                             value: any): MoonBit.Bool;

export function readStorage(key: MoonBit.String,
                            fallback: any,
                            validate: (_arg0: any) => MoonBit.Bool): any;

export function journeyReducer(state: any,
                               action: any): any;

export function advanceJourney(state: any,
                               now: MoonBit.Double): any;

export function travelReducer(state: any,
                              action: any): any;

export function restoreTravel(state: any,
                              now: MoonBit.Double,
                              note: MoonBit.String): any;

export function isStoredBoolean(value: any): MoonBit.Bool;

export function isNote(value: any): MoonBit.Bool;

export function isView(value: any): MoonBit.Bool;

export function isTravelState(value: any): MoonBit.Bool;

export function isTicket(value: any): MoonBit.Bool;

export function isJourney(value: any): MoonBit.Bool;

export function isPreferences(value: any): MoonBit.Bool;
