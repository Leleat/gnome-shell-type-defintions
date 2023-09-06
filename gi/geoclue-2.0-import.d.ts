

type Geoclue20 = typeof import('./geoclue-2.0.js').default;

declare global {
    export interface GjsGiImports {
        Geoclue: Geoclue20;
    }
}

export default GjsGiImports;


