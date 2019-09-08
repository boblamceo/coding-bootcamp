import sumFibs from '../sumFibs';

it('works just fine', () => {
    expect(sumFibs(1)).toBe(2);
    expect(sumFibs(4)).toBe(5);
});

it('works for big numbers', () => {
    expect(sumFibs(1000)).toBe(1785);
    expect(sumFibs(4000000)).toBe(4613732);
    expect(sumFibs(75024)).toBe(60696);
});
