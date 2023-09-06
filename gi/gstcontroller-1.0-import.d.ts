

type GstController10 = typeof import('./gstcontroller-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GstController: GstController10;
    }
}

export default GjsGiImports;


