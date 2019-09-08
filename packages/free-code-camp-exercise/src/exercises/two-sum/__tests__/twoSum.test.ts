import twoSum from '../twoSum'

describe('twoSum', () => {
    it('returns correct index position', () => {
        expect(twoSum([ 0, 1, 8 ], 9)).toMatchObject([ 1, 2 ])
    })
    it('returns -1 -1 if cant succeed', () => {
        expect(twoSum([ 0, 0, 1 ], 9)).toMatchObject([ -1, -1 ])
    })

    it('returns first occurance when it has more matches', () => {
        expect(twoSum([ 3, 4, 3 ], 7)).toMatchObject([ 0, 1 ])
    })

    it('null', () => {
        expect(twoSum([ 5, 4, 3 ], 7)).toMatchObject([ 1, 2 ])
    })
})
