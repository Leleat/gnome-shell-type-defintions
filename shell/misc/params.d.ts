export function parse<T>(
    params: T,
    defaults: object,
    allowExtras?: boolean,
): {
    [Property in keyof T]-?: T[Property];
};
