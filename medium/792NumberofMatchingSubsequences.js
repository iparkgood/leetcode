/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
const numMatchingSubseq = (s, words) => {
  let sPointer = 0;
  let wPointer = 0;
  let count = 0;

  for (const w of words) {
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
    sPointer = 0;
    wPointer = 0;
  }

  return count;
};