export interface TicketGrip {
    x: number;
    y: number;
    width: number;
    height: number;
    base: number;
    back: boolean;
    dx: number;
    edge: number;
}
export interface TicketLift {
    y: number;
    z: number;
    tilt: number;
    angle: number;
    roll: number;
    shineOpacity: number;
    shadowY: number;
    shadowOpacity: number;
}
export interface TicketDrag {
    dx: number;
    x: number;
    y: number;
    angle: number;
    tilt: number;
    roll: number;
    shineX: number;
}
export interface TicketHover {
    tilt: number;
    roll: number;
    z: number;
    shineX: number;
    shineOpacity: number;
}
export interface TicketRelease {
    back: boolean;
    angle: number;
}
export declare const ticketIsBack: (angle: number) => boolean;
export declare const ticketShadowWidth: (angle: number) => number;
export declare function ticketRestingAngle(angle: number, back: boolean): number;
export declare function beginTicketGrip(x: number, y: number, left: number, width: number, height: number, base: number, back: boolean): TicketGrip;
export declare function liftTicket(grip: TicketGrip, top: number): TicketLift;
export declare function dragTicket(grip: TicketGrip, x: number, y: number): TicketDrag;
export declare function hoverTicket(x: number, y: number, left: number, top: number, width: number, height: number): TicketHover;
export declare function releaseTicket(grip: TicketGrip, complete: boolean): TicketRelease;
export declare function ticketSerial(id: string): string;
