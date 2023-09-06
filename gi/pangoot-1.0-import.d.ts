

type PangoOT10 = typeof import('./pangoot-1.0.js').default;

declare global {
    export interface GjsGiImports {
        PangoOT: PangoOT10;
    }
}

export default GjsGiImports;


