type everyTypePossible = any;

export default (arr: Array<everyTypePossible>): Array<everyTypePossible> => {
    const returnedArr: Array<everyTypePossible> = [];

    const steamRoll = (currentElement: everyTypePossible) => {
        if (!Array.isArray(currentElement)) {
            returnedArr.push(currentElement);
        } else {
            currentElement.map((element) => {
                steamRoll(element);
            });
        }
    };

    arr.map(steamRoll);
    return returnedArr;
};
