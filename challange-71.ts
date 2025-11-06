// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

function climbStairs(n: number): number {
    if(n<=2) return n

    let prev1 = 2;
    let prev2 = 1
    let curr;

    for(let i = 3; i<=n; i++){
        curr = prev1 + prev2
        prev2 = prev1
        prev1 = curr
    }

    return curr
};
