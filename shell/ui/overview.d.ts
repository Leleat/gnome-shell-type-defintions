import Clutter from 'gi://Clutter';
import Meta from 'gi://Meta';
import St from 'gi://St';
import * as Signals from '../misc/signals.js';

// Time for initial animation going into Overview mode;
// this is defined here to make it available in imports.
export const ANIMATION_TIME = 250;

import * as Dash from './dash.js';
import * as DND from './dnd.js';
import * as MessageTray from './messageTray.js';
import * as OverviewControls from './overviewControls.js';
import * as SearchController from './searchController.js';
import * as SwipeTracker from './swipeTracker.js';

declare class ShellInfo {
    _source: MessageTray.Source | null;

    setMessage(
        text: string,
        options?: {
            undoCallback: Function;
            forFeedback: boolean;
        },
    ): void;
}

declare class OverviewActor extends St.BoxLayout {
    _controls: OverviewControls.ControlsManager;

    constructor(): void;

    prepareToEnterOverview(): void;

    prepareToLeaveOverview(): void;

    animateToOverview(
        state: OverviewControls.ControlsState,
        callback: Function,
    ): void;

    animateFromOverview(callback: Function): void;

    runStartupAnimation(callback: Function): void;

    get dash(): Dash.Dash;

    get searchController(): SearchController.SearchController;

    get searchEntry(): St.Entry;

    get controls(): OverviewControls.ControlsManager;
}

declare enum OverviewShownState {
    HIDDEN = 'HIDDEN',
    HIDING = 'HIDING',
    SHOWING = 'SHOWING',
    SHOWN = 'SHOWN',
}

export class Overview extends Signals.EventEmitter {
    isDummy: boolean;
    /** show() and not hide() */
    _animationInProgress: boolean;
    _activationTime: number;
    /**
     * During transitions, we raise this to the top to avoid having the overview
     * area be reactive; it causes too many issues such as double clicks on
     * Dash elements, or mouseover handlers in the workspaces.
     */
    _coverPane: Clutter.Actor;
    _dragMonitor: {dragMotion: Function};
    _initCalled: boolean;
    _inXdndDrag: boolean;
    _inItemDrag: boolean;
    _inWindowDrag: boolean;
    _lastActiveWorkspaceIndex: number;
    _lastHoveredWindow: Meta.Window | null;
    /** have a modal grab */
    _modal: boolean;
    _overview: OverviewActor;
    _shellInfo: ShellInfo;
    _shown: boolean;
    _shownState: OverviewShownState;
    _swipeTracker: SwipeTracker.SwipeTracker;
    /** animating to overview, in overview, animating out */
    _visible: boolean;
    _visibleTarget: boolean;
    _windowSwitchTimeoutId: number;
    _windowSwitchTimestamp: number;

    get dash(): Dash.Dash;

    get dashIconSize(): number;

    get animationInProgress(): boolean;

    get visible(): boolean;

    get visibleTarget(): boolean;

    get closing(): boolean;

    _createOverview(): void;

    _sessionUpdated(): void;

    // The members we construct that are implemented in JS might
    // want to access the overview as Main.overview to connect
    // signal handlers and so forth. So we create them after
    // construction in this init() method.
    init(): void;

    //
    // options:
    //  - undoCallback (function): the callback to be called if undo support is needed
    //  - forFeedback (boolean): whether the message is for direct feedback of a user action
    //
    setMessage(
        text: string,
        options?: {
            undoCallback: Function;
            forFeedback: boolean;
        },
    ): void;

    _changeShownState(state: OverviewShownState): void;

    _onDragBegin(): void;

    _onDragEnd(): void;

    _resetWindowSwitchTimeout(): void;

    _onDragMotion(dragEvent: {
        x: number;
        y: number;
        dragActor: Clutter.Actor;
        source: Clutter.Actor;
        targetActor: Clutter.Actor;
    }): DND.DragMotionResult.CONTINUE;

    _onScrollEvent(
        actor: St.Widget,
        event: Clutter.Event,
    ): Clutter.EVENT_PROPAGATE;

    _relayout(): void;

    _onRestacked(): void;

    _gestureBegin(tracker: SwipeTracker.SwipeTracker): void;

    _gestureUpdate(tracker: SwipeTracker.SwipeTracker, progress: number): void;

    _gestureEnd(
        tracker: SwipeTracker.SwipeTracker,
        duration: number,
        endProgress: number,
    ): void;

    beginItemDrag(source: St.Widget): void;

    cancelledItemDrag(source: St.Widget): void;

    endItemDrag(source?: St.Widget): void;

    beginWindowDrag(window: Meta.Window): void;

    cancelledWindowDrag(window: Meta.Window): void;

    endWindowDrag(window: Meta.Window): void;

    focusSearch(): void;

    // Checks if the Activities button is currently sensitive to
    // clicks. The first call to this function within the
    // OVERVIEW_ACTIVATION_TIMEOUT time of the hot corner being
    // triggered will return false. This avoids opening and closing
    // the overview if the user both triggered the hot corner and
    // clicked the Activities button.
    shouldToggleByCornerOrButton(): boolean;

    _syncGrab(): boolean;

    // show:
    //
    // Animates the overview visible and grabs mouse and keyboard input
    show(state?: OverviewControls.ControlsState): void;

    _animateVisible(state: OverviewControls.ControlsState): void;

    _showDone(): void;

    // hide:
    //
    // Reverses the effect of show()
    hide(): void;

    _animateNotVisible(): void;

    _hideDone(): void;

    toggle(): void;

    showApps(): void;

    selectApp(id: string): void;

    runStartupAnimation(callback: Function): void;

    getShowAppsButton(): St.Button;

    get searchController(): SearchController.SearchController;

    get searchEntry(): St.Entry;
}
