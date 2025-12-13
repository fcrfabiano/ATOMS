// -- FUNCTIONS

export function isBoolean(
    value: unknown
    ): value is boolean;

// ~~

export function isNatural(
    value: unknown
    ): boolean;

// ~~

export function isNumber(
    value: unknown
    ): value is number;

// ~~

export function isString(
    value: unknown
    ): value is string;

// ~~

export function isObject(
    value: unknown
    ): value is Record<string, unknown>;

// ~~

export function isArray(
    value: unknown
    ): value is unknown[];

// ~~

export function isFunction(
    value: unknown
    ): value is Function;

// ~~

export function isElement(
    value: unknown
    ): value is HTMLElement;
