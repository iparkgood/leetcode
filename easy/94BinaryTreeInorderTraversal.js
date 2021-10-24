const inorderTraversal = (root) => {
    //Left - Root - Right
    let result = [];

    const traverse = (node) => {
        if(node) {
            if(node.left) traverse(node.left);
            result.push(node.val);
            if(node.right) traverse(node.right); 
        }
    }
    traverse(root);

    return result;
}