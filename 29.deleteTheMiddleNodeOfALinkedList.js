// Challenge https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/
// Solution Reference https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/solutions/4705282/simple-beginner-friendly-dry-run-two-pointer-approach-time-o-n-space-o-1-gits/?envType=study-plan-v2&envId=leetcode-75
// Forgot how linked list works, so take the reference of the solution
// Review the linked list lesson later


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if (head === null) return null

    prev = new ListNode(0)
    prev.next = head
    slow = prev
    fast = head

    while(fast != null && fast.next != null) {
        slow = slow.next
        fast = fast.next.next
    }

    slow.next = slow.next.next
    return prev.next
};