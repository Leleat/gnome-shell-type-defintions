

type GstVa10 = typeof import('./gstva-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GstVa: GstVa10;
    }
}

export default GjsGiImports;


