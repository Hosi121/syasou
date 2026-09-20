import { writeFileSync } from 'node:fs'
import { createServer } from 'vite'
import react from '@vitejs/plugin-react'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

process.env.TZ = 'UTC'
// Initialize Motion in its server environment before providing the URL/media
// globals needed by the frozen browser modules at import time.
await import('motion/react')
globalThis.window = { location: { search: '' }, addEventListener() {}, removeEventListener() {}, matchMedia: () => ({ matches: false, addEventListener() {}, removeEventListener() {} }) }
const preferences = { focusMinutes: 25, restMinutes: 5, speed: 'local', scene: 'mist', showTime: true, trainVolume: 45, rainVolume: 0, windVolume: 20 }
const ticket = { id: 'trip-🚃', title: '読みかけの本', note: '続きを読む。', startedAt: 1800000000000, arrivedAt: 1800001500000, speed: 'local', scene: 'mist' }
const cases = [
  ['RailMark', {}], ['RailMark', { strokeWidth: .8 }], ['RouteMap', {}],
  ...[undefined, 'welcome', 'sample'].flatMap(kind => [false, true].map(back => ['TicketCard', { ticket: { ...ticket, ...(kind ? { kind } : {}) }, back }])),
  ['TicketCard', { ticket: { ...ticket, title: '', note: '', speed: 'express', scene: 'night' }, editable: true }],
  ...[false, true].flatMap(active => [true, false].map(showTime => ['Settings', { preferences: { ...preferences, showTime }, active }])),
  ...['mist', 'dawn', 'night'].map(scene => ['Landscape', { scene, speed: 'rapid', moving: true, windowOpen: false, travelling: true }]),
  ...[{ ready: false, leaving: false, failed: false }, { ready: true, leaving: false, failed: false }, { ready: true, leaving: true, failed: false }, { ready: false, leaving: false, failed: true }].map(props => ['Opening', props]),
]
const noop = () => {}
const withCallbacks = props => ({ ...props, onChange: noop, onEnter: noop, onGuide: noop, onComplete: noop, ...(props.editable ? { onTitleChange: noop, onNoteChange: noop } : {}) })
const server = await createServer({ root: new URL('../../../../', import.meta.url).pathname, configFile: false, plugins: [react()], optimizeDeps: { noDiscovery: true, exclude: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime'] }, server: { middlewareMode: true }, appType: 'custom' })
const path = new URL('../../ui-fixtures.json', import.meta.url)
try {
  const captured = []
  for (const [name, props] of cases) {
    const module = await server.ssrLoadModule(`/tests/contract/oracle/ui/${name}.tsx`)
    captured.push({ name, props, html: renderToStaticMarkup(createElement(module.default, withCallbacks(props))) })
  }
  writeFileSync(path, JSON.stringify(captured, null, 2) + '\n')
  console.log(`${captured.length} frozen React UI fixtures captured`)

} finally { await server.close() }
