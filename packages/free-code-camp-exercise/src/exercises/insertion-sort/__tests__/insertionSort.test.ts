import insertionSort from '../insertionSort';

describe('insertionSort', () => {
    test('insertionSort is a function', () => {
        expect(typeof insertionSort).toBe('function');
    });
    test('the output of insertionSort should be sorted', () => {
        expect(insertionSort([ 1, 5, 3, 4, 2 ])).toMatchObject([ 1, 2, 3, 4, 5 ]);
    });
    test('insertionSort should not be changed except for order', () => {
        expect(insertionSort([ 1, 5, 3, 4, 2 ]).length).toBe(5);
        expect(typeof insertionSort([ 1, 5, 3, 4, 2 ])).toBe('object');
    });
});
