const intersect = (nums1, nums2) => {
  let hashMap = {};

  for (const num of nums1) {
    hashMap[num] = (hashMap[num] || 0) + 1;
  }

  return nums2.reduce((acc, num) => {
    if (hashMap[num]) {
      hashMap[num]--;
      acc.push(num);
    }
    return acc;
  }, []);
};

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));