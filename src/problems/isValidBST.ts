function isVaildBST(root: TreeNode | null): boolean {
  //recursive helper function
  function validate(
    node: TreeNode | null,
    min: number | null,
    max: number | null
  ): boolean {
    // Base case: enpty tree is a valid BST
    if (node === null) return true;

    //If node's value value is out of the valid range, it's not a BST
    if (
      (min !== null && node.value <= min) ||
      (max !== null && node.value >= max)
    )
      return false;

    //Recursively check left and right subtrees with updated bounds
    return (
      validate(node.left, min, node.value) &&
      validate(node.right, node.value, max)
    );
  }

  //Start validation from root with no initial bounds
  return validate(root, null, null);
}
