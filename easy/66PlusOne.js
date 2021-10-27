const plusOne = (digits) => {
  const str = digits.join("");
  const numbers = BigInt(str);
  const increment = numbers + 1n;

  return increment.toString().split("");
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
console.log(plusOne([9]));
console.log(plusOne([9, 9]));
console.log(plusOne([8, 9, 9, 9]));
