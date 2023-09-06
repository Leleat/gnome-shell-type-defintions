

type GstBadAudio10 = typeof import('./gstbadaudio-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GstBadAudio: GstBadAudio10;
    }
}

export default GjsGiImports;


