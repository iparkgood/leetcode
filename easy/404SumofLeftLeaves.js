const sumOfLeftLeaves = (root, isLeft = false) => {
  if (!root) return 0;
  if (!root.left && !root.right) return isLeft ? root.val : 0;

  return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right);
};

/**
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 24
*/