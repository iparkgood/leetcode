const reverseBits = (n) => {
  let bits = new Array(32).fill(0);
  let idx = 1;

  while (n) {
    bits[32 - idx++] = n % 2;
    n = Math.floor(n / 2);
  }

  return parseInt(bits.reverse().join(""), 2);
};