

type GstTranscoder10 = typeof import('./gsttranscoder-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GstTranscoder: GstTranscoder10;
    }
}

export default GjsGiImports;


