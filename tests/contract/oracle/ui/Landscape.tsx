import { useEffect, useRef, useState } from 'react'
import type { Scene, Speed } from '../../../../src/lib/journey'
import { createWindowRenderer } from '../../../../src/lib/windowRenderer'
import { cn } from '../../../../src/lib/utils'

export interface LandscapeProps { scene: Scene; speed: Speed; moving: boolean; windowOpen: boolean; travelling: boolean }

function FallbackScenery() {
  // Each strip joins at its ends so the low-power fallback also travels endlessly.
  const hills = 'M0 360 C130 340 170 210 310 250 S490 430 660 350 S880 170 1030 290 S1140 350 1200 360 V900 H0Z'
  const slopes = 'M0 540 C130 600 200 400 350 440 S580 660 740 520 S1030 430 1200 540 V900 H0Z'
  return <div className="window-fallback-scene">
    <svg className="fallback-ridge" viewBox="0 0 2400 900" preserveAspectRatio="none">
      <path d={hills} /><path d={hills} transform="translate(1200)" />
    </svg>
    <svg className="fallback-slope" viewBox="0 0 2400 900" preserveAspectRatio="none">
      <path d={slopes} /><path d={slopes} transform="translate(1200)" />
    </svg>
    <svg className="fallback-trees" viewBox="0 0 2400 900" preserveAspectRatio="none">
      {[0, 1200].map(offset => <g key={offset} transform={`translate(${offset})`}>
        <path d="M0 795 Q160 770 310 800 T610 795 T940 810 T1200 795 V900 H0Z" />
        {Array.from({ length: 16 }, (_, i) => <path key={i}
          transform={`translate(${i * 76 + 10},${810 + Math.sin(i * 13) * 15}) scale(${.55 + (Math.sin(i * 9) + 1) * .3})`}
          d="M-4 15 V-65 L-55-60 L-39-89 L-48-87 L-29-124 L-37-119 L-19-155 L-26-152 L0-221 L20-166 L14-169 L33-128 L24-132 L44-93 L34-97 L53-62 L4-66 V15Z" />)}
      </g>)}
    </svg>
  </div>
}

export default function Landscape(props: LandscapeProps) {
  const canvas = useRef<HTMLCanvasElement>(null)
  const renderer = useRef<ReturnType<typeof createWindowRenderer>>(null)
  const [webgl, setWebgl] = useState(false)
  useEffect(() => {
    if (!canvas.current) return
    renderer.current = createWindowRenderer(canvas.current, () => setWebgl(false))
    setWebgl(Boolean(renderer.current))
    return () => { renderer.current?.dispose(); renderer.current = null }
  }, [])
  useEffect(() => { renderer.current?.update(props) }, [props.scene, props.speed, props.moving, props.windowOpen, props.travelling])
  return <div className={cn('landscape', `scene-${props.scene}`, `speed-${props.speed}`, {
    'landscape-paused': !props.moving, 'window-is-open': props.windowOpen,
  })} aria-hidden="true" data-renderer={webgl ? 'webgl' : 'css'}>
    <div className="window-gradient" />
    {!webgl && <FallbackScenery />}
    <canvas ref={canvas} className="window-canvas" />
    {!webgl && <div className="window-fallback-grain" />}
    <div className="glass-reflection" />
  </div>
}
