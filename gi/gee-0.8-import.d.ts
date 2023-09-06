

type Gee08 = typeof import('./gee-0.8.js').default;

declare global {
    export interface GjsGiImports {
        Gee: Gee08;
    }
}

export default GjsGiImports;


