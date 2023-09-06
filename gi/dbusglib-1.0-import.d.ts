

type DBusGLib10 = typeof import('./dbusglib-1.0.js').default;

declare global {
    export interface GjsGiImports {
        DBusGLib: DBusGLib10;
    }
}

export default GjsGiImports;


