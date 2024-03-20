// Challenge https://leetcode.com/problems/removing-stars-from-a-string/
// Time Taken: 13m20s to finish (5m to read)

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const result = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '*') {
            result.splice(result.length - 1, 1)
        } else {
            result.push(s[i])
        }
    }

    return result.join("")
};