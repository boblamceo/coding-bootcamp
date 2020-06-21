export type Inventory = Array<[number, string]>;

export function updateInventory(arr1: Inventory, arr2: Inventory) {
  const tempInventory = {};

  // Stage 1: put arr1 values and keys in tempInventory (to further update the data easily with an object)
  arr1.forEach((item) => {
    const [value, key] = item;
    tempInventory[key] = value;
  });

  // Stage 2: update tempInventory with arr2 (business requirement)
  arr2.forEach((item) => {
    const [value, key] = item;
    const existingValue = tempInventory[key];

    if (existingValue === undefined) {
      tempInventory[key] = value;
    } else {
      tempInventory[key] = value + existingValue;
    }
  });

  // Stage 3: get the sorted product names from tempInventory
  const sortedProductNames = Object.keys(tempInventory).sort();

  // Stage 4: make an array with the values from tempInventory and sortedProductNames
  return sortedProductNames.map((productName) => {
    const value = tempInventory[productName];

    return [value, productName];
  });
}
