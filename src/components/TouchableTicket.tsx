import { motion, useMotionValueEvent, useSpring, useTransform } from 'motion/react'
import { useCallback, useEffect, useImperativeHandle, useRef, useState, useSyncExternalStore } from 'react'
import type { PointerEvent, Ref } from 'react'
import type { Ticket } from '../lib/tickets'
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
interface Grip {
  pointer: number
  node: HTMLDivElement
  x: number
  y: number
  width: number
  height: number
  base: number
  back: boolean
  dx: number
  edge: number
}
const clamp = (value: number, limit: number) => Math.max(-limit, Math.min(limit, value))
const isBack = (angle: number) => Math.cos(angle * Math.PI / 180) < 0
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
  const shadowWidth = useTransform(angle, value => .4 + Math.abs(Math.cos(value * Math.PI / 180)) * .6)

  useMotionValueEvent(angle, 'change', value => setVisibleBack(current => isBack(value) === current ? current : !current))

  const putDown = useCallback(() => {
    x.set(0); y.set(0); z.set(0); tilt.set(0); roll.set(0)
    shineX.set(0); shineOpacity.set(.12); shadowY.set(7); shadowOpacity.set(.28)
  }, [x, y, z, tilt, roll, shineX, shineOpacity, shadowY, shadowOpacity])

  const release = useCallback((complete: boolean) => {
    const current = grip.current
    if (!current) return false
    // Distance, not accidental pointer speed, decides whether to turn the page.
    const turn = complete && Math.abs(current.dx) > current.width * .3
    const nextBack = turn ? !current.back : current.back
    restingAngle.current = current.base + (turn ? Math.sign(current.dx) * 180 : 0)
    grip.current = null
    setHeld(false)
    if (current.node.hasPointerCapture(current.pointer)) current.node.releasePointerCapture(current.pointer)
    if (reducedMotion) angle.jump(restingAngle.current)
    else angle.set(restingAngle.current)
    putDown()
    onBackChange(nextBack)
    return true
  }, [angle, onBackChange, putDown, reducedMotion])

  useImperativeHandle(ref, () => ({ cancel: () => release(false) }), [release])
  useEffect(() => {
    // The ordinary flip button and pointer gesture share one continuous angle.
    if (grip.current) return
    if (isBack(restingAngle.current) !== back) restingAngle.current += 180
    if (reducedMotion) angle.jump(restingAngle.current)
    else angle.set(restingAngle.current)
  }, [back, reducedMotion, angle])
  useEffect(() => {
    const cancel = () => { release(false) }
    const hidden = () => { if (document.hidden) cancel() }
    window.addEventListener('blur', cancel)
    document.addEventListener('visibilitychange', hidden)
    return () => { window.removeEventListener('blur', cancel); document.removeEventListener('visibilitychange', hidden) }
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
    const edge = (event.clientX - rect.left) / rect.width - .5
    grip.current = { pointer: event.pointerId, node: event.currentTarget, x: event.clientX, y: event.clientY,
      width: rect.width, height: rect.height, base: restingAngle.current, back, dx: 0, edge }
    event.currentTarget.setPointerCapture(event.pointerId)
    event.preventDefault()
    setHeld(true)
    onTouch()
    if (reducedMotion) return
    y.set(-18); z.set(42); tilt.set(((event.clientY - rect.top) / rect.height - .5) * -12)
    angle.set(restingAngle.current - edge * 10); roll.set(edge * 3)
    shineOpacity.set(.48); shadowY.set(33); shadowOpacity.set(.46)
  }
  const pointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const current = grip.current
    if (current) {
      if (event.pointerId !== current.pointer) return
      const dx = event.clientX - current.x
      const dy = event.clientY - current.y
      current.dx = dx
      if (reducedMotion) return
      x.set(clamp(dx * .18, 65)); y.set(-18 + clamp(dy * .35, 65))
      angle.set(current.base + clamp(dx / current.width * 220, 175) - current.edge * 6)
      tilt.set(clamp(-dy / current.height * 30, 22)); roll.set(clamp(dx / current.width * 6 + current.edge * 3, 7))
      shineX.set(clamp(dx * .2, 95))
      return
    }
    if (disabled || reducedMotion || event.pointerType !== 'mouse' || event.buttons !== 0) return
    if ((event.target as HTMLElement).closest('textarea, input, [contenteditable]')) { putDown(); return }
    const rect = event.currentTarget.getBoundingClientRect()
    const nx = (event.clientX - rect.left) / rect.width - .5
    const ny = (event.clientY - rect.top) / rect.height - .5
    tilt.set(-ny * 5); roll.set(nx * 1.4); z.set(7); shineX.set(nx * 80); shineOpacity.set(.26)
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
