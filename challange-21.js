// problem
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.
// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// solution
var mergeTwoLists = function(list1, list2) {
    let list3 = new ListNode(0)
    let ans = list3

    // adding list 1 to list 3
    while(list1 || list2){
        if(list1) {
            ans.next= new ListNode(list1.val) 
            ans=ans.next
            list1=list1.next
        }
        if(list2) {
            ans.next= new ListNode(list2.val)  
            ans=ans.next
            list2=list2.next
        }
    }


    return insertionSort(list3.next)
};
function insertionSort(head) {
    if (!head || !head.next) {
        return head; // Base case: If the list is empty or has only one element, it's already sorted.
    }

    const dummy = new ListNode(0);
    dummy.next = head;
    let current = head;
    let prev = dummy;

    while (current) {
        if (current.next && current.next.val < current.val) {
            // Find the correct position to insert the current node.
            while (prev.next && prev.next.val < current.next.val) {
                prev = prev.next;
            }

            // Remove the current node from its current position.
            const temp = current.next;
            current.next = current.next.next;

            // Insert the current node after prev.
            temp.next = prev.next;
            prev.next = temp;

            // Reset prev to the dummy node for the next iteration.
            prev = dummy;
        } else {
            // Move to the next node if no insertion is needed.
            current = current.next;
        }
    }

    return dummy.next;
}
