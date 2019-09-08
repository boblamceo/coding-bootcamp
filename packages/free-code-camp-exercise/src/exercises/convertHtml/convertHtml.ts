export default (str: string): string => {
    // &colon;&rpar;
    const arr = str.split('');

    const newArr = arr.map((curr) => {
        if (curr === '&') {
            curr = '&amp;';
        } else if (curr === '<') {
            curr = '&lt;';
        } else if (curr === '>') {
            curr = '&gt;';
        } else if (curr === '"') {
            curr = '&quot;';
        } else if (curr === "'") {
            curr = '&apos;';
        }

        return curr;
    });

    return newArr.join('');
};
