export default (fibArr: number[]): number[] => {
    return fibArr.filter((num) => num % 2 !== 0);
};
