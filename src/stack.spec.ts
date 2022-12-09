import { describe, it, expect, beforeEach } from "vitest";
import { Stack, Underflow } from "./stack";

describe("Stack", () => {
  let stack: Stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it("can create stack", () => {
    expect(stack.isEmpty()).toBe(true);
  });

  it("after one push, is not empty", () => {
    stack.push(0);

    expect(stack.isEmpty()).toBe(false);
    expect(stack.getSize()).toBe(1);
  });

  it("after one push and one pop, is empty", () => {
    stack.push(0);
    stack.pop();

    expect(stack.isEmpty()).toBe(true);
    expect(stack.getSize()).toBe(0);
  });

  it("after two pushes, size is two", () => {
    stack.push(0);
    stack.push(0);

    expect(stack.getSize()).toBe(2);
  });

  it("popping empty stack, throws underflow", () => {
    expect(() => stack.pop()).toThrow(Underflow);
  });

  it("after pushing x, will pop x", () => {
    stack.push(99);
    stack.push(88);

    expect(stack.pop()).toBe(88);
    expect(stack.pop()).toBe(99);
  });
});
