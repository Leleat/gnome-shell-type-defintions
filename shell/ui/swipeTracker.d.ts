import Clutter from 'gi://Clutter';
import Gio from 'gi://Gio';
import GObject from 'gi://GObject';
import Shell from 'gi://Shell';

declare enum State {
    NONE = 0,
    SCROLLING = 1,
}

declare enum TouchpadState {
    NONE = 0,
    PENDING = 1,
    HANDLING = 2,
    IGNORED = 3,
}

declare class EventHistory {
    _data: {time: number; delta: number}[];

    reset(): void;

    trim(time: number): void;

    append(time: number, delta: number): void;

    calculateVelocity(): number;
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

declare class TouchpadSwipeGesture extends GObject.Object {
    enabled: boolean;
    orientation: Clutter.Orientation;
    _allowedModes: Shell.ActionMode;
    _state: TouchpadState;
    _cumulativeX: number;
    _cumulativeY: number;
    _touchpadSettings: Gio.Settings;

    constructor(allowedModes: Shell.ActionMode);

    _handleEvent(actor: Clutter.Stage, event: Clutter.Event): boolean;

    destroy(): void;
}

declare class TouchSwipeGesture extends Clutter.GestureAction {
    orientation: Clutter.Orientation;
    _allowedModes: Shell.ActionMode;
    _distance: number;
    _lastPosition: number;

    constructor(
        allowedModes: Shell.ActionMode,
        nTouchPoints: number,
        thresholdTriggerEdge: Clutter.GestureTriggerEdge,
    ): void;

    get distance(): number;

    set distance(distance: number);

    vfunc_gesture_prepare(actor: Clutter.Actor): boolean;

    vfunc_gesture_progress(_actor: Clutter.Actor): true;

    vfunc_gesture_end(_actor: Clutter.Actor): void;

    vfunc_gesture_cancel(_actor: Clutter.Actor): void;
}

declare class ScrollGesture extends GObject.Object {
    orientation: Clutter.Orientation;
    scrollModifiers: Clutter.ModifierType;
    _allowedModes: Shell.ActionMode;
    _began: boolean;
    _enabled: boolean;

    constructor(actor: Clutter.Actor, allowedModes: Shell.ActionMode): void;

    get enabled(): boolean;

    set enabled(enabled: boolean);

    canHandleEvent(event: Clutter.Event): boolean;

    _handleEvent(actor: Clutter.Actor, event: Clutter.Event): boolean;
}

// USAGE:
//
// To correctly implement the gesture, there must be handlers for the following
// signals:
//
// begin(tracker, monitor)
//   The handler should check whether a deceleration animation is currently
//   running. If it is, it should stop the animation (without resetting
//   progress). Then it should call:
//   tracker.confirmSwipe(distance, snapPoints, currentProgress, cancelProgress)
//   If it's not called, the swipe would be ignored.
//   The parameters are:
//    * distance: the page size;
//    * snapPoints: an (sorted with ascending order) array of snap points;
//    * currentProgress: the current progress;
//    * cancelprogress: a non-transient value that would be used if the gesture
//      is cancelled.
//   If no animation was running, currentProgress and cancelProgress should be
//   same. The handler may set 'orientation' property here.
//
// update(tracker, progress)
//   The handler should set the progress to the given value.
//
// end(tracker, duration, endProgress)
//   The handler should animate the progress to endProgress. If endProgress is
//   0, it should do nothing after the animation, otherwise it should change the
//   state, e.g. change the current page or switch workspace.
//   NOTE: duration can be 0 in some cases, in this case it should finish
//   instantly.

/** A class for handling swipe gestures */
export class SwipeTracker extends GObject.Object {
    allowLongSwipes: boolean;
    orientation: Clutter.Orientation;
    scrollModifiers: Clutter.ModifierType;
    _allowedModes: Shell.ActionMode;
    _enabled: boolean;
    _distance: number;
    _history: EventHistory;
    _touchpadGesture: TouchpadSwipeGesture;
    _touchGesture: TouchSwipeGesture;
    _dragGesture: TouchSwipeGesture | null;
    _scrollGesture: ScrollGesture | null;
    _state: State;
    _snapPoints: number[];
    _initialProgress: number;
    _cancelProgress: number;
    _prevOffset: number;
    _progress: number;
    _cancelled: boolean;

    constructor(
        actor: Clutter.Actor,
        orientation: Clutter.Orientation,
        allowedModes: Shell.ActionMode,
        params: {allowDrag: boolean; allowScroll: boolean},
    ): void;

    /**
     * canHandleScrollEvent:
     * This function can be used to combine swipe gesture and mouse
     * scrolling.
     *
     * @param {Clutter.Event} scrollEvent an event to check
     * @returns {boolean} whether the event can be handled by the tracker
     */
    canHandleScrollEvent(scrollEvent: Clutter.Event): boolean;

    get enabled(): boolean;

    set enabled(enabled: boolean);

    get distance(): number;

    set distance(distance: number);

    _reset(): void;

    _interrupt(): void;

    _beginTouchSwipe(
        gesture: TouchSwipeGesture,
        time: number,
        x: number,
        y: number,
    ): void;

    _beginGesture(
        gesture: TouchpadSwipeGesture | TouchSwipeGesture | ScrollGesture,
        time: number,
        x: number,
        y: number,
    ): void;

    _findClosestPoint(pos: number): number;

    _findNextPoint(pos: number): number;

    _findPreviousPoint(pos: number): number;

    _findPointForProjection(pos: number, velocity: number): number;

    _getBounds(pos: number): [number, number];

    _updateGesture(
        gesture: TouchpadSwipeGesture | TouchSwipeGesture | ScrollGesture,
        time: number,
        delta: number,
        distance: number,
    ): void;

    _getEndProgress(
        velocity: number,
        distance: number,
        isTouchpad: boolean,
    ): number;

    _endTouchGesture(
        _gesture: TouchSwipeGesture,
        time: number,
        distance: number,
    ): void;

    _endTouchpadGesture(
        _gesture: TouchpadSwipeGesture | ScrollGesture,
        time: number,
        distance: number,
    ): void;

    _endGesture(time: number, distance: number, isTouchpad: boolean): void;

    _cancelTouchGesture(
        _gesture: TouchSwipeGesture,
        time: number,
        distance: number,
    ): void;

    /**
     * Confirms a swipe. User has to call this in 'begin' signal handler,
     * otherwise the swipe wouldn't start. If there's an animation running,
     * it should be stopped first.
     *
     * `cancelProgress` must always be a snap point, or a value matching
     * some other non-transient state.
     *
     * @param {number} distance - swipe distance in pixels
     * @param {number[]} snapPoints - An array of snap points, sorted in ascending order
     * @param {number} currentProgress - initial progress value
     * @param {number} cancelProgress - the value to be used on cancelling
     */
    confirmSwipe(
        distance: number,
        snapPoints: number[],
        currentProgress: number,
        cancelProgress: number,
    );

    destroy(): void;
}
