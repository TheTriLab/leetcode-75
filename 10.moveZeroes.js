// Challenge https://leetcode.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (let i = 0, j = 0; j < nums.length; i++, j++) {
        if (nums[i] === 0) {
            nums.push(0)
            nums.splice(i, 1)
            i--
        }
    }

    // Other similar solution
    // for(i=nums.length;i>=0;i--){
    //     if(nums[i]==0){
    //        nums.push(0)
    //        nums.splice(i,1)
    //     }
    // }
};