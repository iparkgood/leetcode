/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const hashMap = {};

    for (const char of magazine) {
        hashMap[char] = (hashMap[char] || 0) + 1;
    }

    for (const char of ransomNote) {
        if (!hashMap[char]) return false;
        hashMap[char]--;
    }
    return true;
};