const validPath = (n, edges, start, end) => {
  if (!edges.length) return true;

  let hashMap = {};
  let visited = {};

  edges.forEach(([u, v]) => {
    if (!hashMap[u]) hashMap[u] = [];
    if (!hashMap[v]) hashMap[v] = [];
    hashMap[u].push(v);
    hashMap[v].push(u);
  })

  const findPath = (hashMap, visited, start, end) => {
    visited[start] = true;

    if (hashMap[start].includes(end)) return true;

    for (const v of hashMap[start].filter(e => !visited[e])) {
      if (findPath(hashMap, visited, v, end)) return true;
    }

    return false;
  }

  return findPath(hashMap, visited, start, end);
};
