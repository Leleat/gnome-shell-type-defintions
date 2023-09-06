import Clutter from 'gi://Clutter';
import GLib from 'gi://GLib';
import Shell from 'gi://Shell';
import St from 'gi://St';

import * as Animation from './animation.js';
import * as DND from './dnd.js';
import * as PopupMenu from './popupMenu.js';
import * as PanelMenu from './panelMenu.js';
import {QuickSettingsItem, SystemIndicator} from './quickSettings.js';

import * as RemoteAccessStatus from './status/remoteAccess.js';
import * as PowerProfileStatus from './status/powerProfiles.js';
import * as RFKillStatus from './status/rfkill.js';
import * as CameraStatus from './status/camera.js';
import * as VolumeStatus from './status/volume.js';
import * as BrightnessStatus from './status/brightness.js';
import * as SystemStatus from './status/system.js';
import * as LocationStatus from './status/location.js';
import * as NightLightStatus from './status/nightLight.js';
import * as DarkModeStatus from './status/darkMode.js';
import * as BacklightStatus from './status/backlight.js';
import * as ThunderboltStatus from './status/thunderbolt.js';
import * as AutoRotateStatus from './status/autoRotate.js';
import * as BackgroundAppsStatus from './status/backgroundApps.js';
import * as NetworkStatus from './status/network.js';
import * as BlueToothStatus from './status/bluetooth.js';

/**
 * AppMenuButton:
 *
 * This class manages the "application menu" component.  It tracks the
 * currently focused application.  However, when an app is launched,
 * this menu also handles startup notification for it.  So when we
 * have an active startup notification, we switch modes to display that.
 */
declare class AppMenuButton extends PanelMenu.Button {
    _startingApps: Shell.App[];
    _menuManager: PopupMenu.PopupMenuManager;
    _targetApp: Shell.App | null;
    _container: St.BoxLayout;
    _iconBox: St.Bin;
    _label: St.Label;
    _visible: boolean;
    _spinner: Animation.Spinner;

    constructor(panel: Panel): void;

    fadeIn(): void;

    fadeOut(): void;

    _syncIcon(app: Shell.App): void;

    _onIconThemeChanged(): void;

    stopAnimation(): void;

    startAnimation(): void;

    _onAppStateChanged(appSys: Shell.AppSystem, app: Shell.App): void;

    _focusAppChanged(): void;

    _findTargetApp(): Shell.App | null;

    _sync(): void;
}

declare class WorkspaceDot extends Clutter.Actor {
    expansion: number;
    widthMultiplier: number;
    _dot: St.Widget;
    _destroying: boolean;

    constructor(params?: object);

    _updateVisuals(): void;

    vfunc_get_preferred_width(forHeight: number): [number, number];

    vfunc_get_preferred_height(forWidth: number): [number, number];

    vfunc_allocate(box: Clutter.ActorBox): void;

    scaleIn(): void;

    scaleOutAndDestroy(): void;

    get destroying(): boolean;
}

declare class WorkspaceIndicators extends St.BoxLayout {
    _workspacesAdjustment: St.Adjustment;

    _getActiveIndicators(): WorkspaceDot[];

    _recalculateDots(): void;

    _updateExpansion(): void;
}

declare class ActivitiesButton extends PanelMenu.Button {
    _xdndTimeOut: number;

    constructor(): void;

    handleDragOver(
        source: Clutter.Actor,
        _actor: Clutter.Actor,
        _x: number,
        _y: number,
        _time: number,
    ): DND.DragMotionResult.CONTINUE;

    vfunc_event(event: Clutter.Event): boolean;

    vfunc_key_release_event(event: Clutter.Event): boolean;

    _xdndToggleOverview(): GLib.SOURCE_REMOVE;
}

declare class UnsafeModeIndicator extends SystemIndicator {
    _indicator: St.Icon;

    constructor(): void;
}

declare class QuickSettings extends PanelMenu.Button {
    _indicators: St.BoxLayout;
    _network: NetworkStatus.Indicator | null;
    _bluetooth: BlueToothStatus.Indicator | null;
    _system: SystemStatus.Indicator;
    _camera: CameraStatus.Indicator;
    _volumeOutput: VolumeStatus.OutputIndicator;
    _volumeInput: VolumeStatus.InputIndicator;
    _brightness: BrightnessStatus.Indicator;
    _remoteAccess: RemoteAccessStatus.RemoteAccessApplet;
    _location: LocationStatus.Indicator;
    _thunderbolt: ThunderboltStatus.Indicator;
    _nightLight: NightLightStatus.Indicator;
    _darkMode: DarkModeStatus.Indicator;
    _backlight: BacklightStatus.Indicator;
    _powerProfiles: PowerProfileStatus.Indicator;
    _rfkill: RFKillStatus.Indicator;
    _autoRotate: AutoRotateStatus.Indicator;
    _unsafeMode: UnsafeModeIndicator;
    _backgroundApps: BackgroundAppsStatus.Indicator;

    _setupIndicators(): Promise<void>;

    _addItemsBefore(
        items: QuickSettingsItem,
        sibling: QuickSettingsItem,
        colSpan?: number,
    ): void;

    /**
     * Insert indicator and quick settings items at
     * appropriate positions
     *
     * @param {PanelMenu.Button} indicator
     * @param {number=} colSpan
     */
    addExternalIndicator(indicator: PanelMenu.Button, colSpan?: number): void;
}

export class Panel extends St.Widget {
    _sessionStyle;
    statusArea;
    menuManager: PopupMenu.PopupMenuManager;
    _leftBox: St.BoxLayout;
    _centerBox: St.BoxLayout;
    _rightBox: St.BoxLayout;

    constructor(): void;

    vfunc_get_preferred_width(_forHeight: void): [0, number];

    vfunc_allocate(box: Clutter.ActorBox): void;

    _tryDragWindow(event: Clutter.Event): boolean;

    _onButtonPress(actor: Clutter.Actor, event: Clutter.Event): boolean;

    _onTouchEvent(actor: Clutter.Actor, event: Clutter.Event): boolean;

    vfunc_key_press_event(event: Clutter.Event): boolean;

    _toggleMenu(indicator: PanelMenu.Button): void;

    _closeMenu(indicator: PanelMenu.Button): void;

    toggleCalendar(): void;

    toggleQuickSettings(): void;

    closeCalendar(): void;

    closeQuickSettings(): void;

    set boxOpacity(value: number);

    get boxOpacity(): number;

    _updatePanel(): void;

    _hideIndicators(): void;

    _ensureIndicator(role: string): PanelMenu.Button;

    _updateBox(elements: string[], box: St.BoxLayout): void;

    _addToPanelBox(
        role: string,
        indicator: PanelMenu.Button,
        position: number,
        box: St.BoxLayout,
    ): void;

    addToStatusArea(
        role: string,
        indicator: PanelMenu.Button,
        position?: number,
        box?: St.BoxLayout,
    ): PanelMenu.Button;

    _onMenuSet(indicator: PanelMenu.Button): void;

    _getDraggableWindowForPosition(stageX: number): boolean;
}
