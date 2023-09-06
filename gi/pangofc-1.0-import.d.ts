

type PangoFc10 = typeof import('./pangofc-1.0.js').default;

declare global {
    export interface GjsGiImports {
        PangoFc: PangoFc10;
    }
}

export default GjsGiImports;


