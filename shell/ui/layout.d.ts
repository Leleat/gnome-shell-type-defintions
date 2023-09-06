import Clutter from 'gi://Clutter';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Meta from 'gi://Meta';
import Mtk from 'gi://Mtk';
import Shell from 'gi://Shell';
import St from 'gi://St';

import * as Signals from '../misc/signals.js';
import * as Background from './background.js';
import * as DND from './dnd.js';
import * as Ripples from './ripples.js';

export class MonitorConstraint extends Clutter.Constraint {
    _primary: boolean;
    _index: number;
    _workArea: boolean;

    constructor(parentParams: object): void;

    get primary(): boolean;

    set primary(v: boolean);

    get index(): number;

    set index(v: number);

    get workArea(): boolean;

    set workArea(v: boolean);

    vfunc_set_actor(actor: Clutter.Actor): void;

    vfunc_update_allocation(
        actor: Clutter.Actor,
        actorBox: Clutter.ActorBox,
    ): void;
}

declare class Monitor {
    index: number;
    x: number;
    y: number;
    width: number;
    height: number;
    geometry_scale: number;

    constructor(index: number, geometry: Mtk.Rectangle, geometryScale: number);

    get inFullscreen(): boolean;
}

declare class UiActor extends St.Widget {
    vfunc_get_preferred_width(_forHeight: number): [number, number];

    vfunc_get_preferred_height(_forWidth: number): [number, number];
}

type ActorData = {
    actor: Clutter.Actor;
    trackFullscreen: boolean;
    affectsStruts: boolean;
    affectsInputRegion: boolean;
};

export class LayoutManager extends GObject.Object {
    _rtl: boolean;
    monitors: Monitor[];
    primaryMonitor: Monitor | null;
    primaryIndex: number;
    hotCorners: HotCorner[] | [null];
    _keyboardIndex: number;
    _rightPanelBarrier: Meta.Barrier | null;
    _inOverview: boolean;
    _updateRegionIdle: number;
    _trackedActors: ActorData[];
    _isPopupWindowVisible: boolean;
    _startingUp: boolean;
    _pendingLoadBackground: boolean;
    uiGroup: UiActor;
    overviewGroup: St.Widget;
    screenShieldGroup: St.Widget;
    panelBox: St.BoxLayout;
    modalDialogGroup: St.Widge;
    keyboardBox: St.BoxLayout;
    _keyboardHeightNotifyId: number;
    screenshotUIGroup: St.Widget;
    dummyCursor: St.Widget;
    _backgroundGroup: Meta.BackgroundGroup;
    _bgManagers: Background.BackgroundManager[];
    screenTransition: ScreenTransition;

    constructor(): void;

    // This is called by Main after everything else is constructed
    init(): void;

    showOverview(): void;

    hideOverview(): void;

    _sessionUpdated(): void;

    _updateMonitors(): void;

    _destroyHotCorners(): void;

    _updateHotCorners(): void;

    _addBackgroundMenu(bgManager: Background.BackgroundManager): void;

    _createBackgroundManager(
        monitorIndex: number,
    ): Background.BackgroundManager;

    _showSecondaryBackgrounds(): void;

    _waitLoaded(bgManager: Background.BackgroundManager): Promise<void>;

    _updateBackgrounds(): Promise<void[]>;

    _updateKeyboardBox(): void;

    _updateBoxes(): void;

    _panelBoxChanged(): void;

    _updatePanelBarrier(): void;

    _monitorsChanged(): void;

    _isAboveOrBelowPrimary(monitor: {x: number; width: number}): boolean;

    get currentMonitor(): Monitor;

    get keyboardMonitor(): Monitor;

    get focusIndex(): number;

    get focusMonitor(): Monitor | null;

    set keyboardIndex(v: number);

    get keyboardIndex(): number;

    _loadBackground(): void;

    // Startup Animations
    //
    // We have two different animations, depending on whether we're a greeter
    // or a normal session.
    //
    // In the greeter, we want to animate the panel from the top, and smoothly
    // fade the login dialog on top of whatever plymouth left on screen which
    // we get as a still frame background before drawing anything else.
    //
    // Here we just have the code to animate the panel, and fade up the background.
    // The login dialog animation is handled by modalDialog.js
    //
    // When starting a normal user session, we want to grow it out of the middle
    // of the screen.

    _prepareStartupAnimation(): Promise<void>;

    _startupAnimation(): void;

    _startupAnimationGreeter(): void;

    _startupAnimationSession(): void;

    _startupAnimationComplete(): void;

    // setDummyCursorGeometry:
    //
    // The cursor dummy is a standard widget commonly used for popup
    // menus and box pointers to track, as the box pointer API only
    // tracks actors. If you want to pop up a menu based on where the
    // user clicked, or where the text cursor is, the cursor dummy
    // is what you should use. Given that the menu should not track
    // the actual mouse pointer as it moves, you need to call this
    // function before you show the menu to ensure it is at the right
    // position and has the right size.
    setDummyCursorGeometry(x: number, y: number, w: number, h: number): void;

    // addChrome:
    // @actor: an actor to add to the chrome
    // @params: (optional) additional params
    //
    // Adds @actor to the chrome, and (unless %affectsInputRegion in
    // @params is %false) extends the input region to include it.
    // Changes in @actor's size, position, and visibility will
    // automatically result in appropriate changes to the input
    // region.
    //
    // If %affectsStruts in @params is %true (and @actor is along a
    // screen edge), then @actor's size and position will also affect
    // the window manager struts. Changes to @actor's visibility will
    // NOT affect whether or not the strut is present, however.
    //
    // If %trackFullscreen in @params is %true, the actor's visibility
    // will be bound to the presence of fullscreen windows on the same
    // monitor (it will be hidden whenever a fullscreen window is visible,
    // and shown otherwise)
    addChrome(actor: Clutter.Actor, params: object): void;

    // addTopChrome:
    // @actor: an actor to add to the chrome
    // @params: (optional) additional params
    //
    // Like addChrome(), but adds @actor above all windows, including popups.
    addTopChrome(actor: Clutter.Actor, params: object);

    // trackChrome:
    // @actor: a descendant of the chrome to begin tracking
    // @params: parameters describing how to track @actor
    //
    // Tells the chrome to track @actor. This can be used to extend the
    // struts or input region to cover specific children.
    //
    // @params can have any of the same values as in addChrome(),
    // though some possibilities don't make sense. By default, @actor has
    // the same params as its chrome ancestor.
    trackChrome(actor: Clutter.Actor, params?: object): void;

    // untrackChrome:
    // @actor: an actor previously tracked via trackChrome()
    //
    // Undoes the effect of trackChrome()
    untrackChrome(actor: Clutter.Actor): void;

    // removeChrome:
    // @actor: a chrome actor
    //
    // Removes @actor from the chrome
    removeChrome(actor: Clutter.Actor): void;

    _findActor(actor: Clutter.Actor): number;

    _trackActor(actor: Clutter.Actor, params: object): void;

    _untrackActor(actor: Clutter.Actor): void;

    _updateActorVisibility(actorData: ActorData): void;

    _updateVisibility(): void;

    getWorkAreaForMonitor(monitorIndex: number): Mtk.Rectangle;

    // This call guarantees that we return some monitor to simplify usage of it
    // In practice all tracked actors should be visible on some monitor anyway
    findIndexForActor(actor: Clutter.Actor): number;

    findMonitorForActor(actor: Clutter.Actor): Monitor | null;

    _queueUpdateRegions(): void;

    _updateFullscreen(): void;

    _windowsRestacked(): void;

    _updateRegions(): GLib.SOURCE_REMOVE;

    modalEnded(): void;
}

// HotCorner:
//
// This class manages a "hot corner" that can toggle switching to
// overview.
export class HotCorner extends Clutter.Actor {
    // We use this flag to mark the case where the user has entered the
    // hot corner and has not left both the hot corner and a surrounding
    // guard area (the "environs"). This avoids triggering the hot corner
    // multiple times due to an accidental jitter.
    _entered: boolean;
    _monitor: Monitor;
    _x: number;
    _y: number;
    _pressureBarrier: PressureBarrier;
    _ripples: Ripples.Ripples;

    constructor(
        layoutManager: LayoutManager,
        monitor: Monitor,
        x: number,
        y: number,
    ): void;

    setBarrierSize(size: number): void;

    _setupFallbackCornerIfNeeded(layoutManager: LayoutManager): void;

    _onDestroy(): void;

    _toggleOverview(): void;

    handleDragOver(
        source,
        _actor,
        _x,
        _y,
        _time,
    ): DND.DragMotionResult.CONTINUE | DND.DragMotionResult.CONTINUE;

    _onCornerEntered(): Clutter.EVENT_PROPAGATE;

    _onCornerLeft(actor, event): Clutter.EVENT_STOP;

    vfunc_leave_event(event: Clutter.Event): Clutter.EVENT_PROPAGATE;
}

export class PressureBarrier extends Signals.EventEmitter {
    /** in Pixel */
    _threshold: number;
    /** in ms */
    _timeout: number;
    _actionMode: Shell.ActionMode;
    _barriers: Meta.Barrier[];
    _eventFilter: null | ((event: Meta.BarrierEvent) => void);
    _isTriggered: boolean;

    constructor(
        threshold_in_pixel: number,
        timeout_in_ms: number,
        actionMode: Shell.ActionMode,
    );

    addBarrier(barrier: Meta.Barrier): void;

    _disconnectBarrier(barrier: Meta.Barrier): void;

    removeBarrier(barrier: Meta.Barrier): void;

    destroy(): void;

    setEventFilter(filter: (event: Meta.BarrierEvent) => void): void;

    _reset(): void;

    _isHorizontal(barrier: Meta.Barrier): boolean;

    _getDistanceAcrossBarrier(
        barrier: Meta.Barrier,
        event: Meta.BarrierEvent,
    ): number;

    _getDistanceAlongBarrier(
        barrier: Meta.Barrier,
        event: Meta.BarrierEvent,
    ): number;

    _trimBarrierEvents(): void;

    _onBarrierLeft(barrier: Meta.Barrier, _event: Meta.BarrierEvent): void;

    _trigger(): void;

    _onBarrierHit(barrier: Meta.Barrier, event: Meta.BarrierEvent): void;
}

declare class ScreenTransition extends Clutter.Actor {
    constructor(): void;

    vfunc_hide(): void;

    run(): void;
}
