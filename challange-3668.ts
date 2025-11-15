// You are given an integer array order of length n and an integer array friends.
// order contains every integer from 1 to n exactly once, representing the IDs of the participants of a race in their finishing order.
// friends contains the IDs of your friends in the race sorted in strictly increasing order. Each ID in friends is guaranteed to appear in the order array.
// Return an array containing your friends' IDs in their finishing order.

// Example
// Input: order = [3,1,2,5,4], friends = [1,3,4]
// Output: [3,1,4]
// Explanation:
// The finishing order is [3, 1, 2, 5, 4]. Therefore, the finishing order of your friends is [3, 1, 4].

function recoverOrder(order: number[], friends: number[]): number[] {
    const result = []
    for(let i=0; i<order.length; i++){
        for(let j=0; j<friends.length; j++){
            if(order[i] === friends[j]){
                result.push(order[i])
            }
        }
    }
    return result
};
