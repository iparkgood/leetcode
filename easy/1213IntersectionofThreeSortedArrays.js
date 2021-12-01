/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
const arraysIntersection = (arr1, arr2, arr3) => {
    const arr = [...arr1, ...arr2, ...arr3];
    const hashMap = {};
    let res = [];

    for (const num of arr) {
        hashMap[num] = (hashMap[num] || 0) + 1;
    }

    for (const key in hashMap) {
        if (hashMap[key] === 3) res.push(+key);
    }

    return res;
};