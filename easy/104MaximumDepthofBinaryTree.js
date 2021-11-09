const maxDepth = (root) => {
  //BFS
  let queue = [];
  let depth = 0;

  if (root) {
    depth++;
    queue.push(root);
  }

  while (queue.length) {
    //queue.pop();
    //check if a node has children in the queue
    //yes - depth++ , push children into queue
    const current = queue.pop();

    if (current.left || current.right) {
      depth++;
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }

  return depth;
};