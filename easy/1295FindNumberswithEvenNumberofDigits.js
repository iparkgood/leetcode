/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = (nums) => {
  let count = 0;

  for (const num of nums) {
    if (num.toString().length % 2 === 0) count++;
  }

  return count;
};