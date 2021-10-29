const isAnagram = (s, t) => {
  let hashMap = {};

  for (const val of s) {
    hashMap[val] = (hashMap[val] || 0) + 1;
  }

  for (const val of t) {
    if (hashMap[val]) hashMap[val]--;
    else return false;
  }

  return Object.values(hashMap).every((e) => e === 0);
};
