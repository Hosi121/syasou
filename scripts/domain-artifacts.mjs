import { createHash } from 'node:crypto'
import { readFileSync, readdirSync } from 'node:fs'

export const outputDir = new URL('../src/generated/moonbit/', import.meta.url)
export const artifactNames = ['bridge.js', 'bridge.d.ts', 'moonbit.d.ts']
export const digest = content => createHash('sha256').update(content).digest('hex')

export function sourceDigest() {
  const files = ['moon.mod', ...readdirSync('moonbit', { recursive: true })
    .filter(path => path.endsWith('.mbt') || path.endsWith('moon.pkg')).map(path => `moonbit/${path}`)].sort()
  return digest(files.map(path => `${path}\0${digest(readFileSync(path))}\n`).join(''))
}

export function checkArtifacts() {
  const manifest = JSON.parse(readFileSync(new URL('build.json', outputDir), 'utf8'))
  if (manifest.source !== sourceDigest()) throw new Error('MoonBit source changed. Run npm run build:domain and commit src/generated/moonbit/.')
  for (const name of artifactNames) {
    if (manifest.artifacts[name] !== digest(readFileSync(new URL(name, outputDir)))) throw new Error(`Generated ${name} changed. Run npm run build:domain.`)
  }
}
