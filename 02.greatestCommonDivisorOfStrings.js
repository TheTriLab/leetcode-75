// Challenge https://leetcode.com/problems/greatest-common-divisor-of-strings

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    const l = Math.min(str1.length, str2.length)
    if (str1 + str2 !== str2 + str1) return ''
    for (let i = l; i > 0; i--)
        if (!((str1.length % i) || (str2.length % i)))
            return str1.substring(0, i)
};