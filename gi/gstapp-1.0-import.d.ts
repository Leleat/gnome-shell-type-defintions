

type GstApp10 = typeof import('./gstapp-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GstApp: GstApp10;
    }
}

export default GjsGiImports;


