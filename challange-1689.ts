// A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. 
// For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.
// Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.
// Hint: just return the max number from the string

// Example
// Input: n = "32"
// Output: 3
// Explanation: 10 + 11 + 11 = 32

function minPartitions(n: string): number {
    let result: number = 0;
    for(let i=0; i<n.length; i++){
        result = Math.max(result, Number(n[i]))
    }
    return result
};
