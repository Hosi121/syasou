import { motion, useReducedMotion } from 'motion/react'
import type { Ticket } from '../lib/tickets'
import { cn } from '../lib/utils'
import RailMark from './RailMark'

interface Props {
  ticket: Ticket
  back?: boolean
  onTitleChange?: (title: string) => void
  onNoteChange?: (note: string) => void
}

const services = { local: 'LOCAL', rapid: 'SEMI-EXPRESS', express: 'EXPRESS' }
const routes = { mist: 'MIST VALLEY', dawn: 'MORNING LIGHT', night: 'NIGHT FOREST' }
const dateFormat = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: '2-digit' })
const timeFormat = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false })

export default function TicketCard({ ticket, back = false, onTitleChange, onNoteChange }: Props) {
  const reducedMotion = useReducedMotion()
  const date = dateFormat.format(ticket.arrivedAt).toUpperCase()
  const welcome = ticket.kind === 'welcome'
  const serial = Array.from(ticket.id).reduce((value, character) => (value * 31 + character.charCodeAt(0)) >>> 0, 7).toString().padStart(8, '0').slice(-8)
  return <div className="rail-ticket" data-ticket-kind={ticket.kind ?? 'journey'}>
    <motion.div className="ticket-turn" animate={{ rotateY: back ? 180 : 0 }} transition={{ duration: reducedMotion ? 0 : .6, ease: 'easeInOut' }}>
      <div className="ticket-stock ticket-stock-bottom" aria-hidden="true" /><div className="ticket-stock" aria-hidden="true" /><div className="ticket-stock ticket-stock-top" aria-hidden="true" />
      <div className="ticket-face ticket-front" aria-hidden={back} inert={back}>
        <div className="ticket-band ticket-band-top"><span>SYASOU RAILWAY</span><span>{welcome ? 'FIRST RIDE' : 'ONE WAY'}</span></div>
        <div className="ticket-print">
          <svg className="ticket-watermark" viewBox="0 0 500 250" fill="none" aria-hidden="true">
            {Array.from({ length: 10 }, (_, i) => <ellipse key={i} cx="250" cy="125" rx={154 + i * 8} ry={44 + i * 7} transform={`rotate(${i % 2 ? 13 : -13} 250 125)`} />)}
          </svg>
          <div className="ticket-print-main">
          <div className="ticket-fields">
            <div><small>Class</small><span>1ST</span></div>
            <div><small>Service</small><span className="ticket-service">{services[ticket.speed]}</span></div>
          </div>
          <div className={cn('ticket-task', { 'ticket-task-long': ticket.title.length > 28 })}>
            {onTitleChange ? <textarea rows={2} aria-label="切符に残す作業" value={ticket.title} maxLength={80} onChange={event => onTitleChange(event.target.value)} placeholder="この旅で進めたこと" spellCheck={false} /> : <p>{ticket.title || '名前のない旅'}</p>}
          </div>
          <div className="ticket-journey-line">
            <div><small>Route</small><span>{welcome ? 'YOUR OWN PACE' : routes[ticket.scene]}</span></div>
            <div><small>Travelled on</small><span>{date}</span></div>
          </div>
          </div>
          <div className="ticket-stub" aria-hidden="true">
            <span className="ticket-stub-type">{welcome ? 'GIFT' : 'SGL'}</span>
            <span className="ticket-stub-mark"><RailMark strokeWidth={.8} /></span>
            <span className="ticket-barcode" />
            <span className="ticket-serial">{serial}</span>
          </div>
        </div>
        <div className="ticket-band ticket-band-bottom">
          <span className="ticket-roundel"><RailMark /></span>
          <span className="ticket-times">{welcome ? 'A SMALL BEGINNING' : `${timeFormat.format(ticket.startedAt)} — ${timeFormat.format(ticket.arrivedAt)}`}</span>
          <span className="ticket-stamp">{welcome ? 'WELCOME' : ticket.kind === 'sample' ? 'SAMPLE' : 'ARRIVED'}</span>
        </div>
        <div className="ticket-sheen" aria-hidden="true" style={{ opacity: .12 }} />
      </div>
      <div className="ticket-face ticket-back" aria-hidden={!back} inert={!back}>
        <div className="ticket-back-heading"><span>旅の余白</span><small>{date}</small></div>
        {onNoteChange ? <textarea className="ticket-note" aria-label="切符のメモ" value={ticket.note} maxLength={300} onChange={event => onNoteChange(event.target.value)} placeholder="この旅で考えたこと、残しておきたいこと。" spellCheck={false} /> : <p className="ticket-note">{ticket.note}</p>}
        <span className="ticket-back-mark"><RailMark /></span>
        <span className="ticket-back-edition" aria-hidden="true">SYASOU RAILWAY / {serial}</span>
        <div className="ticket-sheen" aria-hidden="true" style={{ opacity: .12 }} />
      </div>
    </motion.div>
  </div>
}
