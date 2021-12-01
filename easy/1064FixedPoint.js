/**
 * @param {number[]} arr
 * @return {number}
 */
const fixedPoint = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) return i;
  }
  return -1;
};