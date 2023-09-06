

type GstRtp10 = typeof import('./gstrtp-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GstRtp: GstRtp10;
    }
}

export default GjsGiImports;


