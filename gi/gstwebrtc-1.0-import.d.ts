

type GstWebRTC10 = typeof import('./gstwebrtc-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GstWebRTC: GstWebRTC10;
    }
}

export default GjsGiImports;


