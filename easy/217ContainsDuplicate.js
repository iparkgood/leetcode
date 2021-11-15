const containsDuplicate = (nums) => {
  let hashMap = {};

  for (const val of nums) {
    if (hashMap[val]) return true;
    hashMap[val] = 1;
  }

  return false;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); //true
console.log(containsDuplicate([1, 2, 3, 4])); //false