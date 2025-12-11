// You are given a 0-indexed integer array nums and an integer pivot. Rearrange nums such that the following conditions are satisfied:
// Every element less than pivot appears before every element greater than pivot.
//  element equal to pivot appears in between the elements less than and greater than pivot.
// The relative order of the elements less than pivot and the elements greater than pivot is maintained.
// More formally, consider every pi, pj where pi is the new position of the ith element and pj is the new position of the jth element. If i < j and both elements are smaller (or larger) than pivot, then pi < pj.
// Return nums after the rearrangement

// example
// Example 2:
// Input: nums = [-3,4,3,2], pivot = 2
// Output: [-3,2,4,3]

// solution 1
function pivotArray(nums: number[], pivot: number): number[] {
  const result = new Array(nums.length);
  let index = 0;

  for (const num of nums) {
      if (num < pivot) result[index++] = num;
  }
  for (const num of nums) {
      if (num === pivot) result[index++] = num;
  }
  for (const num of nums) {
      if (num > pivot) result[index++] = num;
  }

  return result;
};


// solution 2
function pivotArrayTwo(nums: number[], pivot: number): number[] {
    const biggerThanPivot: number[] = []
    const smallerThanPivot: number[] = []
    const pivotNumber: number[] = []
    for(let i=0; i<nums.length; i++){
        if(nums[i] < pivot){
            smallerThanPivot.push(nums[i])
        } else if(nums[i] > pivot) {
            biggerThanPivot.push(nums[i])
        } else {
            pivotNumber.push(nums[i])
        }
    }
    return [...smallerThanPivot, ...pivotNumber, ...biggerThanPivot]
};
