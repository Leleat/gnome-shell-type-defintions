

type GstMpegts10 = typeof import('./gstmpegts-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GstMpegts: GstMpegts10;
    }
}

export default GjsGiImports;


