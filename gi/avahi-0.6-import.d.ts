

type Avahi06 = typeof import('./avahi-0.6.js').default;

declare global {
    export interface GjsGiImports {
        Avahi: Avahi06;
    }
}

export default GjsGiImports;


