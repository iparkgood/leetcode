/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
    let arr1 = nums1.slice(0, m);
    let i = 0;
    let j = 0;

    for (let p = 0; p < m + n; p++) {
        if (j >= n || (i < m && arr1[i] < nums2[j])) {
            nums1[p] = arr1[i++];
        } else {
            nums1[p] = nums2[j++];
        }
    }
};