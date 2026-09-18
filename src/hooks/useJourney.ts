import { useEffect, useReducer, useRef, useState } from 'react'
import { defaults, emptyJourney, isJourney, isPreferences } from '../lib/journey'
import { isTravelState, restoreTravel, travelReducer } from '../lib/tickets'
import type { Ticket, TravelState } from '../lib/tickets'
import { readStorage, writeStorage } from '../lib/utils'

export function useJourney(note: string) {
  const [preferences, setPreferences] = useState(() => readStorage('syasou.preferences.v1', defaults, isPreferences))
  const [travel, dispatch] = useReducer(travelReducer, undefined, () => {
    const stored = readStorage<TravelState | null>('syasou.travel.v2', null, isTravelState)
    if (stored) return restoreTravel(stored, Date.now(), note)
    const legacy = readStorage('syasou.journey.v1', emptyJourney, isJourney)
    const active = legacy.phase === 'focus' || legacy.phase === 'rest'
    const legacyArrival = legacy.phase === 'rest' && legacy.deadline !== null ? legacy.deadline - legacy.restMinutes * 60_000 : undefined
    const journey = active ? {
      ...legacy, id: crypto.randomUUID(), speed: preferences.speed, scene: preferences.scene,
      startedAt: Math.max(0, (legacyArrival ?? legacy.deadline ?? Date.now()) - legacy.focusMinutes * 60_000),
      arrivedAt: legacyArrival,
    } : legacy
    return restoreTravel({ journey, tickets: [], pendingArrivalId: null }, Date.now(), note)
  })
  const journey = travel.journey
  const [now, setNow] = useState(Date.now)
  const [saveError, setSaveError] = useState(false)
  const noteRef = useRef(note)
  useEffect(() => { noteRef.current = note }, [note])

  useEffect(() => { writeStorage('syasou.preferences.v1', preferences) }, [preferences])
  // Session, issued ticket and acknowledgement are persisted together: a reload
  // cannot award a second ticket or lose a ticket between separate storage writes.
  useEffect(() => { setSaveError(!writeStorage('syasou.travel.v2', travel)) }, [travel])

  useEffect(() => {
    if (!journey.running) return
    const tick = () => {
      const time = Date.now()
      setNow(time)
      dispatch({ type: 'journey', action: { type: 'tick', now: time }, note: noteRef.current })
    }
    const timer = window.setInterval(tick, 500)
    document.addEventListener('visibilitychange', tick)
    return () => { clearInterval(timer); document.removeEventListener('visibilitychange', tick) }
  }, [journey.running])

  const start = () => {
    const time = Date.now()
    setNow(time)
    dispatch({ type: 'journey', note, action: {
      type: 'start', now: time, focusMinutes: preferences.focusMinutes, restMinutes: preferences.restMinutes,
      id: crypto.randomUUID(), speed: preferences.speed, scene: preferences.scene,
    } })
  }
  const toggle = () => {
    const time = Date.now()
    setNow(time)
    dispatch({ type: 'journey', action: { type: 'toggle', now: time }, note })
  }
  const remaining = journey.running && journey.deadline !== null
    ? Math.max(0, journey.deadline - now) : journey.remaining
  return {
    journey, preferences, setPreferences, start, toggle, remaining, tickets: travel.tickets, saveError,
    pendingArrivalId: travel.pendingArrivalId,
    finish: () => dispatch({ type: 'journey', action: { type: 'finish', now: Date.now() }, note }),
    acknowledgeArrival: () => dispatch({ type: 'acknowledge-arrival' }),
    editTicket: (id: string, changes: Partial<Pick<Ticket, 'title' | 'note'>>) => dispatch({ type: 'edit-ticket', id, changes }),
  }
}
