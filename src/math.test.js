import { expect, it, test } from "vitest"
import { add } from "./math"


test("add numbers in an array", () => {
  // expect(add()).toBe(0);
  // expect(add("")).toBe(0);
  // expect(add("fgdfg")).toBe(0);
  // expect(add([])).toBe(0);
  // expect(add([1, 2, 3, 4])).toBe(10);

  // Arrange
  const numbers = [1, 2];
  // Act
  const result = add(numbers);
  // Assert
  const expectedResult = numbers.reduce((sum, val) => sum + val, 0);
  expect(result).toBe(expectedResult);
})

it("should yield NaN if at least one invalid number is provided", () => {
  const numbers = [1, 2, "dfa", 3];

  const result = add(numbers);

  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
  const numbers = ['1', '2'];

  const result = add(numbers);

  expect(result).toBe(3);
})

it("should yield 0 if an empty array is provided", () => {
  const numbers = [];
  const result = add(numbers);
  expect(result).toBe(0);
})

it("should throw an error if provided with multiple arguments instead of an array", () => {
  const resultFn = () => {
    add(1, 2, 3, 4);
  }

  expect(resultFn).toThrow(/is not iterable/);
})

it("should throw an error if no value is passed into the function", () => {
  const resultFn = () => {
    add();
  }

  expect(resultFn).toThrow();
})