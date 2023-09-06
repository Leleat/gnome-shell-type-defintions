

type Rsvg20 = typeof import('./rsvg-2.0.js').default;

declare global {
    export interface GjsGiImports {
        Rsvg: Rsvg20;
    }
}

export default GjsGiImports;


