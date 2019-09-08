const validParentheses = require('./validParentheses')

it('should return false when there is no input', () => {
  expect(validParentheses()).toBe(false)
})
it('should return false when there is a empty string', () => {
  expect(validParentheses('')).toBe(false)
})
it('should return false when there is only 1 bracket', () => {
  expect(validParentheses('(')).toBe(false)
})
it('should return false when there is only 1 bracket and 1 squared bracket', () => {
  expect(validParentheses('(]')).toBe(false)
})
it('should return false when there is one set of brackets tangled with one set of brackets', () => {
  expect(validParentheses('([)]')).toBe(false)
})
it('should return true when there are two brackets', () => {
  expect(validParentheses('()')).toBe(true)
})
it('should return true when there are two squared brackets', () => {
  expect(validParentheses('[]')).toBe(true)
})
it('should return true when there are two curly brackets', () => {
  expect(validParentheses('{}')).toBe(true)
})
it('should return true when there are two squared brackets inside two curly brackets', () => {
  expect(validParentheses('{[]}')).toBe(true)
})
it('should return true when there are two match brackets next to each other', () => {
  expect(validParentheses('{}[]')).toBe(true)
})

it('returns false when it is not a bracket', () => {
  expect(validParentheses('{b[]')).toBe(false)
})
