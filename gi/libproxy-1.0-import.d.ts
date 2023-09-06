

type Libproxy10 = typeof import('./libproxy-1.0.js').default;

declare global {
    export interface GjsGiImports {
        Libproxy: Libproxy10;
    }
}

export default GjsGiImports;


