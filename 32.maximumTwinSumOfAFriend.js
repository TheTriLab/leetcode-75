// Challenge https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/
// Solution Reference https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solutions/1728750/beginner-friendly-java-javascript-python-solution/?envType=study-plan-v2&envId=leetcode-75

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let stack = []

    while (head != null) {
        stack.push(head.val)
        head = head.next
    }

    let max = 0
    for (let i = 0; i < stack.length; i++) {
        max = Math.max(max, (stack[i] + stack[stack.length - 1 -i]))
    }

    return max
};