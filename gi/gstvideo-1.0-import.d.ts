

type GstVideo10 = typeof import('./gstvideo-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GstVideo: GstVideo10;
    }
}

export default GjsGiImports;


