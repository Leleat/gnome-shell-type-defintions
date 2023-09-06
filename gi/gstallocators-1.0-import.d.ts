

type GstAllocators10 = typeof import('./gstallocators-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GstAllocators: GstAllocators10;
    }
}

export default GjsGiImports;


