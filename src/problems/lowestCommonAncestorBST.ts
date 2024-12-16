//recursive appeoach
//base case if root is null or it is one of the nodes return it
//if p and q are less than root then LCA is in left subtree
//recursively call the function on left
//if p and q are greater than root then LCA is in right sub tree
//recursively call the function on right
//last else returns root

function lowerstCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === null || root === p || root === q) return root;
  if (p!.value < root.value && q!.value < root.value) {
    return lowerstCommonAncestor(root.left, p, q);
  }
  if (p!.value > root.value && q!.value > root.value) {
    return lowerstCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
}
