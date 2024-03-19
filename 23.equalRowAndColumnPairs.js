// Challenge https://leetcode.com/problems/equal-row-and-column-pairs/

// Solution 01: Brute Force
// Time Taken: ~ 45 minutes to complete
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let pairCount = 0
    // Go to each row
    for (let row = 0; row < grid.length; row++) {
        // In each row, go to each column
        for (let column = 0; column < grid.length; column++) {
            // In each column, compare row element and column element
            let isEqual = true
            for (let columnItem = 0; columnItem < grid.length; columnItem++) {
                if (grid[row][columnItem] !== grid[columnItem][column]) {
                    isEqual = false
                    break
                }
            }

            if (isEqual) {
                pairCount++
            }
        }
        
    }

    return pairCount
};

// Solution 02: Using Hash Map
// Solution Reference: https://leetcode.com/problems/equal-row-and-column-pairs/solutions/3630850/hash-table-python-js-solution/?envType=study-plan-v2&envId=leetcode-75
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let pairCount = 0
    let rowMap = new Map()
    
    // Stringify each row. The same row will be incremented
    for (let i = 0; i < grid.length; i++) {
        const row = JSON.stringify(grid[i])

        rowMap.set(row, 1 + (rowMap.get(row) || 0))
    }

    // Loop each row, stringify it and compare to row string in hashmap
    for (let j = 0; j < grid.length; j++) {
        const column = JSON.stringify(grid.map(row => row[j]))
        
        pairCount += (rowMap.get(column) || 0)
    }


    return pairCount
};