/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if (!needle) return 0;

  let j = 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[j]) {
      if (needle === haystack.slice(i, i + needle.length)) {
        return i;
      } else {
        j = 0;
      }
    }
  }

  return -1;
};