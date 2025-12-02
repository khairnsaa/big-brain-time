// Given a string s, calculate its reverse degree.
// The reverse degree is calculated as follows:
// For each character, multiply its position in the reversed alphabet ('a' = 26, 'b' = 25, ..., 'z' = 1) with its position in the string (1-indexed).
// Sum these products for all characters in the string.
// Return the reverse degree of s.

// Example:
// Input: s = "abc"
// Output: 148
// Explanation:
// 'a'	26	1	26
// 'b'	25	2	50
// 'c'	24	3	72
// The reversed degree is 26 + 50 + 72 = 148.

// SOLUTION

function reverseDegree(s: string): number {
    let result: number = 0

    for(let i=0; i< s.length; i++){
        const rank = 122 - s.charCodeAt(i) + 1
        result += rank * (i+1)
    }
    return result
};
