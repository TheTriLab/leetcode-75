// Challenge https://leetcode.com/problems/reverse-words-in-a-string/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = s.trim().replace(/\s+/g, ' ').split(' ')

    return arr.reverse().join(' ')
};