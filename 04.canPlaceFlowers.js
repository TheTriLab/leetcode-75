// Challenge https://leetcode.com/problems/can-place-flowers

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length && n; i++) {
        if (!flowerbed[i] && !flowerbed[i - 1] && !flowerbed[i + 1]) {
            n--
            flowerbed[i] = 1
        }
    }

    return !n
};