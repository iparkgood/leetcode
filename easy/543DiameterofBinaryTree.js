const diameterOfBinaryTree = (root) => {
    const longestPath = (node) => {
        if (!node) return 0;

        const leftPath = longestPath(node.left);
        const rightPath = longestPath(node.right);

        diameter = Math.max(diameter, leftPath + rightPath);

        return Math.max(leftPath, rightPath) + 1;
    }
    let diameter = 0;
    longestPath(root);

    return diameter;
};