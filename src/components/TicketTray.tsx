import * as Dialog from '@radix-ui/react-dialog'
import { ArrowLeft, ArrowRight, RotateCcw, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useRef, useState } from 'react'
import type { Ticket } from '../lib/tickets'
import TicketCard from './TicketCard'
import TouchableTicket from './TouchableTicket'
import type { TicketHandle } from './TouchableTicket'

interface Props {
  tickets: Ticket[]
  arrivalId: string | null
  saveError: boolean
  onEdit: (id: string, changes: Partial<Pick<Ticket, 'title' | 'note'>>) => void
  onClose: () => void
}

export default function TicketTray({ tickets, arrivalId, saveError, onEdit, onClose }: Props) {
  const [selectedId, setSelectedId] = useState(arrivalId ?? tickets[0]?.id)
  const [back, setBack] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const [handled, setHandled] = useState(false)
  const physicalTicket = useRef<TicketHandle>(null)
  const closeButton = useRef<HTMLButtonElement>(null)
  const reducedMotion = useReducedMotion()
  const index = Math.max(0, tickets.findIndex(ticket => ticket.id === selectedId))
  const ticket = tickets[index]
  const arrival = arrivalId !== null
  const welcome = arrival && ticket?.kind === 'welcome'
  const close = () => {
    if (leaving) return
    if (reducedMotion || !ticket) onClose()
    else setLeaving(true)
  }
  const select = (next: number) => { setBack(false); setSelectedId(tickets[next].id) }

  return <Dialog.Root open onOpenChange={open => { if (!open) close() }}>
    <Dialog.Portal>
      <Dialog.Overlay asChild>
        <motion.div className="ticket-tray-shade" initial={{ opacity: 0 }} animate={{ opacity: leaving ? 0 : 1 }} transition={{ duration: reducedMotion ? 0 : .3 }} />
      </Dialog.Overlay>
      <Dialog.Content className="ticket-tray-dialog"
        onEscapeKeyDown={event => { if (physicalTicket.current?.cancel()) event.preventDefault() }}
        onOpenAutoFocus={event => { event.preventDefault(); closeButton.current?.focus({ preventScroll: true }) }}
        onCloseAutoFocus={event => {
          event.preventDefault()
          if (arrival && !welcome) queueMicrotask(() => document.querySelector<HTMLButtonElement>('.notebook-object')?.focus({ preventScroll: true }))
        }}>
        <Dialog.Title className="sr-only">{welcome ? 'はじめての切符' : arrival ? '到着の切符' : '集めた切符'}</Dialog.Title>
        <Dialog.Description className="sr-only">{welcome ? '旅のしおりをめくった記念の一枚です。裏返してメモを読み、手帳にしまってみましょう。手帳の右ポケットからまた見返せます。' : arrival ? '旅の記録が切符になりました。作業名や裏面のメモを書き込んで、手帳にしまえます。' : '手帳に残した切符を一枚ずつ見返せます。裏面には旅のメモがあります。'}</Dialog.Description>
        <div className="ticket-tray-stage">
        <motion.img className="ticket-tray-box" src="/ticket-tray.png" alt="" draggable={false} initial={{ opacity: 0 }} animate={{ opacity: leaving ? 0 : 1 }} transition={{ duration: reducedMotion ? 0 : .4 }} />
        {welcome && <motion.p className="ticket-welcome-caption" initial={{ opacity: 0 }} animate={{ opacity: leaving ? 0 : 1 }} transition={{ duration: reducedMotion ? 0 : .3, delay: reducedMotion || leaving ? 0 : 1.3 }}>ようこそ、車窓へ。</motion.p>}
        <div className="ticket-tray-well">
          {ticket ? <>
            <motion.div className="ticket-stack-under" aria-hidden="true" animate={{ opacity: leaving ? 0 : 1 }} transition={{ duration: .2 }}>
              {tickets.slice(index + 1, index + 3).reverse().map((older, i) => <div key={older.id} style={{ transform: `translate(${i ? -9 : 12}px, ${i ? 14 : 24}px) rotate(${i ? -5 : 3}deg)` }}><TicketCard ticket={older} /></div>)}
            </motion.div>
            <AnimatePresence mode="wait">
              <motion.div key={ticket.id} className="ticket-on-top"
                initial={reducedMotion ? false : arrival ? { x: '-35vw', y: '-65vh', rotate: -24, scale: 1.2, opacity: 0 } : { x: 24, y: -8, rotate: 1, opacity: 0 }}
                animate={leaving ? { x: '30vw', y: '43vh', rotate: 14, scale: .16, opacity: 0 } : { x: 0, y: 0, rotate: -1.4, scale: 1, opacity: 1 }}
                exit={{ x: -24, opacity: 0, rotate: -4 }}
                transition={{ duration: reducedMotion ? 0 : leaving ? .7 : arrival ? 1.25 : .18, ease: 'easeOut', delay: arrival && !leaving ? .15 : 0 }}
                onAnimationComplete={() => { if (leaving) onClose() }}>
                <TouchableTicket ref={physicalTicket} ticket={ticket} back={back} disabled={leaving} onBackChange={setBack} onTouch={() => setHandled(true)} onEdit={onEdit} />
              </motion.div>
            </AnimatePresence>
          </> : <div className="ticket-empty"><p>次の到着が、最初の一枚に。</p></div>}
        </div>
        <motion.div className="ticket-tray-controls" animate={{ opacity: leaving ? 0 : 1 }} transition={{ duration: reducedMotion ? 0 : .18 }}>
          <button className="tray-close" aria-label={arrival ? '切符をしまって閉じる' : '切符を閉じる'} onClick={close} disabled={leaving}><X size={20} strokeWidth={1} /></button>
          {!arrival && ticket && <div className="ticket-browse">
            <button aria-label="新しい切符を見る" disabled={index === 0 || leaving} onClick={() => select(index - 1)}><ArrowLeft size={23} strokeWidth={1} /></button>
            <button aria-label="前の切符を見る" disabled={index >= tickets.length - 1 || leaving} onClick={() => select(index + 1)}><ArrowRight size={23} strokeWidth={1} /></button>
          </div>}
          <div className="ticket-tray-actions">
            {ticket && <button className="ticket-flip" aria-label={back ? '切符の表を見る' : '切符の裏を見る'} onClick={() => { setBack(!back); setHandled(true) }} disabled={leaving} title={back ? '表へ' : '裏へ'}><RotateCcw size={18} strokeWidth={1.1} /></button>}
            <button ref={closeButton} className="ticket-put-away" onClick={close} disabled={leaving}>{arrival ? '手帳にしまう' : '手帳に戻る'}<ArrowRight size={16} strokeWidth={1} /></button>
          </div>
          {saveError && <p className="ticket-save-error" role="alert">このブラウザに切符を保存できません。ページを閉じると記録が失われます。</p>}
          {ticket && !saveError && <motion.p className="ticket-handling-hint" aria-hidden="true" animate={{ opacity: handled || leaving ? 0 : 1 }} transition={{ duration: reducedMotion ? 0 : .18 }}>端をつまんで、左右にめくる</motion.p>}
        </motion.div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
}
