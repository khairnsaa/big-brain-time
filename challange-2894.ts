// You are given positive integers n and m.
// Define two integers as follows:
// num1: The sum of all integers in the range [1, n] (both inclusive) that are not divisible by m.
// num2: The sum of all integers in the range [1, n] (both inclusive) that are divisible by m.
// Return the integer num1 - num2.

function differenceOfSums(n: number, m: number): number {
    const divisible = []
    const nonDivisible = []
    let totalDivisible = 0
    let totalNonDivisible = 0
    for(let i = 1; i<= n; i++){
        if(i%m === 0) divisible.push(i)
        else nonDivisible.push(i)
    }
    totalDivisible = divisible.reduce((a,b) => a + b, 0)
    totalNonDivisible = nonDivisible.reduce((a,b) => a + b, 0)
    return totalNonDivisible - totalDivisible
};
