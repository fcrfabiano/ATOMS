// -- FUNCTIONS

export function isBooleanText(
    text: string
    ): boolean;

// ~~

export function isBinaryText(
    text: string
    ): boolean;

// ~~

export function isNaturalText(
    text: string
    ): RegExpMatchArray | null;

// ~~

export function isIntegerText(
    text: string
    ): RegExpMatchArray | null;

// ~~

export function isRealText(
    text: string
    ): RegExpMatchArray | null;

// ~~

export function isNumericText(
    text: string
    ): RegExpMatchArray | null;

// ~~

export function isSlugText(
    text: string
    ): RegExpMatchArray | null;

// ~~


export function removePrefix(
    text: string,
    prefix: string
    ): string;

// ~~

export function removeSuffix(
    text: string,
    suffix: string
    ): string;

// ~~

export function replacePrefix(
    text: string,
    oldPrefix: string,
    newPrefix: string
    ): string;

// ~~

export function replaceSuffix(
    text: string,
    oldSuffix: string,
    newSuffix: string
    ): string;

// ~~

export function replaceIteratively(
    text: string,
    oldText: string,
    newText: string
    ): string;

// ~~

export function getLeftPaddedText(
    text: string,
    minimumCharacterCount: number,
    paddingCharacter?: string
    ): string;

// ~~

export function getRightPaddedText(
    text: string,
    minimumCharacterCount: number,
    paddingCharacter?: string
    ): string;

// ~~

export function getQuotedText(
    value: unknown
    ): string;

// ~~

export function getRealText(
    real: number,
    minimumDecimalCount: number,
    maximumDecimalCount: number
    ): string;
