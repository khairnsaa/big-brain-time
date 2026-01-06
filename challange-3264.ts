// You are given an integer array nums, an integer k, and an integer multiplier.
// You need to perform k operations on nums. In each operation:
// Find the minimum value x in nums. If there are multiple occurrences of the minimum value, select the one that appears first.
// Replace the selected minimum value x with x * multiplier.
// Return an integer array denoting the final state of nums after performing all k operations.

// Example
// Input: nums = [1,2], k = 3, multiplier = 4
// Output: [16,8]
// Explanation:
// Operation	Result
// After operation 1	[4, 2]
// After operation 2	[4, 8]
// After operation 3	[16, 8]

// brute force solution
function getFinalState(nums: number[], k: number, multiplier: number): number[] {
    for(let i=1; i<=k; i++){
        let smallestNum: number = [...nums].sort((a,b) => a-b)[0]
        for(let j=0; j<nums.length; j++){
            if(nums[j] <= smallestNum) {
                smallestNum = nums[j]
                nums[j] = smallestNum * multiplier
                break
            }
        }
    }
    return nums
};
