

type WebKit60 = typeof import('./webkit-6.0.js').default;

declare global {
    export interface GjsGiImports {
        WebKit: WebKit60;
    }
}

export default GjsGiImports;


