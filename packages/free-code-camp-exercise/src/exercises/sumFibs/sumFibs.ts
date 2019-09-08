import getFib from './getFibs';
import fibToOdd from './turnFibToAllOdd';

export default (n: number): number => {
    const defaultArray = getFib(n);
    // do sth to filter to target number
    const filteredDefaultArray = fibToOdd(defaultArray);
    const oddArr = fibToOdd(filteredDefaultArray);
    const finale = oddArr.reduce((total, current) => (total += current), 0);

    return finale;
};
