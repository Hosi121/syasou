import type { ClassValue } from 'clsx';
export declare const cn: (...values: ClassValue[]) => string;
export declare function readStorage<T>(key: string, fallback: T, validate: (value: unknown) => value is T): T;
export declare function writeStorage(key: string, value: unknown): boolean;
export declare function formatTime(milliseconds: number): string;
