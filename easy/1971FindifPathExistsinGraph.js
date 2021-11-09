const validPath = (n, edges, start, end) => {
  if (start === end) return true;

  let set = [...Array(n)].map((_, i) => i);

  const findPath = (vertex) => set[vertex] === vertex
    ? vertex
    : set[vertex] = findPath(set[vertex]);

  for (let edge of edges) {
    if (edge.includes(start) && edge.includes(end)) return true;
    const [u, v] = edge;
    set[findPath(u)] = set[findPath(v)];
  }

  return findPath(start) === findPath(end);
};
