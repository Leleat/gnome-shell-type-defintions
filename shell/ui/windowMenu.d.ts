import Meta from 'gi://Meta';
import Mtk from 'gi://Mtk';
import St from 'gi://St';

import * as PopupMenu from './popupMenu.js';

export class WindowMenu extends PopupMenu.PopupMenu {
    constructor(window: Meta.Window, sourceActor: St.Widget);

    _buildMenu(window: Meta.Window): void;

    addAction(label: string, callback: Function): PopupMenuItem;
}

export class WindowMenuManager {
    _sourceActor: St.Widget;
    _manager: PopupMenu.PopupMenuManager;

    showWindowMenuForWindow(
        window: Meta.Window,
        type: Meta.WindowMenuType,
        rect: Mtk.Rectangle,
    ): void;
}
