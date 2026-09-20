import { motion, useMotionValueEvent, useSpring, useTransform } from 'motion/react'
import { useCallback, useEffect, useImperativeHandle, useRef, useState, useSyncExternalStore } from 'react'
import type { PointerEvent, Ref } from 'react'
import type { Ticket } from '../lib/tickets'
import { beginTicketGrip, dragTicket, hoverTicket, liftTicket, releaseTicket, ticketIsBack, ticketRestingAngle, ticketShadowWidth } from '../lib/ticketInteraction'
import type { TicketGrip } from '../lib/ticketInteraction'
import TicketCard from './TicketCard'

export interface TicketHandle { cancel: () => boolean }
interface Props {
  ref?: Ref<TicketHandle>
  ticket: Ticket
  back: boolean
  disabled: boolean
  onBackChange: (back: boolean) => void
  onTouch: () => void
  onEdit: (id: string, changes: Partial<Pick<Ticket, 'title' | 'note'>>) => void
}
interface Grip extends TicketGrip {
  pointer: number
  node: HTMLDivElement
}
const follow = { stiffness: 340, damping: 32, mass: .65 }
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
const subscribeMotion = (listener: () => void) => {
  motionPreference.addEventListener('change', listener)
  return () => motionPreference.removeEventListener('change', listener)
}
const getReducedMotion = () => motionPreference.matches

export default function TouchableTicket({ ref, ticket, back, disabled, onBackChange, onTouch, onEdit }: Props) {
  const reducedMotion = useSyncExternalStore(subscribeMotion, getReducedMotion)
  const grip = useRef<Grip | null>(null)
  const restingAngle = useRef(back ? 180 : 0)
  const [held, setHeld] = useState(false)
  const [visibleBack, setVisibleBack] = useState(back)
  const angle = useSpring(restingAngle.current, follow)
  const x = useSpring(0, follow)
  const y = useSpring(0, follow)
  const z = useSpring(0, follow)
  const tilt = useSpring(0, follow)
  const roll = useSpring(0, follow)
  const shineX = useSpring(0, follow)
  const shineOpacity = useSpring(.12, follow)
  const shadowY = useSpring(7, follow)
  const shadowOpacity = useSpring(.28, follow)
  const shadowX = useTransform(x, value => value * .6)
  const shadowWidth = useTransform(angle, ticketShadowWidth)

  useMotionValueEvent(angle, 'change', value => setVisibleBack(current => ticketIsBack(value) === current ? current : !current))

  const putDown = useCallback(() => {
    x.set(0); y.set(0); z.set(0); tilt.set(0); roll.set(0)
    shineX.set(0); shineOpacity.set(.12); shadowY.set(7); shadowOpacity.set(.28)
  }, [x, y, z, tilt, roll, shineX, shineOpacity, shadowY, shadowOpacity])

  const release = useCallback((complete: boolean) => {
    const current = grip.current
    if (!current) return false
    const released = releaseTicket(current, complete)
    restingAngle.current = released.angle
    grip.current = null
    setHeld(false)
    if (current.node.hasPointerCapture(current.pointer)) current.node.releasePointerCapture(current.pointer)
    if (reducedMotion) angle.jump(restingAngle.current)
    else angle.set(restingAngle.current)
    putDown()
    onBackChange(released.back)
    return true
  }, [angle, onBackChange, putDown, reducedMotion])

  useImperativeHandle(ref, () => ({ cancel: () => release(false) }), [release])
  useEffect(() => {
    // The ordinary flip button and pointer gesture share one continuous angle.
    if (grip.current) return
    restingAngle.current = ticketRestingAngle(restingAngle.current, back)
    if (reducedMotion) angle.jump(restingAngle.current)
    else angle.set(restingAngle.current)
  }, [back, reducedMotion, angle])
  useEffect(() => {
    const cancel = () => { release(false) }
    const hidden = () => { if (document.hidden) cancel() }
    window.addEventListener('blur', cancel)
    window.addEventListener('resize', cancel)
    document.addEventListener('visibilitychange', hidden)
    return () => { window.removeEventListener('blur', cancel); window.removeEventListener('resize', cancel); document.removeEventListener('visibilitychange', hidden) }
  }, [release])
  useEffect(() => { if (disabled) release(false) }, [disabled, release])
  useEffect(() => {
    if (!reducedMotion) return
    release(false)
    x.jump(0); y.jump(0); z.jump(0); tilt.jump(0); roll.jump(0)
    shineX.jump(0); shineOpacity.jump(.12); shadowY.jump(7); shadowOpacity.jump(.28)
  }, [reducedMotion, release, x, y, z, tilt, roll, shineX, shineOpacity, shadowY, shadowOpacity])

  const pointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (disabled || grip.current || !event.isPrimary || event.button !== 0) return
    // Writing, selecting, and pasting in the paper fields stay native.
    if ((event.target as HTMLElement).closest('textarea, input, button, a, [contenteditable]')) { putDown(); return }
    const rect = event.currentTarget.getBoundingClientRect()
    const next = beginTicketGrip(event.clientX, event.clientY, rect.left, rect.width, rect.height, restingAngle.current, back)
    grip.current = { ...next, pointer: event.pointerId, node: event.currentTarget }
    event.currentTarget.setPointerCapture(event.pointerId)
    event.preventDefault()
    setHeld(true)
    onTouch()
    if (reducedMotion) return
    const lifted = liftTicket(next, rect.top)
    y.set(lifted.y); z.set(lifted.z); tilt.set(lifted.tilt)
    angle.set(lifted.angle); roll.set(lifted.roll)
    shineOpacity.set(lifted.shineOpacity); shadowY.set(lifted.shadowY); shadowOpacity.set(lifted.shadowOpacity)
  }
  const pointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const current = grip.current
    if (current) {
      if (event.pointerId !== current.pointer) return
      const dragged = dragTicket(current, event.clientX, event.clientY)
      current.dx = dragged.dx
      if (reducedMotion) return
      x.set(dragged.x); y.set(dragged.y)
      angle.set(dragged.angle); tilt.set(dragged.tilt); roll.set(dragged.roll)
      shineX.set(dragged.shineX)
      return
    }
    if (disabled || reducedMotion || event.pointerType !== 'mouse' || event.buttons !== 0) return
    if ((event.target as HTMLElement).closest('textarea, input, [contenteditable]')) { putDown(); return }
    const rect = event.currentTarget.getBoundingClientRect()
    const hovered = hoverTicket(event.clientX, event.clientY, rect.left, rect.top, rect.width, rect.height)
    tilt.set(hovered.tilt); roll.set(hovered.roll); z.set(hovered.z); shineX.set(hovered.shineX); shineOpacity.set(hovered.shineOpacity)
  }

  return <div className="ticket-handling" data-held={held} data-side={visibleBack ? 'back' : 'front'}
    onPointerDown={pointerDown} onPointerMove={pointerMove}
    onPointerUp={event => { if (event.pointerId === grip.current?.pointer) release(true) }}
    onPointerCancel={event => { if (event.pointerId === grip.current?.pointer) release(false) }}
    onLostPointerCapture={event => { if (event.pointerId === grip.current?.pointer) release(false) }}
    onPointerLeave={() => { if (!grip.current) putDown() }}
    onFocusCapture={event => { if ((event.target as HTMLElement).matches('textarea, input')) putDown() }}
    onDragStart={event => { if (!(event.target as HTMLElement).closest('textarea, input, [contenteditable]')) event.preventDefault() }}>
    <motion.div className="ticket-ground-shadow" aria-hidden="true" style={{ x: shadowX, y: shadowY, scaleX: shadowWidth, opacity: shadowOpacity }} />
    <motion.div className="ticket-lift" style={{ x, y, z, rotateX: tilt, rotateZ: roll }}>
      <TicketCard ticket={ticket} back={visibleBack} rotation={angle} shineX={shineX} shineOpacity={shineOpacity}
        onTitleChange={title => onEdit(ticket.id, { title })} onNoteChange={note => onEdit(ticket.id, { note })} />
    </motion.div>
  </div>
}
