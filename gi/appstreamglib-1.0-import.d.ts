

type AppStreamGlib10 = typeof import('./appstreamglib-1.0.js').default;

declare global {
    export interface GjsGiImports {
        AppStreamGlib: AppStreamGlib10;
    }
}

export default GjsGiImports;


