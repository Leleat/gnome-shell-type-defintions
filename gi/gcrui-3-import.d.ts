

type GcrUi3 = typeof import('./gcrui-3.js').default;

declare global {
    export interface GjsGiImports {
        GcrUi: GcrUi3;
    }
}

export default GjsGiImports;


