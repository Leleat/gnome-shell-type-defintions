

type Nice01 = typeof import('./nice-0.1.js').default;

declare global {
    export interface GjsGiImports {
        Nice: Nice01;
    }
}

export default GjsGiImports;


