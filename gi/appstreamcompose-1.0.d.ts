
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './appstreamcompose-1.0-import.d.ts';
/**
 * AppStreamCompose-1.0
 */

import type Gio from './gio-2.0.js';
import type GObject from './gobject-2.0.js';
import type GLib from './glib-2.0.js';
import type GdkPixbuf from './gdkpixbuf-2.0.js';
import type GModule from './gmodule-2.0.js';
import type AppStream from './appstream-1.0.js';

export namespace AppStreamCompose {

/**
 * A drawing error.
 */
enum CanvasError {
    /**
     * Generic failure.
     */
    FAILED,
    /**
     * Drawing operation failed.
     */
    DRAWING,
    /**
     * Issue with font or font selection.
     */
    FONT,
    /**
     * The requested action was not supported.
     */
    UNSUPPORTED,
}
/**
 * A metadata composition error.
 */
enum ComposeError {
    /**
     * Generic failure.
     */
    FAILED,
}
/**
 * Designated state for an icon of a given size.
 */
enum IconState {
    /**
     * Ignore icons of this size.
     */
    IGNORED,
    /**
     * Create cache for the icon, and provide remote link as well.
     */
    CACHED_REMOTE,
    /**
     * Set if the icon should be stored in an icon tarball and be cached locally.
     */
    CACHED_ONLY,
    /**
     * Set if this icon should be stored remotely and fetched on demand.
     */
    REMOTE_ONLY,
}
/**
 * An image processing error.
 */
enum ImageError {
    /**
     * Generic failure.
     */
    FAILED,
    /**
     * The graphic type is not supported.
     */
    UNSUPPORTED,
}
/**
 * File format of an image.
 */
enum ImageFormat {
    /**
     * Unknown image format.
     */
    UNKNOWN,
    /**
     * PNG format
     */
    PNG,
    /**
     * JPEG format
     */
    JPEG,
    /**
     * GIF format
     */
    GIF,
    /**
     * SVG format
     */
    SVG,
    /**
     * Compressed SVG format
     */
    SVGZ,
    /**
     * WebP format
     */
    WEBP,
    /**
     * AVIF format
     */
    AVIF,
    /**
     * XPM format
     */
    XPM,
}
enum ComposeFlags {
    NONE,
    USE_THREADS,
    ALLOW_NET,
    VALIDATE,
    STORE_SCREENSHOTS,
    ALLOW_SCREENCASTS,
    PROCESS_FONTS,
    PROCESS_TRANSLATIONS,
    IGNORE_ICONS,
    PROCESS_UNPAIRED_DESKTOP,
    PROPAGATE_CUSTOM,
    PROPAGATE_ARTIFACTS,
    NO_FINAL_CHECK,
    NO_PARTIAL_URLS,
}
/**
 * The flags used for loading images.
 * @bitfield 
 */
enum ImageLoadFlags {
    /**
     * No special flags set
     */
    NONE,
    /**
     * Sharpen the resulting image
     */
    SHARPEN,
    /**
     * Allow loading of unsupported image types.
     */
    ALLOW_UNSUPPORTED,
    /**
     * Always resize the source image to the perfect size
     */
    ALWAYS_RESIZE,
}
/**
 * The flags used for saving images.
 * @bitfield 
 */
enum ImageSaveFlags {
    /**
     * No special flags set
     */
    NONE,
    /**
     * Optimize generated PNG for size
     */
    OPTIMIZE,
    /**
     * Pad with alpha to 16:9 aspect
     */
    PAD_16_9,
    /**
     * Sharpen the image to clarify detail
     */
    SHARPEN,
    /**
     * Blur the image to clear detail
     */
    BLUR,
}
/**
 * Builds a global component ID from a component-id
 * and a (usually MD5) checksum generated from the component data.
 * 
 * The global-id is used as a global, unique identifier for a component.
 * (while the component-ID is local, e.g. for one source).
 * Its primary usecase is to identify a media directory on the filesystem which is
 * associated with this component.
 * @param component_id an AppStream component ID.
 * @param checksum a MD5 hashsum as string generated from the component's combined metadata.
 */
function build_component_global_id(component_id: string | null, checksum: string | null): string | null
function canvas_error_quark(): GLib.Quark
function compose_error_quark(): GLib.Quark
/**
 * Generate a filename from a web-URL that can be used to store the
 * file on disk after download.
 * @param url The URL to extract a filename from.
 */
function filename_from_url(url: string | null): string | null
/**
 * Register a new hint tag. If a previous tag with the given name
 * already existed, the existing tag will not be replaced unless
 * `overrideExisting` is set to %TRUE.
 * Please be careful when overriding tags! Tag severities can not
 * be lowered by overriding a tag.
 * @param tag the tag-ID to add
 * @param severity the tag severity as #AsIssueSeverity
 * @param explanation the tag explanatory message
 * @param overrideExisting whether an existing tag should be replaced
 * @returns %TRUE if the tag was registered and did not exist previously.
 */
function globals_add_hint_tag(tag: string | null, severity: AppStream.IssueSeverity, explanation: string | null, overrideExisting: boolean): boolean
/**
 * Clear all global state and restore defaults.
 */
function globals_clear(): void
/**
 * Get path to the "ffprobe" binary we should use.
 */
function globals_get_ffprobe_binary(): string | null
/**
 * Retrieve all hint tags that we know.
 * @returns A list of valid hint tags. Free with %g_strfreev
 */
function globals_get_hint_tags(): string[]
/**
 * Get path to the "optipng" binary we should use.
 */
function globals_get_optipng_binary(): string | null
/**
 * Get temporary directory used by appstream-compose.
 */
function globals_get_tmp_dir(): string | null
/**
 * Get temporary directory used by appstream-compose
 * and try to create it if it does not exist.
 */
function globals_get_tmp_dir_create(): string | null
/**
 * Get whether images should be optimized using optipng.
 */
function globals_get_use_optipng(): boolean
/**
 * Retrieve the explanation template of the given hint tag.
 * @param tag 
 * @returns An explanation template, or %NULL if the tag was not found.
 */
function globals_hint_tag_explanation(tag: string | null): string | null
/**
 * Retrieve the severity of the given hint tag.
 * @param tag 
 * @returns An #AsIssueSeverity or %AS_ISSUE_SEVERITY_UNKNOWN if the tag did not exist          or has an unknown severity.
 */
function globals_hint_tag_severity(tag: string | null): AppStream.IssueSeverity
/**
 * Set path to the "ffprobe" binary we should use.
 * @param path 
 */
function globals_set_ffprobe_binary(path: string | null): void
/**
 * Set path to the "optipng" binary we should use.
 * @param path 
 */
function globals_set_optipng_binary(path: string | null): void
/**
 * Set temporary directory used by appstream-compose.
 * @param path 
 */
function globals_set_tmp_dir(path: string | null): void
/**
 * Set whether images should be optimized using optipng.
 * @param enabled 
 */
function globals_set_use_optipng(enabled: boolean): void
function image_error_quark(): GLib.Quark
/**
 * Returns the image format type based on the given file's filename.
 * @param fname the filename.
 * @returns a #AscImageFormat or %ASC_IMAGE_FORMAT_UNKNOWN for unknown
 */
function image_format_from_filename(fname: string | null): ImageFormat
/**
 * Converts the text representation to an enumerated value.
 * @param str the string.
 * @returns a #AscImageFormat or %ASC_IMAGE_FORMAT_UNKNOWN for unknown
 */
function image_format_from_string(str: string | null): ImageFormat
/**
 * Converts the enumerated value to an text representation.
 * @param format the %AscImageFormat.
 * @returns string version of @format
 */
function image_format_to_string(format: ImageFormat): string | null
/**
 * Optimizes a PNG graphic for size with optipng, if its binary
 * is available and this feature is enabled.
 * @param fname Filename of the PNG image to optimize.
 */
function optimize_png(fname: string | null): boolean
function pixbuf_blur(src: GdkPixbuf.Pixbuf, radius: number, iterations: number): void
function pixbuf_sharpen(src: GdkPixbuf.Pixbuf, radius: number, amount: number): void
/**
 * Function which is called after all metainfo and related data (e.g. desktop-entry files)
 * has been loaded, but *before* any expensive operations such as screenshot downloads or
 * font searches are performed.
 * 
 * This function can be useful to filter out unwanted components early in the process and
 * avoid unneeded downloads and other data processing.
 * By the time this function is called, the component's global ID should be finalized
 * and should not change any longer.
 * 
 * Please note that this function may be called from any thread, and thread safety needs
 * to be taked care off by the callee.
 * @callback 
 * @param cres A pointer to generated #AscResult
 * @param unit The unit we are currently processing.
 */
interface CheckMetadataEarlyFn {
    (cres: Result, unit: Unit): void
}
module Canvas {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Canvas {

    // Owm methods of AppStreamCompose-1.0.AppStreamCompose.Canvas

    /**
     * Gets the canvas height.
     */
    get_height(): number
    /**
     * Gets the canvas width.
     */
    get_width(): number
    /**
     * Render an SVG graphic from the SVG data provided.
     * @param stream SVG data input stream.
     */
    render_svg(stream: Gio.InputStream): boolean
    /**
     * Save canvas to PNG file.
     * @param fname Filename to save to.
     */
    save_png(fname: string | null): boolean

    // Class property signals of AppStreamCompose-1.0.AppStreamCompose.Canvas

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Canvas extends GObject.Object {

    // Own properties of AppStreamCompose-1.0.AppStreamCompose.Canvas

    static name: string
    static $gtype: GObject.GType<Canvas>

    // Constructors of AppStreamCompose-1.0.AppStreamCompose.Canvas

    constructor(config?: Canvas.ConstructorProperties) 
    /**
     * Creates a new #AscFont.
     * @constructor 
     * @param width 
     * @param height 
     * @returns an #AscCanvas
     */
    constructor(width: number, height: number) 
    /**
     * Creates a new #AscFont.
     * @constructor 
     * @param width 
     * @param height 
     * @returns an #AscCanvas
     */
    static new(width: number, height: number): Canvas
    _init(config?: Canvas.ConstructorProperties): void
}

module Compose {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Compose {

    // Own fields of AppStreamCompose-1.0.AppStreamCompose.Compose

    parent_instance: GObject.Object

    // Owm methods of AppStreamCompose-1.0.AppStreamCompose.Compose

    /**
     * Adds a component ID to the allowlist. If the list is not empty, only
     * components in the list will be added to the metadata output.
     * @param component_id The component-id to whitelist
     */
    add_allowed_cid(component_id: string | null): void
    /**
     * Add a key to the allowlist that is used to filter custom tag values.
     * @param key_id the custom key to add to the allowed list.
     */
    add_custom_allowed(key_id: string | null): void
    /**
     * Add compose flags.
     * @param flags The compose flags to add.
     */
    add_flags(flags: ComposeFlags): void
    /**
     * Add an #AscUnit as data source for metadata processing.
     * @param unit The #AscUnit to add
     */
    add_unit(unit: Unit): void
    /**
     * Get the results components extracted in the last data processing run.
     * @returns The components
     */
    fetch_components(): AppStream.Component[]
    /**
     * Perform final validation of generated data for the specified
     * result container.
     * @param result the #AscResult to finalize
     */
    finalize_result(result: Result): void
    /**
     * Perform final validation of generated data.
     * Calling this function is not necessary, unless the final check was explicitly
     * disabled using the %ASC_COMPOSE_FLAG_NO_FINAL_CHECK flag.
     */
    finalize_results(): void
    /**
     * Get the CA file used to verify peers with, or %NULL for default.
     */
    get_cainfo(): string | null
    /**
     * Get the data result directory.
     */
    get_data_result_dir(): string | null
    /**
     * Get the flags controlling compose behavior.
     */
    get_flags(): ComposeFlags
    /**
     * get the format type we are generating.
     */
    get_format(): AppStream.FormatKind
    /**
     * Get hints report output directory.
     */
    get_hints_result_dir(): string | null
    /**
     * Get the policy for how icons should be distributed to
     * any AppStream clients.
     * @returns an #AscIconPolicy
     */
    get_icon_policy(): IconPolicy
    /**
     * Get the icon result directory.
     */
    get_icons_result_dir(): string | null
    /**
     * Get the unit we use for locale processing
     * @returns The unit used for locale processing, or %NULL for default.
     */
    get_locale_unit(): Unit | null
    /**
     * Get the maximum size a screenshot video or image can have.
     * A size < 0 may be returned for no limit, setting a limit of 0
     * will disable screenshots.
     */
    get_max_screenshot_size(): number
    /**
     * Get the media base URL to be used for the generated data,
     * or %NULL if no media is cached.
     */
    get_media_baseurl(): string | null
    /**
     * Get the media result directory, that can be served on a webserver.
     */
    get_media_result_dir(): string | null
    /**
     * Get the metadata origin field.
     */
    get_origin(): string | null
    /**
     * Get the directory prefix used for processing.
     */
    get_prefix(): string | null
    /**
     * Get the results of the last processing run.
     * @returns The results
     */
    get_results(): Result[]
    /**
     * Check if the last run generated any errors (which will cause metadata to be ignored).
     * @returns %TRUE if we had errors.
     */
    has_errors(): boolean
    /**
     * Remove a key from the allowlist used to filter the `<custom/>` tag entries.
     * @param key_id the custom key to drop from the allowed list.
     */
    remove_custom_allowed(key_id: string | null): void
    /**
     * Remove compose flags.
     * @param flags The compose flags to remove.
     */
    remove_flags(flags: ComposeFlags): void
    /**
     * Reset the results, units and run-specific settings so the
     * instance can be reused for another metadata generation run.
     */
    reset(): void
    /**
     * Process the registered units and generate catalog metadata from
     * found components.
     * @param cancellable a #GCancellable.
     * @returns The results, or %NULL on error
     */
    run(cancellable: Gio.Cancellable | null): Result[]
    /**
     * Set a CA file holding one or more certificates to verify peers with
     * for download operations performed by this #AscCompose.
     * @param cainfo a valid file path
     */
    set_cainfo(cainfo: string | null): void
    /**
     * Set an custom callback to be run when most of the metadata has been loaded,
     * but no expensive operations (like downloads or icon rendering) have been done yet.
     * This can be used to ignore unwanted components early on.
     * 
     * The callback function may be called from any thread, so it needs to ensure thread safety on its own.
     * @param func the #AscCheckMetainfoLoadResultFn function to be called
     */
    set_check_metadata_early_func(func: CheckMetadataEarlyFn): void
    /**
     * Set an output location where generated metadata should be saved.
     * If this is set to %NULL, no metadata will be saved.
     * @param dir the metadata save location.
     */
    set_data_result_dir(dir: string | null): void
    /**
     * Set compose flags bitfield that controls the enabled features
     * for this #AscCompose.
     * @param flags The compose flags bitfield.
     */
    set_flags(flags: ComposeFlags): void
    /**
     * Set the format kind of the catalog metadata that we should generate.
     * @param kind The format, e.g. %AS_FORMAT_KIND_XML
     */
    set_format(kind: AppStream.FormatKind): void
    /**
     * Set an output location for HTML reports of issues generated
     * during a compose run.
     * @param dir the hints data directory.
     */
    set_hints_result_dir(dir: string | null): void
    /**
     * Set an icon policy object, overriding the existing one.
     * @param policy an #AscIconPolicy instance
     */
    set_icon_policy(policy: IconPolicy): void
    /**
     * Set an output location where plain icons for the processed metadata
     * are stored.
     * @param dir the icon storage location.
     */
    set_icons_result_dir(dir: string | null): void
    /**
     * Set a specific unit that is used for fetching locale information.
     * This may be useful in case a special language pack layout is used,
     * but is generally not necessary to be set explicitly, as locale
     * will be found in the unit where the metadata is by default.
     * @param locale_unit the unit used for locale processing.
     */
    set_locale_unit(locale_unit: Unit): void
    /**
     * Set the maximum size a screenshot video or image can have.
     * A size < 0 may be set to allow unlimited sizes, setting a limit of 0
     * will disable screenshot caching entirely.
     * @param size_bytes maximum size of a screenshot image or video in bytes
     */
    set_max_screenshot_size(size_bytes: number): void
    /**
     * Set the media base URL for the generated metadata. Can be %NULL if no media
     * should be cached and the original URLs should be kept.
     * @param url the media base URL.
     */
    set_media_baseurl(url: string | null): void
    /**
     * Set an output location to store media (screenshots, icons, ...) that
     * will be served on a webserver via the URL set as media baseurl.
     * @param dir the media storage location.
     */
    set_media_result_dir(dir: string | null): void
    /**
     * Set the metadata origin field (e.g. "debian" or "flathub")
     * @param origin the origin.
     */
    set_origin(origin: string | null): void
    /**
     * Set the directory prefix the to-be-processed units are using.
     * @param prefix a directory prefix, e.g. "/usr"
     */
    set_prefix(prefix: string | null): void

    // Class property signals of AppStreamCompose-1.0.AppStreamCompose.Compose

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Compose extends GObject.Object {

    // Own properties of AppStreamCompose-1.0.AppStreamCompose.Compose

    static name: string
    static $gtype: GObject.GType<Compose>

    // Constructors of AppStreamCompose-1.0.AppStreamCompose.Compose

    constructor(config?: Compose.ConstructorProperties) 
    /**
     * Creates a new #AscCompose.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AscCompose.
     * @constructor 
     */
    static new(): Compose
    _init(config?: Compose.ConstructorProperties): void
}

module DirectoryUnit {

    // Constructor properties interface

    interface ConstructorProperties extends Unit.ConstructorProperties {
    }

}

interface DirectoryUnit {

    // Own fields of AppStreamCompose-1.0.AppStreamCompose.DirectoryUnit

    parent_instance: Unit & GObject.Object

    // Owm methods of AppStreamCompose-1.0.AppStreamCompose.DirectoryUnit

    /**
     * Get the root directory path for this unit.
     */
    get_root(): string | null
    /**
     * Sets the root directory path for this unit.
     * @param root_dir Absolute directory path
     */
    set_root(root_dir: string | null): void

    // Class property signals of AppStreamCompose-1.0.AppStreamCompose.DirectoryUnit

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DirectoryUnit extends Unit {

    // Own properties of AppStreamCompose-1.0.AppStreamCompose.DirectoryUnit

    static name: string
    static $gtype: GObject.GType<DirectoryUnit>

    // Constructors of AppStreamCompose-1.0.AppStreamCompose.DirectoryUnit

    constructor(config?: DirectoryUnit.ConstructorProperties) 
    /**
     * Creates a new #AscDirectoryUnit.
     * @constructor 
     * @param root_dir 
     */
    constructor(root_dir: string | null) 
    /**
     * Creates a new #AscDirectoryUnit.
     * @constructor 
     * @param root_dir 
     */
    static new(root_dir: string | null): DirectoryUnit

    // Overloads of new

    /**
     * Creates a new #AscUnit.
     * @constructor 
     */
    static new(): Unit
    _init(config?: DirectoryUnit.ConstructorProperties): void
}

module Hint {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Hint {

    // Own fields of AppStreamCompose-1.0.AppStreamCompose.Hint

    parent_instance: GObject.Object

    // Owm methods of AppStreamCompose-1.0.AppStreamCompose.Hint

    /**
     * Add a replacement variable for the explanation text.
     * @param var_name Name of the variable to be replaced.
     * @param text Replacement for the variable name.
     */
    add_explanation_var(var_name: string | null, text: string | null): void
    /**
     * Formats the explanation template to return a human-redable issue hint
     * explanation, with all placeholder variables replaced.
     * @returns Explanation text for this hint, with variables replaced.
     */
    format_explanation(): string | null
    /**
     * Gets the explanation template for this hint.
     */
    get_explanation_template(): string | null
    /**
     * Returns a list with the flattened key/value pairs for this hint.
     * Values are located in uneven list entries, following their keys in even list entries.
     * @returns A flattened #GPtrArray with the key/value pairs.
     */
    get_explanation_vars_list(): string[]
    /**
     * Gets the issue severity of this hint.
     */
    get_severity(): AppStream.IssueSeverity
    /**
     * Gets the unique tag for the type of this hint.
     */
    get_tag(): string | null
    is_error(): boolean
    /**
     * Check if this hint is valid (it requires at least a tag and a severity
     * in order to be considered valid).
     * @returns %TRUE if this hint is valid.
     */
    is_valid(): boolean
    /**
     * Sets the explanation template for this hint.
     * @param explanation_tmpl 
     */
    set_explanation_template(explanation_tmpl: string | null): void
    /**
     * Sets the issue severity of this hint.
     * @param severity 
     */
    set_severity(severity: AppStream.IssueSeverity): void
    /**
     * Sets the unique tag for the type of this hint.
     * @param tag 
     */
    set_tag(tag: string | null): void

    // Class property signals of AppStreamCompose-1.0.AppStreamCompose.Hint

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Hint extends GObject.Object {

    // Own properties of AppStreamCompose-1.0.AppStreamCompose.Hint

    static name: string
    static $gtype: GObject.GType<Hint>

    // Constructors of AppStreamCompose-1.0.AppStreamCompose.Hint

    constructor(config?: Hint.ConstructorProperties) 
    /**
     * Creates a new #AscHint.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AscHint.
     * @constructor 
     */
    static new(): Hint
    /**
     * Creates a new #AscHint with the given tag. If the selected tag was not registered+
     * with the global tag registry, %NULL is returned and an error is set.
     * @constructor 
     * @param tag The tag ID to construct this hint for.
     */
    static new_for_tag(tag: string | null): Hint
    _init(config?: Hint.ConstructorProperties): void
}

module IconPolicy {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface IconPolicy {

    // Own fields of AppStreamCompose-1.0.AppStreamCompose.IconPolicy

    parent_instance: GObject.Object

    // Owm methods of AppStreamCompose-1.0.AppStreamCompose.IconPolicy

    /**
     * Sets a designated state for an icon of the given size.
     * @param icon_size the size of the icon to set policy for (e.g. 64 for 64x64px icons)
     * @param icon_scale the icon scale factor, e.g. 1
     * @param state the designated #AscIconState
     */
    set_policy(icon_size: number, icon_scale: number, state: IconState): void

    // Class property signals of AppStreamCompose-1.0.AppStreamCompose.IconPolicy

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IconPolicy extends GObject.Object {

    // Own properties of AppStreamCompose-1.0.AppStreamCompose.IconPolicy

    static name: string
    static $gtype: GObject.GType<IconPolicy>

    // Constructors of AppStreamCompose-1.0.AppStreamCompose.IconPolicy

    constructor(config?: IconPolicy.ConstructorProperties) 
    /**
     * Creates a new #AscIconPolicy.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AscIconPolicy.
     * @constructor 
     */
    static new(): IconPolicy
    _init(config?: IconPolicy.ConstructorProperties): void
}

module Image {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Image {

    // Owm methods of AppStreamCompose-1.0.AppStreamCompose.Image

    /**
     * Gets the image height.
     */
    get_height(): number
    /**
     * Gets the image pixbuf if set.
     * @returns the #GdkPixbuf, or %NULL
     */
    get_pixbuf(): GdkPixbuf.Pixbuf
    /**
     * Gets the image width.
     */
    get_width(): number
    /**
     * Reads an image from a file.
     * @param filename filename to read from
     * @param dest_size The size of the constructed pixbuf, or 0 for the native size
     * @param src_size_min The smallest source size allowed, or 0 for none
     * @param flags a #AscImageLoadFlags, e.g. %ASC_IMAGE_LOAD_FLAG_NONE
     * @returns %TRUE for success
     */
    load_filename(filename: string | null, dest_size: number, src_size_min: number, flags: ImageLoadFlags): boolean
    /**
     * Saves the image to a file.
     * @param filename filename to write to
     * @param width target width, or 0 for default
     * @param height target height, or 0 for default
     * @param flags some #AscImageSaveFlags values, e.g. %ASC_IMAGE_SAVE_FLAG_PAD_16_9
     * @returns %TRUE for success
     */
    save_filename(filename: string | null, width: number, height: number, flags: ImageSaveFlags): boolean
    /**
     * Resamples a pixbuf to a specific size.
     * @param width target width, or 0 for default
     * @param height target height, or 0 for default
     * @param flags some #AscImageSaveFlags values, e.g. %ASC_IMAGE_SAVE_FLAG_PAD_16_9
     * @returns A #GdkPixbuf of the specified size
     */
    save_pixbuf(width: number, height: number, flags: ImageSaveFlags): GdkPixbuf.Pixbuf
    /**
     * Scale the image to the given size.
     * @param new_width The new width.
     * @param new_height the new height.
     */
    scale(new_width: number, new_height: number): void
    /**
     * Scale the image to fir in a square with the given edge length,
     * and keep its aspect ratio.
     * @param size the maximum edge length.
     */
    scale_to_fit(size: number): void
    /**
     * Scale the image to the given height, preserving
     * its aspect ratio.
     * @param new_height the new height.
     */
    scale_to_height(new_height: number): void
    /**
     * Scale the image to the given width, preserving
     * its aspect ratio.
     * @param new_width The new width.
     */
    scale_to_width(new_width: number): void
    /**
     * Sets the image pixbuf.
     * @param pixbuf the #GdkPixbuf, or %NULL
     */
    set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void

    // Class property signals of AppStreamCompose-1.0.AppStreamCompose.Image

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Image extends GObject.Object {

    // Own properties of AppStreamCompose-1.0.AppStreamCompose.Image

    static name: string
    static $gtype: GObject.GType<Image>

    // Constructors of AppStreamCompose-1.0.AppStreamCompose.Image

    constructor(config?: Image.ConstructorProperties) 
    /**
     * Creates a new #AscImage.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AscImage.
     * @constructor 
     */
    static new(): Image
    /**
     * Creates a new #AscImage from data in memory.
     * @constructor 
     * @param data Data to load.
     * @param len Length of the data to load.
     * @param dest_size The size of the constructed pixbuf, or 0 for the native size
     * @param compressed %TRUE if passed data is gzip-compressed
     * @param flags a #AscImageLoadFlags, e.g. %ASC_IMAGE_LOAD_FLAG_NONE
     */
    static new_from_data(data: any | null, len: number, dest_size: number, compressed: boolean, flags: ImageLoadFlags): Image
    /**
     * Creates a new #AscImage from a file on the filesystem.
     * @constructor 
     * @param fname Name of the file to load.
     * @param dest_size The size of the constructed pixbuf, or 0 for the native size
     * @param flags a #AscImageLoadFlags, e.g. %ASC_IMAGE_LOAD_FLAG_NONE
     */
    static new_from_file(fname: string | null, dest_size: number, flags: ImageLoadFlags): Image
    _init(config?: Image.ConstructorProperties): void
    /**
     * Get a set of image format names we can currently read
     * (via GdkPixbuf).
     * @returns A hash set of format names.
     */
    static supported_format_names(): GLib.HashTable
}

module Result {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Result {

    // Own fields of AppStreamCompose-1.0.AppStreamCompose.Result

    parent_instance: GObject.Object

    // Owm methods of AppStreamCompose-1.0.AppStreamCompose.Result

    /**
     * Add component to the results set.
     * @param cpt The #AsComponent to add.
     * @param bytes Source data used to generate the GCID hash, or %NULL if nonexistent.
     * @returns %TRUE on success.
     */
    add_component(cpt: AppStream.Component, bytes: GLib.Bytes): boolean
    /**
     * Add component to the results set, using string data.
     * @param cpt The #AsComponent to add.
     * @param data Source data used to generate the GCID hash, or %NULL if nonexistent.
     * @returns %TRUE on success.
     */
    add_component_with_string(cpt: AppStream.Component, data: string | null): boolean
    /**
     * Add an issue hint for a component.
     * @param component_id The component-ID of the affected #AsComponent
     * @param tag AppStream Compose Issue hint tag
     * @param kv List of key-value pairs for replacement variables.
     * @returns %TRUE if the added hint did not cause the component to be invalidated.
     */
    add_hint_by_cid(component_id: string | null, tag: string | null, kv: string | null): boolean
    /**
     * Add an issue hint for a component.
     * @param cpt The affected #AsComponent
     * @param tag AppStream Compose Issue hint tag
     * @param kv List of key-value pairs for replacement variables.
     * @returns %TRUE if the added hint did not cause the component to be invalidated.
     */
    add_hint(cpt: AppStream.Component, tag: string | null, kv: string | null): boolean
    components_count(): number
    /**
     * Gets all components this #AsResult instance contains.
     * @returns An array of #AsComponent
     */
    fetch_components(): AppStream.Component[]
    /**
     * Get a list of all hints for all components that are registered with this result.
     * @returns An array of #AscHint
     */
    fetch_hints_all(): Hint[]
    /**
     * Retrieve the global component-ID string for the given component-ID,
     * as long as component with the given ID is registered with this #AscResult.
     * Otherwise, %NULL is returned.
     * @param cid Component ID to look for.
     */
    gcid_for_cid(cid: string | null): string | null
    gcid_for_component(cpt: AppStream.Component): string | null
    /**
     * Gets the ID name of the bundle (a package / Flatpak / any entity containing metadata)
     * that these these results are generated for.
     */
    get_bundle_id(): string | null
    /**
     * Gets the bundle kind these results are for.
     */
    get_bundle_kind(): AppStream.BundleKind
    /**
     * Gets the component by its component-id-
     * @param cid Component ID to look for.
     * @returns An #AsComponent
     */
    get_component(cid: string | null): AppStream.Component
    /**
     * Retrieve a list of all global component-IDs that this result knows of.
     * @returns An array of global component IDs. Free with %g_free
     */
    get_component_gcids(): string[]
    /**
     * Gets list of component-IDs which do have issue hints associated with them.
     * @returns An array of component-IDs. Free container with %g_free
     */
    get_component_ids_with_hints(): string[]
    /**
     * Gets hints for a component with the given component-id.
     * @param cid Component ID to look for.
     * @returns An array of #AscHint or %NULL
     */
    get_hints(cid: string | null): Hint[]
    /**
     * Test if a hint tag is associated with a given component in this result.
     * @param cpt the #AsComponent to check
     * @param tag the hint tag to check for
     * @returns %TRUE if a hint with this tag exists for the selected component.
     */
    has_hint(cpt: AppStream.Component, tag: string | null): boolean
    hints_count(): number
    /**
     * Check if an #AsComponent was set to be ignored in this result
     * (usually due to errors).
     * @param cpt the component to check for.
     * @returns %TRUE if the component is ignored.
     */
    is_ignored(cpt: AppStream.Component): boolean
    /**
     * Remove a component from the results set.
     * @param cpt The #AsComponent to remove.
     * @returns %TRUE if the component was found and removed.
     */
    remove_component(cpt: AppStream.Component): boolean
    /**
     * Remove a component from the results set.
     * @param cid a component-ID
     * @returns %TRUE if the component was found and removed.
     */
    remove_component_by_id(cid: string | null): boolean
    /**
     * Remove a component from the results set.
     * @param cpt The #AsComponent to remove.
     * @param remove_gcid %TRUE if global component ID should be unregistered as well.
     * @returns %TRUE if the component was found and removed.
     */
    remove_component_full(cpt: AppStream.Component, remove_gcid: boolean): boolean
    /**
     * Remove all hints that we have associated with the selected component-ID.
     * @param cid The component ID
     */
    remove_hints_for_cid(cid: string | null): void
    /**
     * Sets the name of the bundle these results are for.
     * @param id The new ID.
     */
    set_bundle_id(id: string | null): void
    /**
     * Sets the kind of the bundle these results are for.
     * @param kind 
     */
    set_bundle_kind(kind: AppStream.BundleKind): void
    unit_ignored(): boolean
    /**
     * Update the global component ID for the given component.
     * @param cpt The #AsComponent to edit.
     * @param bytes The data to include in the global component ID, or %NULL
     * @returns %TRUE if the component existed and was updated.
     */
    update_component_gcid(cpt: AppStream.Component, bytes: GLib.Bytes | null): boolean
    /**
     * Update the global component ID for the given component.
     * This is a convenience method for %asc_result_update_component_gcid
     * @param cpt The #AsComponent to edit.
     * @param data The data as string to include in the global component ID, or %NULL
     * @returns %TRUE if the component existed and was updated.
     */
    update_component_gcid_with_string(cpt: AppStream.Component, data: string | null): boolean

    // Class property signals of AppStreamCompose-1.0.AppStreamCompose.Result

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Result extends GObject.Object {

    // Own properties of AppStreamCompose-1.0.AppStreamCompose.Result

    static name: string
    static $gtype: GObject.GType<Result>

    // Constructors of AppStreamCompose-1.0.AppStreamCompose.Result

    constructor(config?: Result.ConstructorProperties) 
    /**
     * Creates a new #AscResult.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AscResult.
     * @constructor 
     */
    static new(): Result
    _init(config?: Result.ConstructorProperties): void
}

module Unit {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Unit {

    // Own fields of AppStreamCompose-1.0.AppStreamCompose.Unit

    parent_instance: GObject.Object

    // Owm methods of AppStreamCompose-1.0.AppStreamCompose.Unit

    /**
     * Add a path to the list of relevant directories.
     * A unit may only read data in paths that were previously
     * registered as relevant.
     * @param path path to be considered relevant
     */
    add_relevant_path(path: string | null): void
    /**
     * Close this unit, possibly freeing its resources. Calls to read_data() or
     * get_contents() may not produce results until open() is called again.
     */
    close(): void
    /**
     * Returns %TRUE if the directory exists and files in it are readable.
     * @param dirname The directory name to check.
     */
    dir_exists(dirname: string | null): boolean
    /**
     * Returns %TRUE if the filename exists and is readable using %asc_unit_read_data.
     * @param filename The filename to check.
     */
    file_exists(filename: string | null): boolean
    /**
     * Gets the ID name of the bundle (a package / Flatpak / any entity containing metadata)
     * that this unit represents.
     */
    get_bundle_id(): string | null
    /**
     * Gets the ID name of the bundle, normalized to be safe to use
     * in filenames. This may *not* be the same name as set via asc_unit_get_bundle_id()
     */
    get_bundle_id_safe(): string | null
    /**
     * Gets the bundle kind of this unit.
     */
    get_bundle_kind(): AppStream.BundleKind
    /**
     * Get a list of all files contained by this unit.
     * @returns A file listing
     */
    get_contents(): string[]
    /**
     * Get a list of paths that are relevant for data processing.
     * @returns A list of paths
     */
    get_relevant_paths(): string[]
    /**
     * Get user-defined data. This is a helper
     * function for bindings.
     */
    get_user_data(): any | null
    /**
     * Open this unit, populating its content listing.
     */
    open(): boolean
    /**
     * Read the contents of the selected file into memory and return them.
     * @param filename The file to read data for.
     */
    read_data(filename: string | null): GLib.Bytes
    /**
     * Sets the ID of the bundle represented by this unit.
     * @param id The new ID.
     */
    set_bundle_id(id: string | null): void
    /**
     * Sets the kind of the bundle this unit represents.
     * @param kind 
     */
    set_bundle_kind(kind: AppStream.BundleKind): void
    /**
     * Set list of files this unit contains.
     * @param contents A list of files contained by this unit.
     */
    set_contents(contents: string[]): void
    /**
     * Assign user-defined data to this object. This is a helper
     * function for bindings.
     * @param user_data the user data
     */
    set_user_data(user_data: any | null): void

    // Own virtual methods of AppStreamCompose-1.0.AppStreamCompose.Unit

    /**
     * Close this unit, possibly freeing its resources. Calls to read_data() or
     * get_contents() may not produce results until open() is called again.
     * @virtual 
     */
    vfunc_close(): void
    /**
     * Returns %TRUE if the directory exists and files in it are readable.
     * @virtual 
     * @param dirname The directory name to check.
     */
    vfunc_dir_exists(dirname: string | null): boolean
    /**
     * Returns %TRUE if the filename exists and is readable using %asc_unit_read_data.
     * @virtual 
     * @param filename The filename to check.
     */
    vfunc_file_exists(filename: string | null): boolean
    /**
     * Open this unit, populating its content listing.
     * @virtual 
     */
    vfunc_open(): boolean
    /**
     * Read the contents of the selected file into memory and return them.
     * @virtual 
     * @param filename The file to read data for.
     */
    vfunc_read_data(filename: string | null): GLib.Bytes

    // Class property signals of AppStreamCompose-1.0.AppStreamCompose.Unit

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Unit extends GObject.Object {

    // Own properties of AppStreamCompose-1.0.AppStreamCompose.Unit

    static name: string
    static $gtype: GObject.GType<Unit>

    // Constructors of AppStreamCompose-1.0.AppStreamCompose.Unit

    constructor(config?: Unit.ConstructorProperties) 
    /**
     * Creates a new #AscUnit.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AscUnit.
     * @constructor 
     */
    static new(): Unit
    _init(config?: Unit.ConstructorProperties): void
}

interface CanvasClass {

    // Own fields of AppStreamCompose-1.0.AppStreamCompose.CanvasClass

    parent_class: GObject.ObjectClass
}

abstract class CanvasClass {

    // Own properties of AppStreamCompose-1.0.AppStreamCompose.CanvasClass

    static name: string
}

interface ComposeClass {

    // Own fields of AppStreamCompose-1.0.AppStreamCompose.ComposeClass

    parent_class: GObject.ObjectClass
}

abstract class ComposeClass {

    // Own properties of AppStreamCompose-1.0.AppStreamCompose.ComposeClass

    static name: string
}

interface DirectoryUnitClass {

    // Own fields of AppStreamCompose-1.0.AppStreamCompose.DirectoryUnitClass

    parent_class: UnitClass
}

abstract class DirectoryUnitClass {

    // Own properties of AppStreamCompose-1.0.AppStreamCompose.DirectoryUnitClass

    static name: string
}

interface HintClass {

    // Own fields of AppStreamCompose-1.0.AppStreamCompose.HintClass

    parent_class: GObject.ObjectClass
}

abstract class HintClass {

    // Own properties of AppStreamCompose-1.0.AppStreamCompose.HintClass

    static name: string
}

interface IconPolicyClass {

    // Own fields of AppStreamCompose-1.0.AppStreamCompose.IconPolicyClass

    parent_class: GObject.ObjectClass
}

abstract class IconPolicyClass {

    // Own properties of AppStreamCompose-1.0.AppStreamCompose.IconPolicyClass

    static name: string
}

interface IconPolicyIter {

    // Owm methods of AppStreamCompose-1.0.AppStreamCompose.IconPolicyIter

    /**
     * Initializes a policy iterator for the policy entry list and associates it
     * it with `ipolicy`.
     * The #AscIconPolicyIter structure is typically allocated on the stack
     * and does not need to be freed explicitly.
     * @param ipolicy an #AscIconPolicy
     */
    init(ipolicy: IconPolicy): void
    /**
     * Returns the current icon policy entry and advances the iterator.
     * Example:
     * 
     * ```c
     * AscIconPolicyIter iter;
     * guint icon_size;
     * guint icon_scale;
     * AscIconState istate;
     * 
     * asc_icon_policy_iter_init (&iter, ipolicy);
     * while (asc_icon_policy_iter_next (&iter, &icon_size, &icon_scale, &istate)) {
     *     // do something with the icon entry data
     * }
     * ```
     * 
     * @returns %FALSE if the last entry has been reached.
     */
    next(): [ /* returnType */ boolean, /* size */ number, /* scale */ number, /* state */ IconState | null ]
}

/**
 * A #AscIconPolicyIter structure represents an iterator that can be used
 * to iterate over the icon sizes / policy entries of an #AscIconPolicy.
 * #AscIconPolicyIter structures are typically allocated on the stack and
 * then initialized with asc_icon_policy_iter_init().
 * @record 
 */
class IconPolicyIter {

    // Own properties of AppStreamCompose-1.0.AppStreamCompose.IconPolicyIter

    static name: string
}

interface ImageClass {

    // Own fields of AppStreamCompose-1.0.AppStreamCompose.ImageClass

    parent_class: GObject.ObjectClass
}

abstract class ImageClass {

    // Own properties of AppStreamCompose-1.0.AppStreamCompose.ImageClass

    static name: string
}

interface ResultClass {

    // Own fields of AppStreamCompose-1.0.AppStreamCompose.ResultClass

    parent_class: GObject.ObjectClass
}

abstract class ResultClass {

    // Own properties of AppStreamCompose-1.0.AppStreamCompose.ResultClass

    static name: string
}

interface UnitClass {

    // Own fields of AppStreamCompose-1.0.AppStreamCompose.UnitClass

    parent_class: GObject.ObjectClass
    open: (unit: Unit) => boolean
    close: (unit: Unit) => void
    file_exists: (unit: Unit, filename: string | null) => boolean
    dir_exists: (unit: Unit, dirname: string | null) => boolean
    read_data: (unit: Unit, filename: string | null) => GLib.Bytes
}

abstract class UnitClass {

    // Own properties of AppStreamCompose-1.0.AppStreamCompose.UnitClass

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

export default AppStreamCompose;
// END