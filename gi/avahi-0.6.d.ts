
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './avahi-0.6-import.d.ts';
/**
 * Avahi-0.6
 */

import type GObject from './gobject-2.0.js';
import type GLib from './glib-2.0.js';
import type AvahiCore from './avahicore-0.6.js';

export namespace Avahi {

enum BrowserEvent {
    GA_BROWSER_NEW,
    GA_BROWSER_REMOVE,
    GA_BROWSER_CACHE_EXHAUSTED,
    GA_BROWSER_ALL_FOR_NOW,
    GA_BROWSER_FAILURE,
}
enum ClientFlags {
    GA_CLIENT_FLAG_NO_FLAGS,
    GA_CLIENT_FLAG_IGNORE_USER_CONFIG,
    GA_CLIENT_FLAG_NO_FAIL,
}
enum ClientState {
    GA_CLIENT_STATE_NOT_STARTED,
    GA_CLIENT_STATE_S_REGISTERING,
    GA_CLIENT_STATE_S_RUNNING,
    GA_CLIENT_STATE_S_COLLISION,
    GA_CLIENT_STATE_FAILURE,
    GA_CLIENT_STATE_CONNECTING,
}
enum EntryGroupState {
    GA_ENTRY_GROUP_STATE_UNCOMMITED,
    GA_ENTRY_GROUP_STATE_REGISTERING,
    GA_ENTRY_GROUP_STATE_ESTABLISHED,
    GA_ENTRY_GROUP_STATE_COLLISTION,
    GA_ENTRY_GROUP_STATE_FAILURE,
}
enum LookupFlags {
    GA_LOOKUP_NO_FLAGS,
    GA_LOOKUP_USE_WIDE_AREA,
    GA_LOOKUP_USE_MULTICAST,
    GA_LOOKUP_NO_TXT,
    GA_LOOKUP_NO_ADDRESS,
}
enum LookupResultFlags {
    GA_LOOKUP_RESULT_CACHED,
    GA_LOOKUP_RESULT_WIDE_AREA,
    GA_LOOKUP_RESULT_MULTICAST,
    GA_LOOKUP_RESULT_LOCAL,
    GA_LOOKUP_RESULT_OUR_OWN,
    GA_LOOKUP_RESULT_STATIC,
}
enum Protocol {
    GA_PROTOCOL_INET,
    GA_PROTOCOL_INET6,
    GA_PROTOCOL_UNSPEC,
}
enum ResolverEvent {
    GA_RESOLVER_FOUND,
    GA_RESOLVER_FAILURE,
}
function error_quark(): GLib.Quark
module Client {

    // Signal callback interfaces

    /**
     * Signal callback interface for `state-changed`
     */
    interface StateChangedSignalCallback {
        ($obj: Client, object: ClientState): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Avahi-0.6.Avahi.Client

        flags?: ClientFlags | null
    }

}

interface Client {

    // Own properties of Avahi-0.6.Avahi.Client

    readonly flags: ClientFlags
    readonly state: ClientState

    // Own fields of Avahi-0.6.Avahi.Client

    parent: GObject.Object
    avahi_client: AvahiCore.Client

    // Owm methods of Avahi-0.6.Avahi.Client

    start(): boolean
    start_in_context(context: GLib.MainContext): boolean

    // Own signals of Avahi-0.6.Avahi.Client

    connect(sigName: "state-changed", callback: Client.StateChangedSignalCallback): number
    connect_after(sigName: "state-changed", callback: Client.StateChangedSignalCallback): number
    emit(sigName: "state-changed", object: ClientState, ...args: any[]): void

    // Class property signals of Avahi-0.6.Avahi.Client

    connect(sigName: "notify::flags", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Client extends GObject.Object {

    // Own properties of Avahi-0.6.Avahi.Client

    static name: string
    static $gtype: GObject.GType<Client>

    // Constructors of Avahi-0.6.Avahi.Client

    constructor(config?: Client.ConstructorProperties) 
    constructor(flags: ClientFlags) 
    static new(flags: ClientFlags): Client
    _init(config?: Client.ConstructorProperties): void
}

module EntryGroup {

    // Signal callback interfaces

    /**
     * Signal callback interface for `state-changed`
     */
    interface StateChangedSignalCallback {
        ($obj: EntryGroup, object: EntryGroupState): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface EntryGroup {

    // Own properties of Avahi-0.6.Avahi.EntryGroup

    readonly state: EntryGroupState

    // Own fields of Avahi-0.6.Avahi.EntryGroup

    parent: GObject.Object

    // Owm methods of Avahi-0.6.Avahi.EntryGroup

    add_record(flags: AvahiCore.PublishFlags, name: string | null, type: number, ttl: number, rdata: any | null, size: number): boolean
    add_record_full(interface: AvahiCore.IfIndex, protocol: AvahiCore.Protocol, flags: AvahiCore.PublishFlags, name: string | null, clazz: number, type: number, ttl: number, rdata: any | null, size: number): boolean
    attach(client: Client): boolean
    commit(): boolean
    reset(): boolean

    // Own signals of Avahi-0.6.Avahi.EntryGroup

    connect(sigName: "state-changed", callback: EntryGroup.StateChangedSignalCallback): number
    connect_after(sigName: "state-changed", callback: EntryGroup.StateChangedSignalCallback): number
    emit(sigName: "state-changed", object: EntryGroupState, ...args: any[]): void

    // Class property signals of Avahi-0.6.Avahi.EntryGroup

    connect(sigName: "notify::state", callback: (($obj: EntryGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: EntryGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EntryGroup extends GObject.Object {

    // Own properties of Avahi-0.6.Avahi.EntryGroup

    static name: string
    static $gtype: GObject.GType<EntryGroup>

    // Constructors of Avahi-0.6.Avahi.EntryGroup

    constructor(config?: EntryGroup.ConstructorProperties) 
    constructor() 
    static new(): EntryGroup
    _init(config?: EntryGroup.ConstructorProperties): void
}

module RecordBrowser {

    // Signal callback interfaces

    /**
     * Signal callback interface for `all-for-now`
     */
    interface AllForNowSignalCallback {
        ($obj: RecordBrowser): void
    }

    /**
     * Signal callback interface for `cache-exhausted`
     */
    interface CacheExhaustedSignalCallback {
        ($obj: RecordBrowser): void
    }

    /**
     * Signal callback interface for `failure`
     */
    interface FailureSignalCallback {
        ($obj: RecordBrowser, object: any | null): void
    }

    /**
     * Signal callback interface for `new-record`
     */
    interface NewRecordSignalCallback {
        ($obj: RecordBrowser, object: number, p0: Protocol, p1: string | null, p2: number, p3: number, p4: any | null, p5: number, p6: LookupResultFlags): void
    }

    /**
     * Signal callback interface for `removed-record`
     */
    interface RemovedRecordSignalCallback {
        ($obj: RecordBrowser, object: number, p0: Protocol, p1: string | null, p2: number, p3: number, p4: any | null, p5: number, p6: LookupResultFlags): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Avahi-0.6.Avahi.RecordBrowser

        "class"?: number | null
        flags?: LookupFlags | null
        interface?: number | null
        name?: string | null
        protocol?: Protocol | null
        type?: number | null
    }

}

interface RecordBrowser {

    // Own properties of Avahi-0.6.Avahi.RecordBrowser

    "class": number
    flags: LookupFlags
    interface: number
    name: string | null
    protocol: Protocol
    type: number

    // Own fields of Avahi-0.6.Avahi.RecordBrowser

    parent: GObject.Object

    // Owm methods of Avahi-0.6.Avahi.RecordBrowser

    attach(client: Client): boolean

    // Own signals of Avahi-0.6.Avahi.RecordBrowser

    connect(sigName: "all-for-now", callback: RecordBrowser.AllForNowSignalCallback): number
    connect_after(sigName: "all-for-now", callback: RecordBrowser.AllForNowSignalCallback): number
    emit(sigName: "all-for-now", ...args: any[]): void
    connect(sigName: "cache-exhausted", callback: RecordBrowser.CacheExhaustedSignalCallback): number
    connect_after(sigName: "cache-exhausted", callback: RecordBrowser.CacheExhaustedSignalCallback): number
    emit(sigName: "cache-exhausted", ...args: any[]): void
    connect(sigName: "failure", callback: RecordBrowser.FailureSignalCallback): number
    connect_after(sigName: "failure", callback: RecordBrowser.FailureSignalCallback): number
    emit(sigName: "failure", object: any | null, ...args: any[]): void
    connect(sigName: "new-record", callback: RecordBrowser.NewRecordSignalCallback): number
    connect_after(sigName: "new-record", callback: RecordBrowser.NewRecordSignalCallback): number
    emit(sigName: "new-record", object: number, p0: Protocol, p1: string | null, p2: number, p3: number, p4: any | null, p5: number, p6: LookupResultFlags, ...args: any[]): void
    connect(sigName: "removed-record", callback: RecordBrowser.RemovedRecordSignalCallback): number
    connect_after(sigName: "removed-record", callback: RecordBrowser.RemovedRecordSignalCallback): number
    emit(sigName: "removed-record", object: number, p0: Protocol, p1: string | null, p2: number, p3: number, p4: any | null, p5: number, p6: LookupResultFlags, ...args: any[]): void

    // Class property signals of Avahi-0.6.Avahi.RecordBrowser

    connect(sigName: "notify::class", callback: (($obj: RecordBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class", callback: (($obj: RecordBrowser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (($obj: RecordBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: RecordBrowser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::interface", callback: (($obj: RecordBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: RecordBrowser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::interface", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: RecordBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: RecordBrowser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::protocol", callback: (($obj: RecordBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: RecordBrowser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::protocol", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: RecordBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: RecordBrowser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RecordBrowser extends GObject.Object {

    // Own properties of Avahi-0.6.Avahi.RecordBrowser

    static name: string
    static $gtype: GObject.GType<RecordBrowser>

    // Constructors of Avahi-0.6.Avahi.RecordBrowser

    constructor(config?: RecordBrowser.ConstructorProperties) 
    constructor(name: string | null, type: number) 
    static new(name: string | null, type: number): RecordBrowser
    static new_full(interface: AvahiCore.IfIndex, protocol: AvahiCore.Protocol, name: string | null, clazz: number, type: number, flags: LookupFlags): RecordBrowser
    _init(config?: RecordBrowser.ConstructorProperties): void
}

module ServiceBrowser {

    // Signal callback interfaces

    /**
     * Signal callback interface for `all-for-now`
     */
    interface AllForNowSignalCallback {
        ($obj: ServiceBrowser): void
    }

    /**
     * Signal callback interface for `cache-exhausted`
     */
    interface CacheExhaustedSignalCallback {
        ($obj: ServiceBrowser): void
    }

    /**
     * Signal callback interface for `failure`
     */
    interface FailureSignalCallback {
        ($obj: ServiceBrowser, object: any | null): void
    }

    /**
     * Signal callback interface for `new-service`
     */
    interface NewServiceSignalCallback {
        ($obj: ServiceBrowser, object: number, p0: Protocol, p1: string | null, p2: string | null, p3: string | null, p4: LookupResultFlags): void
    }

    /**
     * Signal callback interface for `removed-service`
     */
    interface RemovedServiceSignalCallback {
        ($obj: ServiceBrowser, object: number, p0: Protocol, p1: string | null, p2: string | null, p3: string | null, p4: LookupResultFlags): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Avahi-0.6.Avahi.ServiceBrowser

        domain?: string | null
        flags?: LookupFlags | null
        interface?: number | null
        protocol?: Protocol | null
        type?: string | null
    }

}

interface ServiceBrowser {

    // Own properties of Avahi-0.6.Avahi.ServiceBrowser

    domain: string | null
    flags: LookupFlags
    interface: number
    protocol: Protocol
    type: string | null

    // Own fields of Avahi-0.6.Avahi.ServiceBrowser

    parent: GObject.Object

    // Owm methods of Avahi-0.6.Avahi.ServiceBrowser

    attach(client: Client): boolean

    // Own signals of Avahi-0.6.Avahi.ServiceBrowser

    connect(sigName: "all-for-now", callback: ServiceBrowser.AllForNowSignalCallback): number
    connect_after(sigName: "all-for-now", callback: ServiceBrowser.AllForNowSignalCallback): number
    emit(sigName: "all-for-now", ...args: any[]): void
    connect(sigName: "cache-exhausted", callback: ServiceBrowser.CacheExhaustedSignalCallback): number
    connect_after(sigName: "cache-exhausted", callback: ServiceBrowser.CacheExhaustedSignalCallback): number
    emit(sigName: "cache-exhausted", ...args: any[]): void
    connect(sigName: "failure", callback: ServiceBrowser.FailureSignalCallback): number
    connect_after(sigName: "failure", callback: ServiceBrowser.FailureSignalCallback): number
    emit(sigName: "failure", object: any | null, ...args: any[]): void
    connect(sigName: "new-service", callback: ServiceBrowser.NewServiceSignalCallback): number
    connect_after(sigName: "new-service", callback: ServiceBrowser.NewServiceSignalCallback): number
    emit(sigName: "new-service", object: number, p0: Protocol, p1: string | null, p2: string | null, p3: string | null, p4: LookupResultFlags, ...args: any[]): void
    connect(sigName: "removed-service", callback: ServiceBrowser.RemovedServiceSignalCallback): number
    connect_after(sigName: "removed-service", callback: ServiceBrowser.RemovedServiceSignalCallback): number
    emit(sigName: "removed-service", object: number, p0: Protocol, p1: string | null, p2: string | null, p3: string | null, p4: LookupResultFlags, ...args: any[]): void

    // Class property signals of Avahi-0.6.Avahi.ServiceBrowser

    connect(sigName: "notify::domain", callback: (($obj: ServiceBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::domain", callback: (($obj: ServiceBrowser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::domain", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (($obj: ServiceBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: ServiceBrowser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::interface", callback: (($obj: ServiceBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: ServiceBrowser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::interface", ...args: any[]): void
    connect(sigName: "notify::protocol", callback: (($obj: ServiceBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: ServiceBrowser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::protocol", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: ServiceBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: ServiceBrowser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ServiceBrowser extends GObject.Object {

    // Own properties of Avahi-0.6.Avahi.ServiceBrowser

    static name: string
    static $gtype: GObject.GType<ServiceBrowser>

    // Constructors of Avahi-0.6.Avahi.ServiceBrowser

    constructor(config?: ServiceBrowser.ConstructorProperties) 
    constructor(type: string | null) 
    static new(type: string | null): ServiceBrowser
    static new_full(interface: AvahiCore.IfIndex, protocol: AvahiCore.Protocol, type: string | null, domain: string | null, flags: LookupFlags): ServiceBrowser
    _init(config?: ServiceBrowser.ConstructorProperties): void
}

module ServiceResolver {

    // Signal callback interfaces

    /**
     * Signal callback interface for `failure`
     */
    interface FailureSignalCallback {
        ($obj: ServiceResolver, object: any | null): void
    }

    /**
     * Signal callback interface for `found`
     */
    interface FoundSignalCallback {
        ($obj: ServiceResolver, object: number, p0: Protocol, p1: string | null, p2: string | null, p3: string | null, p4: string | null, p5: any | null, p6: number, p7: any | null, p8: LookupResultFlags): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Avahi-0.6.Avahi.ServiceResolver

        aprotocol?: Protocol | null
        domain?: string | null
        flags?: LookupFlags | null
        interface?: number | null
        name?: string | null
        protocol?: Protocol | null
        type?: string | null
    }

}

interface ServiceResolver {

    // Own properties of Avahi-0.6.Avahi.ServiceResolver

    aprotocol: Protocol
    domain: string | null
    flags: LookupFlags
    interface: number
    name: string | null
    protocol: Protocol
    type: string | null

    // Own fields of Avahi-0.6.Avahi.ServiceResolver

    parent: GObject.Object

    // Owm methods of Avahi-0.6.Avahi.ServiceResolver

    attach(client: Client): boolean
    get_address(address: AvahiCore.Address, port: number): boolean

    // Own signals of Avahi-0.6.Avahi.ServiceResolver

    connect(sigName: "failure", callback: ServiceResolver.FailureSignalCallback): number
    connect_after(sigName: "failure", callback: ServiceResolver.FailureSignalCallback): number
    emit(sigName: "failure", object: any | null, ...args: any[]): void
    connect(sigName: "found", callback: ServiceResolver.FoundSignalCallback): number
    connect_after(sigName: "found", callback: ServiceResolver.FoundSignalCallback): number
    emit(sigName: "found", object: number, p0: Protocol, p1: string | null, p2: string | null, p3: string | null, p4: string | null, p5: any | null, p6: number, p7: any | null, p8: LookupResultFlags, ...args: any[]): void

    // Class property signals of Avahi-0.6.Avahi.ServiceResolver

    connect(sigName: "notify::aprotocol", callback: (($obj: ServiceResolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aprotocol", callback: (($obj: ServiceResolver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::aprotocol", ...args: any[]): void
    connect(sigName: "notify::domain", callback: (($obj: ServiceResolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::domain", callback: (($obj: ServiceResolver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::domain", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (($obj: ServiceResolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: ServiceResolver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::interface", callback: (($obj: ServiceResolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: ServiceResolver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::interface", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ServiceResolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ServiceResolver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::protocol", callback: (($obj: ServiceResolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: ServiceResolver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::protocol", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: ServiceResolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: ServiceResolver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ServiceResolver extends GObject.Object {

    // Own properties of Avahi-0.6.Avahi.ServiceResolver

    static name: string
    static $gtype: GObject.GType<ServiceResolver>

    // Constructors of Avahi-0.6.Avahi.ServiceResolver

    constructor(config?: ServiceResolver.ConstructorProperties) 
    constructor(interface: AvahiCore.IfIndex, protocol: AvahiCore.Protocol, name: string | null, type: string | null, domain: string | null, address_protocol: AvahiCore.Protocol, flags: LookupFlags) 
    static new(interface: AvahiCore.IfIndex, protocol: AvahiCore.Protocol, name: string | null, type: string | null, domain: string | null, address_protocol: AvahiCore.Protocol, flags: LookupFlags): ServiceResolver
    _init(config?: ServiceResolver.ConstructorProperties): void
}

interface ClientClass {

    // Own fields of Avahi-0.6.Avahi.ClientClass

    parent_class: GObject.ObjectClass
}

abstract class ClientClass {

    // Own properties of Avahi-0.6.Avahi.ClientClass

    static name: string
}

interface EntryGroupClass {

    // Own fields of Avahi-0.6.Avahi.EntryGroupClass

    parent_class: GObject.ObjectClass
}

abstract class EntryGroupClass {

    // Own properties of Avahi-0.6.Avahi.EntryGroupClass

    static name: string
}

interface EntryGroupService {

    // Own fields of Avahi-0.6.Avahi.EntryGroupService

    interface: AvahiCore.IfIndex
    protocol: AvahiCore.Protocol
    flags: AvahiCore.PublishFlags
    name: string | null
    type: string | null
    domain: string | null
    host: string | null
    port: number

    // Owm methods of Avahi-0.6.Avahi.EntryGroupService

    freeze(): void
    remove_key(key: string | null): boolean
    set(key: string | null, value: string | null): boolean
    set_arbitrary(key: string | null, value: number, size: number): boolean
    thaw(): boolean
}

class EntryGroupService {

    // Own properties of Avahi-0.6.Avahi.EntryGroupService

    static name: string
}

interface RecordBrowserClass {

    // Own fields of Avahi-0.6.Avahi.RecordBrowserClass

    parent_class: GObject.ObjectClass
}

abstract class RecordBrowserClass {

    // Own properties of Avahi-0.6.Avahi.RecordBrowserClass

    static name: string
}

interface ServiceBrowserClass {

    // Own fields of Avahi-0.6.Avahi.ServiceBrowserClass

    parent_class: GObject.ObjectClass
}

abstract class ServiceBrowserClass {

    // Own properties of Avahi-0.6.Avahi.ServiceBrowserClass

    static name: string
}

interface ServiceResolverClass {

    // Own fields of Avahi-0.6.Avahi.ServiceResolverClass

    parent_class: GObject.ObjectClass
}

abstract class ServiceResolverClass {

    // Own properties of Avahi-0.6.Avahi.ServiceResolverClass

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default Avahi;
// END