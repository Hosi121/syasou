import * as moon from '../generated/moonbit/bridge.js'

export const views = moon.views() as readonly [{
    readonly id: 'forest';
    readonly label: '山あいの窓';
}, {
    readonly id: 'snow';
    readonly label: '雪原の窓';
}, {
    readonly id: 'train';
    readonly label: '遠くの列車';
}]

export type View = typeof views[number]['id']
export const isView = (value: unknown): value is View => moon.isView(value)
