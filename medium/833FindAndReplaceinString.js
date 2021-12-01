/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
const findReplaceString = (s, indices, sources, targets) => {
  let letters = s.split("");

  indices.forEach((indexS, i) => {
    if (s.substr(indices[i], sources[i].length) === sources[i]) {
      letters[indexS] = targets[i];

      let replaces = sources[i].length - 1;

      while (replaces > 0) {
        indexS += 1;
        letters[indexS] = "";
        replaces -= 1;
      }
    }
  })

  return letters.join("");
};