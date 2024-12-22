// Using the preorder and inorder Array.
//Preorder visits the rootnode first then treverses left and right tree
//Inorder treverses left, visits root node then treverses right tree
//find the root node (first element in preorder list)
//use the root node value to find mid point of inorder list

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  // Base case: if either array is empty, no tree to build
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }

  // The first node in preorder traversal is the root
  let rootValue = preorder[0];
  let root = new TreeNode(rootValue);

  //Find the position of the root in the inorder traversal
  let mid = inorder.indexOf(rootValue);

  //Elements to the left of mid in inorder are left subtree
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  //Elements to the right of mid in inorder are left subtree
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

  return root;
}
