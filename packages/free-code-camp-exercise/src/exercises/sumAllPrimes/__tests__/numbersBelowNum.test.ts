import numbersBelowNum from '../numbersBelowNum';

describe('numbersBelowNum', () => {
    it('get numbers below 10', () => {
        expect(numbersBelowNum(10)).toEqual([ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]);
    });
});
