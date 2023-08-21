// Problem
// Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

// Example 1:

// Input: nums = [1,2,2,1], k = 1
// Output: 4
// Explanation: The pairs with an absolute difference of 1 are:
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]

// Nested Loop Method
var countKDifference = function(nums, k) {
    let pairs = 0
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(Math.abs(nums[i]-nums[j]) === k){
                pairs++
            }
        }
    }    
    return pairs
};
