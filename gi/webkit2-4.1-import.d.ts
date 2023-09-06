

type WebKit241 = typeof import('./webkit2-4.1.js').default;

declare global {
    export interface GjsGiImports {
        WebKit2: WebKit241;
    }
}

export default GjsGiImports;


