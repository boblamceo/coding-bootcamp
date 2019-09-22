export default (str: string, before: string, after: string): string => {
    const newAfter = after.split('')[0].toUpperCase() + after.substring(1, after.length);
    let result: string;
    const capitalACharcode = 65;
    const capitalZCharcode = 90;
    // console.log('arr - ', arr)
    // console.log('after', newAfter)
    // console.log(!regex.test(str))

    if (before.charCodeAt(0) >= capitalACharcode && before.charCodeAt(0) <= capitalZCharcode) {
        result = str.replace(before, newAfter);
    } else {
        result = str.replace(before, after);
    }

    return result;
};
