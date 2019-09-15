import smallestCommons from '../smallestCommons';

describe('smallestCommons', () => {
    it('returns 60 for [1, 5]', () => {
        expect(smallestCommons([ 1, 5 ])).toBe(60);
        expect(smallestCommons([ 5, 1 ])).toBe(60);
    });

    it('returns 2520 for [2, 10]', () => {
        expect(smallestCommons([ 2, 10 ])).toBe(2520);
    });

    it('returns 360360 for [1, 13]', () => {
        expect(smallestCommons([ 1, 13 ])).toBe(360360);
    });

    it('returns 6056820 for [23, 18]', () => {
        expect(smallestCommons([ 23, 18 ])).toBe(6056820);
    });
});
