import type { Journey, JourneyAction, Scene, Speed } from './journey';
export interface Ticket {
    id: string;
    kind?: 'sample' | 'welcome';
    startedAt: number;
    arrivedAt: number;
    speed: Speed;
    scene: Scene;
    title: string;
    note: string;
}
export interface TravelState {
    journey: Journey;
    tickets: Ticket[];
    pendingArrivalId: string | null;
}
export declare function isTicket(value: unknown): value is Ticket;
export declare function isTravelState(value: unknown): value is TravelState;
export declare function restoreTravel(state: TravelState, now: number, note: string): TravelState;
export type TravelAction = {
    type: 'journey';
    action: JourneyAction;
    note: string;
} | {
    type: 'welcome-ticket';
    now: number;
} | {
    type: 'acknowledge-arrival';
} | {
    type: 'edit-ticket';
    id: string;
    changes: Partial<Pick<Ticket, 'title' | 'note'>>;
};
export declare function travelReducer(state: TravelState, action: TravelAction): TravelState;
