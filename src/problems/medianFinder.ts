class MedianFinder {
  private left: number[];
  private right: number[];

  constructor() {
    this.left = [];
    this.right = [];
  }

  addNum(num: number): void {
    // If left is empty or num is smaller than or equal to the largest in left
    if (this.left.length === 0 || num <= -this.left[0]) {
      //Negate num for max heap behaviour
      this.left.push(-num);
      this.heapifyUp(this.left, this.left.length - 1);
    } else {
      this.right.push(num);
      this.heapifyUp(this.right, this.right.length - 1);
    }
    // Balance the heaps
    this.balance();
  }
  findMedian(): number {
    const total = this.left.length + this.right.length;
    if (total % 2 === 0) {
      // Even number of elements
      return -this.left[0] + this.right[0] / 2;
    } else {
      //Odd number of elements, median is in left heap
      return -this.left[0];
    }
  }

  // Helper to maintain heap property when addging an element
  private heapifyUp(heap: number[], index: number): void {
    let parent = Math.floor((index - 1) / 2);
    while (index > 0 && heap[index] < heap[parent]) {
      //Swap
      [heap[index], heap[parent]] = [heap[parent], heap[index]];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  //Balance the heaps
  private balance(): void {
    while (this.right.length > this.left.length) {
      this.left.push(-this.right.shift()!);
      this.heapifyUp(this.left, this.left.length - 1);
    }

    while (this.left.length > this.right.length) {
      this.right.push(-this.left.shift()!);
      this.heapifyUp(this.right, this.right.length - 1);
    }
  }
}

// let obj = new MedianFinder();
// obj.addNum(1);
// obj.addNum(2);
// console.log(obj.findMedian()); // Should output 1.5
// obj.addNum(3);
// console.log(obj.findMedian()); // Should output 2
