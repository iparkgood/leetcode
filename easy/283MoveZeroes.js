const moveZeroes = (nums) => {
  //nums = [0,1,0,3,12]
  //you must do this in-place without making a copy of the array

  let i = 0;
  let j = 0;
  let counter = 0;

  while (j < nums.length) {
    if (nums[j] !== 0) {
      nums[i++] = nums[j];
    } else {
      counter++;
    }
    j++
  }

  let n = nums.length - counter;

  while (n < nums.length) {
    nums[n++] = 0;
  }
};