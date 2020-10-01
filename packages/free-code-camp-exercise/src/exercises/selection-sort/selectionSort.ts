const selectionSort = (list: Array<number>): Array<number> => {
    for (let i = 0; i < list.length - 1; i++) {
        let currentMin = i;
        for (let j = i + 1; j < list.length; j++) {
            if (list[currentMin] > list[j]) {
                currentMin = j;
            }
        }
        let neverChangingI = list[i];
        list[i] = list[currentMin];
        list[currentMin] = neverChangingI;
    }
    return list;
};

export default selectionSort;
