

type GstCuda10 = typeof import('./gstcuda-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GstCuda: GstCuda10;
    }
}

export default GjsGiImports;


