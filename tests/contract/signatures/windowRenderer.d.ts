import type { LandscapeProps } from '../components/Landscape';
export declare function createWindowRenderer(canvas: HTMLCanvasElement, onUnavailable?: () => void): {
    update(next: LandscapeProps): void;
    dispose(): void;
} | null;
