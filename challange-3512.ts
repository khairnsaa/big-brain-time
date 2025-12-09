// You are given an integer array nums and an integer k. You can perform the following operation any number of times:
// Select an index i and replace nums[i] with nums[i] - 1.
// Return the minimum number of operations required to make the sum of the array divisible by k.

// Example
// Input: nums = [4,1,3], k = 4
// Output: 0
// Explanation:
// The sum is 8, which is already divisible by 4. Hence, no operations are needed.

function minOperations(nums: number[], k: number): number {
    let answer: number = 0
    for(let i=0; i< nums.length; i++){
        answer += nums[i]
    }
    return answer%k
};
