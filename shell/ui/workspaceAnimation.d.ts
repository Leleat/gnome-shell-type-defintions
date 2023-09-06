import Clutter from 'gi://Clutter';
import Meta from 'gi://Meta';
import St from 'gi://St';

import * as Background from './background.js';
import * as Layout from './layout.js';
import * as SwipeTracker from './swipeTracker.js';

declare class WorkspaceGroup extends Clutter.Actor {
    _workspace: Meta.Workspace | null;
    _monitor: Layout.Monitor;
    _movingWindow: Meta.Window | null;
    _windowRecords: {windowActor: Meta.WindowActor; clone: Clutter.Clone}[];
    _background?: Meta.BackgroundGroup;
    _bgManager?: Background.BackgroundManager;

    constructor(workspace, monitor, movingWindow): void;

    get workspace(): Meta.Workspace | null;

    _shouldShowWindow(window: Meta.Window): void;

    _syncStacking(): void;

    _createWindows(): void;

    _removeWindows(): void;

    _onDestroy(): void;
}

declare class MonitorGroup extends St.Widget {
    _monitor: Layout.Monitor;
    _container: Clutter.Actor;
    _workspaceGroups: WorkspaceGroup[];
    _workspacesAdjustment: St.Adjustment;

    constructor(
        monitor: Layout.Monitor,
        workspaceIndices: number[],
        movingWindow: Meta.Window,
    ): void;

    get baseDistance(): number;

    get progress(): number;

    set progress(p: number);

    get index(): number;

    getWorkspaceProgress(workspace: Meta.Workspace): number;

    _getWorkspaceGroupProgress(group: WorkspaceGroup): number;

    getSnapPoints(): number[];

    findClosestWorkspace(progress: number): Meta.Workspace;

    _interpolateProgress(progress: number, monitorGroup: MonitorGroup): number;

    updateSwipeForMonitor(progress: number, monitorGroup: MonitorGroup): void;
}

declare type SwitchData = {
    monitors: MonitorGroup[];
    baseMonitorGroup: MonitorGroup;
    gestureActivated: boolean;
    inProgress: boolean;
};

export class WorkspaceAnimationController {
    _movingWindow: Meta.Window | null;
    _switchData: SwitchData | null;
    _swipeTracker: SwipeTracker.SwipeTracker;

    _prepareWorkspaceSwitch(workspaceIndices: [number, number]): void;

    _finishWorkspaceSwitch(switchData: SwitchData): void;

    animateSwitch(
        from: number,
        to: number,
        direction: Meta.MotionDirection,
        onComplete: Function,
    ): void;

    canHandleScrollEvent(event: Clutter.Event): boolean;

    _findMonitorGroup(monitorIndex: number): MonitorGroup | undefined;

    _switchWorkspaceBegin(
        tracker: SwipeTracker.SwipeTracker,
        monitor: number,
    ): void;

    _switchWorkspaceUpdate(
        tracker: SwipeTracker.SwipeTracker,
        progress: number,
    ): void;

    _switchWorkspaceEnd(
        tracker: SwipeTracker.SwipeTracker,
        duration: number,
        endProgress: number,
    ): void;

    get gestureActive(): boolean;

    cancelSwitchAnimation(): void;

    set movingWindow(movingWindow: Meta.Window | null);

    get movingWindow(): Meta.Window | null;
}
