import getPrimes from './getPrimes';

export default (num: number): number => {
    return getPrimes(num).reduce((total: number, current: number): number => {
        return (total += current);
    }, 0);
};
