

type GstPlayer10 = typeof import('./gstplayer-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GstPlayer: GstPlayer10;
    }
}

export default GjsGiImports;


