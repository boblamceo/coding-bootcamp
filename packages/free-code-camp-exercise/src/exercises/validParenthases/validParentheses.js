const matchBracket = require('./matchBracket')

const OPEN_BRACKETS = ['(', '{', '[']
const CLOSE_BRACKETS = [')', '}', ']']

function validParentheses(item) {
  const isString = typeof item === 'string'

  // Ensure it has to be string
  if (!isString){
      console.warn('the expected input is not string')
      return false
  }

  // Ensure it has more than one value
  const isTooShort = item.length < 2

  if(isTooShort){
  console.warn('it cannot compare because it has only 1 char')
      return false
  }

  const openBracketStack = []

  for(const currentChar of item.split('')) {
    const isOpenBracket = OPEN_BRACKETS.includes(currentChar)
    const isCloseBracket = CLOSE_BRACKETS.includes(currentChar)

    if(isOpenBracket){
      openBracketStack.push(currentChar)
    } else if (isCloseBracket) {
      const lastItemInStack = openBracketStack.pop()
        const isMatch = matchBracket(lastItemInStack, currentChar)
        if(!isMatch){
          return false
        }
    } else {
      return false
    }
  }

  return true
}

module.exports = validParentheses
