/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums) => {
  let temp = 0;
  let max = 0;

  for (const num of nums) {
    if (num === 1) {
      temp++;
    } else {
      max = Math.max(max, temp);
      temp = 0;
    }
  }

  return Math.max(max, temp);
};