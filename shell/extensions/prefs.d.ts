import Adw from 'gi://Adw';
import Gtk from 'gi://Gtk';

import {ExtensionBase} from './sharedInternals.js';

export abstract class ExtensionPreferences extends ExtensionBase {
    static override lookupByURL(uuid: string): ExtensionPreferences | null;
    static override lookupByUUID(uuid: string): ExtensionPreferences | null;

    static defineTranslationFunctions(url: string): {
        gettext: (param: string) => string;
        ngettext: (str: string, strPlural: string, n: number) => string;
        pgettext: (context: string, str: string) => string;
    };

    /**
     * Get the single widget that implements
     * the extension's preferences.
     */
    getPreferencesWidget(): Gtk.Widget;

    /**
     * Fill the preferences window with preferences.
     *
     * The default implementation adds the widget
     * returned by getPreferencesWidget().
     *
     */
    fillPreferencesWindow(window: Adw.PreferencesWindow): void;

    _wrapWidget(
        widget: Adw.PreferencesPage | Adw.PreferencesPage | Gtk.Widget,
    ): Adw.PreferencesPage;
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
