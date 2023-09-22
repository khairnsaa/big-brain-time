// problem
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. 
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true

// solution
var isSubsequence = function(s, t) {
    let p1 = 0
    let p2 = 0
    if(t.length==0 && s.length!==0) return false
    while(p1 < s.length && p2 < t.length){
        if(s[p1] == t[p2]){
            p1++
        } else if(p2==t.length-1) {
            return false
        } 
        p2++
    }
    if(p1 < s.length && p2==t.length) return false
    return true
};
