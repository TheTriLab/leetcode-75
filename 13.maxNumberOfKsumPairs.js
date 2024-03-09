// Challenge https://leetcode.com/problems/max-number-of-k-sum-pairs/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    
    let count = 0
    let i = 0
    let j = nums.length
    nums = nums.sort((a,b) => a - b)

    while (i < j) {
        const sum = nums[i] + nums[j]

        if (sum === k) {
            count++
            i++
            j--
        } else if (sum < k) {
            i++
        } else {
            j--
        }
    }

    return count
};