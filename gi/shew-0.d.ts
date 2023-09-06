
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './shew-0-import.d.ts';
/**
 * Shew-0
 */

import type Gtk from './gtk-4.0.js';
import type Gsk from './gsk-4.0.js';
import type Graphene from './graphene-1.0.js';
import type GObject from './gobject-2.0.js';
import type GLib from './glib-2.0.js';
import type Gdk from './gdk-4.0.js';
import type cairo from './cairo-1.0.js';
import type PangoCairo from './pangocairo-1.0.js';
import type Pango from './pango-1.0.js';
import type HarfBuzz from './harfbuzz-0.0.js';
import type freetype2 from './freetype2-2.0.js';
import type Gio from './gio-2.0.js';
import type GdkPixbuf from './gdkpixbuf-2.0.js';
import type GModule from './gmodule-2.0.js';

export namespace Shew {

module ExternalWindow {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Shew-0.Shew.ExternalWindow

        display?: Gdk.Display | null
    }

}

interface ExternalWindow {

    // Own properties of Shew-0.Shew.ExternalWindow

    readonly display: Gdk.Display

    // Own fields of Shew-0.Shew.ExternalWindow

    parent_instance: GObject.Object

    // Owm methods of Shew-0.Shew.ExternalWindow

    get_display(): Gdk.Display
    set_parent_of(child_surface: Gdk.Surface): void

    // Own virtual methods of Shew-0.Shew.ExternalWindow

    vfunc_set_parent_of(child_surface: Gdk.Surface): void

    // Class property signals of Shew-0.Shew.ExternalWindow

    connect(sigName: "notify::display", callback: (($obj: ExternalWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: ExternalWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExternalWindow extends GObject.Object {

    // Own properties of Shew-0.Shew.ExternalWindow

    static name: string
    static $gtype: GObject.GType<ExternalWindow>

    // Constructors of Shew-0.Shew.ExternalWindow

    constructor(config?: ExternalWindow.ConstructorProperties) 
    static new_from_handle(handle_str: string | null): ExternalWindow
    _init(config?: ExternalWindow.ConstructorProperties): void
}

module WindowExporter {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Shew-0.Shew.WindowExporter

        window?: Gtk.Window | null
    }

}

interface WindowExporter {

    // Own properties of Shew-0.Shew.WindowExporter

    readonly window: Gtk.Window

    // Owm methods of Shew-0.Shew.WindowExporter

    export(callback: Gio.AsyncReadyCallback<this> | null): void
    export_finish(result: Gio.AsyncResult): string | null
    unexport(handle: string | null): void

    // Class property signals of Shew-0.Shew.WindowExporter

    connect(sigName: "notify::window", callback: (($obj: WindowExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: WindowExporter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WindowExporter extends GObject.Object {

    // Own properties of Shew-0.Shew.WindowExporter

    static name: string
    static $gtype: GObject.GType<WindowExporter>

    // Constructors of Shew-0.Shew.WindowExporter

    constructor(config?: WindowExporter.ConstructorProperties) 
    constructor(window: Gtk.Window) 
    static new(window: Gtk.Window): WindowExporter
    _init(config?: WindowExporter.ConstructorProperties): void
}

interface ExternalWindowClass {

    // Own fields of Shew-0.Shew.ExternalWindowClass

    parent_class: GObject.ObjectClass
    set_parent_of: (external_window: ExternalWindow, child_surface: Gdk.Surface) => void
}

abstract class ExternalWindowClass {

    // Own properties of Shew-0.Shew.ExternalWindowClass

    static name: string
}

interface WindowExporterClass {

    // Own fields of Shew-0.Shew.WindowExporterClass

    parent_class: GObject.ObjectClass
}

abstract class WindowExporterClass {

    // Own properties of Shew-0.Shew.WindowExporterClass

    static name: string
}

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

export default Shew;
// END