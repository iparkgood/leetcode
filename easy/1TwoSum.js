/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const hashMap = {};

    for (let i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]] >= 0) return [hashMap[nums[i]], i];

        hashMap[target - nums[i]] = i;
    }
};