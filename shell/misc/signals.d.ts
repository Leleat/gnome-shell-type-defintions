export class EventEmitter {
    connect(this: globalThis, name: string, callback: Function): number;

    connect_object(...args: any[]): void;

    connectObject(...args: any[]): void;

    disconnect(id: number): void;

    disconnectAll(): void;

    disconnect_object(target: object): void;

    disconnectObject(target: object): void;

    emit(signalName: string, ...args: any[]): void;

    signalHandlerIsConnected(id: number): boolean;
}
