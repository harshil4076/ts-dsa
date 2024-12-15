class GraphMatrix {
  private vertices: string[];
  private matrix: number[][];

  constructor(vertices: string[]) {
    this.vertices = vertices;
    this.matrix = Array(vertices.length)
      .fill(0)
      .map(() => Array(vertices.length).fill(0));
  }

  addVertex(vertex: string): void {
    if (this.vertices.includes(vertex)) {
      throw new Error("Vertex already exists");
    }
    //add the new vertex
    this.vertices.push(vertex);

    //Resize the matrix: Add a new row and column
    this.matrix.forEach((row) => row.push(0)); //add a column
    this.matrix.push(Array(this.vertices.length).fill(0)); //add a row
  }
  addEdge(vertex1: string, vertex2: string, isDirected: boolean = false): void {
    const index1 = this.vertices.indexOf(vertex1);
    const index2 = this.vertices.indexOf(vertex2);

    if (index1 === -1 || index2 === -1) {
      throw new Error("Vertex not found");
    }

    this.matrix[index1][index2] = 1;
    if (!isDirected) {
      this.matrix[index2][index1] = 1;
    }
  }

  display(): void {
    console.log(" " + this.vertices.join(" "));
    for (let i = 0; i < this.matrix.length; i++) {
      console.log(this.vertices[i] + " " + this.matrix[i].join(" "));
    }
  }
}

// Example Usage
const graphMatrix = new GraphMatrix(["C", "A"]);
graphMatrix.addVertex("A");
graphMatrix.addVertex("B");
graphMatrix.addVertex("C");
graphMatrix.addEdge("A", "B");
graphMatrix.addEdge("A", "C", true); // Directed edge
graphMatrix.display();
