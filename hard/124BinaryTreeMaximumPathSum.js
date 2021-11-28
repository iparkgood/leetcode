/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxPathSum = (root) => {
  let maxSum = root.val;

  const maxGain = (node) => {
    if (!node) return 0;

    let left = Math.max(maxGain(node.left), 0);
    let right = Math.max(maxGain(node.right), 0);

    maxSum = Math.max(maxSum, left + right + node.val);

    return node.val + Math.max(left, right);
  }
  maxGain(root);

  return maxSum;
};