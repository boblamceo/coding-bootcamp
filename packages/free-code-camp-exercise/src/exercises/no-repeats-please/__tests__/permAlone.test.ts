import { permAlone } from "../permAlone";

describe("permAlone", () => {
  it("aab returns a number", () => {
    expect(typeof permAlone("aab")).toBe("number");
  });
  it("aab returns 2", () => {
    expect(permAlone("aab")).toBe(2);
  });
  it("if all 3 chars are same return 0", () => {
    expect(permAlone("aaa")).toBe(0);
  });
  it("works for huuuge numbers", () => {
    expect(permAlone("abcdefa")).toBe(3600);
  });
  it("works for all same", () => {
    expect(permAlone("zzzzzzzz")).toBe(0);
  });
  it("works for 1 number", () => {
    expect(permAlone("a")).toBe(1);
  });
  it("works for aaab", () => {
    expect(permAlone("aaab")).toBe(0);
  });
  it("works for aaabb", () => {
    expect(permAlone("aaabb")).toBe(12);
  });
});
