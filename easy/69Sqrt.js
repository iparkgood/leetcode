const mySqrt = (x) => {
  if (x < 2) return x;

  let left = 2;
  let right = x / 2;
  let num, pivot;

  while (left <= right) {
    pivot = Math.floor((left + right) / 2);
    num = pivot * pivot;

    if (num > x) right = pivot - 1;
    else if (num < x) left = pivot + 1;
    else return pivot;
  }

  return Math.floor(right);
};
