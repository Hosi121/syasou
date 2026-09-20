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

const clamp = (value: number, limit: number) => Math.max(-limit, Math.min(limit, value))
export const ticketIsBack = (angle: number): boolean => Math.cos(angle * Math.PI / 180) < 0
export const ticketShadowWidth = (angle: number): number => .4 + Math.abs(Math.cos(angle * Math.PI / 180)) * .6
export function ticketRestingAngle(angle: number, back: boolean): number {
  return ticketIsBack(angle) !== back ? angle + 180 : angle
}
export function beginTicketGrip(x: number, y: number, left: number, width: number, height: number, base: number, back: boolean): TicketGrip {
  return { x, y, width, height, base, back, dx: 0, edge: (x - left) / width - .5 }
}
export function liftTicket(grip: TicketGrip, top: number): TicketLift {
  return { y: -18, z: 42, tilt: ((grip.y - top) / grip.height - .5) * -12,
    angle: grip.base - grip.edge * 10, roll: grip.edge * 3,
    shineOpacity: .48, shadowY: 33, shadowOpacity: .46 }
}
export function dragTicket(grip: TicketGrip, x: number, y: number): TicketDrag {
  const dx = x - grip.x, dy = y - grip.y
  return { dx, x: clamp(dx * .18, 65), y: -18 + clamp(dy * .35, 65),
    angle: grip.base + clamp(dx / grip.width * 220, 175) - grip.edge * 6,
    tilt: clamp(-dy / grip.height * 30, 22), roll: clamp(dx / grip.width * 6 + grip.edge * 3, 7),
    shineX: clamp(dx * .2, 95) }
}
export function hoverTicket(x: number, y: number, left: number, top: number, width: number, height: number): TicketHover {
  const nx = (x - left) / width - .5, ny = (y - top) / height - .5
  return { tilt: -ny * 5, roll: nx * 1.4, z: 7, shineX: nx * 80, shineOpacity: .26 }
}
export function releaseTicket(grip: TicketGrip, complete: boolean): TicketRelease {
  const turn = complete && Math.abs(grip.dx) > grip.width * .3
  return { back: turn ? !grip.back : grip.back, angle: grip.base + (turn ? Math.sign(grip.dx) * 180 : 0) }
}
export function ticketSerial(id: string): string {
  return Array.from(id).reduce((value, character) => (value * 31 + character.charCodeAt(0)) >>> 0, 7).toString().padStart(8, '0').slice(-8)
}
