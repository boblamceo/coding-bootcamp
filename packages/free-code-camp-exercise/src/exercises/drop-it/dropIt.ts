export default (arr: Array<number>, func: (n: number) => boolean): Array<number> => {
    const startIndex = arr.findIndex(func);
    if (startIndex === -1) {
        return [];
    }

    return arr.slice(startIndex);
};
