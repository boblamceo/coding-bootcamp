import sumAllPrimes from '../sumAllPrimes';

it('returns 17', () => {
    expect(sumAllPrimes(10)).toBe(17);
});

it('returns 73156', () => {
    expect(sumAllPrimes(977)).toBe(73156);
});
