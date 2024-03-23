// Challenge https://leetcode.com/problems/number-of-recent-calls/
// Time Taken: 28min (15min read the description with the help of ChatGPT)


var RecentCounter = function() {
    this.requests = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.requests.push(t)

    while (this.requests[0] < t - 3000) {
        this.requests.shift()
    }

    return this.requests.length
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */