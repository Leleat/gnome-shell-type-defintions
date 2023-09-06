

type GstBase10 = typeof import('./gstbase-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GstBase: GstBase10;
    }
}

export default GjsGiImports;


