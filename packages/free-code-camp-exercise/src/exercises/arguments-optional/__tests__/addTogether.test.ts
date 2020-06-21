import addTogether from '../addTogether';

describe('addTogether', () => {
    it('adds two numbers like usual', () => {
        expect(addTogether(2, 3)).toBe(5);
    });
    it('works with a nested function', () => {
        expect(addTogether(2)(3)).toBe(5);
    });
    it('returns undefined when the input type is not a number', () => {
        expect(addTogether('http://bit.ly/IqT6zt')).toBe(undefined);
        expect(addTogether(2, '3')).toBe(undefined);
        expect(addTogether(2)([ 3 ])).toBe(undefined);
    });
});
