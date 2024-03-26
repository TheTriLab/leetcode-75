// Challenge https://leetcode.com/problems/reverse-linked-list/
// Solution Reference https://leetcode.com/problems/reverse-linked-list/solutions/4903845/beat-100-0-ms/?envType=study-plan-v2&envId=leetcode-75

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
var reverseList = function(head) {
    let prev = null
    let cur = head

    while (cur !== null) {
        let nextTemp = cur.next
        cur.next = prev
        prev = cur
        cur = nextTemp
    }

    return prev
};