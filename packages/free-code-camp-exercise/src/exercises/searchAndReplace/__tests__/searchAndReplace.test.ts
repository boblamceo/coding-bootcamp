import searchAndReplace from '../searchAndReplace'

describe('searchAndReplace', () => {
    it('works for lowercase befores', () => {
        expect(searchAndReplace('Let us go to the store', 'store', 'mall')).toBe('Let us go to the mall')
        expect(searchAndReplace('This has a spellngi error', 'spellngi', 'spelling')).toBe('This has a spelling error')
    })

    it('Works for uppercase', () => {
        expect(searchAndReplace('He is Sleeping on the couch', 'Sleeping', 'sitting')).toBe(
            'He is Sitting on the couch',
        )
        expect(searchAndReplace('His name is Tom', 'Tom', 'john')).toBe('His name is John')
        expect(searchAndReplace('Let us get back to more Coding', 'Coding', 'algorithms')).toBe(
            'Let us get back to more Algorithms',
        )
    })
})
