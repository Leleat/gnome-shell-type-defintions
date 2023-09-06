import Atk from 'gi://Atk';
import Clutter from 'gi://Clutter';
import GLib from 'gi://GLib';
import Meta from 'gi://Meta';
import St from 'gi://St';

export function mod(a: number, b: number): number;

declare abstract class SwitcherPopup extends St.Widget {
    _switcherList: SwitcherList;
    _items: St.BoxLayout[];
    _selectedIndex: number;
    _haveModal: boolean;
    _modifierMask: number;
    _motionTimeoutId: number;
    _initialDelayTimeoutId: number;
    _noModsTimeoutId: number;

    constructor(items: unknown[]): void;

    vfunc_allocate(box: Clutter.ActorBox): void;

    _initialSelection(backward: boolean, _binding: string): void;

    show(backward: boolean, binding: string, mask: number): boolean;

    _showImmediately(): void;

    _next(): number;

    _previous(): number;

    _keyPressHandler(_keysym: number, _action: Meta.KeyBindingAction): void;

    vfunc_key_press_event(event: Clutter.Event): boolean;

    vfunc_key_release_event(event: Clutter.Event): Clutter.EVENT_STOP;

    vfunc_button_press_event(): Clutter.EVENT_PROPAGATE;

    _scrollHandler(direction: Clutter.ScrollDirection): void;

    vfunc_scroll_event(event: Clutter.Event): Clutter.EVENT_PROPAGATE;

    _itemActivatedHandler(n: number): void;

    _itemActivated(switcher: SwitcherList, n: number): void;

    _itemEnteredHandler(n: number): void;

    _itemEntered(switcher: SwitcherList, n: number): void;

    _itemRemovedHandler(n: number): void;

    _itemRemoved(switcher: SwitcherList, n: number): void;

    _disableHover(): void;

    _mouseTimedOut(): GLib.SOURCE_REMOVE;

    _resetNoModsTimeout(): void;

    _popModal(): void;

    fadeAndDestroy(): void;

    _finish(_timestamp: number): void;

    _onDestroy(): void;

    _select(num: number): void;
}

declare class SwitcherButton extends St.Button {
    _square: boolean;

    constructor(square: boolean): void;

    vfunc_get_preferred_width(forHeight: number): [number, number];
}

export class SwitcherList extends St.Widget {
    _list: St.BoxLayout;
    _scrollView: St.ScrollView;
    _leftArrow: St.DrawingArea;
    _rightArrow: St.DrawingArea;
    _items: St.BoxLayout[];
    _highlighted: number;
    _squareItems: boolean;
    _scrollableRight: boolean;
    _scrollableLeft: boolean;

    constructor(squareItems: boolean): void;

    addItem(item: St.BoxLayout, label: St.Label): SwitcherButton;

    removeItem(index: number): void;

    addAccessibleState(index: number, state: Atk.StateType): void;

    removeAccessibleState(index: number, state: Atk.StateType): void;

    _onItemClicked(item: SwitcherButton): void;

    _onItemMotion(item: SwitcherButton): Clutter.EVENT_PROPAGATE;

    highlight(index: number, justOutline: boolean): void;

    _scrollToLeft(index: number): void;

    _scrollToRight(index: number): void;

    _itemActivated(n: number): void;

    _itemEntered(n: number): void;

    _maxChildWidth(forHeight: number): [number, number];

    vfunc_get_preferred_width(forHeight: number): [number, number];

    vfunc_get_preferred_height(_forWidth: number): [number, number];

    vfunc_allocate(box: Clutter.ActorBox): void;
}

export function drawArrow(area: St.DrawingArea, side: St.Side): void;
