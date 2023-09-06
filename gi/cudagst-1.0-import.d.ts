

type CudaGst10 = typeof import('./cudagst-1.0.js').default;

declare global {
    export interface GjsGiImports {
        CudaGst: CudaGst10;
    }
}

export default GjsGiImports;


