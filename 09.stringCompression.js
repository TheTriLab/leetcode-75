// Challenge https://leetcode.com/problems/string-compression/
// Solution Reference https://leetcode.com/problems/string-compression/solutions/3246103/very-easy-100-easiest-logic-ever-fully-explained-step-by-step-c-javascript-java/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let i = 0
    let j = 0

    while (j < chars.length) {
        let count = 0
        let curr = chars[j]

        while (j < chars.length && chars[j] === curr) {
            j++
            count++
        }

        chars[i++] = curr
        if (count > 1) {
            for (let digit of count.toString()) {
                chars[i++] = digit
            }
        }
    }

    return i
};