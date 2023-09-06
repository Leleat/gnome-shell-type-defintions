

type Manette02 = typeof import('./manette-0.2.js').default;

declare global {
    export interface GjsGiImports {
        Manette: Manette02;
    }
}

export default GjsGiImports;


