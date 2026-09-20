import { readFileSync } from 'node:fs'

export function fixtures(name) {
  return decode(JSON.parse(readFileSync(new URL(`../fixtures/${name}.json`, import.meta.url), 'utf8')))
}

export function decode(value) {
  if (value?.$value) return { undefined, NaN, Infinity, '-Infinity': -Infinity, '-0': -0 }[value.$value]
  if (Array.isArray(value)) return value.map(decode)
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, decode(item)]))
  return value
}

export function sharing(result, input) {
  return {
    state: result === input,
    journey: result?.journey === input?.journey,
    tickets: result?.tickets === input?.tickets,
    items: result?.tickets?.map(ticket => input.tickets.indexOf(ticket)),
  }
}
