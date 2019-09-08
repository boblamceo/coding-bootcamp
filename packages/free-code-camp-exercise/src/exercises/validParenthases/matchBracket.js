function matchBracket(openBracketChar, closeBracketChar) {
  return (
    openBracketChar === '(' && closeBracketChar === ')' ||
    openBracketChar === '[' && closeBracketChar === ']' ||
    openBracketChar === '{' && closeBracketChar === '}'
  )
}

module.exports = matchBracket
