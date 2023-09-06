

type GstCodecs10 = typeof import('./gstcodecs-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GstCodecs: GstCodecs10;
    }
}

export default GjsGiImports;


