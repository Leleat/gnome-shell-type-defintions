

type GstSdp10 = typeof import('./gstsdp-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GstSdp: GstSdp10;
    }
}

export default GjsGiImports;


