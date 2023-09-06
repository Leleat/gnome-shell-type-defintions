import Clutter from 'gi://Clutter';
import St from 'gi://St';

import * as PopupMenu from './popupMenu.js';

export class ButtonBox extends St.Widget {
    _delegate: this;
    container: St.Bin;
    _minHPadding: number;
    _natHPadding: number;

    constructor(params: object): void;

    _onStyleChanged(actor: ButtonBox): void;

    vfunc_get_preferred_width(_forHeight: number): [number, number];

    vfunc_get_preferred_height(_forWidth: number): [number, number];

    vfunc_allocate(box: Clutter.ActorBox): void;

    _onDestroy(): void;
}

export class Button extends ButtonBox {
    menu: PopupMenu.PopupDummyMenu | PopupMenu.PopupMenu;

    constructor(
        menuAlignment: number,
        nameText?: string | null,
        dontCreateMenu?: boolean,
    ): void;

    setSensitive(sensitive: boolean): void;

    setMenu(menu: PopupMenu.PopupMenu | null): void;

    vfunc_event(event: Clutter.Event): Clutter.EVENT_PROPAGATE;

    vfunc_hide(): void;

    _onMenuKeyPress(actor: Clutter.Actor, event: Clutter.Event): boolean;

    _onOpenStateChanged(menu: PopupMenu.PopupMenu, open: boolean): void;

    _onDestroy(): void;
}

/* SystemIndicator:
 *
 * This class manages one system indicator, which are the icons
 * that you see at the top right. A system indicator is composed
 * of an icon and a menu section, which will be composed into the
 * aggregate menu.
 */
export const SystemIndicator = class SystemIndicator extends St.BoxLayout {
    menu: PopupMenu.PopupMenuSection;

    constructor(): void;

    _syncIndicatorsVisible(): void;

    _addIndicator(): St.Icon;
};
