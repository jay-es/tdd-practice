export class Stack {
  #elements: number[] = [];
  #size = 0;

  isEmpty(): boolean {
    return this.#size === 0;
  }

  push(element: number): void {
    this.#elements[this.#size++] = element;
  }

  pop(): number {
    if (this.#size === 0) {
      throw new Underflow();
    }

    return this.#elements[--this.#size] ?? 0;
  }

  getSize(): number {
    return this.#size;
  }
}

export class Underflow extends Error {}
