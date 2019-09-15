import numbersBelowNum from './numbersBelowNum';

function isPrime(num: number) {
    if (num < 2) return false;
    for (var i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

export default (num: number): Array<number> => {
    if (num === 0 || num === 1) {
        return [];
    }

    if (num === 2) {
        return [ 2 ];
    }

    const numbersBelowNumber = numbersBelowNum(num);
    const returned = numbersBelowNumber.filter(isPrime);

    return returned.reverse();
};
