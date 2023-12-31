
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './win32-1.0-import.d.ts';
/**
 * win32-1.0
 */

import type GObject from './gobject-2.0.js';

export namespace win32 {

interface MSG {
}

class MSG {

    // Own properties of win32-1.0.win32.MSG

    static name: string
}

    type HWND = number
    type HICON = number
    type HCURSOR = number
    type HGDIOBJ = number
/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default win32;
// END