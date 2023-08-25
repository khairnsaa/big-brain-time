// problem
// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

 

// Example 1:

// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

// solution
var countConsistentStrings = function(allowed, words) {
    let totalSame = 0
    let splittedWord = allowed.split('')
    for(let i=0; i<words.length; i++){
        let includedAllowed = 0
        for(let j=0; j<words[i].length; j++){
            if(splittedWord.includes(words[i][j])) includedAllowed++
        }
        if(includedAllowed === words[i].length) totalSame++
    }
    return totalSame
};
