
// -- FUNCTIONS

export function getClampValue(
    value,
    minimumValue,
    maximumValue
    )
{
    if ( value < minimumValue )
    {
        return minimumValue;
    }
    else if ( value > maximumValue )
    {
        return maximumValue;
    }
    else
    {
        return value;
    }
}

// ~~

export function getRadianAngle(
    degreeAngle
    )
{
    return degreeAngle * degreesToRadians;
}

// ~~

export function getDegreeAngle(
    radianAngle
    )
{
    return radianAngle * radiansToDegrees;
}

// ~~

export function getRandomReal(
    firstReal,
    postReal
    )
{
    return firstReal + getRandom() * ( postReal - firstReal );
}

// ~~

export function getRandomInteger(
    firstInteger,
    lastInteger
    )
{
    return getFloorInteger( firstInteger + getRandom() * ( lastInteger - firstInteger + 1 ) );
}

// ~~

export function getIntegerComparison(
    firstInteger,
    secondInteger
    )
{
    return firstInteger - secondInteger;
}

// ~~

export function getRealComparison(
    firstReal,
    secondReal
    )
{
    return firstReal - secondReal;
}