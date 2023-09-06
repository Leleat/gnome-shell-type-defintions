

type Gst10 = typeof import('./gst-1.0.js').default;

declare global {
    export interface GjsGiImports {
        Gst: Gst10;
    }
}

export default GjsGiImports;


