/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = (arr) => {
    let currentMax = arr[arr.length - 1];
    arr[arr.length - 1] = -1;

    for (let i = arr.length - 2; i >= 0; i--) {
        const current = arr[i];
        arr[i] = currentMax;
        currentMax = currentMax < current ? current : currentMax;
    }

    return arr;
};