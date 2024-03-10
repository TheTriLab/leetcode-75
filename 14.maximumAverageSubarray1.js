// Challenge https://leetcode.com/problems/maximum-average-subarray-i/
// Solution Reference https://leetcode.com/problems/maximum-average-subarray-i/solutions/4195563/javascript-solution-with-o-n-time/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let left = 0
    let right = 0
    let sum = 0
    let max = -Infinity

    while (right < nums.length) {
        sum += nums[right]

        if (right - left + 1 === k) {
            max = Math.max(max, sum)
            sum -= nums[left]
            left++
        }

        right++
    }

    return max/k
};