import { clsx } from 'clsx'
import type { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { storageKey } from './profile'

export const cn = (...values: ClassValue[]) => twMerge(clsx(values))

export function readStorage<T>(key: string, fallback: T, validate: (value: unknown) => value is T): T {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(storageKey(key)) || 'null')
    return validate(value) ? value : fallback
  } catch { return fallback }
}

export function writeStorage(key: string, value: unknown) {
  try { localStorage.setItem(storageKey(key), JSON.stringify(value)); return true } catch { return false }
}

export function formatTime(milliseconds: number) {
  const total = Math.max(0, Math.ceil(milliseconds / 1000))
  return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`
}
