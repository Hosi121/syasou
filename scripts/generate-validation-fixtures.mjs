import { readFileSync, writeFileSync } from 'node:fs'
import * as journey from '../tests/contract/oracle/journey.ts'
import * as tickets from '../tests/contract/oracle/tickets.ts'
import * as views from '../tests/contract/oracle/views.ts'
import { encode } from '../tests/contract/cases.mjs'
import { validationCases } from '../tests/contract/validation-cases.mjs'

const oracle = { ...journey, ...tickets, ...views }
const output = JSON.stringify(validationCases.map(f => encode({ ...f, result: oracle[f.fn](...f.args) })), null, 2) + '\n'
const path = new URL('../tests/contract/validation-fixtures.json', import.meta.url)
if (process.argv.includes('--check')) {
  if (readFileSync(path, 'utf8') !== output) throw new Error('Validation fixtures changed')
} else writeFileSync(path, output)
console.log(`${validationCases.length} validation fixtures generated from TypeScript`)
