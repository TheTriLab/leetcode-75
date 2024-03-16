// Challenge https://leetcode.com/problems/find-the-difference-of-two-arrays/
// Solution Reference https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/3480500/simple-js-solution-with-set/?envType=study-plan-v2&envId=leetcode-75


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let nums1Set = new Set(nums1)
    let nums2Set = new Set(nums2)

    for (let item of nums1Set) {
        if (nums2Set.has(item)) {
            nums1Set.delete(item)
            nums2Set.delete(item)
        }
    }

    return [[...nums1Set], [...nums2Set]]
};


// First Try

// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[][]}
//  */
// var findDifference = function(nums1, nums2) {
//     let answer = []
//     let nums1Set = [...new Set(nums1)]
//     let nums2Set = [...new Set(nums2)]

//     answer[0] = nums1Set.filter(e => !nums2Set.includes(e))
//     answer[1] = nums2Set.filter(e => !nums1Set.includes(e))

//     return answer
// };
