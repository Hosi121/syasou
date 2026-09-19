import { existsSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { resolve, dirname } from 'node:path'

export const compilerVersion = 'v0.10.13+cbb11c36f'
const localBin = resolve('artifacts/moon-toolchain/bin/moon')
const command = process.env.MOON_BIN || (existsSync(localBin) ? localBin : 'moon')
const env = { ...process.env }
if (command !== 'moon') {
  env.MOON_HOME = resolve(dirname(command), '..')
  env.PATH = `${dirname(command)}:${env.PATH}`
}

export function moon(args, capture = false) {
  const result = spawnSync(command, args, { env, encoding: 'utf8', stdio: capture ? 'pipe' : 'inherit' })
  if (result.error) throw new Error(`MoonBit is required for this command. Install ${compilerVersion} or set MOON_BIN.`, { cause: result.error })
  if (result.status !== 0) throw new Error(`moon ${args.join(' ')} failed\n${result.stderr || ''}`)
  return result.stdout || ''
}

export function checkCompiler() {
  const result = spawnSync(command === 'moon' ? 'moonc' : resolve(dirname(command), 'moonc'), ['-v'], { env, encoding: 'utf8' })
  if (result.status !== 0 || !result.stdout.includes(compilerVersion)) {
    throw new Error(`Expected MoonBit ${compilerVersion}; got ${result.stdout || result.error || result.stderr}`)
  }
}

if (process.argv[1] === resolve('scripts/moon-command.mjs')) {
  checkCompiler()
  moon(process.argv.slice(2))
}
