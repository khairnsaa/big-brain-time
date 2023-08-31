// problem
// You are given the head of a linked list, which contains a series of integers separated by 0's. The beginning and end of the linked list will have Node.val == 0.
// For every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. The modified list should not contain any 0's.
// Return the head of the modified linked list.
// Example 1:
// Input: head = [0,3,1,0,4,5,2,0]
// Output: [4,11]
// Explanation: 
// The above figure represents the given linked list. The modified list contains
// - The sum of the nodes marked in green: 3 + 1 = 4.
// - The sum of the nodes marked in red: 4 + 5 + 2 = 11.

// solution
var mergeNodes = function(head) {
    let ansArray = []
    let currentAns = 0
    while(head){
        if(head.val!== 0) currentAns+=head.val
        if(head.val== 0 && currentAns !== 0) {
            ansArray.push(currentAns)
            currentAns = 0
        }
        head=head.next
    }
    let ans = new ListNode(ansArray[0])
    let current = ans
    for(let i=1; i<ansArray.length; i++){
        current.next = new ListNode(ansArray[i])
        current=current.next
    }
    return ans
};
