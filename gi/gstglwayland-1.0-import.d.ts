

type GstGLWayland10 = typeof import('./gstglwayland-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GstGLWayland: GstGLWayland10;
    }
}

export default GjsGiImports;


