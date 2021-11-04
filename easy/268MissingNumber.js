const missingNumber = (nums) => {
  let hashMap = {};

  for (const num of nums) {
    hashMap[num] = (hashMap[num] || 0) + 1;
  }

  for (let i = 0; i <= nums.length; i++) {
    if (!hashMap[i]) return i;
  }
};
