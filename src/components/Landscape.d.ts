import type { Scene, Speed } from '../lib/journey'

// Preserve the renderer's original public type import. Implementation is MoonBit.
export interface LandscapeProps { scene: Scene; speed: Speed; moving: boolean; windowOpen: boolean; travelling: boolean }
