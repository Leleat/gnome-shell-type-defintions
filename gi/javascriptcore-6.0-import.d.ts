

type JavaScriptCore60 = typeof import('./javascriptcore-6.0.js').default;

declare global {
    export interface GjsGiImports {
        JavaScriptCore: JavaScriptCore60;
    }
}

export default GjsGiImports;


