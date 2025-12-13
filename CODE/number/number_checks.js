// -- FUNCTIONS

export function isNumber(
    value
    )
{
    return typeof value === 'number' && !Number.isNaN( value );
}

// ~~

export function isInteger(
    value
    )
{
    return Number.isInteger( value );
}

// ~~

export function isNatural(
    value
    )
{
    return Number.isInteger( value ) && value >= 0;
}

// ~~

export function isPositive(
    value
    )
{
    return isNumber( value ) && value > 0;
}

// ~~

export function isNegative(
    value
    )
{
    return isNumber( value ) && value < 0;
}

// ~~

export function isZero(
    value
    )
{
    return value === 0;
}

// ~~

export function isFiniteNumber(
    value
    )
{
    return Number.isFinite( value );
}

// ~~

export function isSafeInteger(
    value
    )
{
    return Number.isSafeInteger( value );
}

// ~~

export function isInRange(
    value,
    minimum,
    maximum,
    inclusive = true
    )
{
    if ( !isNumber( value ) )
    {
        return false;
    }

    return inclusive
        ? value >= minimum && value <= maximum
        : value > minimum && value < maximum;
}
