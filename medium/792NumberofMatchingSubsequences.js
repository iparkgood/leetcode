/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
const numMatchingSubseq = (s, words) => {
  let count = 0;

  for (const w of words) {
    let sPointer = 0;
    let wPointer = 0;
    let same = 0;

    while (sPointer < s.length && wPointer < w.length) {
      if (s[sPointer] !== w[wPointer]) {
        sPointer++;
      } else {
        sPointer++;
        wPointer++;
        same++;
      }
    }
    if (same === w.length) {
      count++;
    }
  }

  return count;
};