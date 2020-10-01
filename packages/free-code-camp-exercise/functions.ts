export const swap = (array: Array<any>, firstItem: any, secondItem: any) => {
    const firstItemIndex = array.indexOf(firstItem);
    const secondItemIndex = array.indexOf(secondItem);
    array[firstItemIndex] = secondItem;
    array[secondItemIndex] = firstItem;
};

export const whileLoop = (condition: boolean, callback: () => any) => {
    if (condition) {
        callback();
        if (condition) {
            whileLoop(condition, callback);
        }
    }
};
