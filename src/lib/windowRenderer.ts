import type { LandscapeProps } from '../components/Landscape'
import * as moon from '../generated/moonbit/bridge.js'

export function createWindowRenderer(canvas: HTMLCanvasElement, onUnavailable?: () => void): {
  update(next: LandscapeProps): void
  dispose(): void
} | null {
  return moon.createWindowRenderer(canvas, onUnavailable)
}
