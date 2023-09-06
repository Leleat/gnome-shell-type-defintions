

type GstNet10 = typeof import('./gstnet-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GstNet: GstNet10;
    }
}

export default GjsGiImports;


