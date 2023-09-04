// problem
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// solution
var intersection = function(nums1, nums2) {
    const ans = []
    const higher = nums1.length > nums2.length ? nums1 : nums2
    const lower = nums1.length > nums2.length ? nums2 : nums1

    for(let i=0; i<higher.length; i++){
        if(higher.includes(lower[i]) && !ans.includes(lower[i])){
            ans.push(lower[i])
        }
    }
    return ans
};
