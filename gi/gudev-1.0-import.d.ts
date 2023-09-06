

type GUdev10 = typeof import('./gudev-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GUdev: GUdev10;
    }
}

export default GjsGiImports;


