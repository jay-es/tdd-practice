import { describe, test, expect } from "vitest";
import { primeFactors } from "./primeFactors";

describe("素因数分解", () => {
  test("1を入力すると'1'を返す", () => {
    expect(primeFactors(1)).toBe("1");
  });
  test("2を入力すると'2'を返す", () => {
    expect(primeFactors(2)).toBe("2");
  });
  test("4を入力すると'2*2'を返す", () => {
    expect(primeFactors(4)).toBe("2*2");
  });
  test("12を入力すると'2*2*3'を返す", () => {
    expect(primeFactors(12)).toBe("2*2*3");
  });
  test("123456789を入力すると'3*3*3607*3803'を返す", () => {
    expect(primeFactors(123456789)).toBe("3*3*3607*3803");
  });
});
