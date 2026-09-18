import { useEffect, useState, useSyncExternalStore } from 'react'
import Landscape, { type LandscapeProps } from './Landscape'
import { cn } from '../lib/utils'

const subscribeVisibility = (listener: () => void) => {
  document.addEventListener('visibilitychange', listener)
  return () => document.removeEventListener('visibilitychange', listener)
}
const isVisible = () => !document.hidden
const artwork = ['/scenery/overcast-sky.png', '/scenery/snowfield.png', '/scenery/train.png']

// Alternate original / mirror / original / mirror. Every join matches exactly,
// and translating by two panels loops without cutting to a different landscape.
function Strip({ layer }: { layer: string }) {
  return <div className={cn('snow-layer', `snow-${layer}`)}>
    <div className="snow-strip">{[0, 1, 2, 3].map(i => <div className="snow-tile" key={i} />)}</div>
  </div>
}

export default function SnowScenery({ exterior = false, ...props }: LandscapeProps & { exterior?: boolean }) {
  const visible = useSyncExternalStore(subscribeVisibility, isVisible)
  const [attempt, setAttempt] = useState(0)
  const [status, setStatus] = useState<'loading' | 'ready' | 'failed'>('loading')
  useEffect(() => {
    let active = true
    setStatus('loading')
    const images = artwork.slice(0, exterior ? 3 : 2).map(source => {
      const image = new Image()
      image.src = source
      return image.decode()
    })
    void Promise.all(images).then(() => { if (active) setStatus('ready') }, () => { if (active) setStatus('failed') })
    return () => { active = false }
  }, [attempt, exterior])

  if (status === 'failed') return <>
    <Landscape {...props} />
    <div className="scenery-error" role="alert">雪原の素材を読み込めませんでした。
      <button onClick={() => setAttempt(value => value + 1)}>もう一度読み込む</button>
    </div>
  </>

  return <div className={cn('landscape', 'snow-landscape', `scene-${props.scene}`, `speed-${props.speed}`, {
    'landscape-paused': !props.moving || !visible || status !== 'ready',
    'snow-exterior': exterior, 'window-is-open': props.windowOpen,
  })} aria-hidden="true" data-renderer="artwork" data-loaded={status === 'ready'}>
    <div className="snow-artwork" data-ready={status === 'ready'}>
      <Strip layer="sky" />
      <Strip layer="ground" />
      {exterior && <div className="distant-train"><div className="train-artwork" /><span className="train-contact-shadow" /></div>}
      <Strip layer="near" />
    </div>
    {status === 'loading' && <span className="scenery-loading" />}
    {!exterior && <div className="glass-reflection" />}
  </div>
}
