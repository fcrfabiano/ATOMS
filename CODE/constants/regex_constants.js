// -- CONSTANTS

export const
    naturalExpression = /^[0-9][0-9]*$/,
    integerExpression = /^-?[0-9][0-9]*$/,
    realExpression = /^-?[0-9][0-9]*\.[0-9]*$/,
    numericExpression = /^-?[0-9][0-9]*\.?[0-9]*$/,
    slugExpression = /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    valueExpression = /^(.*?)([<=>]+)(.*)$/,
    invalidCharacterExpression = /[^\p{L}\p{N}\-_.]/gu;