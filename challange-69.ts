// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well
// Example
// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.


// easy way
function mySqrt(x: number): number {
    return Math.floor(Math.sqrt(x))
};

// binary search ways
function mySqrt(x: number): number {
    if(x < 2) return x
    let low = 0, high= x
    let mid;
    while (low <= high){
        mid = Math.floor((low + high) / 2)
        if(mid * mid === x) {
            return mid
        } else if (mid * mid > x){
            high = mid -1
        } else {
            low = mid + 1
        }
    }
    return high
};
