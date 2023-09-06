

type GstAudio10 = typeof import('./gstaudio-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GstAudio: GstAudio10;
    }
}

export default GjsGiImports;


