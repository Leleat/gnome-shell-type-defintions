import Gio from 'gi://Gio';

export abstract class ExtensionBase {
    /**
     * Look up an extension by URL (usually 'import.meta.url')
     */
    static lookupByURL(url: string);

    /**
     * Look up an extension by UUID
     */
    static lookupByUUID(_uuid: string);

    /**
     * @param {object} metadata - metadata passed in when loading the extension
     */
    constructor(metadata: object);

    get uuid(): string;

    get dir(): Gio.File;

    get path(): string;

    getSettings(schema?: string): Gio.Settings;

    initTranslations(domain: string);

    /**
     * Translate `str` using the extension's gettext domain
     */
    gettext(str: string): string;

    /**
     * Translate `str` and choose plural form using the extension's
     * gettext domain
    
     */
    ngettext(str: string, strPlural: string, n: number): string;

    /**
     * Translate `str` in the context of `context` using the extension's
     * gettext domain
     *
     * @param {string} context - context to disambiguate `str`
     * @param {string} str - the string to translate
     *
     * @returns {string} the translated string
     */
    pgettext(context: string, str: string): string;
}
