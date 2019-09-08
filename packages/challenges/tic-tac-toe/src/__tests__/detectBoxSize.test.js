import detectBoxSize from '../detectBoxSize';
describe('#detectBoxSize', () => {
    it('throws error when not every array are at the same size', () => {
        expect(() => detectBoxSize([['x', 'o'], ['o']])).toThrow();
    });
    it('tests 1x1', () => {
        const result = detectBoxSize([['x']]);
        expect(result).toBe('1x1');
    });
    it('tests 2x2', () => {
        const result = detectBoxSize([['x', 'x'], ['o', 'o']]);
        expect(result).toBe('2x2');
    });
    it('tests 3x3', () => {
        const result = detectBoxSize([
            ['x', 'x', 'x'],
            ['o', 'o', 'o'],
            ['x', 'x', 'x'],
        ]);
        expect(result).toBe('3x3');
    });
    it('tests 4x4', () => {
        const result = detectBoxSize([
            ['x', 'x', 'x', 'x'],
            ['o', 'o', 'o', 'o'],
            ['x', 'x', 'x', 'x'],
            ['o', 'o', 'o', 'o'],
        ]);
        expect(result).toBe('4x4');
    });
});
