/**
 * @param {string[]} ops
 * @return {number}
 */
const calPoints = (ops) => {
  let result = [];

  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === "D") result.push(result[result.length - 1] * 2);
    else if (ops[i] === "+") result.push(result[result.length - 2] + result[result.length - 1]);
    else if (ops[i] === "C") result.pop();
    else result.push(+ops[i]);
  }

  return result.reduce((acc, num) => acc + num);
};