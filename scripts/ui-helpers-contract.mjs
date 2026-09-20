import assert from 'node:assert/strict'
import { readFileSync, writeFileSync } from 'node:fs'
import { createServer } from 'vite'

globalThis.window = { location: { search: '' } }
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
const fixturePath = new URL('../tests/contract/ui-helpers-fixtures.json', import.meta.url)
const times = [-Infinity, -60001, -1, -0, 0, .1, 999, 1000, 59999, 60000, 3600000, 9007199254740991, 1e25, Infinity, NaN]
const classes = [[], ['a', false, null, undefined, 0, 1, { b: true, c: false }], ['p-2 p-4', ['m-1', { hidden: false }]], ['text-sm', 'text-lg', 'hover:p-2 hover:p-3'], ['foo', 'foo']]
const searches = ['', '?demo=1', '?demo=0', '?demo=01', '?demo=1&demo=0', '?demo=0&demo=1', '?%64emo=%31']
try {
  const utils = await server.ssrLoadModule('/tests/contract/oracle/helpers/utils.ts')
  const journey = await server.ssrLoadModule('/tests/contract/oracle/helpers/journey.ts')
  const views = await server.ssrLoadModule('/tests/contract/oracle/helpers/views.ts')
  const profiles = []
  for (let i=0;i<searches.length;i++) {
    window.location.search = searches[i]
    const profile = await server.ssrLoadModule(`/tests/contract/oracle/helpers/profile.ts?case=${i}`)
    profiles.push([profile.demoMode, profile.storageKey('syasou.note.v1')])
  }
  const captured = { times: times.map(utils.formatTime), classes: classes.map(values => utils.cn(...values)), profiles, defaults: journey.defaults, emptyJourney: journey.emptyJourney, views: views.views }
  if (process.argv.includes('--generate')) writeFileSync(fixturePath, JSON.stringify(captured, null, 2) + '\n')
  else {
    assert.deepStrictEqual(captured, JSON.parse(readFileSync(fixturePath, 'utf8')), 'Frozen helper output drifted')
    if (!process.argv.includes('--check')) {
      const moon = await import('../src/generated/moonbit/bridge.js')
      assert.deepStrictEqual(times.map(moon.formatTime), captured.times)
      assert.deepStrictEqual(classes.map(moon.classNames), captured.classes)
      assert.deepStrictEqual(searches.map(search => { const demo=moon.isDemoSearch(search); return [demo,moon.profileStorageKey('syasou.note.v1',demo)] }), captured.profiles)
      assert.deepStrictEqual(moon.defaultPreferences(), captured.defaults)
      assert.deepStrictEqual(moon.emptyJourney(), captured.emptyJourney)
      assert.deepStrictEqual(moon.views(), captured.views)
    }
  }
  console.log('30 source-derived UI helper contracts ' + (process.argv.includes('--generate') ? 'captured' : 'passed'))
} finally {await server.close()}
