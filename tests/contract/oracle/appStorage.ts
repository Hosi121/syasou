// Predicates captured from src/App.tsx:26,33 at a79a3f5. Only the
// standalone names and unknown parameter annotations are added for the runner.
export const isNote = (v: unknown): v is string => typeof v === 'string' && v.length <= 300
export const isStoredBoolean = (v: unknown): v is boolean => typeof v === 'boolean'
