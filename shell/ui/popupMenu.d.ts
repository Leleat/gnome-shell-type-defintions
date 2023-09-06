import Clutter from 'gi://Clutter';
import Gio from 'gi://Gio';
import Shell from 'gi://Shell';
import St from 'gi://St';
import * as Signals from '../misc/signals.js';

import * as BoxPointer from './boxpointer.js';

export enum Ornament {
    NONE = 0,
    DOT = 1,
    CHECK = 2,
    HIDDEN = 3,
}

declare function isPopupMenuItemVisible(child: PopupBaseMenuItem): boolean;

/**
 * arrowIcon
 *
 * @param {St.Side} side - Side to which the arrow points.
 * @returns {St.Icon} a new arrow icon
 */
export function arrowIcon(side: St.Side): St.Icon;

export class PopupBaseMenuItem extends St.BoxLayout {
    _delegate: PopupBaseMenuItem;
    _ornamentIcon: St.Icon;
    _ornament: Ornament;
    _parent: PopupMenuBase | null;
    _active: boolean;
    _activatable: boolean;
    _sensitive: boolean;
    _clickAction: Clutter.ClickAction;

    constructor(params?: {
        reactive: boolean;
        activate: boolean;
        hover: boolean;
        style_class: string;
        can_focus: boolean;
    }): void;

    get actor(): PopupBaseMenuItem;

    _getTopMenu(): PopupMenuBase;

    _setParent(parent: PopupMenuBase): void;

    vfunc_key_press_event(event: Clutter.Event): boolean;

    vfunc_key_focus_in(): void;

    vfunc_key_focus_out(): void;

    activate(event: Clutter.Event): void;

    get active(): boolean;

    set active(active: boolean);

    syncSensitive(): boolean;

    getSensitive(): boolean;

    setSensitive(sensitive: boolean): void;

    get sensitive(): void;

    set sensitive(sensitive: boolean);

    setOrnament(ornament: Ornament): void;

    _updateOrnamentStyle(): void;
}

export class PopupMenuItem extends PopupBaseMenuItem {
    label: St.Label;
    label_actor: St.Label;

    constructor(text: string, parentParams?: object): void;
}

export class PopupSeparatorMenuItem extends PopupBaseMenuItem {
    label: St.Label;
    label_actor: St.Label;
    _separator: St.Widget;

    constructor(text?: string): void;

    _syncVisibility(): void;
}

export class Switch extends St.Bin {
    _state: boolean;

    constructor(state: boolean): void;

    get state(): boolean;

    set state(state: boolean);

    toggle(): boolean;
}

export class PopupSwitchMenuItem extends PopupBaseMenuItem {
    label: St.Label;
    label_actor: St.Label;
    _switch: Switch;
    _statusBin: St.Bin;
    _statusLabel: St.Label;

    constructor(text: string, active: boolean, params?: object): void;

    setStatus(text?: string | null): void;

    activate(event: Clutter.Event): void;

    toggle(): void;

    get state(): boolean;

    setToggleState(state: boolean): void;

    checkAccessibleState(): void;
}

export class PopupImageMenuItem extends PopupBaseMenuItem {
    _icon: St.Icon;
    label: St.Label;
    label_actor: St.Label;

    constructor(text: string, icon: string | Gio.Icon, params?: object);

    setIcon(icon: string | Gio.Icon): void;

    _updateOrnamentStyle(): void;
}

export abstract class PopupMenuBase extends Signals.EventEmitter {
    sourceActor: Clutter.Actor;
    focusActor: Clutter.Actor;
    _parent: PopupMenuBase | null;
    box: St.BoxLayout;
    length: number;
    isOpen: boolean;
    _activeMenuItem: PopupBaseMenuItem | null;
    _settingsActions: {
        [desktopFile: string]: PopupImageMenuItem | PopupMenuItem;
    };
    _sensitive: boolean;

    constructor(sourceActor: Clutter.Actor, styleClass?: string);

    _getTopMenu(): PopupMenuBase;

    _setParent(parent: PopupMenuBase): void;

    getSensitive(): boolean;

    setSensitive(sensitive: boolean): void;

    get sensitive(): boolean;

    set sensitive(sensitive: boolean);

    _sessionUpdated(): void;

    addAction(
        title: string,
        callback: Function,
        icon?: string | Gio.Icon,
    ): PopupImageMenuItem | PopupMenuItem;

    addSettingsAction(
        title: string,
        desktopFile: string,
    ): PopupImageMenuItem | PopupMenuItem;

    _setSettingsVisibility(visible: boolean): void;

    isEmpty(): boolean;

    itemActivated(animate?: boolean): void;

    _subMenuActiveChanged(
        submenu: PopupMenuSection | PopupSubMenu,
        submenuItem: PopupBaseMenuItem | null,
    ): void;

    _connectItemSignals(menuItem: PopupBaseMenuItem): void;

    _updateSeparatorVisibility(menuItem: PopupSeparatorMenuItem): void;

    moveMenuItem(
        menuItem: PopupBaseMenuItem | PopupMenuSection,
        position: number,
    ): void;

    addMenuItem(
        menuItem: PopupBaseMenuItem | PopupMenuSection,
        position?: number,
    ): void;

    _getMenuItems(): (PopupBaseMenuItem | PopupMenuSection)[];

    get firstMenuItem(): PopupBaseMenuItem | PopupMenuSection | null;

    get numMenuItems(): number;

    removeAll(): void;

    toggle(): void;

    destroy(): void;
}

export class PopupMenu extends PopupMenuBase {
    _arrowAlignment: number;
    _arrowSide: St.Side;
    _boxPointer: BoxPointer.BoxPointer;
    actor: BoxPointer.BoxPointer;
    _systemModalOpenedId: number;
    _openedSubMenu: PopupSubMenu | null;

    constructor(
        sourceActor: Clutter.Actor,
        arrowAlignment: number,
        arrowSide: St.Side,
    );

    _setOpenedSubMenu(submenu: PopupSubMenu | null): void;

    _onKeyPress(actor: Clutter.Actor, event: Clutter.Event): boolean;

    setArrowOrigin(origin: number): void;

    setSourceAlignment(alignment: number): void;

    open(animate: BoxPointer.PopupAnimation): void;

    close(animate: BoxPointer.PopupAnimation): void;

    destroy(): void;
}

export class PopupDummyMenu extends Signals.EventEmitter {
    sourceActor: Clutter.Actor;
    actor: Clutter.Actor;

    constructor(sourceActor: Clutter.Actor);

    getSensitive(): true;

    get sensitive(): true;

    open(): void;

    close(): void;

    toggle(): void;

    destroy(): void;
}

export class PopupSubMenu extends PopupMenuBase {
    _arrow: St.Icon;
    actor: St.ScrollView;

    constructor(sourceActor: Clutter.Actor, sourceArrow: St.Icon);

    _needsScrollbar(): boolean;

    getSensitive(): boolean;

    get sensitive(): boolean;

    open(animate: boolean): void;

    close(animate: boolean): void;

    _onKeyPressEvent(actor: Clutter.Actor, event: Clutter.Event): boolean;
}

/**
 * PopupMenuSection:
 *
 * A section of a PopupMenu which is handled like a submenu
 * (you can add and remove items, you can destroy it, you
 * can add it to another menu), but is completely transparent
 * to the user
 */
export class PopupMenuSection extends PopupMenuBase {
    actor: St.BoxLayout;

    // deliberately ignore any attempt to open() or close(), but emit the
    // corresponding signal so children can still pick it up
    open(): void;

    close(): void;
}

export class PopupSubMenuMenuItem extends PopupBaseMenuItem {
    icon?: St.Icon;
    label: St.Label;
    label_actor: St.Label;
    menu: PopupSubMenu;
    _triangle: St.Icon;
    _triangleBin: St.Widget;

    constructor(text: string, wantIcon?: boolean): void;

    _setParent(parent: PopupMenuBase): void;

    syncSensitive(): void;

    _subMenuOpenStateChanged(menu: PopupSubMenu, open: boolean): void;

    setSubmenuShown(open: boolean): void;

    _setOpenState(open: boolean): void;

    _getOpenState(): boolean;

    vfunc_key_press_event(event: Clutter.Event): boolean;

    activate(_event: Clutter.Event): void;
}

/* Basic implementation of a menu manager.
 * Call addMenu to add menus
 */
export class PopupMenuManager {
    activeMenu?: PopupMenu | null;
    _grab?: Clutter.Grab | null;
    _menus: PopupMenu[];

    constructor(owner: any, grabParams?: {actionMode: Shell.ActionMode});

    addMenu(menu: PopupMenu, position?: number): void;

    removeMenu(menu: PopupMenu): void;

    ignoreRelease(): void;

    _onMenuOpenState(menu: PopupMenu, open: boolean): void;

    _changeMenu(newMenu: PopupMenu): void;

    _onCapturedEvent(actor: Clutter.Actor, event: Clutter.Event): boolean;

    _findMenuForSource(source: Clutter.Actor): PopupMenu | null;

    _closeMenu(isUser: boolean, menu: PopupMenu): void;
}
