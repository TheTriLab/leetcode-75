// Challenge https://leetcode.com/problems/valid-parentheses/
// To support for the problem 394. Decode String (26.decodeString in this series)

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    const stack = []
    

    for (let i = 0; i < s.length; i++) {
        // Push all the open parentheses to the stack 
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i])
            continue
        } 

        // until the firts close parentheses, check if the last element in stack is in combo
        const temp = stack.pop()
        switch(temp) {
            case '(': {
                if (s[i] !== ')') {
                    return false
                }
                break
            }
            case '[': {
                if (s[i] !== ']') {
                    return false
                }
                break
            }
            case '{': {
                if (s[i] !== '}') {
                    return false
                }
                break
            }
            default:
                return false

        }
    }

    // If pass above and nothing left in stack, valid
    return !stack.length
};