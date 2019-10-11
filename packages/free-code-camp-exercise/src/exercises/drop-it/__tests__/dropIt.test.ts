import dropIt from '../dropIt';

describe('dropIt', () => {
    it('works well for normal < and >', () => {
        expect(
            dropIt([ 1, 2, 3, 4 ], function(n) {
                return n >= 3;
            }),
        ).toEqual([ 3, 4 ]);
        expect(
            dropIt([ 1, 2, 3, 7, 4 ], function(n) {
                return n > 3;
            }),
        ).toEqual([ 7, 4 ]);

        expect(
            dropIt([ 1, 2, 3, 9, 2 ], function(n) {
                return n > 2;
            }),
        ).toEqual([ 3, 9, 2 ]);
    });

    it('works for === sign', () => {
        expect(
            dropIt([ 0, 1, 0, 1 ], function(n) {
                return n === 1;
            }),
        ).toEqual([ 1, 0, 1 ]);
    });

    it('works for >= sign', () => {
        expect(
            dropIt([ 1, 2, 3, 4 ], function(n) {
                return n >= 3;
            }),
        ).toEqual([ 3, 4 ]);
    });

    it('works with no successful case', () => {
        expect(
            dropIt([ 1, 2, 3, 4 ], function(n) {
                return n > 5;
            }),
        ).toEqual([]);
    });
});
