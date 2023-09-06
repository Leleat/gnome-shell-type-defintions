

type GstGLEGL10 = typeof import('./gstglegl-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GstGLEGL: GstGLEGL10;
    }
}

export default GjsGiImports;


