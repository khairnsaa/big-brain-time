// problem
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Example 1:
// Input: head = [1,1,2]
// Output: [1,2]

// solution
var deleteDuplicates = function(head) {
    let ans = new ListNode(0)
    let current = ans
    while(head){
        if(head.val !== head.next?.val){
        current.next= new ListNode(head.val)
        current= current.next
        }
        head = head.next
    }
    return ans.next
};
