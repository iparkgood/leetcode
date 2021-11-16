const canFinish = (numCourses, prerequisites) => {
  if (!prerequisites.length) return true;

  let hashMap = {};
  let visited = {};
  let visiting = {};

  prerequisites.forEach(([course, preReq]) => {
    if (!hashMap[preReq]) hashMap[preReq] = [course];
    else hashMap[preReq].push(course);
  })

  const dfs = (node) => {
    visiting[node] = true;

    if (hashMap[node]) {
      const children = hashMap[node];

      for (const child of children) {
        if (visited[child]) continue;
        if (visiting[child]) return true;
        if (dfs(child)) return true;
      }
    }
    delete visiting[node];
    visited[node] = true;

    return false;
  }

  for (const [course, preReq] of prerequisites) {
    if (dfs(preReq)) return false;
  }

  return true;
};