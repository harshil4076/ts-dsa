export class MinHeap {
  private heap: number[] = [];
  private getParentIndex(i: number): number {
    return Math.floor((i - 1) / 2);
  }
  private getLeftChildIndex(i: number): number {
    return 2 * i + 1;
  }
  private getRightCHildIndex(i: number): number {
    return 2 * 1 + 2;
  }
  private swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(value: number): void {
    this.heap.push(value);
    this.heapifyUp();
  }

  private heapifyUp(): void {
    let index = this.heap.length - 1;
    while (
      index > 0 &&
      this.heap[index] < this.heap[this.getParentIndex(index)]
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  extractMin(): number | null {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop()!;
    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown();
    return min;
  }
  private heapifyDown(): void {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerCHildIndex = this.getLeftChildIndex(index);
      if (
        this.getRightCHildIndex(index) < this.heap.length &&
        this.heap[this.getRightCHildIndex(index)] < this.heap[smallerCHildIndex]
      ) {
        smallerCHildIndex = this.getRightCHildIndex(index);
      }
      if (this.heap[index] <= this.heap[smallerCHildIndex]) break;
      this.swap(index, smallerCHildIndex);
      index = smallerCHildIndex;
    }
  }
}
