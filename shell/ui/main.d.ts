import Clutter from 'gi://Clutter';
import Gio from 'gi://Gio';
import Meta from 'gi://Meta';
import Shell from 'gi://Shell';
import St from 'gi://St';

import * as AccessDialog from './accessDialog.js';
import * as AudioDeviceSelection from './audioDeviceSelection.js';
import * as Components from './components.js';
import * as CtrlAltTab from './ctrlAltTab.js';
import * as ExtensionSystem from './extensionSystem.js';
import * as InputMethod from '../misc/inputMethod.js';
import * as Introspect from '../misc/introspect.js';
import * as Keyboard from './keyboard.js';
import * as MessageTray from './messageTray.js';
import * as ModalDialog from './modalDialog.js';
import * as OsdWindow from './osdWindow.js';
import * as OsdMonitorLabeler from './osdMonitorLabeler.js';
import * as Overview from './overview.js';
import * as PadOsd from './padOsd.js';
import * as Panel from './panel.js';
import * as RunDialog from './runDialog.js';
import * as WelcomeDialog from './welcomeDialog.js';
import * as Layout from './layout.js';
import * as LookingGlass from './lookingGlass.js';
import * as NotificationDaemon from './notificationDaemon.js';
import * as WindowAttentionHandler from './windowAttentionHandler.js';
import * as Screenshot from './screenshot.js';
import * as ScreenShield from './screenShield.js';
import * as SessionMode from './sessionMode.js';
import * as ShellDBus from './shellDBus.js';
import * as ShellMountOperation from './shellMountOperation.js';
import * as WindowManager from './windowManager.js';
import * as Magnifier from './magnifier.js';
import * as XdndHandler from './xdndHandler.js';
import * as KbdA11yDialog from './kbdA11yDialog.js';
import * as LocatePointer from './locatePointer.js';

export let componentManager: Components.ComponentManager;
export let extensionManager: ExtensionSystem.ExtensionManager;
export let panel: Panel.Panel;
export let overview: Overview.Overview;
export let runDialog: RunDialog.RunDialog | null;
export let lookingGlass: LookingGlass.LookingGlass | null;
export let welcomeDialog: WelcomeDialog.WelcomeDialog | null;
export let wm: WindowManager.WindowManager;
export let messageTray: MessageTray.MessageTray;
export let screenShield: ScreenShield.ScreenShield | null;
export let notificationDaemon: NotificationDaemon.NotificationDaemon;
export let windowAttentionHandler: WindowAttentionHandler.WindowAttentionHandler;
export let ctrlAltTabManager: CtrlAltTab.CtrlAltTabManager;
export let padOsdService: PadOsd.PadOsdService;
export let osdWindowManager: OsdWindow.OsdWindowManager;
export let osdMonitorLabeler: OsdMonitorLabeler.OsdMonitorLabeler;
export let sessionMode: SessionMode.SessionMode;
export let screenshotUI: Screenshot.ScreenshotUI;
export let shellAccessDialogDBusService: AccessDialog.AccessDialogDBus;
export let shellAudioSelectionDBusService: AudioDeviceSelection.AudioDeviceSelectionDBus;
export let shellDBusService: ShellDBus.GnomeShell;
export let shellMountOpDBusService: ShellMountOperation.GnomeShellMountOpHandler;
export let screenSaverDBus: unknown;
export let modalCount: number;
export let actionMode: Shell.ActionMode;
export let modalActorFocusStack: {
    actor: Clutter.Actor;
    grab: Clutter.Grab;
    destroyId: number;
    prevFocus: Clutter.Actor | null;
    prevFocusDestroyId?: number;
    actionMode: Shell.ActionMode;
}[];
export let uiGroup: Layout.UiActor;
export let magnifier: Magnifier.Magnifier;
export let xdndHandler: XdndHandler.XdndHandler;
export let keyboard: Keyboard.KeyboardManager;
export let layoutManager: Layout.LayoutManager;
export let kbdA11yDialog: KbdA11yDialog.KbdA11yDialog;
export let inputMethod: InputMethod.InputMethod;
export let introspectService: Introspect.IntrospectService;
export let locatePointer: LocatePointer.LocatePointer;

export function start(): Promise<void>;

/** @private */
declare function _initializeUI(): Promise<void>;

declare function _handleShowWelcomeScreen(): void;

declare function _handleLockScreenWarning(): Promise<void>;

declare function _getStylesheet(name: string): Gio.File | null;

/** @returns {string} */
export function getStyleVariant(): string;

declare function _getDefaultStylesheet(): Gio.File | null;

declare function _loadDefaultStylesheet(): void;

declare function _loadWorkspacesAdjustment(): void;

/**
 * Creates an adjustment that has its lower, upper, and value
 * properties set for the number of available workspaces. Consumers
 * of the returned adjustment must only change the 'value' property,
 * and only that.
 *
 * @param {Clutter.Actor} actor
 *
 * @returns {St.Adjustment} - an adjustment representing the
 * current workspaces layout
 */
export function createWorkspacesAdjustment(actor: Clutter.Actor): St.Adjustment;

/**
 * Get the theme CSS file that the shell will load
 *
 * @returns {?Gio.File}: A #GFile that contains the theme CSS,
 *          null if using the default
 */
export function getThemeStylesheet(): Gio.File | null;

/**
 * Set the theme CSS file that the shell will load
 *
 * @param {string=} cssStylesheet - A file path that contains the theme CSS,
 *     set it to null to use the default
 */
export function setThemeStylesheet(cssStylesheet?: string): void;

export function reloadThemeResource(): void;

/** @private */
declare function _loadIcons(): void;

declare function _loadOskLayouts(): void;

/**
 * loadTheme:
 *
 * Reloads the theme CSS file
 */
export function loadTheme(): void;

/**
 * @param {string} msg A message
 * @param {string} details Additional information
 */
export function notify(msg: string, details: string): void;

/**
 * See shell_global_notify_problem().
 *
 * @param {string} msg - An error message
 * @param {string} details - Additional information
 */
export function notifyError(msg: string, details: string): void;

/**
 * @private
 * @param {Clutter.Grab} grab - grab
 */
declare function _findModal(grab: Clutter.Grab): number;

/**
 * Ensure we are in a mode where all keyboard and mouse input goes to
 * the stage, and focus @actor. Multiple calls to this function act in
 * a stacking fashion; the effect will be undone when an equal number
 * of popModal() invocations have been made.
 *
 * Next, record the current Clutter keyboard focus on a stack. If the
 * modal stack returns to this actor, reset the focus to the actor
 * which was focused at the time pushModal() was invoked.
 *
 * `params` may be used to provide the following parameters:
 *  - timestamp: used to associate the call with a specific user initiated
 *               event. If not provided then the value of
 *               global.get_current_time() is assumed.
 *
 *  - options: Meta.ModalOptions flags to indicate that the pointer is
 *             already grabbed
 *
 *  - actionMode: used to set the current Shell.ActionMode to filter
 *                global keybindings; the default of NONE will filter
 *                out all keybindings
 *
 * @param {Clutter.Actor} actor - actor which will be given keyboard focus
 * @param {object=} params - optional parameters
 * @returns {Clutter.Grab} - the grab handle created
 */
export function pushModal(
    actor: Clutter.Actor,
    params?: {
        timestamp: number;
        options: number;
        actionMode: Shell.ActionMode;
    },
): Clutter.Grab;

/**
 * Reverse the effect of pushModal(). If this invocation is undoing
 * the topmost invocation, then the focus will be restored to the
 * previous focus at the time when pushModal() was invoked.
 *
 * `timestamp` is optionally used to associate the call with a specific user
 * initiated event. If not provided then the value of
 * global.get_current_time() is assumed.
 *
 * @param {Clutter.Grab} grab - the grab given by pushModal()
 * @param {number=} timestamp - optional timestamp
 */
export function popModal(grab: Clutter.Grab, timestamp?: number): void;

/**
 * Creates the looking glass panel
 *
 * @returns {LookingGlass.LookingGlass}
 */
export function createLookingGlass(): LookingGlass.LookingGlass;

/**
 * Opens the run dialog
 */
export function openRunDialog(): void;

export function openWelcomeDialog(): void;

/**
 * activateWindow:
 *
 * @param {Meta.Window} window the window to activate
 * @param {number=} time current event time
 * @param {number=} workspaceNum  window's workspace number
 *
 * Activates @window, switching to its workspace first if necessary,
 * and switching out of the overview if it's currently active
 */
export function activateWindow(
    window: Meta.Window,
    time?: number,
    workspaceNum?: number,
): void;

/**
 * Move @window to the specified monitor and workspace.
 *
 * @param {Meta.Window} window - the window to move
 * @param {number} monitorIndex - the requested monitor
 * @param {number} workspaceIndex - the requested workspace
 * @param {bool} append - create workspace if it doesn't exist
 */
export function moveWindowToMonitorAndWorkspace(
    window: Meta.Window,
    monitorIndex: number,
    workspaceIndex: number,
    append?: boolean,
): void;

declare function _runDeferredWork(workId: string): void;

declare function _runAllDeferredWork(): void;

declare function _runBeforeRedrawQueue(): void;

declare function _queueBeforeRedraw(workId: string): void;

/**
 * This function sets up a callback to be invoked when either the
 * given actor is mapped, or after some period of time when the machine
 * is idle. This is useful if your actor isn't always visible on the
 * screen (for example, all actors in the overview), and you don't want
 * to consume resources updating if the actor isn't actually going to be
 * displaying to the user.
 *
 * Note that queueDeferredWork is called by default immediately on
 * initialization as well, under the assumption that new actors
 * will need it.
 *
 * @param {Clutter.Actor} actor - an actor
 * @param {callback} callback - Function to invoke to perform work
 *
 * @returns {string} - A string work identifier
 */
export function initializeDeferredWork(
    actor: Clutter.Actor,
    callback: Function,
): string;

/**
 * queueDeferredWork:
 *
 * @param {string} workId work identifier
 *
 * Ensure that the work identified by @workId will be
 * run on map or timeout. You should call this function
 * for example when data being displayed by the actor has
 * changed.
 */
export function queueDeferredWork(workId: string): void;

declare class RestartMessage extends ModalDialog.ModalDialog {
    constructor(message: string): void;
}

declare function showRestartMessage(message: string): void;

declare class AnimationsSettings {
    _animationsEnabled: boolean;
    _handles: Set<Meta.RemoteAccessHandle>;

    _shouldEnableAnimations(): boolean;

    _syncAnimationsEnabled(): void;

    _onRemoteAccessHandleStopped(handle: Meta.RemoteAccessHandle): void;

    _onNewRemoteAccessHandle(handle: Meta.RemoteAccessHandle): void;
}
