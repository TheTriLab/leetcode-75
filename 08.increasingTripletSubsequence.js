// Challenge https://leetcode.com/problems/increasing-triplet-subsequence/
// Solution Reference https://leetcode.com/problems/increasing-triplet-subsequence/solutions/3794495/javascript-o-n-solution-with-explanation/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let min = Math.max(...nums);
    let mid = min;

    for (num of nums) {
        if (num <= min) {
            min = num;
        } else if (num <= mid)  {
            mid = num;
        } else {
            return true;
        }
    }
    
    return false;
};