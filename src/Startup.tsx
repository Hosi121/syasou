import { Component, Suspense, lazy, useCallback, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import Opening from './components/Opening'
import { storageKey } from './lib/profile'

const World = lazy(() => import('./App'))
const enteredKey = storageKey('syasou.entered.v1')

function hasEntered() {
  try { return sessionStorage.getItem(enteredKey) === '1' } catch { return false }
}

class WorldBoundary extends Component<{ children: ReactNode; onError: () => void }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  componentDidCatch() { this.props.onError() }
  render() { return this.state.failed ? null : this.props.children }
}

function preparePaper() {
  const grain = new Image()
  grain.src = '/paper-grain.png'
  return Promise.allSettled([
    grain.decode(),
    document.fonts.load('400 16px "Shippori Mincho"'),
    document.fonts.load('500 16px "Shippori Mincho"'),
    document.fonts.load('400 16px "DM Mono"'),
    document.fonts.load('500 80px "Syasou Title"', '車窓'),
  ])
}

export default function Startup() {
  const [opening, setOpening] = useState(true)
  const [wantsTitle, setWantsTitle] = useState(() => !hasEntered())
  const [worldReady, setWorldReady] = useState(false)
  const [paperReady, setPaperReady] = useState(false)
  const [failed, setFailed] = useState(false)
  const [guideRequest, setGuideRequest] = useState(0)
  const ready = worldReady && paperReady && !failed
  const sceneReady = useCallback(() => setWorldReady(true), [])
  const sceneFailed = useCallback(() => { setFailed(true); setOpening(true) }, [])
  const reveal = useCallback(() => setOpening(false), [])
  const showTitle = useCallback(() => { setWantsTitle(true); setOpening(true) }, [])

  useEffect(() => {
    let active = true
    // Fonts and paper are optional: a failed/slow request must not trap the user.
    // This is a ceiling on resource loading, never an artificial minimum wait.
    const ceiling = window.setTimeout(() => { if (active) setPaperReady(true) }, 5000)
    void preparePaper().then(() => {
      clearTimeout(ceiling)
      if (active) setPaperReady(true)
    })
    return () => { active = false; clearTimeout(ceiling) }
  }, [])

  useEffect(() => {
    const pauseLoading = () => document.documentElement.classList.toggle('page-hidden', document.hidden)
    document.addEventListener('visibilitychange', pauseLoading)
    return () => document.removeEventListener('visibilitychange', pauseLoading)
  }, [])

  const enter = () => {
    if (!ready) return
    try { sessionStorage.setItem(enteredKey, '1') } catch { /* Entry still works without browser storage. */ }
    setWantsTitle(false)
  }
  const guide = () => { setGuideRequest(request => request + 1); enter() }

  return <>
    <WorldBoundary onError={sceneFailed}>
      <Suspense fallback={null}><World covered={opening} guideRequest={guideRequest} onReady={sceneReady} onShowOpening={showTitle} /></Suspense>
    </WorldBoundary>
    {opening && <Opening ready={ready} leaving={ready && !wantsTitle} failed={failed} onEnter={enter} onGuide={guide} onComplete={reveal} />}
  </>
}
