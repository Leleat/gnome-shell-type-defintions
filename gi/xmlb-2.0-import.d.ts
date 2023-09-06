

type Xmlb20 = typeof import('./xmlb-2.0.js').default;

declare global {
    export interface GjsGiImports {
        Xmlb: Xmlb20;
    }
}

export default GjsGiImports;


