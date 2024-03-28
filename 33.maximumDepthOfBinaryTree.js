// Challenge https://leetcode.com/problems/maximum-depth-of-binary-tree/
// Solution Reference https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/4876170/beat-100-full-explanation-with-pictures/?envType=study-plan-v2&envId=leetcode-75

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0
    const leftDepth = maxDepth(root.left)
    const rightDepth = maxDepth(root.right)
    return Math.max(leftDepth, rightDepth) + 1
};