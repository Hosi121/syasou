import * as Dialog from '@radix-ui/react-dialog'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { useRef } from 'react'
import { cn } from '../lib/utils'

const steps = [
  { title: '手帳で、旅の支度。', description: '時間と速さを選び、▶で出発。メモには、今日進めたいことを書けます。' },
  { title: 'ときどき、窓の外へ。', description: '窓を押すと、景色だけの眺めに。もう一度押すと席へ戻れます。横向きにして、広い車窓を眺めるのも。' },
  { title: 'ひと区切りを、一枚に。', description: '到着すると、作業が切符になります。まずは記念の一枚を受け取って、手帳にしまってみましょう。' },
]

function GuideDrawing({ step }: { step: number }) {
  return <svg viewBox="0 0 150 85" fill="none" aria-hidden="true" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
    {step === 0 ? <>
      <path d="M20 18l54 5 53-5v53l-53 5-54-5V18ZM74 24v51M26 26l41 4M26 36l33 3M26 45l26 3M82 31l34-3M82 40l28-3" />
      <circle cx="109" cy="61" r="14" fill="#e5e5e5" /><path d="M106 54l9 7-9 6V54Z" />
    </> : step === 1 ? <>
      <rect x="16" y="12" width="117" height="61" rx="13" /><rect x="21" y="17" width="107" height="50" rx="9" />
      <path d="M23 52l23-13 20 9 26-19 34 17M23 61l36-10 31 11 36-9M44 80h62" />
      <path d="M96 7h23m-7-4 7 4-7 4" strokeWidth=".8" />
    </> : <>
      <path d="M30 29l-2-14 93-8 5 51-19 2" /><path d="M26 31l96 6-3 41-96-6 3-41Z" fill="#ddd" />
      <path d="M30 46l86 5M27 58l87 5M79 50l22 1" /><rect x="39" y="14" width="63" height="44" rx="3" transform="rotate(5 39 14)" fill="#e7e7e7" />
      <path d="M40 27l60 5M39 48l60 5M53 37l30 3M25 60l49-2 41 8" /><circle cx="46" cy="52" r="2" />
    </>}
  </svg>
}

interface Props {
  step: number
  onStep: (step: number) => void
  onFinish: () => void
  onSkip: () => void
}

export default function Onboarding({ step, onStep, onFinish, onSkip }: Props) {
  const primary = useRef<HTMLButtonElement>(null)
  const receivingTicket = useRef(false)
  const reducedMotion = useReducedMotion()
  const current = steps[step]
  const finish = () => { receivingTicket.current = true; onFinish() }
  return <Dialog.Root open onOpenChange={open => { if (!open) onSkip() }}>
    <Dialog.Portal>
      <Dialog.Overlay className={cn('guide-shade', { 'guide-shade-window': step === 1 })} />
      <Dialog.Content className="guide-position"
        onOpenAutoFocus={event => { event.preventDefault(); primary.current?.focus({ preventScroll: true }) }}
        onCloseAutoFocus={event => {
          event.preventDefault()
          if (!receivingTicket.current) queueMicrotask(() => document.querySelector<HTMLButtonElement>('.notebook-object')?.focus({ preventScroll: true }))
        }}>
        <motion.div className="guide-paper" initial={reducedMotion ? false : { opacity: 0, y: 14, rotate: 0 }} animate={{ opacity: 1, y: 0, rotate: -1.2 }} transition={{ duration: .18, ease: 'easeOut' }}>
          <div className="guide-topline">
            <Dialog.Title>旅のしおり</Dialog.Title>
            <Dialog.Close className="guide-skip">スキップ</Dialog.Close>
          </div>
          <div className="guide-drawing"><GuideDrawing step={step} /></div>
          <div aria-live="polite" aria-atomic="true">
            <h2 className="guide-title">{current.title}</h2>
            <Dialog.Description className="guide-description">{current.description}</Dialog.Description>
          </div>
          <div className="guide-footer">
            <div className="guide-stops" role="img" aria-label={`案内 ${step + 1} / 3`}>
              {steps.map((_, i) => <span key={i} className={cn({ 'guide-stop-visited': i <= step, 'guide-stop-current': i === step })} />)}
            </div>
            {step > 0 && <button className="guide-back" onClick={() => onStep(step - 1)} aria-label="前の案内へ"><ArrowLeft size={17} strokeWidth={1} /></button>}
            <button ref={primary} className="guide-next" onClick={step === 2 ? finish : () => onStep(step + 1)}>{step === 2 ? '切符を受け取る' : '次へ'}<ArrowRight size={17} strokeWidth={1} /></button>
          </div>
        </motion.div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
}
