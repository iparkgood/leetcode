var isPalindrome = function (s) {
  let lowerCase = s.toLowerCase();
  let letters = lowerCase.replace(/[^a-z0-9]/g, "");

  let reverse = "";

  for (let i = letters.length - 1; i >= 0; i--) {
    reverse += letters[i];
  }

  return letters === reverse;
};
