const invertTree = (root) => {
  const switchLeftRight = (node) => {
    if (node) {
      if (!node.left && !node.right) return;

      [node.left, node.right] = [node.right, node.left];

      if (node.left) switchLeftRight(node.left);
      if (node.right) switchLeftRight(node.right);
    }
  };
  switchLeftRight(root);

  return root;
};
