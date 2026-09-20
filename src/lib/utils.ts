import type { ClassValue } from 'clsx'
import { storageKey } from './profile'
import * as moon from '../generated/moonbit/bridge.js'

export const cn = (...values: ClassValue[]) => moon.classNames(values)

export function readStorage<T>(key: string, fallback: T, validate: (value: unknown) => value is T): T {
  return moon.readStorage(storageKey(key), fallback, validate)
}

export function writeStorage(key: string, value: unknown) {
  return moon.writeStorage(storageKey(key), value)
}

export function formatTime(milliseconds: number) {
  return moon.formatTime(milliseconds)
}
