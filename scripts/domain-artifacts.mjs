import { createHash } from 'node:crypto'
import { readFileSync, readdirSync } from 'node:fs'

export const outputDir = new URL('../src/generated/moonbit/', import.meta.url)
export const artifactSources = Object.fromEntries([
  ...['bridge'].flatMap(name =>
    ['js', 'd.ts'].map(ext => [`${name}.${ext}`, `${name}/${name}.${ext}`])),
  ['moonbit.d.ts', 'bridge/moonbit.d.ts'],
  ['bootstrap.js', 'bootstrap/bootstrap.js'],
  ['boot-guard.js', 'boot_guard/boot_guard.js'],
  ['runtime-policy.js', 'runtime_policy/runtime_policy.js'],
  ['runtime-policy.d.ts', 'runtime_policy/runtime_policy.d.ts'],
])
export const artifactNames = [...Object.keys(artifactSources), 'app.wasm', 'browser-host.js', 'browser-host.d.ts']
export const digest = content => createHash('sha256').update(content).digest('hex')

export function sourceDigest() {
  const files = ['moon.mod', 'scripts/build-wasm.mjs', 'scripts/generate-browser-ffi.mjs', 'scripts/domain-artifacts.mjs', ...readdirSync('moonbit', { recursive: true })
    .filter(path => path.endsWith('.mbt') || path.endsWith('moon.pkg')).map(path => `moonbit/${path}`)].sort()
  return digest(files.map(path => `${path}\0${digest(readFileSync(path))}\n`).join(''))
}

export function checkArtifacts() {
  const manifest = JSON.parse(readFileSync(new URL('build.json', outputDir), 'utf8'))
  if (manifest.source !== sourceDigest()) throw new Error('MoonBit source changed. Run npm run build:domain and commit src/generated/moonbit/.')
  for (const name of artifactNames) {
    if (manifest.artifacts[name] !== digest(readFileSync(new URL(name, outputDir)))) throw new Error(`Generated ${name} changed. Run npm run build:domain.`)
  }
  const guard = readFileSync(new URL('boot-guard.js', outputDir), 'utf8').trim()
  if (!readFileSync('index.html', 'utf8').includes(`<script>${guard}</script>`)) throw new Error('Generated HTML boot guard changed. Run npm run build:domain.')
}
