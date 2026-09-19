import type { Preferences } from './journey'
import * as moon from '../generated/moonbit/bridge.js'

/** Locally synthesized ambience: no recordings, streaming, or external requests. */
export class TrainSound {
  private engine: unknown

  constructor() { this.engine = moon.createSound() }

  async enable(): Promise<void> { await moon.enableSound(this.engine) }

  async disable(): Promise<void> { await moon.disableSound(this.engine) }

  update(preferences: Preferences, moving: boolean, windowOpen: boolean): void {
    moon.updateSound(this.engine, preferences, moving, windowOpen)
  }

  dispose(): void { moon.disposeSound(this.engine) }
}
