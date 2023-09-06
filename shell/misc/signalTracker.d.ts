import GObject from 'gi://GObject';

/**
 * @private
 * @param {object} obj - an object
 * @returns {bool} - true if obj has a 'destroy' GObject signal
 */
declare function _hasDestroySignal(obj: object): boolean;

export class TransientSignalHolder extends GObject.Object {
    constructor(owner: object);

    destroy(): void;
}

declare class SignalManager {
    /**
     * @returns {SignalManager} - the SignalManager singleton
     */
    static getDefault(): SignalManager;

    /**
     * @param {object} obj - object to get signal tracker for
     * @returns {SignalTracker} - the signal tracker for object
     */
    getSignalTracker(obj: object): SignalTracker;

    /**
     * @param {object} obj - object to get signal tracker for
     * @returns {?SignalTracker} - the signal tracker for object if it exists
     */
    maybeGetSignalTracker(obj: object): SignalTracker | null;

    /*
     * @param {object} obj - object to remove signal tracker for
     * @returns {void}
     */
    removeSignalTracker(obj: object): void;
}

declare class SignalTracker {
    /**
     * @param {object=} owner - object that owns the tracker
     */
    constructor(owner?: object);

    /**
     * @private
     * @param {object} obj - a tracked object
     * @returns {SignalData} - signal data for object
     */
    _getSignalData(obj: object): {ownerSignals: number[]; destroyId: number};

    /**
     * @private
     * @param {GObject.Object} obj - tracked widget
     */
    _trackDestroy(obj: GObject.Object): void;

    _disconnectSignalForProto(proto: object, obj: object, id: number): void;

    _getObjectProto(obj: object): object;

    _disconnectSignal(obj: object, id: number): void;

    _removeTracker(): void;

    /**
     * @param {object} obj - tracked object
     * @param {...number} handlerIds - tracked handler IDs
     * @returns {void}
     */
    track(obj: object, ...handlerIds: number[]): void;

    /**
     * @param {object} obj - tracked object instance
     * @returns {void}
     */
    untrack(obj: object): void;

    /**
     * @returns {void}
     */
    clear(): void;

    /**
     * @returns {void}
     */
    destroy(): void;
}

/**
 * Connect one or more signals, and associate the handlers
 * with a tracked object.
 *
 * All handlers for a particular object can be disconnected
 * by calling disconnectObject(). If object is a {Clutter.widget},
 * this is done automatically when the widget is destroyed.
 *
 * @param {object} thisObj - the emitter object
 * @param {...any} args - a sequence of signal-name/handler pairs
 * with an optional flags value, followed by an object to track
 * @returns {void}
 */
export function connectObject(thisObj: object, ...args: unknown[]): void;

/**
 * Disconnect all signals that were connected for
 * the specified tracked object
 *
 * @param {object} thisObj - the emitter object
 * @param {object} obj - the tracked object
 * @returns {void}
 */
export function disconnectObject(thisObj: object, obj: object): void;

/**
 * Register a GObject type as having a 'destroy' signal
 * that should disconnect all handlers
 */
export function registerDestroyableType(gtype: GObject.Type): void;
