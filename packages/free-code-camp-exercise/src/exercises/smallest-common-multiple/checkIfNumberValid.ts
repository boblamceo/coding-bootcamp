export default (valuesBetween: Array<number>, i: number): boolean => {
    return valuesBetween.every((current) => {
        const result = i % current === 0;
        return result;
    });
};
