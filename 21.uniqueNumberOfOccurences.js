// Challenge https://leetcode.com/problems/unique-number-of-occurrences/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let countMap = new Map()
    

    for (let i = 0; i < arr.length; i++) {
        countMap.set(arr[i], countMap.get(arr[i]) + 1 || 1)
    }

    const countSet = new Set()

    for (const freq of countMap.values()) {
        if (countSet.has(freq)) {
            return false
        }

        countSet.add(freq)
    }

    return true
};