const missingNumber = (nums) => {
  for (let i = 0; i <= nums.length; i++) {
    if (!nums.includes(i)) return i;
  }
};
