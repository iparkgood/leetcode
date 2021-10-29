const singleNumber = (nums) => {
  let hashMap = {};

  for (const num of nums) {
    hashMap[num] = (hashMap[num] || 0) + 1;
  }
  for (const key in hashMap) {
    if (hashMap[key] === 1) return key;
  }
};
