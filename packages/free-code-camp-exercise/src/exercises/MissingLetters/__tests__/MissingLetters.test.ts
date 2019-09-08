import MissingLetters from '../MissingLetters'

describe('MissingLetters', () => {
    it('returns expected output', () => {
        expect(MissingLetters('abce')).toBe('d')
        expect(MissingLetters('abcdefghjklmno')).toBe('i')
        expect(MissingLetters('stvwx')).toBe('u')
        expect(MissingLetters('bcdf')).toBe('e')
    })
    it('returns undefined when there is the whole alphabet', () => {
        expect(MissingLetters('abcdefghijklmnopqrstuvwxyz')).toBe(undefined)
    })
})
