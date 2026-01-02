// You are given an integer array nums with the following properties:
// nums.length == 2 * n.
// nums contains n + 1 unique elements.
// Exactly one element of nums is repeated n times.
// Return the element that is repeated n times.

// Example 1:
// Input: nums = [1,2,3,3]
// Output: 3

function repeatedNTimes(nums: number[]): number {
    const mapNums: Map<number, number> = new Map()
    const n = nums.length / 2

    for(let i=0; i<nums.length; i++){
        mapNums.set(nums[i], (mapNums.get(nums[i]) || 0 )+ 1)
    }
    for(const [key, count] of mapNums){
        if(count === n){
            return key
        }
    }
};

// solution 2
function repeatedNTimes(nums: number[]): number {
    for (let i = 0; i < nums.length - 2; i++) {
        if (
            nums[i] === nums[i + 1] ||
            nums[i] === nums[i + 2]
        ) {
            return nums[i]
        }
    }
    return nums[nums.length - 1]
};
