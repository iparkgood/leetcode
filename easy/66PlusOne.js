const plusOne = (digits) => {
  digits = digits.map((d) => +d);

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      break;
    } else {
      digits[i] += 1;
      const first = +digits[i].toString().slice(0, 1);
      digits[i] = 0;

      if (i === 0) {
        digits.unshift(first);
      }
    }
  }

  return digits;
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
console.log(plusOne([9]));
console.log(plusOne([9, 9]));
console.log(plusOne([8, 9, 9, 9]));