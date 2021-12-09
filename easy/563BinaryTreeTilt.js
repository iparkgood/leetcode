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
const findTilt = (root) => {
  let total = 0;

  const dfs = (node) => {
    if (node) {
      const left = dfs(node.left);
      const right = dfs(node.right);
      const diff = Math.abs(left - right);
      total += diff;

      return node.val + left + right;
    }

    return 0;
  }
  dfs(root);

  return total;
};