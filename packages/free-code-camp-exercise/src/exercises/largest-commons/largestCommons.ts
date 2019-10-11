import calculateFactors from './calculateFactors';

export default (num1: number, num2: number): number => {
    const factorsForNumOne = calculateFactors(num1);
    const factorsForNumTwo = calculateFactors(num2);

    const commonValues = factorsForNumOne.filter((num: number) => factorsForNumTwo.includes(num));
    const sortedValues = commonValues.sort((a, b): number => {
        if (a < b) {
            return -1;
        }

        return 0;
    });

    return sortedValues[sortedValues.length - 1];
};
