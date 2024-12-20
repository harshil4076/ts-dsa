//use queue to run BFS on the root node
//use a array or list to store the node values
function levelOrder(root: TreeNode | null): number[][] {
  let result: number[][] = [];
  let queue: [TreeNode | null] = [root];

  while (queue.length > 0) {
    let levelSize = queue.length;
    let currentLevel: number[] = [];

    //for loop to treverse the nodes

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      if (node !== null) {
        currentLevel.push(node!.value);
        if (node!.left !== null) queue.push(node!.left);
        if (node!.right !== null) queue.push(node!.right);
      }
    }
    result.push(currentLevel);
  }
  return result;
}
