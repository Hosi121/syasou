import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, BookOpen, Maximize, Minimize } from 'lucide-react'
import { MotionConfig, motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import Landscape from './components/Landscape'
import Notebook from './components/Notebook'
import TicketTray from './components/TicketTray'
import RailMark from './components/RailMark'
import Onboarding from './components/Onboarding'
import { useJourney } from './hooks/useJourney'
import { useSound } from './hooks/useSound'
import { cn, readStorage, writeStorage } from './lib/utils'

export interface AppProps { covered: boolean; guideRequest: number; onReady: () => void; onShowOpening: () => void }

export default function App({ covered, guideRequest, onReady, onShowOpening }: AppProps) {
  const [note, setNote] = useState(() => readStorage('syasou.note.v1', '', (v): v is string => typeof v === 'string' && v.length <= 300))
  const { journey, preferences, setPreferences, remaining, start, toggle, finish, tickets, pendingArrivalId, acknowledgeArrival, editTicket, saveError } = useJourney(note)
  const [notebookOpen, setNotebookOpen] = useState(false)
  const [archiveOpen, setArchiveOpen] = useState(false)
  const trayOpen = pendingArrivalId !== null || archiveOpen
  const [guideOpen, setGuideOpen] = useState(() =>
    !readStorage('syasou.onboarding.v1', false, (v): v is boolean => typeof v === 'boolean') && journey.phase === 'idle' && tickets.length === 0,
  )
  const [guideStep, setGuideStep] = useState(0)
  const [windowOpen, setWindowOpen] = useState(false)
  const [atWindow, setAtWindow] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)
  const [fullscreenError, setFullscreenError] = useState('')
  const [awake, setAwake] = useState(false)
  const [announcement, setAnnouncement] = useState('')
  const sleepTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const previousPhase = useRef(journey.phase)
  const lookTargetX = useMotionValue(0)
  const lookTargetY = useMotionValue(0)
  const lookX = useSpring(lookTargetX, { stiffness: 25, damping: 22 })
  const lookY = useSpring(lookTargetY, { stiffness: 25, damping: 22 })
  const reducedMotion = useReducedMotion()
  const moving = journey.phase === 'idle' || (journey.phase === 'focus' && journey.running)
  const sound = useSound(preferences, moving && !covered, windowOpen)
  const windowButton = useRef<HTMLButtonElement>(null)

  const wake = useCallback(() => {
    setAwake(true)
    clearTimeout(sleepTimer.current)
    sleepTimer.current = setTimeout(() => setAwake(false), 2200)
  }, [])
  useEffect(() => () => clearTimeout(sleepTimer.current), [])
  useEffect(() => { writeStorage('syasou.note.v1', note) }, [note])
  useEffect(() => { onReady() }, [onReady])
  useEffect(() => {
    if (!covered && !trayOpen && !notebookOpen && !guideOpen) {
      if (atWindow) windowButton.current?.focus({ preventScroll: true })
      else document.querySelector<HTMLButtonElement>('.notebook-object')?.focus({ preventScroll: true })
    }
  }, [covered])

  const showGuide = useCallback(() => {
    setGuideStep(0)
    setGuideOpen(true)
    setAtWindow(false)
    setNotebookOpen(false)
  }, [])
  useEffect(() => { if (guideRequest > 0) showGuide() }, [guideRequest, showGuide])
  useEffect(() => { if (pendingArrivalId) setGuideOpen(false) }, [pendingArrivalId])
  const finishGuide = (openBook: boolean) => {
    writeStorage('syasou.onboarding.v1', true)
    setGuideOpen(false)
    setGuideStep(0)
    setAtWindow(false)
    setNotebookOpen(openBook)
    lookTargetX.set(0)
    lookTargetY.set(0)
  }

  useEffect(() => {
    const phase = journey.phase
    if (previousPhase.current !== phase) {
      setAnnouncement(phase === 'rest' ? '作業時間が終わり、休憩に入りました。' : phase === 'finished' ? '旅を終えました。' : phase === 'focus' ? '乗車しました。' : '')
      previousPhase.current = phase
    }
    document.title = phase === 'rest' ? '休憩 — 車窓' : phase === 'focus' ? '車窓 — 乗車中' : '車窓'
  }, [journey.phase])

  const leaveWindow = useCallback(() => {
    setAtWindow(false)
    windowButton.current?.focus({ preventScroll: true })
  }, [])

  useEffect(() => {
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && atWindow && !notebookOpen && !trayOpen && !covered && !guideOpen) leaveWindow()
    }
    const onFullscreen = () => setFullscreen(Boolean(document.fullscreenElement))
    document.addEventListener('keydown', keydown)
    document.addEventListener('fullscreenchange', onFullscreen)
    return () => { document.removeEventListener('keydown', keydown); document.removeEventListener('fullscreenchange', onFullscreen) }
  }, [atWindow, notebookOpen, trayOpen, covered, guideOpen, leaveWindow])

  const board = () => {
    start()
    setNotebookOpen(false)
    if (!sound.enabled) void sound.toggle()
  }
  const resume = () => {
    toggle()
    if (!journey.running) setNotebookOpen(false)
  }
  const toggleFullscreen = async () => {
    setFullscreenError('')
    try {
      if (document.fullscreenElement) await document.exitFullscreen()
      else if (document.documentElement.requestFullscreen) await document.documentElement.requestFullscreen()
      else setFullscreenError('このブラウザでは全画面表示を利用できません。')
    } catch { setFullscreenError('全画面表示を開始できませんでした。') }
  }

  return <MotionConfig reducedMotion="user">
    <main className={cn('world', { 'at-window': atWindow, 'journal-is-open': notebookOpen, 'world-awake': awake })} inert={covered} aria-hidden={covered}
      aria-label="列車の窓辺"
      onPointerMove={event => {
        wake()
        if (reducedMotion || notebookOpen || atWindow || trayOpen || guideOpen) return
        lookTargetX.set((event.clientX / innerWidth - .5) * -9)
        lookTargetY.set((event.clientY / innerHeight - .5) * -5)
      }}
      onPointerLeave={() => { lookTargetX.set(0); lookTargetY.set(0) }}>
      <h1 className="sr-only">車窓</h1>
      <motion.div className="world-camera" style={{ x: lookX, y: lookY }}>
        <div className="room-wall" aria-hidden="true" />
        <motion.div className="window-world" animate={atWindow ? { scale: 1.36, x: '13%', y: '5%' } : { scale: 1, x: '0%', y: '0%' }} transition={{ duration: reducedMotion ? 0 : 1.15, ease: 'easeInOut' }}>
          <Landscape scene={preferences.scene} speed={preferences.speed} moving={moving && !covered} windowOpen={windowOpen} travelling={journey.phase === 'focus'} />
          <button ref={windowButton} className="look-through-window" aria-label={atWindow ? '座席に戻る' : '車窓を眺める'} onClick={() => { setAtWindow(!atWindow); lookTargetX.set(0); lookTargetY.set(0) }} tabIndex={notebookOpen ? -1 : 0} />
        </motion.div>
        <div className="window-lower-shadow" aria-hidden="true" />
        <div className="table-light" aria-hidden="true" />
        <button className={cn('window-latch', { 'latch-open': windowOpen })} aria-label={windowOpen ? '窓を閉める' : '窓をひらく'} aria-pressed={windowOpen} aria-hidden={atWindow} onClick={() => setWindowOpen(!windowOpen)} title={windowOpen ? '窓を閉める' : '窓をひらく'} tabIndex={atWindow ? -1 : 0}>
          <span className="latch-plate" aria-hidden="true"><i /><i /></span><span className="latch-handle" aria-hidden="true" />
        </button>
      </motion.div>
      <div className="book-location" inert={atWindow} aria-hidden={atWindow}>
        <Notebook open={notebookOpen && !trayOpen && !covered && !guideOpen} suspended={trayOpen || covered || guideOpen} onOpenChange={open => { setNotebookOpen(open); lookTargetX.set(0); lookTargetY.set(0) }} journey={journey} preferences={preferences} remaining={remaining} onPreferences={setPreferences} onStart={board} onToggle={resume} onFinish={finish} soundEnabled={sound.enabled} soundBusy={sound.busy} soundError={sound.error} onSound={() => void sound.toggle()}
          note={note} onNote={setNote} tickets={tickets} onArchive={() => { setNotebookOpen(false); setArchiveOpen(true) }} />
      </div>
      <div className="world-corners">
        <button className="corner-action" aria-label="タイトルに戻る" onClick={onShowOpening} title="タイトルへ"><span style={{ width: 24, height: 24 }}><RailMark strokeWidth={1} /></span></button>
        <button className="corner-action" aria-label="使い方を見る" onClick={showGuide} title="旅のしおり"><BookOpen size={18} strokeWidth={1} /></button>
        {atWindow && <button className="corner-action" aria-label="座席に戻る" onClick={leaveWindow} title="座席に戻る"><ArrowLeft size={19} strokeWidth={1} /></button>}
        <button className="corner-action" aria-label={fullscreen ? '全画面を終了' : '全画面で見る'} aria-pressed={fullscreen} onClick={() => void toggleFullscreen()} title={fullscreen ? '全画面を終了' : '全画面で見る'}>{fullscreen ? <Minimize size={18} strokeWidth={1} /> : <Maximize size={18} strokeWidth={1} />}</button>
      </div>
      {fullscreenError && <p className="world-error" role="alert">{fullscreenError}</p>}
      {sound.error && !notebookOpen && <p className="world-error" role="alert">{sound.error}</p>}
      <div className="sr-only" role="status" aria-live="polite">{announcement}</div>
      {guideOpen && !covered && !trayOpen && <Onboarding step={guideStep} onStep={step => { setGuideStep(step); setAtWindow(step === 1) }} onFinish={() => finishGuide(true)} onSkip={() => finishGuide(false)} />}
      {trayOpen && !covered && <TicketTray key={pendingArrivalId ?? 'archive'} tickets={tickets} arrivalId={pendingArrivalId} saveError={saveError} onEdit={editTicket} onClose={() => {
        const returnToBook = pendingArrivalId === null
        acknowledgeArrival()
        setArchiveOpen(false)
        setAtWindow(false)
        setNotebookOpen(returnToBook)
        lookTargetX.set(0)
        lookTargetY.set(0)
      }} />}
    </main>
  </MotionConfig>
}
