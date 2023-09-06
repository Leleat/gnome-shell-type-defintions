

type Xft20 = typeof import('./xft-2.0.js').default;

declare global {
    export interface GjsGiImports {
        xft: Xft20;
    }
}

export default GjsGiImports;


