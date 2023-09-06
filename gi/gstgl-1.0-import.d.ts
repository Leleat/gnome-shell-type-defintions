

type GstGL10 = typeof import('./gstgl-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GstGL: GstGL10;
    }
}

export default GjsGiImports;


