

type GCab10 = typeof import('./gcab-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GCab: GCab10;
    }
}

export default GjsGiImports;


