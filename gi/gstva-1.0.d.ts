
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gstva-1.0-import.d.ts';
/**
 * GstVa-1.0
 */

import type GstVideo from './gstvideo-1.0.js';
import type GstBase from './gstbase-1.0.js';
import type Gst from './gst-1.0.js';
import type GObject from './gobject-2.0.js';
import type GLib from './glib-2.0.js';
import type GModule from './gmodule-2.0.js';

export namespace GstVa {

enum VaFeature {
    /**
     * The feature is disabled.
     */
    DISABLED,
    /**
     * The feature is enabled.
     */
    ENABLED,
    /**
     * The feature is enabled automatically.
     */
    AUTO,
}
/**
 * Types of different VA API implemented drivers. These are the typical and
 * the most widely used VA drivers.
 */
enum VaImplementation {
    /**
     * The mesa gallium implementation.
     */
    MESA_GALLIUM,
    /**
     * The legacy i965 intel implementation.
     */
    INTEL_I965,
    /**
     * The iHD intel implementation.
     */
    INTEL_IHD,
    /**
     * Other implementation.
     */
    OTHER,
    /**
     * Invalid implementation.
     */
    INVALID,
}
const ALLOCATOR_VASURFACE: string | null
const CAPS_FEATURE_MEMORY_VA: string | null
/**
 * Flag indicating that we should map the VASurfaceID instead of to
 * system memory, so users can use libva primitives to operate with
 * that surface.
 */
const MAP_VA: number
const VA_DISPLAY_HANDLE_CONTEXT_TYPE_STR: string | null
/**
 * Video alignment is not handled as expected by VA since it uses
 * opaque surfaces, not directly mappable memory. Still, decoders
 * might need to request bigger surfaces for coded size rather than
 * display sizes. This method will set the coded size to bufferpool's
 * configuration, out of the typical video aligment.
 * @param config the #GstStructure with the pool's configuration.
 * @param align a #GstVideoAlignment
 */
function buffer_pool_config_set_va_alignment(config: Gst.Structure, align: GstVideo.VideoAlignment): void
/**
 * Sets the usage hint for the buffers handled by the buffer pool.
 * @param config the #GstStructure with the pool's configuration.
 * @param usage_hint the VA usage hint for new VASurfaceID.
 * @param use_derived a #GstVaFeature for derived mapping (only used when     VA allocator).
 */
function buffer_pool_config_set_va_allocation_params(config: Gst.Structure, usage_hint: number, use_derived: VaFeature): void
function context_get_va_display(context: Gst.Context, type_name: string | null, render_device_path: string | null): [ /* returnType */ boolean, /* display_ptr */ VaDisplay ]
/**
 * Set the `display` in the `context`
 * @param context a #GstContext
 * @param display the #GstVaDisplay we want to set
 */
function context_set_va_display(context: Gst.Context, display: VaDisplay): void
/**
 * Creates a new VASurfaceID with `buffer'`s allocator and attached it
 * to it.
 * 
 * *This method is used only by plugin's internal VA decoder.*
 * @param buffer a #GstBuffer
 * @returns %TRUE if the new VASurfaceID is attached to @buffer     correctly; %FALSE, otherwise.
 */
function va_buffer_create_aux_surface(buffer: Gst.Buffer): boolean
function va_buffer_peek_display(buffer: Gst.Buffer): VaDisplay
/**
 * Query the specified context type name.
 * @param element a #GstElement
 * @param context_type the #gchar string specify the context type name
 */
function va_context_query(element: Gst.Element, context_type: string | null): void
/**
 * It imports the array of `mem,` representing a single frame, into a
 * VASurfaceID and it's attached into every `mem`.
 * @param display a #GstVaDisplay
 * @param info a #GstVideoInfo
 * @param mem Memories. One     per plane.
 * @param fds array of     DMABuf file descriptors.
 * @param offset array of memory     offsets.
 * @param usage_hint VA usage hint.
 * @returns %TRUE if frame is imported correctly into a VASurfaceID; %FALSE otherwise.
 */
function va_dmabuf_memories_setup(display: VaDisplay, info: GstVideo.VideoInfo, mem: Gst.Memory[], fds: never[], offset: number[], usage_hint: number): boolean
/**
 * Propagate `display` by posting it as #GstContext in the pipeline's bus.
 * @param element a #GstElement
 * @param display the #GstVaDisplay to propagate
 */
function va_element_propagate_display_context(element: Gst.Element, display: VaDisplay): void
/**
 * Called by the va element to ensure a valid #GstVaDisplay.
 * @param element a #GstElement
 * @param render_device_path the #gchar string of render device path
 * @returns whether a #GstVaDisplay exists in @display_ptr
 */
function va_ensure_element_data(element: any | null, render_device_path: string | null): [ /* returnType */ boolean, /* display_ptr */ VaDisplay ]
/**
 * Used by elements when processing their pad's queries, propagating
 * element's #GstVaDisplay if the processed query requests it.
 * @param element a #GstElement
 * @param query a #GstQuery to query the context
 * @param display a #GstVaDisplay to answer the query
 * @returns whether we can handle the context query successfully
 */
function va_handle_context_query(element: Gst.Element, query: Gst.Query, display: VaDisplay): boolean
/**
 * Called by elements in their #GstElementClass::set_context vmethod.
 * It gets a valid #GstVaDisplay if `context` has it.
 * @param element a #GstElement
 * @param context a #GstContext may contain the display
 * @param render_device_path the #gchar string of render device path
 * @returns whether the @display_ptr could be successfully set to a valid #GstVaDisplay in the @context
 */
function va_handle_set_context(element: Gst.Element, context: Gst.Context, render_device_path: string | null): [ /* returnType */ boolean, /* display_ptr */ VaDisplay ]
function va_memory_peek_display(mem: Gst.Memory): VaDisplay
module VaAllocator {

    // Constructor properties interface

    interface ConstructorProperties extends Gst.Allocator.ConstructorProperties {
    }

}

interface VaAllocator {

    // Conflicting properties

    object: any

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

    // Class property signals of GstVa-1.0.GstVa.VaAllocator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * There are two types of VA allocators:
 * 
 * * #GstVaAllocator
 * * #GstVaDmabufAllocator
 * @class 
 */
class VaAllocator extends Gst.Allocator {

    // Own properties of GstVa-1.0.GstVa.VaAllocator

    static name: string
    static $gtype: GObject.GType<VaAllocator>

    // Constructors of GstVa-1.0.GstVa.VaAllocator

    constructor(config?: VaAllocator.ConstructorProperties) 
    /**
     * Instanciate a new pooled #GstAllocator backed by VASurfaceID.
     * @constructor 
     * @param display a #GstVaDisplay
     * @param surface_formats a #GArray     of valid #GstVideoFormat for surfaces in current VA context.
     * @returns a #GstVaDisplay
     */
    constructor(display: VaDisplay, surface_formats: number[]) 
    /**
     * Instanciate a new pooled #GstAllocator backed by VASurfaceID.
     * @constructor 
     * @param display a #GstVaDisplay
     * @param surface_formats a #GArray     of valid #GstVideoFormat for surfaces in current VA context.
     * @returns a #GstVaDisplay
     */
    static new(display: VaDisplay, surface_formats: number[]): VaAllocator
    _init(config?: VaAllocator.ConstructorProperties): void
    /**
     * Allocate a new VASurfaceID backed #GstMemory.
     * @param allocator a #GstAllocator
     * @returns a #GstMemory backed with a VASurfaceID; %NULL, otherwise.
     */
    static alloc(allocator: Gst.Allocator): Gst.Memory
    /**
     * Removes all the memories in `allocator'`s pool.
     * @param allocator a #GstAllocator
     */
    static flush(allocator: Gst.Allocator): void
    /**
     * Gets current internal configuration of `allocator`.
     * @param allocator a #GstAllocator
     * @returns %TRUE if @allocator is already configured; %FALSE otherwise.
     */
    static get_format(allocator: Gst.Allocator): [ /* returnType */ boolean, /* info */ GstVideo.VideoInfo, /* usage_hint */ number, /* use_derived */ VaFeature ]
    static peek_display(allocator: Gst.Allocator): VaDisplay
    /**
     * This method will populate `buffer` with pooled VASurfaceID
     * memories. It doesn't allocate new VASurfacesID.
     * @param allocator a #GstAllocator
     * @param buffer an empty #GstBuffer
     * @returns %TRUE if @buffer was populated correctly; %FALSE otherwise.
     */
    static prepare_buffer(allocator: Gst.Allocator, buffer: Gst.Buffer): boolean
    /**
     * Sets the configuration defined by `info,` `usage_hint` and
     * `use_derived` for `allocator,` and it tries the configuration, if
     * `allocator` has not allocated memories yet.
     * 
     * If `allocator` has memory allocated already, and frame size and
     * format in `info` are the same as currently configured in `allocator,`
     * the rest of `info` parameters are updated internally.
     * @param allocator a #GstAllocator
     * @param info a #GstVideoInfo
     * @param usage_hint VA usage hint
     * @param use_derived a #GstVaFeature
     * @returns %TRUE if the configuration is valid or updated; %FALSE if configuration is not valid or not updated.
     */
    static set_format(allocator: Gst.Allocator, info: GstVideo.VideoInfo, usage_hint: number, use_derived: VaFeature): [ /* returnType */ boolean, /* info */ GstVideo.VideoInfo ]
    /**
     * Populates an empty `buffer` with a VASuface backed #GstMemory.
     * @param allocator a #GstAllocator
     * @param buffer a #GstBuffer
     * @returns %TRUE if @buffer is populated; %FALSE otherwise.
     */
    static setup_buffer(allocator: Gst.Allocator, buffer: Gst.Buffer): boolean
}

module VaDisplay {

    // Constructor properties interface

    interface ConstructorProperties extends Gst.Object.ConstructorProperties {

        // Own constructor properties of GstVa-1.0.GstVa.VaDisplay

        va_display?: any | null
    }

}

interface VaDisplay {

    // Own properties of GstVa-1.0.GstVa.VaDisplay

    readonly description: string | null
    readonly va_display: any

    // Own fields of GstVa-1.0.GstVa.VaDisplay

    /**
     * parent #GstObject
     * @field 
     */
    parent: Gst.Object

    // Owm methods of GstVa-1.0.GstVa.VaDisplay

    /**
     * Get the the #GstVaImplementation type of `self`.
     * @returns #GstVaImplementation.
     */
    get_implementation(): VaImplementation
    /**
     * Get the VA display handle of the `self`.
     * @returns the VA display handle.
     */
    get_va_dpy(): any | null
    /**
     * If the display is set by the user (foreign) it is assumed that the
     * driver is already initialized, thus this function is noop.
     * 
     * If the display is opened internally, this function will initialize
     * the driver and it will set driver's message callbacks.
     * 
     * NOTE: this function is supposed to be private, only used by
     * GstVaDisplay descendants.
     * @returns %TRUE if the VA driver can be initialized; %FALSE     otherwise
     */
    initialize(): boolean

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

    // Own virtual methods of GstVa-1.0.GstVa.VaDisplay

    /**
     * This is called when the subclass has to create the internal
     * VADisplay.
     * @virtual 
     * @returns The created VADisplay
     */
    vfunc_create_va_display(): any | null

    // Class property signals of GstVa-1.0.GstVa.VaDisplay

    connect(sigName: "notify::description", callback: (($obj: VaDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: VaDisplay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::va-display", callback: (($obj: VaDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::va-display", callback: (($obj: VaDisplay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::va-display", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * It is a generic wrapper for VADisplay. To create new instances
 * subclasses are required, depending on the display type to use
 * (v.gr. DRM, X11, Wayland, etc.).
 * 
 * The purpose of this class is to be shared among pipelines via
 * #GstContext so all the VA processing elements will use the same
 * display entry. Application developers can create their own
 * subclass, based on their display, and shared it via the synced bus
 * message for the application.
 * @class 
 */
class VaDisplay extends Gst.Object {

    // Own properties of GstVa-1.0.GstVa.VaDisplay

    static name: string
    static $gtype: GObject.GType<VaDisplay>

    // Constructors of GstVa-1.0.GstVa.VaDisplay

    constructor(config?: VaDisplay.ConstructorProperties) 
    _init(config?: VaDisplay.ConstructorProperties): void
}

module VaDisplayDrm {

    // Constructor properties interface

    interface ConstructorProperties extends VaDisplay.ConstructorProperties {

        // Own constructor properties of GstVa-1.0.GstVa.VaDisplayDrm

        path?: string | null
    }

}

interface VaDisplayDrm {

    // Own properties of GstVa-1.0.GstVa.VaDisplayDrm

    readonly path: string | null

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

    // Class property signals of GstVa-1.0.GstVa.VaDisplayDrm

    connect(sigName: "notify::path", callback: (($obj: VaDisplayDrm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: VaDisplayDrm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: VaDisplayDrm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: VaDisplayDrm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::va-display", callback: (($obj: VaDisplayDrm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::va-display", callback: (($obj: VaDisplayDrm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::va-display", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This is a #GstVaDisplay subclass to instantiate with DRM devices.
 * @class 
 */
class VaDisplayDrm extends VaDisplay {

    // Own properties of GstVa-1.0.GstVa.VaDisplayDrm

    static name: string
    static $gtype: GObject.GType<VaDisplayDrm>

    // Constructors of GstVa-1.0.GstVa.VaDisplayDrm

    constructor(config?: VaDisplayDrm.ConstructorProperties) 
    /**
     * Creates a new #GstVaDisplay from a DRM device . It will try to open
     * and operate the device in `path`.
     * @constructor 
     * @param path the path to the DRM device
     * @returns a newly allocated #GstVaDisplay if the     specified DRM render device could be opened and initialized;     otherwise %NULL is returned.
     */
    static new_from_path(path: string | null): VaDisplayDrm
    _init(config?: VaDisplayDrm.ConstructorProperties): void
}

module VaDisplayWrapped {

    // Constructor properties interface

    interface ConstructorProperties extends VaDisplay.ConstructorProperties {
    }

}

interface VaDisplayWrapped {

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

    // Class property signals of GstVa-1.0.GstVa.VaDisplayWrapped

    connect(sigName: "notify::description", callback: (($obj: VaDisplayWrapped, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: VaDisplayWrapped, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::va-display", callback: (($obj: VaDisplayWrapped, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::va-display", callback: (($obj: VaDisplayWrapped, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::va-display", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This is a #GstVaDisplay instantiaton subclass for custom created
 * VADisplay, such as X11 or Wayland, wrapping it.
 * @class 
 */
class VaDisplayWrapped extends VaDisplay {

    // Own properties of GstVa-1.0.GstVa.VaDisplayWrapped

    static name: string
    static $gtype: GObject.GType<VaDisplayWrapped>

    // Constructors of GstVa-1.0.GstVa.VaDisplayWrapped

    constructor(config?: VaDisplayWrapped.ConstructorProperties) 
    /**
     * Creates a #GstVaDisplay wrapping an already created and initialized
     * VADisplay.
     * 
     * The lifetime of `handle` must be hold by the provider while the
     * pipeline is instantiated. Do not call vaTerminate on it while the
     * pipeline is not in NULL state.
     * @constructor 
     * @param handle a VADisplay to wrap
     * @returns a new #GstVaDisplay if @handle is valid,     Otherwise %NULL.
     */
    constructor(handle: any | null) 
    /**
     * Creates a #GstVaDisplay wrapping an already created and initialized
     * VADisplay.
     * 
     * The lifetime of `handle` must be hold by the provider while the
     * pipeline is instantiated. Do not call vaTerminate on it while the
     * pipeline is not in NULL state.
     * @constructor 
     * @param handle a VADisplay to wrap
     * @returns a new #GstVaDisplay if @handle is valid,     Otherwise %NULL.
     */
    static new(handle: any | null): VaDisplayWrapped
    _init(config?: VaDisplayWrapped.ConstructorProperties): void
}

module VaDmabufAllocator {

    // Constructor properties interface

    interface ConstructorProperties extends Gst.Allocator.ConstructorProperties {
    }

}

interface VaDmabufAllocator {

    // Conflicting properties

    object: any

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

    // Class property signals of GstVa-1.0.GstVa.VaDmabufAllocator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A pooled memory allocator backed by the DMABufs exported from a
 * VASurfaceID. Also it is possible to import DMAbufs into a
 * VASurfaceID.
 * @class 
 */
class VaDmabufAllocator extends Gst.Allocator {

    // Own properties of GstVa-1.0.GstVa.VaDmabufAllocator

    static name: string
    static $gtype: GObject.GType<VaDmabufAllocator>

    // Constructors of GstVa-1.0.GstVa.VaDmabufAllocator

    constructor(config?: VaDmabufAllocator.ConstructorProperties) 
    /**
     * Instanciate a new pooled allocator backed with both DMABuf and
     * VASurfaceID.
     * @constructor 
     * @param display a #GstVaDisplay
     * @returns a new allocated #GstAllocator
     */
    constructor(display: VaDisplay) 
    /**
     * Instanciate a new pooled allocator backed with both DMABuf and
     * VASurfaceID.
     * @constructor 
     * @param display a #GstVaDisplay
     * @returns a new allocated #GstAllocator
     */
    static new(display: VaDisplay): VaDmabufAllocator
    _init(config?: VaDmabufAllocator.ConstructorProperties): void
    /**
     * Removes all the memories in `allocator'`s pool.
     * @param allocator a #GstAllocator
     */
    static flush(allocator: Gst.Allocator): void
    /**
     * Gets current internal configuration of `allocator`.
     * @param allocator a #GstAllocator
     * @returns %TRUE if @allocator is already configured; %FALSE otherwise.
     */
    static get_format(allocator: Gst.Allocator): [ /* returnType */ boolean, /* info */ GstVideo.VideoInfo, /* usage_hint */ number ]
    /**
     * This method will populate `buffer` with pooled VASurfaceID/DMABuf
     * memories. It doesn't allocate new VASurfacesID.
     * @param allocator a #GstAllocator
     * @param buffer an empty #GstBuffer
     * @returns %TRUE if @buffer was populated correctly; %FALSE otherwise.
     */
    static prepare_buffer(allocator: Gst.Allocator, buffer: Gst.Buffer): boolean
    /**
     * Sets the configuration defined by `info` and `usage_hint` for
     * `allocator,` and it tries the configuration, if `allocator` has not
     * allocated memories yet.
     * 
     * If `allocator` has memory allocated already, and frame size and
     * format in `info` are the same as currently configured in `allocator,`
     * the rest of `info` parameters are updated internally.
     * @param allocator a #GstAllocator
     * @param info a #GstVideoInfo
     * @param usage_hint VA usage hint
     * @returns %TRUE if the configuration is valid or updated; %FALSE if configuration is not valid or not updated.
     */
    static set_format(allocator: Gst.Allocator, info: GstVideo.VideoInfo, usage_hint: number): boolean
    /**
     * This funciton creates a new VASurfaceID and exposes its DMABufs,
     * later it populates the `buffer` with those DMABufs.
     * @param allocator a #GstAllocator
     * @param buffer an empty #GstBuffer
     * @returns %TRUE if @buffer is populated correctly; %FALSE otherwise.
     */
    static setup_buffer(allocator: Gst.Allocator, buffer: Gst.Buffer): boolean
}

module VaPool {

    // Constructor properties interface

    interface ConstructorProperties extends Gst.BufferPool.ConstructorProperties {
    }

}

interface VaPool {

    // Conflicting properties

    object: any

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

    // Class property signals of GstVa-1.0.GstVa.VaPool

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * `GstVaPool` is a buffer pool for VA allocators.
 * @class 
 */
class VaPool extends Gst.BufferPool {

    // Own properties of GstVa-1.0.GstVa.VaPool

    static name: string
    static $gtype: GObject.GType<VaPool>

    // Constructors of GstVa-1.0.GstVa.VaPool

    constructor(config?: VaPool.ConstructorProperties) 
    constructor() 
    static new(): VaPool
    static new_with_config(caps: Gst.Caps, size: number, min_buffers: number, max_buffers: number, usage_hint: number, use_derived: VaFeature, allocator: Gst.Allocator, alloc_params: Gst.AllocationParams): VaPool
    _init(config?: VaPool.ConstructorProperties): void
    /**
     * Retuns: %TRUE if `pool` always add #GstVideoMeta to its
     *     buffers. Otherwise, %FALSE.
     * @param pool the #GstBufferPool
     */
    static requires_video_meta(pool: Gst.BufferPool): boolean
}

interface VaDisplayClass {

    // Own fields of GstVa-1.0.GstVa.VaDisplayClass

    /**
     * parent #GstObjectClass
     * @field 
     */
    parent_class: Gst.ObjectClass
    create_va_display: (self: VaDisplay) => any | null
}

/**
 * The common VA display object class structure.
 * @record 
 */
abstract class VaDisplayClass {

    // Own properties of GstVa-1.0.GstVa.VaDisplayClass

    static name: string
}

interface VaDisplayDrmClass {
}

abstract class VaDisplayDrmClass {

    // Own properties of GstVa-1.0.GstVa.VaDisplayDrmClass

    static name: string
}

interface VaDisplayWrappedClass {
}

abstract class VaDisplayWrappedClass {

    // Own properties of GstVa-1.0.GstVa.VaDisplayWrappedClass

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

export default GstVa;
// END