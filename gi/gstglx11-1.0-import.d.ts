

type GstGLX1110 = typeof import('./gstglx11-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GstGLX11: GstGLX1110;
    }
}

export default GjsGiImports;


