import {ExtensionBase} from './sharedInternals.js';

export class Extension extends ExtensionBase {
    static override lookupByURL(uuid: string): Extension | null;
    static override lookupByUUID(uuid: string): Extension | null;

    static defineTranslationFunctions(url: string): {
        gettext: (param: string) => string;
        ngettext: (str: string, strPlural: string, n: number) => string;
        pgettext: (context: string, str: string) => string;
    };

    enable(): void;

    disable(): void;

    openPreferences(): void;
}

export const {
    gettext,
    ngettext,
    pgettext,
}: {
    gettext: (param: string) => string;
    ngettext: (str: string, strPlural: string, n: number) => string;
    pgettext: (context: string, str: string) => string;
};

export class InjectionManager {
    /**
     * Modify, replace or inject a method
     */
    overrideMethod(
        prototype: object,
        methodName: string,
        createOverrideFunc: (originalFunction: Function) => Function,
    ): void;

    /**
     * Restore the original method
     */
    restoreMethod(prototype: object, methodName: string): void;

    /**
     * Restore all original methods and clear overrides
     */
    clear(): void;

    _saveMethod(prototype: object, methodName: string): Function;

    _installMethod(
        prototype: object,
        methodName: string,
        method: Function,
    ): void;
}
