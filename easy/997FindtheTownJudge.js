const findJudge = (n, trust) => {
  if (trust.length < n - 1) return -1;

  let trustCounts = new Array(n + 1).fill(0);

  trust.forEach(([a, b]) => {
    trustCounts[a]--;
    trustCounts[b]++;
  })

  for (let i = 1; i < trustCounts.length; i++) {
    if (trustCounts[i] === n - 1) return i;
  }

  return -1;
}
