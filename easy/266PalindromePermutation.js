const canPermutePalindrome = (s) => {
  let hashMap = {};

  for (let i = 0; i < s.length; i++) {
    hashMap[s[i]] = (hashMap[s[i]] || 0) + 1;
  }

  if (s.length % 2 === 0) {
    for (const prop in hashMap) {
      if (hashMap[prop] % 2 !== 0) return false;
    }
  } else {
    let oddCount = 0;
    for (const prop in hashMap) {
      if (hashMap[prop] % 2 !== 0) oddCount++;
    }
    if (oddCount !== 1) return false;
  }

  return true;
};
