import { MinHeap } from "../data-structures/heap";

describe("MinHeap", () => {
  it("should insert elements and maintain heap property", () => {
    const heap = new MinHeap();
    heap.insert(10);
    heap.insert(5);
    heap.insert(20);
    heap.insert(1);
    expect(heap.extractMin()).toBe(1);
    expect(heap.extractMin()).toBe(5);
  });

  it("should return null when extracting from an empty heap", () => {
    const heap = new MinHeap();
    expect(heap.extractMin()).toBeNull();
  });
});
