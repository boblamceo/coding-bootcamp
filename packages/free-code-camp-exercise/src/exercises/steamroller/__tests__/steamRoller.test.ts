import steamRoller from '../steamRoller';

it('returns expected type', () => {
    expect(steamRoller([ [ 'a' ], [ 'b' ] ])).toEqual([ 'a', 'b' ]);
});

it('returns correct stuff', () => {
    expect(steamRoller([ [ [ 'a' ] ], [ [ 'b' ] ] ])).toEqual([ 'a', 'b' ]);
    expect(steamRoller([ 1, [ 2 ], [ 3, [ [ 4 ] ] ] ])).toEqual([ 1, 2, 3, 4 ]);
    expect(steamRoller([ 1, [], [ 3, [ [ 4 ] ] ] ])).toEqual([ 1, 3, 4 ]);
    expect(steamRoller([ 1, {}, [ 3, [ [ 4 ] ] ] ])).toEqual([ 1, {}, 3, 4 ]);
});
