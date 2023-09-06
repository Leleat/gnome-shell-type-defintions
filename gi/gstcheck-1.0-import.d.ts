

type GstCheck10 = typeof import('./gstcheck-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GstCheck: GstCheck10;
    }
}

export default GjsGiImports;


