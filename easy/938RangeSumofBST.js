const rangeSumBST = (root, low, high) => {
    let sum = low + high;

    const sumUp = (node) => {
        if (node.val > low && node.val < high) sum += node.val;
        if (node.left) sumUp(node.left);
        if (node.right) sumUp(node.right);
    }
    sumUp(root);

    return sum;
};