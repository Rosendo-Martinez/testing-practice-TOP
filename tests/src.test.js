import { capitalize, reverseString, calculator, analyzeArray } from "../src/src";

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

test("calculator obj can add", () => {
    expect(calculator.add(49,51)).toBe(100);
})

test("calculator obj can subtract", () => {
    expect(calculator.subtract(49,51)).toBe(-2);
})

test("calculator obj can divide", () => {
    expect(calculator.divide(80,4)).toBe(20);
})

test("calculator obj can multiply", () => {
    expect(calculator.multiply(7,4)).toBe(28);
})

test("analyzeArray returns input array statistics", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})