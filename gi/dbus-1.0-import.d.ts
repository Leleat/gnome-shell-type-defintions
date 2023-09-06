

type DBus10 = typeof import('./dbus-1.0.js').default;

declare global {
    export interface GjsGiImports {
        DBus: DBus10;
    }
}

export default GjsGiImports;


