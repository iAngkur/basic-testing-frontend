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