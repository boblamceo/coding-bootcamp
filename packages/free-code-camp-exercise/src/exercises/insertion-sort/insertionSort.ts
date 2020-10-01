import { swap } from '../../../functions';

const insertionSort = (arr: Array<number>): Array<number> => {
    for (let i = 0; i < arr.length; i++) {
        const neverChangingI = arr[i];
        let lastNumber = arr[arr.indexOf(neverChangingI) - 1];

        // console.log({ lastNumber, current: arr[i], arr });
        while (true) {
            if (lastNumber > arr[arr.indexOf(neverChangingI)]) {
                break;
            }
            swap(arr, lastNumber, arr[i]);
            lastNumber = arr[arr.indexOf(neverChangingI) - 1];
            // console.log({
            //     lastNumberGreaterThanCurr: lastNumber > arr[arr.indexOf(arr[i])],
            //     lastNumber,
            //     current: arr[arr.indexOf(neverChangingI)],
            // });
        }
        lastNumber = arr[i];
    }

    return arr;
};

export default insertionSort;
