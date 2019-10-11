export default (num: number): Array<number> => {
    const arr = [ 0 ];
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            arr.push(i);
        }
    }
    return arr;
};
