const intersect = (nums1, nums2) => {
  let intersection = [];
  let hashMap = {};

  for (const num of nums1) {
    hashMap[num] = (hashMap[num] || 0) + 1;
  }

  for (const num of nums2) {
    if (hashMap[num]) {
      hashMap[num]--;
      intersection.push(num);
    }
  }

  return intersection;
};

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));