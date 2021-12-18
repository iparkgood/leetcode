/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = (jewels, stones) => {
    const hashMap = {};
    let count = 0;

    for (const stone of stones) {
        hashMap[stone] = (hashMap[stone] || 0) + 1;
    }
    for (const jewel of jewels) {
        if (hashMap[jewel]) count += hashMap[jewel]
    }

    return count;
};