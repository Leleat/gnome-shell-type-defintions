

type Handy1 = typeof import('./handy-1.js').default;

declare global {
    export interface GjsGiImports {
        Handy: Handy1;
    }
}

export default GjsGiImports;


