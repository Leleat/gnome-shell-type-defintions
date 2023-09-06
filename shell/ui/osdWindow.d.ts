import Clutter from 'gi://Clutter';
import Gio from 'gi://Gio';
import GLib from 'gi://GLib';
import St from 'gi://St';

import * as BarLevel from './barLevel.js';

export class OsdWindow extends Clutter.Actor {
    _monitorIndex: number;
    _hbox: St.BoxLayout;
    _icon: St.Icon;
    _vbox: St.BoxLayout;
    _label: St.Label;
    _level: BarLevel.BarLevel;
    _hideTimeoutId: number;

    constructor(monitorIndex: number): void;

    _updateBoxVisibility(): void;

    setIcon(icon: Gio.Icon): void;

    setLabel(label?: string | null): void;

    setLevel(value?: number | null): void;

    setMaxLevel(maxLevel?: number);

    show(): void;

    cancel(): void;

    _hide(): GLib.SOURCE_REMOVE;

    _reset(): void;
}

export class OsdWindowManager {
    _osdWindows: OsdWindow[];

    _monitorsChanged(): void;

    _showOsdWindow(
        monitorIndex: number,
        icon: Gio.Icon,
        label?: string | null,
        level?: number | null,
        maxLevel?: number,
    ): void;

    show(
        monitorIndex: number,
        icon: Gio.Icon,
        label?: string | null,
        level?: number | null,
        maxLevel?: number,
    ): void;

    hideAll(): void;
}
