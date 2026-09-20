import assert from 'node:assert/strict'
import { readFileSync, writeFileSync } from 'node:fs'
import { createServer } from 'vite'
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
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
const path = new URL('../tests/contract/ui-fixtures.json', import.meta.url)
try {
  const captured = []
  for (const [name, props] of cases) {
    const module = await server.ssrLoadModule(`/tests/contract/oracle/ui/${name}.tsx`)
    captured.push({ name, props, html: renderToStaticMarkup(createElement(module.default, withCallbacks(props))) })
  }
  if (process.argv.includes('--generate')) writeFileSync(path, JSON.stringify(captured, null, 2) + '\n')
  else {
    const fixtures = JSON.parse(readFileSync(path, 'utf8'))
    assert.deepStrictEqual(captured, fixtures, 'Frozen UI output drifted')
    if (!process.argv.includes('--check')) {
      const ui = await import(process.argv.includes('--build-output') ? '../_build/js/release/build/ui/ui.js' : '../src/generated/moonbit/ui.js')
      await ui.prepareUi()
      for (const fixture of fixtures) {
        const actual = renderToStaticMarkup(createElement(ui[fixture.name], withCallbacks(fixture.props)))
        if (actual !== fixture.html) {
          let offset = 0
          while (actual[offset] === fixture.html[offset] && offset < actual.length) offset++
          assert.fail(`${fixture.name}: rendered output differs at ${offset}\nactual: ${actual.slice(offset, offset + 180)}\nsource: ${fixture.html.slice(offset, offset + 180)}`)
        }
      }
    }
  }
  console.log(`${captured.length} source-rendered UI contracts ${process.argv.includes('--generate') ? 'captured' : process.argv.includes('--check') ? 'reproduced' : 'passed'}`)
} finally { await server.close() }
