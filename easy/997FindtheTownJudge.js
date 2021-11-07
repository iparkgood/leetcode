const findJudge = (n, trust) => {
  //create a hash table
  //find a number that the hash table doesn't contain as a key - loop using n 
  //check if all other values have the number as their value
    //yes - return the number as a judge
    //no - return -1

  if (!trust.length && n >= 2) return -1;

  let hashMap = {};
  let judge = 0;

  trust.forEach(([a, b]) => {
    if (!hashMap[a]) {
      hashMap[a] = [b];
    } else {
      hashMap[a].push(b);
    }
  })

  for (let i = 1; i <= n; i++) {
    if (!hashMap[i]) judge = i;
  }

  if (judge === 0) return -1;

  for (const key in hashMap) {
    if (!hashMap[key].includes(judge)) return -1;
  }

  return judge;
}
