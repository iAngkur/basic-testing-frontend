import { expect, test } from "vitest"
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