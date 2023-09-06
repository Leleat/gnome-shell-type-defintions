

type Notify07 = typeof import('./notify-0.7.js').default;

declare global {
    export interface GjsGiImports {
        Notify: Notify07;
    }
}

export default GjsGiImports;


