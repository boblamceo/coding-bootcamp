import { sym } from '../sym';

describe('symetricDifference', () => {
    test('simplest case', () => {
        expect(sym([ 1, 2, 3 ], [ 5, 2, 1, 4 ])).toBe([ 3, 4, 5 ]);
    });

    test.skip('maximum length', () => {
        expect(sym([ 1, 2, 3 ], [ 5, 2, 1, 4 ]).length).toBe(3);
    });
});
