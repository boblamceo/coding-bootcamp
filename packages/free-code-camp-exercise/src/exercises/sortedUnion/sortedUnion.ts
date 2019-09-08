export default (...args: (number[] | number)[][]): number[] => {
    const returnedArr: number[] = [];
    console.log(returnedArr.length);

    args.forEach((current) => {
        console.log({ current });
        current.forEach((value: number | Array<number>) => {
            if (returnedArr.length === 0) {
                // @ts-ignore
                returnedArr.push(value);
                // @ts-ignore
            } else if (!returnedArr.includes(value)) {
                // @ts-ignore
                returnedArr.push(value);
            }
        });
    });

    return returnedArr;
};
