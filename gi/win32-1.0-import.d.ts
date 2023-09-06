

type Win3210 = typeof import('./win32-1.0.js').default;

declare global {
    export interface GjsGiImports {
        win32: Win3210;
    }
}

export default GjsGiImports;


