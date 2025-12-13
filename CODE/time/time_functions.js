// -- FUNCTIONS

export function getCurrentMillisecondCount(
)
{
if ( isBrowser )
{
    return window.performance.timing.navigationStart + window.performance.now();
}
else
{
    let hrTime = process.hrtime();

    return parseInt( hrTime[ 0 ] * 1000 + hrTime[ 1 ] / 1000000 );
}
}

// ~~

export function getCurrentLocalDateTime(
)
{
return new Date();
}

// ~~

export function getCurrentUniversalDateTime(
)
{
let currentLocalDateTime = new Date();

return new Date(
    Date.UTC(
        currentLocalDateTime.getUTCFullYear(),
        currentLocalDateTime.getUTCMonth(),
        currentLocalDateTime.getUTCDate(),
        currentLocalDateTime.getUTCHours(),
        currentLocalDateTime.getUTCMinutes(),
        currentLocalDateTime.getUTCSeconds(),
        currentLocalDateTime.getUTCMilliseconds()
        )
    );
}

// ~~

export function getSystemDate(
systemDate
)
{
if ( systemDate === undefined )
{
    return new Date();
}
else if ( isString( systemDate ) )
{
    return new Date( systemDate );
}
else
{
    return systemDate;
}
}

// ~~

export function getLocalDate(
systemDate
)
{
systemDate = getSystemDate( systemDate );

return {
    year : systemDate.getFullYear(),
    month : systemDate.getMonth() + 1,
    day : systemDate.getDate()
    };
}

// ~~

export function getLocalTime(
systemDate
)
{
systemDate = getSystemDate( systemDate );

return {
    hour : systemDate.getHours(),
    minute : systemDate.getMinutes(),
    second : systemDate.getSeconds(),
    millisecond : systemDate.getMilliseconds(),
    microsecond : 0
    };
}

// ~~

export function getLocalDateTime(
systemDate
)
{
systemDate = getSystemDate( systemDate );

return {
    year : systemDate.getFullYear(),
    month : systemDate.getMonth() + 1,
    day : systemDate.getDate(),
    hour : systemDate.getHours(),
    minute : systemDate.getMinutes(),
    second : systemDate.getSeconds(),
    millisecond : systemDate.getMilliseconds(),
    microsecond : 0
    };
}

// ~~

export function getUniversalDate(
systemDate
)
{
systemDate = getSystemDate( systemDate );

return {
    year : systemDate.getUTCFullYear(),
    month : systemDate.getUTCMonth() + 1,
    day : systemDate.getUTCDate()
    };
}

// ~~

export function getUniversalTime(
systemDate
)
{
systemDate = getSystemDate( systemDate );

return {
    hour : systemDate.getUTCHours(),
    minute : systemDate.getUTCMinutes(),
    second : systemDate.getUTCSeconds(),
    millisecond : systemDate.getUTCMilliseconds(),
    microsecond : 0
    };
}

// ~~

export function getUniversalDateTime(
systemDate
)
{
systemDate = getSystemDate( systemDate );

return {
    year : systemDate.getUTCFullYear(),
    month : systemDate.getUTCMonth() + 1,
    day : systemDate.getUTCDate(),
    hour : systemDate.getUTCHours(),
    minute : systemDate.getUTCMinutes(),
    second : systemDate.getUTCSeconds(),
    millisecond : systemDate.getUTCMilliseconds(),
    microsecond : 0
    };
}

// ~~

export function getSubsecondTimeText(
dateTime
)
{
if ( dateTime.millisecond !== 0
     || dateTime.microsecond !== 0 )
{
    if ( dateTime.microsecond !== 0 )
    {
        return (
            '.'
            + dateTime.millisecond.toString().padStart( 3, 0 )
            + dateTime.microsecond.toString().padStart( 3, 0 )
            );
    }
    else
    {
        return (
            '.'
            + dateTime.millisecond.toString().padStart( 3, '0' )
            );
    }
}
else
{
    return '';
}
}

// ~~

export function getDateText(
date,
infix = ':',
suffix = ''
)
{
return (
    date.year.toString().padStart( 4, '0' )
    + infix
    + date.month.toString().padStart( 2, '0' )
    + infix
    + date.day.toString().padStart( 2, '0' )
    + suffix
    );
}

// ~~

export function getTimeText(
time,
infix = '-',
suffix = ''
)
{
return (
    time.hour.toString().padStart( 2, '0' )
    + infix
    + time.minute.toString().padStart( 2, '0' )
    + infix
    + time.second.toString().padStart( 2, '0' )
    + suffix
    );
}

// ~~

export function getDateTimeText(
dateTime,
dateInfix = '-',
infix = ' ',
timeInfix = ':',
suffix = ''
)
{
return (
    dateTime.year.toString().padStart( 4, '0' )
    + dateInfix
    + dateTime.month.toString().padStart( 2, '0' )
    + dateInfix
    + dateTime.day.toString().padStart( 2, '0' )
    + infix
    + dateTime.hour.toString().padStart( 2, '0' )
    + timeInfix
    + dateTime.minute.toString().padStart( 2, '0' )
    + timeInfix
    + dateTime.second.toString().padStart( 2, '0' )
    + getSubsecondTimeText( dateTime )
    + suffix
    );
}

// ~~

export function getDateTimeSuffix(
dateTime,
infix = '',
suffix = ''
)
{
return (
    dateTime.year.toString().padStart( 4, '0' )
    + infix
    + dateTime.month.toString().padStart( 2, '0' )
    + infix
    + dateTime.day.toString().padStart( 2, '0' )
    + infix
    + dateTime.hour.toString().padStart( 2, '0' )
    + infix
    + dateTime.minute.toString().padStart( 2, '0' )
    + infix
    + dateTime.second.toString().padStart( 2, '0' )
    + dateTime.millisecond.toString().padStart( 3, '0' )
    + dateTime.microsecond.toString().padStart( 3, '0' )
    + suffix
    );
}