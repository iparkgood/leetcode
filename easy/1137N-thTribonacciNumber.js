/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = (n) => {
  let cache = [0, 1, 1];
  if (n === 0) return cache[0];
  if (n === 1 || n === 2) return cache[1];

  for (let i = 3; i <= n; i++) {
    if (!cache[i]) cache.push(cache[i - 1] + cache[i - 2] + cache[i - 3]);
  }

  return cache[n];
};