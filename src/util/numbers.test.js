import { expect, it } from "vitest";
import { transformToNumber } from "./numbers";

it("should yield a number if numeric string value is provided", () => {
  expect(transformToNumber('23')).toBe(23);
})

it("should yield 0 if null, empty string, false are provided", () => {
  expect(transformToNumber(null)).toBe(0);
  expect(transformToNumber("")).toBe(0);
  expect(transformToNumber(false)).toBe(0);
})

it("should yield NaN if undefined or nothing or a string is provided", () => {
  expect(transformToNumber()).toBeNaN();
  expect(transformToNumber(undefined)).toBeNaN();
  expect(transformToNumber("asdfdsf")).toBeNaN();
  expect(transformToNumber({})).toBeNaN();
})
