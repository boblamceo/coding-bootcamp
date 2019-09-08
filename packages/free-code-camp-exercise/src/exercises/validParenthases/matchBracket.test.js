const matchBracket = require('./matchBracket')

it('returns true when match', () => {
  expect(matchBracket('(', ')')).toBe(true)
})

it('returns false because it is not support', () => {
  expect(matchBracket('<', '>')).toBe(false)
})

it('returns false when only one input is provided', () => {
  expect(matchBracket('(')).toBe(false)
})

it('returns false if input value is not a string', () => {
  expect(matchBracket({}, ')')).toBe(false)
})

it('returns false if input value has nothing inside', () => {
  expect(matchBracket()).toBe(false)
})
