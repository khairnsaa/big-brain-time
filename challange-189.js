// problem
// You are given two strings s and t.
// String t is generated by random shuffling string s and then add one more letter at a random position.
// Return the letter that was added to t.
  
// Example 1:
// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.

// solution
var findTheDifference = function(s, t) {
    let sumS = 0;
    let sumT = 0;

  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i); // Get the ASCII value of the character
    sumS += charCode;
  }

  for (let i = 0; i < t.length; i++) {
    const charCode = t.charCodeAt(i); // Get the ASCII value of the character
    sumT += charCode;
  }
  return String.fromCharCode(sumT-sumS)
};
