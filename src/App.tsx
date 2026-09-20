import './scenery.css'
import './mobile.css'

// Keep Vite's lazy world entry; application rendering and hooks live in MoonBit.
export { App as default, prepareUi } from './generated/moonbit/ui_world.js'
export interface AppProps { covered: boolean; guideRequest: number; onReady: () => void; onShowOpening: () => void }
