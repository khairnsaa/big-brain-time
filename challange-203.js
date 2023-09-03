// problem
// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
// Example 1:
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

// solution
var removeElements = function(head, val) {
    let ans = new ListNode(0)
    let current = ans
    while(head){
        if(head.val !== val){
            current.next = new ListNode(head.val)
            current = current.next
        }
        head = head.next
    }
    return ans.next
}
