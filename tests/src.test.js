import { capitalize } from "../src/src";

test("capitalizes the word cat", () => {
    expect(capitalize("cat")).toBe("Cat");
})

test("capitalizes the word dog", () => {
    expect(capitalize("dog")).toBe("Dog");
})

test("capitalizes one letter word, a", () => {
    expect(capitalize("a")).toBe("A");
})