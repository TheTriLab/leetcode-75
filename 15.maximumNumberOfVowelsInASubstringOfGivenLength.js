// Challenge https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let maxVowels = 0
    let left = 0
    let right = 0
    let vowelCount = 0
    const vowels = 'ueoai'
    
    while (right < s.length) {
        if (vowels.includes(s[right])) {
            vowelCount++
        }
        
        if (right - left + 1 === k) {
            maxVowels = Math.max(maxVowels, vowelCount)
            
            if (vowels.includes(s[left++])) {
                vowelCount--
            }

            if (maxVowels === k) {
                return maxVowels
            }
        }

        right++
    }

    return maxVowels

    // Less Optimize Solution
    // let maxCount = 0
    // const vowels = 'ueoai'

    // for (let i = 0; i < s.length - k; i++) {
    //     let vowelCount = 0
    //     for (let j = i; j < i + k; j++) {
    //         if (vowels.includes(s[j])) {
    //             vowelCount++
    //         }
    //     }

    //     if (vowelCount > maxCount) {
    //         maxCount = vowelCount
    //     }
    // }

    // return maxCount
};