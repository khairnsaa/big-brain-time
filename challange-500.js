// problem
// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.
// In the American keyboard:
// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".

// Example 1:
// Input: words = ["Hello","Alaska","Dad","Peace"]
// Output: ["Alaska","Dad"]

// solution
var findWords = function(words) {
    const row1= 'qwertyuiop'
    const row2= 'asdfghjkl'
    const row3= 'zxcvbnm'
    let selectedRow= null
    const ans = []
    for(let i=0; i<words.length; i++){
        const lowered = words[i].toLowerCase()
        if(row1.split('').includes(lowered[0])) {
            selectedRow = row1
        } else if(row2.split('').includes(lowered[0])) {
            selectedRow = row2
        } else if(row3.split('').includes(lowered[0])) {
            selectedRow = row3
        }
        let passAll=0
        for(let j=0; j<lowered.length; j++){
            if(selectedRow.includes(lowered[j])){
                passAll++
            }
        }
        if(passAll=== lowered.length) ans.push(words[i])
    }
    return ans
};
