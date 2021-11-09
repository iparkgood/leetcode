const rangeSumBST = (root, low, high) => {
    let sum = low + high;

    const traverse = (node) => {
        if (node.val > low && node.val < high) sum += node.val;
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }
    traverse(root);

    return sum;
};