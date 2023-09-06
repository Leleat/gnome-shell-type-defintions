

type GstPlay10 = typeof import('./gstplay-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GstPlay: GstPlay10;
    }
}

export default GjsGiImports;


