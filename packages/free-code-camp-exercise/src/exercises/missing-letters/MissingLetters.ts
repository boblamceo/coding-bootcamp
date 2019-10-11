export default (str: string): string | undefined => {
    const strIntoArr: Array<string> = str.split('');
    const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
    const partOfAlphabet: string = alphabet.substr(alphabet.indexOf(str[0]), alphabet.indexOf(str[str.length - 1]) + 1);

    if (str === partOfAlphabet) {
        return undefined;
    }

    const startIndexOfWrongAlphabet = strIntoArr.findIndex((current, index) => {
        const partOfAlphabetIndex = partOfAlphabet[index];
        return current !== partOfAlphabetIndex;
    });

    const startOfWrongAlphabet = partOfAlphabet[startIndexOfWrongAlphabet];
    return startOfWrongAlphabet;
};
