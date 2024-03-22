// Challenge https://leetcode.com/problems/decode-string
// Solution Reference https://leetcode.com/problems/decode-string/solutions/384193/javascript-easy-to-understand-using-stack-44ms/?envType=study-plan-v2&envId=leetcode-75
// Time Taken: 1h25m (not complete)

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = []

    // Traversal the string s and push into a stack for non-] character
    for (const char of s) {
        if (char !== ']') {
            stack.push(char)
            continue
        }

        // When we meets the ] character, we should do these steps
        let cur = stack.pop()
        let str = ''

        // - pop all characters until meets [
        while (cur !== '[') {
            str = cur + str
            cur = stack.pop()
        }

        // - pop all numbers to get the repeat count
        let num = ''
        cur = stack.pop()
        while(!Number.isNaN(Number(cur))) {
            num = cur + num
            cur = stack.pop()
        }
        stack.push(cur)

        // - repeat the substring and push it back to stack
        stack.push(str.repeat(Number(num)))
    }

    return stack.join('')
};