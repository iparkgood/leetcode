const isSymmetric = (root) => {
    //one root && empty left && empty right - true
    // if (root && !root.left && !root.right) return true;

    // empty left || empty right
    // if (root.left.val !== root.right.val) return false;

    // let leftTree = root.left;
    // let rightTree = root.right;

    // const compare = (leftTree, rightTree) => {
    //if (leftTree && rightTree) {
    // if (leftTree.left && leftTree.right && rightTree.left && rightTree.right) {
    //if (leftTree.left.val === rightTree.right.val && leftTree.right.val === rightTree.left.val) {
    // return (leftTree.left.val === rightTree.right.val && leftTree.right.val === rightTree.left.val) && compare(leftTree.left, leftTree.right) && compare(rightTree.left, rightTree.right);
    //} else {
    //return false;
    //}
    // }
    //else {
    //     return null;
    // }
    //}
    //else {
    //     return null;
    // }
    //LeftRight(leftTree.left, leftTree.right) && LeftRight(rightTree.left, rightTree.right);

    // }

    const compare = (t1, t2) => {
        if (t1 === null && t2 === null) return true;
        if (t1 === null || t2 === null) return false;

        return (t1.val === t2.val) && compare(t1.right, t2.left) && compare(t1.left, t2.right);
    }

    return compare(root, root);
};