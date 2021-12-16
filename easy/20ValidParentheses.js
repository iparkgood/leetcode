/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  let stack = [];
  let hashMap = {
    "(": ")",
    "{": "}",
    "[": "]"
  };

  for (let i = 0; i < s.length; i++) {
    if (hashMap[s[i]]) stack.push(hashMap[s[i]]);
    else if (s[i] !== stack.pop()) return false;
  }

  return stack.length === 0;
};