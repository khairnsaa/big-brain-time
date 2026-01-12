// There are n mountains in a row, and each mountain has a height. You are given an integer array height where height[i] represents the height of mountain i, and an integer threshold.
// A mountain is called stable if the mountain just before it (if it exists) has a height strictly greater than threshold. Note that mountain 0 is not stable.
// Return an array containing the indices of all stable mountains in any order.

// example
// Input: height = [1,2,3,4,5], threshold = 2
// Output: [3,4]
// Explanation:
// Mountain 3 is stable because height[2] == 3 is greater than threshold == 2.
// Mountain 4 is stable because height[3] == 4 is greater than threshold == 2.

//summary of the problem. return the indices that previous value has greater than threshold

function stableMountains(height: number[], threshold: number): number[] {
  let answer: number[]   = []

  for(let i=1; i<height.length; i++){
    if(height[i-1] > threshold){
        answer.push(i)
    }
  }
  return answer
};
