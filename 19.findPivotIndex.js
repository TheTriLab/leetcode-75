// Challenge https://leetcode.com/problems/find-pivot-index/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
    let countLeft = 0
    let countRight = 0
    
    nums.forEach(e => countRight += e)

    for (let i = 0; i < nums.length; i++) {
        countRight -= nums[i]

        if (countLeft === countRight) {
            return i
        }

        countLeft += nums[i]
    }
    
    return -1
};

