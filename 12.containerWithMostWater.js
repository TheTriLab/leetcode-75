// Challenge https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxContainer = 0
    let i = 0
    let j = height.length - 1

    while (i < j) {
        const tempContainer = Math.min(height[i], height[j]) * (j - i)
        if (tempContainer > maxContainer) {
            maxContainer = tempContainer
        }
        if (height[i] < height[j]) {
            i++
        } else {
            j--
        }
    }

    return maxContainer
};