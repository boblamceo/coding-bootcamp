import pigLatin from '../pigLatin'

describe('pigLatin', () => {
    it('adds way to the end if the first letter is a vowel', () => {
        expect(pigLatin('eight')).toBe('eightway')
    })
    it('returns expected for consonant', () => {
        expect(pigLatin('consonant')).toBe('onsonantcay')
        expect(pigLatin('california')).toBe('aliforniacay')
        expect(pigLatin('paragraphs')).toBe('aragraphspay')
        expect(pigLatin('algorithm')).toBe('algorithmway')
    })

    it('same for consonant cluster', () => {
        expect(pigLatin('glove')).toBe('oveglay')
    })
    it('should do something if the first vowel is at the end', () => {
        expect(pigLatin('gna')).toBe('agnay')
        expect(pigLatin('rja')).toBe('arjay')
        expect(pigLatin('a')).toBe('away')
    })

    it('should handle words without vowels', () => {
        expect(pigLatin('ttt')).toBe('ttt')
    })
})
