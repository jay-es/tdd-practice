import { beforeEach, describe, expect, it } from "vitest";
import { Queue } from "./queue";

describe("queue", () => {
  let queue: Queue;
  beforeEach(() => {
    queue = new Queue();
  });

  it("can create queue", () => {
    expect(queue.isEmpty()).toBe(true);
  });

  it("after one add, is not empty", () => {
    queue.add(0);

    expect(queue.isEmpty()).toBe(false);
    expect(queue.getSize()).toBe(1);
  });

  it("after one add and one take, is empty", () => {
    queue.add(0);
    queue.take();

    expect(queue.isEmpty()).toBe(true);
    expect(queue.getSize()).toBe(0);
  });

  it("after two adds, size is two", () => {
    queue.add(0);
    queue.add(0);

    expect(queue.getSize()).toBe(2);
  });

  it("taking empty queue, throws Error", () => {
    expect(() => queue.take()).throws();
  });

  it("after adding x, will take x", () => {
    queue.add(99);
    queue.add(88);

    expect(queue.take()).toBe(99);
    expect(queue.take()).toBe(88);
  });
});
