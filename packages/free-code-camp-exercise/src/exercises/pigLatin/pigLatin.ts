export default (str: String): String => {
    let pigLatin: any = ''
    const regex = /[aeiou]/gi
    const strIntoArray = str.split('')
    const isEveryLetterConsonant = strIntoArray.every((letter) => !letter.match(regex))

    if (str[0].match(regex)) {
        pigLatin = str + 'way'
    } else if (isEveryLetterConsonant) {
        return str
    } else {
        if (!str[1].match(regex)) {
            str.split('')
            pigLatin = [ ...str ]
            pigLatin.push(pigLatin[0])
            pigLatin.push(pigLatin[1])
            pigLatin.shift()
            pigLatin.shift()
            pigLatin = pigLatin.join('')
            pigLatin = `${pigLatin}ay`
        } else {
            str.split('')
            pigLatin = [ ...str ]
            pigLatin.push(pigLatin[0])
            pigLatin.shift()
            pigLatin = pigLatin.join('')
            pigLatin = `${pigLatin}ay`
        }
    }

    return pigLatin
}
