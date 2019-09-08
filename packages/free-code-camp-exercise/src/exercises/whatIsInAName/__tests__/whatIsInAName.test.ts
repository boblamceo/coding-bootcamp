import whatIsInAName from '../whatIsInAName'

describe('whatIsInAName', () => {
    it('handles empty collection input', () => {
        const result = whatIsInAName([], { player: 'messi' })
        expect(result).toMatchObject([])
    })

    // TODO: coutinhno this in next lesson
    it('returns empty array when cannot find second argument in first argument', () => {
        expect(whatIsInAName([ { first: 'bob', last: 'lam' } ], { last: 'abc' })).toEqual([])
    })

    // input: whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })
    // expected output: [{ first: "Tybalt", last: ["Capulet" }]
    it('return array with expected output', () => {
        const result = whatIsInAName(
            [
                { first: 'Romeo', last: 'Montague' },
                { first: 'Mercutio', last: null },
                { first: 'Tybalt', last: 'Capulet' },
            ],
            { last: 'Capulet' },
        )

        expect(result).toMatchObject([ { first: 'Tybalt', last: 'Capulet' } ])
    })

    it('handles two expected input', () => {
        const result = whatIsInAName(
            [ { first: 'apple', last: 'pear' }, { first: 'apple', last: 'bat' }, { first: 'soo', last: 'big' } ],
            { first: 'apple' },
        )

        expect(result).toMatchObject([ { first: 'apple', last: 'pear' }, { first: 'apple', last: 'bat' } ])
    })
})
