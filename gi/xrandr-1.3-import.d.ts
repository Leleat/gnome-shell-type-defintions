

type Xrandr13 = typeof import('./xrandr-1.3.js').default;

declare global {
    export interface GjsGiImports {
        xrandr: Xrandr13;
    }
}

export default GjsGiImports;


