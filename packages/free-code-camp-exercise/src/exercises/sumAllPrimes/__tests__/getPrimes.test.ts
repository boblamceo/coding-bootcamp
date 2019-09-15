import getPrimes from '../getPrimes';

describe('getPrimes', () => {
    it('getAllPrimesUnder10', () => {
        expect(getPrimes(10)).toEqual([ 2, 3, 5, 7 ]);
    });
});
