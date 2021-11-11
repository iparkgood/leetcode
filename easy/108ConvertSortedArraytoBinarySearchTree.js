const sortedArrayToBST = (nums) => {
  //[0, 1, 2, 3, 4, 5]
  //every node to the left of a parent node is always less than the parent
  //every node to the right of a parent node is always greater than the parent

  const helper = (left, right) => {
    if (left > right) return null;

    const mid = Math.floor((left + right) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = helper(left, mid - 1);
    root.right = helper(mid + 1, right);

    return root;
  }

  return helper(0, nums.length - 1)
};