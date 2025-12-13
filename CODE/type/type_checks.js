// -- FUNCTIONS

export function isBoolean(
    value
    )
{
    return typeof value === 'boolean';
}

// ~~

export function isNatural(
    value
    )
{
    return isInteger( value ) && getInteger( value ) >= 0;
}

// ~~

export function isNumber(
    value
    )
{
    return typeof value === 'number';
}

// ~~

export function isString(
    value
    )
{
    return typeof value === 'string';
}

// ~~

export function isObject(
    value
    )
{
    return (
        value !== null
        && typeof value === 'object'
        && !Array.isArray( value )
        );
}

// ~~

export function isArray(
    value
    )
{
    return value instanceof Array;
}

// ~~

export function isFunction(
    value
    )
{
    return value instanceof Function;
}

// ~~

export function isElement(
    value
    )
{
    return value instanceof HTMLElement;
}