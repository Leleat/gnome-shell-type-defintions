

type MetaTest13 = typeof import('./metatest-13.js').default;

declare global {
    export interface GjsGiImports {
        MetaTest: MetaTest13;
    }
}

export default GjsGiImports;


