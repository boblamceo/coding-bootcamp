const ALPHABETS = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const caesarCipher = (str) => {
    const strArray = str.split('');
    console.log('strArray', strArray);
    return strArray
        .map((char) => {
            const index = ALPHABETS.indexOf(char.toLowerCase());

            // Condition 1: the letter does not exist in the provided language
            if (index === -1) {
                return char;
            }

            const isLowerCase = ALPHABETS.indexOf(char) > -1;

            const newIndex = index + 13;

            // Condition 2: the newIndex is over the last letter
            if (newIndex > ALPHABETS.length - 1) {
                const updatedIndex = newIndex - ALPHABETS.length;
                return isLowerCase ? ALPHABETS[updatedIndex] : ALPHABETS[updatedIndex].toUpperCase();
            }

            // Condition 3: if the updated index is within the alphabet array range
            return isLowerCase ? ALPHABETS[newIndex] : ALPHABETS[newIndex].toUpperCase();
        })
        .join('');
};
