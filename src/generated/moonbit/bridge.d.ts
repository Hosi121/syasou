import type * as MoonBit from "./moonbit.d.ts";

export function journeyReducer(state: any,
                               action: any): any;

export function advanceJourney(state: any,
                               now: MoonBit.Double): any;

export function travelReducer(state: any,
                              action: any): any;

export function restoreTravel(state: any,
                              now: MoonBit.Double,
                              note: MoonBit.String): any;
