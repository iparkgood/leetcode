const sumOfLeftLeaves = (root) => {
  let sum = 0;

  const traverse = (node) => {
    if (!node) return 0;

    if (node.left) {
      traverse(node.left);
      if (!node.left.left && !node.left.right) {
        sum += node.left.val;
      }
    }
    if (node.right) {
      traverse(node.right);
    }
  }
  if (root) traverse(root);

  return sum;
};


/**
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 24
*/