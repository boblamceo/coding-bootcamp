const BINARY_RADIX = 2;

const fromDecimalToChar = String.fromCharCode;

export default (binaryString: string): string => {
    const arr = binaryString.split(' ');

    const newArr = arr.map((binaryString) => {
        const binaryToDecimal = parseInt(binaryString, BINARY_RADIX);
        return fromDecimalToChar(binaryToDecimal);
    });

    return newArr.join('');
};
