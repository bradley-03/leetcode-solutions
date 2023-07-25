// https://leetcode.com/problems/power-of-four/

var isPowerOfFour = function(n) {
    return Math.log2(n) / 2 % 1 == 0
};

console.log(isPowerOfFour(64))