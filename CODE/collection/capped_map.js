
// -- TYPES

export class CappedMap
{
    // -- CONSTRUCTORS

    constructor(
        maximumElementCount
        )
    {
        this.maximumElementCount = maximumElementCount;
        this.elementByKeyMap = new Map();
    }

    // -- INQUIRIES

    has(
        key
        )
    {
        return this.elementByKeyMap.has( key );
    }

    // -- OPERATIONS

    clear(
        )
    {
        this.elementByKeyMap.clear();
    }

    // ~~

    set(
        key,
        element
        )
    {
        if ( this.elementByKeyMap.has( key ) )
        {
            this.elementByKeyMap.delete( key );
        }
        else if ( this.elementByKeyMap.size >= this.maximumElementCount )
        {
            let oldestKey = this.elementByKeyMap.keys().next().value;
            this.elementByKeyMap.delete( oldestKey );
        }

        this.elementByKeyMap.set( key, element );
    }

    // ~~

    get(
        key,
        defaultValue = undefined
        )
    {
        if ( !this.elementByKeyMap.has( key ) )
        {
            return defaultValue;
        }
        else
        {
            let element = this.elementByKeyMap.get( key );

            this.elementByKeyMap.delete( key );
            this.elementByKeyMap.set( key, element );

            return element;
        }
    }
}