import * as moon from '../generated/moonbit/bridge.js'

export interface TicketGrip {
  x: number
  y: number
  width: number
  height: number
  base: number
  back: boolean
  dx: number
  edge: number
}
export interface TicketLift {
  y: number; z: number; tilt: number; angle: number; roll: number
  shineOpacity: number; shadowY: number; shadowOpacity: number
}
export interface TicketDrag {
  dx: number; x: number; y: number; angle: number; tilt: number; roll: number; shineX: number
}
export interface TicketHover {
  tilt: number; roll: number; z: number; shineX: number; shineOpacity: number
}
export interface TicketRelease { back: boolean; angle: number }

export const ticketIsBack = (angle: number): boolean => moon.ticketIsBack(angle)
export const ticketShadowWidth = (angle: number): number => moon.ticketShadowWidth(angle)
export function ticketRestingAngle(angle: number, back: boolean): number {
  return moon.ticketRestingAngle(angle, back)
}
export function beginTicketGrip(x: number, y: number, left: number, width: number, height: number, base: number, back: boolean): TicketGrip {
  return moon.beginTicketGrip(x, y, left, width, height, base, back)
}
export function liftTicket(grip: TicketGrip, top: number): TicketLift {
  return moon.liftTicket(grip, top)
}
export function dragTicket(grip: TicketGrip, x: number, y: number): TicketDrag {
  return moon.dragTicket(grip, x, y)
}
export function hoverTicket(x: number, y: number, left: number, top: number, width: number, height: number): TicketHover {
  return moon.hoverTicket(x, y, left, top, width, height)
}
export function releaseTicket(grip: TicketGrip, complete: boolean): TicketRelease {
  return moon.releaseTicket(grip, complete)
}
export function ticketSerial(id: string): string {
  return moon.ticketSerial(id)
}
