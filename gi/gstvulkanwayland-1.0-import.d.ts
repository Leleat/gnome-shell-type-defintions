

type GstVulkanWayland10 = typeof import('./gstvulkanwayland-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GstVulkanWayland: GstVulkanWayland10;
    }
}

export default GjsGiImports;


