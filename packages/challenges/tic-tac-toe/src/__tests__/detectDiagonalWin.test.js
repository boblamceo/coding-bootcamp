import detectDiagonalWin from '../detectDiagonalWin';
describe.only('#detectDiagonalWin', () => {
    it('returns false when a diagonal value from left to right is not the same', () => {
        const result = detectDiagonalWin([
            ['x', ' ', ' '],
            [' ', 'o', ' '],
            [' ', ' ', 'x'],
        ]);
        expect(result).toBe(false);
    });
    it('returns true when a diagonal value from left to right is the same for o', () => {
        const board = [['o', ' ', ' '], [' ', 'o', ' '], [' ', ' ', 'o']];
        const result = detectDiagonalWin(board);
        expect(result).toBe(true);
    });
    it('returns true when a diagonal value from left to right is the same for x', () => {
        const board = [['x', ' ', ' '], [' ', 'x', ' '], [' ', ' ', 'x']];
        const result = detectDiagonalWin(board, 'x');
        expect(result).toBe(true);
    });
});
