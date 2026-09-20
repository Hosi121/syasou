import assert from 'node:assert/strict'
import { mkdirSync, readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'

mkdirSync('artifacts/contract-signatures', { recursive: true })
const modules = ['journey', 'tickets', 'sound', 'windowRenderer', 'utils', 'views', 'ticketInteraction', 'journeyLegacy', 'sampleTickets']
const result = spawnSync('node_modules/.bin/tsc', [
  '--ignoreConfig', '--declaration', '--emitDeclarationOnly', '--skipLibCheck',
  '--target', 'ES2022', '--moduleResolution', 'bundler', '--module', 'ESNext',
  '--jsx', 'react-jsx', '--rootDir', 'src',
  '--outDir', 'artifacts/contract-signatures', ...modules.map(name => `src/lib/${name}.ts`),
], { stdio: 'inherit' })
if (result.status !== 0) throw new Error('Type declaration generation failed')
// TS emits private member names in .d.ts. Their implementation changes while
// the class keeps a private member and the same public constructor/methods.
const publicOnly = (name, text) => name === 'sound' ? text.replace(/^    private \w+;\n/gm, '') : text
for (const name of modules) {
  assert.equal(publicOnly(name, readFileSync(`artifacts/contract-signatures/lib/${name}.d.ts`, 'utf8')), publicOnly(name, readFileSync(`tests/contract/signatures/${name}.d.ts`, 'utf8')), `${name}: public API changed`)
}
console.log(`${modules.length} public TypeScript declarations match the captured API (excluding private class member names)`)
