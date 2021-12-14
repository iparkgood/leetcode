/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = (arr) => {
    const getMax = (subArr) => {
        if (!subArr.length) return -1;

        let max = subArr[0];

        for (let i = 0; i < subArr.length; i++) {
            max = max < subArr[i] ? subArr[i] : max;
        }

        return max;
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = getMax(arr.slice(i + 1));
    }

    return arr;
};