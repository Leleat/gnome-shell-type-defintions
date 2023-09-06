

type Secret1 = typeof import('./secret-1.js').default;

declare global {
    export interface GjsGiImports {
        Secret: Secret1;
    }
}

export default GjsGiImports;


