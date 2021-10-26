const canPermutePalindrome = (s) => {
  let hashMap = {};

  for (let i = 0; i < s.length; i++) {
    if (hashMap.hasOwnProperty(s[i])) {
      delete hashMap[s[i]];
    } else {
      hashMap[s[i]] = 1;
    }
  }

  return Object.values(hashMap) <= 1 ? true : false;
};
