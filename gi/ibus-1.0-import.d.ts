

type IBus10 = typeof import('./ibus-1.0.js').default;

declare global {
    export interface GjsGiImports {
        IBus: IBus10;
    }
}

export default GjsGiImports;


