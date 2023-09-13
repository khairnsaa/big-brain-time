// problem
// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.
// For each index i, names[i] and heights[i] denote the name and height of the ith person.
// Return names sorted in descending order by the people's heights.
// Example 1:

// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.

// solution
var sortPeople = function(names, heights) {
    for(let i=0; i<heights.length; i++){
        let min = Infinity; // Initialize min to positive infinity
        let minHeightIdx = i; // Initialize minHeightIdx to the current index
        // Find the minimum height and its index
        for(let j = i; j < heights.length; j++) {
            if(heights[j] < min) {
                min = heights[j];
                minHeightIdx = j;
            }
        }
        // Swap heights and names
        let tempHeight = heights[i];
        let tempName = names[i];
        heights[i] = min;
        names[i] = names[minHeightIdx];
        heights[minHeightIdx] = tempHeight;
        names[minHeightIdx] = tempName;
    }
    return names.reverse()
};
