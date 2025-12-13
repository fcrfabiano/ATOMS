// -- FUNCTIONS

export function isNumber(
    value: unknown
): value is number;

// ~~

export function isInteger(
    value: unknown
    ): boolean;

// ~~

export function isNatural(
    value: unknown
    ): boolean;

// ~~

export function isPositive(
    value: unknown
    ): boolean;

// ~~

export function isNegative(
    value: unknown
    ): boolean;

// ~~

export function isZero(
    value: unknown
    ): boolean;

// ~~

export function isFiniteNumber(
    value: unknown
    ): boolean;

// ~~

export function isSafeInteger(
    value: unknown
    ): boolean;

// ~~

export function isInRange(
    value: unknown,
    minimum: number,
    maximum: number,
    inclusive?: boolean
    ): boolean;
