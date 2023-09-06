

type PangoFT210 = typeof import('./pangoft2-1.0.js').default;

declare global {
    export interface GjsGiImports {
        PangoFT2: PangoFT210;
    }
}

export default GjsGiImports;


