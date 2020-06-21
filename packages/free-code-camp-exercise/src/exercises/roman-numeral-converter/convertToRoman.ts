const NUMBER_SYMBOL_MAP: Record<number, string> = {
    5: 'V',
    10: 'X',
    // 39 => (50-39)=11 => more than X => more than previous symbol => XXXIX
    // ---------
    // 40 => (50-40)=10 => equal than X => equal to previous symbol => XL
    // 41 => (50-41)=9 => less than X => less than previous symbol => XLI
    // 49
    50: 'L',
};

const NUMBER_SYMBOLS = Object.keys(NUMBER_SYMBOL_MAP).sort(); // [10, 5]

const checkIfClosest = (currentNum, closestNum) => Math.floor(currentNum / closestNum) === 1;

const convert = (num) => {
    const resultNumberBySymbol = NUMBER_SYMBOLS.find((numberTarget) => checkIfClosest(num, numberTarget)); // either 10 | 5 | undefined

    if (resultNumberBySymbol === undefined) {
        // TODO: handle less than 4
        if (num === 4) {
            return 'IV';
        }

        if (num === 3) {
            return 'III';
        }

        if (num === 2) {
            return 'II';
        }

        return 'I';
    }

    // bob start

    const remainder = num % Number(resultNumberBySymbol);
    const numberSymbol = NUMBER_SYMBOL_MAP[resultNumberBySymbol];

    if (remainder === 4) {
        return `${convert(remainder)}${numberSymbol}`;
    } else if (remainder > 0) {
        return `${numberSymbol}${convert(remainder)}`;
    }

    return numberSymbol;

    // bob end

    // // 10
    // const checkIfClosestTo10 = (currentNum) => Math.floor(currentNum / 10) === 1;
    // const getRemainderBy10 = (currentNum) => currentNum % 10;

    // if (checkIfClosestTo10(num)) {
    //     const remainder = getRemainderBy10(num);

    //     if (remainder === 4) {
    //         return `${convert(remainder)}X`;
    //     } else if (remainder > 0) {
    //         return `X${convert(remainder)}`;
    //     } else {
    //         return 'X';
    //     }
    // }

    // // for 5
    // const closestTo5 = (currentNum) => Math.floor(currentNum / 5) === 1;
    // const getRemainderBy5 = (currentNum) => currentNum % 5;

    // if (closestTo5(num)) {
    //     const remainder = getRemainderBy5(num);

    //     if (remainder === 4) {
    //         return `${convert(remainder)}V`;
    //     } else if (remainder > 0) {
    //         return `V${convert(remainder)}`;
    //     } else {
    //         return 'V';
    //     }
    // }

    // for less than 5
    // if (num === 4) {
    //     return 'IV';
    // }

    // if (num === 3) {
    //     return 'III';
    // }

    // if (num === 2) {
    //     return 'II';
    // }

    // return 'I';
};

export default convert;
