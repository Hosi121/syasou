import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { checkCompiler, compilerVersion, moon } from './moon-command.mjs'
import { artifactNames, digest, outputDir, sourceDigest } from './domain-artifacts.mjs'

checkCompiler()
moon(['build', '--release'])
mkdirSync(outputDir, { recursive: true })
const artifacts = {}
const check = process.argv.includes('--check')
function output(name, content) {
  const path = new URL(name, outputDir)
  if (check) {
    if (readFileSync(path, 'utf8') !== content) throw new Error(`Generated ${name} is stale; run npm run build:domain`)
  } else writeFileSync(path, content)
}
for (const name of artifactNames) {
  const content = readFileSync(`_build/js/release/build/bridge/${name}`, 'utf8')
  artifacts[name] = digest(content)
  output(name, content)
}
output('build.json', JSON.stringify({ compiler: compilerVersion, source: sourceDigest(), artifacts }, null, 2) + '\n')
console.log(check ? 'MoonBit artifacts reproduce exactly' : 'Generated MoonBit ESM and compiler declarations')
