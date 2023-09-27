// problem
// You are given an array of strings words and a string pref.
// Return the number of strings in words that contain pref as a prefix.
// A prefix of a string s is any leading contiguous substring of s.
  
// Example 1:
// Input: words = ["pay","attention","practice","attend"], pref = "at"
// Output: 2
// Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".

// solution
var prefixCount = function(words, pref) {
    let ans = 0
    for(let i=0; i<words.length; i++){
        if(words[i].startsWith(pref)) ans++
    }
    return ans
};
