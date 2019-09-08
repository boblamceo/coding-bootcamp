export default (items: Array<Object>, target: Object): Array<Object> =>
    items.filter((item: Object) => {
        // @ts-ignore
        return Object.entries(target).every(([ targetKey, targetValue ]) => item[targetKey] === targetValue);
    });
