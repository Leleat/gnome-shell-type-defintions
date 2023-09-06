

type Fontconfig20 = typeof import('./fontconfig-2.0.js').default;

declare global {
    export interface GjsGiImports {
        fontconfig: Fontconfig20;
    }
}

export default GjsGiImports;


