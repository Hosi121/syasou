import { useEffect, useRef, useState } from 'react'
import type { Preferences } from '../lib/journey'
import { TrainSound } from '../lib/sound'

export function useSound(preferences: Preferences, moving: boolean, windowOpen: boolean) {
  const engine = useRef<TrainSound | null>(null)
  const busyRef = useRef(false)
  const [enabled, setEnabled] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => { engine.current?.update(preferences, moving, windowOpen) }, [preferences, moving, windowOpen])
  useEffect(() => () => { engine.current?.dispose(); engine.current = null }, [])

  const toggle = async () => {
    if (busyRef.current) return
    busyRef.current = true
    setBusy(true)
    setError('')
    try {
      if (!engine.current) engine.current = new TrainSound()
      engine.current.update(preferences, moving, windowOpen)
      if (enabled) await engine.current.disable()
      else await engine.current.enable()
      setEnabled(!enabled)
    } catch {
      setError('音を再生できませんでした。もう一度お試しください。')
      engine.current?.dispose()
      engine.current = null
      setEnabled(false)
    } finally { busyRef.current = false; setBusy(false) }
  }

  return { enabled, busy, error, toggle }
}
