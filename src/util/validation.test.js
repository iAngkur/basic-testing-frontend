import { describe, expect, it } from "vitest"
import { validateNumber, validateStringNotEmpty } from "./validation";

describe('validation', () => {
  describe("validateStringNotEmpty", () => {
    it("should throw an error if an empty string is provided", () => {
      const input = '';
      const validationFn = () => validateStringNotEmpty(input);

      expect(validationFn).toThrow(/must not be empty/);

      const input2 = "    ";
      const validationFn2 = () => validateStringNotEmpty(input2);
      expect(validationFn2).toThrow(/must not be empty/);
    });

    it("should throw an error if non string is provided", () => {
      const input = 1;
      const validationFn = () => validateStringNotEmpty(input);

      expect(validationFn).toThrow();
    })
  });

  describe("validateNumber", () => {
    it("should throw an error if NaN is provided", () => {
      const validationFn = () => validateNumber(NaN);
      expect(validationFn).toThrow()
    })
    it("should throw an error if non number is provided", () => {
      const validationFn = () => validateNumber(" ");
      expect(validationFn).toThrow()
    })
  });
})