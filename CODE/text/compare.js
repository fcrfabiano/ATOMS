// -- FUNCTIONS

export function getTextComparison(
    firstText,
    secondText
    )
{
    if ( firstText < secondText )
    {
        return -1;
    }
    else if ( firstText > secondText )
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

// ~~

export function getNaturalTextComparison(
    firstText,
    secondText
    )
{
    return firstText.localeCompare( secondText, undefined, { numeric : true } );
}