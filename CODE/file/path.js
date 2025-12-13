// -- FUNCTIONS

export function getLogicalFilePath(
    filePath
    )
{
    return filePath.replaceAll( '\\', '/' );
}

// ~~

export function getFilePath(
    folderPath,
    filePath
    )
{
    if ( folderPath === '' )
    {
        return filePath;
    }
    else if ( folderPath.endsWith( '/' ) )
    {
        return folderPath + filePath;
    }
    else
    {
        return folderPath + '/' + filePath;
    }
}

// ~~

export function getFolderPath(
    filePath
    )
{
    return filePath.slice( 0, filePath.lastIndexOf( '/' ) + 1 );
}

// ~~

export function getFileName(
    filePath
    )
{
    return filePath.slice( filePath.lastIndexOf( '/' ) + 1 );
}

// ~~

export function getValidFileName(
    fileName
    )
{
    return replaceIteratively( fileName.replace( invalidCharacterExpression, '_' ), '__', '_' );
}

// ~~

export function getFileLabel(
    filePath
    )
{
    let fileName = getFileName( filePath );
    let lastDotCharacterIndex = fileName.lastIndexOf( '.' );

    if ( lastDotCharacterIndex >= 0 )
    {
        return fileName.slice( 0, lastDotCharacterIndex );
    }
    else
    {
        return fileName;
    }
}

// ~~

export function getFileExtension(
    filePath
    )
{
    let fileName = getFileName( filePath );
    let lastDotCharacterIndex = fileName.lastIndexOf( '.' );

    if ( lastDotCharacterIndex >= 0 )
    {
        return fileName.slice( lastDotCharacterIndex );
    }
    else
    {
        return '';
    }
}

// ~~

export function addFileExtensionPrefix(
    filePath,
    fileExtensionPrefix
    )
{
    let lastSlashCharacterIndex = filePath.lastIndexOf( '/' );
    let lastDotCharacterIndex = filePath.lastIndexOf( '.' );

    if ( lastDotCharacterIndex >= 0
         && lastDotCharacterIndex > lastSlashCharacterIndex )
    {
        return filePath.slice( 0, lastDotCharacterIndex ) + fileExtensionPrefix + filePath.slice( lastDotCharacterIndex );
    }
    else
    {
        return filePath + fileExtensionPrefix;
    }
}