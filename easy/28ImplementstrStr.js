/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if (!needle) return 0;

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (needle === haystack.slice(i, i + needle.length)) {
      return i;
    }
  }

  return -1;
};