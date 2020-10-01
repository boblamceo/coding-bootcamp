import bubbleSort from "../bubbleSort";

describe("bubble sort", () => {
  test("bubbleSort is a function", () => {
    expect(typeof bubbleSort).toBe("function");
  });

  test("bubbleSort returns sorted array", () => {
    expect(bubbleSort([1, 4, 2, 5, 3])).toMatchObject([1, 2, 3, 4, 5]);
  });

  test("complex numbers", () => {
    const input = [
      1,
      4,
      2,
      8,
      345,
      123,
      43,
      32,
      5643,
      63,
      123,
      43,
      2,
      55,
      1,
      234,
      92,
    ];
    const output = [
      1,
      1,
      2,
      2,
      4,
      8,
      32,
      43,
      43,
      55,
      63,
      92,
      123,
      123,
      234,
      345,
      5643,
    ];
    expect(bubbleSort(input)).toMatchObject(output);
  });

  test("bubbleSort is unchanged except for order", () => {
    expect(bubbleSort([1, 4, 2, 5, 3]).length).toBe(5);
  });
});
