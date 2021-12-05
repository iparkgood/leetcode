/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = function (s, indices) {
  let output = new Array(indices.length);

  for (let i = 0; i < indices.length; i++) {
    output[indices[i]] = s[i];
  }

  return output.join("");
};