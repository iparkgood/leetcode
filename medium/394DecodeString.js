const decodeString = (s) => {

};

console.log(decodeString("3[a2[c]]")); //"accaccacc"
console.log(decodeString("2[abc]3[cd]ef")); //"abcabccdcdcdef"
console.log(decodeString("abc3[cd]xyz")); //"abccdcdcdxyz"