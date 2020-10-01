import pairwise from "../pairwise";

describe("pairwise", () => {
  it("has no error", () => {
    expect(pairwise([1, 4, 2, 3, 0, 5], 7)).toBe(11);
  });

  it("works as expected", () => {
    expect(pairwise([1, 3, 2, 4], 4)).toBe(1);
  });

  it("works for two same digits", () => {
    expect(pairwise([1, 1, 1], 2)).toBe(1);
    expect(pairwise([0, 0, 0, 0, 1, 1], 1)).toBe(10);
  });

  it("works for no digits inside array", () => {
    expect(pairwise([], 100)).toBe(0);
  });
});
