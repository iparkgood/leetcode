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
 * @return {number[][]}
 */
const findLeaves = (root) => {
  const leaves = {};

  const findDepth = (node) => {
    if (!node) return 0;

    let depth = Math.max(findDepth(node.left), findDepth(node.right));

    if (leaves[depth]) {
      leaves[depth].push(node.val);
    } else {
      leaves[depth] = [node.val];
    }

    return ++depth;
  }
  findDepth(root);

  return Object.values(leaves);
};