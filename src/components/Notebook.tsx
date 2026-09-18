import * as Dialog from '@radix-ui/react-dialog'
import { ArrowLeft, Pause, Play, Settings2, Square, Tickets, Volume2, VolumeX, X } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'
import type { Journey, Preferences } from '../lib/journey'
import { cn, formatTime } from '../lib/utils'
import type { Ticket } from '../lib/tickets'
import TicketCard from './TicketCard'
import RailMark from './RailMark'
import RouteMap from './RouteMap'
import Settings from './Settings'
import { compactLayout, useMediaQuery } from '../hooks/useMediaQuery'

interface Props {
  open: boolean; suspended: boolean; onOpenChange: (open: boolean) => void
  journey: Journey; preferences: Preferences; remaining: number | null
  onPreferences: (preferences: Preferences) => void
  onStart: () => void; onToggle: () => void; onFinish: () => void
  soundEnabled: boolean; soundBusy: boolean; soundError: string; onSound: () => void
  note: string; onNote: (note: string) => void
  tickets: Ticket[]; onArchive: () => void
  focusTicketPocket?: boolean
}

const speeds = [
  { value: 'local', name: '各駅', print: 'local' },
  { value: 'rapid', name: '準急', print: 'semi-express' },
  { value: 'express', name: '特急', print: 'express' },
] as const

export default function Notebook(props: Props) {
  const { open, suspended, onOpenChange, journey, preferences, remaining, onPreferences, onStart, onToggle, onFinish, soundEnabled, soundBusy, soundError, onSound, note, onNote, tickets, onArchive } = props
  const [settings, setSettings] = useState(false)
  const reducedMotion = useReducedMotion()
  const compact = useMediaQuery(compactLayout)
  const active = journey.phase === 'focus' || journey.phase === 'rest'
  const date = new Date()
  const printedDate = `'${String(date.getFullYear()).slice(-2)} ${date.getMonth() + 1}/${date.getDate()}`
  const speedIndex = speeds.findIndex(s => s.value === preferences.speed)

  return <Dialog.Root open={open} onOpenChange={value => { onOpenChange(value); if (!value) setSettings(false) }}>
    <Dialog.Trigger asChild>
      <motion.button className="notebook-object" aria-label="旅の手帳を開く" title="手帳をひらく" whileHover={reducedMotion ? undefined : { y: -5, rotate: -1 }} transition={{ duration: .18 }}>
        <span className="resting-book-pages" aria-hidden="true" />
        <span className="resting-book-cover" aria-hidden="true">
          <span className="cover-border" />
          <span className="cover-mark"><RailMark strokeWidth={.8} /></span>
          <span className="book-elastic" />
        </span>
        <span className="resting-book-ribbon" aria-hidden="true" />
      </motion.button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="journal-shade" />
      <Dialog.Content className="journal-anchor" onOpenAutoFocus={event => {
        event.preventDefault()
        const target = props.focusTicketPocket ? document.querySelector<HTMLButtonElement>('.ticket-pocket') : document.getElementById('journal-main-action')
        target?.focus({ preventScroll: true })
      }} onCloseAutoFocus={event => { if (suspended) event.preventDefault() }}>
        <Dialog.Title className="sr-only">旅の手帳</Dialog.Title>
        <Dialog.Description className="sr-only">作業時間、列車の速さ、音、メモを手帳で操作できます。</Dialog.Description>
        <motion.div className="journal" data-settings={settings} initial={reducedMotion ? false : { opacity: 0, y: compact ? 14 : 55, rotateX: compact ? 0 : 12, rotate: compact ? 0 : -5, scale: compact ? 1 : .93 }} animate={{ opacity: 1, y: 0, rotateX: 0, rotate: compact ? 0 : -2, scale: 1 }} transition={{ duration: compact ? .18 : .55, ease: 'easeOut' }}>
          <div className="journal-cover" aria-hidden="true" />
          <div className="journal-page-edges" aria-hidden="true" />
          <div className="journal-spread">
            <div className="journal-page journal-left">
              {settings ? <>
                <button className="paper-back paper-icon" onClick={() => setSettings(false)} aria-label="手帳に戻る"><ArrowLeft size={19} strokeWidth={1.1} /></button>
                <Settings preferences={preferences} onChange={onPreferences} active={active} />
              </> : <>
                <div className="journey-paper">
                  <span className="paper-date">{printedDate}</span>
                  <button className="paper-time" onClick={() => setSettings(true)} aria-label="作業と休憩の時間を設定">
                    {active ? (preferences.showTime && remaining !== null ? <span className="time-value">{formatTime(remaining)}</span> : <span aria-hidden="true">—</span>) : <span>{preferences.focusMinutes ? `${preferences.focusMinutes} min / ${preferences.restMinutes} min` : '∞'}</span>}
                  </button>
                  <button className="paper-speed" onClick={() => onPreferences({ ...preferences, speed: speeds[(speedIndex + 1) % speeds.length].value })} aria-label={`列車の速さ：${speeds[speedIndex].name}。クリックで変更`}>
                    {speeds[speedIndex].print}
                  </button>
                  {journey.phase === 'rest' && <span className="paper-phase">休憩</span>}
                  {journey.phase === 'finished' && <span className="paper-phase">到着</span>}
                  <button id="journal-main-action" className="paper-play" onClick={active ? onToggle : onStart} aria-label={active ? journey.running ? '一時停止' : '旅を再開' : journey.phase === 'finished' ? 'もう一度乗車する' : '乗車する'} title={active ? journey.running ? '一時停止' : '再開' : '乗車する'}>
                    {active && journey.running ? <Pause size={19} strokeWidth={1.3} /> : <Play size={19} strokeWidth={1.3} />}
                  </button>
                </div>
                <textarea className="paper-memo" aria-label="手帳のメモ" value={note} maxLength={300} onChange={e => onNote(e.target.value)} spellCheck={false} />
              </>}
              <div className="paper-tools">
                <button className="paper-icon" onClick={() => setSettings(!settings)} aria-label={settings ? '手帳に戻る' : '旅の設定'} aria-pressed={settings} title="設定"><Settings2 size={17} strokeWidth={1.15} /></button>
                <button className="paper-icon" onClick={onSound} disabled={soundBusy} aria-label={soundEnabled ? '音を消す' : '音を入れる'} aria-pressed={soundEnabled} title={soundEnabled ? '音を消す' : '音を入れる'}>{soundEnabled ? <Volume2 size={17} strokeWidth={1.15} /> : <VolumeX size={17} strokeWidth={1.15} />}</button>
                {active && <button className="paper-icon" onClick={onFinish} aria-label="旅を終える" title="旅を終える"><Square size={14} strokeWidth={1.15} /></button>}
              </div>
              {soundError && <p className="paper-error" role="alert">{soundError}</p>}
            </div>
            <div className="journal-page journal-right">
              <RouteMap />
              <button className={cn('ticket-pocket', { 'ticket-pocket-filled': tickets.length > 0 })} onClick={onArchive} aria-label="集めた切符を見る" title="集めた切符">
                {tickets[0] && <span className="pocket-ticket" aria-hidden="true"><TicketCard ticket={tickets[0]} /></span>}
                <span className="pocket-paper" aria-hidden="true"><Tickets size={18} strokeWidth={1} /><span>切符</span></span>
              </button>
            </div>
          </div>
          <Dialog.Close className="paper-close paper-icon" aria-label="手帳を閉じる" title="手帳を閉じる"><X size={19} strokeWidth={1} /></Dialog.Close>
          <div className="journal-spine" aria-hidden="true" />
          <div className="journal-ribbon" aria-hidden="true" />
        </motion.div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
}
