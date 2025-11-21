// You are given a string s consisting of lowercase English letters ('a' to 'z').
// Your task is to:
// Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
// Find the consonant (all other letters excluding vowels) with the maximum frequency.
// Return the sum of the two frequencies.
// Note: If multiple vowels or consonants have the same maximum frequency, you may choose any one of them. 
// If there are no vowels or no consonants in the string, consider their frequency as 0.
// The frequency of a letter x is the number of times it occurs in the string.

function maxFreqSum(s: string): number {
    const vowels: Set<string> = new Set(["a","i","u","e","o"]);
    let vowelSet: Map<string, number> = new Map()
    let consonantSet = new Map()
    let maxVowel: number = 0
    let maxConsonant: number = 0

    for(const letter of s){
        if(vowels.has(letter)){
            vowelSet.set(letter, (vowelSet.get(letter) || 0) + 1)
        } else {
            consonantSet.set(letter, (consonantSet.get(letter) || 0) + 1)
        }
    }
    for(const [key, count] of vowelSet){
        if(maxVowel < count) {
            maxVowel = count
        }
    }
    for(const [key, count] of consonantSet){
        if(maxConsonant < count) {
            maxConsonant = count
        }
    }
    return maxConsonant + maxVowel
};
