import { caesarCipher } from '../caesarCipher';

describe('caesarCipher', () => {
    it('works for caesar cipher', () => {
        expect(caesarCipher('SERR PBQR PNZC')).toBe('FREE CODE CAMP');
        expect(caesarCipher('SERR CVMMN!')).toBe('FREE PIZZA!');
        expect(caesarCipher('SERR YBIR?')).toBe('FREE LOVE?');
    });
});
