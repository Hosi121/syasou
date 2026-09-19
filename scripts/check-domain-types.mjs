import assert from 'node:assert/strict'
import { mkdirSync, readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'

mkdirSync('artifacts/contract-signatures', { recursive: true })
const result = spawnSync('node_modules/.bin/tsc', [
  '--ignoreConfig', '--declaration', '--emitDeclarationOnly', '--skipLibCheck',
  '--target', 'ES2022', '--moduleResolution', 'bundler', '--module', 'ESNext',
  '--outDir', 'artifacts/contract-signatures', 'src/lib/journey.ts', 'src/lib/tickets.ts',
], { stdio: 'inherit' })
if (result.status !== 0) throw new Error('Type declaration generation failed')
for (const name of ['journey', 'tickets']) {
  assert.equal(readFileSync(`artifacts/contract-signatures/${name}.d.ts`, 'utf8'), readFileSync(`tests/contract/signatures/${name}.d.ts`, 'utf8'), `${name}: public API changed`)
}
console.log('Public TypeScript declarations match the original API exactly')
