

type Libxml220 = typeof import('./libxml2-2.0.js').default;

declare global {
    export interface GjsGiImports {
        libxml2: Libxml220;
    }
}

export default GjsGiImports;


