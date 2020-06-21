export default (str: string): boolean => {
    const regex = /[_\W]+/g;

    const arr = str.replace(regex, '').toLowerCase().split('');

    const flippedArr = arr.reverse().join().replace(regex, '');
    console.log('reverse', arr.reverse().join().replace(regex, ''));
    return arr.join().replace(regex, '') === flippedArr;
};
