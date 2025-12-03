// problem
// Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.

// Example 1:
// Input: s = "(1+(2*3)+((8)/4))+1"
// Output: 3
// Explanation: Digit 8 is inside of 3 nested parentheses in the string

function maxDepth(s: string): number {
    let answer: number = 0
    let x = 0
    for(let i = 0; i< s.length; i++){
        if(s[i] === "("){
            x += 1
        } else if(s[i] === ")"){
            x -= 1
        }
        answer = Math.max(x, answer)
    }
    return answer
};
