// Challenge https://leetcode.com/problems/merge-strings-alternately

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let mergedWord = ''
    const loopLength = word1.length < word2.length ? word2.length : word1.length

    for (let x = 0; x < loopLength; x++) {
        mergedWord += (word1[x] || '')
        mergedWord += (word2[x] || '')
    }

    return mergedWord
};