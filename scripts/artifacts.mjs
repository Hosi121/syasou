import { createHash } from 'node:crypto'
import { readFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

export const outputDir = new URL('../src/generated/moonbit/', import.meta.url)
export const artifactSources = Object.fromEntries([
  ['bootstrap.js', 'bootstrap/bootstrap.js'],
  ['boot-guard.js', 'boot_guard/boot_guard.js'],
  ['runtime-policy.js', 'runtime_policy/runtime_policy.js'],
])
export const artifactNames = [...Object.keys(artifactSources), 'app.wasm', 'browser-host.js']
export const digest = content => createHash('sha256').update(content).digest('hex')

export function sourceDigest() {
  const files = ['moon.mod', ...readdirSync('scripts').filter(path => path.endsWith('.mjs')).map(path => `scripts/${path}`), ...readdirSync('moonbit', { recursive: true })
    .filter(path => path.endsWith('.mbt') || path.endsWith('moon.pkg')).map(path => `moonbit/${path}`)].sort()
  return digest(files.map(path => `${path}\0${digest(readFileSync(path))}\n`).join(''))
}

export function checkArtifacts() {
  const manifest = JSON.parse(readFileSync(new URL('build.json', outputDir), 'utf8'))
  if (manifest.source !== sourceDigest()) throw new Error('MoonBit source changed. Run npm run build:moonbit and commit src/generated/moonbit/.')
  for (const name of artifactNames) {
    if (manifest.artifacts[name] !== digest(readFileSync(new URL(name, outputDir)))) throw new Error(`Generated ${name} changed. Run npm run build:moonbit.`)
  }
  const guard = readFileSync(new URL('boot-guard.js', outputDir), 'utf8').trim()
  if (!readFileSync('index.html', 'utf8').includes(`<script>${guard}</script>`)) throw new Error('Generated HTML boot guard changed. Run npm run build:moonbit.')
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  checkArtifacts()
  console.log('MoonBit source and committed artifacts match (no compiler required)')
}
