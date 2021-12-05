/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = function (s, indices) {
  return indices.reduce((acc, index, i) => {
    acc[index] = s[i];
    return acc;
  }, new Array(indices.length)).join("");
};