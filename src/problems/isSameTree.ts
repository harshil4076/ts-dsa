//Dfs
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  //check if both are null return true
  if (p === null && q === null) {
    return true;
  }

  //check if one is null return false
  if (p === null || q === null) {
    return false;
  }
  //check if value does not match return false
  if (p.value !== q.value) {
    return false;
  }
  // use recursion to call the function on left and right
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

//BFS
//We use two queues to store the trees
//then loop through the queues until the queues have elements
//start with dequeing the nodes then writing the check condition
// in the end enque the left and right nodes so that the loop continues until there is left and right nodes.
// return true in the end so that if the code runs till the end that means the trees are same
function isSameTreeBFS(p: TreeNode | null, q: TreeNode | null): boolean {
  //check if both are null return true
  if (p === null && q === null) {
    return true;
  }

  //check if one is null return false
  if (p === null || q === null) {
    return false;
  }
  //define queues
  let queueP: (TreeNode | null)[] = [p];
  let queueQ: (TreeNode | null)[] = [q];

  // run the loop
  while (queueP.length > 0 && queueQ.length > 0) {
    let nodep = queueP.shift()!;
    let nodeQ = queueQ.shift()!;

    if (nodep === null && nodeQ === null) continue;
    if (nodep === null || nodeQ === null) return false;
    if (nodep?.value !== nodeQ?.value) return false;

    //enque left children
    queueP.push(nodep?.left);
    queueQ.push(nodeQ?.left);

    //enque right children
    queueP.push(nodep?.right);
    queueQ.push(nodeQ?.right);
  }
  return true;
}

let p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(3);

// Creating tree q:
let q = new TreeNode(1);
q.left = new TreeNode(2);
q.right = new TreeNode(3);

// Check if trees are the same using BFS
let resultBFS = isSameTreeBFS(p, q);
console.log(resultBFS); // Should output true

//use the same tree helper with recursion
function isSubTree(s: TreeNode | null, t: TreeNode | null): boolean {
  if (s === null) return false;
  //use the sameTree function to check
  if (isSameTree(s, t)) return true;
  //recursively call the function and check for subtree
  return isSubTree(s?.left, t) || isSubTree(s?.right, t);
}
