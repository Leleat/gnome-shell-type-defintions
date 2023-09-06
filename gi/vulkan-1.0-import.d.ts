

type Vulkan10 = typeof import('./vulkan-1.0.js').default;

declare global {
    export interface GjsGiImports {
        Vulkan: Vulkan10;
    }
}

export default GjsGiImports;


