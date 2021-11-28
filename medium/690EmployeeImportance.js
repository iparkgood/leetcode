/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
const GetImportance = (employees, id) => {
  const employee = employees.find((employee) => employee.id === id);

  let total = employee.importance;

  const dfs = (subId) => {
    if (!subId) return 0;

    const sub = employees.find((employee) => employee.id === subId);

    total += sub.importance;

    if (sub.subordinates.length) {
      sub.subordinates.forEach((subId) => dfs(subId))
    }
  }
  if (employee.subordinates.length) {
    employee.subordinates.forEach((subId) => dfs(subId))
  }

  return total;
};