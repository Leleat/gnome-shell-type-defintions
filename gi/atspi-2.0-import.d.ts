

type Atspi20 = typeof import('./atspi-2.0.js').default;

declare global {
    export interface GjsGiImports {
        Atspi: Atspi20;
    }
}

export default GjsGiImports;


