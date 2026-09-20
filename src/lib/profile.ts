import * as moon from '../generated/moonbit/bridge.js'

export const demoMode: boolean = moon.isDemoSearch(window.location.search)
export const storageKey = (key: string): string => moon.profileStorageKey(key, demoMode)
