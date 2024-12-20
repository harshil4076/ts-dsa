function kthsmallest(root: TreeNode | null, k: number): number {
  let count: number = 0;
  let result: number | undefined;

  //Helper function to perform inorder treversal
  function inOrder(node: TreeNode | null): void {
    if (node === null || result !== undefined) return;

    //traverse left
    inOrder(node.left);

    //Process current node
    count++;
    if (count === k) {
      result = node.value;
      return;
    }

    //traverse right
    inOrder(node.right);
  }

  if (result !== undefined) return result;

  throw new Error("k is larger than the number of nodes in the BST");
}
