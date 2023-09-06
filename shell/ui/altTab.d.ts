import Clutter from 'gi://Clutter';
import GLib from 'gi://GLib';
import Meta from 'gi://Meta';
import St from 'gi://St';
import Shell from 'gi://Shell';

import * as SwitcherPopup from './switcherPopup.js';

declare enum AppIconMode {
    THUMBNAIL_ONLY = 1,
    APP_ICON_ONLY = 2,
    BOTH = 3,
}

export class AppSwitcherPopup extends SwitcherPopup.SwitcherPopup {
    _thumbnails: ThumbnailSwitcher | null;
    _thumbnailTimeoutId: number;
    _currentWindow: number;
    thumbnailsVisible: boolean;
    _switcherList: AppSwitcher;
    _items: AppIcon[];
    _thumbnailsFocused?: boolean;

    constructor(): void;

    vfunc_allocate(box: Clutter.ActorBox): void;

    _initialSelection(backward: boolean, binding: string): void;

    _nextWindow(): number;

    _previousWindow(): number;

    _closeAppWindow(appIndex: number, windowIndex: number): void;

    _quitApplication(appIndex: number): void;

    _keyPressHandler(keysym: number, action: Meta.KeyBindingAction): boolean;

    _scrollHandler(direction: Clutter.ScrollDirection): void;

    _itemActivatedHandler(n: number): void;

    _windowActivated(thumbnailSwitcher: ThumbnailSwitcher, n: number): void;

    _windowEntered(thumbnailSwitcher: ThumbnailSwitcher, n: number): void;

    _windowRemoved(thumbnailSwitcher: ThumbnailSwitcher, n: number): void;

    _finish(timestamp: number): void;

    _onDestroy(): void;

    _select(app: number, window?: number | null, forceAppFocus?: boolean): void;

    _timeoutPopupThumbnails(): GLib.SOURCE_REMOVE;

    _destroyThumbnails(): void;

    _createThumbnails(): void;
}

declare class CyclerHighlight extends St.Widget {
    _window: Meta.Window | null;
    _clone: Clutter.Clone;
    _highlight: St.Widget;

    constructor(): void;

    set window(w: Meta.Window | null);

    _onSizeChanged(): void;

    _onDestroy(): void;
}

declare class CyclerList extends St.Widget {
    highlight(index: number, _justOutline: boolean): void;
}

declare abstract class CyclerPopup extends SwitcherPopup.SwitcherPopup {
    _items: unknown[];
    _highlight: CyclerHighlight;
    _switcherList: CyclerList;

    constructor(): void;

    _highlightItem(index: number, _justOutline: boolean): void;

    _finish(): void;

    _onDestroy(): void;
}

declare class GroupCyclerPopup extends CyclerPopup {
    _items: Meta.Window[];
    _settings: Gio.Settings;

    constructor(): void;

    _getWindows(): Meta.Window[];

    _keyPressHandler(keysym: number, action: Meta.KeyBindingAction): boolean;
}

declare class WindowSwitcherPopup extends SwitcherPopup.SwitcherPopup {
    _settings: Gio.Settings;
    _switcherList: WindowSwitcher;
    _items: WindowIcon[];

    constructor(): void;

    _getWindowList(): Meta.Window[];

    _closeWindow(windowIndex: number): void;

    _keyPressHandler(keysym: number, action: Meta.KeyBindingAction): boolean;

    _finish(): void;
}

declare class WindowCyclerPopup extends CyclerPopup {
    _settings: Gio.Settings;

    constructor(): void;

    _getWindows(): Meta.Window[];

    _keyPressHandler(keysym: number, action: Meta.KeyBindingAction): boolean;
}

declare class AppIcon extends St.BoxLayout {
    app: Shell.App;
    icon: St.Icon | null;
    _iconBin: St.Bin;
    label: St.Label;

    constructor(app: Shell.App): void;

    set_size(size: number);
}

declare class AppSwitcher extends SwitcherPopup.SwitcherList {
    icons: AppIcon[];
    _arrows: St.DrawingArea[];
    _altTabPopup = AppSwitcherPopup;
    _delayedHighlighted: number;
    _mouseTimeOutId: number;

    constructor(apps: Shell.App[], altTabPopup: AppSwitcherPopup): void;

    _onDestroy(): void;

    _setIconSize(): void;

    vfunc_get_preferred_height(forWidth: number): [number, number];

    vfunc_allocate(box: Clutter.ActorBox): void;

    _onItemMotion(item: AppIcon): boolean;

    _enterItem(index: number): void;

    highlight(n: number, justOutline: boolean): void;

    _addIcon(appIcon: AppIcon);

    _removeIcon(app: Shell.App): void;
}

declare class ThumbnailSwitcher extends SwitcherPopup.SwitcherList {
    _labels: St.Label[];
    _thumbnailBins: St.Bin[];
    _clones: Clutter.Clone[];
    _windows: Meta.Window[];

    constructor(windows: Meta.Window[]): void;

    addClones(availHeight: number): void;

    _removeThumbnail(source: Meta.WindowActor, clone: Clutter.Clone): void;

    _onDestroy(): void;
}

declare class WindowIcon extends St.BoxLayout {
    window: Meta.Window;
    _icon: St.Widget;
    label: St.Label;
    app: Shell.App;

    constructor(window: Meta.Window, mode: AppIconMode): void;

    _createAppIcon(app: Shell.App, size: number): St.Icon;
}

declare class WindowSwitcher extends SwitcherPopup.SwitcherList {
    _label: St.Label;
    windows: Meta.Window[];
    icons: WindowIcon[];

    constructor(windows: Meta.Window[], mode: AppIconMode): void;

    _onDestroy(): void;

    vfunc_get_preferred_height(forWidth: void): [number, number];

    vfunc_allocate(box: Clutter.ActorBox): void;

    highlight(index: number, justOutline: boolean): void;

    _removeWindow(window: Meta.Window): void;
}
