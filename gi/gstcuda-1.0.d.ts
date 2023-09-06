
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gstcuda-1.0-import.d.ts';
/**
 * GstCuda-1.0
 */

import type GstVideo from './gstvideo-1.0.js';
import type GstBase from './gstbase-1.0.js';
import type Gst from './gst-1.0.js';
import type GObject from './gobject-2.0.js';
import type GLib from './glib-2.0.js';
import type GModule from './gmodule-2.0.js';
import type GstGL from './gstgl-1.0.js';
import type CudaGst from './cudagst-1.0.js';

export namespace GstCuda {

enum CudaGraphicsResourceType {
    NONE,
    GL_BUFFER,
    D3D11_RESOURCE,
}
enum CudaQuarkId {
    GRAPHICS_RESOURCE,
    MAX,
}
enum CudaMemoryTransfer {
    /**
     * the device memory needs downloading
     *                                          to the staging memory
     */
    DOWNLOAD,
    /**
     * the staging memory needs uploading
     *                                          to the device memory
     */
    UPLOAD,
}
/**
 * Name of the caps feature for indicating the use of #GstCudaMemory
 */
const CAPS_FEATURE_MEMORY_CUDA_MEMORY: string | null
const CUDA_CONTEXT_TYPE: string | null
/**
 * Name of cuda memory type
 */
const CUDA_MEMORY_TYPE_NAME: string | null
/**
 * Flag indicating that we should map the CUDA device memory
 * instead of to system memory.
 * 
 * Combining #GST_MAP_CUDA with #GST_MAP_WRITE has the same semantics as though
 * you are writing to CUDA device/host memory.
 * Conversely, combining #GST_MAP_CUDA with
 * #GST_MAP_READ has the same semantics as though you are reading from
 * CUDA device/host memory
 */
const MAP_CUDA: number
function context_new_cuda_context(cuda_ctx: CudaContext): Gst.Context
/**
 * Perform the steps necessary for retrieving a #GstCudaContext from the
 * surrounding elements or from the application using the #GstContext mechanism.
 * 
 * If the content of `cuda_ctx` is not %NULL, then no #GstContext query is
 * necessary for #GstCudaContext.
 * @param element the #GstElement running the query
 * @param device_id preferred device-id, pass device_id >=0 when             the device_id explicitly required. Otherwise, set -1.
 * @param cuda_ctx the resulting #GstCudaContext
 * @returns whether a #GstCudaContext exists in @cuda_ctx
 */
function cuda_ensure_element_context(element: Gst.Element, device_id: number, cuda_ctx: CudaContext): [ /* returnType */ boolean, /* cuda_ctx */ CudaContext ]
function cuda_handle_context_query(element: Gst.Element, query: Gst.Query, cuda_ctx: CudaContext | null): boolean
/**
 * Helper function for implementing #GstElementClass.set_context() in
 * CUDA capable elements.
 * 
 * Retrieves the #GstCudaContext in `context` and places the result in `cuda_ctx`.
 * @param element a #GstElement
 * @param context a #GstContext
 * @param device_id preferred device-id, pass device_id >=0 when             the device_id explicitly required. Otherwise, set -1.
 * @param cuda_ctx location of a #GstCudaContext
 * @returns whether the @cuda_ctx could be set successfully
 */
function cuda_handle_set_context(element: Gst.Element, context: Gst.Context, device_id: number, cuda_ctx: CudaContext): [ /* returnType */ boolean, /* cuda_ctx */ CudaContext ]
/**
 * Loads the cuda library
 * @returns %TRUE if the libcuda could be loaded %FALSE otherwise
 */
function cuda_load_library(): boolean
/**
 * Ensures that the #GstCudaAllocator is initialized and ready to be used.
 */
function cuda_memory_init_once(): void
function cuda_nvrtc_compile(source: string | null): string | null
/**
 * Loads the nvrtc library.
 * @returns %TRUE if the library could be loaded, %FALSE otherwise
 */
function cuda_nvrtc_load_library(): boolean
/**
 * Check if `mem` is a cuda memory
 * @param mem A #GstMemory
 */
function is_cuda_memory(mem: Gst.Memory): boolean
module CudaAllocator {

    // Constructor properties interface

    interface ConstructorProperties extends Gst.Allocator.ConstructorProperties {
    }

}

interface CudaAllocator {

    // Conflicting properties

    object: any

    // Own fields of GstCuda-1.0.GstCuda.CudaAllocator

    parent: Gst.Allocator & Gst.Object

    // Owm methods of GstCuda-1.0.GstCuda.CudaAllocator

    alloc(context: CudaContext, info: GstVideo.VideoInfo): Gst.Memory

    // Overloads of alloc

    /**
     * Use `allocator` to allocate a new memory block with memory that is at least
     * `size` big.
     * 
     * The optional `params` can specify the prefix and padding for the memory. If
     * %NULL is passed, no flags, no extra prefix/padding and a default alignment is
     * used.
     * 
     * The prefix/padding will be filled with 0 if flags contains
     * #GST_MEMORY_FLAG_ZERO_PREFIXED and #GST_MEMORY_FLAG_ZERO_PADDED respectively.
     * 
     * When `allocator` is %NULL, the default allocator will be used.
     * 
     * The alignment in `params` is given as a bitmask so that `align` + 1 equals
     * the amount of bytes to align to. For example, to align to 8 bytes,
     * use an alignment of 7.
     * @param size size of the visible memory area
     * @param params optional parameters
     * @returns a new #GstMemory.
     */
    alloc(size: number, params: Gst.AllocationParams | null): Gst.Memory | null

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

    // Class property signals of GstCuda-1.0.GstCuda.CudaAllocator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A #GstAllocator subclass for cuda memory
 * @class 
 */
class CudaAllocator extends Gst.Allocator {

    // Own properties of GstCuda-1.0.GstCuda.CudaAllocator

    static name: string
    static $gtype: GObject.GType<CudaAllocator>

    // Constructors of GstCuda-1.0.GstCuda.CudaAllocator

    constructor(config?: CudaAllocator.ConstructorProperties) 
    _init(config?: CudaAllocator.ConstructorProperties): void
}

module CudaBufferPool {

    // Constructor properties interface

    interface ConstructorProperties extends Gst.BufferPool.ConstructorProperties {
    }

}

interface CudaBufferPool {

    // Conflicting properties

    object: any

    // Own fields of GstCuda-1.0.GstCuda.CudaBufferPool

    parent: Gst.BufferPool & Gst.Object
    context: CudaContext
    priv: CudaBufferPoolPrivate

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

    // Class property signals of GstCuda-1.0.GstCuda.CudaBufferPool

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CudaBufferPool extends Gst.BufferPool {

    // Own properties of GstCuda-1.0.GstCuda.CudaBufferPool

    static name: string
    static $gtype: GObject.GType<CudaBufferPool>

    // Constructors of GstCuda-1.0.GstCuda.CudaBufferPool

    constructor(config?: CudaBufferPool.ConstructorProperties) 
    constructor(context: CudaContext) 
    static new(context: CudaContext): CudaBufferPool

    // Overloads of new

    /**
     * Creates a new #GstBufferPool instance.
     * @constructor 
     * @returns a new #GstBufferPool instance
     */
    static new(): Gst.BufferPool
    _init(config?: CudaBufferPool.ConstructorProperties): void
}

module CudaContext {

    // Constructor properties interface

    interface ConstructorProperties extends Gst.Object.ConstructorProperties {

        // Own constructor properties of GstCuda-1.0.GstCuda.CudaContext

        cuda_device_id?: number | null
    }

}

interface CudaContext {

    // Own properties of GstCuda-1.0.GstCuda.CudaContext

    readonly cuda_device_id: number

    // Own fields of GstCuda-1.0.GstCuda.CudaContext

    object: any

    // Owm methods of GstCuda-1.0.GstCuda.CudaContext

    /**
     * Query whether `ctx` can access any memory which belongs to `peer` directly.
     * @param peer a #GstCudaContext
     * @returns %TRUE if @ctx can access @peer directly
     */
    can_access_peer(peer: CudaContext): boolean
    /**
     * Get CUDA device context. Caller must not modify and/or destroy
     * returned device context.
     * @returns the `CUcontext` of @ctx
     */
    get_handle(): any | null
    /**
     * Get required texture alignment by device
     * @returns the `CUcontext` of @ctx
     */
    get_texture_alignment(): number
    /**
     * Pushes the given `ctx` onto the CPU thread's stack of current contexts.
     * The specified context becomes the CPU thread's current context,
     * so all CUDA functions that operate on the current context are affected.
     * @returns %TRUE if @ctx was pushed without error.
     */
    push(): boolean

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

    // Class property signals of GstCuda-1.0.GstCuda.CudaContext

    connect(sigName: "notify::cuda-device-id", callback: (($obj: CudaContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cuda-device-id", callback: (($obj: CudaContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cuda-device-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CudaContext extends Gst.Object {

    // Own properties of GstCuda-1.0.GstCuda.CudaContext

    static name: string
    static $gtype: GObject.GType<CudaContext>

    // Constructors of GstCuda-1.0.GstCuda.CudaContext

    constructor(config?: CudaContext.ConstructorProperties) 
    /**
     * Create #GstCudaContext with given device_id
     * @constructor 
     * @param device_id device-id for creating #GstCudaContext
     * @returns a new #GstCudaContext or %NULL on failure
     */
    constructor(device_id: number) 
    /**
     * Create #GstCudaContext with given device_id
     * @constructor 
     * @param device_id device-id for creating #GstCudaContext
     * @returns a new #GstCudaContext or %NULL on failure
     */
    static new(device_id: number): CudaContext
    /**
     * Note: The caller is responsible for ensuring that the CUcontext and CUdevice
     * represented by `handle` and `device` stay alive while the returned
     * #GstCudaContext is active.
     * @constructor 
     * @param handler A [CUcontext](https://docs.nvidia.com/cuda/cuda-driver-api/group__CUDA__TYPES.html#group__CUDA__TYPES_1gf9f5bd81658f866613785b3a0bb7d7d9) to wrap
     * @param device A [CUDevice](https://docs.nvidia.com/cuda/cuda-driver-api/group__CUDA__TYPES.html#group__CUDA__TYPES_1gf9f5bd81658f866613785b3a0bb7d7d9) to wrap
     * @returns A newly created #GstCudaContext
     */
    static new_wrapped(handler: CudaGst.context, device: CudaGst.device): CudaContext
    _init(config?: CudaContext.ConstructorProperties): void
    /**
     * Pops the current CUDA context from CPU thread
     * @param cuda_ctx 
     * @returns %TRUE if @ctx was pushed without error.
     */
    static pop(cuda_ctx: CudaGst.context): boolean
}

interface CudaAllocatorClass {

    // Own fields of GstCuda-1.0.GstCuda.CudaAllocatorClass

    parent_class: Gst.AllocatorClass
}

abstract class CudaAllocatorClass {

    // Own properties of GstCuda-1.0.GstCuda.CudaAllocatorClass

    static name: string
}

interface CudaBufferPoolClass {

    // Own fields of GstCuda-1.0.GstCuda.CudaBufferPoolClass

    parent_class: Gst.BufferPoolClass
}

abstract class CudaBufferPoolClass {

    // Own properties of GstCuda-1.0.GstCuda.CudaBufferPoolClass

    static name: string
}

interface CudaBufferPoolPrivate {
}

class CudaBufferPoolPrivate {

    // Own properties of GstCuda-1.0.GstCuda.CudaBufferPoolPrivate

    static name: string
}

interface CudaContextClass {

    // Own fields of GstCuda-1.0.GstCuda.CudaContextClass

    parent_class: Gst.ObjectClass
}

abstract class CudaContextClass {

    // Own properties of GstCuda-1.0.GstCuda.CudaContextClass

    static name: string
}

interface CudaContextPrivate {
}

class CudaContextPrivate {

    // Own properties of GstCuda-1.0.GstCuda.CudaContextPrivate

    static name: string
}

interface CudaGraphicsResource {

    // Own fields of GstCuda-1.0.GstCuda.CudaGraphicsResource

    cuda_context: CudaContext
    graphics_context: Gst.Object
    type: CudaGraphicsResourceType
    resource: CudaGst.graphicsResource
    flags: CudaGst.graphicsRegisterFlags
    registered: boolean
    mapped: boolean
}

class CudaGraphicsResource {

    // Own properties of GstCuda-1.0.GstCuda.CudaGraphicsResource

    static name: string
}

interface CudaMemory {

    // Own fields of GstCuda-1.0.GstCuda.CudaMemory

    mem: Gst.Memory
    context: CudaContext
    info: GstVideo.VideoInfo
}

class CudaMemory {

    // Own properties of GstCuda-1.0.GstCuda.CudaMemory

    static name: string

    // Constructors of GstCuda-1.0.GstCuda.CudaMemory

    /**
     * Ensures that the #GstCudaAllocator is initialized and ready to be used.
     */
    static init_once(): void
}

interface CudaMemoryPrivate {
}

class CudaMemoryPrivate {

    // Own properties of GstCuda-1.0.GstCuda.CudaMemoryPrivate

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

export default GstCuda;
// END