import { writeFileSync, readFileSync } from 'node:fs'
import * as journey from '../tests/contract/oracle/journey.ts'
import * as tickets from '../tests/contract/oracle/tickets.ts'
import { cases, encode, sharing } from '../tests/contract/cases.mjs'

const oracle = { ...journey, ...tickets }
const fixtures = cases.map(({ name, fn, args }) => {
  const result = oracle[fn](...args)
  return encode({ name, fn, args, result, sharing: sharing(result, args[0]) })
})
const output = JSON.stringify(fixtures, null, 2) + '\n'
const path = new URL('../tests/contract/fixtures.json', import.meta.url)
if (process.argv.includes('--check')) {
  if (readFileSync(path, 'utf8') !== output) throw new Error('Oracle fixtures changed; run npm run fixtures:domain')
} else writeFileSync(path, output)
console.log(`${fixtures.length} source-generated domain fixtures`)
