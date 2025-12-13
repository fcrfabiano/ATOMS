// -- FUNCTIONS

export function isBooleanText(
    text
    )
{
    return text === 'false' || text === 'true';
}

// ~~

export function isBinaryText(
    text
    )
{
    return text === '0' || text === '1';
}

// ~~

export function isNaturalText(
    text
    )
{
    return text.match( naturalExpression );
}

// ~~

export function isIntegerText(
    text
    )
{
    return text.match( integerExpression );
}

// ~~

export function isRealText(
    text
    )
{
    return text.match( realExpression );
}

// ~~

export function isNumericText(
    text
    )
{
    return text.match( numericExpression );
}

// ~~

export function isSlugText(
    text
    )
{
    return text.match( slugExpression );
}

// ~~


// ~~

export function removePrefix(
    text,
    prefix
    )
{
    if ( prefix !== ''
         && text.startsWith( prefix ) )
    {
        return text.slice( prefix.length );
    }
    else
    {
        return text;
    }
}

// ~~

export function removeSuffix(
    text,
    suffix
    )
{
    if ( suffix !== ''
         && text.endsWith( suffix ) )
    {
        return text.slice( 0, text.length - suffix.length );
    }
    else
    {
        return text;
    }
}

// ~~

export function replacePrefix(
    text,
    oldPrefix,
    newPrefix
    )
{
    if ( text.startsWith( oldPrefix ) )
    {
        return newPrefix + text.slice( oldPrefix.length );
    }
    else
    {
        return text;
    }
}

// ~~

export function replaceSuffix(
    text,
    oldSuffix,
    newSuffix
    )
{
    if ( text.endsWith( oldSuffix ) )
    {
        return text.slice( 0, text.length - oldSuffix.length ) + newSuffix;
    }
    else
    {
        return text;
    }
}

// ~~

export function replaceIteratively(
    text,
    oldText,
    newText
    )
{
    let replacedText = text;

    do
    {
        var oldReplacedText = replacedText;

        replacedText = replacedText.replaceAll( oldText, newText );
    }
    while ( replacedText !== oldReplacedText );

    return oldReplacedText;
}

// ~~

export function getLeftPaddedText(
    text,
    minimumCharacterCount,
    paddingCharacter = ' '
    )
{
    if ( text.length < minimumCharacterCount )
    {
        return paddingCharacter.repeat( minimumCharacterCount - text.length ) + text;
    }
    else
    {
        return text;
    }
}

// ~~

export function getRightPaddedText(
    text,
    minimumCharacterCount,
    paddingCharacter = ' '
    )
{
    if ( text.length < minimumCharacterCount )
    {
        return text + paddingCharacter.repeat( minimumCharacterCount - text.length );
    }
    else
    {
        return text;
    }
}

// ~~

export function getQuotedText(
    value
    )
{
    return (
        '"'
        + value.toString()
              .replaceAll( '\\', '\\\\' )
              .replaceAll( '\n', '\\n' )
              .replaceAll( '\r', '\\r' )
              .replaceAll( '\t', '\\t' )
              .replaceAll( '"', '\\"' )
              .replaceAll( '\'', '\\\'' )
        + '"'
        );
}

// ~~

export function getRealText(
    real,
    minimumDecimalCount,
    maximumDecimalCount
    )
{
    let multiplier = Math.pow( 10, maximumDecimalCount );
    real = Math.round( real * multiplier ) / multiplier;

    let realText = real.toFixed( maximumDecimalCount );

    while ( realText.includes( '.' )
            && ( realText.endsWith( '0' )
                 || realText.endsWith( '.' ) ) )
    {
        realText = realText.slice( 0, -1 );
    }

    return realText;
}