// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

function isAnagram(s: string, t: string): boolean {
    return [...s].sort().join("") === [...t].sort().join("")
    // const sortedS = s.split("").sort().join("")
    // const sortedT = t.split("").sort().join("")

    // return sortedS === sortedT
};
