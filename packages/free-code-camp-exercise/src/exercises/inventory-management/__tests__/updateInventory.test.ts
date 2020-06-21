import { Inventory, updateInventory } from "../updateInventory";

describe("updateInventory", () => {
  it("updates inventory", () => {
    const curInv: Inventory = [
      [21, "Bowling Ball"],
      [2, "Dirty Sock"],
      [1, "Hair Pin"],
      [5, "Microphone"],
    ];

    const newInv: Inventory = [
      [2, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [67, "Bowling Ball"],
      [7, "Toothpaste"],
    ];

    expect(updateInventory(curInv, newInv)).toMatchObject([
      [88, "Bowling Ball"],
      [2, "Dirty Sock"],
      [3, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [5, "Microphone"],
      [7, "Toothpaste"],
    ]);
  });
});
