const findOrder = (numCourses, prerequisites) => {
  let order = [];
  let inDegree = new Array(numCourses).fill(0);
  let graph = {};

  for (const [u, v] of prerequisites) {
    graph[v] ? graph[v].push(u) : graph[v] = [u];
    inDegree[u]++;
  }

  let queue = inDegree.map((_, idx) => idx).filter((el) => inDegree[el] === 0)

  while (queue.length) {
    const v = queue.shift();

    if (graph[v]) {
      for (const u of graph[v]) {
        inDegree[u]--;
        if (inDegree[u] === 0) queue.push(u);
      }
    }
    order.push(v);
  }

  return order.length === numCourses ? order : [];
};