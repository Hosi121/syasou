import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { buildWasm } from './wasm.mjs'
import { checkCompiler, compilerVersion, moon } from './moon.mjs'
import { artifactSources, digest, outputDir, sourceDigest } from './artifacts.mjs'

checkCompiler()
const wasmArtifacts = buildWasm()
moon(['build', '--target', 'js', '--release'])
mkdirSync(outputDir, { recursive: true })
const artifacts = {}
const check = process.argv.includes('--check')
function output(name, content) {
  const path = new URL(name, outputDir)
  if (check) {
    if (!readFileSync(path).equals(Buffer.from(content))) throw new Error(`Generated ${name} is stale; run npm run build:moonbit`)
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
const guard = readFileSync(new URL('boot-guard.js', outputDir), 'utf8').trim()
const html = readFileSync('index.html', 'utf8')
const generatedHtml = html.replace(/<!-- moonbit:boot-guard:start -->[\s\S]*?<!-- moonbit:boot-guard:end -->/, `<!-- moonbit:boot-guard:start -->\n    <script>${guard}</script>\n    <!-- moonbit:boot-guard:end -->`)
if (check) {
  if (html !== generatedHtml) throw new Error('Generated HTML boot guard changed; run npm run build:moonbit')
} else writeFileSync('index.html', generatedHtml)
console.log(check ? 'MoonBit artifacts reproduce exactly' : 'Generated MoonBit Wasm, browser imports, bootstrap, and build policy')
