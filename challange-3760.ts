//You are given a string s consisting of lowercase English letters.
// Return an integer denoting the maximum number of substrings you can split s into such that each substring starts with a distinct character (i.e., no two substrings start with the same character).

// Example
// Input: s = "abab"
// Output: 2
// Explanation:
// Split "abab" into "a" and "bab".
// Each substring starts with a distinct character i.e 'a' and 'b'. Thus, the answer is 2.

function maxDistinct(s: string): number {
    let answer = new Set()

    for(const char of s){
        if(!answer.has(char)){
            answer.add(char)
        }
    }
    return answer.size
    
}
    
