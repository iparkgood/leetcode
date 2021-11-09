const isSymmetric = (root) => {
    const compare = (t1, t2) => {
        if (t1 === null && t2 === null) return true;
        if (t1 === null || t2 === null) return false;

        return (t1.val === t2.val) && compare(t1.right, t2.left) && compare(t1.left, t2.right);
    }

    return compare(root, root);
};