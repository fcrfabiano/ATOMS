// -- TYPES

export class CappedMap<
    K = any,
    V = any
>
{
    // -- CONSTRUCTORS

    constructor(
        maximumElementCount: number
        );

    // -- INQUIRIES

    has(
        key: K
        ): boolean;

    // -- OPERATIONS

    clear(
        ): void;

    // ~~

    set(
        key: K,
        element: V
        ): void;

    // ~~

    get(
        key: K,
        defaultValue?: V
        ): V | undefined;
}
