// -- FUNCTIONS

export function getCurrentMillisecondCount(
    ): number;

// ~~

export function getCurrentLocalDateTime(
    ): Date;

// ~~

export function getCurrentUniversalDateTime(
    ): Date;

// ~~

export function getSystemDate(
    systemDate?: string | Date
    ): Date;

// ~~

export function getLocalDate(
    systemDate?: string | Date
    ):
{
    year: number;
    month: number;
    day: number;
};

// ~~

export function getLocalTime(
    systemDate?: string | Date
    ):
{
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
    microsecond: number;
};

// ~~

export function getLocalDateTime(
    systemDate?: string | Date
    ):
{
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
    microsecond: number;
};

// ~~

export function getUniversalDate(
    systemDate?: string | Date
    ):
{
    year: number;
    month: number;
    day: number;
};

// ~~

export function getUniversalTime(
    systemDate?: string | Date
    ):
{
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
    microsecond: number;
};

// ~~

export function getUniversalDateTime(
    systemDate?: string | Date
    ):
{
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
    microsecond: number;
};

// ~~

export function getSubsecondTimeText(
    dateTime: {
        millisecond: number;
        microsecond: number;
        }
    ): string;

// ~~

export function getDateText(
    date: {
        year: number;
        month: number;
        day: number;
        },
    infix?: string,
    suffix?: string
    ): string;

// ~~

export function getTimeText(
    time: {
        hour: number;
        minute: number;
        second: number;
        },
    infix?: string,
    suffix?: string
    ): string;

// ~~

export function getDateTimeText(
    dateTime: {
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        second: number;
        millisecond: number;
        microsecond: number;
        },
    dateInfix?: string,
    infix?: string,
    timeInfix?: string,
    suffix?: string
    ): string;

// ~~

export function getDateTimeSuffix(
    dateTime: {
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        second: number;
        millisecond: number;
        microsecond: number;
        },
    infix?: string,
    suffix?: string
    ): string;
