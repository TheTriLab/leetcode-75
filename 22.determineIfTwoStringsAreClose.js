// Challenge https://leetcode.com/problems/determine-if-two-strings-are-close/
// Solution Reference https://leetcode.com/problems/determine-if-two-strings-are-close/solutions/4561223/beats-99-46-users-c-java-python-javascript-explained/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    let freq1 = new Array(26).fill(0)
    let freq2 = new Array(26).fill(0)

    // Frequency counting
    for (let ch of word1) {
        freq1[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }

    for (let ch of word2) {
        freq2[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }

    // Checking presence of characters to ensures that both words contain the same set of characters
    for (let i = 0; i < 26; i++) {
        if ((freq1[i] === 0 && freq2[i] !== 0) || (freq1[i] !== 0 && freq2[i] === 0)) {
            return false
        }
    }

    // Sorting frequencies because the order of frequencies doesn't matter, only their values
    freq1.sort((a, b) => a - b)
    freq2.sort((a, b) => a - b)

    for (let i = 0; i < 26; i++) {
        if (freq1[i] !== freq2[i]) {
            return false
        }
    }

    return true
};