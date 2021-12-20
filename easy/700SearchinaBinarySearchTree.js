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
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = (root, val) => {
    const dfs = (node) => {
        if (!node) return null;
        if (node.val === val) return node;
        return node.val > val ? dfs(node.left) : dfs(node.right);
    }
    return dfs(root);
};