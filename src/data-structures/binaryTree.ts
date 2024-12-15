//binary tree has a root node. A left or right.
// if there is one child then it goes to the left first

class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(value?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.value = value === undefined ? 0 : value;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function invertTree(root: TreeNode | null): TreeNode | null {
  //base case - return null if root is null
  if (root === null) {
    return null;
  }
  //swap left and right
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  //recursively call inverttree on left and right nodes
  invertTree(root.left);
  invertTree(root.right);

  return root;
}

function maxDepth(root: TreeNode | null): number {
  //base case - return 0 if root is null
  if (root === null) {
    return 0;
  }

  //recursively call maxDepth of left and right
  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

  //return the maximum of the two depth but add one so that null returning 0 is taken care of
  return Math.max(leftDepth, rightDepth) + 1;
}
