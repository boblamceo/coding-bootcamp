import getNumsBetween from './getNumbersBetween';
import checkIfNumberValid from './checkIfNumberValid';

export default (arr: [number, number]): number | null => {
    const [ firstDigit, lastDigit ] = arr[0] > arr[1] ? [ ...arr ].reverse() : [ ...arr ];
    const valuesBetween = getNumsBetween(firstDigit, lastDigit + 1);

    // for (let i = 3; i < 6056821; i++) {
    for (let i = firstDigit; i < 6056821; i++) {
        if (checkIfNumberValid(valuesBetween, i)) {
            return i;
        }
    }

    return null;
};
