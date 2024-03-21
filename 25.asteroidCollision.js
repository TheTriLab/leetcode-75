// Challenge https://leetcode.com/problems/asteroid-collision/
// Solution Reference https://leetcode.com/problems/asteroid-collision/solutions/1563406/short-readable-solution/?envType=study-plan-v2&envId=leetcode-75
// Time Taken: 45 min (not complete)

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = []

    for (let i = 0; i < asteroids.length; i++) {
        const last = stack[stack.length - 1]
        const cur = asteroids[i]

        // Check if two asteroid are collided
        if (last > 0 & cur < 0) {
            // If two sizes are the same, pop from stack
            if (last + cur === 0) {
                stack.pop()
            // If the positive one are smaller than the negative one in size, pop the positive
            // Continue to compare the negative one with the last in stack
            } else if (Math.abs(last) < Math.abs(cur)) {
                stack.pop()
                i--
            }
        } else {
            stack.push(cur)
        }
    }

    return stack
};