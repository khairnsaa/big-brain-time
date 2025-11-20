// In the town of Digitville, there was a list of numbers called nums containing integers from 0 to n - 1. 
// Each number was supposed to appear exactly once in the list, however, two mischievous numbers sneaked in an additional time, making the list longer than usual.
// As the town detective, your task is to find these two sneaky numbers. 
// Return an array of size two containing the two numbers (in any order), so peace can return to Digitville.

// Input: nums = [0,1,1,0]
// Output: [0,1]
// Explanation:
// The numbers 0 and 1 each appear twice in the array.

function getSneakyNumbers(nums: number[]): number[] {
    let numsMap: Map<number, number> = new Map()
    const result = []
    
    for(const num of nums){
        numsMap.set(num, (numsMap.get(num) || 0) + 1)
    }
    for(const [key, count] of numsMap){
        if(count > 1){
            result.push(key)
        }
    }
    return result
};
