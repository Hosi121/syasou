import '@fontsource/dm-mono/latin-400.css'
import './styles.css'
import { start } from './wasm'

const root = document.getElementById('root')!
const fallback = root.firstElementChild!
try {
  await start()
} catch {
  root.replaceChildren(fallback)
  document.documentElement.dataset.bootError = 'true'
}
