export default (num: number): number[] => {
    const returnedArray: number[] = [];
    let temp = 1;

    while (temp !== num) {
        returnedArray.push(num - temp);
    }

    return returnedArray;
};
