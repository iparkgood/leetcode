/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  /**
   * input : [7,1,5,3,6,4]
   * output : 5
  */
  let min = prices[0];
  let diff = 0;

  for (let i = 1; i < prices.length; i++) {
    min = min > prices[i] ? prices[i] : min;
    diff = diff < prices[i] - min ? prices[i] - min : diff;
  }

  return diff;
};