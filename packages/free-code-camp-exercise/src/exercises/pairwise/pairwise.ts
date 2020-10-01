function pairwise(arr: Array<number>, target: number) {
  let usedArrayPairsIndices: Array<[number, number]> = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      }

      const isAlreadyUsed = usedArrayPairsIndices.some(
        (pair) => pair.includes(i) || pair.includes(j)
      );

      if (isAlreadyUsed) {
        continue;
      }

      if (arr[i] + arr[j] === target) {
        usedArrayPairsIndices.push([i, j]);
      }
    }
  }

  return usedArrayPairsIndices.reduce((total, [x, y]) => total + x + y, 0);
}

export default pairwise;
