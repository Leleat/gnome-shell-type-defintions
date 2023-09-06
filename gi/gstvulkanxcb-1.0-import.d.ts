

type GstVulkanXCB10 = typeof import('./gstvulkanxcb-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GstVulkanXCB: GstVulkanXCB10;
    }
}

export default GjsGiImports;


