

type Dex1 = typeof import('./dex-1.js').default;

declare global {
    export interface GjsGiImports {
        Dex: Dex1;
    }
}

export default GjsGiImports;


