class Graph<T> {
  private adjacencyList: Map<T, T[]>;

  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex: T): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1: T, vertex2: T, isDirected: boolean = false): void {
    this.adjacencyList.get(vertex1)?.push(vertex2);
    if (!isDirected) {
      this.adjacencyList.get(vertex2)?.push(vertex1);
    }
  }
  getAdjacencyList(): Map<T, T[]> {
    return this.adjacencyList;
  }

  display(): void {
    for (const [vertex, edges] of this.adjacencyList.entries()) {
      console.log(`${vertex} -> ${edges.join(", ")}`);
    }
  }
}
// Example Usage
const graph = new Graph<string>();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C", true); // Directed edge
graph.display();
