

type AvahiCore06 = typeof import('./avahicore-0.6.js').default;

declare global {
    export interface GjsGiImports {
        AvahiCore: AvahiCore06;
    }
}

export default GjsGiImports;


