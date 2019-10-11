import largestCommons from '../largestCommons';

describe('largestCommons', () => {
    it('returns 2 for 4 and 6', () => {
        expect(largestCommons(4, 6)).toBe(2);
    });

    it('returns 1 for 5 and 6', () => {
        expect(largestCommons(5, 6)).toBe(1);
    });

    it('returns 8 for 232 and 456', () => {
        expect(largestCommons(232, 456)).toBe(8);
    });

    it('returns 9 for 18 and 27', () => {
        expect(largestCommons(18, 27)).toBe(9);
    });
});
