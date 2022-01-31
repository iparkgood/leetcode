/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = (accounts) => {
    return Math.max(...accounts.map((account) => account.reduce((a, b) => a + b)));
};