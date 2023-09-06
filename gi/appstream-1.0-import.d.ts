

type AppStream10 = typeof import('./appstream-1.0.js').default;

declare global {
    export interface GjsGiImports {
        AppStream: AppStream10;
    }
}

export default GjsGiImports;


