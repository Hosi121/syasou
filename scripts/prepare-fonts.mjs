import { readdirSync, readFileSync, writeFileSync, mkdirSync, copyFileSync, mkdtempSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { execFileSync } from 'node:child_process'

// Optional maintenance command. The generated files are checked in and normal builds need only Node.
const root = new URL('../', import.meta.url).pathname
function sourceText(directory) {
  return readdirSync(directory, { withFileTypes: true }).map(entry => {
    const path = join(directory, entry.name)
    return entry.isDirectory() ? sourceText(path) : /\.(tsx?|html|mbt)$/.test(path) ? readFileSync(path, 'utf8') : ''
  }).join('\n')
}
const directory = mkdtempSync(join(tmpdir(), 'syasou-fonts-'))
const destination = join(root, 'public/fonts')
mkdirSync(destination, { recursive: true })
try {
  const textFile = join(directory, 'characters.txt')
  writeFileSync(textFile, sourceText(join(root, 'src')) + '\n' + sourceText(join(root, 'moonbit')))
  for (const weight of [400, 500]) {
    execFileSync('pyftsubset', [
      join(root, `node_modules/@fontsource/shippori-mincho/files/shippori-mincho-japanese-${weight}-normal.woff2`),
      `--text-file=${textFile}`, `--output-file=${join(destination, `shippori-mincho-${weight}.woff2`)}`,
      '--flavor=woff2', '--layout-features=*', '--name-IDs=*', '--name-legacy', '--name-languages=*',
    ], { stdio: 'inherit' })
  }
  execFileSync('pyftsubset', [
    join(root, 'node_modules/@fontsource/shippori-mincho/files/shippori-mincho-japanese-500-normal.woff2'),
    '--text=車窓', `--output-file=${join(destination, 'syasou-title.woff2')}`,
    '--flavor=woff2', '--layout-features=*',
  ], { stdio: 'inherit' })
  copyFileSync(join(root, 'node_modules/@fontsource/shippori-mincho/LICENSE'), join(destination, 'Shippori-Mincho-LICENSE.txt'))
  console.log('Prepared local Japanese UI fonts.')
} finally { rmSync(directory, { recursive: true, force: true }) }
