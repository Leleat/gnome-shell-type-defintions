import GLib from 'gi://GLib';
import Meta from 'gi://Meta';

// This file implements a reasonably efficient system for tracking the position
// of the mouse pointer. We simply query the pointer from the X server in a loop,
// but we turn off the polling when the user is idle.

export function getPointerWatcher(): PointerWatcher;

declare class PointerWatch {
    watcher: PointerWatcher;
    interval: number;
    callback: Function;

    constructor(watcher: PointerWatcher, interval: number, callback: Function);

    // remove:
    // remove this watch. This function may safely be called
    // while the callback is executing.
    remove(): void;
}

declare class PointerWatcher {
    _idleMonitor: Meta.IdleMonitor;
    _idle: boolean;
    _watches: PointerWatch[];
    pointerX: number | null;
    pointerY: number | null;
    _timeoutId?: number;

    // addWatch:
    // @interval: hint as to the time resolution needed. When the user is
    //   not idle, the position of the pointer will be queried at least
    //   once every this many milliseconds.
    // @callback to call when the pointer position changes - takes
    //   two arguments, X and Y.
    //
    // Set up a watch on the position of the mouse pointer. Returns a
    // PointerWatch object which has a remove() method to remove the watch.
    addWatch(interval: number, callback: Function): PointerWatch;

    _removeWatch(watch: PointerWatch): void;

    _onIdleMonitorBecameActive(): void;

    _onIdleMonitorBecameIdle(): void;

    _updateTimeout(): void;

    _onTimeout(): GLib.SOURCE_CONTINUE;

    _updatePointer(): void;
}
