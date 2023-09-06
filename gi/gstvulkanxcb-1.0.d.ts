
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gstvulkanxcb-1.0-import.d.ts';
/**
 * GstVulkanXCB-1.0
 */

import type Vulkan from './vulkan-1.0.js';
import type GstVulkan from './gstvulkan-1.0.js';
import type GstVideo from './gstvideo-1.0.js';
import type GstBase from './gstbase-1.0.js';
import type Gst from './gst-1.0.js';
import type GObject from './gobject-2.0.js';
import type GLib from './glib-2.0.js';
import type GModule from './gmodule-2.0.js';

export namespace GstVulkanXCB {

module VulkanDisplayXCB {

    // Constructor properties interface

    interface ConstructorProperties extends GstVulkan.VulkanDisplay.ConstructorProperties {
    }

}

interface VulkanDisplayXCB {

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstVulkanXCB-1.0.GstVulkanXCB.VulkanDisplayXCB

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * the contents of a #GstVulkanDisplayXCB are private and should only be accessed
 * through the provided API
 * @class 
 */
class VulkanDisplayXCB extends GstVulkan.VulkanDisplay {

    // Own properties of GstVulkanXCB-1.0.GstVulkanXCB.VulkanDisplayXCB

    static name: string
    static $gtype: GObject.GType<VulkanDisplayXCB>

    // Constructors of GstVulkanXCB-1.0.GstVulkanXCB.VulkanDisplayXCB

    constructor(config?: VulkanDisplayXCB.ConstructorProperties) 
    /**
     * Create a new #GstVulkanDisplayXCB from the xcb display name.  See XOpenDisplay\()
     * for details on what is a valid name.
     * @constructor 
     * @param name a display name
     * @returns a new #GstVulkanDisplayXCB or %NULL
     */
    constructor(name: string | null) 
    /**
     * Create a new #GstVulkanDisplayXCB from the xcb display name.  See XOpenDisplay\()
     * for details on what is a valid name.
     * @constructor 
     * @param name a display name
     * @returns a new #GstVulkanDisplayXCB or %NULL
     */
    static new(name: string | null): VulkanDisplayXCB

    // Overloads of new

    static new(instance: GstVulkan.VulkanInstance): GstVulkan.VulkanDisplay
    _init(config?: VulkanDisplayXCB.ConstructorProperties): void
}

interface VulkanDisplayXCBClass {

    // Own fields of GstVulkanXCB-1.0.GstVulkanXCB.VulkanDisplayXCBClass

    object_class: GstVulkan.VulkanDisplayClass
}

abstract class VulkanDisplayXCBClass {

    // Own properties of GstVulkanXCB-1.0.GstVulkanXCB.VulkanDisplayXCBClass

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

export default GstVulkanXCB;
// END