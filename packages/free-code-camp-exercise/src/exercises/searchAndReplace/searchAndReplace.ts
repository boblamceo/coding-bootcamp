export default (str: string, before: string, after: string): string => {
    const arr = str.split(' ')
    const regex = /[A-Z]/g
    const newAfter = after.split('')[0].toUpperCase() + after.substring(1, after.length)
    // console.log('arr - ', arr)
    // console.log('after', newAfter)
    // console.log(!regex.test(str))

    return !regex.test(str) ? str.replace(before, after) : str.replace(before, newAfter)
}
