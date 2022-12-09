export class Queue {
  #addingIndex = 0;
  #takingIndex = 0;
  #elements: number[] = [];

  isEmpty(): boolean {
    return this.getSize() === 0;
  }

  add(element: number): void {
    this.#elements[this.#addingIndex++] = element;
  }

  take(): number {
    if (this.isEmpty()) {
      throw new Error();
    }

    return this.#elements[this.#takingIndex++] ?? -1;
  }

  getSize(): number {
    return this.#addingIndex - this.#takingIndex;
  }
}
