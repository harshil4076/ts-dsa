import { MinHeap } from "./data-structures/heap";

const heap = new MinHeap();
heap.insert(10);
heap.insert(5);
heap.insert(20);
heap.insert(1);
console.log(heap.extractMin()); // 1
console.log(heap.extractMin()); // 5
