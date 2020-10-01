const bubbleSort = (array: Array<number>) => {
  let updatedArray = [...array];

  for (let x = 0; x < updatedArray.length; x++) {
    for (let y = 0; y < updatedArray.length; y++) {
      if (x === y) {
        continue;
      }

      if (updatedArray[y] > updatedArray[x]) {
        const neverChangingX = updatedArray[x];
        const neverChangingY = updatedArray[y];

        updatedArray[x] = neverChangingY;
        updatedArray[y] = neverChangingX;
      }
    }
  }

  console.log("updatedArray", updatedArray);

  return updatedArray;
};

export default bubbleSort;
