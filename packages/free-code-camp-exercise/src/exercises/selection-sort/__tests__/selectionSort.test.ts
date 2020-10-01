import selectionSort from '../selectionSort';

describe('selectionSort', () => {
    it('is a function', () => {
        expect(typeof selectionSort).toBe('function');
    });
    it('returns a sorted array', () => {
        expect(selectionSort([ 1, 5, 8, 7, 4, 3, 6, 9, 2 ])).toMatchObject([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);
    });
    it('is unchanged except for order', () => {
        expect(selectionSort([ 1, 5, 8, 7, 4, 3, 6, 9, 2 ]).length).toBe(9);
    });
});
