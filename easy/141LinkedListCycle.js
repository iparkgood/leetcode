const hasCycle = (head) => {
  let visited = [];
  let current = head;

  while (current) {
    if (visited.includes(current)) return true;
    visited.push(current);
    current = current.next;
  }

  return false;
};
