

type GstVulkan10 = typeof import('./gstvulkan-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GstVulkan: GstVulkan10;
    }
}

export default GjsGiImports;


