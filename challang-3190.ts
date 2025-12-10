// You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums.
// Return the minimum number of operations to make all elements of nums divisible by 3.
// Example
// Input: nums = [3,6,9]
// Output: 0

function minimumOperations(nums: number[]): number {
    let answer: number = 0
    for(let i = 0; i< nums.length; i++){
        if(nums[i] % 3 !== 0) answer++
    }

    return answer
};
