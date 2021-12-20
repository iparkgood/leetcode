/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];

    let res = [[1]]

    for (let i = 1; i < numRows; i++) {
        let row = [1];
        for (let j = 1; j < i; j++) {
            row.push(res[i - 1][j - 1] + res[i - 1][j]);
        }
        row.push(1);
        res.push(row);
    }

    return res;
};