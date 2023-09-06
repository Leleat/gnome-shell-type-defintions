

type GdkWayland40 = typeof import('./gdkwayland-4.0.js').default;

declare global {
    export interface GjsGiImports {
        GdkWayland: GdkWayland40;
    }
}

export default GjsGiImports;


