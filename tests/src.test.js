import { capitalize, reverseString } from "../src/src";

test("capitalizes the word cat", () => {
    expect(capitalize("cat")).toBe("Cat");
})

test("capitalizes the word dog", () => {
    expect(capitalize("dog")).toBe("Dog");
})

test("capitalizes one letter word, a", () => {
    expect(capitalize("a")).toBe("A");
})

test("reverse string abc to cba", () => {
    expect(reverseString("abc")).toBe("cba");
})

test("reverse string McDonald to dlanoDcM", () => {
    expect(reverseString("McDonald")).toBe("dlanoDcM");
})


test("reverse string a to a", () => {
    expect(reverseString("a")).toBe("a");
})
