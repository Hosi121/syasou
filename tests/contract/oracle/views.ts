export const views = [
  { id: 'forest', label: '山あいの窓' },
  { id: 'snow', label: '雪原の窓' },
  { id: 'train', label: '遠くの列車' },
] as const

export type View = typeof views[number]['id']
export const isView = (value: unknown): value is View => views.some(view => view.id === value)
