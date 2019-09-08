export default (n: number): number[] => {
    let arr = [ 0, 1, 1 ];

    if (n <= 2) {
        return arr;
    }

    while (n >= arr[arr.length - 1]) {
        const secondLastNumber = arr[arr.length - 2];
        const lastNumber = arr[arr.length - 1];

        let numberToBeAdded = secondLastNumber + lastNumber;
        arr.push(numberToBeAdded);
    }

    return arr.filter((current) => current <= n);
};
