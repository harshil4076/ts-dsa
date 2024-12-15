class PriorityQueue<T> {
  private heap: { value: T; priority: number }[] = [];

  private getParentIndex(i: number): number {
    return Math.floor((i - 1) / 2);
  }
  private getLeftCHildIndex(i: number): number {
    return 2 * i + 1;
  }
  private getRightChildIndex(i: number): number {
    return 2 * i + 2;
  }

  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(value: T, priority: number): void {
    this.heap.push({ value, priority });
    this.heapifyUp();
  }

  private heapifyUp(): void {
    let index = this.heap.length - 1;

    while (
      index > 0 &&
      this.heap[index].priority < this.heap[this.getParentIndex(index)].priority
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  extractMin(): T | null {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop()!.value;

    const min = this.heap[0].value;
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown();

    return min;
  }
  private heapifyDown(): void {
    let index = 0;

    while (this.getLeftCHildIndex(index) < this.heap.length) {
      let smallerCHildIndex = this.getLeftCHildIndex(index);

      if (
        this.getRightChildIndex(index) < this.heap.length &&
        this.heap[this.getRightChildIndex(index)].priority <
          this.heap[smallerCHildIndex].priority
      ) {
        smallerCHildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index].priority <= this.heap[smallerCHildIndex].priority)
        break;

      this.swap(index, smallerCHildIndex);
      index = smallerCHildIndex;
    }
  }
  peek(): T | null {
    return this.heap.length === 0 ? null : this.heap[0].value;
  }
}
// Example Usage:
const pq = new PriorityQueue<string>();
pq.insert("Task A", 3);
pq.insert("Task B", 1);
pq.insert("Task C", 2);

console.log(pq.peek()); // "Task B"
console.log(pq.extractMin()); // "Task B"
console.log(pq.extractMin()); // "Task C"
