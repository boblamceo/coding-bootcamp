import numbersBelowNum from './numbersBelowNum';

export default (num: number): Array<number> => {
    if (num === 0 || num === 1) {
        return [];
    }

    const numbersBelowNumber = numbersBelowNum(num);

    const returned = numbersBelowNumber.filter((current) => num % current !== 0);

    return returned;
};
