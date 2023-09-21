// problem
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).
  
// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// solution
var findMedianSortedArrays = function(nums1, nums2) {
    const mergedAndSorted = [...nums1, ...nums2].sort((a, b) => a - b)
    let ans
    if(mergedAndSorted.length %2 === 0){
        const firstValue = mergedAndSorted.length/2-1
        const secondValue = mergedAndSorted.length/2
        ans = (mergedAndSorted[firstValue] + mergedAndSorted[secondValue] )/ 2
    } else {
        ans = mergedAndSorted[Math.floor(mergedAndSorted.length/2)]
    }
    return ans
};
