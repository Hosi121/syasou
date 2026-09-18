import { ArrowRight, RotateCcw } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { useEffect, useRef } from 'react'
import Landscape from './Landscape'
import RailMark from './RailMark'
import { demoMode } from '../lib/profile'

interface Props {
  ready: boolean
  leaving: boolean
  failed: boolean
  onEnter: () => void
  onGuide: () => void
  onComplete: () => void
}

export default function Opening({ ready, leaving, failed, onEnter, onGuide, onComplete }: Props) {
  const reducedMotion = useReducedMotion()
  const enterButton = useRef<HTMLButtonElement>(null)
  useEffect(() => { if (leaving && reducedMotion) onComplete() }, [leaving, reducedMotion, onComplete])
  useEffect(() => {
    if (ready && !leaving) enterButton.current?.focus({ preventScroll: true })
  }, [ready, leaving])

  return <motion.main className="opening-screen" aria-label="車窓のタイトル画面" aria-busy={!ready && !failed}
    initial={false} animate={{ opacity: leaving ? 0 : 1 }} transition={{ duration: reducedMotion ? 0 : 1.15, ease: 'easeOut' }}
    onAnimationComplete={() => { if (leaving) onComplete() }}>
    <div className="opening-light" aria-hidden="true" />
    <motion.div className="opening-window" aria-hidden="true" initial={false}
      animate={{ x: leaving && !reducedMotion ? 24 : 0, scale: leaving && !reducedMotion ? 1.035 : 1 }} transition={{ duration: 1.15, ease: 'easeOut' }}>
      <div className="opening-window-glass">
        <Landscape scene="mist" speed="local" moving={ready && !leaving} windowOpen={false} travelling={false} />
      </div>
      <div className="opening-window-edge" />
    </motion.div>
    <div className="opening-window-sill" aria-hidden="true" />
    <motion.div className="opening-brand" initial={false} animate={{ opacity: leaving ? 0 : 1, y: leaving && !reducedMotion ? -10 : 0 }} transition={{ duration: reducedMotion ? 0 : .45, ease: 'easeOut' }}>
      <div className="opening-emblem" aria-hidden="true"><RailMark strokeWidth={.95} /></div>
      <h1 className="opening-title">車窓</h1>
      <p className="opening-roman" aria-hidden="true">{demoMode ? 'SYASOU / TRIAL' : 'SYASOU'}</p>
      <div className="opening-action">
        {failed ? <div className="opening-failure" role="alert">
          <p>景色をひらけませんでした。</p>
          <button onClick={() => location.reload()}>もう一度ひらく<RotateCcw size={14} strokeWidth={1} /></button>
        </div> : ready ? <motion.div className="opening-ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reducedMotion ? 0 : .4 }}>
          <button ref={enterButton} className="opening-enter" onClick={onEnter} disabled={leaving}>
          <span>窓辺へ</span><ArrowRight size={20} strokeWidth={.9} />
          </button>
          <button className="opening-guide" onClick={onGuide} disabled={leaving}>使い方を見る</button>
        </motion.div> : <div className="opening-loading" role="status">
          <div className="opening-track" aria-hidden="true"><span /></div>
          <span>旅の支度をしています</span>
        </div>}
      </div>
    </motion.div>
    <div className="opening-paper-grain" aria-hidden="true" />
  </motion.main>
}
