

type GIRepository20 = typeof import('./girepository-2.0.js').default;

declare global {
    export interface GjsGiImports {
        GIRepository: GIRepository20;
    }
}

export default GjsGiImports;


