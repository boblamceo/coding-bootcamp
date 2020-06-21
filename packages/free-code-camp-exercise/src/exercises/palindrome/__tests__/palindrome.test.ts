import palindrome from '../palindrome';

describe('palindrome', () => {
    it('returns a boolean', () => {
        expect(palindrome('taco cat')).toBe(true);
    });

    it('ignores punctuation', () => {
        expect(palindrome('_eye')).toBe(true);
        expect(palindrome('A man, a plan, a canal. Panama')).toBe(true);
        expect(palindrome('My age is 0, 0 si ega ym.')).toBe(true);
        expect(palindrome('1 eye for of 1 eye.')).toBe(false);
        expect(palindrome('0_0 (: /- :) 0-0')).toBe(true);
        expect(palindrome('five|_/|four')).toBe(false);
    });

    it('works like normal', () => {
        expect(palindrome('eye')).toBe(true);
        expect(palindrome('race car')).toBe(true);
        expect(palindrome('not a palindrome')).toBe(false);
        expect(palindrome('never odd or even')).toBe(true);
        expect(palindrome('nope')).toBe(false);
        expect(palindrome('almostomla')).toBe(false);
    });
});
