import Clutter from 'gi://Clutter';
import Gio from 'gi://Gio';
import Meta from 'gi://Meta';
import Mtk from 'gi://Mtk';
import Shell from 'gi://Shell';
import St from 'gi://St';

import * as Dialog from './dialog.js';
import * as WorkspaceSwitcherPopup from './workspaceSwitcherPopup.js';
import * as InhibitShortcutsDialog from './inhibitShortcutsDialog.js';
import * as ModalDialog from './modalDialog.js';
import * as WindowMenu from './windowMenu.js';
import * as PadOsd from './padOsd.js';
import * as CloseDialog from './closeDialog.js';
import * as WorkspaceAnimation from './workspaceAnimation.js';
import * as Layout from './layout.js';

export const SHELL_KEYBINDINGS_SCHEMA = 'org.gnome.shell.keybindings';

declare class DisplayChangeDialog extends ModalDialog.ModalDialog {
    _wm: Shell.WM;
    _countDown: number;
    _content: Dialog.MessageDialogContent;
    _cancelButton: St.Button;
    _okButton: St.Button;
    _timeoutId: number;

    constructor(wm: Shell.WM): void;

    close(timestamp: number): void;

    _formatCountDown(): string;

    _tick(): boolean;

    _onFailure(): void;

    _onSuccess(): void;
}

export class WindowDimmer extends Clutter.BrightnessContrastEffect {
    constructor(): void;

    _syncEnabled(dimmed: boolean): void;

    setDimmed(dimmed: boolean, animate: boolean): void;
}

/**
 * @param {Meta.WindowActor} actor
 */
declare function getWindowDimmer(actor: Meta.WindowActor): WindowDimmer;

declare class WorkspaceTracker {
    _wm: WindowManager;
    _workspaces: Meta.Workspace[];
    _checkWorkspacesId: number;
    _pauseWorkspaceCheck: boolean;
    /** org.gnome.mutter */
    _workspaceSettings: Gio.Settings;

    constructor(wm: WindowManager);

    blockUpdates(): void;

    unblockUpdates(): void;

    _checkWorkspaces(): boolean;

    keepWorkspaceAlive(workspace: Meta.Workspace, duration: number): void;

    _windowRemoved(workspace: Meta.Workspace, window: Meta.Window): void;

    _windowLeftMonitor(
        metaDisplay: Meta.Display,
        monitorIndex: number,
        _metaWin: Meta.Window,
    ): void;

    _windowEnteredMonitor(
        metaDisplay: Meta.Display,
        monitorIndex: number,
        _metaWin: Meta.Window,
    ): void;

    _queueCheckWorkspaces(): void;

    _nWorkspacesChanged(): false;
}

export class TilePreview extends St.Widget {
    _showing: boolean;
    _rect: Mtk.Rectangle | null;
    _monitorIndex: number;

    constructor(): void;

    open(
        window: Meta.Window,
        tileRect: Mtk.Rectangle,
        monitorIndex: number,
    ): void;

    close(): void;

    _reset(): void;

    _updateStyle(monitor: Layout.Monitor): void;
}

declare class ResizePopup extends St.Widget {
    _label: St.Label;

    constructor(): void;

    set(rect: Mtk.Rectangle, displayW: number, displayH: number): void;
}

export class WindowManager {
    _shellwm: Shell.WM;
    _minimizing: Set<Meta.WindowActor>;
    _unminimizing: Set<Meta.WindowActor>;
    _mapping: Set<Meta.WindowActor>;
    _resizing: Set<Meta.WindowActor>;
    _resizePending: Set<Meta.WindowActor>;
    _destroying: Set<Meta.WindowActor>;
    _dimmedWindows: Meta.Window[];
    _skippedActors: Set<Meta.WindowActor>;
    _allowedKeybindings: {[name: string]: Shell.ActionMode};
    _isWorkspacePrepended: boolean;
    _canScroll: boolean;
    _workspaceSwitcherPopup: WorkspaceSwitcherPopup.WorkspaceSwitcherPopup | null;
    _tilePreview: TilePreview | null;
    _gsdWacomProxy: GsdWacomProxy;
    _windowMenuManager: WindowMenu.WindowMenuManager;
    _workspaceAnimation: WorkspaceAnimation.WorkspaceAnimationController;
    _workspaceTracker?: WorkspaceTracker;
    _switchInProgress?: boolean;
    _resizePopup?: ResizePopup | null;
    _blockAnimations?: boolean;
    _currentPadOsd?: PadOsd.PadOsd | null;

    _startX11Services(task: Gio.Task): Promise<void>;

    _stopX11Services(cancellable: Gio.Cancellable): Promise<void>;

    _showPadOsd(
        display: Meta.Display,
        device: Clutter.InputDevice,
        settings: Gio.Settings,
        imagePath: string,
        editionMode: boolean,
        monitorIndex: number,
    ): PadOsd.PadOsd;

    _lookupIndex(windows: Meta.WindowActor, metaWindow: Meta.Window): number;

    _switchApp(): void;

    insertWorkspace(pos: number): void;

    keepWorkspaceAlive(workspace: Meta.Workspace, duration: number): void;

    skipNextEffect(actor: Meta.WindowActor): void;

    setCustomKeybindingHandler(
        name: string,
        modes: Shell.ActionMode,
        handler: Function,
    ): void;

    addKeybinding(
        name: string,
        settings: Gio.Settings,
        flags: Meta.KeyBindingFlags,
        modes: Shell.ActionMode,
        handler: Function,
    ): Meta.KeyBindingAction;

    removeKeybinding(name: string): void;

    allowKeybinding(name: string, modes: Shell.ActionMode): void;

    _shouldAnimate(): boolean;

    _shouldAnimateActor(
        actor: Meta.WindowActor,
        types: Meta.WindowType[],
    ): boolean;

    _minimizeWindow(shellwm: Shell.WM, actor: Meta.WindowActor): void;

    _minimizeWindowDone(shellwm: Shell.WM, actor: Meta.WindowActor): void;

    _unminimizeWindow(shellwm: Shell.WM, actor: Meta.WindowActor): void;

    _unminimizeWindowDone(shellwm: Shell.WM, actor: Meta.WindowActor): void;

    _sizeChangeWindow(
        shellwm: Shell.WM,
        actor: Meta.WindowActor,
        whichChange: Meta.SizeChange,
        oldFrameRect: Mtk.Rectangle,
        _oldBufferRect: Mtk.Rectangle,
    ): void;

    _prepareAnimationInfo(
        shellwm: Shell.WM,
        actor: Meta.WindowActor,
        oldFrameRect: Mtk.Rectangle,
        _change: Meta.SizeChange,
    ): void;

    _sizeChangedWindow(shellwm: Shell.WM, actor: Meta.WindowActor): void;

    _clearAnimationInfo(actor: Meta.WindowActor): boolean;

    _sizeChangeWindowDone(shellwm: Shell.WM, actor: Meta.WindowActor): void;

    _checkDimming(window: Meta.Window): void;

    _dimWindow(window: Meta.Window): void;

    _undimWindow(window: Meta.Window): void;

    _waitForOverviewToHide(): Promise<void>;

    _mapWindow(shellwm: Shell.WM, actor: Meta.WindowActor): Promise<void>;

    _mapWindowDone(shellwm: Shell.WM, actor: Meta.WindowActor): void;

    _destroyWindow(shellwm: Shell.WM, actor: Meta.WindowActor): void;

    _destroyWindowDone(shellwm: Shell.WM, actor: Meta.WindowActor): void;

    _filterKeybinding(shellwm: Shell.WM, binding: Meta.KeyBinding): boolean;

    _switchWorkspace(
        shellwm: Shell.WM,
        from: number,
        to: number,
        direction: Meta.MotionDirection,
    ): void;

    _switchWorkspaceDone(): void;

    _showTilePreview(
        shellwm: Shell.WM,
        window: Meta.Window,
        tileRect: Mtk.Rectangle,
        monitorIndex: number,
    );

    _hideTilePreview(): void;

    _showWindowMenu(
        shellwm: Shell.WM,
        window: Meta.Window,
        menu: Meta.WindowMenuType,
        rect: Mtk.Rectangle,
    ): void;

    _startSwitcher(
        display: Meta.Display,
        window: Meta.Window,
        binding: Meta.KeyBinding,
    ): void;

    _startA11ySwitcher(
        display: Meta.Display,
        window: Meta.Window,
        binding: Meta.KeyBinding,
    ): void;

    _allowFavoriteShortcuts(): boolean;

    _switchToApplication(
        display: Meta.Display,
        window: Meta.Window,
        binding: Meta.KeyBindingAction,
    ): void;

    _toggleCalendar(): void;

    _toggleQuickSettings(): void;

    _showWorkspaceSwitcher(
        display: Meta.Display,
        window: Meta.Window,
        binding: Meta.KeyBinding,
    ): void;

    actionMoveWorkspace(workspace: Meta.Workspace): void;

    actionMoveWindow(window: Meta.Window, workspace: Meta.Workspace): void;

    handleWorkspaceScroll(event: Clutter.Event): boolean;

    _confirmDisplayChange(): void;

    _createCloseDialog(
        shellwm: Shell.WM,
        window: Meta.Window,
    ): CloseDialog.CloseDialog;

    _createInhibitShortcutsDialog(
        shellwm: Shell.WM,
        window: Meta.Window,
    ): InhibitShortcutsDialog.InhibitShortcutsDialog;

    _showResizePopup(
        display: Meta.Display,
        show: boolean,
        rect: Mtk.Rectangle,
        displayW: number,
        displayH: number,
    ): void;
}
