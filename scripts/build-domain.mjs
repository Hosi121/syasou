import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { buildWasm } from './build-wasm.mjs'
import { checkCompiler, compilerVersion, moon } from './moon-command.mjs'
import { artifactNames, artifactSources, digest, outputDir, sourceDigest } from './domain-artifacts.mjs'

checkCompiler()
const wasmArtifacts = buildWasm()
moon(['build', '--target', 'js', '--release'])
mkdirSync(outputDir, { recursive: true })
const artifacts = {}
const check = process.argv.includes('--check')
function output(name, content) {
  const path = new URL(name, outputDir)
  if (check) {
    if (!readFileSync(path).equals(Buffer.from(content))) throw new Error(`Generated ${name} is stale; run npm run build:domain`)
  } else writeFileSync(path, content)
}
for (const name of Object.keys(artifactSources)) {
  const content = readFileSync(`_build/js/release/build/${artifactSources[name]}`, 'utf8')
  artifacts[name] = digest(content)
  output(name, content)
}
for (const [name, content] of Object.entries(wasmArtifacts)) {
  artifacts[name] = digest(content)
  output(name, content)
}
output('build.json', JSON.stringify({ compiler: compilerVersion, source: sourceDigest(), artifacts }, null, 2) + '\n')
console.log(check ? 'MoonBit artifacts reproduce exactly' : 'Generated MoonBit Wasm, browser imports, and JS contract artifacts')
