import * as moon from '../generated/moonbit/bridge.js'

export const isNote = (value: unknown): value is string => moon.isNote(value)
export const isStoredBoolean = (value: unknown): value is boolean => moon.isStoredBoolean(value)
