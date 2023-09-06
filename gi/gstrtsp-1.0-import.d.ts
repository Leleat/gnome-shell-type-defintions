

type GstRtsp10 = typeof import('./gstrtsp-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GstRtsp: GstRtsp10;
    }
}

export default GjsGiImports;


