export default (num: number): number[] => {
    const returnedArray: number[] = [];
    let temp = 1;

    while (temp <= num) {
        const numberToBePushed = num - temp;
        returnedArray.push(numberToBePushed);
        temp++;
    }

    return returnedArray;
};
