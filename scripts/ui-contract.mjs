import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { parseFragment } from 'parse5'

// Reproduction of the frozen React source is an explicit, isolated operation.
// Routine validation needs only its captured HTML and the MoonBit renderer.
if (process.argv.includes('--generate')) {
  const result = spawnSync('npm', ['run', 'capture', '--prefix', 'tests/contract/oracle/ui'], { stdio: 'inherit' })
  if (result.status !== 0) throw new Error('Install the optional oracle first: npm ci --prefix tests/contract/oracle/ui')
  process.exit(0)
}
process.env.TZ = 'UTC'
globalThis.window = { location: { search: '' }, addEventListener() {}, removeEventListener() {}, matchMedia: () => ({ matches: false, addEventListener() {}, removeEventListener() {} }) }
globalThis.matchMedia = window.matchMedia
const fixtures = JSON.parse(readFileSync(new URL('../tests/contract/ui-fixtures.json', import.meta.url), 'utf8'))
const ui = await import(process.argv.includes('--build-output') ? '../_build/js/release/build/ui/ui.js' : '../src/generated/moonbit/ui.js')
const noop = () => {}
const withCallbacks = props => ({ ...props, onChange: noop, onEnter: noop, onGuide: noop, onComplete: noop, ...(props.editable ? { onTitleChange: noop, onNoteChange: noop } : {}) })
function style(value) {
  const entries = value.split(';').filter(Boolean).map(part => {
    const colon = part.indexOf(':')
    return [part.slice(0, colon).trim(), part.slice(colon + 1).trim()]
  })
  // Identity transforms have equivalent visual output whether omitted or explicit.
  for (const entry of entries) if (entry[0] === 'transform') entry[1] = entry[1].replace(/(?:translate[XYZ]?\(0(?:px)?\)|rotate[XYZ]?\(0(?:deg)?\)|scale[XYZ]?\(1\)|none)/g, '').trim()
  return Object.fromEntries(entries.filter(([key, value]) => key !== 'transform' || value).sort(([a], [b]) => a.localeCompare(b)))
}
function canonical(node) {
  if (node.nodeName === '#comment') return null
  if (node.nodeName === '#text') return node.value
  // React's server-only resource hint is absent from a browser DOM renderer.
  if (node.tagName === 'link' && node.attrs.some(a => a.name === 'rel' && a.value === 'preload')) return null
  const attrs = Object.fromEntries((node.attrs ?? []).filter(a => a.name !== 'data-radix-collection-item').map(a => [a.name, a.name === 'style' ? style(a.value) : a.value]).sort(([a], [b]) => a.localeCompare(b)))
  // Radix initializes its roving tab stop after mount; ours starts selected.
  // Keyboard focus and selection are covered by the unchanged browser suite.
  if (attrs.role === 'radio') delete attrs.tabindex
  // Motion's spring-backed card rotation is absent from its server HTML.
  // Both faces and their content remain compared; browser drag tests cover rotation.
  if (attrs.class === 'ticket-turn' && attrs.style) delete attrs.style.transform
  if (attrs.style && Object.keys(attrs.style).length === 0) delete attrs.style
  const children = (node.childNodes ?? []).map(canonical).filter(n => n !== null)
  return { tag: node.tagName ?? 'fragment', attrs, children }
}
for (const [index, fixture] of fixtures.entries()) {
  const actual = ui.renderContract(fixture.name, withCallbacks(fixture.props))
  assert.deepStrictEqual(canonical(parseFragment(actual)), canonical(parseFragment(fixture.html)), `${fixture.name} #${index}: semantic HTML contract`)
}
console.log(`${fixtures.length} source-derived semantic UI contracts passed`)
