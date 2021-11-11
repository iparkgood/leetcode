const findMissingRanges = (nums, lower, upper) => {
  const formatRange = (lower, upper) => {
    if (lower === upper) {
      return lower.toString();
    }
    return lower + "->" + upper;
  }

  let result = [];
  let prev = lower - 1;

  for (let i = 0; i <= nums.length; i++) {
    const curr = (i < nums.length) ? nums[i] : upper + 1;
    if (prev + 1 <= curr - 1) {
      result.push(formatRange(prev + 1, curr - 1));
    }
    prev = curr;
  }

  return result;
};