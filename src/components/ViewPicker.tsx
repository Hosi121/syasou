import * as Popover from '@radix-ui/react-popover'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { Check, PanelsTopLeft } from 'lucide-react'
import { useState } from 'react'
import { isView, views, type View } from '../lib/views'
import { cn } from '../lib/utils'

interface Props { value: View; onChange: (view: View) => void }

export default function ViewPicker({ value, onChange }: Props) {
  const [open, setOpen] = useState(false)
  return <Popover.Root open={open} onOpenChange={setOpen}>
    <Popover.Trigger asChild>
      <button className="corner-action view-picker-trigger" aria-label="眺めを選ぶ" title="眺めを選ぶ"><PanelsTopLeft size={19} strokeWidth={1} /></button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="view-picker" side="top" align="end" sideOffset={14} collisionPadding={24} aria-label="眺めを選ぶ"
        onEscapeKeyDown={event => event.stopPropagation()}>
        <ToggleGroup.Root type="single" className="view-options" value={value} aria-label="眺め" onValueChange={next => {
          if (isView(next)) { onChange(next); setOpen(false) }
        }}>
          {views.map(view => <ToggleGroup.Item key={view.id} value={view.id} className="view-option" aria-label={view.label}>
            <span className={cn('view-preview', `view-preview-${view.id}`)} aria-hidden="true">
              <span className="preview-sky" /><span className="preview-ground" />
              {view.id === 'train' && <span className="train-artwork preview-train" />}
            </span>
            <span className="view-option-label">{view.label}<Check size={12} strokeWidth={1.3} aria-hidden="true" /></span>
          </ToggleGroup.Item>)}
        </ToggleGroup.Root>
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
}
