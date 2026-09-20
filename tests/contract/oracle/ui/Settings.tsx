import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { CloudFog, CloudRain, Eye, EyeOff, Moon, Sun, TrainFront, Wind } from 'lucide-react'
import type { Preferences, Scene, Speed } from '../../../../src/lib/journey'

interface Props { preferences: Preferences; onChange: (preferences: Preferences) => void; active: boolean }

export default function Settings({ preferences, onChange, active }: Props) {
  return <div className="notebook-settings" aria-label="旅の設定">
    <div className="setting-row">
      <span>時間</span>
      <ToggleGroup.Root type="single" className="paper-options" value={String(preferences.focusMinutes)} onValueChange={v => { if (v) onChange({ ...preferences, focusMinutes: Number(v) }) }} aria-label="作業時間">
        {[15, 25, 45, 60, 90].map(n => <ToggleGroup.Item value={String(n)} key={n} aria-label={`${n}分`}>{n}</ToggleGroup.Item>)}
        <ToggleGroup.Item value="0" aria-label="時間を決めずに">∞</ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
    <div className="setting-row">
      <span>休憩</span>
      <ToggleGroup.Root type="single" className="paper-options" value={String(preferences.restMinutes)} onValueChange={v => { if (v) onChange({ ...preferences, restMinutes: Number(v) }) }} aria-label="休憩時間">
        {[3, 5, 10, 15].map(n => <ToggleGroup.Item value={String(n)} key={n} aria-label={`${n}分`}>{n}</ToggleGroup.Item>)}
      </ToggleGroup.Root>
    </div>
    {active && <p className="next-journey-note">時間の変更は次の乗車から</p>}
    <div className="setting-row">
      <span>速度</span>
      <ToggleGroup.Root type="single" className="paper-options speed-options" value={preferences.speed} onValueChange={v => { if (v) onChange({ ...preferences, speed: v as Speed }) }} aria-label="列車の速さ">
        <ToggleGroup.Item value="local">各駅</ToggleGroup.Item>
        <ToggleGroup.Item value="rapid">準急</ToggleGroup.Item>
        <ToggleGroup.Item value="express">特急</ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
    <div className="setting-row">
      <span>光</span>
      <ToggleGroup.Root type="single" className="paper-options scene-options" value={preferences.scene} onValueChange={v => { if (v) onChange({ ...preferences, scene: v as Scene }) }} aria-label="車窓の景色">
        <ToggleGroup.Item value="mist" aria-label="霧"><CloudFog size={19} strokeWidth={1.2} /></ToggleGroup.Item>
        <ToggleGroup.Item value="dawn" aria-label="朝"><Sun size={19} strokeWidth={1.2} /></ToggleGroup.Item>
        <ToggleGroup.Item value="night" aria-label="夜"><Moon size={19} strokeWidth={1.2} /></ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
    <div className="paper-sound-controls">
      {([
        { key: 'trainVolume', label: '列車の走行音', Icon: TrainFront },
        { key: 'rainVolume', label: '雨の音', Icon: CloudRain },
        { key: 'windVolume', label: '風の音', Icon: Wind },
      ] as const).map(({ key, label, Icon }) => <label key={key} className="paper-volume">
        <Icon size={17} strokeWidth={1.2} aria-hidden="true" />
        <input aria-label={label} type="range" min="0" max="100" value={preferences[key]} onChange={e => onChange({ ...preferences, [key]: Number(e.target.value) })} />
      </label>)}
    </div>
    <button className="clock-setting" aria-label="残り時間を表示する" aria-pressed={preferences.showTime} onClick={() => onChange({ ...preferences, showTime: !preferences.showTime })}>
      {preferences.showTime ? <Eye size={17} strokeWidth={1.2} /> : <EyeOff size={17} strokeWidth={1.2} />}<span>時計</span>
    </button>
  </div>
}
