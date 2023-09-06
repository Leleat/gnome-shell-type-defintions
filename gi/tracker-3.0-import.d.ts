

type Tracker30 = typeof import('./tracker-3.0.js').default;

declare global {
    export interface GjsGiImports {
        Tracker: Tracker30;
    }
}

export default GjsGiImports;


