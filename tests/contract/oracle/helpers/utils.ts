import { clsx } from 'clsx'
import type { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { storageKey } from './profile'
import * as moon from '../../../../src/generated/moonbit/bridge.js'

export const cn = (...values: ClassValue[]) => twMerge(clsx(values))

export function readStorage<T>(key: string, fallback: T, validate: (value: unknown) => value is T): T {
  return moon.readStorage(storageKey(key), fallback, validate)
}

export function writeStorage(key: string, value: unknown) {
  return moon.writeStorage(storageKey(key), value)
}

export function formatTime(milliseconds: number) {
  const total = Math.max(0, Math.ceil(milliseconds / 1000))
  return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`
}
