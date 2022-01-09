/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = (chars) => {
  if (chars.length <= 1) return chars.length;

  let j = 0;
  let counter = 1;
  let current = chars[0];

  for (let i = 1; i <= chars.length; i++) {
    if (chars[i] === current) {
      counter++;
    } else {
      chars[j] = current;

      if (counter > 1) {
        const c = counter.toString();
        for (let k = 0; k < c.length; k++) {
          chars[++j] = c[k];
        }
      }
      j++;
      current = chars[i];
      counter = 1;
    }
  }

  return j;
};